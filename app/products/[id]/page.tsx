'use client';
import { siteData } from "@/content";
import ProductCard from "@/components/custom/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

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

const SingleProductPage = () => {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const { products } = siteData;
  
  const [quantity, setQuantity] = useState(1);

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

  // Find the product by ID
  const product = productList.find((p: Product) => p.id === productId);
  
  // If product not found, show 404
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link 
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-[#FF8C00] hover:bg-[#FF7F00] text-white font-medium rounded-lg transition-colors duration-200"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Handle add to cart functionality
  const handleAddToCart = () => {
    console.log('Adding to cart:', product, 'Quantity:', quantity);
    // Add your cart logic here
  };

  // Get related products (exclude current product)
  const relatedProducts = productList
    .filter((p: Product) => p.id !== productId)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="py-4 px-4 lg:px-8 bg-gray-50">
        <div className="layout">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#FF8C00] transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href="/products" className="hover:text-[#FF8C00] transition-colors">
              Products
            </Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="layout">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative h-96 bg-[#F5F5DC] rounded-2xl overflow-hidden shadow-lg">
                {/* Background Color Overlay */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: product.backgroundColor }}
                />
                
                {/* Product Image - Licorice rope simulation */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="flex flex-col gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <Image
                        key={i}
                        src={product.image}
                        alt={product.name}
                        width={40}
                        height={6}
                        className="object-contain"
                      />
                    ))}
                  </div>
                </div>

                {/* Logo Overlay */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-12 h-12 bg-white border-2 border-[#8B4513] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-[#8B4513] rounded-full"></div>
                  </div>
                </div>

                {/* Discount Tag */}
                {product.discount && (
                  <div className="absolute top-6 left-6 bg-red-500 text-white text-sm font-bold px-3 py-2 rounded-lg shadow-lg">
                    -{product.discount}%
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#FF8C00]">
                  ${product.currentPrice.toFixed(2)}
                </span>
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice.toFixed(0)}
                </span>
                {product.discount && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    Save {product.discount}%
                  </span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#FF8C00] hover:bg-[#FF7F00] text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8M9 18a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
                Add to Cart
              </button>

              {/* Product Features */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900">Product Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                    Premium quality ingredients
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                    Authentic flavor profile
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                    Perfect texture and consistency
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF8C00] rounded-full"></span>
                    Made with natural colors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 lg:px-8 bg-gray-50">
          <div className="layout">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct: Product) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                  <ProductCard
                    product={relatedProduct}
                    onAddToCart={() => console.log('Adding to cart:', relatedProduct)}
                    className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SingleProductPage;
