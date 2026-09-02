export const menuItems = [
  { label: 'Editie 2026', href: '/#editie2026' },
  { label: 'Tickets', href: '/#tickets' },
  { label: 'Hoe het begon',
    href: '/#hoehetbegon' ,
    children: [
      { label: 'Mijlpalen', href: '/#mijlpalen' },
    ]
  },
  { label: 'Voortraject', href: '/voortraject' },
  { label: 'Doneer', href: '/#doneer' },
  { label: 'Partners', href: '/#partners' },
  {
    label: 'Media',
    href: '/resources#media',
    children: [
      { label: 'Media', href: '/resources#media' },
      { label: 'Artwork', href: '/resources#artwork' },
      { label: 'Foto\'s', href: '/resources#fotos' },
    ],
  },
  {
    label: 'Stichting',
    href: '/stichting',
    children: [
      { label: 'Team', href: '/overons' },
      { label: 'Stichting', href: '/stichting#stichting_info' },
      { label: 'Bestuur', href: '/stichting#bestuur' },
      { label: 'Steun ons', href: '/stichting#steunons' },
      { label: 'Contact', href: '/stichting#contact' },
    ],
  },
]
