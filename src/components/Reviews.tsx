import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Reviews = () => {
  const reviews = [
    {
      title: "Set Up Product Reviews on Shopify (Pet Brand)",
      dates: "May 17, 2026 - May 22, 2026",
      quote:
        "Great job on the review setup for my pet accessories store. She matched the warm, friendly vibe I wanted and delivered fast. Good communication too.",
      badges: ["Committed to Quality", "Solution Oriented", "Clear Communicator"],
      price: "$15.00 Fixed price",
    },
    {
      title: "Shopify Product Uploader – Wedding Rings & Jewellery Store",
      dates: "May 13, 2026 - May 16, 2026",
      quote:
        "Working with Rukayat has been really easy and stress free. She uploaded all my products correctly, made sure every detail was accurate, and kept the store looking clean and organized. I did not have to chase her for updates or fix mistakes. She worked independently and got everything done without any back and forth. If you need someone reliable for Shopify product uploads, I highly recommend her. Thank you Rukayat!!",
      badges: ["Reliable", "Detail Oriented"],
      price: "$15.00 Fixed price",
    },
    {
      title: "Shopify Theme Customization & CJ dropshipping Integration",
      dates: "May 11, 2026 - May 14, 2026",
      quote:
        "She completed the theme customization and CJdropshipping button styling as requested and everything works correctly. Good experience.",
      badges: ["Committed to Quality", "Accountable for Outcomes", "Detail Oriented"],
      price: "$30.00 Fixed price",
    },
    {
      title: "Shopify Homepage Redesign – Clean & Modern Look (No Coding)",
      dates: "May 5, 2026 - May 7, 2026",
      quote:
        "Rukayat did a great job redesigning my Shopify homepage. The layout looks much cleaner now and the product grid works perfectly on mobile. She delivered on time as promised and she's always willing to learn and make changes no matter how many times I added new things. Will definitely hire again.",
      badges: [
        "Reliable",
        "Collaborative",
        "Solution Oriented",
        "Detail Oriented",
        "Accountable for Outcomes",
      ],
      price: "$20.00 Fixed price",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
            What My Upwork Clients Say
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Real reviews from verified contracts. Client names kept private by request.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground">5.0</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {review.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{review.dates}</p>

              <p className="text-foreground italic leading-relaxed mb-6 flex-grow">
                "{review.quote}"
              </p>

              <div className="flex flex-wrap gap-2">
                {review.badges.map((badge, i) => (
                  <Badge key={i} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
