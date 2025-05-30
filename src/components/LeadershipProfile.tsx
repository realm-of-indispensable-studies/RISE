import { Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface LeadershipProfileProps {
  name: string;
  title: string;
  image: string;
  linkedinUrl: string;
}

const LeadershipProfile = ({ name, title, image, linkedinUrl }: LeadershipProfileProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="text-center p-0">
        <div className="mb-4 ">
          <img
            src={image}
            alt={name}
            className="w-full h-36 cursor-pointer rounded-t-md mx-auto object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300"
          />
        </div>
        <h3 className="font-semibold text-lg mb-2 text-black">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{title}</p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              <Linkedin size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <p className="text-sm">Connect with {name} on LinkedIn to learn more about their professional background and insights.</p>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  );
};

export default LeadershipProfile;