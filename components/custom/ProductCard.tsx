import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

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
    <Card
      className={`bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 group ${className}`}
    >
      {/* Product Image Container */}
      <div className="relative h-48 bg-[#FFF9F5] flex items-center justify-center overflow-hidden rounded-md">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundColor: product.backgroundColor }}
        />

        {/* Product Image */}
        <Link href={`/products/${product.id}`} className="relative z-10">
          <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            className="relative z-10 object-contain"
          />
        </Link>
        {/* Product Name with Link */}
        <Link href={`/products/${product.id}`}>
          <CardTitle className="text-black text-sm mb-1 font-bold hover:text-[#FF8C00] transition-colors">
            {product.name}
          </CardTitle>
        </Link>

        {/* Discount Tag */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm shadow-sm">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <CardContent className="p-4">
        <CardTitle className="text-black text-sm mb-1 font-bold">
          {product.name}
        </CardTitle>

        <CardDescription className="text-gray-400 text-xs mb-4">
          {product.description}
        </CardDescription>

        {/* Price + Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#FF8C00] font-bold text-sm">
              ${product.currentPrice.toFixed(2)}
            </span>
            <span className="text-gray-400 text-xs line-through">
              ${product.originalPrice.toFixed(0)}
            </span>
          </div>

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
