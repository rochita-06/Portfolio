import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  GEMINI_MODEL,
  ASSISTANT_NAME,
  ASSISTANT_GREETING,
  ASSISTANT_SYSTEM_PROMPT,
  ASSISTANT_SUGGESTIONS,
  ASSISTANT_CONTACT_EMAIL,
} from "@/lib/assistantData";

interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: ASSISTANT_GREETING,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    // Get API Key from environment variables
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Hello! To get active answers from the AI, please configure your `VITE_GEMINI_API_KEY` in the `.env.local` file. Currently running in offline demo mode.",
            timestamp: new Date(),
          },
        ]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      // Prepare message history formatted for Gemini API (user / model roles)
      // We map "sender: user" -> "user", "sender: bot" -> "model"
      const apiHistory = messages.map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      }));

      // Add current message to context history
      apiHistory.push({
        role: "user",
        parts: [{ text: textToSend }],
      });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: apiHistory,
            systemInstruction: {
              parts: [{ text: ASSISTANT_SYSTEM_PROMPT }],
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500,
            },
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const apiMessage = data?.error?.message ?? response.statusText;
        if (response.status === 429) {
          throw new Error("API rate limit reached. Please wait a moment and try again.");
        }
        if (response.status === 401 || response.status === 403) {
          throw new Error("Invalid API key. Please check VITE_GEMINI_API_KEY in .env.local");
        }
        throw new Error(apiMessage);
      }

      const botResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!botResponseText) {
        throw new Error("Received empty response from the AI model.");
      }

      const botMessage: Message = {
        sender: "bot",
        text: botResponseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: unknown) {
      console.error("AI Assistant Error:", err);
      const errorMessage =
        err instanceof Error ? err.message : "Failed to generate response. Please try again.";
      setError(errorMessage);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Sorry, I'm having trouble connecting to my brain right now. Please try again shortly or contact ${ASSISTANT_NAME} directly at ${ASSISTANT_CONTACT_EMAIL}!`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestionText: string) => {
    handleSend(suggestionText);
  };

  const suggestions = ASSISTANT_SUGGESTIONS;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center justify-center p-0 border border-primary/20"
          title={`Chat with ${ASSISTANT_NAME}'s AI Assistant`}
        >
          <MessageSquare className="h-6 w-6 animate-pulse" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-[350px] sm:w-[400px] h-[500px] flex flex-col bg-card/90 backdrop-blur-md border border-primary/20 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 animate-in slide-in-from-bottom-5">
          {/* Header */}
          <CardHeader className="bg-primary/10 border-b border-primary/15 p-4 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold flex items-center">
                  {ASSISTANT_NAME}'s Assistant
                  <Sparkles className="h-3.5 w-3.5 text-primary ml-1.5 animate-bounce" />
                </CardTitle>
                <span className="text-[10px] text-muted-foreground flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 animate-ping"></span>
                  Powered by Gemini AI
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          {/* Messages Container */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2.5 ${
                  msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Avatar */}
                <div
                  className={`h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold border ${
                    msg.sender === "user"
                      ? "bg-secondary text-secondary-foreground border-secondary/35"
                      : "bg-primary/10 text-primary border-primary/35"
                  }`}
                >
                  {msg.sender === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-muted text-foreground rounded-tl-none border border-border/50"
                  }`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="h-7 w-7 rounded-full bg-primary/10 text-primary border border-primary/35 flex items-center justify-center">
                  <Bot className="h-3 w-3" />
                </div>
                <div className="bg-muted text-muted-foreground rounded-2xl rounded-tl-none px-3.5 py-2 border border-border/50 flex space-x-1.5 items-center">
                  <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="h-1.5 w-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="flex items-center space-x-2 text-destructive bg-destructive/10 text-xs p-2.5 rounded-lg border border-destructive/20">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Quick Suggestion Chips */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 border-t border-border/40 bg-muted/20 flex flex-wrap gap-1.5">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-[11px] bg-card hover:bg-primary/5 border border-border/60 text-muted-foreground hover:text-primary rounded-full px-2.5 py-1 transition-all duration-200 cursor-pointer shadow-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <CardFooter className="p-3 border-t border-border/40 bg-card/50 flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Ask me a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              disabled={isLoading}
              className="flex-1 bg-muted/40 border-border/60 focus-visible:ring-primary/40 text-sm h-9"
            />
            <Button
              size="icon"
              className="h-9 w-9 rounded-xl flex items-center justify-center shadow-md bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
              onClick={() => handleSend(input)}
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default AIAssistant;
