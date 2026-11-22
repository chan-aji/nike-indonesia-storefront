import React, { useState } from 'react'
import { Search, ChevronDown, ChevronUp, Truck, RotateCcw, CreditCard, Phone, MessageSquare } from 'lucide-react'

export const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How does Free Standard Delivery work in Indonesia?',
      a: 'Nike Members receive Free Standard Delivery on all orders of Rp 1.500.000 or more. For orders under Rp 1.500.000, a flat delivery fee of Rp 150.000 applies. Standard deliveries arrive within 2-4 business days across major Indonesian metropolitan regions including Jabodetabek, Surabaya, Bandung, and Bali.'
    },
    {
      q: 'What is Nike 30-Day Free Return Policy?',
      a: 'You can return any order for any reason within 30 days of delivery. All returned items must be unwashed and unworn with original tags attached. We provide pre-paid return shipping labels through our logistics partners.'
    },
    {
      q: 'What payment options are accepted?',
      a: 'We accept Visa, Mastercard, American Express, JCB, PayPal, BCA Virtual Account, Mandiri Bill Payment, and instant QRIS/GoPay for all domestic Indonesian transactions.'
    },
    {
      q: 'How can I track my dispatched order?',
      a: 'Once your order leaves our fulfillment facility, you will receive an email and SMS with your live tracking number. You can also view real-time courier milestone updates under your Account Order Status tab.'
    },
    {
      q: 'How do I find the right shoe size?',
      a: 'Refer to our interactive Nike Size Guide available on every product detail page. We list exact length in centimeters (CM) alongside standard EU, US, and UK conversions.'
    }
  ]

  const filteredFaqs = searchQuery.trim() === ''
    ? faqs
    : faqs.filter(f => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-12">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-[32px] md:text-[40px] font-medium text-[#111111] tracking-tight mb-4">
          GET HELP
        </h1>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What can we help you with?"
            className="w-full h-14 pl-12 pr-4 bg-[#F5F5F5] rounded-full border border-transparent focus:border-[#111111] focus:bg-white text-[15px] outline-none transition-all shadow-xs"
          />
          <Search className="w-5 h-5 text-[#707072] absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Quick Action Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] rounded-sm flex flex-col items-center text-center">
          <Truck className="w-8 h-8 text-[#111111] mb-3" />
          <h3 className="text-[17px] font-semibold text-[#111111] mb-1">Dispatch & Delivery</h3>
          <p className="text-[13px] text-[#707072] mb-4 leading-relaxed">
            Track status, delivery timeframes, and fee thresholds.
          </p>
          <span className="text-[13px] font-medium text-[#111111] underline">Learn More</span>
        </div>

        <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] rounded-sm flex flex-col items-center text-center">
          <RotateCcw className="w-8 h-8 text-[#111111] mb-3" />
          <h3 className="text-[17px] font-semibold text-[#111111] mb-1">Returns & Refunds</h3>
          <p className="text-[13px] text-[#707072] mb-4 leading-relaxed">
            30-day trial window and easy prepaid return drop-offs.
          </p>
          <span className="text-[13px] font-medium text-[#111111] underline">Start a Return</span>
        </div>

        <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] rounded-sm flex flex-col items-center text-center">
          <CreditCard className="w-8 h-8 text-[#111111] mb-3" />
          <h3 className="text-[17px] font-semibold text-[#111111] mb-1">Payment & Invoicing</h3>
          <p className="text-[13px] text-[#707072] mb-4 leading-relaxed">
            BCA Virtual Account, Credit Cards, GoPay, and tax receipts.
          </p>
          <span className="text-[13px] font-medium text-[#111111] underline">View Payment Methods</span>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-[24px] font-medium text-[#111111] mb-6">
          Frequently Asked Questions
        </h2>
        <div className="border-t border-[#E5E5E5] divide-y divide-[#E5E5E5]">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="py-4">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center text-left text-[16px] font-medium text-[#111111] hover:text-[#707072] transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 flex-shrink-0 ml-4" /> : <ChevronDown className="w-4 h-4 flex-shrink-0 ml-4" />}
              </button>
              {openFaq === idx && (
                <p className="mt-3 text-[14px] text-[#707072] leading-relaxed pr-6">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Channels */}
      <div className="bg-[#111111] text-white p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-[22px] font-medium">Still have questions?</h3>
          <p className="text-[14px] text-neutral-400">
            Our expert customer support team is available Monday to Sunday, 09:00 - 18:00 WIB.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => alert('Starting Live Chat with Nike Expert Support...')}
            className="px-6 py-3 bg-white text-[#111111] rounded-full font-medium text-[14px] hover:bg-neutral-200 transition-colors flex items-center space-x-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat With Us</span>
          </button>
          <a
            href="tel:0078030114945"
            className="px-6 py-3 border border-white text-white rounded-full font-medium text-[14px] hover:bg-white/10 transition-colors flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>007-803-011-4945</span>
          </a>
        </div>
      </div>
    </div>
  )
}
