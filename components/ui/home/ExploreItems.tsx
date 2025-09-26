'use client';
import { siteData } from "@/content";
import ProductCard from "@/components/custom/ProductCard";
<<<<<<< HEAD
import Button from "@/components/custom/Button";
import Image from "next/image";
=======
>>>>>>> 05ed974f032a31352d303261157d4d699533ea75

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

  const handleAddToCart = (product: Product) => {
    console.log("Adding to cart:", product);
  };

  return (
<<<<<<< HEAD
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="layout w-full h-full">
=======
    <section className="py-16 px-4 lg:px-8 bg-white w-full h-full">
      <div className="layout  w-full h-full py-16 flex flex-col gap-10 ">
>>>>>>> 1672470f795c07ff77e66f6c4dba89347aa21b53
        {/* Header */}
        <div className="flex flex-col h-full w-full sm:flex-row sm:justify-between sm:items-center gap-4 mb-16 justify-between">
          <h2 className="font-inter text-6xl sm:text-4xl md:text-6xl font-bold text-black">
            Explore Items
          </h2>
<<<<<<< HEAD
          <Button className="text-black inline-block relative font-inter text-2xl sm:text-xl lg:text-2xl hover:scale-105 transition-all duration-300"> View More  <Image src="/images/Arrow 3.png" alt="arrow-right" width={150} height={0} className='' />
          </Button>

=======
<<<<<<< HEAD
          <a
            href="/products"
            className="text-black hover:text-[#FF8C00] transition-colors duration-200 flex items-center gap-2 group"
=======
          <a 
            href="/products" 
            className="text-black hover:text-[#FF8C00] transition-colors duration-200 flex items-center gap-2 group self-start sm:self-auto"
>>>>>>> 1672470f795c07ff77e66f6c4dba89347aa21b53
          >
            <span className="font-inter text-2xl sm:text-lg">View More</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200 text-lg">→</span>
          </a>
>>>>>>> 05ed974f032a31352d303261157d4d699533ea75
        </div>

<<<<<<< HEAD
        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {exploreItems.products.slice(0, 8).map((product: Product) => (
=======
        {/* Products Grid - 2x4 layout as in the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xlg:grid-cols-4 gap-6 lg:gap-6 md:justify-between items-center justify-between w-full h-full">
          {productList.map((product: Product) => (
>>>>>>> 1672470f795c07ff77e66f6c4dba89347aa21b53
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