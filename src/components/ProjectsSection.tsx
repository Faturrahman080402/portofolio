import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics platform built with React and Node.js, featuring real-time data visualization and advanced reporting capabilities.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "Modern shopping application with intuitive UI, secure payment processing, and seamless user experience across all devices.",
      image: project2,
      technologies: ["React Native", "Firebase", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Creative Portfolio Site",
      description: "An elegant portfolio website for digital artists, featuring dynamic galleries, smooth animations, and responsive design.",
      image: project3,
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "SaaS Analytics Platform",
      description: "Enterprise-level analytics solution with advanced data processing, custom dashboards, and team collaboration features.",
      image: project4,
      technologies: ["React", "TypeScript", "PostgreSQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Intuitive project management tool with drag-and-drop functionality, team collaboration, and productivity tracking.",
      image: project5,
      technologies: ["Vue.js", "Python", "Docker", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "API Documentation Portal",
      description: "Developer-friendly documentation platform with interactive examples, testing tools, and comprehensive guides.",
      image: project6,
      technologies: ["Gatsby", "GraphQL", "Markdown", "Netlify"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, ranging from web applications to mobile solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-card-gradient border-border/50 shadow-subtle-glow hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/50 text-primary hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;