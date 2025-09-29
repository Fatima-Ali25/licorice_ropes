'use client';
import { siteData } from "@/content";
import ProductCard from "@/components/custom/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  discount: number | null;
  image: string;
  backgroundColor?: string;
}

interface DetailedProduct extends Product {
  brand: string;
  sales: number;
  rating: number;
  detailedDescription: string;
  nutritionFacts: {
    servingsPerContainer: string;
    servingSize: string;
    calories: number;
    totalFat: number;
    sodium: number;
    totalCarbohydrate: number;
    totalSugars: number;
    addedSugars: number;
    protein: number;
  };
  netWeight: string;
  ingredients: string;
  allergens: string;
}

const SingleProductPage = () => {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const { products } = siteData;
  
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find(p => p.id === productId);
      if (foundProduct) {
        // Transform basic product to detailed product with mock data
        const detailedProduct: DetailedProduct = {
          ...foundProduct,
          brand: "Southern Sweet",
          sales: Math.floor(Math.random() * 500) + 100,
          rating: 4.8,
          detailedDescription: `A classic candy with a bold twist, featuring rich ${foundProduct.name.toLowerCase()} made from natural ingredients for an intense, aromatic flavor.`,
          nutritionFacts: {
            servingsPerContainer: "3 Servings per container",
            servingSize: "1/3 Pieces (27g)",
            calories: 100,
            totalFat: 0.3,
            sodium: 20,
            totalCarbohydrate: 24,
            totalSugars: 12,
            addedSugars: 12,
            protein: 12
          },
          netWeight: "Net Weight: 80g",
          ingredients: "Corn Syrup, Wheat flour, sugar modified corn scratch, Licorice extract, palm and coconut oil, salt, glycerin, mono and diglycerides, artificial flavours, colors: Caramel",
          allergens: "Contains: Wheat (gluten). May contains traces of Soy."
        };
        
        setProduct(detailedProduct);

        // Get related products (4 random products excluding current)
        const otherProducts = products.filter(p => p.id !== productId);
        const shuffled = otherProducts.sort(() => 0.5 - Math.random());
        setRelatedProducts(shuffled.slice(0, 4));
      }
    }
  }, [productId, products]);

  const handleAddToCart = (product: Product) => {
    console.log("Adding to cart:", product);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push("⭐");
    }
    
    return stars.join("");
  };

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">Logo</span>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8 ml-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">HOME</Link>
                <Link href="/product" className="text-gray-600 hover:text-gray-900 font-medium">ORDER ONLINE</Link>
                <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">ABOUT</a>
                <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">CONTACT</a>
              </nav>
            </div>
            
            {/* User Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7-7z" />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3m-2 10a2 2 0 110-4 2 2 0 010 4zm0 0c1.306 0 2.417.835 2.83 2M9 17a2 2 0 11-4 0 2 2 0 014 0zm4 0c1.306 0 2.417.835 2.83 2m-.01-2a2 2 0 114 0 2 2 0 01-4 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="relative">
            <div className="relative h-96 bg-[#F5F5DC] flex items-center justify-center overflow-hidden rounded-xl">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover"
              />
              {/* Brand Logo */}
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium">SS</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand and Name */}
            <div>
              <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold text-black mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>{product.sales} Sold</span>
                <span>•</span>
                <span>{product.rating} {renderStars(product.rating)}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.detailedDescription}</p>

            {/* Nutrition Facts */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Nutrition Facts</h3>
              <div className="space-y-2 text-sm">
                <p><strong>{product.nutritionFacts.servingsPerContainer}</strong></p>
                <p><strong>{product.nutritionFacts.servingSize}</strong></p>
                <p><strong>Amount per serving</strong></p>
                <p><strong>Calories</strong> {product.nutritionFacts.calories}</p>
                <div className="pl-4 space-y-2">
                  <p>Total Fat {product.nutritionFacts.totalFat}g (0% Daily Value)</p>
                  <p>Sodium {product.nutritionFacts.sodium}mg (1% Daily Value)</p>
                  <p>Total Carbohydrate {product.nutritionFacts.totalCarbohydrate}g (8% Daily Value)</p>
                  <p>Total Sugars {product.nutritionFacts.totalSugars}g (8% Daily Value)</p>
                  <p>Includes {product.nutritionFacts.addedSugars}g Added Sugars (24% Daily Value)</p>
                  <p>Protein {product.nutritionFacts.protein}mg</p>
                </div>
              </div>
            </div>

            {/* Net Weight */}
            <p className="text-sm text-gray-600">{product.netWeight}</p>

            {/* Ingredients */}
            <div>
              <h4 className="font-semibold mb-2">Ingredients:</h4>
              <p className="text-sm text-gray-600">{product.ingredients}</p>
            </div>

            {/* Allergens */}
            <div>
              <p className="text-sm text-red-600"><strong>{product.allergens}</strong></p>
            </div>

            {/* Price and Action Buttons */}
            <div className="space-y-4">
              <div className="text-3xl font-bold text-black">${product.currentPrice.toFixed(2)}</div>
              
              <div className="flex gap-4">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Shop Now →
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Favorites
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-black">Related Items</h2>
            <Link href="/product" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
              View More →
            </Link>
          </div>

          {/* Related Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={handleAddToCart}
                className="hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
