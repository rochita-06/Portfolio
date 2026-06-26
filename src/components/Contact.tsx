import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Let's"
          highlight="Connect"
          description="I'm always interested in discussing new opportunities, collaborations, and innovative projects. Feel free to reach out!"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card variant="elevated">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:rochitagude@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        rochitagude@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:+918331097889" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 8331097889
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links & Actions */}
            <Card variant="elevated">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Connect Online
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a 
                      href="https://github.com/rochita" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Github className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                      View GitHub Profile
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="glass" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a 
                      href="https://linkedin.com/in/rochita-gude" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Linkedin className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                      Connect on LinkedIn
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="hero" 
                    className="w-full justify-center" 
                    asChild
                  >
                    <a href="mailto:rochitagude@gmail.com">
                      <Mail className="h-5 w-5 mr-3" />
                      Send Me an Email
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-4 glass rounded-xl">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Open to opportunities:</strong><br />
                    Full-stack development, AI/ML projects, internships, and collaborative projects
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "CGPA", value: "8.64" },
              { label: "Projects", value: "2" },
              { label: "Certifications", value: "3" },
              { label: "Skills", value: "20+" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-4 text-center hover:border-cyan-400/30 hover:shadow-glow transition-all duration-300"
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;