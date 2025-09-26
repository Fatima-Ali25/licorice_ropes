"use client"
import ProductCard from "@/components/custom/ProductCard";
import { siteData } from "@/content";

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

export default function ProductsPage() {
  const { exploreItems } = siteData;

  const handleAddToCart = (product: Product) => {
    console.log("Adding to cart:", product);
  };

  return (
    <div className="py-16 px-4 lg:px-8 bg-white">
      <div className="layout w-full h-full">
        <h1 className="text-3xl lg:text-4xl font-bold text-black mb-12">
          All Products
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {exploreItems.products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
