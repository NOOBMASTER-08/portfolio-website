import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "Machine i've pawnd",
  projects: [
    {
      id: getId(),
      name: 'Imagery',
      description: 'machine focused on web exploitation and privilege escalation through hidden functionality and careful enumeration.',
      tasks:
        'Performed deep web enumeration, uncovered vulnerable image-processing functionality, exploited misconfigurations for foothold access, and leveraged privilege escalation techniques to gain full system compromise.',
      url: 'https://labs.hackthebox.com/achievement/machine/2508589/751',
      img: 'https://i.ibb.co/mFrpCjqZ/Screenshot-2025-12-11-002058.png',
      tags: ['Web Exploitation', 'Enumeration', 'Privilege Escalation', 'Linux', 'CTF'],
    },
    {
      id: getId(),
      name: 'Expressway',
      description: 'machine centered around API exploitation and misconfigurations hidden behind a Node.js Express backend.',
      tasks:
        'Enumerated exposed API endpoints, exploited weak authentication logic to gain initial access, leveraged misconfigurations in the Express service for privilege escalation, and achieved full system compromise through targeted enumeration.',
      url: 'https://labs.hackthebox.com/achievement/machine/2508589/736',
      img: 'https://i.ibb.co/wN5LPzpM/Screenshot-2025-12-11-003840.png',
      tags: ['API Exploitation', 'Node.js', 'Express', 'Enumeration', 'Privilege Escalation'],
    },
  ],
};

export default featuredProjectsSection;