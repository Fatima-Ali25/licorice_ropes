'use client';
import { siteData } from "@/content";
import ProductCard from "@/components/custom/ProductCard";
import Button from "@/components/custom/Button";
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
        <div className="flex flex-col h-full w-full sm:flex-row sm:justify-between sm:items-center gap-4 mb-16 justify-between">
          <h2 className="font-inter text-6xl sm:text-4xl md:text-6xl font-bold text-black">
            Explore Items
          </h2>
          <Button className="text-black inline-block relative font-inter text-2xl sm:text-xl lg:text-2xl hover:scale-105 transition-all duration-300"> View More  <Image src="/images/Arrow 3.png" alt="arrow-right" width={150} height={0} className='' />
          </Button>

        </div>

        {/* Products Grid - 2x4 layout as in the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-4 gap-6 lg:gap-6 md:justify-between items-center justify-between w-full h-full">
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