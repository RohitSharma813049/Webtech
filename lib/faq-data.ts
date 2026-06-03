export interface FAQ {
  question: string
  answer: string
}

export interface FAQCategory {
  category: string
  faqs: FAQ[]
}

export const faqData: FAQCategory[] = [
  {
    category: "General",
    faqs: [
      {
        question: "What services does WB Tech Agency provide?",
        answer:
          "We offer comprehensive digital solutions including web development, mobile app development, digital marketing, e-commerce solutions, SaaS products, and professional design services. Our team specializes in creating custom solutions tailored to your business needs.",
      },
      {
        question: "How long have you been in business?",
        answer:
          "WB Tech Agency has been delivering exceptional digital solutions for over 10 years. We have successfully completed 900+ projects and served 120+ satisfied clients across various industries.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work with diverse industries including e-commerce, education, healthcare, real estate, food & beverage, manufacturing, technology, and more. Our versatile team has experience in delivering solutions across 30+ different business sectors.",
      },
      {
        question: "Do you offer custom solutions?",
        answer:
          "Yes, absolutely! We specialize in creating custom solutions tailored to your specific business requirements. Every project is unique, and we work closely with you to understand your needs and deliver personalized solutions.",
      },
      {
        question: "What is your pricing structure?",
        answer:
          "Our pricing is project-based and depends on the scope, complexity, and specific requirements of your project. We offer competitive rates and flexible payment plans. Contact us for a free consultation and customized quote.",
      },
    ],
  },
  {
    category: "Website Development",
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "A standard business website typically takes 2-4 weeks from start to finish. E-commerce websites usually take 4-8 weeks, while complex custom applications may take 8-12 weeks or more depending on the features and requirements.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Yes, absolutely! All our websites are fully responsive and mobile-optimized. We follow a mobile-first approach to ensure your website looks great and functions perfectly on all devices - smartphones, tablets, and desktops.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes, we offer website redesign services. We can modernize your existing website, improve its design, enhance functionality, and optimize performance while maintaining your brand identity and important content.",
      },
      {
        question: "Do you provide website hosting?",
        answer:
          "Yes, we can help with website hosting and domain registration. We work with reliable hosting providers and can recommend the best hosting solution based on your website's requirements and traffic expectations.",
      },
      {
        question: "Will I be able to update the website myself?",
        answer:
          "Yes! We build websites with user-friendly content management systems (CMS) that allow you to easily update content, images, and other elements without technical knowledge. We also provide training and documentation.",
      },
    ],
  },
  {
    category: "Mobile App Development",
    faqs: [
      {
        question: "Do you develop apps for both iOS and Android?",
        answer:
          "Yes, we develop mobile apps for both iOS and Android platforms. We offer native app development for each platform as well as cross-platform development using technologies like React Native and Flutter for cost-effective solutions.",
      },
      {
        question: "How much does it cost to develop a mobile app?",
        answer:
          "The cost varies based on app complexity, features, platforms, and design requirements. Basic apps start from a lower range, while complex apps with advanced features cost more. Contact us for a detailed quote based on your specific requirements.",
      },
      {
        question: "Can you help publish my app on app stores?",
        answer:
          "Yes, we handle the complete app store submission process for both Apple App Store and Google Play Store, including account setup, app optimization, and compliance with store guidelines.",
      },
      {
        question: "Do you provide app maintenance and updates?",
        answer:
          "Yes, we offer comprehensive app maintenance packages including bug fixes, OS updates, security patches, feature enhancements, and performance optimization to keep your app running smoothly.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "A basic mobile app typically takes 8-12 weeks, while more complex apps with advanced features may take 4-6 months or longer. The timeline depends on the app's complexity, features, and platform requirements.",
      },
    ],
  },
  {
    category: "Digital Marketing",
    faqs: [
      {
        question: "What digital marketing services do you offer?",
        answer:
          "We offer comprehensive digital marketing services including SEO, PPC advertising (Google Ads, Facebook Ads), social media marketing, content marketing, email marketing, WhatsApp marketing, and influencer marketing.",
      },
      {
        question: "How long does it take to see SEO results?",
        answer:
          "SEO is a long-term strategy. You can typically start seeing initial results in 3-6 months, with significant improvements in 6-12 months. The timeline depends on your industry competition, website condition, and target keywords.",
      },
      {
        question: "Do you manage social media accounts?",
        answer:
          "Yes, we offer complete social media management services including content creation, posting schedules, community engagement, paid advertising, and analytics reporting across all major platforms.",
      },
      {
        question: "What is your approach to PPC advertising?",
        answer:
          "We create data-driven PPC campaigns focused on maximizing ROI. Our approach includes thorough keyword research, compelling ad copy, strategic bidding, A/B testing, and continuous optimization based on performance data.",
      },
      {
        question: "Can you help with Google My Business optimization?",
        answer:
          "Yes, we specialize in Google My Business optimization to improve your local search visibility. This includes profile setup, optimization, review management, post creation, and accurate business listings.",
      },
    ],
  },
  {
    category: "E-commerce",
    faqs: [
      {
        question: "What e-commerce platforms do you work with?",
        answer:
          "We work with various e-commerce platforms including custom-built solutions, WooCommerce, Shopify, Magento, and other popular platforms. We recommend the best platform based on your business needs and budget.",
      },
      {
        question: "Can you integrate payment gateways?",
        answer:
          "Yes, we integrate multiple payment gateways including Razorpay, PayU, Paytm, Stripe, PayPal, and others. We ensure secure payment processing and compliance with PCI standards for customer safety.",
      },
      {
        question: "Do you provide inventory management systems?",
        answer:
          "Yes, all our e-commerce solutions include comprehensive inventory management features allowing you to track stock levels, manage products, handle orders, and generate reports efficiently.",
      },
      {
        question: "Can you help with product listing and optimization?",
        answer:
          "Yes, we offer product listing services including professional photography, compelling descriptions, SEO optimization, and strategic categorization to maximize visibility and conversions.",
      },
      {
        question: "Do you offer e-commerce marketing services?",
        answer:
          "Yes, we provide specialized e-commerce marketing services including product ads, retargeting campaigns, email marketing, abandoned cart recovery, and conversion optimization strategies.",
      },
    ],
  },
  {
    category: "Design Services",
    faqs: [
      {
        question: "What design services do you offer?",
        answer:
          "We offer comprehensive design services including logo design, branding, UI/UX design, brochures, banners, posters, catalogs, business cards, packaging design, and complete brand identity creation.",
      },
      {
        question: "How many logo concepts will I receive?",
        answer:
          "We typically provide 3-5 initial logo concepts for your review. Based on your feedback, we refine your preferred concept with unlimited revisions until you're completely satisfied with the final design.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "You'll receive your final designs in multiple formats including vector files (AI, EPS), high-resolution PNG, JPG, PDF, and web-optimized versions. For print materials, we provide print-ready files with proper specifications.",
      },
      {
        question: "Can you help with brand identity development?",
        answer:
          "Yes, we create complete brand identity packages including logo design, color palette, typography selection, brand guidelines, business cards, letterheads, and other marketing collateral to establish a strong brand presence.",
      },
      {
        question: "Do you offer print design services?",
        answer:
          "Yes, we design for both digital and print media. We create print-ready files with proper bleed, color profiles (CMYK), and specifications. We can also coordinate with printing services if needed.",
      },
    ],
  },
]
