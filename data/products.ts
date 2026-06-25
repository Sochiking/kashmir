export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  rating: number;
  image: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: '1', slug: 'nova-x-pro-5g', name: 'Nova X Pro 5G', category: 'Phones', price: 485000, oldPrice: 520000, badge: 'Best Seller', rating: 4.8,
    image: '/products/phone-blue.svg',
    description: 'A premium 5G smartphone with a vivid display, powerful camera system and all-day battery life.',
    features: ['6.7-inch AMOLED display', '256GB storage', '50MP triple camera', '5000mAh battery']
  },
  {
    id: '2', slug: 'pulse-buds-pro', name: 'Pulse Buds Pro', category: 'Earbuds', price: 38500, badge: 'New Arrival', rating: 4.7,
    image: '/products/earbuds.svg',
    description: 'Wireless earbuds with clear calls, rich bass and a compact charging case.',
    features: ['Active noise reduction', '30-hour total battery', 'USB-C charging', 'Low-latency mode']
  },
  {
    id: '3', slug: 'swiftcharge-45w', name: 'SwiftCharge 45W Adapter', category: 'Chargers', price: 18500, rating: 4.6,
    image: '/products/charger.svg',
    description: 'Fast and reliable charging for supported smartphones, tablets and accessories.',
    features: ['45W fast charging', 'USB-C output', 'Heat protection', 'Compact design']
  },
  {
    id: '4', slug: 'orbit-watch-s2', name: 'Orbit Watch S2', category: 'Smartwatches', price: 72500, oldPrice: 80000, badge: 'Hot Deal', rating: 4.5,
    image: '/products/watch.svg',
    description: 'A stylish smartwatch with fitness tracking, notifications and long battery life.',
    features: ['Heart-rate tracking', 'AMOLED display', 'Multiple sports modes', 'Up to 7 days battery']
  },
  {
    id: '5', slug: 'powermax-20000', name: 'PowerMax 20,000mAh', category: 'Power Banks', price: 29500, rating: 4.7,
    image: '/products/powerbank.svg',
    description: 'A high-capacity power bank designed for travel, work and everyday backup power.',
    features: ['20,000mAh capacity', 'Dual USB output', 'LED power display', 'Fast recharge']
  },
  {
    id: '6', slug: 'shieldcase-clear', name: 'ShieldCase Clear', category: 'Cases', price: 7500, badge: 'Popular', rating: 4.4,
    image: '/products/case.svg',
    description: 'A slim protective case that shows off your phone while guarding against scratches and drops.',
    features: ['Shock-absorbing corners', 'Raised camera edge', 'Crystal-clear back', 'Wireless-charging compatible']
  },
  {
    id: '7', slug: 'flex-cable-2m', name: 'FlexCable 2m USB-C', category: 'Cables', price: 6500, rating: 4.5,
    image: '/products/cable.svg',
    description: 'A durable braided cable for fast charging and dependable data transfer.',
    features: ['2-metre length', 'Braided finish', 'Fast charging support', 'Reinforced connectors']
  },
  {
    id: '8', slug: 'mini-boom-speaker', name: 'Mini Boom Speaker', category: 'Speakers', price: 26500, badge: 'New Arrival', rating: 4.6,
    image: '/products/speaker.svg',
    description: 'Portable wireless audio with punchy sound and a compact, travel-friendly design.',
    features: ['Bluetooth connectivity', '10-hour battery', 'Built-in microphone', 'Compact body']
  }
];

export const categories = ['All', 'Phones', 'Earbuds', 'Chargers', 'Smartwatches', 'Power Banks', 'Cases', 'Cables', 'Speakers'];
