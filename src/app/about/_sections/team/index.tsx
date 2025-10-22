import { TeamCard } from "@/app/about/_components/teamCard";
import teamMembers from "@/constants/dummy-data/team";

type TeamSectionProps = {
  title?: string;
  description?: string;
}

export const TeamSection = ({ 
  title = "Meet Our Team",
  description = "The talented individuals behind our success",
}: TeamSectionProps) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
