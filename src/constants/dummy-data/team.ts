import { TeamMember } from "@/types/dataTypes";

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    designation: 'HR',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'email', url: 'mailto:sarah@example.com' },
    ],
  },
  {
    id: '4',
    name: 'David Park',
    designation: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    socials: [
      { platform: 'github', url: 'https://github.com' },
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'email', url: 'mailto:david@example.com' },
    ],
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    designation: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  {
    id: '6',
    name: 'James Wilson',
    designation: 'Senior Engineer',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop',
    socials: [
      { platform: 'github', url: 'https://github.com' },
      { platform: 'portfolio', url: 'https://example.com' },
    ],
  },
  {
    id: '7',
    name: 'Priya Sharma',
    designation: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
      { platform: 'email', url: 'mailto:priya@example.com' },
    ],
  },
  {
    id: '8',
    name: 'Alex Thompson',
    designation: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    socials: [
      { platform: 'linkedin', url: 'https://linkedin.com' },
      { platform: 'portfolio', url: 'https://example.com' },
    ],
  },
];

export default teamMembers;