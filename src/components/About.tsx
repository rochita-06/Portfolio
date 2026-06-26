import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { GraduationCap, MapPin, Code, Palette, Database, Wrench, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="About"
            highlight="Me"
            description="B.Tech CS (Data Science) student passionate about Data Science, AI/ML and Full-Stack Web Development"
          />

          <Card variant="glass" className="mb-8 sm:mb-12 hover:scale-[1.01]">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                        <span className="text-5xl sm:text-6xl font-heading font-bold text-primary">GR</span>
                      </div>
                    </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <h3 className="text-responsive-3xl font-bold text-foreground text-center lg:text-left">
                    Data Science & Full-Stack Developer
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    I'm Rochita — a passionate B.Tech CS (Data Science) student at VNR VJIET with a strong foundation
                    in full-stack web development and data science. I love building intelligent, user-friendly applications
                    that blend modern web tech with AI/ML capabilities.
                  </p>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    From crafting responsive web interfaces to building AI-powered tools, I focus on clean code,
                    intuitive UX, and impactful solutions. I'm constantly exploring new technologies across the
                    data science and web development landscape.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience Section */}
          <Card id="experience" variant="glass" className="mb-8 sm:mb-12">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-responsive-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
                Work <span className="text-primary">Experience</span>
              </h3>
              
              <div className="relative">
                {/* Timeline line - hidden on mobile */}
                <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                {/* Experience entries */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Currently Studying */}
                  <div className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full border-4 border-primary/30 items-center justify-center relative">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
                    </div>
                    
                    <div className="flex-grow glass rounded-xl p-4 sm:p-6">
                      <div className="flex flex-col gap-3 mb-4">
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold text-primary">B.Tech CS (Data Science) Student</h4>
                          <p className="text-base sm:text-lg text-foreground font-medium">VNR Vignana Jyothi Institute of Engineering & Technology</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full font-medium">
                            2024 – Present
                          </div>
                          <div className="px-3 py-1 bg-secondary/10 text-secondary text-xs sm:text-sm rounded-full font-medium">
                            CGPA: 8.64
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Specializing in Data Science, Machine Learning, and Full-Stack Web Development.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Building AI-powered projects including Cyber Threat Dashboards and Resume Screening Systems.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Completed certifications from NPTEL (IIT Madras), Cisco, and Deloitte Australia.
                          </li>
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {["Python", "React.js", "Data Science", "AI/ML", "Full-Stack"].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-primary/5 text-primary text-xs rounded border border-primary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education and Location cards with responsive grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card variant="glass">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 glass rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm sm:text-base">B.Tech CS (Data Science)</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">VNR VJIET, 2024–Present • CGPA: 8.64</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">HSC – Narayana Junior College, 2024 • CGPA: 9.73</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">SSC – Narayana High School, 2022 • CGPA: 9.8</p>
                </div>
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 glass rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary">Location</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm sm:text-base">Hyderabad, India</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Available for remote work and collaboration</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack Section with responsive grid */}
          <Card id="skills" variant="glass">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-responsive-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
                Technology <span className="text-primary">Stack</span>
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Languages */}
                <div className="glass rounded-xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Code className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Languages</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["C", "C++", "Python", "JavaScript", "SQL", "R"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="glass rounded-xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Web Development</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "REST APIs"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="glass rounded-xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Databases</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["MySQL", "MongoDB", "Firebase", "Supabase", "Database Design", "CRUD Operations"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Services */}
                <div className="glass rounded-xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wrench className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Tools & Services</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Tableau", "Power BI"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other */}
                <div className="glass rounded-xl p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">ML & Data Science</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["Data Preprocessing", "EDA", "Supervised & Unsupervised Learning", "Neural Networks", "Clustering", "Model Evaluation", "Feature Engineering"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;