'use client';
import { siteData } from "@/content";
import ProductCard from "@/components/custom/ProductCard";
import Image from "next/image";

// Product Interface (matching the one in ProductCard)
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

const ExploreItems = () => {
  const { products } = siteData;

  // Products are already in the correct format from index.ts
  const productList: Product[] = products.map((product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    currentPrice: product.currentPrice,
    originalPrice: product.originalPrice,
    discount: product.discount,
    image: product.image,
    backgroundColor: product.backgroundColor || "#FFB6C1" // Fallback color
  }));

  // Debug: Log to ensure all 8 products are loaded
  console.log('Total products loaded:', productList.length);

  // Handle add to cart functionality
  const handleAddToCart = (product: Product) => {
    console.log('Adding to cart:', product);
    // Add your cart logic here
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-white w-full h-full">
      <div className="layout  w-full h-full py-16 flex flex-col gap-10 ">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10">
          <h2 className="text-6xl lg:text-6xl sm:text-3xl md:text-4xl font-bold text-black">
            Explore Items
          </h2>
          <a 
            href="/products" 
            className="text-black hover:text-[#FF8C00] transition-colors duration-200 flex items-center gap-2 group self-start sm:self-auto"
          >
            <span className="font-inter text-2xl sm:text-lg">View More</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200 text-lg">→</span>
          </a>
        </div>

        {/* Products Grid - 2x4 layout as in the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 items-center justify-center w-full h-full">
          {productList.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreItems;