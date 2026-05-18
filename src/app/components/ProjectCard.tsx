import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
}

export default function ProjectCard({ title, description, tools, imageUrl }: ProjectCardProps) {
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
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#F8F9FA] text-[#007A87] text-sm rounded-md border border-[#007A87]/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
