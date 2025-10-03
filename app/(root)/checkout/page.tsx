'use client';
import { useState } from 'react';
import {
  CheckoutProgress,
  CartSection,
  CartTotals,
  CheckoutDetails,
  OrderComplete
} from '@/components/checkout';

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






  return (
    <div className="w-full h-full py-32">
      <div className="layout w-full h-full py-10">
        {/* Progress Bar */}
        <CheckoutProgress 
          currentStep={currentStep} 
          onStepChange={setCurrentStep} 
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content Area */}
          <div className="lg:col-span-2 w-full h-full">
            {currentStep === 'cart' && (
              <CartSection
                cartItems={cartItems}
                allSelected={allSelected}
                someSelected={someSelected}
                onSelectAll={handleSelectAll}
                onItemSelect={handleItemSelect}
                onQuantityChange={handleQuantityChange}
                onRemoveItem={handleRemoveItem}
                onDeleteSelected={handleDeleteSelected}
                onSubmit={() => setCurrentStep('details')}
              />
            )}
            {currentStep === 'details' && (
              <CheckoutDetails
                onBackToCart={() => setCurrentStep('cart')}
                onCompleteOrder={() => setCurrentStep('complete')}
              />
            )}
            {currentStep === 'complete' && (
              <OrderComplete
                subtotal={calculateSubtotal()}
                shippingCost={calculateShipping()}
                total={calculateTotal()}
                onNewOrder={() => setCurrentStep('cart')}
              />
            )}
          </div>

          {/* Cart Totals Sidebar */}
          <div className="lg:col-span-1 flex w-full h-full">
            {currentStep !== 'complete' && (
              <CartTotals
                subtotal={calculateSubtotal()}
                shippingOption={shippingOption}
                shippingCost={calculateShipping()}
                total={calculateTotal()}
                showShippingCalculator={showShippingCalculator}
                shippingForm={shippingForm}
                onShippingOptionChange={setShippingOption}
                onToggleShippingCalculator={() => setShowShippingCalculator(!showShippingCalculator)}
                onShippingFormChange={handleShippingFormChange}
                onCheckout={() => setCurrentStep('complete')}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;