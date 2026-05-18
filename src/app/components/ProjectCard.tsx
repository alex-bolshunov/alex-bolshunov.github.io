import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  link?: string;
}

export default function ProjectCard({ title, description, tools, imageUrl, link }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer border border-[#212529]/10"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-[#007A87]/20 to-[#007A87]/5 flex items-center justify-center overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#212529] mb-2">
          {title}
        </h3>

        {/* Description - hidden on mobile until expanded */}
        <p className={`text-[#6C757D] mb-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
          {description}
        </p>

        {/* Tool Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F8F9FA] text-[#007A87] text-sm rounded-md border border-[#007A87]/20"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <a
          href={link || '#'}
          className="inline-block px-5 py-2.5 bg-[#007A87] text-white text-sm font-medium rounded-md hover:bg-[#005c66] transition-colors shadow-sm"
          onClick={(e) => e.stopPropagation()}
        >
          View Details
        </a>
      </div>
    </div>
  );
}
