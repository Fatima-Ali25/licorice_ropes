import Image from "next/image";
import { Link, ShoppingCart } from "lucide-react";
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
    <Card className={`w-72 h-80 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 group ${className}`}>
      {/* Product Image Container */}
      <div className="relative h-48 bg-[#F5F5DC] flex items-center justify-center overflow-hidden">

        {/* Product Image - Licorice rope simulation */}
        <Image
          src={product.image}
          alt={product.name}
          width={80}
          height={80}
          className="object-cover w-52 h-52"
        />

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
        <CardTitle className="text-black text-xl mb-1 font-semibold font-poppins">
          {product.name}
        </CardTitle>

        {/* Description */}
        <CardDescription className="text-[#C4C4C4] text-lg font-medium mb-4 font-poppins">
          {product.description}
        </CardDescription>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Current Price */}
            <span className="text-[#E7AB3C] font-medium text-xl">
              ${product.currentPrice.toFixed(2)}
            </span>

            {/* Original Price */}
            <span className="text-[#C4C4C4] text-lg line-through font-medium font-poppins">
              ${product.originalPrice.toFixed(0)}
            </span>
          </div>

          {/* Add to Cart Button */}
         <Link href={`/products/${product.id}`}>
            <Image src="/svg/Icon.svg" alt="Add to Cart" width={20} height={20} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;