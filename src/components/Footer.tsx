import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-heading text-2xl font-bold mb-4">
            Rukayat<span className="text-primary">.</span>
          </div>
          <p className="text-secondary-foreground/80 mb-6 max-w-md mx-auto">
            Shopify Expert & E-commerce Strategist helping brands build stores that actually sell.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-secondary-foreground/70">
            <span>© {currentYear} Rukayat Adesina. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for e-commerce success</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
