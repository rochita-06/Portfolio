import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import AnimatedTagline from "./AnimatedTagline";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden px-4 sm:px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-7xl">
        <div className="space-y-6 sm:space-y-8">
          <div className="w-full flex justify-center">
            <h1 className="text-hero-name font-heading font-bold text-foreground animate-fade-in inline-block">
              <span className="bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
                Gude Rochita
              </span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground animate-fade-in delay-200">
            <AnimatedTagline />
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400 px-4">
            B.Tech Computer Science (Data Science) student at VNR VJIET with a focus on building
            intelligent web applications, AI-powered tools, and full-stack solutions. Passionate about
            Data Science, Machine Learning, and modern web development.
          </p>

          <div className="flex flex-col xs:flex-row gap-4 justify-center animate-fade-in delay-600 px-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProjects}
              className="group w-full xs:w-auto"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              asChild
              className="w-full xs:w-auto"
            >
              <a href="/G_Rochita_Resume.md" download="G_Rochita_Resume.md" className="group">
                Download Resume
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Tech Stack Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto animate-fade-in delay-800 px-4">
            {["React", "Python", "Data Science", "AI/ML"].map((tech, index) => (
              <div 
                key={tech}
                className="glass rounded-xl p-3 sm:p-4 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <span className="font-mono text-xs sm:text-sm text-primary font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;