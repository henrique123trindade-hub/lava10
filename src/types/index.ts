export interface Unit {
  id: string;
  name: string;
  type: 'matriz' | 'filial';
  tag: string;
  address: string;
  neighborhood: string;
  city: string;
  hours: string;
  highlightHours?: string;
  is24Hours?: boolean;
  mapsUrl: string;
  embedQuery: string;
  image?: string;
  alt?: string;
  features: string[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  name: string;
  description: string;
  badge?: string;
  details: string[];
  price?: string; // Optional, empty by default to prevent inventing prices
  priceNotice?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'funcionamento' | 'produtos' | 'pagamento' | 'unidades';
}

export interface TipItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InstagramPost {
  id: string;
  type: 'post' | 'reels' | 'notice';
  title: string;
  caption: string;
  tag: string;
  link: string;
  colorScheme: 'blue' | 'accent' | 'dark';
}

export interface BusinessConfig {
  name: string;
  slogan: string;
  shortDescription: string;
  city: string;
  state: string;
  country: string;
  instagram: string;
  instagramHandle: string;
  whatsapp: string; // Left empty string by default as requested
  whatsappDefaultMessage: string;
  units: Unit[];
  services: ServiceItem[];
  faqs: FAQItem[];
  tips: TipItem[];
}
