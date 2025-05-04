import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = {
    fullstack: [
      {
        title: "E-Commerce Platform",
        description: "Built a full-featured e-commerce platform with real-time inventory management",
        technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
        highlights: [
          "Implemented real-time inventory tracking",
          "Integrated secure payment processing",
          "Built responsive admin dashboard"
        ],
        link: "https://github.com/yourusername/ecommerce"
      },
      {
        title: "Task Management System",
        description: "Developed a collaborative task management system with real-time updates",
        technologies: ["Next.js", "Express", "PostgreSQL", "WebSocket"],
        highlights: [
          "Real-time collaboration features",
          "Role-based access control",
          "Advanced task filtering and sorting"
        ],
        link: "https://github.com/yourusername/task-manager"
      }
    ],
    frontend: [
      {
        title: "Portfolio Website",
        description: "Personal portfolio website with terminal-style UI and animations",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        highlights: [
          "Custom terminal-style interface",
          "Responsive design",
          "Performance optimized"
        ],
        link: "https://github.com/yourusername/portfolio"
      }
    ],
    backend: [
      {
        title: "API Gateway Service",
        description: "Developed a microservice API gateway with rate limiting and caching",
        technologies: ["Node.js", "Express", "Redis", "Docker"],
        highlights: [
          "Implemented rate limiting",
          "Cache optimization",
          "Load balancing"
        ],
        link: "https://github.com/yourusername/api-gateway"
      }
    ]
  };

  const categories = {
    all: 'All Projects',
    fullstack: 'Full Stack',
    frontend: 'Frontend',
    backend: 'Backend'
  };

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.entries(projects).reduce((acc, [category, projectList]) => {
        return [...acc, ...projectList.map(project => ({ ...project, category }))];
      }, []);
    }
    return projects[activeCategory].map(project => ({ ...project, category: activeCategory }));
  };

  return (
    <section id="projects" className="py-16 terminal-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title code-syntax">
          load-project-portfolio
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">projects.exe</span>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-8">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`code-button ${activeCategory === key ? 'active' : ''}`}
                >
                  <span className="code-function">filter-{key}</span>()
                </button>
              ))}
            </div>

            <div className="code-block mb-8">
              <span className="code-keyword">const</span>{" "}
              <span className="skill-emphasis">projectPortfolio</span> = [
              <div className="grid gap-6 mt-4">
                {getFilteredProjects().map((project, index) => (
                  <div key={index} className="terminal-card p-6 border border-green-400 rounded-md">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl text-green-300 font-mono">{project.title}</h3>
                      <span className="text-purple-400">{categories[project.category]}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <span className="code-param">technologies</span>: [
                      <div className="flex flex-wrap gap-2 mt-2 pl-4">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 bg-gray-800 rounded text-green-300 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      ]
                    </div>

                    <div className="mb-4">
                      <span className="code-param">highlights</span>: [
                      <div className="pl-4 mt-2 space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="text-gray-300">
                            <span className="text-purple-400">{">"}</span>{" "}
                            {highlight}
                          </div>
                        ))}
                      </div>
                      ]
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="code-button">
                        <span className="code-function">view-source</span>()
                      </button>
                    </a>
                  </div>
                ))}
              </div>
              ];
            </div>

            <div className="mt-8 space-y-4">
              <p className="key-point">
                <span className="code-comment">{"/* "}</span>
                Each project demonstrates practical application of various technologies
                <span className="code-comment">{" */"}</span>
              </p>
              <p className="text-gray-300">
                <span className="code-comment">{"/* "}</span>
                Focus on scalability, performance, and user experience
                <span className="code-comment">{" */"}</span>
              </p>
            </div>

            <div className="mt-8">
              <div className="code-function">{"project-stats"}</div>
              <div className="pl-4 mt-4 grid md:grid-cols-2 gap-4">
                <div className="terminal-card p-4 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💻</span>
                    <span className="text-green-300">Technical Scope</span>
                  </div>
                  <p className="mt-2 text-gray-300 pl-9">
                    Diverse portfolio covering full-stack, frontend, and backend development
                  </p>
                </div>
                <div className="terminal-card p-4 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    <span className="text-green-300">Impact</span>
                  </div>
                  <p className="mt-2 text-gray-300 pl-9">
                    Solutions focused on solving real-world problems and improving efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
