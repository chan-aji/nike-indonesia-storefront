export interface Product {
  id: string
  name: string
  subtitle: string
  price: number
  originalPrice?: number
  badge?: string
  colorwaysCount?: number
  image: string
  gallery?: string[]
  sizes: {
    label: string
    disabled?: boolean
  }[]
  description: string
  colorShown?: string
  styleCode?: string
  category: 'running' | 'lifestyle' | 'basketball' | 'tennis' | 'training' | 'kids' | 'clothing' | 'accessories'
}

export interface CartItem {
  product: Product
  size: string
  quantity: number
}

export interface NavLinkItem {
  label: string
  href: string
  badge?: string
}

export interface NavColumn {
  title: string
  links: string[]
}

export interface NavMenu {
  id: string
  label: string
  columns: NavColumn[]
}

export interface AnnouncementItem {
  id: string
  text: string
  highlight?: string
  linkText: string
  href: string
}
