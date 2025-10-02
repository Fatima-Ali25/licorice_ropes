'use client';
import { useState } from 'react';
import { siteData } from '@/content';
import Button from '@/components/custom/Button';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp, Trash2, Plus, Minus, Check, ShoppingCart, CreditCard, CheckCircle } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice?: number;
  discount: number | null;
  image: string;
  quantity: number;
  selected: boolean;
  color?: string;
}

type CheckoutStep = 'cart' | 'details' | 'complete';

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('cart');
  
  // Mock cart data - in real app this would come from context/state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 2,
      name: "Sour Cherry",
      description: "Tangy and sweet sour candy, bursting with vibrant cherry flavor and a mouth-puckering sour finish.",
      currentPrice: 6.00,
      originalPrice: 8.00,
      discount: 40,
      image: "/images/product_1.webp",
      quantity: 1,
      selected: true,
      color: "Red"
    },
    {
      id: 8,
      name: "Black Twist",
      description: "A classic candy with a bold twist, featuring rich black licorice made from natural licorice root for an intense, aromatic flavor.",
      currentPrice: 6.00,
      discount: null,
      image: "/images/product_7.webp",
      quantity: 1,
      selected: true,
      color: "Black"
    }
  ]);

  const [shippingOption, setShippingOption] = useState('free');
  const [showShippingCalculator, setShowShippingCalculator] = useState(false);
  const [shippingForm, setShippingForm] = useState({
    country: '',
    postcode: '',
    address: ''
  });

  const handleSelectAll = (checked: boolean) => {
    setCartItems(items => items.map(item => ({ ...item, selected: checked })));
  };

  const handleItemSelect = (id: number, selected: boolean) => {
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, selected } : item
    ));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleDeleteSelected = () => {
    setCartItems(items => items.filter(item => !item.selected));
  };

  const handleShippingFormChange = (field: string, value: string) => {
    setShippingForm(prev => ({ ...prev, [field]: value }));
  };

  const calculateSubtotal = () => {
    return cartItems
      .filter(item => item.selected)
      .reduce((total, item) => total + (item.currentPrice * item.quantity), 0);
  };

  const calculateShipping = () => {
    switch (shippingOption) {
      case 'flat':
        return 8.00;
      case 'pickup':
        return 6.00;
      default:
        return 0.00;
    }
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);
  const someSelected = cartItems.some(item => item.selected);

  const renderProgressBar = () => (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Step 1: Shopping Cart */}
          <button
            onClick={() => setCurrentStep('cart')}
            className={`flex items-center transition-colors ${
              currentStep === 'cart' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep === 'cart' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-500'
            }`}>
              1
            </div>
            <span className="ml-2 font-medium">Shopping cart</span>
            <div className={`ml-4 w-16 h-0.5 ${
              currentStep === 'cart' ? 'bg-orange-500' : 'bg-gray-300'
            }`}></div>
          </button>

          {/* Step 2: Checkout Details */}
          <button
            onClick={() => setCurrentStep('details')}
            className={`flex items-center transition-colors ${
              currentStep === 'details' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep === 'details' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-500'
            }`}>
              2
            </div>
            <span className="ml-2 font-medium">Checkout details</span>
            <div className={`ml-4 w-16 h-0.5 ${
              currentStep === 'details' ? 'bg-orange-500' : 'bg-gray-300'
            }`}></div>
          </button>

          {/* Step 3: Order Complete */}
          <button
            onClick={() => setCurrentStep('complete')}
            className={`flex items-center transition-colors ${
              currentStep === 'complete' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep === 'complete' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-500'
            }`}>
              3
            </div>
            <span className="ml-2 font-medium">Order complete</span>
          </button>
        </div>

        {/* Continue Shopping Button */}
        <Link href="/product">
          <Button className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-2 rounded-lg transition-colors">
            ← Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  );

  const renderCartSection = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">MY CART</h2>
      
      {/* Select All & Delete */}
      <div className="flex items-center justify-between h-[70px] mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={(e) => handleSelectAll(e.target.checked)}
            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <span className="ml-2 text-gray-700 text-base font-medium">Select All</span>
        </label>
        <Button
          onClick={handleDeleteSelected}
          disabled={!someSelected}
          className="bg-orange-500 rounded-full text-white px-4 py-2 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Delete
        </Button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <div key={item.id}>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={item.selected}
                onChange={(e) => handleItemSelect(item.id, e.target.checked)}
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
              />

              {/* Product Image */}
              <div className="w-20 h-24 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={98}
                  className="object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                <p className="text-sm text-gray-500">Color {item.color}</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="p-2 hover:bg-gray-100 rounded-l-lg"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                  className="w-12 text-center border-0 focus:ring-0"
                  min="1"
                />
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-gray-100 rounded-r-lg"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Price */}
              <div className="text-right">
                {item.originalPrice && (
                  <p className="text-sm text-gray-400 line-through">${item.originalPrice.toFixed(2)}</p>
                )}
                <p className="text-lg font-semibold text-gray-900">${item.currentPrice.toFixed(2)}</p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            {index < cartItems.length - 1 &&  <hr className="my-4 bg-amber-400" />}
          </div>
        ))}
      </div>

      {/* Cart Update Message */}
      <div className="flex items-center mt-6 p-3 bg-green-50 rounded-lg">
        <Check className="w-5 h-5  text-green-500 mr-2" />
        <span className="text-green-700 text-sm">Cart has been updated</span>
        
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <Button 
          onClick={() => setCurrentStep('details')}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Submit
        </Button>
      </div>
    </div>
  );

  const renderCartTotals = () => (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">CART TOTALS</h2>
      
      {/* Subtotal */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-700">Subtotal</span>
        <span className="text-gray-900 font-semibold">${calculateSubtotal().toFixed(2)}</span>
      </div>

      {/* Shipping Options */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700">Shipping</span>
        </div>
        <div className="space-y-2">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value="free"
              checked={shippingOption === 'free'}
              onChange={(e) => setShippingOption(e.target.value)}
              className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
            />
            <span className="ml-2 text-gray-700">Free Shipping</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value="flat"
              checked={shippingOption === 'flat'}
              onChange={(e) => setShippingOption(e.target.value)}
              className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
            />
            <span className="ml-2 text-gray-500">Flat rate: $8</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value="pickup"
              checked={shippingOption === 'pickup'}
              onChange={(e) => setShippingOption(e.target.value)}
              className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
            />
            <span className="ml-2 text-gray-500">Pickup: $6.00</span>
          </label>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Shipping options will be updated during checkout.
        </p>
      </div>

      {/* Calculate Shipping */}
      <div className="mb-6">
        <button
          onClick={() => setShowShippingCalculator(!showShippingCalculator)}
          className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900"
        >
          <span>Calculate shipping</span>
          <ChevronUp className={`w-4 h-4 transition-transform ${showShippingCalculator ? 'rotate-180' : ''}`} />
        </button>
        
        {showShippingCalculator && (
          <div className="mt-4 space-y-3">
            <div>
              <label className="block text-sm text-gray-500 mb-1">COLOR</label>
              <select className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
                <option>Selecting item</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Country</label>
              <input
                type="text"
                value={shippingForm.country}
                onChange={(e) => handleShippingFormChange('country', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                placeholder="Country"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Postcode / Zip</label>
              <input
                type="text"
                value={shippingForm.postcode}
                onChange={(e) => handleShippingFormChange('postcode', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                placeholder="Postcode / Zip"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Address</label>
              <input
                type="text"
                value={shippingForm.address}
                onChange={(e) => handleShippingFormChange('address', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                placeholder="Address"
              />
            </div>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center mb-6 pt-4 border-t border-gray-200">
        <span className="text-lg font-bold text-gray-900">Total</span>
        <span className="text-lg font-bold text-gray-900">${calculateTotal().toFixed(2)}</span>
      </div>

      {/* Checkout Button */}
      <Button 
        onClick={() => setCurrentStep('complete')}
        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
      >
        Checkout
      </Button>
    </div>
  );

  const renderCheckoutDetails = () => (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">CHECKOUT DETAILS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Information</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          onClick={() => setCurrentStep('cart')}
          className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-3 rounded-lg transition-colors"
        >
          ← Back to Cart
        </Button>
        <Button
          onClick={() => setCurrentStep('complete')}
          className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Complete Order
        </Button>
      </div>
    </div>
  );

  const renderOrderComplete = () => (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
      <div className="mb-6">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Complete!</h2>
        <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
        <div className="space-y-2 text-left">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>${calculateShipping().toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <Link href="/product">
          <Button className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-3 rounded-lg transition-colors">
            Continue Shopping
          </Button>
        </Link>
        <Button
          onClick={() => setCurrentStep('cart')}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          New Order
        </Button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full py-32">
      <div className="layout w-full h-full bg-amber-900">
        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Main Content */}
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-8 bg-amber-100">
          {/* Main Content Area */}
          <div className="lg:col-span-2 h-[943px] w-[807px] bg-amber-600">
            {currentStep === 'cart' && renderCartSection()}
            {currentStep === 'details' && renderCheckoutDetails()}
            {currentStep === 'complete' && renderOrderComplete()}
          </div>

          {/* Cart Totals Sidebar */}
          <div className="lg:col-span-1">
            {currentStep !== 'complete' && renderCartTotals()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;