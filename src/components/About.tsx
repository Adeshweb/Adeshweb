import { Heart, TrendingUp, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: TrendingUp, value: "100+", label: "Stores Built" },
    { icon: Heart, value: "5★", label: "Client Rating" },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hey there 👋 I'm <span className="font-semibold text-foreground">Rukayat Adesina</span>, 
              a passionate Shopify designer and e-commerce strategist. I help brands build, redesign, and 
              grow profitable online stores that truly stand out.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not working on a store, I'm learning new marketing trends, exploring creative 
              layouts, or helping others understand how to grow online. My mission is simple: turn your 
              creative ideas into e-commerce stores that actually sell.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-background shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="font-heading text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
