export const pages = {
  it: [
    {
      url: "/",
      name: "home",
      disabled: false,
      subpages: [],
    },
    {
      url: "/",
      name: "il museo",
      disabled: true,
      subpages: [
        { url: "/storia", name: "storia" },
        { url: "/mission", name: "mission" },
        // { url: "/carta-dei-servizi", name: "carta dei servizi" },
        { url: "/pubblicazioni", name: "pubblicazioni" },
        { url: "/attività-scientifiche", name: "attività scientifiche" },
      ],
    },
    {
      url: "/",
      name: "la collezione",
      disabled: true,
      subpages: [
        { url: "/percorso-espositivo", name: "percorso espositivo" },
        { url: "/opere", name: "opere" },
      ],
    },
    {
      url: "/eventi",
      name: "eventi",
      disabled: false,
      subpages: [],
    },
    {
      url: "/monumenti",
      name: "monumenti",
      disabled: false,
      subpages: [],
    },
    {
      url: "/",
      name: "servizi",
      disabled: true,
      subpages: [
        { url: "/visite-guidate", name: "visite guidate" },
        { url: "/attività-didattiche", name: "attività didattiche" },
        // { url: "/bookshop", name: "bookshop" },
      ],
    },
    {
      url: "/info",
      name: "info e biglietti",
      disabled: false,
      subpages: [],
    },
    {
      url: "/contatti",
      name: "contatti",
      disabled: false,
      subpages: [],
    },
  ],
  en: [
    {
      url: "/en/",
      name: "home",
      disabled: false,
      subpages: [],
    },
    {
      url: "/en/",
      name: "museum",
      disabled: true,
      subpages: [
        { url: "/en/history", name: "history" },
        { url: "/en/mission", name: "mission" },
        // { url: "/en/services-card", name: "services card" },
        { url: "/en/publications", name: "publications" },
        {
          url: "/en/scientific-activities",
          name: "scientific activities",
        },
      ],
    },
    {
      url: "/en/",
      name: "collection",
      disabled: true,
      subpages: [
        { url: "/en/exhibition-itinerary", name: "exhibition itinerary" },
        { url: "/en/artworks", name: "artworks" },
      ],
    },
    {
      url: "/en/events",
      name: "events",
      disabled: false,
      subpages: [],
    },
    {
      url: "/en/monuments",
      name: "monuments",
      disabled: false,
      subpages: [],
    },
    {
      url: "/en/",
      name: "services",
      disabled: true,
      subpages: [
        { url: "/en/guided-tours", name: "guided tours" },
        {
          url: "/en/educational-activities",
          name: "educational activities",
        },
        // {
        //   url: "/en/bookshop",
        //   name: "bookshop",
        // },
      ],
    },
    {
      url: "/en/info",
      name: "info and tickets",
      disabled: false,
      subpages: [],
    },
    {
      url: "/en/contacts",
      name: "contacts",
      disabled: false,
      subpages: [],
    },
  ],
};

export const footer_pages = {
  it: {
    museo_links: [
      { name: "Storia", url: "/storia" },
      { name: "Mission", url: "/mission" },
      { name: "Carta dei Servizi", url: "/carta-dei-servizi" },
    ],
    info_links: [
      { name: "Orari e tariffe", url: "/info" },
      { name: "Visite Guidate", url: "/visite-guidate" },
      { name: "Staff", url: "/staff" },
      { name: "Contatti", url: "/contatti" },
    ],
    collezioni_links: [
      { name: "Percorso Espositivo", url: "/percorso-espositivo" },
      { name: "Opere", url: "/opere" },
      { name: "Monumenti", url: "/monumenti" },
      { name: "Eventi", url: "/eventi" },
    ],
    site_links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Cookies Policy", url: "/cookies-policy" },
      { name: "Credits", url: "/credits" },
    ],
  },
  en: {
    museo_links: [
      { name: "History", url: "/en/history" },
      { name: "Mission", url: "/en/mission" },
      { name: "Service Card", url: "/en/service-card" },
    ],
    info_links: [
      { name: "Opening and Tickets", url: "/en/info" },
      { name: "Guided Tours", url: "/en/guided-tours" },
      { name: "Staff", url: "/en/staff" },
      { name: "Contacts", url: "/en/contacts" },
    ],
    collezioni_links: [
      { name: "Artworks", url: "/en/artworks" },
      { name: "Monuments", url: "/en/monuments" },
      { name: "Events", url: "/en/events" },
    ],
    site_links: [
      { name: "Privacy Policy", url: "/en/privacy-policy" },
      { name: "Cookies Policy", url: "/en/cookies-policy" },
      { name: "Credits", url: "/en/credits" },
    ],
  },
};
