import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'What I Do',
  skills: [
    {
      id: getId(),
      title: 'SOC Analysis & Pentesting',
      lottie: {
        light: '/lotties/Animation - hacker.json',
        dark: '/lotties/Animation - hacker.json',
      },
      points: [
        'Performing penetration testing and vulnerability assessment on web applications and systems',
        'Reconnaissance, scanning, enumeration, exploitation, and report writing',
        'Understanding OWASP Top 10, IDOR, SSRF, authentication vulnerabilities, and misconfigurations',
        'Hands-on practice with Hack The Box labs focusing on privilege escalation and exploitation',
      ],
      softwareSkills: [
        { name: 'kali-linux', icon: 'simple-icons:kalilinux' },
        { name: 'Burp Suite', icon: 'simple-icons:burpsuite' },
        { name: 'Metasploit', icon: 'simple-icons:metasploit' },
        { name: 'Wireshark', icon: 'simple-icons:wireshark' },
        { name: 'Gobuster', icon: 'simple-icons:go' },
        { name: 'Linux', icon: 'flat-color-icons:linux' },
        { name: 'OSINT', icon: 'mdi:search-web' },
        { name: 'python', icon: 'logos:python' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'GitHub', icon: 'logos:github-icon' },
      ],
    },


    {
      id: getId(),
      title: 'Web Development (Supporting Skill)',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Building backend applications using Python, Django, and SQL',
        'Developing secure authentication systems and implementing access control',
        'Creating full-stack projects with a security-first approach',
      ],
      softwareSkills: [
        { name: 'python', icon: 'logos:python' },
        { name: 'django', icon: 'vscode-icons:file-type-django' },
        { name: 'javascript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'sql', icon: 'vscode-icons:file-type-sql' },
        { name: 'git', icon: 'logos:git-icon' },
      ],
    },
  ],
};
