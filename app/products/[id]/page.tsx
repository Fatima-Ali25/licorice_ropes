'use client'

import { useParams } from 'next/navigation'
import { siteData } from '@/content'
import Image from 'next/image'
import { ShoppingCart, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductCard from '@/components/custom/ProductCard'

export default function ProductPage() {
  const params = useParams()
  const productId = parseInt(params.id as string)
  
  // Find the product by ID
  const product = siteData.products.find(p => p.id === productId)
  
  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Added to cart:', product)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm sm:text-base">Back to Products</span>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-[#F5F5DC] rounded-2xl overflow-hidden flex items-center justify-center p-8">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-full max-w-md"
              />
            </div>
            
            {/* Discount Badge */}
            {product.discount && (
              <div className="absolute top-4 left-4 bg-[#C50003] text-white text-sm font-bold px-3 py-2 rounded-lg shadow-lg">
                -{product.discount}% OFF
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Product Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-poppins">
              {product.name}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-inter">
              {product.description}
            </p>

            {/* Price Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#E7AB3C]">
                  ${product.currentPrice.toFixed(2)}
                </span>
                {product.originalPrice > product.currentPrice && (
                  <span className="text-xl sm:text-2xl text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              {product.discount && (
                <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  Save ${(product.originalPrice - product.currentPrice).toFixed(2)} ({product.discount}% off)
                </div>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-[#E85A2D] hover:bg-[#D04A1F] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 text-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart
            </button>

            {/* Product Features */}
            <div className="space-y-3 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Product Features:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E7AB3C] rounded-full"></span>
                  Premium quality ingredients
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E7AB3C] rounded-full"></span>
                  Authentic flavor profile
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E7AB3C] rounded-full"></span>
                  Fresh and delicious
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E7AB3C] rounded-full"></span>
                  Perfect for sharing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => {
                // Transform to match ProductCard interface
                const transformedProduct = {
                  id: relatedProduct.id,
                  name: relatedProduct.name,
                  description: relatedProduct.description,
                  currentPrice: relatedProduct.currentPrice,
                  originalPrice: relatedProduct.originalPrice,
                  discount: relatedProduct.discount,
                  image: relatedProduct.image,
                  backgroundColor: (relatedProduct as any).backgroundColor || "#FFB6C1"
                }
                
                return (
                  <ProductCard
                    key={relatedProduct.id}
                    product={transformedProduct}
                    onAddToCart={(product) => console.log('Added to cart:', product)}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
