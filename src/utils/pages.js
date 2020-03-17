export const pages = {
  it: [
    {
      url: "/museo",
      name: "il museo",
      subpages: [
        { url: "/storia", name: "storia" },
        { url: "/mission", name: "mission" },
        { url: "/carta-dei-servizi", name: "carta dei servizi" },
        { url: "/pubblicazioni", name: "pubblicazioni" },
      ],
    },
    {
      url: "/collezione",
      name: "collezione",
      subpages: [{ url: "/opere", name: "opere" }],
    },
    {
      url: "/eventi",
      name: "eventi",
      subpages: [],
    },
    {
      url: "/monumenti",
      name: "monumenti",
      subpages: [
        { url: "/monumenti/forte-dei-borgia", name: "forte dei borgia" },
        {
          url: "/monumenti/la-catacomba-di-santa-savinilla",
          name: "catacomba",
        },
        {
          url: "/monumenti/il-duomo",
          name: "duomo",
        },
      ],
    },
    {
      url: "/servizi",
      name: "servizi",
      subpages: [
        { url: "/visite-guidate", name: "visite guidate" },
        { url: "/attività-didattiche", name: "attività didattiche" },
      ],
    },
    {
      url: "/info",
      name: "info e biglietti",
      subpages: [],
    },
    { url: "/contatti", name: "contatti", subpages: [] },
  ],
  en: [
    {
      url: "/en/museum",
      name: "museum",
      subpages: [
        { url: "/en/history", name: "history" },
        { url: "/en/mission", name: "mission" },
        { url: "/en/services-card", name: "services card" },
        { url: "/en/publications", name: "publications" },
      ],
    },
    {
      url: "/en/collection",
      name: "collection",
      subpages: [{ url: "/en/works", name: "works" }],
    },
    {
      url: "/en/events",
      name: "events",
      subpages: [],
    },
    {
      url: "/en/monuments",
      name: "monuments",
      subpages: [
        {
          url: "/en/monuments/borgia-castle",
          name: "borgia's castle",
        },
        {
          url: "/en/monuments/savinilla-catacomb",
          name: "catacomb",
        },
        {
          url: "/en/monuments/cathedral",
          name: "cathedral",
        },
      ],
    },
    {
      url: "/en/services",
      name: "services",
      subpages: [
        { url: "/en/guided-tours", name: "guided tours" },
        {
          url: "/en/educational-activities",
          name: "educational activities",
        },
      ],
    },
    {
      url: "/en/info",
      name: "info and tickets",
      subpages: [],
    },
    { url: "/en/contacts", name: "contacts", subpages: [] },
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
      { name: "Contatti", url: "/contatti" },
    ],
    collezioni_links: [
      { name: "Opere", url: "/opere" },
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
      { name: "Contacts", url: "/en/contacts" },
    ],
    collezioni_links: [
      { name: "Works", url: "/en/works" },
      { name: "Events", url: "/en/events" },
    ],
    site_links: [
      { name: "Privacy Policy", url: "/en/privacy-policy" },
      { name: "Cookies Policy", url: "/en/cookies-policy" },
      { name: "Credits", url: "/en/credits" },
    ],
  },
};
