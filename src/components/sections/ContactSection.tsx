import type { PersonalInfo } from '../../types/cvData';
import type { ContactItem } from '../ui/contact/PersolanInfoTile';
import PersonalInfoTile from '../ui/contact/PersolanInfoTile';

interface ContactTextProps {
  title: string;
  description: string;
  phoneLabel: string;
  locationLabel: string;
  showLabel:string;
}

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  contactText: ContactTextProps;
}

export const ContactSection = ({
  personalInfo,
  contactText,
}: ContactSectionProps) => {
  const { location, socials } = personalInfo;
  const { title, description, locationLabel } = contactText;

  const contactItems: ContactItem[] = [];

  if (socials.email) {
    contactItems.push({
      id: 'email',
      label: 'Email',
      value: socials.email,
      href: `mailto:${socials.email}`,
      isSensitive: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    });
  }

  if (socials.github) {
    contactItems.push({
      id: 'github',
      label: 'GitHub',
      value: socials.github.replace(/^https?:\/\//, ''),
      href: socials.github,
      isSensitive: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    });
  }

  if (socials.linkedin) {
    contactItems.push({
      id: 'linkedin',
      label: 'LinkedIn',
      value: socials.linkedin.replace(/^https?:\/\//, ''),
      href: socials.linkedin,
      isSensitive: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    });
  }

  if (location) {
    contactItems.push({
      id: 'location',
      label: locationLabel,
      value: location,
      isSensitive: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    });
  }

  return (
    <section 
      className="tech-stack-container contact-container" 
      aria-labelledby="contact-heading"
    >
      <header className="tech-stack-header">
        <h2 id="contact-heading" className="second-title">
          {title}
        </h2>
        <p className="second-description">
          {description}
        </p>
      </header>
      
      <div className="contact-column">
        <div className="contact-column-list">
          {contactItems.map((item) => (
            <PersonalInfoTile key={item.id} item={item} showText={contactText.showLabel}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;