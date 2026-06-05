export interface PricingPlan {
  name: string
  price: string
  period: string
  prices?: {
    "1 Month": string
    "6 Months": string
    "1 Year": string
  }
  description: string
  features: string[]
  note?:String
  popular?: boolean
}

export const pricingData: Record<string, PricingPlan[]> = {
"Integration Services": [
  {
    name: "SMS Integration",
    price: "₹10,000",
    period: "/One-Time",
    description: "Perfect for small businesses starting with SMS automation",
    features: [
      "SMS API Integration",
      "Bulk SMS Sending System",
      "OTP & Verification SMS",
      "Delivery Reports (DLR)",
      "Basic Dashboard Setup",
    ],
    note:
      "API cost is not included in this integration cost. It may vary based on number of users and services used.",
  },
  {
    name: "Whatsapp Integration",
    price: "₹20,000",
    period: "/One-Time",
    description: "For growing businesses seeking better customer engagement",
    popular: true,
    features: [
      "WhatsApp Business API Integration",
      "Automated Message Templates",
      "Chatbot Setup (Basic)",
      "Order & Notification Alerts",
      "CRM Integration Support",
      "Priority Support",
    ],
    note:
      "API cost is not included in this integration cost. It may vary based on number of users and services used.",
  },
  {
    name: "IVR Integration",
    price: "₹30,000",
    period: "/One-Time",
    description: "Complete IVR solution for call automation",
    features: [
      "Multi-level IVR Call Flow Setup",
      "Call Routing System",
      "Voice Recording & Playback",
      "Missed Call Alerts",
      "Call Analytics Dashboard",
      "Custom Greeting Setup",
    ],
    note:
      "API cost is not included in this integration cost. It may vary based on number of users and services used.",
  },
],
  "Digital Marketing": [
    {
      name: "Starter",
      price: "₹10,000",
      period: "/month",
      prices: {
        "1 Month": "₹10,000",
        "6 Months": "₹60,000",
        "1 Year": "₹120,000"
      },
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "SEO Basic Package",
        "Social Media Management (2 platforms)",
        "5 Content Posts per week",
        "Monthly Analytics Report",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹20,000",
      period: "/month",
      prices: {
        "1 Month": "₹20,000",
        "6 Months": "₹120,000",
        "1 Year": "₹240,000"
      },
      description: "Ideal for growing businesses looking to expand online",
      popular: true,
      features: [
        "Advanced SEO Package",
        "Social Media Management (4 platforms)",
        "10 Content Posts per week",
        "Google Ads Management (up to ₹20k budget)",
        "Bi-weekly Analytics Report",
        "Priority Email & Phone Support",
        "Bulk WhatsApp Marketing",
      ],
    },
    {
      name: "Enterprise",
      price: "₹35,000",
      period: "/month",
      prices: {
        "1 Month": "₹35,000",
        "6 Months": "₹210,000",
        "1 Year": "₹420,000"
      },
      description: "Comprehensive solution for established businesses",
      features: [
        "Complete SEO Package",
        "Social Media Management (All platforms)",
        "20+ Content Posts per week",
        "Google & Meta Ads Management (unlimited)",
        "Weekly Analytics Report",
        "24/7 Dedicated Support",
        "Influencer Marketing",
        "Video Production",
        "PR Services",
      ],
    },
  ],
  "Website & App Development": [
    {
      name: "Basic Website",
      price: "₹25,000",
      period: "/one-time",
      description: "Simple business website for online presence",
      features: [
        "5-7 Page Website",
        "Responsive Design",
        "Contact Form",
        "Basic SEO",
        "1 Month Free Maintenance",
        "SSL Certificate",
      ],
    },
    {
      name: "E-commerce Solution",
      price: "₹60,000",
      period: "/one-time",
      description: "Complete online store to start selling",
      popular: true,
      features: [
        "Unlimited Products",
        "Payment Gateway Integration",
        "Order Management System",
        "Admin Dashboard",
        "Mobile App (Android)",
        "3 Months Free Maintenance",
        "SEO Optimization",
        "Email & WhatsApp Notifications",
      ],
    },
    {
      name: "Custom Application",
      price: "₹1,50,000",
      period: "/one-time",
      description: "Fully customized web & mobile applications",
      features: [
        "Custom Web Application",
        "iOS & Android Apps",
        "Admin Panel",
        "API Development",
        "Cloud Integration",
        "6 Months Free Maintenance",
        "Advanced Security",
        "Analytics Dashboard",
        "Dedicated Project Manager",
      ],
    },
  ],
  "SaaS Services": [
    {
      name: "Basic Plan",
      price: "₹5,000",
      period: "/month",
      prices: {
        "1 Month": "₹5,000",
        "6 Months": "₹30,000",
        "1 Year": "₹60,000"
      },
      description: "Essential SaaS tools for small teams",
      features: ["Up to 10 Users", "Basic Features", "Email Support", "Monthly Backups", "99% Uptime SLA"],
    },
    {
      name: "Business Plan",
      price: "₹15,000",
      period: "/month",
      prices: {
        "1 Month": "₹15,000",
        "6 Months": "₹90,000",
        "1 Year": "₹180,000"
      },
      description: "Advanced features for growing businesses",
      popular: true,
      features: [
        "Up to 50 Users",
        "All Features Included",
        "Priority Support",
        "Daily Backups",
        "99.9% Uptime SLA",
        "Custom Integrations",
        "Advanced Analytics",
      ],
    },
    {
      name: "Enterprise Plan",
      price: "₹40,000",
      period: "/month",
      prices: {
        "1 Month": "₹40,000",
        "6 Months": "₹240,000",
        "1 Year": "₹480,000"
      },
      description: "Complete solution for large organizations",
      features: [
        "Unlimited Users",
        "All Premium Features",
        "24/7 Dedicated Support",
        "Real-time Backups",
        "99.99% Uptime SLA",
        "Custom Development",
        "White-label Option",
        "Dedicated Account Manager",
        "On-premise Deployment Available",
      ],
    },
  ],
  "Designing Services": [
    {
      name: "Logo Package",
      price: "₹3,000",
      period: "/one-time",
      description: "Professional logo for your brand",
      features: [
        "3 Logo Concepts",
        "2 Revisions",
        "Vector Files (AI, EPS)",
        "PNG & JPG Files",
        "Favicon Design",
        "3-4 Days Delivery",
      ],
    },
    {
      name: "Brand Identity",
      price: "₹15,000",
      period: "/one-time",
      description: "Complete brand identity package",
      popular: true,
      features: [
        "Logo Design",
        "Business Card",
        "Letterhead",
        "Social Media Kit",
        "Brand Guidelines",
        "Unlimited Revisions",
        "All Source Files",
        "7-10 Days Delivery",
      ],
    },
    {
      name: "Complete Package",
      price: "₹35,000",
      period: "/one-time",
      description: "Comprehensive design solution",
      features: [
        "Brand Identity Package",
        "Website UI/UX Design",
        "Marketing Collateral (Brochure, Flyer)",
        "Social Media Graphics (20 posts)",
        "Email Templates",
        "Presentation Design",
        "All Source Files",
        "2 Weeks Delivery",
        "Dedicated Designer",
      ],
    },
  ],
}

export const individualPricingData: Record<string, PricingPlan[]> = {
  "SEO": [
    {
      name: "Basic SEO",
      price: "₹10,000",
      period: "/month",
      prices: {
        "1 Month": "₹10,000",
        "6 Months": "₹60,000",
        "1 Year": "₹120,000"
      },
      description: "For small businesses starting with SEO",
      features: [
        "Keyword Research (20 keywords)",
        "On-page Optimization",
        "Monthly Reports",
        "Basic Link Building",
      ],
    },
    {
      name: "Advanced SEO",
      price: "₹25,000",
      period: "/month",
      prices: {
        "1 Month": "₹25,000",
        "6 Months": "₹150,000",
        "1 Year": "₹300,000"
      },
      description: "For growing businesses",
      popular: true,
      features: [
        "Keyword Research (50+ keywords)",
        "Advanced On-page & Technical SEO",
        "Weekly Reports",
        "Premium Link Building",
        "Content Optimization",
      ],
    },
    {
      name: "Enterprise SEO",
      price: "₹50,000",
      period: "/month",
      prices: {
        "1 Month": "₹50,000",
        "6 Months": "₹300,000",
        "1 Year": "₹600,000"
      },
      description: "For large businesses",
      features: [
        "Unlimited Keywords",
        "Complete SEO Solution",
        "Daily Reports",
        "Authority Link Building",
        "Dedicated SEO Manager",
      ],
    },
  ],
  "Google/Meta Ads": [
    {
      name: "Ads Management",
      price: "From ₹15,000",
      period: "/month",
      prices: {
        "1 Month": "From ₹15,000",
        "6 Months": "From ₹90,000",
        "1 Year": "From ₹180,000"
      },
      description: "Professional ad campaign management (+ ad budget)",
      features: [
        "Campaign Strategy & Setup",
        "Ad Copy & Creative Direction",
        "Audience Targeting",
        "Continuous Optimization",
        "Performance Tracking",
      ],
    }
  ],
  "Social Media Marketing": [
    {
      name: "SMM Package",
      price: "From ₹12,000",
      period: "/month",
      prices: {
        "1 Month": "From ₹12,000",
        "6 Months": "From ₹72,000",
        "1 Year": "From ₹144,000"
      },
      description: "Engage your audience across social platforms",
      features: [
        "Platform Management",
        "Content Creation & Posting",
        "Community Engagement",
        "Follower Growth Strategy",
        "Monthly Analytics",
      ],
    }
  ],
  "WhatsApp Marketing": [
    {
      name: "WhatsApp Package",
      price: "From ₹8,000",
      period: "/month",
      prices: {
        "1 Month": "From ₹8,000",
        "6 Months": "From ₹48,000",
        "1 Year": "From ₹96,000"
      },
      description: "Direct outreach via WhatsApp",
      features: [
        "Bulk Message Campaigns",
        "Automated Replies Setup",
        "Contact List Management",
        "Campaign Analytics",
      ],
    }
  ],
  "Website Development": [
    {
      name: "Website Project",
      price: "From ₹15,000",
      period: "/one-time",
      description: "Custom built websites for your business",
      features: [
        "Custom UI/UX Design",
        "Mobile Responsive",
        "Basic On-page SEO",
        "Contact Forms & Integrations",
        "Speed Optimization",
      ],
    }
  ],
  "E-commerce": [
    {
      name: "E-commerce Store",
      price: "From ₹40,000",
      period: "/one-time",
      description: "Complete online store solution",
      features: [
        "Product Catalog Management",
        "Payment Gateway Integration",
        "Shopping Cart & Checkout",
        "Order Management Dashboard",
        "Mobile Optimized",
      ],
    }
  ],
  "App Development": [
    {
      name: "Mobile Application",
      price: "From ₹50,000",
      period: "/one-time",
      description: "iOS and Android mobile apps",
      features: [
        "Cross-platform Development",
        "Custom UI/UX",
        "API Integration",
        "Push Notifications",
        "App Store Submission",
      ],
    }
  ],
  "Logo Design": [
    {
      name: "Logo Design",
      price: "From ₹3,000",
      period: "/one-time",
      description: "Professional brand identity creation",
      features: [
        "Multiple Concepts",
        "Revision Rounds",
        "High-Resolution Files",
        "Vector Formats Included",
        "Brand Guidelines (Optional)",
      ],
    }
  ],
  "UI/UX Design": [
    {
      name: "UI/UX Project",
      price: "From ₹20,000",
      period: "/one-time",
      description: "User-centered design for digital products",
      features: [
        "Wireframing & Prototyping",
        "User Journey Mapping",
        "High-Fidelity Mockups",
        "Interactive Prototypes",
        "Design System Delivery",
      ],
    }
  ]
}
