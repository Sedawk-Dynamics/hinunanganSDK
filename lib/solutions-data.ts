export type Solution = {
  slug: string
  title: string
  summary: string
  image: string
  points: string[]
}

export const solutions: Solution[] = [
  {
    slug: 'connectivity-telecommunications',
    title: 'Connectivity & Telecommunications',
    summary:
      'Resilient fibre, wireless and network infrastructure engineered for connected, operational and critical environments.',
    image: '/images/domain-telecom.png',
    points: [
      'Fibre optic infrastructure — UG & indoor cabling, fusion & ribbon splicing, MPO, OTDR, power meter',
      'Wireless & RF infrastructure — small cells, antenna systems, RF coverage and deployment',
      'IBC, IBS, DAS and in-building connectivity systems',
      'Network deployment, upgrades, commissioning, certification and lifecycle maintenance',
    ],
  },
  {
    slug: 'airfield-aviation-systems',
    title: 'Airfield & Aviation Systems',
    summary:
      'From runway infrastructure to airfield control and restricted-area works, engineered to strict operational windows.',
    image: '/images/domain-aviation.png',
    points: [
      'ALCS & AGLCMS — airfield lighting control, monitoring and field cabling',
      'Runway & taxiway lighting, signage and associated electrical infrastructure',
      'AFLCC & control tower M&E, ICT and ELV infrastructure',
      'Airport telecommunications, RF, security, ISMS and airfield fibre',
    ],
  },
  {
    slug: 'terminal-bhs-critical-infrastructure',
    title: 'Terminal, BHS & Critical Infrastructure',
    summary:
      'Terminal M&E, baggage handling and critical infrastructure enabling seamless airport operations.',
    image: '/images/domain-terminal.png',
    points: [
      'BHS installation, cabling, modifications, testing and commissioning',
      'BHS data, secure networks and data-diode related works',
      'Structured & data cabling — fibre, copper, MDF/IDF and pathways',
      'PLB systems, IBMS/BMS automation, terminal expansion and brownfield works',
    ],
  },
  {
    slug: 'digital-infrastructure-engineering',
    title: 'Digital Infrastructure Engineering',
    summary:
      'ICT, structured cabling, data centre and network infrastructure supporting modern digital environments.',
    image: '/images/domain-digital.png',
    points: [
      'Data centre infrastructure and mission-critical MEP coordination',
      'Structured cabling — copper & fibre, patch panels, racks, labelling and certification',
      'Network infrastructure — LAN, WAN, core & access networks, switching and routing',
      'RCDD services, fibre backbone and server & technical room infrastructure',
    ],
  },
  {
    slug: 'electrical-renewable-energy',
    title: 'Electrical Engineering & Renewable Energy',
    summary:
      'Power distribution, protection and solar PV infrastructure delivered for clean energy and brighter tomorrows.',
    image: '/images/domain-electrical.png',
    points: [
      'Electrical installation & upgrades — LV systems, distribution and wiring',
      'Equipment power systems — transformers, switchgear, UPS, generators and ATS',
      'Earthing, bonding and lightning protection systems',
      'LEW & PE services, testing, commissioning and renewable/solar PV systems',
    ],
  },
  {
    slug: 'intelligent-security-systems',
    title: 'Intelligent & Security Systems',
    summary:
      'Integrated surveillance, access control and intelligent infrastructure for smarter, safer environments.',
    image: '/images/domain-security.png',
    points: [
      'CCTV, surveillance and video analytics deployment',
      'Access control and perimeter security integration',
      'Security infrastructure and ISMS cabling',
      'Integrated building management and command-and-control systems',
    ],
  },
  {
    slug: 'project-engineering-management',
    title: 'Project Engineering & Management',
    summary:
      'End-to-end project delivery with BIM-enabled coordination — from vision to reality, delivered with precision.',
    image: '/images/domain-project.png',
    points: [
      'Site assessment, engineering design and technical planning',
      'Project controls, programme management, cost control and reporting',
      'Risk, quality and HSE management with multi-discipline coordination',
      'BIM modelling, Navisworks clash detection, testing, handover and close-out',
    ],
  },
]
