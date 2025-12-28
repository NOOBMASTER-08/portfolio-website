import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Open Sight',
      url: 'https://open-sight-six.vercel.app/',
      repo: 'https://github.com/NOOBMASTER-08/OpenSight',
      img: 'https://i.ibb.co/wFZKpYqM/Screenshot-2025-12-26-035256.png',
      year: 2025,
      tags: ['Next.js'],
    },
    {
      id: getId(),
      name: 'Hacktoberfest-2024',
      url: 'https://www.holopin.io/@noobmaster08#',
      repo: 'https://github.com/NOOBMASTER-08',
      img: 'https://i.ibb.co/PvjgppwD/Screenshot-2025-12-28-181848.png',
      year: 2024,
      tags: ['Next.js','django','python'],
    },
  ],
};
