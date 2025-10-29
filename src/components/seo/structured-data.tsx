export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Crofton Family Practice",
    "medicalSpecialty": "Family Medicine",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1684 Village Green, Lower Level",
      "addressLocality": "Crofton",
      "addressRegion": "MD",
      "postalCode": "21114",
      "addressCountry": "US"
    },
    "telephone": "410-424-5348",
    "email": "info@croftoncare.com",
    "url": "https://croftoncare.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "07:45",
        "closes": "17:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "07:45",
        "closes": "16:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:45",
        "closes": "12:00"
      }
    ],
    "founder": {
      "@type": "Physician",
      "name": "Dr. Allison N. Williams",
      "honorificSuffix": "MD",
      "medicalSpecialty": "Family Medicine",
      "alumniOf": {
        "@type": "MedicalSchool",
        "name": "Howard University College of Medicine"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Crofton"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.0129",
      "longitude": "-76.6874"
    }
  };

  const physicianData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Allison N. Williams",
    "honorificSuffix": "MD",
    "medicalSpecialty": ["Family Medicine", "Primary Care", "Concierge Medicine"],
    "alumniOf": {
      "@type": "MedicalSchool",
      "name": "Howard University College of Medicine",
      "yearGraduated": "2000"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "MDVIP"
    },
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Crofton Family Practice"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Board Certification",
      "recognizedBy": {
        "@type": "Organization",
        "name": "American Board of Family Medicine"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianData) }}
      />
    </>
  );
}

