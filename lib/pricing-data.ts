export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
}

export const pricingData: Record<string, PricingPlan[]> = {
  "SEO Services": [
    {
      name: "Starter",
      price: "₹10,000",
      period: "/month",
      description: "Perfect for small businesses starting with SEO",
      features: [
        "Keyword Research (20 keywords)",
        "On-page Optimization",
        "Monthly Reports",
        "Basic Link Building",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹25,000",
      period: "/month",
      description: "For growing businesses seeking better visibility",
      popular: true,
      features: [
        "Keyword Research (50+ keywords)",
        "Advanced On-page & Technical SEO",
        "Weekly Reports",
        "Premium Link Building",
        "Content Optimization",
        "Priority Email & Phone Support",
      ],
    },
    {
      name: "Enterprise",
      price: "₹50,000",
      period: "/month",
      description: "Complete SEO solution for large businesses",
      features: [
        "Unlimited Keywords",
        "Complete SEO Solution",
        "Daily Reports",
        "Authority Link Building",
        "Dedicated SEO Manager",
        "24/7 Dedicated Support",
      ],
    },
  ],
  "Digital Marketing": [
    {
      name: "Starter",
      price: "₹15,000",
      period: "/month",
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
      price: "₹35,000",
      period: "/month",
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
      price: "₹75,000",
      period: "/month",
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
      description: "Essential SaaS tools for small teams",
      features: ["Up to 10 Users", "Basic Features", "Email Support", "Monthly Backups", "99% Uptime SLA"],
    },
    {
      name: "Business Plan",
      price: "₹15,000",
      period: "/month",
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
