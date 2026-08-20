export const siteContent = {
  global: {
    siteName: "Sora Digital",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  hero: {
    title: "Sora Digital",
    statusBadge: "STATUS: AVAILABLE",
    subtitle: "Custom Web Design & Development - Crafting tailored digital spaces that leave a lasting impression.",
    credit: "Bespoke Digital Experiences",
    backgroundImages: [
      "/images/hero-bg-1.webp",
      "/images/hero-bg-2.webp",
      "/images/hero-bg-3.webp",
      "/images/hero-bg-4.webp",
      "/images/hero-bg-5.webp",
    ],
    backgroundImage: "/images/hero-bg.webp",
    ctaText: "Start Your Project",
  },
  about: {
    title: "Our Vision & Approach",
    description: "We are a boutique digital design agency focused on delivering high-end, bespoke websites. From timeless wedding invitations to elegant business portfolios, we bring your ideas to life with precision and care. We believe in a tailored approach to digital design. Every project begins with a deep understanding of your narrative. We combine editorial aesthetics with cutting-edge web technologies to deliver highly responsive, visually stunning, and purposeful platforms.",
    image: "/images/about-group.webp",
  },
  services: {
    title: "Services",
    subtitle: "Comprehensive digital solutions tailored to your unique needs.",
    list: [
      {
        id: 1,
        name: "Wedding Websites",
        role: "Event & Celebration",
        tags: ["💍 Intro", "✉️ Invitations"],
        image: "/images/service_wedding_web_1787208285576.webp",
        bio: "Elegant, personalized wedding websites complete with interactive intro animation, your story, and event details.",
      },
      {
        id: 2,
        name: "Business Portfolios",
        role: "Professional & Corporate",
        tags: ["💼 Case Studies", "📈 SEO"],
        image: "/images/service_business_portfolio_1787208363012.jpg",
        bio: "Sophisticated portfolios designed to showcase your agency's work, highlight your achievements, and attract high-tier clients.",
      },
      {
        id: 3,
        name: "E-Commerce",
        role: "Retail & Brands",
        tags: ["🛒 Storefronts", "💳 Payments"],
        image: "/images/service_ecommerce_site_1787208349510.jpg",
        bio: "Seamless shopping experiences that reflect your brand's quality and drive conversions with intuitive design.",
      },
      {
        id: 4,
        name: "Brand Identity",
        role: "Visual Design",
        tags: ["🎨 Logos", "✨ Typography"],
        image: "/images/service_brand_identity_1787208297131.jpg",
        bio: "Comprehensive branding packages including logo design, typography selection, and visual guidelines.",
      }
    ],
  },
  portfolio: {
    title: "Featured Projects",
    subtitle: "A selection of our recent digital work.",
    timeline: [
      {
        id: 1,
        year: "2026",
        title: "Wedding Invitation",
        description: "An elegant digital wedding invitation featuring a captivating intro animation, beautifully designed venue details, and a seamless event itinerary.",
        image: "/images/project_wedding_invitation_1787208317970.webp",
        link: "https://k-wedding-bespoke.vercel.app/",
      },
      {
        id: 2,
        year: "2026",
        title: "Bespoke Wedding Rings",
        description: "A luxury e-commerce experience for a bespoke ring designer, designed to elevate product presentation.",
        image: "/images/project_bespoke_rings_1787208330543.jpg",
        link: "https://sora-bespoke.vercel.app/",
      }
    ],
  },
  footer: {
    text: "Crafting bespoke digital experiences for forward-thinking brands and couples.",
    disclaimer: "Bespoke Digital Experiences - Crafted with precision.",
    socials: [
      { platform: "Instagram", link: "#" },
      { platform: "Twitter", link: "#" },
      { platform: "LinkedIn", link: "#" },
    ],
  },
};
