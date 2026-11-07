// SAMPLE CONTENT. Client names, case studies and testimonials below are placeholders
// for a demo brand. Replace with real, permissioned content before launch.

export const clients = [
  'Marsa Tower',
  'Al Noor Hospitality',
  'Creek Office Park',
  'Falcon Residences',
  'Harbour Retail Group',
  'Dune Developments',
  'Sahel Properties',
  'Pearl Medical',
  'Wadi Logistics',
  'Corniche Hotels',
];

export const steps = [
  { n: '01', title: 'Survey', text: 'We visit, measure and photograph the façade.' },
  { n: '02', title: 'Plan', text: 'You receive a fixed quote, method statement and schedule.' },
  { n: '03', title: 'Clean', text: 'Certified crews work top to bottom with a rescue plan in place.' },
  { n: '04', title: 'Report', text: 'Photos by elevation and a log of anything we found.' },
];

export const months = [
  { m: 'Jan', t: 'best' },
  { m: 'Feb', t: 'best' },
  { m: 'Mar', t: 'ok' },
  { m: 'Apr', t: 'ok' },
  { m: 'May', t: 'hot' },
  { m: 'Jun', t: 'hot' },
  { m: 'Jul', t: 'hot' },
  { m: 'Aug', t: 'hot' },
  { m: 'Sep', t: 'hot' },
  { m: 'Oct', t: 'ok' },
  { m: 'Nov', t: 'ok' },
  { m: 'Dec', t: 'best' },
] as const;

export const cases = [
  {
    slug: 'marsa-tower',
    name: 'Marsa Tower',
    place: 'Dubai Marina',
    type: 'Residential tower',
    method: 'Rope access',
    facts: [
      { k: 'Height', v: '42 floors' },
      { k: 'Crew', v: '6 technicians' },
      { k: 'Duration', v: '9 working days' },
    ],
    brief:
      'Salt film and AC condensation marks on the west elevation. The BMU was out of service.',
    work: 'We rigged from the roof anchors and cleaned elevation by elevation. Hard-water marks were treated first, then the whole façade was washed with pure water.',
    result: 'West elevation marks removed. Management now books a quarterly cycle.',
    img: 'glassTower',
  },
  {
    slug: 'creek-office-park',
    name: 'Creek Office Park',
    place: 'Dubai Creek',
    type: 'Office campus',
    method: 'BMU & gondola',
    facts: [
      { k: 'Height', v: '28 floors' },
      { k: 'Crew', v: '4 operators' },
      { k: 'Duration', v: '5 working days' },
    ],
    brief: 'Monthly cleaning for a campus with a working BMU and strict tenant hours.',
    work: 'Operators checked the cradle each morning and worked to a posted schedule. Each bay was logged as completed.',
    result: 'Tenant complaints about views dropped to none in the following quarter.',
    img: 'gondola',
  },
  {
    slug: 'dune-residences',
    name: 'Dune Residences',
    place: 'Dubai Hills',
    type: 'New development',
    method: 'Post-construction',
    facts: [
      { k: 'Height', v: '12 floors' },
      { k: 'Crew', v: '10 cleaners' },
      { k: 'Duration', v: '3 weeks' },
    ],
    brief: 'Cement splash, silicone smears and film adhesive on 3,000 panes before handover.',
    work: 'Test patch first, then hand removal with plastic blades. A snag re-clean followed the consultant’s inspection.',
    result: 'Handover accepted without a glass-related snag.',
    img: 'construction',
  },
];

export const testimonials = [
  {
    quote: 'They told us what they would do on each elevation and sent photos when it was done. That was all we wanted.',
    role: 'Facilities manager',
    org: 'Marsa Tower',
  },
  {
    quote: 'The crew worked around our tenants and the glass was clear by the time offices opened.',
    role: 'Property manager',
    org: 'Creek Office Park',
  },
  {
    quote: 'The test patch on the coated glass settled the discussion with our consultant.',
    role: 'Project engineer',
    org: 'Dune Residences',
  },
];

export const values = [
  { title: 'Certified work', text: 'Rope access technicians hold IRATA certification. Certificates are shared before work starts.' },
  { title: 'Paperwork first', text: 'Every project has a method statement, risk assessment and rescue plan.' },
  { title: 'Plain quotes', text: 'Price per square metre, stated after the survey. No extras added later.' },
];

export const team = [
  { role: 'Operations lead', note: 'IRATA Level 3 supervisor', img: 0 },
  { role: 'Safety officer', note: 'Writes and checks every method statement', img: 1 },
  { role: 'Account manager', note: 'Your contact for schedules and reports', img: 2 },
];
