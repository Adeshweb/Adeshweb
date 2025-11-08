import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "An Intimate Affaire",
      url: "anintimateaffaire.com",
      image: project1,
      description: "Elegant intimate apparel e-commerce store with sophisticated design",
    },
    {
      title: "My Pretty Strap",
      url: "myprettystrap.com",
      image: project2,
      description: "Fashion accessories store featuring modern product showcases",
    },
    {
      title: "Teddy Fresh",
      url: "teddyfresh.com",
      image: project3,
      description: "Bold streetwear brand with vibrant, engaging shopping experience",
    },
    {
      title: "Hope Rings",
      url: "hoperings.com",
      image: project4,
      description: "Premium jewelry store with elegant product presentations",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Successful e-commerce stores I've designed and built for amazing brands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-background shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
