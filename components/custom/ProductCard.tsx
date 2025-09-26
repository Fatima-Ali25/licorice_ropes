import Image from "next/image";
<<<<<<< HEAD
import { ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
=======
import {  ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
>>>>>>> 1672470f795c07ff77e66f6c4dba89347aa21b53

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
<<<<<<< HEAD
    <Card className={`w-full  max-w-xs sm:w-64 md:w-72 h-auto sm:h-72 md:h-96 bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 group ${className}`}>
=======
<<<<<<< HEAD
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
=======
    <Card className={`w-full max-w-xs sm:w-64 md:w-72 h-auto sm:h-72 md:h-96 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 group ${className}`}>
>>>>>>> 05ed974f032a31352d303261157d4d699533ea75
      {/* Product Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 w-full bg-[#F5F5DC] flex items-center justify-center overflow-hidden">

        {/* Product Image - Licorice rope simulation */}
        <Image
          src={product.image}
          alt={product.name}
          width={80}
          height={80}
          className="object-cover w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"
        />
>>>>>>> 1672470f795c07ff77e66f6c4dba89347aa21b53

        {/* Discount Tag */}
        {product.discount && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#C50003] text-white text-xs font-bold px-2 py-1 rounded-sm shadow-sm">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
<<<<<<< HEAD
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
=======
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
            {/* Current Price */}
            <div className="flex gap-2 sm:gap-4">
            <span className="text-[#E7AB3C] text-lg sm:text-xl font-semibold">
              ${product.currentPrice.toFixed(2)}
            </span>

            {/* Original Price */}
            <span className="text-[#C4C4C4] text-sm sm:text-base md:text-lg line-through font-medium font-poppins">
              ${product.originalPrice.toFixed(0)}
            </span>
            </div>
          {/* Add to Cart Button */}
         <Link href={`/products`}>
         <ShoppingCart className="text-black font-semibold w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </Link>
>>>>>>> 1672470f795c07ff77e66f6c4dba89347aa21b53
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
