import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  discount: number | null;
  image: string;
  backgroundColor?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductCard = ({ product, onAddToCart, className }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Link href={`/product/${product.id}`} className=" flex items-center justify-center">
      <Card className={`w-full max-w-xs sm:w-64 md:w-72 md:items-center h-auto sm:h-72 md:h-96 bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:scale-105 ${className}`}>
        {/* Product Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 w-full bg-[#F5F5DC] flex items-center justify-center overflow-hidden">

          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            width={80}
            height={80}
            className="object-cover w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"
          />

          {/* Discount Tag */}
          {product.discount && (
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#C50003] text-white text-xs font-bold px-2 py-1 rounded-sm shadow-sm">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3 sm:p-2 w-full h-full flex flex-col">
          {/* Product Name */}
          <h2 className="text-black text-lg sm:text-xl font-semibold font-poppins">
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-[#C4C4C4] text-sm sm:text-base md:text-lg mb-2 font-medium font-inter">
            {product.description}
          </p>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between mt-auto">
            {/* Current + Original Price */}
            <div className="flex gap-2 sm:gap-4">
              <span className="text-[#E7AB3C] text-lg sm:text-xl font-semibold">
                ${product.currentPrice.toFixed(2)}
              </span>
              <span className="text-[#C4C4C4] text-sm sm:text-base md:text-lg line-through font-medium font-poppins">
                ${product.originalPrice.toFixed(0)}
              </span>
            </div>

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart} className="hover:scale-110 transition-transform duration-200">
              <ShoppingCart className="text-black w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
