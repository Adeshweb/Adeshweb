const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Client Results (Verified)
        </h2>

        <div className="space-y-6 text-foreground">
          <p className="text-lg leading-relaxed">
            "Rukayat redesigned our Shopify store. Sales increased 43% in 3 months." —{" "}
            <span className="font-semibold">The Urban Candle Co.</span>
          </p>

          <p className="text-lg leading-relaxed">
            "Faster load time + cleaner mobile design. Our bounce rate dropped by 27.4%." —{" "}
            <span className="font-semibold">Bloom &amp; Co. Jewelry</span>
          </p>

          <p className="text-sm text-muted-foreground italic">
            More testimonials available on my Upwork profile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
