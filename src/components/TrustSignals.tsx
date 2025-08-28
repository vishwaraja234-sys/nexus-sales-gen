import { Shield, Truck, RotateCcw, CreditCard, Headphones, Award } from "lucide-react";

const TrustSignals = () => {
  const trustFeatures = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50 worldwide",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "256-bit SSL encryption",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
    },
    {
      icon: CreditCard,
      title: "Payment Options",
      description: "UPI, Cards, COD available",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Live chat & phone support",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "2-year product warranty",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose ShopNexus?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience through 
            trusted service and quality products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-medium">TRUSTED BY</div>
            <div className="flex items-center space-x-6">
              <div className="font-bold text-lg">50K+</div>
              <div className="font-bold text-lg">Customers</div>
              <div className="font-bold text-lg">★★★★★</div>
              <div className="font-bold text-lg">4.9/5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;