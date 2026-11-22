import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { CartItem } from '../types'
import { CheckCircle2, Truck, ShieldCheck, CreditCard, ArrowLeft, ArrowRight, Package } from 'lucide-react'

interface CheckoutPageProps {
  items: CartItem[]
  onClearCart: () => void
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ items, onClearCart }) => {
  const navigate = useNavigate()
  const formatIDR = (num: number) => `Rp ${num.toLocaleString('id-ID')}`

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const deliveryFee = subtotal >= 1500000 || items.length === 0 ? 0 : 150000
  const total = subtotal + deliveryFee

  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details')
  const [formData, setFormData] = useState({
    firstName: 'Budi',
    lastName: 'Santoso',
    email: 'budi.santoso@example.com',
    phone: '081234567890',
    address: 'Jl. Sudirman No. 45, Tower B Lt. 12',
    city: 'Jakarta Selatan',
    postalCode: '12190',
    deliveryMethod: 'standard',
    paymentMethod: 'bca'
  })

  const [orderId, setOrderId] = useState('')

  const handlePlaceOrder = () => {
    const randomId = 'ID-' + Math.floor(10000000 + Math.random() * 90000000)
    setOrderId(randomId)
    setStep('confirmed')
    onClearCart()
  }

  if (step === 'confirmed') {
    return (
      <div className="max-w-[700px] mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-[#15803D]/10 text-[#15803D] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h1 className="text-[32px] font-medium text-[#111111]">
          Thank you for your order!
        </h1>
        <p className="text-[16px] text-[#707072] max-w-lg mx-auto">
          We’ve received your order and are packing your gear. A confirmation receipt has been sent to <strong>{formData.email}</strong>.
        </p>

        <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-sm p-6 text-left space-y-3 max-w-md mx-auto text-[14px]">
          <div className="flex justify-between">
            <span className="text-[#707072]">Order Reference:</span>
            <strong className="text-[#111111]">{orderId}</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-[#707072]">Recipient:</span>
            <span className="text-[#111111]">{formData.firstName} {formData.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#707072]">Estimated Delivery:</span>
            <span className="text-[#15803D] font-semibold">2 - 4 Business Days</span>
          </div>
          <div className="flex justify-between border-t border-[#E5E5E5] pt-3">
            <span className="text-[#707072]">Payment Total:</span>
            <strong className="text-[#111111]">{formatIDR(total)}</strong>
          </div>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-3 bg-[#111111] text-white rounded-full font-medium hover:bg-[#333333] transition-colors"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 border border-[#CCCCCC] text-[#111111] rounded-full font-medium hover:bg-[#F5F5F5] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-10">
      <div className="flex items-center space-x-2 text-[13px] text-[#707072] mb-6">
        <button onClick={() => navigate('/cart')} className="hover:text-[#111111] flex items-center space-x-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Bag</span>
        </button>
        <span>/</span>
        <span className="text-[#111111] font-medium">Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form (8 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h1 className="text-[26px] font-medium text-[#111111] mb-2">
              Delivery Options
            </h1>
            <p className="text-[14px] text-[#707072]">
              Free Standard Delivery applied automatically for Nike Members.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h2 className="text-[17px] font-semibold text-[#111111] flex items-center space-x-2">
              <Package className="w-4 h-4" />
              <span>Contact & Address</span>
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-semibold text-[#707072] mb-1">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full h-11 px-3 border border-[#CCCCCC] rounded-sm text-[14px] outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#707072] mb-1">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full h-11 px-3 border border-[#CCCCCC] rounded-sm text-[14px] outline-none focus:border-[#111111]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-semibold text-[#707072] mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3 border border-[#CCCCCC] rounded-sm text-[14px] outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#707072] mb-1">Mobile Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3 border border-[#CCCCCC] rounded-sm text-[14px] outline-none focus:border-[#111111]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#707072] mb-1">Street Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full h-11 px-3 border border-[#CCCCCC] rounded-sm text-[14px] outline-none focus:border-[#111111]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-semibold text-[#707072] mb-1">City / Regency</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-11 px-3 border border-[#CCCCCC] rounded-sm text-[14px] outline-none focus:border-[#111111]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#707072] mb-1">Postal Code</label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full h-11 px-3 border border-[#CCCCCC] rounded-sm text-[14px] outline-none focus:border-[#111111]"
                />
              </div>
            </div>
          </div>

          {/* Delivery Method Selector */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[17px] font-semibold text-[#111111] flex items-center space-x-2">
              <Truck className="w-4 h-4" />
              <span>Delivery Speed</span>
            </h2>
            <div className="border border-[#111111] p-4 rounded-sm flex items-center justify-between bg-[#FDFDFD]">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="delivery"
                  checked={formData.deliveryMethod === 'standard'}
                  onChange={() => setFormData({ ...formData, deliveryMethod: 'standard' })}
                  className="accent-[#111111] w-4 h-4"
                />
                <div>
                  <p className="font-semibold text-[14px] text-[#111111]">Standard Delivery</p>
                  <p className="text-[12px] text-[#707072]">Arrives in 2-4 business days</p>
                </div>
              </div>
              <span className="text-[14px] font-semibold text-[#15803D]">
                {deliveryFee === 0 ? 'Free' : formatIDR(deliveryFee)}
              </span>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-3 pt-2">
            <h2 className="text-[17px] font-semibold text-[#111111] flex items-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span>Select Payment Method</span>
            </h2>
            <div className="space-y-2">
              {[
                { id: 'bca', label: 'BCA Virtual Account (Instant Verification)', sub: 'Pay through BCA Mobile, myBCA or ATM' },
                { id: 'card', label: 'Credit or Debit Card', sub: 'Visa, Mastercard, JCB, American Express' },
                { id: 'qris', label: 'GoPay / QRIS Instant', sub: 'Scan QR code with any e-wallet app' }
              ].map(pay => (
                <label
                  key={pay.id}
                  className={`border p-4 rounded-sm flex items-start space-x-3 cursor-pointer transition-colors ${
                    formData.paymentMethod === pay.id ? 'border-[#111111] bg-[#FAFAFA]' : 'border-[#E5E5E5] hover:border-[#CCCCCC]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={formData.paymentMethod === pay.id}
                    onChange={() => setFormData({ ...formData, paymentMethod: pay.id })}
                    className="accent-[#111111] w-4 h-4 mt-0.5"
                  />
                  <div>
                    <p className="font-semibold text-[14px] text-[#111111]">{pay.label}</p>
                    <p className="text-[12px] text-[#707072]">{pay.sub}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={items.length === 0}
            className="w-full bg-[#111111] hover:bg-[#333333] disabled:bg-[#CCCCCC] text-white h-14 rounded-full font-medium text-[16px] transition-all flex items-center justify-center space-x-2 shadow-sm"
          >
            <span>Place Order — {formatIDR(total)}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Summary (5 cols) */}
        <div className="lg:col-span-5 bg-[#FAFAFA] p-6 rounded-sm border border-[#E5E5E5] space-y-6">
          <h2 className="text-[20px] font-medium text-[#111111]">
            In Your Bag ({items.length})
          </h2>

          <div className="divide-y divide-[#E5E5E5] max-h-[380px] overflow-y-auto no-scrollbar">
            {items.map((item, idx) => (
              <div key={idx} className="py-3 flex gap-4">
                <img src={item.product.image} alt={item.product.name} className="w-20 h-20 bg-[#F6F6F6] rounded-sm object-cover" />
                <div className="flex-1 text-[13px]">
                  <p className="font-medium text-[#111111] line-clamp-1">{item.product.name}</p>
                  <p className="text-[#707072]">Size: {item.size} × {item.quantity}</p>
                  <p className="font-semibold text-[#111111] mt-1">{formatIDR(item.product.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#E5E5E5] pt-4 space-y-2 text-[14px]">
            <div className="flex justify-between text-[#707072]">
              <span>Subtotal</span>
              <span className="text-[#111111]">{formatIDR(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#707072]">
              <span>Delivery</span>
              <span className="text-[#15803D]">{deliveryFee === 0 ? 'Free' : formatIDR(deliveryFee)}</span>
            </div>
            <div className="border-t border-[#E5E5E5] pt-3 flex justify-between text-[16px] font-bold text-[#111111]">
              <span>Total</span>
              <span>{formatIDR(total)}</span>
            </div>
          </div>

          <div className="border-t border-[#E5E5E5] pt-4 flex items-center space-x-2 text-[12px] text-[#707072]">
            <ShieldCheck className="w-4 h-4 text-[#111111]" />
            <span>256-bit encrypted checkout with 30-day free returns.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
