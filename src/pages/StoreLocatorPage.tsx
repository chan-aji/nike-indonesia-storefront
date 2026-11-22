import React, { useState } from 'react'
import { MapPin, Navigation, Phone, Clock, Search } from 'lucide-react'

interface Store {
  id: string
  name: string
  address: string
  city: string
  phone: string
  hours: string
  type: string
}

const STORES: Store[] = [
  {
    id: 'store-gi',
    name: 'Nike Grand Indonesia',
    address: 'Grand Indonesia West Mall, Level 3, Jl. M.H. Thamrin No.1',
    city: 'Jakarta Pusat',
    phone: '(021) 23580450',
    hours: '10:00 - 22:00 WIB',
    type: 'Nike Flagship & Live'
  },
  {
    id: 'store-sc',
    name: 'Nike Senayan City',
    address: 'Senayan City Mall, Level 3, Jl. Asia Afrika Lot 19',
    city: 'Jakarta Selatan',
    phone: '(021) 72781290',
    hours: '10:00 - 22:00 WIB',
    type: 'Nike Rise & Jordan Space'
  },
  {
    id: 'store-pim',
    name: 'Nike Pondok Indah Mall',
    address: 'Pondok Indah Mall 2, Level 2, Jl. Metro Pondok Indah',
    city: 'Jakarta Selatan',
    phone: '(021) 75920780',
    hours: '10:00 - 22:00 WIB',
    type: 'Nike Live Store'
  },
  {
    id: 'store-kokas',
    name: 'Nike Kota Kasablanka',
    address: 'Kota Kasablanka Mall, Ground Floor, Jl. Casablanca Raya',
    city: 'Jakarta Selatan',
    phone: '(021) 29465120',
    hours: '10:00 - 22:00 WIB',
    type: 'Nike Concept Store'
  },
  {
    id: 'store-tp',
    name: 'Nike Tunjungan Plaza',
    address: 'Tunjungan Plaza 6, Level 2, Jl. Embong Malang No.21-31',
    city: 'Surabaya',
    phone: '(031) 99245100',
    hours: '10:00 - 22:00 WIB',
    type: 'Nike Rise Store'
  },
  {
    id: 'store-paskal',
    name: 'Nike 23 Paskal',
    address: '23 Paskal Shopping Center, Level 1, Jl. Pasir Kaliki No.25-27',
    city: 'Bandung',
    phone: '(022) 20568900',
    hours: '10:00 - 22:00 WIB',
    type: 'Nike Live Store'
  },
  {
    id: 'store-beachwalk',
    name: 'Nike Beachwalk Bali',
    address: 'Beachwalk Shopping Center, Level 2, Jl. Pantai Kuta',
    city: 'Kuta, Bali',
    phone: '(0361) 8464900',
    hours: '10:00 - 23:00 WITA',
    type: 'Nike Resort Concept'
  }
]

export const StoreLocatorPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('All')
  const [search, setSearch] = useState('')

  const cities = ['All', 'Jakarta Pusat', 'Jakarta Selatan', 'Surabaya', 'Bandung', 'Kuta, Bali']

  const filtered = STORES.filter(s => {
    const matchCity = selectedCity === 'All' || s.city === selectedCity
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase())
    return matchCity && matchSearch
  })

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-10">
      <div className="mb-8">
        <h1 className="text-[28px] md:text-[34px] font-medium text-[#111111] tracking-tight">
          Find a Nike Store
        </h1>
        <p className="text-[15px] text-[#707072] mt-1">
          Explore official Nike Flagships, Nike Rise, and Nike Live concept spaces across Indonesia.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by store name, mall or city..."
            className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] rounded-full border border-transparent focus:border-[#111111] focus:bg-white text-[14px] outline-none transition-all"
          />
          <Search className="w-4 h-4 text-[#707072] absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
          {cities.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCity(c)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap ${
                selectedCity === c
                  ? 'bg-[#111111] text-white'
                  : 'bg-[#F5F5F5] text-[#111111] hover:bg-[#E5E5E5]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Stores Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(store => (
          <div
            key={store.id}
            className="border border-[#E5E5E5] rounded-sm p-6 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 bg-white"
          >
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#D3391A] uppercase tracking-wider">
                    {store.type}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#111111] mt-1">
                    {store.name}
                  </h3>
                </div>
                <div className="p-2 bg-[#F5F5F5] rounded-full">
                  <MapPin className="w-5 h-5 text-[#111111]" />
                </div>
              </div>

              <p className="text-[14px] text-[#707072] mt-3 leading-relaxed">
                {store.address}
              </p>

              <div className="mt-4 space-y-2 text-[13px] text-[#707072]">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#111111]" />
                  <span>{store.hours}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#111111]" />
                  <span>{store.phone}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between">
              <span className="text-[13px] text-[#15803D] font-semibold flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#15803D] inline-block animate-pulse" />
                <span>Open Now</span>
              </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + ' ' + store.city)}`}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-semibold text-[#111111] hover:text-[#707072] flex items-center space-x-1 underline"
              >
                <span>Get Directions</span>
                <Navigation className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
