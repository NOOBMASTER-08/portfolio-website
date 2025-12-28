import { footerSection } from '@/lib/content/footer';
import SocialLinks from '../Social/SocialLinks';

const Footer = () => {
  return (
    <footer className="max-w-lg mx-auto mb-5 font-mono text-xs text-center">
      <SocialLinks className="flex justify-center gap-3 mb-3 md:hidden" />

      <div className="flex justify-center gap-2 flex-wrap">
        {footerSection.credits.map((item, index) => (
          <span key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
            >
              {item.title}
            </a>
            {index !== footerSection.credits.length - 1 && ' | '}
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
