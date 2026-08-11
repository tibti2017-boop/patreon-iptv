import { SubscriptionPlan, VodItem, TvChannel, Review, FaqItem, DeviceGuide } from '../types';

export const BASE_PLANS: SubscriptionPlan[] = [
  {
    id: '1-month',
    name: 'Silver Plan',
    durationMonths: 1,
    pricePerMonth: 10.99,
    totalPrice: 10.99,
    features: [
      '4K Ultra HD & 60FPS Streaming',
      '25,000+ US & Global Live TV Channels',
      '60,000+ Movies & TV Series VOD',
      'NFL, NBA, MLB, NHL & PPV Pass Included',
      '24/7 US-Based Customer Support',
      'Anti-Freeze™ 99.9% Server Uptime',
      'Adult Content Channels (Optional)'
    ]
  },
  {
    id: '3-months',
    name: 'Gold Plan',
    durationMonths: 3,
    pricePerMonth: 8.33,
    totalPrice: 24.99,
    discountBadge: 'SAVE 30%',
    features: [
      '4K Ultra HD & 60FPS Streaming',
      '25,000+ US & Global Live TV Channels',
      '60,000+ Movies & TV Series VOD',
      'NFL, NBA, MLB, NHL & PPV Pass Included',
      '24/7 US-Based Customer Support',
      'Anti-Freeze™ 99.9% Server Uptime',
      'Adult Content Channels (Optional)'
    ]
  },
  {
    id: '12-months',
    name: 'Diamond Plan',
    durationMonths: 12,
    pricePerMonth: 4.58,
    totalPrice: 54.99,
    discountBadge: 'BEST VALUE',
    isPopular: true,
    features: [
      '4K Ultra HD & 60FPS Streaming',
      '25,000+ US & Global Live TV Channels',
      '60,000+ Movies & TV Series VOD',
      'NFL, NBA, MLB, NHL & PPV Pass Included',
      '24/7 US-Based Customer Support',
      'Anti-Freeze™ 99.9% Server Uptime',
      'Adult Content Channels (Optional)'
    ]
  },
  {
    id: '6-months',
    name: 'Platinum Plan',
    durationMonths: 6,
    pricePerMonth: 6.66,
    totalPrice: 39.99,
    discountBadge: 'SAVE 40%',
    features: [
      '4K Ultra HD & 60FPS Streaming',
      '25,000+ US & Global Live TV Channels',
      '60,000+ Movies & TV Series VOD',
      'NFL, NBA, MLB, NHL & PPV Pass Included',
      '24/7 US-Based Customer Support',
      'Anti-Freeze™ 99.9% Server Uptime',
      'Adult Content Channels (Optional)'
    ]
  }
];

export const VOD_CATALOGUE: VodItem[] = [
  {
    id: 'st-denis-medical',
    title: 'St. Denis Medical',
    type: 'series',
    genre: 'Comedy / Medical',
    poster: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
    rating: '8.2',
    year: '2024',
    quality: '4K HDR',
    synopsis: 'A mockumentary comedy following the dedicated doctors and nurses at an underfunded Oregon hospital.'
  },
  {
    id: 'ambulance',
    title: 'Ambulance',
    type: 'movie',
    genre: 'Action / Thriller',
    poster: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&auto=format&fit=crop&q=80',
    rating: '7.8',
    year: '2022',
    quality: '4K Ultra',
    synopsis: 'Two robbers hijack an ambulance after their bank heist goes wrong in high-octane Los Angeles.'
  },
  {
    id: 'emergency',
    title: 'Emergency!',
    type: 'series',
    genre: 'Drama / Action',
    poster: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80',
    rating: '8.1',
    year: '2024',
    quality: '4K HDR',
    synopsis: 'First responders face life-and-death crises on the frontlines of emergency medical rescue.'
  },
  {
    id: 'twisters',
    title: 'Twisters',
    type: 'movie',
    genre: 'Action / Adventure',
    poster: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&auto=format&fit=crop&q=80',
    rating: '7.6',
    year: '2024',
    quality: '4K Ultra',
    synopsis: 'Storm chasers test an experimental tornado tracking system in Oklahoma.'
  },
  {
    id: 'furious-7',
    title: 'Furious 7',
    type: 'movie',
    genre: 'Action / Crime',
    poster: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80',
    rating: '8.5',
    year: '2023',
    quality: '4K Ultra',
    synopsis: 'Deckard Shaw seeks revenge against Dominic Toretto and his crew.'
  },
  {
    id: 'madagascar-2',
    title: 'Madagascar 2',
    type: 'movie',
    genre: 'Animation / Family',
    poster: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&auto=format&fit=crop&q=80',
    rating: '8.0',
    year: '2022',
    quality: '4K HDR',
    synopsis: 'The New York zoo animals crash land in the African wilderness and discover their roots.'
  },
  {
    id: 'adolescence',
    title: 'Adolescence',
    type: 'series',
    genre: 'Crime / Drama',
    poster: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80',
    rating: '8.4',
    year: '2025',
    quality: '4K HDR',
    synopsis: 'A gripping 4-part British crime drama filmed in real-time, following a 13-year-old boy arrested.'
  },
  {
    id: 'black-rabbit',
    title: 'Black Rabbit',
    type: 'series',
    genre: 'Crime / Drama',
    poster: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=80',
    rating: '8.3',
    year: '2025',
    quality: '4K HDR',
    synopsis: 'The owner of a NYC hotspot allows his chaotic brother back into his life, opening the door to underground crime.'
  },
  {
    id: 'breaking-bad',
    title: 'Breaking Bad',
    type: 'series',
    genre: 'Crime / Drama',
    poster: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80',
    rating: '9.5',
    year: '2022',
    quality: '4K Ultra',
    synopsis: 'A high school chemistry teacher diagnosed with lung cancer turns to manufacturing methamphetamine.'
  },
  {
    id: 'game-of-thrones',
    title: 'Game of Thrones',
    type: 'series',
    genre: 'Fantasy / Drama',
    poster: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=600&auto=format&fit=crop&q=80',
    rating: '9.2',
    year: '2021',
    quality: '4K HDR',
    synopsis: 'Nine noble families fight for control over Westeros while an ancient enemy returns.'
  },
  {
    id: 'house-of-dragon',
    title: 'House of the Dragon',
    type: 'series',
    genre: 'Fantasy / Drama',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80',
    rating: '8.4',
    year: '2024',
    quality: '4K HDR',
    synopsis: 'The story of House Targaryen 200 years before the events of Game of Thrones.'
  },
  {
    id: 'la-casa-de-papel',
    title: 'La Casa de Papel (Money Heist)',
    type: 'series',
    genre: 'Action / Crime',
    poster: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80',
    rating: '8.2',
    year: '2023',
    quality: '4K HDR',
    synopsis: 'An unusual group of robbers attempt to carry out the most perfect heist in Spanish history.'
  },
  {
    id: 'nobody-wants-this',
    title: 'Nobody Wants This',
    type: 'series',
    genre: 'Comedy / Romance',
    poster: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80',
    rating: '8.1',
    year: '2024',
    quality: '4K HDR',
    synopsis: 'An agnostic podcast host and an unconventional rabbi fall in love.'
  },
  {
    id: 'severance',
    title: 'Severance',
    type: 'series',
    genre: 'Sci-Fi / Thriller',
    poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    rating: '8.7',
    year: '2025',
    quality: '4K HDR',
    synopsis: 'Mark leads a team of office workers whose memories have been surgically divided.'
  },
  {
    id: 'squid-game',
    title: 'Squid Game',
    type: 'series',
    genre: 'Thriller / Drama',
    poster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    rating: '8.0',
    year: '2024',
    quality: '4K HDR',
    synopsis: 'Hundreds of cash-strapped players accept an invitation to compete in children games for cash.'
  },
  {
    id: 'stranger-things',
    title: 'Stranger Things',
    type: 'series',
    genre: 'Sci-Fi / Horror',
    poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    rating: '8.7',
    year: '2025',
    quality: '4K HDR',
    synopsis: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments.'
  },
  {
    id: 'the-bear',
    title: 'The Bear',
    type: 'series',
    genre: 'Drama / Comedy',
    poster: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
    rating: '8.6',
    year: '2024',
    quality: '4K Ultra',
    synopsis: 'A young fine-dining chef comes home to Chicago to run his family Italian beef sandwich shop.'
  },
  {
    id: 'the-last-of-us',
    title: 'The Last of Us',
    type: 'series',
    genre: 'Drama / Sci-Fi',
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    rating: '8.8',
    year: '2024',
    quality: '4K HDR',
    synopsis: 'After a global pandemic destroys civilization, a hardened survivor takes charge of a young girl.'
  },
  {
    id: 'the-pitt',
    title: 'The Pitt',
    type: 'series',
    genre: 'Medical / Drama',
    poster: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&auto=format&fit=crop&q=80',
    rating: '8.5',
    year: '2025',
    quality: '4K Ultra',
    synopsis: 'A realistic look at the front-line challenges facing healthcare workers in contemporary Pittsburgh.'
  },
  {
    id: 'the-witcher',
    title: 'The Witcher',
    type: 'series',
    genre: 'Fantasy / Action',
    poster: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80',
    rating: '8.2',
    year: '2023',
    quality: '4K Ultra',
    synopsis: 'Geralt of Rivia, a mutated monster hunter for hire, journeys toward his destiny in a turbulent world.'
  },
  {
    id: 'wednesday',
    title: 'Wednesday',
    type: 'series',
    genre: 'Comedy / Mystery',
    poster: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80',
    rating: '8.1',
    year: '2023',
    quality: '4K HDR',
    synopsis: 'Wednesday Addams investigates a murder spree while making new friends and foes at Nevermore Academy.'
  }
];

export const TV_CHANNELS_LIST: TvChannel[] = [
  { id: '1', name: 'CANAL+ 4K Ultra', category: 'cinema', logo: 'CANAL+', logoImage: '/channels/canal-plus.svg', is4k: true },
  { id: '2', name: 'DAZN 1 & 2 4K', category: 'sports', logo: 'DAZN', logoImage: '/channels/dazn.svg', is4k: true },
  { id: '3', name: 'ESPN / ESPN2 / SEC 4K', category: 'sports', logo: 'ESPN', logoImage: '/channels/espn.svg', is4k: true },
  { id: '4', name: 'NFL Network & RedZone', category: 'sports', logo: 'NFL NET', logoImage: '/channels/nfl-network.svg', is4k: true },
  { id: '5', name: 'HBO / Max Cinema 4K', category: 'cinema', logo: 'HBO MAX', logoImage: '/channels/hbo.svg', is4k: true },
  { id: '6', name: 'BBC One HD / 4K', category: 'international', logo: 'BBC ONE', logoImage: '/channels/bbc-one.svg', is4k: true },
  { id: '7', name: 'Eurosport 1 & 2 4K', category: 'sports', logo: 'EUROSPORT', logoImage: '/channels/eurosport.svg', is4k: true },
  { id: '8', name: 'Showtime 4K', category: 'cinema', logo: 'SHOWTIME', logoImage: '/channels/showtime.svg', is4k: true },
  { id: '9', name: 'TF1 4K HDR', category: 'french', logo: 'TF1 4K', logoImage: '/channels/tf1.svg', is4k: true },
  { id: '10', name: 'ITV 1 HD / 4K', category: 'international', logo: 'ITV 1', logoImage: '/channels/itv1.svg', is4k: true },
  { id: '11', name: 'RTL HD / 4K', category: 'international', logo: 'RTL', logoImage: '/channels/rtl.svg', is4k: true },
  { id: '12', name: 'Euronews HD', category: 'news', logo: 'EURONEWS', logoImage: '/channels/euronews.svg', is4k: false },
  { id: '13', name: 'ARD 1 HD', category: 'international', logo: 'ARD 1', logoImage: '/channels/ard1.svg', is4k: true },
  { id: '14', name: 'Das Erste HD', category: 'international', logo: 'DAS ERSTE', logoImage: '/channels/das-erste.svg', is4k: true },
  { id: '15', name: 'DR 1 HD', category: 'international', logo: 'DR 1', logoImage: '/channels/dr1.svg', is4k: true }
];

export const REVIEWS_LIST: Review[] = [
  {
    id: '1',
    name: 'Michael T.',
    location: 'NEW YORK, USA',
    rating: 5,
    comment: 'PATREON IPTV is incredible! NFL RedZone and Sunday games stream in full 60fps 4K without a single lag or buffering event.',
    date: '2 days ago',
    avatar: 'https://ui-avatars.com/api/?name=Michael+T&background=f97316&color=fff&bold=true'
  },
  {
    id: '2',
    name: 'Sarah K.',
    location: 'LOS ANGELES, CA',
    rating: 5,
    comment: 'The best IPTV service for Firestick in the US! Setup took 2 minutes and support helped me on WhatsApp instantly.',
    date: '3 days ago',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+K&background=3b82f6&color=fff&bold=true'
  },
  {
    id: '3',
    name: 'David R.',
    location: 'TEXAS, USA',
    rating: 5,
    comment: 'The VOD catalog is massive. HBO, Showtime, and all latest movies are in crisp 4K HDR. Worth every penny!',
    date: '1 week ago',
    avatar: 'https://ui-avatars.com/api/?name=David+R&background=10b981&color=fff&bold=true'
  },
  {
    id: '4',
    name: 'James L.',
    location: 'FLORIDA, USA',
    rating: 5,
    comment: 'Switched from cable and saved over $1,200 a year! PATREON IPTV gives me all local news, NBA League Pass & UFC PPVs.',
    date: '2 weeks ago',
    avatar: 'https://ui-avatars.com/api/?name=James+L&background=8b5cf6&color=fff&bold=true'
  },
  {
    id: '5',
    name: 'Amanda B.',
    location: 'CHICAGO, IL',
    rating: 5,
    comment: 'Super stable even during peak Sunday night football. No freezing at all. High quality streams!',
    date: '3 weeks ago',
    avatar: 'https://ui-avatars.com/api/?name=Amanda+B&background=ec4899&color=fff&bold=true'
  },
  {
    id: '6',
    name: 'Robert M.',
    location: 'TORONTO, CANADA',
    rating: 5,
    comment: 'Got the Lifetime VIP package for my whole home. Easy configuration on Apple TV & Android Box.',
    date: '1 month ago',
    avatar: 'https://ui-avatars.com/api/?name=Robert+M&background=f59e0b&color=fff&bold=true'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: "What is PATREON IPTV and how does it work?",
    answer: "PATREON IPTV is a top-tier premium Internet TV streaming service. It delivers over 25,000+ live TV channels in 4K Ultra HD, along with a massive VOD library of 60,000+ movies and TV series directly to your Smart TV, Firestick, Android Box, Apple TV, iPhone, or PC."
  },
  {
    id: 'faq-2',
    question: "How many devices can stream simultaneously?",
    answer: "Each standard subscription includes 1 active stream by default. During checkout, you can select multi-room expansion packages (from 2 up to 5 simultaneous screens) for your family."
  },
  {
    id: 'faq-3',
    question: "Which devices are compatible with PATREON IPTV?",
    answer: "Our service works seamlessly across 100% of modern streaming devices: Amazon Firestick / Fire TV, Smart TVs (Samsung, LG, Sony, TCL, Vizio), Android TV Boxes, Apple TV, iOS & Android devices, Windows/Mac, MAG, Formuler, and Enigma2 devices."
  },
  {
    id: 'faq-4',
    question: "Is there a money-back guarantee or free trial?",
    answer: "Yes! We offer a 7-day 100% money-back guarantee. You can also request a 24-hour instant test account from our WhatsApp live support team to verify stream quality before buying."
  },
  {
    id: 'faq-5',
    question: "What sports & channels are included in the package?",
    answer: "You get full access to all major US sports networks (NFL Sunday Ticket, NBA League Pass, MLB, NHL, UFC PPV Events, ESPN, Fox Sports, CBS Sports, TNT, NBC Sports) plus premium movie networks (HBO, Starz, Showtime) and international channels from over 50 countries."
  },
  {
    id: 'faq-6',
    question: "Will I experience any buffering or freezing?",
    answer: "No. Our high-bandwidth load-balanced server network with Anti-Freeze 99.9% uptime technology ensures smooth, buffering-free streaming even during major sports events like the Super Bowl or UFC PPVs."
  },
  {
    id: 'faq-7',
    question: "How do I set up PATREON IPTV after ordering?",
    answer: "Setup takes less than 3 minutes. Right after your order, your login credentials (Xtream Codes / M3U Playlist URL) are delivered to your email and WhatsApp. We also provide step-by-step installation guides for IPTV Smarters, Tivimate, and IBO Player."
  },
  {
    id: 'faq-8',
    question: "What payment options do you support?",
    answer: "We support major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and Crypto (Bitcoin, USDT) via 100% encrypted secure checkout."
  }
];

export const DEVICE_GUIDES: DeviceGuide[] = [
  {
    id: 'firestick',
    name: 'Amazon Firestick / Fire TV',
    category: 'AMAZON TV',
    iconName: 'Tv',
    downloaderCode: '289142',
    recommendedApp: 'IPTV Smarters Pro / Tivimate',
    steps: [
      'Download the "Downloader" app from the Amazon Appstore.',
      'Open Downloader and enter the quick install code provided by our support team.',
      'Install IPTV Smarters Pro or Tivimate Player.',
      'Launch the app and log in using your Xtream Codes credentials (Username, Password, Server URL).'
    ]
  },
  {
    id: 'android-tv',
    name: 'Android TV / Box / Phone',
    category: 'BOX / MOBILE',
    iconName: 'Smartphone',
    recommendedApp: 'Tivimate / IPTV Smarters / XCIPTV',
    steps: [
      'Open the Google Play Store on your Android device.',
      'Search for and install "Tivimate IPTV Player" or "IPTV Smarters Pro".',
      'Select "Log in with Xtream Codes API".',
      'Enter your PATREON IPTV credentials sent via email/WhatsApp.'
    ]
  },
  {
    id: 'apple-ios',
    name: 'Apple iOS / Apple TV',
    category: 'IPHONE / IPAD / APPLE TV',
    iconName: 'Apple',
    recommendedApp: 'Smarters Player Lite / IBO Player',
    steps: [
      'Open the Apple App Store on your iPhone, iPad, or Apple TV.',
      'Search for "Smarters Player Lite" or "IBO Player Pro".',
      'Install the app and grant required permissions.',
      'Enter your Xtream API credentials to instantly load your playlist.'
    ]
  },
  {
    id: 'smart-tv',
    name: 'Smart TV (Samsung / LG / Sony)',
    category: 'SAMSUNG / LG / SONY',
    iconName: 'Monitor',
    recommendedApp: 'IBO Player / Smart IPTV / Nanomid',
    steps: [
      'Search for "IBO Player" or "Smart IPTV" in your Samsung or LG TV App Store.',
      'Install the app and note down the MAC Address displayed on screen.',
      'Provide your MAC Address to our live support or activate via our portal.',
      'Restart the app to enjoy all your 4K live channels and movies.'
    ]
  },
  {
    id: 'pc-mac',
    name: 'Windows PC & Mac',
    category: 'COMPUTER',
    iconName: 'Laptop',
    recommendedApp: 'VLC Media Player / IPTV Smarters PC',
    steps: [
      'Download IPTV Smarters Pro for Windows or Mac.',
      'Run the installer file.',
      'Log in via Xtream Codes API with your PATREON IPTV details.',
      'Enjoy multi-screen streaming in high definition.'
    ]
  },
  {
    id: 'mag-box',
    name: 'MAG Box & Formuler',
    category: 'SET-TOP BOX',
    iconName: 'Box',
    recommendedApp: 'Portal Stalker / MyTVOnline 2/3',
    steps: [
      'Navigate to System Settings on your MAG or Formuler box.',
      'Select Servers > Portals.',
      'Enter "PATREON IPTV" as Portal Name and paste the Portal URL sent by email.',
      'Register your device MAC address with us and reboot your box.'
    ]
  }
];
