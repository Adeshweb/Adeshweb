import { MessageSquare, Search, Palette, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "We discuss your brand, goals, and what you want your store to achieve.",
      number: "01",
    },
    {
      icon: Search,
      title: "Research & Strategy",
      description: "I analyze your market, competitors, and identify the best e-commerce strategies.",
      number: "02",
    },
    {
      icon: Palette,
      title: "Design & Build",
      description: "I design a visually appealing store and build it to be fully functional and optimized for sales.",
      number: "03",
    },
    {
      icon: Rocket,
      title: "Launch & Optimize",
      description: "After launch, I monitor performance, make adjustments, and ensure your store keeps growing.",
      number: "04",
    },
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            How I Work
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process to transform your vision into a thriving online store
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="ml-8">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
