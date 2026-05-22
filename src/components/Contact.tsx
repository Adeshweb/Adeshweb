import { Mail, Instagram, Facebook, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adeshweb3@gmail.com",
      href: "mailto:adeshweb3@gmail.com",
    },
    {
      icon: Briefcase,
      label: "Upwork",
      value: "Hire on Upwork",
      href: "https://www.upwork.com/freelancers/~01f56442a3320077a2",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@adeshweb3",
      href: "https://instagram.com/adeshweb3",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Connect on Facebook",
      href: "https://www.facebook.com/profile.php?id=61582307401241",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to build or grow your e-commerce store? Let's chat about your project!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target={info.icon !== Mail ? "_blank" : undefined}
                  rel={info.icon !== Mail ? "noopener noreferrer" : undefined}
                  className="group p-8 rounded-2xl bg-background shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {info.label}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">
                    {info.value}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-hover text-lg px-8 py-6"
            >
              <a href="mailto:adeshweb3@gmail.com">Send Me an Email</a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6"
            >
              <a
                href="https://www.upwork.com/freelancers/adeshweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my Upwork Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
