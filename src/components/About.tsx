import { Heart, TrendingUp, Users } from "lucide-react";
import profileImage from "@/assets/rukayat-profile.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients" },
    { icon: TrendingUp, value: "100+", label: "Stores Built" },
    { icon: Heart, value: "5★", label: "Client Rating" },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-card-hover">
                <img
                  src={profileImage}
                  alt="Rukayat Adesina - Shopify Expert"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Bio Text */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hey there 👋 I'm <span className="font-semibold text-foreground">Rukayat Adesina (AdeshWeb)</span>, 
                a passionate Shopify designer and e-commerce strategist. I help brands build, redesign, and 
                grow profitable online stores that truly stand out.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not working on a store, I'm learning new marketing trends, exploring creative 
                layouts, or helping others understand how to grow online. My mission is simple: turn your 
                creative ideas into e-commerce stores that actually sell.
              </p>
            </div>
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
