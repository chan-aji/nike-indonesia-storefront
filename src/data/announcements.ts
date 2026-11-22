export interface AnnouncementItem {
  id: string
  text: string
  links: {
    label: string
    href: string
  }[]
}

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    text: 'Free Standard Delivery & 30-Day Free Returns',
    links: [
      { label: 'Join Now', href: '#' },
      { label: 'View Details', href: '#' }
    ]
  },
  {
    id: 'ann-2',
    text: 'Save Up to 40% on Selected Running Gear — Limited Time Only.',
    links: [
      { label: 'Shop Sale', href: '#' }
    ]
  },
  {
    id: 'ann-3',
    text: 'Move, Shop, Customise & Celebrate With Us.',
    links: [
      { label: 'Join Nike Membership', href: '#' }
    ]
  }
]
