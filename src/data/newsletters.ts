export interface NewsItem {
  id: number;
  headline: string;
  description: string;
  views: string;
  date: string;
  image: string;
  category?: string;
}
import event1 from '../../public/event2.jpg'
import event2 from '../../public/event1.jpg'




export const newsletters: NewsItem[] = [
  {
    id: 1,
    headline: " LAKSHYAM | Career Guidance Initiative by Govt. Brennen College & RISE",
    description: "RISE, in collaboration with the Career Guidance and Placement Cell of Government Brennen College, launched Lakshyam—a bilingual, inclusive career guidance program for school students. Aimed at fostering informed choices, Lakshyam provides accessible resources in English and Malayalam. The keynote session was delivered by Prof. Prashobhith K P, Career Expert and Convenor of the Cell.",
    views: "8.7K",
    date: "15/05/2025",
    image: event2,
    category: "Economics"
  },
  {
    id: 2,
    headline: "Career Mapping Initiative | First Session at Mambaram HSS",
    description: "RISE kickstarted its Career Mapping Initiative at Mambaram Higher Secondary School for Grade 11 students, inspiring them to explore diverse career paths. Prof. Prashobhith K P shared key strategies for career growth, while founder Sidharth P presented RISE’s vision, encouraging students to dream big and lead with purpose.",
    views: "12.4K",
    date: "23/01/2025",
    image: event1,
    category: "Politics"
  },
  
  // {
  //   id: 3,
  //   headline: "Elon Musk's Latest Venture Disrupts Traditional Industries",
  //   description: "The tech billionaire's newest project promises to revolutionize manufacturing processes, drawing both praise and criticism from industry veterans. Early investors show cautious optimism about the ambitious timeline.",
  //   views: "15.2K",
  //   date: "6 hours ago",
  //   image: "photo-1518770660439-4636190af475",
  //   category: "Technology"
  // },
  // {
  //   id: 4,
  //   headline: "CDC Announces Major Covid-19 Policy Shifts",
  //   description: "Federal health officials unveil updated guidelines reflecting current pandemic conditions and scientific understanding. The changes affect workplace protocols, travel recommendations, and public health measures nationwide.",
  //   views: "9.8K",
  //   date: "8 hours ago",
  //   image: "photo-1581091226825-a6a2a5aee158",
  //   category: "Health"
  // },
  // {
  //   id: 5,
  //   headline: "Wall Street Reacts to Federal Reserve Signals",
  //   description: "Markets respond to subtle hints about future monetary policy directions, with investors parsing every word from recent Fed communications. Financial experts predict continued volatility in the coming weeks.",
  //   views: "11.3K",
  //   date: "10 hours ago",
  //   image: "photo-1493397212122-2b85dda8106b",
  //   category: "Finance"
  // },
  // {
  //   id: 6,
  //   headline: "Climate Summit Yields Unexpected Breakthrough",
  //   description: "International delegates reach consensus on several key environmental initiatives, surprising observers who expected continued deadlock. The agreement could reshape global climate policy for the next decade.",
  //   views: "7.6K",
  //   date: "12 hours ago",
  //   image: "photo-1426604966848-d7adac402bff",
  //   category: "Environment"
  // }
];