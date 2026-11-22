import React, { useState, useEffect } from 'react'
import { ANNOUNCEMENTS } from '../data/announcements'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const AnnouncementBar: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const current = ANNOUNCEMENTS[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length)
  }

  return (
    <div className="bg-white text-[#111111] h-11 flex items-center justify-center relative px-4 select-none border-b border-[#EBEBEB]">
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-8 p-1 text-[#707072] hover:text-[#111111] rounded-full hover:bg-black/5 transition-colors"
        aria-label="Previous announcement"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div className="text-center text-[12px] md:text-[13px] leading-5 font-normal transition-all duration-300 flex flex-col items-center justify-center">
        <span>{current.text}</span>
        <div className="flex items-center space-x-3 text-[11px] md:text-[12px] mt-0.5">
          {current.links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="underline font-semibold hover:text-[#707072] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-8 p-1 text-[#707072] hover:text-[#111111] rounded-full hover:bg-black/5 transition-colors"
        aria-label="Next announcement"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  )
}
