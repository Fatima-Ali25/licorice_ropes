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
  const { exploreItems } = siteData;

  // Handle add to cart functionality
  const handleAddToCart = (product: Product) => {
    console.log('Adding to cart:', product);
    // Add your cart logic here
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="layout">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            {exploreItems.title}
          </h2>
          <a 
            href="#products" 
            className="text-black hover:text-[#FF8C00] transition-colors duration-200 flex items-center gap-2 group"
          >
            <span className="font-medium">{exploreItems.viewMoreText}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* Products Grid - 2x4 layout as in the image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {exploreItems.products.map((product: Product) => (
            <div key={product.id} className="flex flex-col items-center">
              {/* Product Image */}
              <div className="w-full flex justify-center mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain rounded-xl shadow"
                  width={24}
                  height={24}
                />
              </div>
              {/* Product Card */}
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreItems;
