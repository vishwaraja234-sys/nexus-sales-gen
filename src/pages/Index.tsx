import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSignals from "@/components/TrustSignals";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustSignals />
      <FeaturedProducts />
      
      {/* Newsletter & Offers Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="h-4 w-4 mr-1 fill-current" />
                Exclusive Offers
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Get 10% OFF Your First Order!
              </h2>
              <p className="text-muted-foreground text-lg">
                Join our newsletter and be the first to know about new arrivals, special offers, and exclusive deals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="hero-button">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              * Valid for new customers only. Terms and conditions apply.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust ShopNexus for their online shopping needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment: "Amazing quality and super fast delivery! The earbuds exceeded my expectations.",
                product: "Wireless Earbuds Pro"
              },
              {
                name: "Mike Chen",
                rating: 5,
                comment: "Great customer service and hassle-free returns. Will definitely shop here again!",
                product: "Smart Fitness Watch"
              },
              {
                name: "Emily Davis",
                rating: 5,
                comment: "Love the variety and competitive prices. The website is so easy to navigate.",
                product: "Minimalist Sneakers"
              }
            ].map((review, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-[var(--shadow-card)]">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.comment}"</p>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">Purchased: {review.product}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ShopNexus
              </h3>
              <p className="text-background/80 mb-4">
                Your trusted destination for quality products with fast, secure shipping worldwide.
              </p>
              <div className="trust-badge bg-success/20 text-success">
                ⭐ 4.9/5 Customer Rating
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Returns</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Electronics</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Fashion</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Home & Garden</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Sports</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Customer Support</h4>
              <ul className="space-y-2 text-background/80">
                <li>📧 support@shopnexus.com</li>
                <li>📞 1-800-SHOPNOW</li>
                <li>💬 Live Chat Available 24/7</li>
                <li>🕒 Mon-Sun: 9AM-9PM EST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 ShopNexus. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:shadow-xl z-50 bg-accent hover:bg-accent-hover"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default Index;