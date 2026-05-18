import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

export default function App() {
  const projects = [
    {
      title: 'Customer Behavior Analytics',
      description: 'Analyzed 2M+ customer transactions to identify purchasing patterns and seasonal trends, resulting in 23% increase in targeted marketing ROI.',
      tools: ['SQL', 'Python', 'Tableau'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkcyUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3Nzg5NjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '#',
    },
    {
      title: 'Sales Performance Dashboard',
      description: 'Built an interactive dashboard tracking real-time sales metrics across 50+ regional offices, enabling data-driven decision making for executive team.',
      tools: ['Tableau', 'SQL', 'Excel'],
      imageUrl: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkcyUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3Nzg5NjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Predictive Inventory Optimization',
      description: 'Developed forecasting models using Python to predict inventory needs, reducing overstock by 18% and minimizing stockouts across distribution centers.',
      tools: ['Python', 'Pandas', 'Scikit-learn'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkcyUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3Nzg5NjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Financial Reporting Automation',
      description: 'Automated monthly financial reports using SQL and Python, reducing manual processing time by 40 hours per month and improving data accuracy.',
      tools: ['SQL', 'Python', 'Power BI'],
      imageUrl: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxkYXRhJTIwZGFzaGJvYXJkcyUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3Nzg5NjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Website Traffic Analysis',
      description: 'Created comprehensive web analytics reporting system tracking user behavior, conversion rates, and traffic sources to optimize digital marketing spend.',
      tools: ['Google Analytics', 'SQL', 'Tableau'],
      imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkYXRhJTIwZGFzaGJvYXJkcyUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3Nzg5NjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Healthcare Data Insights',
      description: 'Analyzed patient care metrics and operational efficiency data to identify bottlenecks, improving patient wait times by 31% in emergency departments.',
      tools: ['R', 'SQL', 'Tableau'],
      imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxkYXRhJTIwZGFzaGJvYXJkcyUyMGFuYWx5dGljcyUyMGNoYXJ0c3xlbnwxfHx8fDE3Nzg5NjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navigation />

      <Hero />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212529] mb-12 text-center lg:text-left">
            Featured Projects
          </h2>

          {/* Grid: 2 columns on desktop, 1 column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tools={project.tools}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <h2 className="text-3xl font-bold text-[#212529] mb-6">
            About Me
          </h2>
          <p className="text-lg text-[#6C757D] mb-4">
            I'm a data analyst with 5+ years of experience transforming complex datasets into clear, actionable insights. My expertise spans SQL database optimization, Python-based statistical analysis, and creating compelling data visualizations using Tableau and Power BI.
          </p>
          <p className="text-lg text-[#6C757D]">
            I thrive on solving complex business problems through data-driven approaches, whether it's optimizing supply chains, improving customer retention, or uncovering market trends that drive strategic growth.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}