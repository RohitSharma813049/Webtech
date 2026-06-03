export interface ChatMessage {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export interface FAQ {
  question: string
  answer: string
  keywords: string[]
  category: string
  weight?: number
}

export const chatbotFAQs: FAQ[] = [
  // General Questions
  {
    question: "What services do you offer?",
    answer:
      "We offer Digital Marketing, Website & App Development, SaaS Services, and Designing Services. Visit our Services page for details.",
    keywords: ["services", "offer", "what do you do", "provide"],
    category: "General",
  },
  {
    question: "How can I contact you?",
    answer: "You can call us at +91 8860876087, email info@webeside.in, or WhatsApp us. We're available 24/7!",
    keywords: ["contact", "reach", "call", "email", "phone"],
    category: "General",
  },
  {
    question: "Where are you located?",
    answer: "We are based in India and serve clients worldwide with remote and on-site services.",
    keywords: ["location", "address", "where", "office"],
    category: "General",
  },
  {
    question: "What are your working hours?",
    answer: "We work Monday to Saturday, 9 AM to 7 PM IST. However, our support is available 24/7 for urgent queries.",
    keywords: ["hours", "timing", "when", "available"],
    category: "General",
  },
  {
    question: "Do you offer free consultation?",
    answer:
      "Yes! We offer a free 30-minute consultation to discuss your project requirements and provide recommendations.",
    keywords: ["consultation", "free", "meeting", "discuss"],
    category: "General",
  },

  // Website Development
  {
    question: "How much does a website cost?",
    answer:
      "Website costs start from ₹15,000 for basic websites and vary based on features. E-commerce sites start from ₹40,000. Contact us for a custom quote.",
    keywords: ["cost", "price", "website cost", "how much", "pricing"],
    category: "Website",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A basic website takes 2-3 weeks, while complex e-commerce or custom applications take 6-12 weeks depending on requirements.",
    keywords: ["time", "duration", "how long", "timeline", "delivery"],
    category: "Website",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer monthly maintenance packages starting from ₹2,000/month including updates, backups, and security monitoring.",
    keywords: ["maintenance", "support", "updates", "manage"],
    category: "Website",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "We can redesign your existing website with modern design, better UX, and improved performance. Share your requirements for a quote.",
    keywords: ["redesign", "update", "existing", "revamp", "improve"],
    category: "Website",
  },
  {
    question: "Do you provide website hosting?",
    answer:
      "Yes, we provide reliable hosting services starting from ₹3,000/year with 99.9% uptime, SSL certificate, and 24/7 support.",
    keywords: ["hosting", "server", "domain", "ssl"],
    category: "Website",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices with excellent user experience.",
    keywords: ["mobile", "responsive", "phone", "tablet", "device"],
    category: "Website",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "Yes! We provide comprehensive SEO services including keyword research, on-page optimization, technical SEO, and link building.",
    keywords: ["seo", "search", "google", "ranking", "optimization"],
    category: "Website",
  },
  {
    question: "Do you develop WordPress websites?",
    answer:
      "Yes, we develop custom WordPress websites with premium themes, plugins, and full customization based on your needs.",
    keywords: ["wordpress", "cms", "wp"],
    category: "Website",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Yes! We provide an easy-to-use admin panel with training so you can update content, images, and products yourself.",
    keywords: ["update", "manage", "admin", "cms", "control"],
    category: "Website",
  },
  {
    question: "Do you provide website content?",
    answer:
      "Yes, we offer professional content writing services for websites, including SEO-optimized text, product descriptions, and blog posts.",
    keywords: ["content", "writing", "text", "copy"],
    category: "Website",
  },

  // E-commerce
  {
    question: "How much does an e-commerce website cost?",
    answer:
      "E-commerce websites start from ₹40,000 for basic stores and go up based on features like payment gateways, inventory management, etc.",
    keywords: ["ecommerce", "online store", "shop", "e-commerce cost"],
    category: "E-commerce",
  },
  {
    question: "Which payment gateways do you integrate?",
    answer:
      "We integrate all major payment gateways including Razorpay, PayU, Paytm, Instamojo, and international gateways like PayPal and Stripe.",
    keywords: ["payment", "gateway", "razorpay", "paytm", "paypal"],
    category: "E-commerce",
  },
  {
    question: "Can you integrate inventory management?",
    answer:
      "Yes! We provide complete inventory management systems with real-time stock tracking, low stock alerts, and automated reordering.",
    keywords: ["inventory", "stock", "management", "products"],
    category: "E-commerce",
  },
  {
    question: "Do you provide shipping integration?",
    answer:
      "Yes, we integrate shipping providers like Delhivery, Shiprocket, and others with real-time tracking and automated label generation.",
    keywords: ["shipping", "delivery", "courier", "tracking"],
    category: "E-commerce",
  },
  {
    question: "Can you build a marketplace like Amazon?",
    answer:
      "Yes! We develop multi-vendor marketplaces with vendor management, commission systems, and separate vendor dashboards.",
    keywords: ["marketplace", "multi vendor", "amazon", "sellers"],
    category: "E-commerce",
  },

  // Mobile App Development
  {
    question: "Do you develop mobile apps?",
    answer:
      "Yes! We develop native iOS and Android apps as well as cross-platform apps using React Native and Flutter for cost-effective solutions.",
    keywords: ["app", "mobile", "ios", "android", "application"],
    category: "Mobile",
  },
  {
    question: "How much does an app cost?",
    answer:
      "App development starts from ₹50,000 for basic apps. Complex apps with advanced features range from ₹1.5-5 lakhs. Contact us for accurate pricing.",
    keywords: ["app cost", "mobile app price", "application cost"],
    category: "Mobile",
  },
  {
    question: "How long does app development take?",
    answer:
      "Basic apps take 2-3 months, while complex apps with advanced features take 4-6 months including design, development, and testing.",
    keywords: ["app time", "app duration", "how long app"],
    category: "Mobile",
  },
  {
    question: "Do you publish apps to app stores?",
    answer:
      "Yes! We handle complete app store submission for both Apple App Store and Google Play Store including all required documentation.",
    keywords: ["publish", "app store", "play store", "launch"],
    category: "Mobile",
  },
  {
    question: "Can you convert my website to an app?",
    answer:
      "Yes! We can convert your website into a mobile app with enhanced features, push notifications, and native mobile experience.",
    keywords: ["convert", "website to app", "web app"],
    category: "Mobile",
  },

  // Digital Marketing
  {
    question: "What digital marketing services do you provide?",
    answer:
      "We provide SEO, PPC (Google Ads/Facebook Ads), Social Media Marketing, Content Marketing, WhatsApp Marketing, and Email Marketing services.",
    keywords: ["digital marketing", "marketing services", "online marketing"],
    category: "Marketing",
  },
  {
    question: "How much does SEO cost?",
    answer:
      "SEO packages start from ₹15,000/month for local SEO and ₹25,000/month for national SEO with guaranteed ranking improvements.",
    keywords: ["seo cost", "seo price", "seo package"],
    category: "Marketing",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO typically shows results in 3-6 months. We provide monthly reports showing ranking improvements, traffic growth, and conversions.",
    keywords: ["seo time", "seo results", "seo duration"],
    category: "Marketing",
  },
  {
    question: "Do you manage social media accounts?",
    answer:
      "Yes! We provide complete social media management including content creation, posting, engagement, and advertising across all platforms.",
    keywords: ["social media", "facebook", "instagram", "linkedin", "management"],
    category: "Marketing",
  },
  {
    question: "How much does social media marketing cost?",
    answer:
      "Social media packages start from ₹8,000/month including content creation, daily posts, and basic analytics for 2 platforms.",
    keywords: ["social media cost", "smm price", "social media package"],
    category: "Marketing",
  },
  {
    question: "Do you run Google Ads?",
    answer:
      "Yes! We create and manage Google Ads campaigns with keyword research, ad creation, bid management, and detailed ROI tracking.",
    keywords: ["google ads", "ppc", "paid ads", "adwords"],
    category: "Marketing",
  },
  {
    question: "What is your Google Ads pricing?",
    answer:
      "Google Ads management starts from ₹10,000/month (plus your ad budget). We optimize campaigns for maximum ROI and conversions.",
    keywords: ["google ads cost", "ppc price", "ads pricing"],
    category: "Marketing",
  },
  {
    question: "Do you provide WhatsApp marketing?",
    answer:
      "Yes! We offer bulk WhatsApp marketing with rich media support, automated messaging, and detailed analytics starting from ₹3,000/month.",
    keywords: ["whatsapp", "bulk message", "whatsapp marketing"],
    category: "Marketing",
  },

  // Design Services
  {
    question: "Do you design logos?",
    answer:
      "Yes! We create professional logo designs with multiple concepts, unlimited revisions, and provide vector files. Packages start from ₹2,500.",
    keywords: ["logo", "branding", "identity", "design"],
    category: "Design",
  },
  {
    question: "Can you design brochures and catalogs?",
    answer:
      "Yes! We design professional brochures, catalogs, and marketing materials for both print and digital use starting from ₹2,000.",
    keywords: ["brochure", "catalog", "flyer", "pamphlet"],
    category: "Design",
  },
  {
    question: "Do you provide UI/UX design services?",
    answer:
      "Yes! We create user-centered UI/UX designs with wireframes, prototypes, and design systems for websites and mobile apps.",
    keywords: ["ui", "ux", "interface", "user experience"],
    category: "Design",
  },
  {
    question: "How much does logo design cost?",
    answer:
      "Logo design packages start from ₹2,500 for basic designs and ₹8,000 for premium brand identity packages with complete guidelines.",
    keywords: ["logo cost", "logo price", "branding cost"],
    category: "Design",
  },

  // SaaS & Custom Software
  {
    question: "Do you develop custom software?",
    answer:
      "Yes! We develop custom software solutions including CRM, ERP, HMS, LMS, and industry-specific management systems tailored to your needs.",
    keywords: ["custom software", "erp", "crm", "management system"],
    category: "SaaS",
  },
  {
    question: "What is a Gym Management System?",
    answer:
      "Our GMS handles member management, billing, attendance, workout plans, and payment integration. Perfect for gyms and fitness centers.",
    keywords: ["gym", "gms", "fitness", "gym management"],
    category: "SaaS",
  },
  {
    question: "Do you have an HR Management System?",
    answer:
      "Yes! Our HRMS includes employee management, payroll, leave management, attendance tracking, and performance reviews.",
    keywords: ["hrms", "hr", "payroll", "employee"],
    category: "SaaS",
  },
  {
    question: "Can you build a Learning Management System?",
    answer:
      "Yes! We develop LMS platforms with course management, video hosting, assessments, student portals, and progress tracking.",
    keywords: ["lms", "learning", "online courses", "education"],
    category: "SaaS",
  },

  // Technical Questions
  {
    question: "What technologies do you use?",
    answer:
      "We use React, Next.js, Node.js, Python, React Native, Flutter for development. For databases: MongoDB, MySQL, PostgreSQL.",
    keywords: ["technology", "stack", "programming", "languages"],
    category: "Technical",
  },
  {
    question: "Do you provide source code?",
    answer:
      "Yes! We provide complete source code with documentation for all custom development projects upon project completion.",
    keywords: ["source code", "code", "ownership", "files"],
    category: "Technical",
  },
  {
    question: "Is my data secure?",
    answer:
      "We implement industry-standard security measures including SSL, encryption, secure authentication, and regular backups.",
    keywords: ["security", "safe", "data protection", "secure"],
    category: "Technical",
  },
  {
    question: "Do you sign NDA?",
    answer:
      "Yes! We are happy to sign Non-Disclosure Agreements to protect your confidential information and business ideas.",
    keywords: ["nda", "confidentiality", "agreement", "privacy"],
    category: "Technical",
  },
  {
    question: "Do you provide API integration?",
    answer:
      "Yes! We integrate various APIs including payment gateways, SMS, email, social media, mapping, and custom third-party APIs.",
    keywords: ["api", "integration", "third party"],
    category: "Technical",
  },

  // Payment & Pricing
  {
    question: "What are your payment terms?",
    answer:
      "We typically work with 40% advance, 40% on completion, and 20% after delivery. Terms can be customized for large projects.",
    keywords: ["payment", "terms", "milestone", "advance"],
    category: "Payment",
  },
  {
    question: "Do you accept international payments?",
    answer: "Yes! We accept payments via PayPal, Wise, bank transfer, and credit cards for international clients.",
    keywords: ["international", "foreign", "overseas", "usd"],
    category: "Payment",
  },
  {
    question: "Can I pay in installments?",
    answer: "Yes! For projects above ₹50,000, we offer flexible payment plans with milestone-based installments.",
    keywords: ["installment", "emi", "monthly payment"],
    category: "Payment",
  },
  {
    question: "Do you offer discounts?",
    answer:
      "Yes! We offer up to 20% discount for referrals, bulk projects, and long-term contracts. Ask about current promotions!",
    keywords: ["discount", "offer", "promo", "coupon"],
    category: "Payment",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer, UPI, credit/debit cards, PayPal, Razorpay, and other digital payment methods for your convenience.",
    keywords: ["payment method", "how to pay", "upi", "card"],
    category: "Payment",
  },

  // Support & Maintenance
  {
    question: "Do you provide after-sales support?",
    answer:
      "Yes! We provide 3 months free support after project delivery, followed by affordable monthly maintenance packages.",
    keywords: ["support", "after sales", "warranty", "guarantee"],
    category: "Support",
  },
  {
    question: "What if something breaks after launch?",
    answer:
      "We provide 3 months free bug fixing after launch. Any issues reported during this period will be fixed at no extra cost.",
    keywords: ["bug", "error", "problem", "issue", "fix"],
    category: "Support",
  },
  {
    question: "Do you provide training?",
    answer:
      "Yes! We provide comprehensive training on how to use and manage your website/app including video tutorials and documentation.",
    keywords: ["training", "tutorial", "learn", "how to use"],
    category: "Support",
  },
  {
    question: "Can you fix my existing website?",
    answer:
      "Yes! We can fix bugs, errors, security issues, and performance problems in existing websites regardless of who built them.",
    keywords: ["fix", "repair", "broken", "debug"],
    category: "Support",
  },

  // Portfolio & Experience
  {
    question: "Can I see your previous work?",
    answer:
      "Yes! Visit our Portfolio page to see 900+ completed projects across various industries. We've successfully delivered projects worldwide.",
    keywords: ["portfolio", "previous work", "examples", "projects"],
    category: "Portfolio",
  },
  {
    question: "Do you have experience in my industry?",
    answer:
      "We've worked with businesses across e-commerce, healthcare, education, real estate, food, manufacturing, and many other industries.",
    keywords: ["experience", "industry", "sector", "domain"],
    category: "Portfolio",
  },
  {
    question: "Can you share client references?",
    answer:
      "Yes! We can connect you with our past clients for references. Check our testimonials page for verified client feedback.",
    keywords: ["reference", "testimonial", "review", "feedback"],
    category: "Portfolio",
  },
  {
    question: "How many projects have you completed?",
    answer:
      "We've successfully completed 900+ projects for clients worldwide with 100% satisfaction rate and ongoing support.",
    keywords: ["projects completed", "experience", "track record"],
    category: "Portfolio",
  },

  // Process & Timeline
  {
    question: "What is your development process?",
    answer:
      "Our process includes: 1) Discovery & Planning 2) Design & Mockups 3) Development 4) Testing 5) Deployment 6) Training & Support.",
    keywords: ["process", "methodology", "how you work", "steps"],
    category: "Process",
  },
  {
    question: "Will I get regular updates?",
    answer:
      "Yes! We provide weekly progress updates with demos, maintain transparent communication, and use project management tools.",
    keywords: ["updates", "progress", "communication", "status"],
    category: "Process",
  },
  {
    question: "Can I make changes during development?",
    answer:
      "Yes! We welcome feedback and minor changes during development. Major scope changes may affect timeline and cost.",
    keywords: ["changes", "revisions", "modifications", "edits"],
    category: "Process",
  },
  {
    question: "Do you do urgent projects?",
    answer:
      "Yes! We can accommodate urgent projects with priority development at an additional 20-30% rush fee depending on timeline.",
    keywords: ["urgent", "rush", "emergency", "fast", "quick"],
    category: "Process",
  },
  {
    question: "What if I'm not satisfied?",
    answer:
      "Client satisfaction is our priority. We offer unlimited revisions during development until you're completely happy with the result.",
    keywords: ["satisfaction", "unhappy", "not satisfied", "revisions"],
    category: "Process",
  },

  // Specific Features
  {
    question: "Can you add a blog to my website?",
    answer:
      "Yes! We can integrate a full-featured blog with categories, tags, comments, SEO optimization, and easy content management.",
    keywords: ["blog", "news", "articles", "posts"],
    category: "Features",
  },
  {
    question: "Do you integrate Google Maps?",
    answer:
      "Yes! We integrate Google Maps, custom markers, directions, and location-based features in websites and apps.",
    keywords: ["google maps", "location", "map", "directions"],
    category: "Features",
  },
  {
    question: "Can you add live chat?",
    answer:
      "Yes! We integrate live chat systems like Tawk.to, Crisp, or custom chatbots for real-time customer support.",
    keywords: ["live chat", "chat", "messaging", "support chat"],
    category: "Features",
  },
  {
    question: "Do you add email marketing?",
    answer:
      "Yes! We integrate email marketing tools like Mailchimp, SendGrid, and automated email campaigns for your business.",
    keywords: ["email marketing", "newsletter", "mailchimp"],
    category: "Features",
  },
  {
    question: "Can you add booking functionality?",
    answer:
      "Yes! We develop booking systems with calendar integration, payment processing, reminders, and administrative dashboards.",
    keywords: ["booking", "appointment", "reservation", "schedule"],
    category: "Features",
  },
  {
    question: "Do you provide multi-language support?",
    answer:
      "Yes! We can make your website/app available in multiple languages with easy language switching and RTL support.",
    keywords: ["multi language", "translation", "multilingual", "languages"],
    category: "Features",
  },
  {
    question: "Can you add user login system?",
    answer:
      "Yes! We implement secure user authentication with registration, login, password reset, and user profile management.",
    keywords: ["login", "registration", "user account", "authentication"],
    category: "Features",
  },
  {
    question: "Do you integrate CRM systems?",
    answer: "Yes! We integrate popular CRM systems like Salesforce, Zoho, HubSpot, or can build custom CRM solutions.",
    keywords: ["crm", "customer management", "salesforce", "zoho"],
    category: "Features",
  },

  // Business Related
  {
    question: "Do you work with startups?",
    answer:
      "Yes! We love working with startups and offer special packages with flexible payment terms to help you get started.",
    keywords: ["startup", "new business", "entrepreneur"],
    category: "Business",
  },
  {
    question: "Can you help with business growth?",
    answer:
      "Yes! Beyond development, we provide digital marketing, SEO, and growth strategies to help scale your business online.",
    keywords: ["growth", "scale", "expand", "grow business"],
    category: "Business",
  },
  {
    question: "Do you sign contracts?",
    answer:
      "Yes! We provide detailed contracts outlining scope, timeline, payment terms, and deliverables for complete transparency.",
    keywords: ["contract", "agreement", "legal", "terms"],
    category: "Business",
  },
  {
    question: "Are you a registered company?",
    answer:
      "Yes! We are a registered company with GST number and all legal documentation. Your investment is completely safe.",
    keywords: ["registered", "legal", "company", "gst"],
    category: "Business",
  },
  {
    question: "Do you work with agencies?",
    answer:
      "Yes! We offer white-label services for agencies and provide reseller programs with attractive commissions.",
    keywords: ["agency", "white label", "reseller", "partner"],
    category: "Business",
  },

  // Miscellaneous
  {
    question: "Can you help migrate my website?",
    answer:
      "Yes! We can migrate your website from any platform to another (WordPress, Shopify, custom) with zero downtime and data loss.",
    keywords: ["migration", "transfer", "move website", "change host"],
    category: "Miscellaneous",
  },
  {
    question: "Do you provide domain and hosting?",
    answer:
      "Yes! We provide domain registration and reliable hosting services, or can work with your existing providers.",
    keywords: ["domain", "hosting", "server"],
    category: "Miscellaneous",
  },
  {
    question: "Can you improve website speed?",
    answer:
      "Yes! We optimize websites for speed with caching, image optimization, code minification, and CDN integration.",
    keywords: ["speed", "performance", "slow", "loading", "optimize"],
    category: "Miscellaneous",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes! We work remotely with clients worldwide. For local clients in India, we also provide on-site meetings if needed.",
    keywords: ["remote", "online", "virtual", "distance"],
    category: "Miscellaneous",
  },
  {
    question: "What makes you different?",
    answer:
      "We combine technical expertise with creative design, provide transparent communication, deliver on time, and offer ongoing support at affordable prices.",
    keywords: ["why choose", "different", "best", "unique"],
    category: "Miscellaneous",
  },
  {
    question: "Do you have a referral program?",
    answer:
      "Yes! Refer clients and earn up to 20% commission or discounts on your projects. Visit our Referral page for details.",
    keywords: ["referral", "refer", "commission", "earn"],
    category: "Miscellaneous",
  },
  {
    question: "Can I get a custom quote?",
    answer:
      "Yes! Share your requirements via contact form, email, or WhatsApp, and we'll provide a detailed custom quote within 24 hours.",
    keywords: ["quote", "estimate", "proposal", "quotation"],
    category: "Miscellaneous",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We provide free project estimates with detailed cost breakdown and timeline. No obligations!",
    keywords: ["free estimate", "free quote", "cost estimate"],
    category: "Miscellaneous",
  },
  {
    question: "How do I get started?",
    answer:
      "Simple! Contact us via phone (+91 8860876087), WhatsApp, or fill our contact form. We'll schedule a free consultation to discuss your project.",
    keywords: ["get started", "begin", "start project", "initiate"],
    category: "Miscellaneous",
  },

  // Costing & Pricing FAQs (Comprehensive)
  {
    question: "What are your complete pricing for all services?",
    answer:
      "COMPLETE PRICING LIST:\n\nDIGITAL MARKETING:\n• SEO (Local): ₹15,000/month\n• SEO (National): ₹25,000/month\n• Google Ads Management: ₹10,000/month + ad budget\n• Meta Ads Management: ₹8,000/month + ad budget\n• Social Media Marketing (2 platforms): ₹8,000/month\n• Social Media Marketing (4 platforms): ₹15,000/month\n• WhatsApp Marketing: ₹3,000/month\n• Content Writing: ₹500-2,000/article\n\nWEBSITE DEVELOPMENT:\n• Basic WordPress Website: ₹15,000-30,000\n• Business WordPress Website: ₹30,000-60,000\n• E-commerce WordPress: ₹40,000-80,000\n• Custom Coded Website: ₹50,000-1,50,000\n• E-commerce Custom: ₹80,000-2,00,000\n\nAPP DEVELOPMENT:\n• Basic Mobile App: ₹50,000-1,00,000\n• E-commerce App: ₹1,00,000-2,50,000\n• Custom Complex App: ₹2,00,000-5,00,000+\n\nDESIGNING:\n• Logo Design: ₹2,500-8,000\n• UI/UX Design: ₹15,000-50,000\n• Brochure/Catalog: ₹2,000-5,000\n• Banner/Poster: ₹500-2,000\n\nSAAS SERVICES:\n• CRM System: ₹50,000-1,50,000\n• HRMS: ₹60,000-2,00,000\n• LMS: ₹80,000-2,50,000\n• GMS: ₹40,000-1,00,000\n\nNote: Prices are estimative and vary based on specific requirements. Contact us for detailed quote.",
    keywords: [
      "complete costing",
      "all prices",
      "pricing list",
      "cost",
      "price",
      "how much",
      "charges",
      "rates",
      "costing",
      "budget",
      "pricing",
      "full price list",
      "service charges",
      "complete pricing",
    ],
    category: "Costing",
    weight: 10,
  },
]

export function findBestMatch(userMessage: string): FAQ | null {
  const normalizedMessage = userMessage.toLowerCase().trim()

  // Stop words to filter out
  const stopWords = new Set([
    "a",
    "an",
    "the",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "do",
    "does",
    "did",
    "will",
    "would",
    "should",
    "could",
    "may",
    "might",
    "can",
    "of",
    "at",
    "by",
    "for",
    "with",
    "about",
    "against",
    "between",
    "into",
    "through",
    "during",
    "before",
    "after",
    "above",
    "below",
    "to",
    "from",
    "up",
    "down",
    "in",
    "out",
    "on",
    "off",
    "over",
    "under",
    "again",
    "further",
    "then",
    "once",
    "here",
    "there",
    "when",
    "where",
    "why",
    "how",
    "all",
    "both",
    "each",
    "few",
    "more",
    "most",
    "other",
    "some",
    "such",
    "no",
    "nor",
    "not",
    "only",
    "own",
    "same",
    "so",
    "than",
    "too",
    "very",
    "just",
    "but",
    "what",
    "which",
    "who",
    "or",
    "and",
    "if",
    "because",
    "as",
    "until",
    "while",
    "my",
    "your",
    "their",
    "our",
  ])

  // Tokenize and filter stop words
  const tokens = normalizedMessage.split(/\s+/).filter((word) => word.length > 2 && !stopWords.has(word))

  // Score each FAQ based on keyword and question matches
  const scoredMatches = chatbotFAQs.map((faq) => {
    let score = 0

    // Exact question match gets highest score
    if (normalizedMessage === faq.question.toLowerCase()) {
      score += 1000
    }

    // Partial question match
    if (
      normalizedMessage.includes(faq.question.toLowerCase()) ||
      faq.question.toLowerCase().includes(normalizedMessage)
    ) {
      score += 500
    }

    // Keyword exact matches (high priority)
    faq.keywords.forEach((keyword) => {
      const keywordLower = keyword.toLowerCase()
      if (normalizedMessage.includes(keywordLower)) {
        // Exact phrase match
        score += (faq.weight || 1) * 100
      }
      // Multi-word keyword handling
      const keywordTokens = keywordLower.split(/\s+/)
      const matchedKeywordTokens = keywordTokens.filter((kt) => tokens.includes(kt))
      if (matchedKeywordTokens.length > 0) {
        score += (faq.weight || 1) * 50 * (matchedKeywordTokens.length / keywordTokens.length)
      }
    })

    // Token overlap with question
    const questionTokens = faq.question
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 3 && !stopWords.has(word))

    const matchingTokens = tokens.filter((token) => questionTokens.includes(token))
    score += matchingTokens.length * 10

    // Category match bonus
    if (normalizedMessage.includes(faq.category.toLowerCase())) {
      score += 20
    }

    return { faq, score }
  })

  // Filter matches with score above threshold
  const significantMatches = scoredMatches.filter((m) => m.score > 10).sort((a, b) => b.score - a.score)

  // Return best match or null
  return significantMatches.length > 0 ? significantMatches[0].faq : null
}

export const defaultResponses = {
  greeting: "Hello! I'm Ami, your virtual assistant from Webeside Technology. How can I help you today?",
  farewell:
    "Thank you for chatting with us! Feel free to reach out anytime at +91 8860876087 or via WhatsApp. Have a great day!",
  unclear:
    "I'm not sure I understand. Could you please rephrase your question? Or contact us at +91 8860876087 for immediate assistance.",
  noMatch:
    "I don't have a specific answer for that. Please contact us directly:\n\nPhone: +91 8860876087\nEmail: Enquiry@webesidetechnology.com\nWhatsApp: https://wa.me/918860876087\n\nOur team will be happy to assist you!",
}
