import { siteData } from "@/content";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShoppingCart } from "lucide-react";

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

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { exploreItems } = siteData;
  const product = exploreItems.products.find(
    (p: Product) => p.id.toString() === params.id
  );

  if (!product) {
    return notFound();
  }

  return (
    <div className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="relative bg-[#FFF9F5] flex items-center justify-center rounded-lg p-8">
          <Image
            src={product.image}
            alt={product.name}
            width={350}
            height={350}
            className="object-contain"
          />
          {product.discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
              -{product.discount}%
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-black mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Price */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#FF8C00] font-bold text-2xl">
              ${product.currentPrice.toFixed(2)}
            </span>
            <span className="text-gray-400 text-lg line-through">
              ${product.originalPrice.toFixed(0)}
            </span>
          </div>

          {/* Add to Cart */}
          <button className="bg-[#FF8C00] hover:bg-[#FF7F00] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
