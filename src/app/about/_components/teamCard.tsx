import { Github, Linkedin, Twitter, Globe, Mail } from 'lucide-react';
import type { TeamMemberProps, SocialLink } from '@/types/dataTypes';
import Image from 'next/image';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  portfolio: Globe,
  email: Mail,
} as const;

interface TeamCardProps {
  member: TeamMemberProps;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  const getSocialIcon = (platform: SocialLink['platform']) => {
    const Icon = socialIcons[platform];
    return Icon;
  };

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-card to-card/95 shadow-[var(--shadow-card)] transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.designation}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={300}
          height={600}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {member.designation}
        </p>
        
        {member.socials.length > 0 && (
          <div className="flex gap-3">
            {member.socials.map((social, index) => {
              const Icon = getSocialIcon(social.platform);
              return (
                <a
                  key={`${social.platform}-${index}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-[var(--transition-smooth)] hover:bg-primary hover:text-primary-foreground"
                  aria-label={`${member.name}'s ${social.platform}`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};
