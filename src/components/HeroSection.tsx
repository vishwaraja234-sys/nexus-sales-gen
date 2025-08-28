import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroEarbuds from "@/assets/hero-earbuds.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 mr-1 fill-current" />
                #1 Trending Product
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Premium Wireless
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}Audio Experience
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Discover crystal-clear sound quality with our latest collection of premium wireless earbuds. 
                Perfect for music lovers and professionals.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="trust-badge">
                ✓ Free Shipping
              </div>
              <div className="trust-badge">
                ✓ 30-Day Returns
              </div>
              <div className="trust-badge">
                ✓ 2-Year Warranty
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="hero-button text-lg px-8 py-6">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-6">
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right content - Product image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroEarbuds}
                alt="Premium Wireless Earbuds"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating price badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-xl shadow-lg">
                $149
                <span className="text-sm line-through ml-2 opacity-75">$199</span>
              </div>
              
              {/* Urgency indicator */}
              <div className="absolute bottom-4 left-4 bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium urgent-text">
                Only 5 left in stock!
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;