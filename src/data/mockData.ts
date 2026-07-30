import { GoogleReview, PackageItem, ShowcaseProject, VideoTestimonial } from '../types';

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Raj K.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '3 months ago',
    text: 'Highly recommend Rahul Singh & Clickin Digital - they help you to promote your business. Rahul is a very helpful person and having a very good knowledge, lot of creative ideas! Thank you Clickin Digital for a famous agency status.',
    ownerResponse: {
      dateAgo: '3 months ago',
      text: 'Thank you Raj ji for your trust in Clickin Digital! We are always glad to assist you in providing best digital marketing and web solutions.'
    }
  },
  {
    id: 'rev-2',
    author: 'Simar Bhatia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '2 months ago',
    text: 'Clickin Digital is a one stop solution for all your Website and Social Media concerns. They built my website with such precision and were extremely patient throughout... More',
    ownerResponse: {
      dateAgo: '2 months ago',
      text: 'Thank you so much for the 5-star review! We are glad to hear that you liked our work and support.'
    }
  },
  {
    id: 'rev-3',
    author: 'Neha Sood',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '4 months ago',
    text: 'In starting I was a bit confused that I should go with them or not. But they convinced me to take their service... And now I must say I recommend to each and everyone to go with them as they are very supportive and helpful at any time of the day. I truly recommend them to everyone!',
    ownerResponse: {
      dateAgo: '4 months ago',
      text: 'Thank you so much for your kind review! We always ensure complete peace of mind and prompt support.'
    }
  },
  {
    id: 'rev-4',
    author: 'Akansha Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '1 month ago',
    text: 'Clickin Digital is an amazing company. Employees are professional and also good listener. I was grateful to hand over project to Rahul Singh. Completed project on time and with responsibility. The kind of prompt response that we got was great.',
    ownerResponse: {
      dateAgo: '1 month ago',
      text: 'Thank you Akansha ji for sharing your valuable feedback! We look forward to continuing our partnership.'
    }
  },
  {
    id: 'rev-5',
    author: 'Chitra Kumar',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '3 months ago',
    text: 'The green sign: Very professional and excellent team member, highly recommended! Quick resolution & creative execution.',
    ownerResponse: {
      dateAgo: '3 months ago',
      text: 'Thank you for your kind words and trust in Rahul Singh & Clickin Digital.'
    }
  },
  {
    id: 'rev-6',
    author: 'Tannu Verma',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    timeAgo: '5 months ago',
    text: 'Nice service... The whole team is really hard working and will provide you a website and automation graphics as per your expectation. Truly recommended to everyone looking for digital growth.',
    ownerResponse: {
      dateAgo: '5 months ago',
      text: 'Thank you Tannu ji for showing your trust in Clickin Digital!'
    }
  }
];

export const PRICING_PACKAGES: PackageItem[] = [
  {
    id: 'landing-page',
    name: 'LANDING PAGE',
    subtitle: 'Perfect for Startups & Small Businesses',
    price: '₹3,999',
    features: [
      '1 Premium Responsive Landing Page',
      'Mobile Friendly Design',
      'WhatsApp Click-to-Chat Button',
      'Contact Form',
      'Basic SEO Setup',
      'SSL Certificate Setup',
      'Fast Loading Website',
      '1 Free Revision',
      '7 Days Free Support'
    ]
  },
  {
    id: 'professional-website',
    name: 'PROFESSIONAL WEBSITE',
    subtitle: 'Best for Growing Businesses',
    price: '₹8,000',
    popular: true,
    badge: 'Most Popular',
    features: [
      'Up to 5 Custom Pages',
      'Premium Responsive Design',
      'Contact Form',
      'WhatsApp Integration',
      'Google Maps Integration',
      'Basic SEO Setup',
      'Speed Optimization',
      'Social Media Integration',
      'SSL Certificate Setup',
      '1 Business Email',
      '2 Free Revisions',
      '15 Days Free Support'
    ]
  },
  {
    id: 'booking-website',
    name: 'BOOKING WEBSITE',
    subtitle: 'Perfect for Clinics, Salons, Gyms & Consultants',
    price: '₹12,000',
    features: [
      'Up to 7 Pages',
      'Appointment Booking System',
      'WhatsApp Confirmation',
      'Email Notification',
      'Razorpay Payment Integration',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Admin Dashboard',
      'Contact & Inquiry Forms',
      '30 Days Free Support'
    ]
  },
  {
    id: 'ecommerce-website',
    name: 'E-COMMERCE WEBSITE',
    subtitle: 'Launch Your Online Store',
    price: 'Starting ₹15,000',
    features: [
      'Up to 25 Products',
      'Shopping Cart',
      'Razorpay Payment Gateway',
      'Cash on Delivery Option',
      'Product Categories',
      'Order Management',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Coupon System',
      'Admin Panel',
      '30 Days Free Support'
    ]
  }
];

export const OPTIONAL_ADDONS = [
  { name: 'Extra Page', price: '₹800/Page', icon: 'FileText' },
  { name: 'Business Email', price: '₹500', icon: 'Mail' },
  { name: 'Logo Design', price: '₹1,000', icon: 'Palette' },
  { name: 'Content Writing', price: '₹500/Page', icon: 'PenTool' },
  { name: 'Premium Images', price: '₹500', icon: 'Image' },
  { name: 'Payment Gateway Setup', price: '₹1,000', icon: 'CreditCard' },
  { name: 'Blog Setup', price: '₹1,500', icon: 'Layout' },
  { name: 'Booking System Upgrade', price: '₹3,000', icon: 'Calendar' },
  { name: 'Advanced SEO', price: '₹5,000+', icon: 'Search' },
  { name: 'Smart Chatbot', price: '₹5,000+', icon: 'MessageSquare' },
  { name: 'WhatsApp Automation', price: '₹7,500+', icon: 'MessageSquare' },
  { name: 'Monthly Website Maintenance', price: '₹999/month', icon: 'ShieldCheck' }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'site-yancure',
    title: 'Yancure Health & Wellness Portal',
    domain: 'www.yancure.com',
    fullUrl: 'https://www.yancure.com',
    category: 'local-business',
    clientIndustry: 'Healthcare & Wellness',
    deliveryTime: 'Delivered in 48 Hours',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    url: 'https://www.yancure.com',
    description: 'Premier health & wellness portal featuring patient consultation desk, medical services showcase, responsive appointment inquiry forms, and SSL security.',
    tags: ['www.yancure.com', 'Healthcare', 'Doctor Consultation', 'Live Domain', 'SEO Optimized']
  },
  {
    id: 'site-doctoryog',
    title: 'Doctor Yog - Holistic Medical & Yoga Portal',
    domain: 'www.doctoryog.com',
    fullUrl: 'https://www.doctoryog.com',
    category: 'local-business',
    clientIndustry: 'Medical & Tele-Consultation',
    deliveryTime: 'Delivered in 3 Days',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    url: 'https://www.doctoryog.com',
    description: 'Holistic healthcare and yoga therapy website built with online appointment booking, WhatsApp instant lead alert, patient testimonials, and high Google organic ranking.',
    tags: ['www.doctoryog.com', 'Doctor Booking', 'Yoga & Health', 'Live Domain', 'WhatsApp Leads']
  },
  {
    id: 'site-giholidays',
    title: 'GI Holidays - Tour Packages & Holiday Booking',
    domain: 'www.giholidays.in',
    fullUrl: 'https://www.giholidays.in',
    category: 'website',
    clientIndustry: 'Tours, Travel & Hospitality',
    deliveryTime: 'Delivered in 4 Days',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80',
    url: 'https://www.giholidays.in',
    description: 'Interactive travel and tour portal showcasing domestic & international holiday packages, custom itinerary request engines, and instant WhatsApp inquiry desks.',
    tags: ['www.giholidays.in', 'Travel & Tours', 'Holiday Packages', 'Live Domain', 'Inquiry Engine']
  },
  {
    id: 'site-shopeasymart',
    title: 'ShopEasyMart - Online E-Commerce Superstore',
    domain: 'www.shopeasymart.in',
    fullUrl: 'https://www.shopeasymart.in',
    category: 'e-commerce',
    clientIndustry: 'E-Commerce & Retail Superstore',
    deliveryTime: 'Delivered in 5 Days',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
    url: 'https://www.shopeasymart.in',
    description: 'Feature-loaded e-commerce web application with product categories, instant search filters, shopping cart, Razorpay payment gateway, and order tracking.',
    tags: ['www.shopeasymart.in', 'E-Commerce', 'Razorpay Gateway', 'Live Domain', 'Online Store']
  },
  {
    id: 'site-pulsevaid',
    title: 'Pulse Vaid - Ayurvedic Care & Health Platform',
    domain: 'www.pulsevaid.com',
    fullUrl: 'https://www.pulsevaid.com',
    category: 'local-business',
    clientIndustry: 'Ayurveda & Herbal Wellness',
    deliveryTime: 'Delivered in 3 Days',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=800&auto=format&fit=crop&q=80',
    url: 'https://www.pulsevaid.com',
    description: 'Authentic Ayurvedic treatment website with pulse diagnosis information, herbal product catalog, consultation booking, and automated client lead management.',
    tags: ['www.pulsevaid.com', 'Ayurveda Care', 'Herbal Products', 'Live Domain', 'Tele-Consultation']
  },
  {
    id: 'site-technosolutions',
    title: 'Techno Solutions - IT & Tech Agency Portal',
    domain: 'www.techno-solutions.tech',
    fullUrl: 'https://www.techno-solutions.tech',
    category: 'website',
    clientIndustry: 'IT Services & Software Solutions',
    deliveryTime: 'Delivered in 4 Days',
    verifiedBadge: true,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
    url: 'https://www.techno-solutions.tech',
    description: 'High-tech B2B IT & digital agency platform featuring software service portfolios, client case studies, high-speed responsive UI, and custom lead funnels.',
    tags: ['www.techno-solutions.tech', 'IT Agency', 'Tech Solutions', 'Live Domain', 'B2B Portal']
  },
  {
    id: 'proj-1',
    title: 'Luxury Interior & Architecture Showcase',
    domain: 'architects-portfolio.com',
    fullUrl: 'https://architects-portfolio.com',
    category: 'website',
    clientIndustry: 'Architecture & Interior Design',
    deliveryTime: 'Delivered in 48 Hours',
    verifiedBadge: true,
    image: 'https://lh3.googleusercontent.com/d/126tmb7V5fbLsTVgZQyMHun-6INW5BKh6',
    url: 'https://drive.google.com/file/d/126tmb7V5fbLsTVgZQyMHun-6INW5BKh6/view?usp=drive_link',
    description: 'High-converting interior design & architectural showcase featuring luxury product galleries, full page layouts, and interactive consultation booking.',
    tags: ['Architecture', 'Interior Design', 'Lead Gen', 'Live Client Web']
  },
  {
    id: 'proj-2',
    title: 'Comfort Cotton - Ethnic Fashion E-Commerce',
    domain: 'comfortcotton.in',
    fullUrl: 'https://comfortcotton.in',
    category: 'e-commerce',
    clientIndustry: 'Fashion & Apparel',
    deliveryTime: 'Delivered in 4 Days',
    verifiedBadge: true,
    image: 'https://lh3.googleusercontent.com/d/1B6MApIk28CUTnLi5tTOxHvo5Sn6c_KkF',
    url: 'https://drive.google.com/file/d/1B6MApIk28CUTnLi5tTOxHvo5Sn6c_KkF/view?usp=drive_link',
    description: 'Custom online clothing catalog featuring responsive festive collection banners, product filters, and instant Razorpay checkout.',
    tags: ['E-Commerce', 'Fashion Store', 'Razorpay Gateway', 'Mobile Responsive']
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'v-1',
    name: 'Rajinder Soni',
    role: 'Business Owner',
    company: 'Soni Electronics',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    quote: 'We were very impressed with all the aspects of our new website and lead automation. We would highly recommend Clickin Digital for Digital Marketing Solutions!'
  },
  {
    id: 'v-2',
    name: 'Komal Rastogi',
    role: 'Boutique Founder',
    company: 'Ethnic Elegance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
    quote: 'Clickin Digital team delivered our project within 5 days! Sales increased by 140% after implementing automated follow-up sequences.'
  },
  {
    id: 'v-3',
    name: 'Deepanshu',
    role: 'Clinic Manager',
    company: 'Arogya Dental',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80',
    quote: 'Clickin Digital is a great company. I hire them for a lot more than just building a website. They are our true growth partners.'
  }
];

export const TEXT_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Praveen Khosle',
    role: 'Jeweller',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80',
    quote: 'We were very impressed with all the aspects of our new website. We would highly recommend Clickin Digital for Digital Marketing Solutions.'
  },
  {
    id: 't-2',
    name: 'Samarth',
    role: 'E-Commerce Merchant',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
    quote: 'Rahul Singh and his team created an incredible automated sales pipeline for us. Our customer inquiries get instant WhatsApp replies, leading to 2x higher closing rate.'
  },
  {
    id: 't-3',
    name: 'Kamal Kumar',
    role: 'Real Estate Developer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    quote: 'Clickin Digital is a great company. I hire them for a lot more than just building a website. They are like our internal marketing team.'
  },
  {
    id: 't-4',
    name: 'Milan',
    role: 'Business Consultant',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    quote: 'We interviewed many digital marketing firms but it was clear right from starting that Clickin Digital was the best choice.'
  },
  {
    id: 't-5',
    name: 'Ashok Meena',
    role: 'Institute Owner',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
    quote: 'We re-did our website twice in one year and the first company nowhere stands in front of Clickin Digital. Good job Guys!'
  },
  {
    id: 't-6',
    name: 'Surbhi Panchal',
    role: 'Event Organiser',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    quote: 'Attentive to detail, great communications skills. Rahul really understood each and everything required for our grand event launch.'
  }
];
