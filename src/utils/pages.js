export const pages = {
  it: [
    {
      url: "/museo",
      name: "il museo",
      subpages: [
        { url: "/sede", name: "la sede" },
        { url: "/storia", name: "storia" },
        { url: "/organizzazione", name: "organizzazione" },
        { url: "/eventi", name: "eventi" },
      ],
    },
    {
      url: "/collezioni",
      name: "collezioni",
      subpages: [
        { url: "/opere", name: "opere" },
        { url: "/percorsi-di-visita", name: "percorsi di visita" },
      ],
    },
    {
      url: "/monumenti",
      name: "monumenti",
      subpages: [
        { url: "/monumenti/forte-dei-borgia", name: "forte dei borgia" },
        {
          url: "/monumenti/catacombe-di-santa-savinilla",
          name: "catacombe",
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
      subpages: [
        { url: "/orari-e-tariffe", name: "orari e tariffe" },
        { url: "/come-arrivare", name: "come arrivare" },
      ],
    },
    { url: "/contatti", name: "contatti", subpages: [] },
  ],
  en: [
    {
      url: "/en/museum",
      name: "museum",
      subpages: [
        { url: "/en/location", name: "location" },
        { url: "/en/history", name: "history" },
        { url: "/en/organization", name: "organization" },
        { url: "/en/events", name: "events" },
      ],
    },
    {
      url: "/en/collections",
      name: "collections",
      subpages: [
        { url: "/en/works", name: "works" },
        { url: "/en/tours", name: "tours" },
      ],
    },
    {
      url: "/en/monuments",
      name: "monuments",
      subpages: [
        {
          url: "/en/monuments/forte-dei-borgia",
          name: "forte dei borgia",
        },
        {
          url: "/en/monuments/catacombe-di-santa-savinilla",
          name: "catacombe",
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
      subpages: [
        { url: "/en/opening-and-tickets", name: "opening and tickets" },
        { url: "/en/directions", name: "directions" },
      ],
    },
    { url: "/en/contacts", name: "contacts", subpages: [] },
  ],
};

export const footer_pages = {
  it: {
    museo_links: [
      { name: "Sede", url: "/sede" },
      { name: "Storia", url: "/storia" },
      { name: "Organizzazione", url: "/organizzazione" },
    ],
    info_links: [
      { name: "Orari e tariffe", url: "/orari-e-tariffe" },
      { name: "Come arrivare", url: "/come-arrivare" },
      { name: "Indicazioni", url: "/indicazioni" },
    ],
    collezioni_links: [
      { name: "Opere", url: "/opere" },
      { name: "Percorsi di visita", url: "/percorsi-di-visita" },
      { name: "Eventi", url: "/eventi" },
    ],
    site_links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Cookies Policy", url: "/cookies-policy" },
      { name: "Accessibilità del sito", url: "/accessibilità" },
      { name: "Credits", url: "/credits" },
    ],
  },
  en: {
    museo_links: [
      { name: "Location", url: "/en/location" },
      { name: "History", url: "/en/history" },
      { name: "Organization", url: "/en/organization" },
    ],
    info_links: [
      { name: "Opening and Tickets", url: "/en/opening-and-tickets" },
      { name: "How to arrive", url: "/en/how-to-arrive" },
      { name: "Directions", url: "/en/directions" },
    ],
    collezioni_links: [
      { name: "Works", url: "/en/works" },
      { name: "Tours", url: "/en/tours" },
      { name: "Events", url: "/en/events" },
    ],
    site_links: [
      { name: "Privacy Policy", url: "/en/privacy-policy" },
      { name: "Cookies Policy", url: "/en/cookies-policy" },
      { name: "Accessibility", url: "/en/accessibility" },
      { name: "Credits", url: "/en/credits" },
    ],
  },
};
