import { media } from './media';

export interface Service {
  slug: string;
  title: string;
  short: string;
  intro: string;
  bestFor: string;
  height: string;
  hero: (typeof media)[keyof typeof media];
  scope: string[];
  steps: { title: string; text: string }[];
  plans: { name: string; frequency: string; for: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: 'rope-access',
    title: 'Rope access cleaning',
    short: 'Technicians descend on two ropes. No platform, no crane.',
    intro:
      'Two IRATA-certified technicians work on a pair of ropes: a working line and a backup line. We use it where a gondola cannot reach: curved glass, podiums, setbacks, and towers without a permanent BMU.',
    bestFor: 'Towers above 20 m without a working BMU, curved glass, tight sites.',
    height: '20 m and above',
    hero: media.ropeAccess,
    scope: [
      'Glass, aluminium cladding, ACP panels and signage',
      'Removal of dust, sand, salt film and bird droppings',
      'Hard-water and condensation marks below AC units',
      'Spot checks of sealant and fixings, reported with photos',
      'Pure-water rinse to reduce streaks',
    ],
    steps: [
      { title: 'Site survey', text: 'We check roof anchors, parapets, drop zones and the façade material.' },
      { title: 'Method statement', text: 'Risk assessment and rescue plan are written and shared before any work starts.' },
      { title: 'Rig and inspect', text: 'Anchors, ropes and harnesses are checked and logged by the team lead.' },
      { title: 'Clean top to bottom', text: 'Dust is loosened first, then washed down with pure water and soft tools.' },
      { title: 'Sign-off', text: 'You walk the drop zones with us. We close the permit and send the report.' },
    ],
    plans: [
      { name: 'Single visit', frequency: 'One-off', for: 'Handover, sale, inspection' },
      { name: 'Quarterly', frequency: 'Every 3 months', for: 'Residential towers' },
      { name: 'Monthly', frequency: 'Every 1 – 2 months', for: 'Offices, hotels, malls' },
    ],
    faqs: [
      { q: 'Is rope access safe?', a: 'Every technician holds IRATA certification. Each job has a rescue plan, two independent ropes per person, and equipment inspected before use.' },
      { q: 'Do you need a BMU on the roof?', a: 'No. We need certified anchor points or a structure we can safely rig to. We confirm this in the survey.' },
      { q: 'Will it disturb tenants?', a: 'Technicians pass outside the window quickly. We agree a schedule with building management and avoid peak hours on request.' },
      { q: 'What stops work?', a: 'High or gusty wind, lightning and poor visibility. We reschedule at no charge.' },
    ],
  },
  {
    slug: 'bmu-gondola',
    title: 'BMU & gondola cleaning',
    short: 'Operated from the roof cradle your building already has.',
    intro:
      'Many towers have a permanent Building Maintenance Unit: a roof-mounted cradle that travels along the façade. We bring trained operators, water-fed brushes and a cleaning plan sized to your cradle schedule.',
    bestFor: 'Mega-towers with a working BMU, repeating façade patterns.',
    height: 'Any height with a working BMU',
    hero: media.gondola,
    scope: [
      'Full façade cleaning from the installed cradle',
      'Pre-use check of cradle, wire ropes and limit switches',
      'Mullions, fins and glass in one pass',
      'Coordination with building engineering',
      'Cleaning log per elevation',
    ],
    steps: [
      { title: 'Cradle check', text: 'We ask for the BMU service record and run a pre-use inspection.' },
      { title: 'Plan by elevation', text: 'North, east, south, west: each gets a schedule and a drop zone.' },
      { title: 'Set up and brief', text: 'Operators and the building team agree signals and weather limits.' },
      { title: 'Wash and rinse', text: 'Water-fed brushes loosen the film. Squeegees and a final rinse finish it.' },
      { title: 'Log and handover', text: 'We mark each completed bay and hand over the log.' },
    ],
    plans: [
      { name: 'Per cycle', frequency: 'Full façade', for: 'Towers with a stable schedule' },
      { name: 'Annual contract', frequency: '4 – 12 cycles a year', for: 'Property managers' },
      { name: 'Operator support', frequency: 'Day rate', for: 'Teams with their own crew' },
    ],
    faqs: [
      { q: 'Our BMU is old. Can you still use it?', a: 'Only if it has a valid inspection and passes our pre-use check. If not, we propose rope access instead.' },
      { q: 'How long does a tower take?', a: 'It depends on height, façade area and the number of cradles. We give a schedule after the survey.' },
      { q: 'Can you clean one elevation only?', a: 'Yes. Sun-facing and street-facing sides get dirty faster, and many clients start there.' },
    ],
  },
  {
    slug: 'post-construction',
    title: 'Post-construction cleaning',
    short: 'Cement, silicone and paint removed before handover.',
    intro:
      'New glass collects cement dust, silicone smears, protective film glue and paint. We remove it without scratching coatings, then clean to a handover standard your consultant can sign.',
    bestFor: 'Developers, contractors and consultants at handover.',
    height: 'All heights',
    hero: media.construction,
    scope: [
      'Cement and plaster residue on glass and aluminium',
      'Silicone, tape and film adhesive removal',
      'Paint overspray on frames and cladding',
      'Scratch-safe tools on coated glass',
      'Punch-list re-clean after snagging',
    ],
    steps: [
      { title: 'Test patch', text: 'We test cleaning agents on a hidden area and photograph the result.' },
      { title: 'Protect', text: 'Adjacent finishes, seals and landscaping are masked or covered.' },
      { title: 'Remove residue', text: 'Residue is softened and lifted by hand. No metal scrapers on coated glass.' },
      { title: 'Final clean', text: 'Glass and frames get a pure-water finish.' },
      { title: 'Snag re-clean', text: 'We return for items on the consultant’s punch list.' },
    ],
    plans: [
      { name: 'Phase clean', frequency: 'Per floor or block', for: 'Phased handovers' },
      { name: 'Final handover', frequency: 'One visit', for: 'Whole building' },
      { name: 'Snag return', frequency: 'On call', for: 'Punch-list items' },
    ],
    faqs: [
      { q: 'Will you scratch the glass?', a: 'We use plastic blades and soft pads on coated glass, and test a small area first.' },
      { q: 'Can you work while other trades are on site?', a: 'Yes, with a shared plan and a defined drop zone. We prefer to clean after external works finish.' },
      { q: 'Do you issue a report?', a: 'Yes. Photos before and after, by elevation, plus a list of anything we could not remove.' },
    ],
  },
  {
    slug: 'villa-low-rise',
    title: 'Villa & low-rise glass',
    short: 'Ground-level and pole work for villas, shops and mid-rise.',
    intro:
      'For buildings under about 20 m we use water-fed carbon poles and ladders. No ropes are needed. It is faster and quieter, and the glass dries without marks.',
    bestFor: 'Villas, retail frontages, clinics, schools, mid-rise blocks.',
    height: 'Up to about 20 m',
    hero: media.villa,
    scope: [
      'Windows, glass balustrades, skylights and sliding doors',
      'Frames, sills and external walls on request',
      'Hard-water marks from irrigation and condensation',
      'Solar panels and pergolas on request',
      'Pure-water finish with no chemical residue',
    ],
    steps: [
      { title: 'Walk-around', text: 'We count panes and check access, gates and pets.' },
      { title: 'Fixed quote', text: 'You get a price per visit before we start.' },
      { title: 'Pole wash', text: 'Pure water and soft brushes loosen the dust. No ladders where a pole reaches.' },
      { title: 'Detail', text: 'Frames and sills are wiped by hand.' },
      { title: 'Check', text: 'We walk through with you and fix anything you point out.' },
    ],
    plans: [
      { name: 'Single clean', frequency: 'One visit', for: 'Move-in, events' },
      { name: 'Seasonal', frequency: 'Every 3 months', for: 'Villas and compounds' },
      { name: 'Retail routine', frequency: 'Weekly or monthly', for: 'Shopfronts' },
    ],
    faqs: [
      { q: 'Do I need to be home?', a: 'No, if we have outdoor access. We message you before and after the visit.' },
      { q: 'Do you clean inside too?', a: 'Our focus is exterior. We can clean interior glass during the same visit.' },
      { q: 'Is the water treated?', a: 'We use purified water through a filter, which leaves less mineral spotting than tap water.' },
    ],
  },
];

export const generalFaqs = [
  {
    q: 'How often should a Dubai building be cleaned?',
    a: 'Offices, hotels and malls are often cleaned every one to two months. Residential towers are commonly cleaned every three months. Sites near construction or the coast may need more.',
  },
  {
    q: 'When is the best time of year?',
    a: 'December to February. Wind is lower and steadier, and the temperature is easier on crews and on glass.',
  },
  {
    q: 'What paperwork do you provide?',
    a: 'A method statement and risk assessment for each project, insurance details, and technician certificates. Dubai Municipality and Civil Defence may inspect active worksites.',
  },
  {
    q: 'How is the price set?',
    a: 'By façade area, height, access method and frequency. Market rates in Dubai commonly fall between AED 5 and AED 15 per square metre. You get a fixed quote after the survey.',
  },
];
