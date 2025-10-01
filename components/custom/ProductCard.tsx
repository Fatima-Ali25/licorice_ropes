import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice?: number;
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

  // Truncate description to approximately 1 line (60 characters)
  const truncatedDescription = product.description.length > 60 
    ? product.description.substring(0, 60) + "..."
    : product.description;

  return (
    <div className="block w-full h-full">
      <Card className={`w-full h-[246px] border-0 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:scale-105 overflow-hidden flex flex-col bg-white ${className}`}>
        {/* Product Image Container */}
        <div className="relative h-[160px] w-full bg-[#F5F5DC] flex items-center justify-center overflow-hidden flex-shrink-0">
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={120}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain"
            priority={false}
            quality={95}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />

          {/* Discount Tag */}
          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-2 flex flex-col flex-grow bg-white">
          {/* Product Name */}
          <h2 className="text-gray-800 text-lg font-bold font-poppins mb-1">
            {product.name}
          </h2>

          {/* Description */}
          <div className="mb-2">
            <p className="text-gray-500 text-sm font-normal font-inter mb-1">
              {truncatedDescription}
            </p>
            
            {/* Read More Link */}
            {product.description.length > 60 && (
              <Link 
                href={`/product/${product.id}`}
                className="text-orange-500 text-sm font-medium hover:underline"
              >
                Read More
              </Link>
            )}
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between mt-auto">
            {/* Price Section */}
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-lg font-bold">
                ${product.currentPrice.toFixed(2)}
              </span>
              {product.originalPrice && product.originalPrice > product.currentPrice && (
                <span className="text-gray-400 text-sm line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart} 
              className="hover:scale-110 transition-transform duration-200 p-1"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="text-gray-700 w-5 h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
