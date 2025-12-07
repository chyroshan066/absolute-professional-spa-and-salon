import { Description, Email, Name } from "@/types";

interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  ratingCount: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface EntryPoint {
  "@type": "EntryPoint";
  urlTemplate: string;
}

interface Appointment extends Name {
  "@type": "Appointment";
}

interface ReserveAction {
  "@type": "ReserveAction";
  target: EntryPoint;
  result: Appointment;
}

interface AnatomicalStructure extends Name {
  "@type": "AnatomicalStructure";
}

interface TherapeuticProcedure extends Name, Description {
  "@type": "TherapeuticProcedure";
  procedureType: string;
  bodyLocation: AnatomicalStructure;
}

interface Service extends Name, Description {
  "@type": "Service";
  serviceType: string;
  provider: {
    "@type": "Organization";
    name: string;
  };
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  item: Service;
}

interface SpaBusinessStructuredData extends Name, Description, Email {
  "@context": "https://schema.org";
  "@type": "BeautySalon";
  url: string | undefined;
  address: PostalAddress[];
  telephone: string[];
  openingHours: string[];
  priceRange: string;
  aggregateRating: AggregateRating;
  geo: GeoCoordinates[];
  sameAs: string[];
  potentialAction: ReserveAction;
  hasOfferCatalog?: {
    "@type": "OfferCatalog";
    name: string;
    itemListElement: {
      "@type": "Offer";
      itemOffered: Service;
    }[];
  };
}

interface SpaServicesStructuredData extends Name, Description {
  "@context": "https://schema.org";
  "@type": "HealthAndBeautyBusiness";
  availableService: TherapeuticProcedure[];
}

interface TreatmentsStructuredData extends Name, Description {
  "@context": "https://schema.org";
  "@type": "ItemList";
  itemListElement: ListItem[];
}

export const spaBusinessStructuredData: SpaBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Absolute Professional Spa & Salon",
  "description": "Premium spa and massage therapy services in Jhapa, Nepal and India. Offering Warrior Thai, Sports Massage, Hot Stone Therapy, Pain Potli, Swedish, Aromatherapy & D-Stress treatments. Expert therapists, traditional healing methods, and professional wellness care across three locations in Birtamode, Dhulabari, and Panitanki.",
  "url": `https://www.absoluteprofessionalspa.com.np`,
  
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Megha Complex",
      "addressLocality": "Birtamode",
      "addressRegion": "Jhapa",
      "addressCountry": "NP"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Dhulabari Chowk",
      "addressLocality": "Mechinagar",
      "addressRegion": "Jhapa",
      "addressCountry": "NP"
    }
  ],
  
  "telephone": ["+977-9701064228", "+977-9701064228"],
  "email": "absoluteprofessionalspaandsalo@gmail.com",
  
  "openingHours": [
    "Su-Sa 09:30-19:30",
    "Su-Sa 10:30-20:30",
  ],
  
  "priceRange": "$$",
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.0",
    "ratingCount": "8"
  },
  
  "geo": [
    {
      "@type": "GeoCoordinates",
      "latitude": "26.64473",
      "longitude": "87.99397"
    },
    {
      "@type": "GeoCoordinates",
      "latitude": "26.66046",
      "longitude": "88.10085"
    },
  ],
  
  "sameAs": [
    "https://www.facebook.com/p/The-Absolute-Professional-Spa-And-Salon-61553449262045/",
    "https://wa.me/9779701064228"
  ],
  
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `https://www.absoluteprofessionalspa.com.np/contact`
    },
    "result": {
      "@type": "Appointment",
      "name": "Spa Appointment Booking"
    }
  },

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Spa Treatment Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Warrior Thai Massage",
          "description": "Traditional Thai massage with deep stretching and acupressure",
          "serviceType": "Massage Therapy",
          "provider": {
            "@type": "Organization",
            "name": "Absolute Professional Spa & Salon"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hot Stone Therapy",
          "description": "Heated stone massage for deep muscle relaxation",
          "serviceType": "Massage Therapy",
          "provider": {
            "@type": "Organization",
            "name": "Absolute Professional Spa & Salon"
          }
        }
      }
    ]
  }
};

export const spaServicesStructuredData: SpaServicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Spa & Massage Therapy Services",
  "description": "Comprehensive therapeutic spa and massage treatments for relaxation, pain relief, and wellness",
  
  "availableService": [
    {
      "@type": "TherapeuticProcedure",
      "name": "Warrior Thai Massage",
      "description": "Dynamic Thai massage combining deep stretching, acupressure, and energy line work. Improves flexibility, relieves muscle tension, and restores energy flow throughout the body.",
      "procedureType": "Traditional Massage Therapy",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "TherapeuticProcedure",
      "name": "Sports Massage Therapy",
      "description": "Specialized deep tissue massage for athletes and active individuals. Targets muscle soreness, enhances recovery, improves performance, and prevents sports-related injuries.",
      "procedureType": "Therapeutic Sports Massage",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Muscular System"
      }
    },
    {
      "@type": "TherapeuticProcedure",
      "name": "Hot Stone Therapy",
      "description": "Smooth heated stones placed on key points to melt away tension. Improves circulation, eases muscle stiffness, and promotes profound relaxation and healing.",
      "procedureType": "Thermotherapy Massage",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "TherapeuticProcedure",
      "name": "Pain Potli Treatment",
      "description": "Traditional Indian therapy using heated herbal pouches to alleviate chronic pain and inflammation. Provides relief from arthritis, joint pain, and muscular stiffness.",
      "procedureType": "Herbal Therapy",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Joints and Muscles"
      }
    },
    {
      "@type": "TherapeuticProcedure",
      "name": "Swedish Massage Therapy",
      "description": "Classic massage using long, flowing strokes to promote relaxation and improve circulation. Ideal for stress reduction and overall wellbeing enhancement.",
      "procedureType": "Relaxation Massage",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "TherapeuticProcedure",
      "name": "Aromatherapy Massage",
      "description": "Therapeutic massage enhanced with essential oils tailored to individual needs. Combines healing aromatics with expert touch to relieve stress and promote holistic wellness.",
      "procedureType": "Aromatherapy",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "TherapeuticProcedure",
      "name": "D-Stress Therapy",
      "description": "Signature treatment combining gentle techniques to release mental and physical tension. Perfect for stress relief, promoting complete relaxation and restoration of inner calm.",
      "procedureType": "Stress Relief Therapy",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    }
  ]
};

export const spaTreatmentsStructuredData: TreatmentsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Spa Treatments & Massage Therapies",
  "description": "Premium therapeutic treatments organized by specialty",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Traditional Thai Massage",
        "description": "Authentic Thai healing techniques for flexibility and energy restoration",
        "serviceType": "Massage Therapy",
        "provider": {
          "@type": "Organization",
          "name": "Absolute Professional Spa & Salon"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Therapeutic Sports Massage",
        "description": "Performance-focused massage for athletes and active lifestyles",
        "serviceType": "Sports Therapy",
        "provider": {
          "@type": "Organization",
          "name": "Absolute Professional Spa & Salon"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Pain Relief Treatments",
        "description": "Specialized therapies for chronic pain and inflammation management",
        "serviceType": "Pain Management",
        "provider": {
          "@type": "Organization",
          "name": "Absolute Professional Spa & Salon"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Relaxation & Wellness",
        "description": "Calming treatments for stress relief and mental wellness",
        "serviceType": "Wellness Therapy",
        "provider": {
          "@type": "Organization",
          "name": "Absolute Professional Spa & Salon"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Hot Stone & Thermotherapy",
        "description": "Heat-based treatments for deep muscle relaxation",
        "serviceType": "Thermotherapy",
        "provider": {
          "@type": "Organization",
          "name": "Absolute Professional Spa & Salon"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Herbal & Aromatherapy",
        "description": "Natural healing treatments using herbs and essential oils",
        "serviceType": "Holistic Therapy",
        "provider": {
          "@type": "Organization",
          "name": "Absolute Professional Spa & Salon"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Service",
        "name": "Classic Swedish Massage",
        "description": "Traditional European massage for circulation and relaxation",
        "serviceType": "Classic Massage",
        "provider": {
          "@type": "Organization",
          "name": "Absolute Professional Spa & Salon"
        }
      }
    }
  ]
};