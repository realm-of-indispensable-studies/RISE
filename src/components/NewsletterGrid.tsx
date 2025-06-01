import React from 'react';
import NewsletterCard from './NewsletterCard';



const newsletters = [
  {
    title: "WhatsApp Channel Access",
    // frequency: "Sent Weekdays",
    description: "Join our official WhatsApp channel for real-time updates, event alerts, and resource sharing directly on your phone.",
    hasPreview: true,
    link: 'https://whatsapp.com/channel/0029Va6ExG27NoZvvrOjh52f'
  },
  {
    title: "Weekly Update",
    // frequency: "Sent Sundays",
    description: "A comprehensive roundup featuring key activities, academic highlights, and collaborative milestones from the past week.",
    hasPreview: true
  },
  {
    title: "Announcements",
    // frequency: "Sent Weekday Evenings",
    description: "Timely announcements about upcoming programs, competitions, speaker sessions, deadlines, and institutional opportunities.",
    hasPreview: true
  },
  {
    title: "RISE Blog",
    // frequency: "Sent Twice Weekly",
    description: "Dive into curated articles, reflections, and insights from team members and collaborators across institutions.",
    hasPreview: true
  },
  {
    title: "Influencer Engagement",
    frequency: "Interviews & Spotlights",
    description: "Featuring stories and perspectives from inspiring figures in academics, entrepreneurship, and social impact—empowering the student voice.",
    hasPreview: true
  },
  {
    title: "Career Compass",
    frequency: "Career Updates & References",
    description: "Includes career development resources, internship/placement references, scholarship alerts, and curated opportunities from trusted sources.",
    hasPreview: true
  }
];

const NewsletterGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsletters.map((newsletter, index) => (
          <NewsletterCard
            key={index}
            title={newsletter.title}
            frequency={newsletter.frequency}
            description={newsletter.description}
            hasPreview={newsletter.hasPreview}
            link={newsletter.link} 
          />
        ))}
      </div>
    </section>
  );
};

export default NewsletterGrid;
