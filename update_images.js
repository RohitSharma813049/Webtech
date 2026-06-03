const fs = require('fs');

const files = [
  'app/services/website-app-development/page.tsx',
  'app/services/saas-services/page.tsx',
  'app/services/digital-marketing/page.tsx',
  'app/services/designing-services/page.tsx',
];

const newImages = `  imagesData={[
    {
      src: "/image/images/hero-sections/webeside-technology-banner-web-development.webp",
      alt: "Web Development",
      label: "Web Development",
    },
    {
      src: "/image/images/hero-sections/webeside-technology-banner-digital-marketing.webp",
      alt: "Digital Marketing",
      label: "Digital Marketing",
    },
    {
      src: "/image/images/hero-sections/webeside-technology-banner-seo-services.webp",
      alt: "SEO Services",
      label: "SEO Services",
    },
    {
      src: "/image/images/hero-sections/webeside-technology-banner-ecommerce.webp",
      alt: "E-Commerce",
      label: "E-Commerce",
    },
    {
      src: "/image/images/hero-sections/webeside-technology-banner-mobile-app.webp",
      alt: "Mobile App Development",
      label: "Mobile Apps",
    },
  ]}`;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/imagesData=\{\[[\s\S]*?\]\}/, newImages);
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
