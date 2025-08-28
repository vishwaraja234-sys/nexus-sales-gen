import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  urgencyText?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  badge,
  urgencyText,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAddingToCart(false);
  };

  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="product-card group">
      {/* Image container */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {badge}
            </Badge>
          )}
          {discountPercentage > 0 && (
            <Badge variant="destructive">
              -{discountPercentage}%
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 hover:bg-background"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart
            className={`h-4 w-4 ${
              isWishlisted ? "fill-accent text-accent" : "text-foreground"
            }`}
          />
        </Button>

        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className="bg-background text-foreground hover:bg-background/90"
          >
            {isAddingToCart ? (
              "Adding..."
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Quick Add
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Product info */}
      <div className="p-4 space-y-3">
        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-warning text-warning"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating} ({reviews})
          </span>
        </div>

        {/* Product name */}
        <h3 className="font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="price-highlight">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Urgency text */}
        {urgencyText && (
          <p className="urgent-text text-sm">
            {urgencyText}
          </p>
        )}

        {/* Add to cart button */}
        <Button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className="w-full"
          variant="outline"
        >
          {isAddingToCart ? (
            "Adding to Cart..."
          ) : (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;