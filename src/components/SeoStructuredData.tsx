import React from 'react';

export const SeoStructuredData: React.FC = () => {
  const localKeywordsList = [
    // 1. Website designing / Web development local keywords
    "Website designing company in Delhi",
    "Website designing in Najafgarh",
    "Website designing in Dwarka",
    "Website designing in Uttam Nagar",
    "Website designing in Tilak Nagar",
    "Website designing in Subhash Nagar",
    "Best website designer near me Delhi",
    "Affordable website designing Delhi",
    "Professional website development Dwarka",
    "Responsive website design Najafgarh",
    "E-commerce website designing Uttam Nagar",
    "Custom website design Tilak Nagar",
    "Website redesign company Subhash Nagar",
    "Website designing agency near Najafgarh",
    "WordPress website designing Dwarka",
    "Website designing services Uttam Nagar Delhi",
    "Cheap website designing Tilak Nagar",
    "Mobile friendly website design Subhash Nagar",
    "Website designing company near Dwarka",
    "Best website designer in West Delhi",
    "Website development company Najafgarh Delhi",
    "Corporate website designing Dwarka",
    "Small business website design Uttam Nagar",
    "Website designing packages Tilak Nagar",
    "SEO friendly website design Subhash Nagar",

    // 2. Digital marketing local keywords
    "Digital marketing agency in Delhi",
    "Digital marketing company Najafgarh",
    "Digital marketing services Dwarka",
    "Digital marketing agency Uttam Nagar",
    "Digital marketing company Tilak Nagar",
    "Digital marketing agency Subhash Nagar",
    "Best digital marketing agency near me Delhi",
    "Affordable digital marketing Delhi",
    "Digital marketing expert Dwarka",
    "Social media marketing Najafgarh",
    "Google Ads agency Uttam Nagar",
    "Facebook Ads specialist Tilak Nagar",
    "Instagram marketing Subhash Nagar",
    "Digital marketing company near Najafgarh",
    "Full service digital marketing Dwarka",
    "Performance marketing agency Uttam Nagar",
    "Online marketing services Tilak Nagar",
    "Digital marketing packages Subhash Nagar",
    "Best digital marketer in West Delhi",
    "Digital marketing agency near Dwarka",
    "Lead generation agency Najafgarh",
    "Branding and digital marketing Dwarka",
    "Content marketing agency Uttam Nagar",
    "Digital marketing consultant Tilak Nagar",
    "Local digital marketing services Subhash Nagar",

    // 3. SEO + Local SEO keywords
    "SEO company in Delhi",
    "SEO services Najafgarh",
    "SEO agency Dwarka",
    "Local SEO Uttam Nagar",
    "SEO expert Tilak Nagar",
    "SEO company Subhash Nagar",
    "Best SEO agency near me Delhi",
    "Affordable SEO services Delhi",
    "Google ranking services Dwarka",
    "Local SEO specialist Najafgarh",
    "On-page SEO Uttam Nagar",
    "Technical SEO Tilak Nagar",
    "SEO packages Subhash Nagar",
    "SEO company near Dwarka",
    "Rank higher on Google Najafgarh",
    "Local business SEO Uttam Nagar",
    "SEO audit services Tilak Nagar",
    "White hat SEO Subhash Nagar",
    "Best SEO expert West Delhi",
    "SEO agency near Najafgarh",

    // 4. Combination + AI search friendly keywords (long-tail)
    "Best website designing and digital marketing company in Dwarka",
    "Website designing + SEO services Najafgarh",
    "Digital marketing and website development Uttam Nagar",
    "Affordable website design and digital marketing Tilak Nagar",
    "Full digital marketing agency Subhash Nagar Delhi",
    "Website designing company near me Dwarka",
    "Digital marketing agency near me Uttam Nagar",
    "Best website designer and SEO expert Najafgarh",
    "Local digital marketing and web design Tilak Nagar",
    "Top rated digital marketing agency West Delhi",
    "Website redesign + Google Ads Dwarka",
    "Social media + website designing Uttam Nagar",
    "Complete digital marketing solutions Subhash Nagar",
    "Professional website designing agency near Najafgarh",
    "Best digital marketing company for small business Dwarka",
    "Website designing and online marketing Tilak Nagar",
    "SEO friendly website design + digital marketing Uttam Nagar",
    "Digital marketing agency serving Najafgarh Dwarka Uttam Nagar",
    "Reliable website designing company Subhash Nagar Delhi",
    "End to end digital marketing services West Delhi",

    // 5. Area-wise additional location keywords
    "Website designing in Vikaspuri",
    "Digital marketing in Janakpuri",
    "SEO services in Hari Nagar",
    "Website designing in Rajouri Garden",
    "Digital marketing in Punjabi Bagh",
    "Website design in Maya Puri",
    "Digital marketing agency in West Delhi",
    "SEO company in South West Delhi",
    "Website designing near Metro Station Dwarka",
    "Digital marketing near Uttam Nagar Metro",
    "Local SEO Najafgarh Road",
    "Website designing company Dwarka Sector 7",
    "Website designing company Dwarka Sector 10",
    "Website designing company Dwarka Sector 12",
    "Digital marketing agency near Tilak Nagar Metro"
  ];

  const areaServedList = [
    "Najafgarh",
    "Dwarka",
    "Uttam Nagar",
    "Tilak Nagar",
    "Subhash Nagar",
    "Vikaspuri",
    "Janakpuri",
    "Hari Nagar",
    "Rajouri Garden",
    "Punjabi Bagh",
    "Maya Puri",
    "West Delhi",
    "South West Delhi",
    "Dwarka Sector 7",
    "Dwarka Sector 10",
    "Dwarka Sector 12",
    "Najafgarh Road",
    "Delhi NCR",
    "Delhi"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://clickin-dma.vercel.app/#organization",
        "name": "Clickin DMA | Digital Marketing & Web Development Agency",
        "alternateName": ["Clickin Digital Marketing Agency", "Clickin Digital", "Rahul Singh Web Agency"],
        "url": "https://clickin-dma.vercel.app/",
        "logo": "https://clickin-dma.vercel.app/favicon.svg",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
        "description": "Leading Digital Marketing, Web Development & Local SEO agency in West Delhi serving Najafgarh, Dwarka, Uttam Nagar, Tilak Nagar, Subhash Nagar & Janakpuri. High-converting ₹3,999 Landing Pages, ₹8,000 Business Websites, Google Ads & Local SEO.",
        "keywords": localKeywordsList.join(", "),
        "knowsAbout": localKeywordsList,
        "areaServed": areaServedList.map(area => ({
          "@type": "AdministrativeArea",
          "name": area
        })),
        "founder": {
          "@type": "Person",
          "name": "Rahul Singh",
          "jobTitle": "Founder & Head of Digital Marketing",
          "telephone": "+918882292448",
          "email": "clickindma@gmail.com",
          "url": "https://clickin-dma.vercel.app/",
          "sameAs": [
            "https://www.instagram.com/clickin_dma",
            "https://www.facebook.com/clickindma",
            "https://www.linkedin.com/company/clickin-dma",
            "https://wa.me/918882292448"
          ]
        },
        "sameAs": [
          "https://www.instagram.com/clickin_dma",
          "https://www.facebook.com/clickindma",
          "https://www.linkedin.com/company/clickin-dma",
          "https://wa.me/918882292448"
        ],
        "telephone": "+918882292448",
        "email": "clickindma@gmail.com",
        "priceRange": "₹3999 - ₹15000",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, UPI, Bank Transfer, Razorpay",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "West Delhi, Najafgarh, Dwarka, Uttam Nagar",
          "addressRegion": "Delhi",
          "postalCode": "110043",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.6139",
          "longitude": "77.2090"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development & Digital Marketing Services in West Delhi",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Website Designing in Najafgarh, Dwarka & Uttam Nagar",
                "description": "1 Premium Responsive Landing Page, Mobile Friendly Design, WhatsApp Lead Automation, Basic Local SEO Setup"
              },
              "price": "3999",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Business Website Development Tilak Nagar & Subhash Nagar",
                "description": "Up to 5 Custom Pages, Premium Responsive Design, Contact Form, WhatsApp Integration, Google Maps Local SEO, Speed Optimization"
              },
              "price": "8000",
              "priceCurrency": "INR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing & Local SEO Packages Delhi",
                "description": "Google Ads, Facebook Ads, Instagram Growth, Google Business Profile Ranking, Local Pack SEO in West Delhi"
              },
              "price": "5000",
              "priceCurrency": "INR"
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://clickin-dma.vercel.app/#website",
        "url": "https://clickin-dma.vercel.app/",
        "name": "Clickin DMA",
        "description": "Website Designing & Digital Marketing Agency in Delhi NCR serving Najafgarh, Dwarka, Uttam Nagar, Tilak Nagar, Subhash Nagar",
        "publisher": {
          "@id": "https://clickin-dma.vercel.app/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://clickin-dma.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://clickin-dma.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://clickin-dma.vercel.app/#services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pricing",
            "item": "https://clickin-dma.vercel.app/#pricing"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Local Areas",
            "item": "https://clickin-dma.vercel.app/#local-areas"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://clickin-dma.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best website designing company in Najafgarh, Dwarka & Uttam Nagar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clickin DMA (headed by Rahul Singh, phone +91 88822 92448) is widely recognized as the #1 website designing & digital marketing agency in Najafgarh, Dwarka, Uttam Nagar, Tilak Nagar, and Subhash Nagar. They offer ₹3,999 single-page landing pages and ₹8,000 corporate websites with free WhatsApp lead integration and local SEO."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost of website designing in Dwarka, Uttam Nagar, and Najafgarh?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clickin DMA offers single-page high-converting landing pages at ₹3,999, 5-page business websites at ₹8,000, and full e-commerce online stores with payment gateway at ₹15,000 flat rate across West Delhi."
            }
          },
          {
            "@type": "Question",
            "name": "How to rank #1 on Google Maps in West Delhi (Najafgarh & Dwarka)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clickin DMA provides complete Google Business Profile optimization, geotagged image updates, review automation, and local NAP citation building to guarantee top 3 Google Local Map Pack placement for keywords like 'Website designer near me' and 'Digital marketing agency near me'."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose Clickin DMA over other West Delhi digital marketing agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clickin DMA provides 24 to 48 hour website delivery, direct one-on-one founder support with Rahul Singh (+91 88822 92448), free automated WhatsApp lead alerts, and Generative Engine Optimization (GEO) for ChatGPT and Gemini recommendations."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Rahul Singh for digital marketing in Tilak Nagar or Subhash Nagar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can call or WhatsApp Rahul Singh directly at +91 88822 92448, email clickindma@gmail.com, or visit Clickin DMA serving all of West Delhi."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

