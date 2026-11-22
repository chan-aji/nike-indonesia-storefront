import type { NavMenu } from '../types'

export const NAVIGATION_MENUS: NavMenu[] = [
  {
    id: 'new-featured',
    label: 'New & Featured',
    columns: [
      {
        title: 'Featured',
        links: [
          'Shop All New Arrivals',
          'Bestsellers',
          'Upcoming Drops',
          'SNKRS Launch Calendar',
          'Customise with Nike By You',
          'Member Exclusives',
          'Jordan',
          'Kobe Bryant',
          'LeBron James'
        ]
      },
      {
        title: 'Trending',
        links: [
          'Gift Sport',
          'Travel Essentials',
          'Sun-Ready Performance',
          'Just Do the Work',
          'More Colours, More Running',
          '24.7 Collection',
          'Colours of the Season',
          'Retro Running'
        ]
      },
      {
        title: 'Shop Icons',
        links: [
          'Air Force 1',
          'Air Jordan 1',
          'Air Max',
          'Dunk',
          'Cortez',
          'Blazer',
          'Pegasus',
          'Vomero'
        ]
      },
      {
        title: 'Shop By Sport',
        links: [
          'Running',
          'Basketball',
          'Football',
          'Training & Gym',
          'Tennis',
          'Golf',
          'Yoga',
          'Skateboarding'
        ]
      },
      {
        title: 'Member Benefits',
        links: [
          'Join Us',
          'Nike App',
          'Nike Training Club',
          'Nike Run Club',
          'Special Events & Experiences'
        ]
      }
    ]
  },
  {
    id: 'men',
    label: 'Men',
    columns: [
      {
        title: 'Featured',
        links: [
          'New Arrivals',
          'Bestsellers',
          'SNKRS Launch Calendar',
          'Customise with Nike By You',
          'Jordan',
          'Kobe Bryant',
          'LeBron James',
          'Sale'
        ]
      },
      {
        title: 'Shoes',
        links: [
          'All Shoes',
          'Lifestyle',
          'Jordan',
          'Running',
          'Football',
          'Basketball',
          'Gym & Training',
          'Skateboarding',
          'Tennis',
          'Sandals & Slides'
        ]
      },
      {
        title: 'Clothing',
        links: [
          'All Clothing',
          'Tops & T-Shirts',
          'Shorts',
          'Pants & Leggings',
          'Hoodies & Sweatshirts',
          'Jackets & Gilets',
          'Jerseys & Kits',
          'Socks'
        ]
      },
      {
        title: 'Accessories & Equipment',
        links: [
          'All Accessories & Equipment',
          'Bags & Backpacks',
          'Socks',
          'Hats & Headwear',
          'Water Bottles & Hydration',
          'Gloves & Scarves'
        ]
      },
      {
        title: 'Shop By Sport',
        links: [
          'Running',
          'Basketball',
          'Football',
          'Gym & Training',
          'Golf',
          'Tennis'
        ]
      }
    ]
  },
  {
    id: 'women',
    label: 'Women',
    columns: [
      {
        title: 'Featured',
        links: [
          'New Arrivals',
          'Bestsellers',
          'Member Exclusives',
          'Trending Now',
          'ACG',
          'Shop All Sale'
        ]
      },
      {
        title: 'Shoes',
        links: [
          'All Shoes',
          'Lifestyle',
          'Running',
          'Training & Gym',
          'Jordan',
          'Football',
          'Basketball',
          'Sandals & Slides',
          'Nike By You'
        ]
      },
      {
        title: 'Clothing',
        links: [
          'All Clothing',
          'Sports Bras',
          'Pants & Leggings',
          'Tops & T-Shirts',
          'Hoodies & Sweatshirts',
          'Shorts',
          'Jackets & Gilets',
          'Skirts & Dresses',
          'Modest Wear'
        ]
      },
      {
        title: 'Accessories & Equipment',
        links: [
          'All Accessories & Equipment',
          'Bags & Backpacks',
          'Socks',
          'Hats & Visors',
          'Hair Accessories'
        ]
      },
      {
        title: 'Shop By Sport',
        links: [
          'Yoga',
          'Running',
          'Gym & Training',
          'Tennis & Pickleball',
          'Basketball',
          'Football'
        ]
      }
    ]
  },
  {
    id: 'kids',
    label: 'Kids',
    columns: [
      {
        title: 'Featured',
        links: [
          'New Arrivals',
          'Bestsellers',
          'Back to School',
          'Lifestyle Looks',
          'Nike x LEGO®',
          'ACG',
          'Nike Teens'
        ]
      },
      {
        title: 'Kids By Age',
        links: [
          'Older Kids (7 - 14 years)',
          'Younger Kids (4 - 7 years)',
          'Babies & Toddlers (0 - 4 years)'
        ]
      },
      {
        title: 'Shoes',
        links: [
          'All Shoes',
          'Lifestyle',
          'Jordan',
          'Football',
          'Running',
          'Basketball',
          'Sandals & Slides'
        ]
      },
      {
        title: 'Clothing',
        links: [
          'All Clothing',
          'Tops & T-Shirts',
          'Sport Bras',
          'Hoodies & Sweatshirts',
          'Pants & Leggings',
          'Shorts',
          'Tracksuits'
        ]
      },
      {
        title: 'Accessories & Equipment',
        links: [
          'All Accessories & Equipment',
          'Bags & Backpacks',
          'Hats & Headwear',
          'Socks'
        ]
      }
    ]
  },
  {
    id: 'sale',
    label: 'Sale',
    columns: [
      {
        title: 'Featured',
        links: [
          'Shop All Sale',
          'Last Chance',
          'Member Deals'
        ]
      },
      {
        title: "Men's Sale",
        links: [
          'Shoes',
          'Clothing',
          'Accessories & Equipment'
        ]
      },
      {
        title: "Women's Sale",
        links: [
          'Shoes',
          'Clothing',
          'Accessories & Equipment'
        ]
      },
      {
        title: "Kids' Sale",
        links: [
          'Shoes',
          'Clothing',
          'Accessories & Equipment'
        ]
      },
      {
        title: 'Shop By Price',
        links: [
          'Top Picks Under Rp 500.000',
          'Rp 500.000 - Rp 1.000.000',
          'Rp 1.000.000 - Rp 1.500.000',
          'Over Rp 1.500.000'
        ]
      }
    ]
  },
  {
    id: 'gifts',
    label: 'Gifts',
    columns: [
      {
        title: 'Featured Gifts',
        links: [
          'Shop All Gifts',
          'Holiday Gifting Collection',
          'Top Rated Gifts',
          'Stocking Fillers',
          'Member Exclusives'
        ]
      },
      {
        title: 'Gifts By Recipient',
        links: [
          'Gifts For Men',
          'Gifts For Women',
          'Gifts For Kids',
          'Jordan Gifts',
          'Gifts By You'
        ]
      },
      {
        title: 'Gifts By Sport',
        links: [
          'Running Gifts',
          'Basketball Gifts',
          'Football Gifts',
          'Training & Gym Gifts',
          'Tennis Gifts'
        ]
      },
      {
        title: 'Shop By Price',
        links: [
          'Top Picks Under Rp 500.000',
          'Rp 500.000 - Rp 1.000.000',
          'Rp 1.000.000 - Rp 1.500.000',
          'Over Rp 1.500.000'
        ]
      },
      {
        title: 'Services',
        links: [
          'Gift Cards',
          'Customised Products',
          'Free Delivery & Easy Returns'
        ]
      }
    ]
  },
  {
    id: 'snkrs',
    label: 'SNKRS',
    columns: [
      {
        title: 'SNKRS Feed',
        links: [
          'In Stock',
          'Upcoming Drops',
          'Draw Schedule',
          'Exclusive Member Access'
        ]
      },
      {
        title: 'Stories',
        links: [
          'Behind The Design',
          'Origins',
          'Community Spotlight',
          'Collaborations'
        ]
      },
      {
        title: 'Top Drops',
        links: [
          'Air Jordan 4 Retro',
          'Travis Scott Jumpman Jack',
          'Nike SB Dunk Low Pro',
          'Kobe 8 Protro'
        ]
      },
      {
        title: 'Support',
        links: [
          'SNKRS FAQs',
          'Draw Guidelines',
          'Payment Methods'
        ]
      },
      {
        title: 'App',
        links: [
          'Download SNKRS iOS',
          'Download SNKRS Android'
        ]
      }
    ]
  }
]

export const TOP_UTILITY_LINKS = {
  findStore: { label: 'Find a Store', href: '#' },
  helpItems: [
    { label: 'Order Status', href: '#' },
    { label: 'Dispatch and Delivery', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Sale', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Send Us Feedback', href: '#' }
  ],
  joinUs: { label: 'Join Us', href: '#' },
  signIn: { label: 'Sign In', href: '#' }
}
