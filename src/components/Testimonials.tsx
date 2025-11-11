import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      business: "Luxe Boutique",
      review: "Working with AdeshWeb was a game-changer for my business. She transformed my outdated store into a modern, high-converting machine. Sales increased by 300% in just two months!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      business: "FitGear Pro",
      review: "I've worked with several Shopify developers, but AdeshWeb stands out. Her attention to detail and understanding of e-commerce strategy is unmatched. My store looks professional and converts like crazy.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      business: "Eco Beauty Co",
      review: "AdeshWeb didn't just build me a store; she built me a brand. The design perfectly captures my vision, and the functionality makes managing inventory a breeze. Couldn't be happier!",
      rating: 5,
    },
    {
      name: "David Chen",
      business: "Tech Accessories Hub",
      review: "The ROI on hiring AdeshWeb was incredible. She optimized my product pages, streamlined checkout, and my conversion rate doubled. Best investment I've made in my business.",
      rating: 5,
    },
    {
      name: "Jessica Thompson",
      business: "Artisan Jewelry Studio",
      review: "AdeshWeb took my small jewelry business and made it look like a premium brand. Her design sense is impeccable, and she really understands what makes customers buy. Revenue is up 250%!",
      rating: 5,
    },
    {
      name: "Michael Anderson",
      business: "Urban Streetwear",
      review: "I was struggling with a DIY store that looked amateur. AdeshWeb redesigned everything and now my brand looks as professional as the big players. Customer trust has skyrocketed.",
      rating: 5,
    },
    {
      name: "Olivia Parker",
      business: "Wellness & Co",
      review: "AdeshWeb's expertise in Shopify is next level. She set up everything from subscription products to email automation. My store practically runs itself now, and sales keep growing!",
      rating: 5,
    },
    {
      name: "James Wilson",
      business: "Pet Paradise",
      review: "The store AdeshWeb built for me is fast, beautiful, and converts visitors into customers effortlessly. She understood my target audience perfectly and delivered beyond expectations.",
      rating: 5,
    },
    {
      name: "Sophia Martinez",
      business: "Home Décor Haven",
      review: "I can't say enough good things about working with AdeshWeb. She's responsive, professional, and truly cares about your success. My store went from struggling to thriving in weeks.",
      rating: 5,
    },
    {
      name: "Daniel Brown",
      business: "Gourmet Food Shop",
      review: "AdeshWeb helped me migrate from another platform to Shopify seamlessly. Zero downtime, better performance, and a design that makes my products look irresistible. Worth every penny!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear from business owners who've seen real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading font-bold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.business}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
