import { Palette, RefreshCw, TrendingUp, Package, Zap, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Store Design & Customization",
      description: "Beautiful, conversion-focused Shopify stores tailored to your brand identity.",
    },
    {
      icon: RefreshCw,
      title: "Store Redesign & Optimization",
      description: "Transform your existing store into a high-converting sales machine.",
    },
    {
      icon: TrendingUp,
      title: "Marketing & Promotion",
      description: "Strategic ads, SEO, and content marketing to drive targeted traffic and sales.",
    },
    {
      icon: Package,
      title: "E-commerce Branding",
      description: "Cohesive visual design that makes your brand memorable and trustworthy.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your store and improve user experience for better conversions.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing updates, troubleshooting, and support to keep your store running smoothly.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service e-commerce solutions to help your online store thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
