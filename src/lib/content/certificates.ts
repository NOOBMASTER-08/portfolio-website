import { CertificatesSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const certificatesSection: CertificatesSectionType = {
  title: 'my certificates',
  certificates: [
    {
      id: getId(),
      name: 'Cisco Certified Ethical Hacker (CCEH)',
      organization: 'Cisco networking academy',
      url: 'https://www.credly.com/badges/4270bc46-3fc8-4cff-ab2e-2cd65f54180e/public_url',
      img: 'https://i.ibb.co/Qj94SNnm/CISCO-ETHICAL-HACKER.png',
      year: 2026,
      tags: ['Cyber Security','Networking'],
    },
    {
      id: getId(),
      name: 'Junior Cybersecurity Analyst Career Path',
      organization: 'Cisco networking academy',
      url: 'https://www.credly.com/badges/646a96d7-4368-4dba-8e96-4a6f3242b565/public_url',
      img: 'https://i.ibb.co/ZqNTs8G/Screenshot-2026-01-08-050010.png',
      year: 2026,
      tags: ['Threat Detection', 'Cyber Best Practices', 'Network Vulnerabilities'],
    },
  ],
};
