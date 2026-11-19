import heroImageAsset from '../assets/images/hero_png_business_digital_1791590731144.jpg';
import whyChooseImageAsset from '../assets/images/why_choose_png_sme_1791590742386.jpg';
import portfolioDiscoverPngAsset from '../assets/images/portfolio_discover_png_tourism_1791590752158.jpg';
import portfolioCoffeeAsset from '../assets/images/portfolio_highlands_coffee_sme_1791590763708.jpg';
import portfolioLodgeAsset from '../assets/images/portfolio_hospitality_lodge_png_1791590774258.jpg';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'blog'
  | 'resources'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface TrustCard {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'search' | 'shield' | 'megaphone' | 'trending';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  formOptionValue: string;
  description: string;
  listHeading: string;
  items: string[];
  ctaText: string;
  iconName: 'globe' | 'share2' | 'palette' | 'target' | 'fileText' | 'graduationCap';
}

export interface PortfolioProject {
  id: string;
  title: string;
  category:
    | 'Business Websites'
    | 'Hospitality and Tourism'
    | 'Restaurant Solutions'
    | 'Graphic Design'
    | 'Social Media Marketing'
    | 'Digital Business Solutions';
  projectTypeLabel: string;
  shortDescription: string;
  image: string;
  clientSector: string;
  locationContext: string;
  overview: string;
  keyFeatures: string[];
  deliverables: string[];
  relatedServiceOption: string;
}

export interface WebsitePackage {
  id: string;
  name: string;
  subtitle: string;
  priceStatus: string;
  inclusions: string[];
  ctaText: string;
  featured?: boolean;
  formServiceValue: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SmeArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  image: string;
  featured?: boolean;
  shortIntro: string;
  summaryPoints: string[];
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
  }[];
  practicalTip: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BRAND_INFO = {
  name: 'Redline Digital Solution',
  country: 'Papua New Guinea',
  tagline: 'WE BUILD WEBSITES THAT BUILD YOUR BUSINESS!',
  supportingStatement: 'Helping PNG Businesses Go Digital, Get Customers & Grow.',
  mission:
    'To empower local businesses across Papua New Guinea by providing smart, scalable, and professional digital solutions that help them reach more customers and grow their businesses.',
  founderName: 'Rodney Leo Mombi',
  founderRole: 'Founder | Redline Digital Solution',
  founderMessage:
    'My vision is to help Papua New Guinea businesses use technology to open new opportunities, reach more customers, and build stronger businesses for the future.',
  location: 'Banz, Jiwaka Province, Papua New Guinea',
  regionDetail: 'Highlands Region, Papua New Guinea',
  phoneDisplay: '+675 74590895',
  phoneRaw: '67574590895',
  email: 'redlinedigitalsolution@gmail.com',
  socialHandle: '@RedlineDigitalSolution',
  defaultWhatsAppMessage:
    'Hello Redline Digital Solution. I would like to know more about your digital services for my business.',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BRAND_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}

const BASE = import.meta.env.BASE_URL || './';

export const HERO_IMAGE = heroImageAsset;
export const FOUNDER_IMAGE = `${BASE}assets/aistudio/rodney_office_set_f036b419.png`;
export const HERO_BG_IMAGE = `${BASE}assets/aistudio/website_designs_d4abe031.jpg`;
export const WHY_CHOOSE_IMAGE = whyChooseImageAsset;
export const PORTFOLIO_DISCOVER_PNG_IMAGE = portfolioDiscoverPngAsset;
export const PORTFOLIO_COFFEE_IMAGE = portfolioCoffeeAsset;
export const PORTFOLIO_LODGE_IMAGE = portfolioLodgeAsset;

export const TRUST_CARDS: TrustCard[] = [
  {
    id: 'get-found-online',
    number: '01',
    title: 'GET FOUND ONLINE',
    description:
      'Help customers discover your business, products, and services through a professional website.',
    iconName: 'search',
  },
  {
    id: 'build-customer-trust',
    number: '02',
    title: 'BUILD CUSTOMER TRUST',
    description:
      'Present your business professionally with clear information, quality graphics, and a consistent brand.',
    iconName: 'shield',
  },
  {
    id: 'reach-more-customers',
    number: '03',
    title: 'REACH MORE CUSTOMERS',
    description:
      'Use digital marketing and social media to introduce your products and services to potential customers.',
    iconName: 'megaphone',
  },
  {
    id: 'grow-your-business',
    number: '04',
    title: 'GROW YOUR BUSINESS',
    description:
      'Make it easier for customers to learn about your services, send enquiries, and contact you.',
    iconName: 'trending',
  },
];

export const DIGITAL_SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Professional Website Development',
    formOptionValue: 'Website Development',
    description:
      'We design professional, mobile-friendly websites that help customers learn about your business, explore your services, and contact you easily.',
    listHeading: 'Ideal for:',
    items: [
      'Hotels and lodges',
      'Restaurants and cafés',
      'Shops and SMEs',
      'Tourism operators',
      'Construction companies',
      'Professional service providers',
    ],
    ctaText: 'REQUEST A WEBSITE',
    iconName: 'globe',
  },
  {
    id: 'social-media-marketing',
    number: '02',
    title: 'Social Media Marketing',
    formOptionValue: 'Social Media Marketing',
    description:
      'Build a stronger online presence with professional social media content, business page support, promotional campaigns, and digital marketing guidance.',
    listHeading: 'Services include:',
    items: [
      'Facebook Business Page setup',
      'Social media content planning',
      'Promotional post design',
      'Business page improvement',
      'Advertising campaign support',
    ],
    ctaText: 'GROW MY ONLINE PRESENCE',
    iconName: 'share2',
  },
  {
    id: 'graphic-design-branding',
    number: '03',
    title: 'Graphic Design and Branding',
    formOptionValue: 'Graphic Design and Branding',
    description:
      'Make your business stand out with professional graphics and consistent branding that customers can recognise.',
    listHeading: 'Services include:',
    items: [
      'Logo design',
      'Business flyers and posters',
      'Promotional graphics',
      'Business cards',
      'Social media designs',
      'Branding materials',
    ],
    ctaText: 'DESIGN MY BRAND',
    iconName: 'palette',
  },
  {
    id: 'digital-advertising',
    number: '04',
    title: 'Digital Advertising',
    formOptionValue: 'Digital Advertising',
    description:
      'Promote your products and services through carefully planned digital advertising campaigns designed around your business goals and budget.',
    listHeading: 'Services include:',
    items: [
      'Advertising campaign setup',
      'Audience targeting guidance',
      'Promotional campaign planning',
      'Campaign performance review',
    ],
    ctaText: 'DISCUSS ADVERTISING',
    iconName: 'target',
  },
  {
    id: 'business-digital-documents',
    number: '05',
    title: 'Business Digital Documents',
    formOptionValue: 'Business Documents and Templates',
    description:
      'Save time and present your business professionally with practical digital documents and templates.',
    listHeading: 'Products and services may include:',
    items: [
      'Business proposal templates',
      'Invoice and quotation templates',
      'Business planning templates',
      'Digital guides and eBooks',
      'Business forms and documents',
    ],
    ctaText: 'EXPLORE DIGITAL PRODUCTS',
    iconName: 'fileText',
  },
  {
    id: 'sme-digital-training',
    number: '06',
    title: 'SME Digital Training',
    formOptionValue: 'SME Digital Training',
    description:
      'Learn practical digital skills to promote your business, improve your online presence, and use technology more effectively.',
    listHeading: 'Training topics may include:',
    items: [
      'How to set up a Facebook Business Page',
      'How to promote products online',
      'How to create professional business graphics',
      'How to attract enquiries through digital channels',
      'How websites support business growth',
    ],
    ctaText: 'ASK ABOUT TRAINING',
    iconName: 'graduationCap',
  },
];

export const WHY_CHOOSE_POINTS: string[] = [
  'Solutions designed for PNG businesses.',
  'Simple explanations without confusing technical language.',
  'Professional and modern designs.',
  'Mobile-friendly website experiences.',
  'Practical digital marketing support.',
  "Solutions tailored to each client's needs.",
  'Clear communication throughout the project.',
  'Ongoing support options where agreed.',
];

export const PORTFOLIO_CATEGORIES = [
  'All Projects',
  'Business Websites',
  'Hospitality and Tourism',
  'Restaurant Solutions',
  'Graphic Design',
  'Social Media Marketing',
  'Digital Business Solutions',
] as const;

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'discover-png-tourism',
    title: 'Discover PNG — Nature, Culture & Adventure',
    category: 'Hospitality and Tourism',
    projectTypeLabel: 'Demonstration Concept Showcase',
    shortDescription:
      'Multi-device tourism and cultural tour operator website concept designed to showcase Papua New Guinea destinations, guided treks, and direct booking enquiries.',
    image: PORTFOLIO_DISCOVER_PNG_IMAGE,
    clientSector: 'Tourism & Tour Operators',
    locationContext: 'Papua New Guinea National Tourism Concept',
    overview:
      'Designed as Redline Digital Solution’s flagship demonstration showcase, Discover PNG illustrates how local tour operators, cultural festival organizers, and travel agencies can present Papua New Guinea’s landscapes and heritage across desktop computers, tablets, and mobile phones.',
    keyFeatures: [
      'Mobile-responsive destination showcase across desktop, laptop, tablet, and phone',
      'Dedicated itinerary sections for Highlands cultural tours and coastal expeditions',
      'Clear call-to-action buttons for tour enquiries and WhatsApp trip planning',
      'Fast-loading photo galleries optimised for PNG mobile data networks',
    ],
    deliverables: [
      'Multi-page responsive website layout',
      'Mobile navigation & quick enquiry bar',
      'Tour package comparison cards',
      'Direct WhatsApp & email enquiry integration',
    ],
    relatedServiceOption: 'Website Development',
  },
  {
    id: 'tufi-eco-lodge-hospitality',
    title: 'Tufi Fiord Coastal Eco-Lodge & Booking Portal',
    category: 'Hospitality and Tourism',
    projectTypeLabel: 'Demonstration Concept Showcase',
    shortDescription:
      'A clean, welcoming website concept for PNG lodges, guesthouses, and boutique hotels featuring bungalow room galleries, activity lists, and direct room availability requests.',
    image: PORTFOLIO_LODGE_IMAGE,
    clientSector: 'Hotels, Lodges & Guesthouses',
    locationContext: 'Provincial Hospitality & Eco-Tourism',
    overview:
      'Many lodges and guesthouses across Papua New Guinea rely on word-of-mouth or scattered social media posts. This demonstration project shows how a dedicated hospitality website organizes accommodation rates, room photos, airport transfer information, and direct booking request forms in one trusted place.',
    keyFeatures: [
      'Bungalow and room category showcase with clear amenities list',
      'Direct room availability & dates enquiry form without third-party commission fees',
      'Signature tours and local cultural activity highlights',
      'One-tap WhatsApp reservation chat for domestic and international travellers',
    ],
    deliverables: [
      'Hospitality website design',
      'Room & accommodation showcase pages',
      'Direct booking request form',
      'Location & travel instructions page',
    ],
    relatedServiceOption: 'Website Development',
  },
  {
    id: 'highlands-arabica-cafe',
    title: 'Highlands Arabica Café & Restaurant Menu Website',
    category: 'Restaurant Solutions',
    projectTypeLabel: 'Demonstration Concept Showcase',
    shortDescription:
      'Mobile-friendly restaurant and coffee shop website concept featuring digital menu cards, local Highlands dishes, catering enquiries, and WhatsApp order buttons.',
    image: PORTFOLIO_COFFEE_IMAGE,
    clientSector: 'Restaurants, Cafés & Roasteries',
    locationContext: 'Highlands & Urban Café Concept, PNG',
    overview:
      'Built to demonstrate how cafés, bakeries, and restaurants in PNG can display their daily menu, coffee blends, and catering packages on customers’ smartphones. Customers can browse dishes and message the café directly for table bookings or takeaway orders.',
    keyFeatures: [
      'Visual digital menu with dish photography and clear categories',
      'Mobile-first layout designed for quick browsing on smartphones',
      'Catering and corporate function enquiry section',
      'Opening hours, location directions, and instant WhatsApp ordering button',
    ],
    deliverables: [
      'Restaurant website & digital menu layout',
      'Printed & digital menu card design alignment',
      'Mobile quick-order WhatsApp link',
      'Brand visual styling',
    ],
    relatedServiceOption: 'Website Development',
  },
  {
    id: 'bilum-retail-sme-website',
    title: 'Local SME Retail, Crafts & Coffee Storefront Concept',
    category: 'Business Websites',
    projectTypeLabel: 'Demonstration Concept Showcase',
    shortDescription:
      'Practical small business website concept for PNG retail shops, local artisans, and producers looking to showcase products and receive wholesale or retail enquiries.',
    image: HERO_IMAGE,
    clientSector: 'SMEs, Retail & Local Producers',
    locationContext: 'Papua New Guinea Small Business Sector',
    overview:
      'This demonstration concept shows how a local Papua New Guinea producer, artisan craft store, or retail shop can present its story, product range, wholesale supply options, and contact details clearly so both local buyers and corporate clients can do business with confidence.',
    keyFeatures: [
      'Clear company introduction and proudly Papua New Guinean brand story',
      'Featured product catalogue with wholesale and retail enquiry buttons',
      'Simple contact section with phone, email, and WhatsApp click-to-chat',
      'Search-friendly structure to help customers find the business on Google',
    ],
    deliverables: [
      'Business website design',
      'Product & service overview section',
      'Mobile-responsive layout',
      'Customer enquiry integration',
    ],
    relatedServiceOption: 'Website Development',
  },
  {
    id: 'png-sme-brand-identity-pack',
    title: 'PNG SME Brand Identity, Logo & Promotional Flyer Kit',
    category: 'Graphic Design',
    projectTypeLabel: 'Demonstration Concept Showcase',
    shortDescription:
      'Cohesive visual branding demonstration including logo design, business cards, printed promotional flyers, and signage layouts for local businesses.',
    image: WHY_CHOOSE_IMAGE,
    clientSector: 'Startups & Growing SMEs',
    locationContext: 'PNG Business Branding',
    overview:
      'Consistent graphic design helps a small business look established and trustworthy. This demonstration showcase illustrates how Redline Digital Solution creates matching logos, business cards, and promotional posters that work both in print and on mobile screens.',
    keyFeatures: [
      'Clean, memorable business logo suitable for signage, uniforms, and social media',
      'Print-ready promotional flyers and posters with clear service highlights',
      'Professional business card layout for company directors and sales teams',
      'Consistent colour palette and typography guide',
    ],
    deliverables: [
      'Primary & secondary logo files',
      'Business card & letterhead design',
      'Promotional flyer & poster artwork',
      'Social media profile & cover graphics',
    ],
    relatedServiceOption: 'Graphic Design and Branding',
  },
  {
    id: 'sme-facebook-growth-campaign',
    title: 'SME Social Media Content & Promotional Campaign Kit',
    category: 'Social Media Marketing',
    projectTypeLabel: 'Demonstration Concept Showcase',
    shortDescription:
      'Structured Facebook Business Page setup and promotional post series designed to help PNG businesses communicate clearly and attract genuine customer enquiries.',
    image: PORTFOLIO_COFFEE_IMAGE,
    clientSector: 'Retail, Hospitality & Service Providers',
    locationContext: 'PNG Social Media Marketing',
    overview:
      'Many Papua New Guinea customers use Facebook daily on their mobile phones. This demonstration project shows how a well-organised Facebook Business Page paired with branded promotional graphics and clear WhatsApp call-to-action links helps turn page visitors into real enquiries.',
    keyFeatures: [
      'Complete Facebook Business Page setup with accurate contact details and hours',
      'Branded promotional post templates for weekly product or service spotlights',
      'Targeted campaign planning tailored to PNG provinces and urban centres',
      'Direct message and WhatsApp response flow setup',
    ],
    deliverables: [
      'Facebook Business Page optimization',
      'Monthly content calendar structure',
      'Branded social media post graphics',
      'Promotional campaign setup guidance',
    ],
    relatedServiceOption: 'Social Media Marketing',
  },
  {
    id: 'sme-business-documents-suite',
    title: 'PNG SME Quotation, Invoice & Business Proposal Templates',
    category: 'Digital Business Solutions',
    projectTypeLabel: 'Demonstration Concept Showcase',
    shortDescription:
      'Ready-to-use digital business document templates helping contractors, suppliers, and SMEs submit clean quotations, invoices, and company proposals.',
    image: WHY_CHOOSE_IMAGE,
    clientSector: 'Contractors, Suppliers & Service SMEs',
    locationContext: 'PNG Commercial & SME Administration',
    overview:
      'When bidding for contracts or supplying goods to companies and government departments in PNG, presenting a neat, well-structured quotation or proposal makes a strong impression. This demonstration showcase highlights custom-branded digital templates that business owners can easily edit on their laptop or phone.',
    keyFeatures: [
      'Branded company quotation and tax invoice templates formatted in PGK (Kina)',
      'Structured business proposal and company profile template for tenders',
      'Easy-to-edit formats compatible with standard office software',
      'Clear payment terms and contact footer blocks',
    ],
    deliverables: [
      'Custom Quotation & Invoice templates',
      'Company Profile / Business Proposal template',
      'Standard client enquiry & order forms',
      'Quick-start guide for staff',
    ],
    relatedServiceOption: 'Business Documents and Templates',
  },
];

export const WEBSITE_PACKAGES: WebsitePackage[] = [
  {
    id: 'starter-website',
    name: 'STARTER WEBSITE',
    subtitle: 'Suitable for small businesses getting started online.',
    priceStatus: 'Request a Quote',
    inclusions: [
      'Professional single-page website',
      'Business introduction',
      'Services or product overview',
      'Contact information',
      'WhatsApp contact button',
      'Mobile-responsive design',
    ],
    ctaText: 'REQUEST A QUOTE',
    formServiceValue: 'Website Development',
  },
  {
    id: 'business-website',
    name: 'BUSINESS WEBSITE',
    subtitle: 'Suitable for growing SMEs that need more information and features.',
    priceStatus: 'Request a Quote',
    featured: true,
    inclusions: [
      'Multiple website pages',
      'About Us section',
      'Detailed services or products',
      'Photo gallery',
      'Contact form',
      'WhatsApp contact',
      'Basic search engine optimisation',
    ],
    ctaText: 'REQUEST A QUOTE',
    formServiceValue: 'Website Development',
  },
  {
    id: 'business-growth-solution',
    name: 'BUSINESS GROWTH SOLUTION',
    subtitle: 'Suitable for businesses requiring a broader digital presence.',
    priceStatus: 'Custom Project Quote',
    inclusions: [
      'Custom website design',
      'Expanded service or product pages',
      'Social media integration',
      'Enquiry generation features',
      'Google Maps integration, where appropriate',
      'Additional business features based on requirements',
    ],
    ctaText: 'DISCUSS MY PROJECT',
    formServiceValue: 'Website Development',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'TELL US ABOUT YOUR BUSINESS',
    description:
      'Contact us and explain what your business does and what you want to achieve.',
  },
  {
    number: '02',
    title: 'DISCUSS YOUR REQUIREMENTS',
    description:
      'We discuss your needs, recommended features, budget, and project scope.',
  },
  {
    number: '03',
    title: 'WE BUILD YOUR SOLUTION',
    description:
      'Once the proposal is approved, we design and develop your agreed digital solution.',
  },
  {
    number: '04',
    title: 'LAUNCH AND GROW',
    description:
      'After testing and approval, we launch your project and explain how to use it. Ongoing support can be arranged where required.',
  },
];

export const BLOG_CATEGORIES = [
  'All Posts',
  'Website Strategy',
  'Social Media',
  'Digital Marketing',
  'Hospitality & Tourism',
  'Graphic Design',
  'Customer Growth',
] as const;

export const SME_ARTICLES: SmeArticle[] = [
  {
    id: 'five-reasons-png-business-needs-website',
    title: 'Five Reasons Your PNG Business Needs a Website',
    category: 'Website Strategy',
    readTime: '4 min read',
    publishedDate: 'October 2026',
    author: 'Rodney Leo Mombi',
    image: HERO_IMAGE,
    featured: true,
    shortIntro:
      'Discover how a professional website helps Papua New Guinea small businesses build credibility, share clear information, and receive enquiries 24 hours a day.',
    summaryPoints: [
      'A dedicated online home that you control',
      'Builds trust with corporate clients, tourists, and everyday shoppers',
      'Makes your phone number, WhatsApp, and location easy to find',
    ],
    sections: [
      {
        heading: '1. Customers Search on Mobile Phones First',
        body: 'Across Papua New Guinea—from Port Moresby, Lae, and Mount Hagen to Banz, Kokopo, and Madang—more people use smartphones every day to look up businesses, check services, and compare suppliers. Having a website means that when someone searches for your business name or service, they find clear, accurate information immediately.',
      },
      {
        heading: '2. A Professional Website Builds Instant Trust',
        body: 'Whether you run a guesthouse, a construction contracting firm, a coffee trade business, or a local retail shop, potential customers and corporate buyers want to know you are a genuine, reliable operation. A well-structured website showing your services, location, and contact details gives people confidence to contact you.',
      },
      {
        heading: '3. Your Business Information Is Organised in One Place',
        body: 'On social media, important posts about your pricing, services, or phone number quickly get buried under newer posts. On your website, your About Us page, Services list, Photo Gallery, and Contact page stay neatly organised at all times.',
      },
      {
        heading: '4. Easy Direct Contact via WhatsApp and Enquiry Forms',
        body: 'A modern business website connects visitors straight to your team. With one tap on a mobile screen, a customer can open a WhatsApp chat with your business or send a structured project enquiry.',
      },
      {
        heading: '5. Supports Your Long-Term Business Growth',
        body: 'As your business expands—adding new products, accommodation rooms, or service branches—your website grows with you. You can start with a simple Starter Website and expand into a multi-page Business Website as your needs develop.',
      },
    ],
    practicalTip:
      'Start simple: gather 5–10 clear photos of your business, write down the main services you offer, and list how customers prefer to contact you (Phone, WhatsApp, or Email).',
  },
  {
    id: 'how-to-set-up-facebook-business-page',
    title: 'How to Set Up a Professional Facebook Business Page',
    category: 'Social Media',
    readTime: '5 min read',
    publishedDate: 'September 2026',
    author: 'Rodney Leo Mombi',
    image: WHY_CHOOSE_IMAGE,
    shortIntro:
      'A step-by-step beginner guide for PNG entrepreneurs on setting up a clean, trustworthy Facebook Business Page that connects customers to your business.',
    summaryPoints: [
      'Separate your personal profile from your business identity',
      'Use a clear logo and cover image that explain what you sell',
      'Add your PNG mobile/WhatsApp number and town location',
    ],
    sections: [
      {
        heading: '1. Use a Dedicated Business Page, Not a Personal Profile',
        body: 'Many small business owners start by posting products on their personal Facebook profile. Creating a dedicated Facebook Business Page allows anyone to view your business information, follow your updates, and see your opening hours without needing to send a friend request.',
      },
      {
        heading: '2. Choose a Clear Business Name and Category',
        body: 'Use your actual registered or trading business name so customers can recognise you easily. Select the category that best matches your work—such as Hotel & Lodge, Restaurant, Construction Company, Retail Shop, or Business Service.',
      },
      {
        heading: '3. Upload a Clean Logo and Cover Banner',
        body: 'Your profile picture should be your business logo so it looks neat next to every post and comment. Your cover photo at the top of the page is a great place to display your core services, location, and phone number.',
      },
      {
        heading: '4. Complete Your Contact Details and Location',
        body: 'Fill in your town and province (for example, Banz, Jiwaka Province or Port Moresby, NCD), your active +675 phone number, your WhatsApp number, your email address, and your website link if you have one.',
      },
      {
        heading: '5. Pin an Introductory Welcome Post',
        body: 'Write one clear post explaining what your business provides, where you are located, and how customers can order or request a quote. Pin this post to the top of your page so every new visitor sees it first.',
      },
    ],
    practicalTip:
      'Always double-check that the phone number and WhatsApp number listed on your Facebook Page are switched on during business hours so you never miss a customer call.',
  },
  {
    id: 'how-to-promote-products-using-mobile-phone',
    title: 'How to Promote Your Products Using Your Mobile Phone',
    category: 'Digital Marketing',
    readTime: '4 min read',
    publishedDate: 'September 2026',
    author: 'Rodney Leo Mombi',
    image: PORTFOLIO_COFFEE_IMAGE,
    shortIntro:
      'Practical tips on taking clear product photos, writing helpful descriptions, and responding promptly to customer enquiries using the smartphone in your pocket.',
    summaryPoints: [
      'Use natural daylight for bright, honest product and service photos',
      'Write clear descriptions that answer common customer questions',
      'Make it effortless for buyers to message you on WhatsApp',
    ],
    sections: [
      {
        heading: '1. Take Clear Photos in Good Natural Light',
        body: 'You do not need an expensive camera to show your work well. Wipe your phone camera lens clean, stand near a window or outdoors in morning or afternoon daylight, and keep the background tidy so the customer focuses on your product, meal, room, or completed project.',
      },
      {
        heading: '2. Explain How Your Product or Service Helps the Customer',
        body: 'Instead of posting a photo with no words, write two or three simple sentences: what the item or service is, who it is for, where it is available, and how the customer can order or enquire.',
      },
      {
        heading: '3. Use WhatsApp Business Tools Effectively',
        body: 'WhatsApp is one of the easiest ways for PNG customers to communicate. Save clear photos of your products or service rate cards on your phone so you can send them quickly when a customer asks for details.',
      },
      {
        heading: '4. Be Consistent and Reply Promptly',
        body: 'Posting two or three helpful updates each week is much better than posting ten times in one day and disappearing for a month. When someone sends an enquiry, a polite and timely reply builds strong trust.',
      },
    ],
    practicalTip:
      'Create a folder or album on your phone called "Business Photos" with your best images of your shop, team, products, and price list so they are always ready to share.',
  },
  {
    id: 'website-vs-facebook-page-difference',
    title: 'Website vs Facebook Page: What Is the Difference?',
    category: 'Website Strategy',
    readTime: '4 min read',
    publishedDate: 'August 2026',
    author: 'Rodney Leo Mombi',
    image: PORTFOLIO_DISCOVER_PNG_IMAGE,
    shortIntro:
      'Understand how a Facebook Business Page and a professional website serve different purposes—and how using both together strengthens your business.',
    summaryPoints: [
      'Facebook is great for regular updates and social conversation',
      'A website is your permanent, structured online headquarters',
      'Combining both gives customers confidence and convenience',
    ],
    sections: [
      {
        heading: 'How a Facebook Business Page Works',
        body: 'A Facebook Page is like a busy market noticeboard. It is ideal for sharing new arrivals, daily specials, community updates, and quick announcements where people are already scrolling on social media.',
      },
      {
        heading: 'How a Professional Website Works',
        body: 'A website is like your own well-organised office or showroom online. When someone visits your website, there are no distractions or competing adverts from other businesses. Visitors can read about your company background, inspect your full list of services, browse photo galleries by category, and submit a formal quote request.',
      },
      {
        heading: 'Why Corporate & Institutional Clients Expect a Website',
        body: 'When applying for supply contracts, tourism partnerships, or corporate service agreements, procurement officers and overseas visitors often look for an official website to verify your company profile and capabilities.',
      },
      {
        heading: 'How They Work Best Together',
        body: 'You do not have to choose one against the other. Use your Facebook Page to share regular updates and promotions, and link every post back to your website where customers can view full service details and send enquiries.',
      },
    ],
    practicalTip:
      'Add your website address directly to your Facebook Page "About" section and business cards so every social media follower can explore your full business profile.',
  },
  {
    id: 'how-to-create-professional-business-flyers',
    title: 'How to Create Professional Business Flyers',
    category: 'Graphic Design',
    readTime: '4 min read',
    publishedDate: 'August 2026',
    author: 'Rodney Leo Mombi',
    image: WHY_CHOOSE_IMAGE,
    shortIntro:
      'Learn what makes a business flyer or digital poster easy to read, visually appealing, and effective at bringing enquiries to your PNG business.',
    summaryPoints: [
      'Focus on one clear main message or offer per flyer',
      'Avoid crowding every inch of space with tiny text',
      'Make your business name and contact details unmistakable',
    ],
    sections: [
      {
        heading: '1. Start with a Strong, Clear Headline',
        body: 'Whether someone sees your flyer on a noticeboard in town or on their mobile phone screen, they should understand what you offer within three seconds. Use a bold headline such as "Fresh Highlands Arabica Coffee" or "Reliable Earthmoving & Civil Works".',
      },
      {
        heading: '2. Keep Text Short and Easy to Scan',
        body: 'One of the most common mistakes on business flyers is trying to squeeze too many paragraphs onto a single page. Use 4 to 6 short bullet points highlighting your key services or benefits.',
      },
      {
        heading: '3. Use High-Quality Photos and Consistent Brand Colours',
        body: 'Use your official logo and stick to 2 or 3 consistent brand colours (for example, your primary brand colour, black/dark grey, and white). Avoid using too many different fonts or blurry photos.',
      },
      {
        heading: '4. End with a Clear Call to Action',
        body: 'Tell the reader exactly what step to take next: "Call or WhatsApp +675...", "Visit our shop in...", or "Explore our website at...".',
      },
    ],
    practicalTip:
      'Before printing or posting a flyer, view it on a smartphone screen without zooming in. If you can read the headline, main services, and phone number easily, your layout is clear.',
  },
  {
    id: 'how-to-help-customers-find-and-contact-online',
    title: 'How to Help Customers Find and Contact Your Business Online',
    category: 'Customer Growth',
    readTime: '5 min read',
    publishedDate: 'July 2026',
    author: 'Rodney Leo Mombi',
    image: PORTFOLIO_LODGE_IMAGE,
    shortIntro:
      'Simple steps every Papua New Guinea small business can take so customers never struggle to find your location, understand your services, or reach your team.',
    summaryPoints: [
      'Keep your phone, WhatsApp, and email identical across all platforms',
      'Describe your location using clear landmarks and town names',
      'Offer multiple easy ways for customers to reach you',
    ],
    sections: [
      {
        heading: '1. Keep Your Contact Information Consistent Everywhere',
        body: 'Make sure your business name, phone number, WhatsApp number, and email address are identical on your website, Facebook Page, business cards, and invoices. If you change a phone number, update it everywhere immediately.',
      },
      {
        heading: '2. Give Clear Location Descriptions for PNG Towns',
        body: 'In Papua New Guinea, street addresses alone are not always enough. Alongside your town and province, include helpful directions or nearby landmarks so customers can locate your office, lodge, or shop without confusion.',
      },
      {
        heading: '3. Provide One-Click WhatsApp and Phone Links',
        body: 'Most customers browse on mobile phones. When your website has a working WhatsApp button and clickable phone number, a customer can reach you in a single tap without having to copy and paste numbers.',
      },
      {
        heading: '4. Use a Structured Enquiry Form for Detailed Quotes',
        body: 'For larger jobs—such as accommodation bookings, catering orders, construction quotes, or website projects—a clear enquiry form helps collect the customer’s name, business name, service needed, and project details right from the start.',
      },
    ],
    practicalTip:
      'Ask a friend or family member to look up your business on their phone and try contacting you. Their feedback will quickly show if any detail is missing or hard to find.',
  },
  {
    id: 'how-png-lodges-and-hotels-attract-direct-bookings',
    title: 'How PNG Lodges, Guesthouses & Tour Operators Can Attract Direct Enquiries',
    category: 'Hospitality & Tourism',
    readTime: '5 min read',
    publishedDate: 'July 2026',
    author: 'Rodney Leo Mombi',
    image: PORTFOLIO_LODGE_IMAGE,
    shortIntro:
      'Why travellers and corporate visitors visiting Papua New Guinea provinces look for room photos, clear rates, and airport transfer details before booking.',
    summaryPoints: [
      'Show clear photos of bedrooms, dining areas, and surroundings',
      'Explain airport pickup, security, and local tour options clearly',
      'Let guests request dates directly via website form or WhatsApp',
    ],
    sections: [
      {
        heading: '1. Travellers Want Visual Reassurance Before They Travel',
        body: 'Whether a guest is travelling to Jiwaka, Western Highlands, East New Britain, or Milne Bay for work or leisure, they want to see clean, honest photographs of your rooms, dining facilities, and grounds before making a reservation.',
      },
      {
        heading: '2. Answer Common Travel Questions Upfront',
        body: 'By listing your proximity to the nearest airport, transfer arrangements, meal options, backup power/water facilities, and conference room capacity on your website, you save time answering the same questions repeatedly.',
      },
      {
        heading: '3. Receive Direct Booking Enquiries Without Commission Middlemen',
        body: 'A dedicated lodge website lets corporate travel coordinators and independent tourists send booking dates directly to your reception email and WhatsApp number.',
      },
    ],
    practicalTip:
      'Take photos of your cleanest rooms during bright morning light with curtains open and beds neatly made—clear photos are the single best way to encourage accommodation enquiries.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Why does my business need a website?',
    answer:
      'A website gives your business a dedicated place online where customers can learn about your services, products, location, and contact details.',
  },
  {
    id: 'faq-2',
    question: 'Can a small business afford a website?',
    answer:
      'Website options can be tailored to different requirements and budgets. Contact us to discuss a suitable solution and receive a quote.',
  },
  {
    id: 'faq-3',
    question: 'I already have a Facebook Page. Do I still need a website?',
    answer:
      'A Facebook Page helps you communicate with customers on social media. A website gives your business a dedicated online home where you can organise your business information and services. The two can work together.',
  },
  {
    id: 'faq-4',
    question: 'Can you build a website for my lodge, hotel, or restaurant?',
    answer:
      'Yes, Redline can discuss website requirements for hospitality and tourism businesses, including accommodation information, photo galleries, service details, and customer enquiries.',
  },
  {
    id: 'faq-5',
    question: 'How much does a website cost?',
    answer:
      'The cost depends on the number of pages, design requirements, features, domain, hosting, and ongoing support. Contact us for a quote based on your needs.',
  },
  {
    id: 'faq-6',
    question: 'Can I contact you through WhatsApp?',
    answer:
      'Yes. Use the WhatsApp button on our website to start a conversation with Redline Digital Solution.',
  },
];

export const SERVICE_FORM_OPTIONS = [
  'Website Development',
  'Social Media Marketing',
  'Graphic Design and Branding',
  'Digital Advertising',
  'Business Documents and Templates',
  'SME Digital Training',
  'Other',
] as const;
