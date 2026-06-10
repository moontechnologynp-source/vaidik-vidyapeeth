import {
  Home,
  Info,
  GraduationCap,
  Building2,
  ClipboardList,
  Phone,
} from "lucide-react";

import type { PageKey, PageTab, SectionItem } from "./adminTypes";

export const pageTabs: PageTab[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: Info,
  },
  {
    id: "academics",
    label: "Academics",
    icon: GraduationCap,
  },
  {
    id: "facilities",
    label: "Facilities",
    icon: Building2,
  },
  {
    id: "admissions",
    label: "Admissions",
    icon: ClipboardList,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Phone,
  },
];

export const pageSections: Record<PageKey, SectionItem[]> = {
  home: [
    {
      id: "homeHero",
      label: "Hero Section",
      description: "Edit the homepage hero banner, heading, buttons, and visual card.",
      fields: [
        "Kicker",
        "Title",
        "Description",
        "Primary Button Text",
        "Primary Button Link",
        "Secondary Button Text",
        "Secondary Button Link",
        "Hero Background / Image Class",
        "Mini Card Value",
        "Mini Card Label",
        "Visual Eyebrow",
        "Visual Title",
        "Visual Description",
      ],
    },
    {
      id: "homeHeroHighlights",
      label: "Hero Highlights",
      description: "Manage the highlight rows inside the homepage hero panel.",
      fields: ["Highlight Text"],
    },
    {
      id: "homeTrustTags",
      label: "Hero Trust Tags",
      description: "Manage small trust tags such as Discipline, Confidence, Creativity, and Care.",
      fields: ["Tag Name"],
    },
    {
      id: "homeQuickFacts",
      label: "Quick Facts",
      description: "Manage the statistic cards below the hero section.",
      fields: ["Value", "Label"],
    },
    {
      id: "homeIntro",
      label: "Intro / About Preview",
      description: "Manage the homepage about preview section.",
      fields: ["Eyebrow", "Title", "Description", "Card Description"],
    },
    {
      id: "homeFeatureCards",
      label: "Intro Feature Cards",
      description: "Manage the three feature cards below the intro section.",
      fields: ["Label", "Title", "Description", "Strong Card true/false"],
    },
    {
      id: "homeCampusPhotos",
      label: "Campus Photo Cards",
      description: "Manage the three campus image cards.",
      fields: ["Title", "Image URL / CSS Class", "Order"],
    },
    {
      id: "homeStrengths",
      label: "Why Choose Us",
      description: "Manage homepage strength cards.",
      fields: ["Label", "Title", "Description"],
    },
    {
      id: "homePrograms",
      label: "Academic Programs Preview",
      description: "Manage program tabs shown on the homepage.",
      fields: ["Stage", "Title", "Description"],
    },
    {
      id: "homeFacilitiesPreview",
      label: "Facilities Preview",
      description: "Manage small facility cards shown on homepage.",
      fields: ["Title", "Description"],
    },
    {
      id: "homeUpdates",
      label: "Latest Updates",
      description: "Manage latest update cards shown in the dark panel.",
      fields: ["Label / Date", "Title", "Description"],
    },
    {
      id: "homeFinalCta",
      label: "Final CTA",
      description: "Manage the final homepage call-to-action.",
      fields: [
        "Eyebrow",
        "Title",
        "Description",
        "Primary Button Text",
        "Primary Button Link",
        "Secondary Button Text",
        "Secondary Button Link",
      ],
    },
  ],

  about: [
    {
      id: "aboutHero",
      label: "Hero Section",
      description: "Edit the main About page heading, intro text, and buttons.",
      fields: [
        "Kicker",
        "Title",
        "Description",
        "Primary Button Text",
        "Primary Button Link",
        "Secondary Button Text",
        "Secondary Button Link",
      ],
    },
    {
      id: "aboutHeroCarousel",
      label: "Hero Carousel",
      description: "Manage the image slider shown on the right side of the About hero.",
      fields: ["Image URL", "Label", "Title", "Description"],
    },
    {
      id: "aboutQuickFacts",
      label: "Quick Facts",
      description: "Manage the small fact cards shown below the hero text.",
      fields: ["Value", "Label"],
    },
    {
      id: "aboutColorStrip",
      label: "Color Strip Cards",
      description: "Manage the four small feature cards below the hero.",
      fields: ["Icon Name", "Title", "Color Class"],
    },
    {
      id: "aboutIdentityTabs",
      label: "Identity Tabs",
      description: "Manage Mission, Vision, and Promise tab content.",
      fields: [
        "Key",
        "Label",
        "Icon Name",
        "Gradient Class",
        "Title",
        "Description",
      ],
    },
    {
      id: "aboutFeeCalculator",
      label: "Fee Calculator",
      description: "Manage demo fee calculator values.",
      fields: [
        "Pre-Primary Base Fee",
        "Primary Base Fee",
        "Secondary Base Fee",
        "Transport Fee",
        "Hostel Fee",
        "Note Text",
      ],
    },
    {
      id: "aboutFitChecker",
      label: "School Fit Checker",
      description: "Manage fit checker questions and result messages.",
      fields: ["Question", "Result Message"],
    },
    {
      id: "aboutCoreValues",
      label: "Core Values",
      description: "Manage the three core value cards.",
      fields: ["Title", "Description", "Icon Name", "Color Class"],
    },
    {
      id: "aboutAlbum",
      label: "School Album",
      description: "Manage filterable album images.",
      fields: ["Image URL", "Title", "Category", "Alt Text"],
    },
    {
      id: "aboutFaq",
      label: "FAQ Section",
      description: "Manage About page accordion questions and answers.",
      fields: ["Question", "Answer"],
    },
    {
      id: "aboutCta",
      label: "CTA Section",
      description: "Manage the final campus visit call-to-action.",
      fields: ["Eyebrow", "Title", "Description", "Button Text", "Button Link"],
    },
  ],

  academics: [
    {
      id: "academicsHero",
      label: "Academics Hero",
      description: "Manage the top hero section of the Academics page.",
      fields: ["Eyebrow", "Title", "Description", "Hero Image"],
    },
    {
      id: "academicsPrograms",
      label: "Programs",
      description: "Manage academic program cards.",
      fields: ["Stage", "Title", "Description"],
    },
    {
      id: "academicsLearningFlow",
      label: "Learning Flow",
      description: "Manage the step-by-step learning process.",
      fields: ["Step Number", "Title", "Description"],
    },
    {
      id: "academicsDetails",
      label: "Academic Details",
      description: "Manage subject or academic detail cards.",
      fields: ["Title", "Description", "Icon Name"],
    },
    {
      id: "academicsActivities",
      label: "Activities",
      description: "Manage co-curricular activity cards.",
      fields: ["Title", "Description", "Image URL"],
    },
    {
      id: "academicsCta",
      label: "Academics CTA",
      description: "Manage the bottom CTA of the Academics page.",
      fields: ["Title", "Description", "Button Text", "Button Link"],
    },
  ],

  facilities: [
    {
      id: "facilitiesHero",
      label: "Facilities Hero",
      description: "Manage the top hero section of the Facilities page.",
      fields: ["Eyebrow", "Title", "Description", "Hero Image"],
    },
    {
      id: "facilitiesCards",
      label: "Facility Cards",
      description: "Manage the main facility cards.",
      fields: ["Title", "Description", "Image URL"],
    },
    {
      id: "facilitiesGallery",
      label: "Campus Gallery",
      description: "Manage gallery images for facilities page.",
      fields: ["Image URL", "Alt Text", "Caption"],
    },
    {
      id: "facilitiesSafety",
      label: "Safety & Environment",
      description: "Manage safety, discipline, and environment content.",
      fields: ["Title", "Description"],
    },
    {
      id: "facilitiesCta",
      label: "Facilities CTA",
      description: "Manage the bottom CTA of Facilities page.",
      fields: ["Title", "Description", "Button Text", "Button Link"],
    },
  ],

  admissions: [
    {
      id: "admissionsHero",
      label: "Admissions Hero",
      description: "Manage the top hero section of Admissions page.",
      fields: ["Eyebrow", "Title", "Description", "Hero Image"],
    },
    {
      id: "admissionSteps",
      label: "Admission Steps",
      description: "Manage the step-by-step admission process.",
      fields: ["Step Number", "Title", "Description"],
    },
    {
      id: "admissionDocuments",
      label: "Required Documents",
      description: "Manage documents needed for admission.",
      fields: ["Document Name", "Description"],
    },
    {
      id: "admissionFaq",
      label: "Admission FAQ",
      description: "Manage frequently asked admission questions.",
      fields: ["Question", "Answer"],
    },
    {
      id: "admissionInquiry",
      label: "Fee / Inquiry Section",
      description: "Manage fee or inquiry section content.",
      fields: ["Title", "Description", "Button Text", "Button Link"],
    },
    {
      id: "admissionsCta",
      label: "Admissions CTA",
      description: "Manage the bottom admission CTA section.",
      fields: ["Title", "Description", "Button Text", "Button Link"],
    },
  ],

  contact: [
    {
      id: "contactHero",
      label: "Contact Hero",
      description: "Manage the top hero section of Contact page.",
      fields: ["Eyebrow", "Title", "Description"],
    },
    {
      id: "contactDetails",
      label: "Contact Details",
      description: "Manage phone, email, address, and opening hours.",
      fields: ["Phone", "Email", "Address", "Opening Hours"],
    },
    {
      id: "contactMap",
      label: "Map Section",
      description: "Manage Google Map embed and location links.",
      fields: ["Map Embed URL", "Google Maps Link", "Location Text"],
    },
    {
      id: "contactSocialLinks",
      label: "Social Links",
      description: "Manage Facebook, Instagram, YouTube, and other links.",
      fields: ["Platform Name", "URL"],
    },
    {
      id: "contactCta",
      label: "Contact CTA",
      description: "Manage final Contact page call-to-action.",
      fields: ["Title", "Description", "Button Text", "Button Link"],
    },
  ],
};