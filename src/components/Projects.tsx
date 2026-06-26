import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/SectionHeader";
import { Github, ExternalLink, Award, Shield, FileSearch, type LucideIcon } from "lucide-react";

interface Project {
	title: string;
	description: string;
	technologies: string[];
	gradient: string;
	icon: LucideIcon;
	github: string;
	featured?: boolean;
}

const personalProjects: Project[] = [
	{
		title: "Cyber Threat Dashboard",
		description:
			"A real-time cybersecurity dashboard to monitor threats, network activity, and security alerts. Features interactive data visualizations and analytics panels for tracking system performance and cyber threat insights.",
		technologies: [
			"React.js",
			"JavaScript",
			"Data Visualization",
			"REST APIs",
			"Responsive UI",
		],
		gradient: "from-cyan-500 to-blue-600",
		icon: Shield,
		github: "https://github.com/rochita",
		featured: true,
	},
	{
		title: "AI Resume Screening System",
		description:
			"An AI-powered resume screening web application with drag-and-drop PDF upload, glassmorphism UI, and n8n webhook automation for automated resume submission workflows.",
		technologies: [
			"JavaScript",
			"HTML/CSS",
			"n8n",
			"AI/ML",
			"Webhook Automation",
		],
		gradient: "from-purple-500 to-pink-600",
		icon: FileSearch,
		github: "https://github.com/rochita",
		featured: true,
	},
];

const Projects = () => {
	return (
		<section id="projects" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6">
				<SectionHeader
					title="Featured"
					highlight="Projects"
					description="A showcase of projects demonstrating full-stack development, data science, and AI-powered web applications"
				/>

				<div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
					{personalProjects.map((project, index) => {
						const Icon = project.icon;
						return (
							<Card
								key={index}
								variant="glass"
								className="hover:scale-[1.02] group"
							>
								<CardHeader className="p-0">
									<div className="relative overflow-hidden rounded-t-lg">
										<div
											className={`w-full h-48 sm:h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
										>
											<Icon className="h-16 w-16 sm:h-20 sm:w-20 text-white/80" />
										</div>
										{project.featured && (
											<div className="absolute top-3 sm:top-4 right-3 sm:right-4">
												<Badge variant="glass" className="text-primary text-xs">
													<Award className="h-3 w-3 mr-1" />
													Featured
												</Badge>
											</div>
										)}
									</div>
								</CardHeader>

								<CardContent className="p-4 sm:p-6">
									<CardTitle className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
										{project.title}
									</CardTitle>

									<CardDescription className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-4">
										{project.description}
									</CardDescription>

									<div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
										{project.technologies.map((tech) => (
											<Badge key={tech} variant="glass" className="text-xs">
												{tech}
											</Badge>
										))}
									</div>

									<Button
										variant="outline"
										size="sm"
										className="w-full text-xs sm:text-sm"
										asChild
									>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="group/btn"
										>
											<Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
											View on GitHub
										</a>
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="text-center">
					<Button variant="glass" size="lg" asChild className="w-full xs:w-auto">
						<a
							href="https://github.com/rochita"
							target="_blank"
							rel="noopener noreferrer"
							className="group"
						>
							<Github className="h-4 w-4 sm:h-5 sm:w-5 mr-3 group-hover:rotate-12 transition-transform" />
							View All Projects on GitHub
							<ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 ml-3 group-hover:translate-x-1 transition-transform" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Projects;
