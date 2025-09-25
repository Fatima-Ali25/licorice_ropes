'use client';
import { siteData } from "@/content";
import ProductCard from "@/components/custom/ProductCard";
import Link from "next/link";

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

const ProductsPage = () => {
  const { products } = siteData;

  // Products are already in the correct format from index.ts
  const productList: Product[] = products.map((product: any, index: number) => {
    // Predefined colors for consistent display since backgroundColor was removed
    const colors = [
      "#FFB6C1", "#87CEEB", "#FF69B4", "#98FB98",
      "#FF6B6B", "#DDA0DD", "#2F2F2F", "#FFA500"
    ];
    
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      currentPrice: product.currentPrice,
      originalPrice: product.originalPrice,
      discount: product.discount,
      image: product.image,
      backgroundColor: colors[index] || "#FFB6C1"
    };
  });

  // Handle add to cart functionality
  const handleAddToCart = (product: Product) => {
    console.log('Adding to cart:', product);
    // Add your cart logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-to-r from-[#FF8C00] to-[#FF7F00]">
        <div className="layout">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover our complete collection of premium licorice candies. Each flavor is crafted with care to deliver the perfect taste experience.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="layout">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#FF8C00] transition-colors">
                Home
              </Link>
              <span>→</span>
              <span className="text-gray-900 font-medium">Products</span>
            </div>
          </nav>

          {/* Products Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {productList.length} products
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productList.map((product: Product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for custom orders or special requests
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#FF8C00] hover:bg-[#FF7F00] text-white font-medium rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
