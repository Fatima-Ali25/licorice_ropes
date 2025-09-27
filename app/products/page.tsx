'use client'

import { useState } from 'react'
import { siteData } from '@/content'
import ProductCard from '@/components/custom/ProductCard'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState('default')
  const [showPerPage, setShowPerPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)

  const { products } = siteData
  const totalProducts = products.length

  // Calculate pagination
  const startIndex = (currentPage - 1) * showPerPage
  const endIndex = startIndex + showPerPage
  const currentProducts = products.slice(startIndex, endIndex)
  const totalPages = Math.ceil(totalProducts / showPerPage)

  // Transform products to match ProductCard interface
  const transformedProducts = currentProducts.map((product: any) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    currentPrice: product.currentPrice,
    originalPrice: product.originalPrice,
    discount: product.discount,
    image: product.image,
    backgroundColor: product.backgroundColor || "#FFB6C1"
  }))

  const handleAddToCart = (product: any) => {
    console.log("Adding to cart:", product)
  }

  const handleSort = (value: string) => {
    setSortBy(value)
    // TODO: Implement sorting logic
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#FFF9ED] to-[#F5F5DC] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-poppins">
            Our Products
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter">
            Discover our amazing collection of premium licorice candies. Each product is crafted with care and bursting with authentic flavors.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            {/* Left Side - Sorting Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => handleSort(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#E85A2D] focus:border-transparent"
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="newest">Newest First</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={showPerPage}
                  onChange={(e) => setShowPerPage(Number(e.target.value))}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#E85A2D] focus:border-transparent"
                >
                  <option value={9}>Show: 09</option>
                  <option value={12}>Show: 12</option>
                  <option value={18}>Show: 18</option>
                  <option value={24}>Show: 24</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Right Side - Results Info */}
            <div className="text-sm text-gray-600">
              Show {startIndex + 1} - {Math.min(endIndex, totalProducts)} Of {totalProducts} Product
            </div>
          </div>

          {/* Products Grid - 3x4 layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {transformedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              {/* Previous Button */}
              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>
              )}

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center border rounded-lg transition-colors duration-200 ${
                    page === currentPage
                      ? 'bg-[#E85A2D] text-white border-[#E85A2D]'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* Next Button */}
              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
