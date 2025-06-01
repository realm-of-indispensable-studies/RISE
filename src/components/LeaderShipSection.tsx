import LeadershipProfile from "./LeadershipProfile";
import Sidharth from '../../public/sidharth.jpg'

const mockLeadershipData = [
  {
    id: 1,
    name: "Sidharth P",
    title: "Panel Member",
    image: Sidharth,
    linkedinUrl: "http://linkedin.com/in/sidharth-puthalath-b790142aa"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/michael-chen"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/emily-rodriguez"
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/david-thompson"
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/lisa-wang"
  },
  {
    id: 6,
    name: "Robert Martinez",
    title: "Chief Human Resources Officer",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/robert-martinez"
  },
  {
    id: 7,
    name: "Jennifer Davis",
    title: "Chief Information Officer",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/jennifer-davis"
  },
  {
    id: 8,
    name: "Kevin Park",
    title: "Chief Strategy Officer",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/kevin-park"
  },
  {
    id: 9,
    name: "Amanda Foster",
    title: "Chief Legal Officer",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/amanda-foster"
  },
  {
    id: 10,
    name: "James Wilson",
    title: "Chief Innovation Officer",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/james-wilson"
  },
  {
    id: 11,
    name: "Rachel Kim",
    title: "Chief Product Officer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/rachel-kim"
  },
  {
    id: 12,
    name: "Daniel Brown",
    title: "Chief Customer Officer",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/daniel-brown"
  },
  {
    id: 13,
    name: "Nicole Taylor",
    title: "Chief Data Officer",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/nicole-taylor"
  },
  {
    id: 14,
    name: "Alex Morgan",
    title: "Chief Security Officer",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/alex-morgan"
  },
  {
    id: 15,
    name: "Stephanie Lee",
    title: "Chief Sustainability Officer",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=200&fit=crop&crop=face",
    linkedinUrl: "https://linkedin.com/in/stephanie-lee"
  }
];

const LeadershipSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Panel of RISE</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Meet the exceptional leaders driving our mission forward with innovation, expertise, and dedication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mockLeadershipData.map((leader) => (
            <LeadershipProfile
              key={leader.id}
              name={leader.name}
              title={leader.title}
              image={leader.image}
              linkedinUrl={leader.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection