import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "MM INOKS Matej Markovič s.p.",
    "image": "https://res.cloudinary.com/ddl75cyhk/image/upload/v1772806087/kakovostne-inox-ograje-izdelava_g3cuql.webp",
    "telephone": "040 541 954",
    "email": "info@mm-inox.si",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gorenji vrh pri Dobrniču 7",
      "addressLocality": "Dobrnič",
      "postalCode": "8211",
      "addressCountry": "SI"
    },
    "url": "https://mm-inox.si",
    "description": "Vrhunske inox in prašno barvane ograje, francoski balkoni, nadstreški in varjenje vseh vrst kovin. Kvaliteta in tradicija, Matej Markovič s.p.",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.8833", // Approximate for Dobrnič
      "longitude": "14.9833"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Storitve",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Inox Ograje"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Prašno Barvane Ograje"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Francoski Balkoni"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Varjenje"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      {/* 1. TITLE */}
      <title>MM INOKS | Vrhunske Inox in Prašno Barvane Ograje | Dobrnič</title>

      {/* 2. META DESCRIPTION */}
      <meta 
        name="description" 
        content="MM INOKS Matej Markovič: Vrhunske inox in prašno barvane ograje, francoski balkoni ter strokovno varjenje. Kvaliteta in tradicija v Dobrniču." 
      />

      {/* 3. OPEN GRAPH (OG) */}
      <meta property="og:title" content="MM INOKS | Vrhunske Inox in Prašno Barvane Ograje" />
      <meta property="og:description" content="MM INOKS: Izdelava in montaža inox ograj, nadstreškov in kovinskih konstrukcij. Tradicija in kakovost." />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sl_SI" />
      <meta property="og:url" content="https://mm-inox.si" />
      <meta property="og:site_name" content="MM INOKS" />
      <meta property="og:image" content="https://res.cloudinary.com/ddl75cyhk/image/upload/v1772806087/kakovostne-inox-ograje-izdelava_g3cuql.webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MM INOKS | Vrhunske Inox Ograje" />
      <meta name="twitter:description" content="Vrhunske inox in prašno barvane ograje, francoski balkoni in varjenje. Matej Markovič s.p." />
      <meta name="twitter:image" content="https://res.cloudinary.com/ddl75cyhk/image/upload/v1772806087/kakovostne-inox-ograje-izdelava_g3cuql.webp" />

      {/* 4. SCHEMA.ORG MARKUP */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
