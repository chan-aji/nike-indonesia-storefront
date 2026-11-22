import React from 'react'
import { Link } from 'react-router-dom'
import { Globe } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-[#7E7E7E] pt-14 pb-8 border-t border-[#222222]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Main 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#282828]">
          {/* Column 1: Resources */}
          <div>
            <h3 className="text-[14px] font-bold text-white tracking-wider mb-4 uppercase">
              Resources
            </h3>
            <ul className="space-y-2.5 text-[12px] leading-5 font-medium">
              <li><Link to="/stores" className="hover:text-white transition-colors">Find A Store</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Become A Member</Link></li>
              <li><Link to="/products?category=running" className="hover:text-white transition-colors">Running Shoe Finder</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Nike Coaching</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Magazine</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Education Discounts</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Send Us Feedback</Link></li>
            </ul>
          </div>

          {/* Column 2: Help */}
          <div>
            <h3 className="text-[14px] font-bold text-white tracking-wider mb-4 uppercase">
              Help
            </h3>
            <ul className="space-y-2.5 text-[12px] leading-5 font-medium">
              <li><Link to="/help" className="hover:text-white transition-colors">Get Help</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Order Status</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Delivery</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Payment Options</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-[14px] font-bold text-white tracking-wider mb-4 uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-[12px] leading-5 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">About Nike</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">News</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Investors</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Impact</Link></li>
              <li><Link to="/help" className="hover:text-white transition-colors">Report a Concern</Link></li>
            </ul>
          </div>

          {/* Column 4: Location & Social */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-[14px] font-bold text-white tracking-wider mb-4 uppercase">
                Connect
              </h3>
              <p className="text-[12px] text-[#7E7E7E] leading-relaxed mb-4">
                Be the first to hear about the latest product drops, member exclusives and sports culture.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#7E7E7E] hover:bg-white text-[#111111] flex items-center justify-center font-bold text-[14px] transition-colors">
                  X
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#7E7E7E] hover:bg-white text-[#111111] flex items-center justify-center font-bold text-[14px] transition-colors">
                  IG
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#7E7E7E] hover:bg-white text-[#111111] flex items-center justify-center font-bold text-[14px] transition-colors">
                  YT
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-center text-white text-[12px] font-medium space-x-2">
              <Globe className="w-4 h-4 text-white" />
              <span>Indonesia</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Sub-Footer */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between text-[11px] text-[#7E7E7E] space-y-4 md:space-y-0">
          <p>© 2026 Nike, Inc. All rights reserved.</p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Guides</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Sale</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Nike Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
