import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

// Product Interface
interface Product {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  discount: number | null;
  image: string;
  backgroundColor: string;
}

// ProductCard Props Interface
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductCard = ({ product, onAddToCart, className }: ProductCardProps) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Card className={`bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 group ${className}`}>
      {/* Product Image Container */}
      <div className="relative h-48 bg-[#F5F5DC] flex items-center justify-center overflow-hidden">
        {/* Background Color Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundColor: product.backgroundColor }}
        />
        
        {/* Product Image - Licorice rope simulation */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="flex flex-col gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <Image
                key={i}
                src={product.image}
                alt={product.name}
                width={20}
                height={3}
              />
            ))}
          </div>
        </div>

        {/* Logo Overlay */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-7 h-7 bg-white border-2 border-[#8B4513] rounded-full flex items-center justify-center shadow-sm">
            <div className="w-3 h-3 bg-[#8B4513] rounded-full"></div>
          </div>
        </div>

        {/* Discount Tag */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm shadow-sm">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <CardContent className="p-4">
        {/* Product Name */}
        <CardTitle className="text-black text-sm mb-1 font-bold">
          {product.name}
        </CardTitle>
        
        {/* Description */}
        <CardDescription className="text-gray-400 text-xs mb-4">
          {product.description}
        </CardDescription>
        
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Current Price */}
            <span className="text-[#FF8C00] font-bold text-sm">
              ${product.currentPrice.toFixed(2)}
            </span>
            
            {/* Original Price */}
            <span className="text-gray-400 text-xs line-through">
              ${product.originalPrice.toFixed(0)}
            </span>
          </div>
          
          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="w-7 h-7 bg-[#FF8C00] hover:bg-[#FF7F00] rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110"
          >
            <ShoppingCart className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;