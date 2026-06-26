import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";
import { Award, Calendar } from "lucide-react";

const Achievements = () => {
  const certifications = [
    {
      title: "The Joy of Computing using Python",
      issuer: "NPTEL – IIT Madras",
      description:
        "Earned Elite Certification with a consolidated score of 86%. Covered computational thinking, Python programming fundamentals, and problem-solving through code.",
      date: "2024",
      type: "Elite Certification",
      score: "86%",
    },
    {
      title: "Data Science Essentials with Python",
      issuer: "Cisco",
      description:
        "Completed comprehensive training in data science fundamentals using Python, including data manipulation, analysis techniques, and practical data science workflows.",
      date: "2024",
      type: "Professional Certification",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte Australia",
      description:
        "Completed a hands-on job simulation covering real-world data analytics tasks, business problem-solving, and data-driven decision making in a professional consulting context.",
      date: "2024",
      type: "Job Simulation",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Achievements and Certifications"
          gradientTitle
          description="Recognitions and continuous learning through certifications and professional development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              variant="glass"
              className="group hover:scale-105 flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-base font-semibold leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <Badge variant="glass" className="text-xs px-2 py-1 text-primary shrink-0">
                        {cert.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm font-medium text-primary/80">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span className="font-medium">{cert.date}</span>
                  </div>
                  {cert.score && (
                    <Badge variant="glass" className="text-xs text-primary">
                      Score: {cert.score}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
