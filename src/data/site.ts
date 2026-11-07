// Central site settings. Replace placeholders (phone, email, address) before launch.
export const site = {
  name: 'Sheer',
  legal: 'Sheer Façade Care',
  url: 'https://sheerfacade.example',
  description:
    'IRATA-certified rope access and gondola façade cleaning for towers, hotels and villas in Dubai, Abu Dhabi and Sharjah.',
  phoneDisplay: '+971 50 000 0000',
  phoneIntl: '971500000000',
  email: 'hello@sheerfacade.example',
  address: 'Business Bay, Dubai, United Arab Emirates',
  mapQuery: 'Business Bay, Dubai',
  hours: [
    { day: 'Sunday – Thursday', time: '07:00 – 18:00' },
    { day: 'Friday', time: '07:00 – 12:00' },
    { day: 'Saturday', time: 'Emergency calls only' },
  ],
  areas: [
    'Business Bay',
    'Downtown Dubai',
    'Dubai Marina & JLT',
    'Palm Jumeirah',
    'DIFC',
    'Abu Dhabi – Al Reem Island',
    'Sharjah – Al Majaz',
  ],
};

export function whatsappLink(message = 'Hello, I would like a façade cleaning quote.') {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: 'Case studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
