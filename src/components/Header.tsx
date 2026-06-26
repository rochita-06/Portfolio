import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={scrollToTop}
            className="text-header-name font-logo font-bold text-primary truncate hover:text-primary/80 transition-colors cursor-pointer"
          >
            <span className="hidden sm:inline">Gude Rochita</span>
            <span className="sm:hidden">Rochita</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              About
            </button>
             <button 
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("achievements")}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Button variant="ghost" size="icon" asChild className="h-8 w-8 lg:h-9 lg:w-9">
              <a href="https://github.com/rochita" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-8 w-8 lg:h-9 lg:w-9">
              <a href="https://linkedin.com/in/rochita-gude" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-8 w-8 lg:h-9 lg:w-9">
              <a href="mailto:rochitagude@gmail.com">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden h-8 w-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-card/95 backdrop-blur-md rounded-lg border border-primary/20 mx-2">
            <div className="flex flex-col space-y-4">
              {[
                { label: "About", section: "about" },
                { label: "Experience", section: "experience" },
                { label: "Skills", section: "skills" },
                { label: "Projects", section: "projects" },
                { label: "Achievements", section: "achievements" },
                { label: "Contact", section: "contact" },
              ].map(({ label, section }) => (
                <button 
                  key={label}
                  onClick={() => scrollToSection(section)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  {label}
                </button>
              ))}
              
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-primary/20">
                <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                  <a href="https://github.com/rochita" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                  <a href="https://linkedin.com/in/rochita-gude" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-9 w-9">
                  <a href="mailto:rochitagude@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;