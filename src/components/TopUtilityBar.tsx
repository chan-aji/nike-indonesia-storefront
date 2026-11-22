import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { JordanJumpman, ConverseChevron } from './Icons'
import { TOP_UTILITY_LINKS } from '../data/navigation'

export const TopUtilityBar: React.FC = () => {
  const [helpOpen, setHelpOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHelpOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="hidden md:block bg-[#F5F5F5] text-[#111111] text-[12px] font-medium border-b border-[#E5E5E5] relative z-40">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-9 flex items-center justify-between">
        {/* Brand Icons on Left: Jordan & Converse */}
        <div className="flex items-center space-x-6">
          <Link
            to="/products?category=basketball"
            className="text-[#111111] hover:opacity-70 transition-opacity flex items-center"
            title="Jordan Brand"
          >
            <JordanJumpman className="w-5 h-5 fill-current" />
          </Link>
          <Link
            to="/products?category=lifestyle"
            className="text-[#111111] hover:opacity-70 transition-opacity flex items-center"
            title="Converse"
          >
            <ConverseChevron className="w-5 h-5 fill-current" />
          </Link>
        </div>

        {/* Right Secondary Utilities */}
        <div className="flex items-center space-x-3 text-[#111111]">
          <Link to="/stores" className="hover:text-[#707072] transition-colors">
            {TOP_UTILITY_LINKS.findStore.label}
          </Link>
          <span className="text-[#CCCCCC]">|</span>

          {/* Help with Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setHelpOpen(true)}
            onMouseLeave={() => setHelpOpen(false)}
          >
            <Link
              to="/help"
              onClick={() => setHelpOpen(false)}
              className="flex items-center hover:text-[#707072] transition-colors py-2"
            >
              <span>Help</span>
            </Link>

            {helpOpen && (
              <div className="absolute right-0 top-full w-56 bg-white shadow-xl rounded-lg py-3 px-4 border border-[#E5E5E5] z-50 animate-in fade-in zoom-in-95 duration-150">
                <p className="font-bold text-[13px] text-[#111111] mb-2 border-b border-[#F0F0F0] pb-2">
                  Help
                </p>
                <div className="flex flex-col space-y-2 text-[12px] text-[#707072]">
                  {TOP_UTILITY_LINKS.helpItems.map((item: { label: string; href: string }, idx: number) => (
                    <Link
                      key={idx}
                      to="/help"
                      onClick={() => setHelpOpen(false)}
                      className="hover:text-[#111111] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <span className="text-[#CCCCCC]">|</span>
          <a href="#" className="hover:text-[#707072] transition-colors">
            {TOP_UTILITY_LINKS.joinUs.label}
          </a>
          <span className="text-[#CCCCCC]">|</span>
          <a href="#" className="hover:text-[#707072] transition-colors">
            {TOP_UTILITY_LINKS.signIn.label}
          </a>
        </div>
      </div>
    </div>
  )
}
