import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Ayush Verma.',
  tagline: 'I break barriers and uncover vulnerabilities.',
  description:
    "I'm a passionate Cyber Security & Pentesting enthusiast with hands-on experience in reconnaissance, vulnerability assessment, exploit development, and building secure workflows. Skilled in OSINT, web exploitation, Linux, and automation tools used in red teaming and SOC analysis.",
  specialText: 'Actively seeking roles in SOC & Pentesting',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
