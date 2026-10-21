export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Contact', href: '/contact' },
]

type FooterLink = string | { label: string; href: string }

export const footerColumns: { title: string; links: FooterLink[]; href: string }[] = [
  {
    title: 'Businesses',
    links: [
      'Connectivity & Telecommunications',
      'Airfield & Aviation Systems',
      'Terminal, BHS & Critical Infrastructure',
      'Digital Infrastructure Engineering',
      'Electrical Engineering & Renewable Energy',
      'Intelligent & Security Systems',
      'Project Engineering & Management',
    ],
    href: '/solutions',
  },
  {
    title: 'Capabilities',
    links: [
      'Fibre Optic Infrastructure',
      'Wireless & RF Infrastructure',
      'Airfield & Aviation Engineering',
      'BHS & Terminal Infrastructure',
      'Power Systems & Renewable Energy',
      'BIM & Digital Engineering',
    ],
    href: '/capabilities',
  },
  {
    title: 'Industries',
    links: [
      'Aviation & Airports',
      'Rail & Mass Transit',
      'Telecommunications',
      'Marine & Shipyard',
      'Data Centres',
      'Infrastructure & Transportation',
      'Energy & Utilities',
    ],
    href: '/industries',
  },
  {
    title: 'Company',
    links: [
      'About Us',
      'Our Journey',
      'Our Team',
      'Our Global Footprint',
      { label: 'Projects', href: '/projects' },
      'Quality & Safety',
      { label: 'Careers', href: '/careers' },
      { label: 'Partner With Us', href: '/partner' },
      { label: 'Contact Us', href: '/contact' },
    ],
    href: '/about',
  },
]

// TODO: replace with the company's real profile URLs
export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
] as const
