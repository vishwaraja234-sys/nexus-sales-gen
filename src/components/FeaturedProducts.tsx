import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import product images
import productSneakers from "@/assets/product-sneakers.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productMug from "@/assets/product-mug.jpg";
import productBackpack from "@/assets/product-backpack.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import heroEarbuds from "@/assets/hero-earbuds.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Wireless Earbuds Pro",
      price: 149,
      originalPrice: 199,
      image: heroEarbuds,
      rating: 4.9,
      reviews: 2847,
      badge: "Best Seller",
      urgencyText: "Only 5 left in stock!"
    },
    {
      id: "2",
      name: "Minimalist White Sneakers",
      price: 89,
      originalPrice: 120,
      image: productSneakers,
      rating: 4.7,
      reviews: 1523,
      badge: "Trending",
    },
    {
      id: "3",
      name: "Smart Fitness Watch",
      price: 299,
      image: productSmartwatch,
      rating: 4.8,
      reviews: 986,
      badge: "New",
    },
    {
      id: "4",
      name: "Ceramic Coffee Mug Set",
      price: 35,
      originalPrice: 45,
      image: productMug,
      rating: 4.6,
      reviews: 756,
      urgencyText: "Limited time offer"
    },
    {
      id: "5",
      name: "Travel Backpack Navy",
      price: 69,
      image: productBackpack,
      rating: 4.5,
      reviews: 432,
    },
    {
      id: "6",
      name: "Modern Table Lamp",
      price: 89,
      originalPrice: 110,
      image: productLamp,
      rating: 4.7,
      reviews: 321,
      badge: "Sale"
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our handpicked selection of trending products with amazing deals and fast shipping.
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Mobile view all button */}
        <div className="text-center md:hidden">
          <Button className="w-full sm:w-auto">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Categories quick links */}
        <div className="mt-16 p-8 bg-muted/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Electronics", count: "500+ items" },
              { name: "Fashion", count: "1200+ items" },
              { name: "Home & Garden", count: "800+ items" },
              { name: "Sports", count: "300+ items" },
            ].map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-background"
              >
                <span className="font-semibold">{category.name}</span>
                <span className="text-sm text-muted-foreground">{category.count}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;