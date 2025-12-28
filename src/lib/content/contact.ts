import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a remote job or Internship.',
    'Whether you have a Vulnerbility to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};
