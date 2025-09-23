'use client';
import { siteData } from "@/content";
import ProductCard from "@/components/custom/ProductCard";

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

  const handleAddToCart = (product: Product) => {
    console.log("Adding to cart:", product);
  };

  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="layout w-full h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black">
            {exploreItems.title}
          </h2>
          <a
            href="/products"
            className="text-black hover:text-[#FF8C00] transition-colors duration-200 flex items-center gap-2 group"
          >
            <span className="font-medium">{exploreItems.viewMoreText}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {exploreItems.products.slice(0, 8).map((product: Product) => (
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
