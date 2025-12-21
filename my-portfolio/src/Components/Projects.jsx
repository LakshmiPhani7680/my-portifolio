import React, { useState } from 'react';
import TaskMate from '../assets/projects/TaskMate.png';
import MyPortifolio from '../assets/projects/MyPortifolio.png';
import GreenBasket from '../assets/projects/GreenBasket.png';
import APIBackend from '../assets/projects/APIBackend.png';
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = {
    fullstack: [
     {
  title: "Green Basket – Full-Stack Grocery Ordering App",
  description: "A full-stack grocery ordering platform with multilingual support, cart management, order persistence, and an admin dashboard for managing products and viewing orders.",
  technologies: ["ReactJS", "Node.js", "Express", "MongoDB (Planned)", "Tailwind CSS", "JWT (Planned)"],
  highlights: [
    "Multilingual product catalog with dynamic switching (English, Telugu, Hindi)",
    "Persistent cart with item quantity control and live total calculation",
    "Cash on Delivery (COD) order placement with real-time feedback",
    "Admin Dashboard to manage products and review customer orders",
    "Future-ready for integration with MongoDB, authentication, and payment gateways",
  ],
        link: "https://github.com/LakshmiPhani7680/greenbasket",
        image: GreenBasket
      },
    ],
    frontend: [
      {
        title: "Task Management System",
        description: "Developed a task management system with real-time updates",
        technologies: ["React.js"],
        highlights: [
          "Add and manage tasks",
          "Theme customization",
        ],
        link: "https://github.com/LakshmiPhani7680/taskmate_real",
        image: TaskMate
      },
      {
        title: "my-portifolio - Interactive Developer Portfolio",
        description: "Personal portfolio website with terminal-style UI and animations",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript","CSS"],
        highlights: [
          "Custom terminal-style interface",
          "Responsive design",
          "Performance optimized"
        ],
        link: "https://github.com/LakshmiPhani7680/my-portifolio.git",
        image: MyPortifolio
      }
    ],
    backend: [
      {
        title: "API Gateway Service",
        description: "Developed a microservice API gateway with rate limiting and logging",
        technologies: ["Python", "FastAPI", "Redis", "logger", "Pyjwt"],
        highlights: [
          "Implemented rate limiting",
          "JWT Authentication",
          "Centralized logging",
          "Microservice architecture (User+Product services)",
          "Asynchronous HTTP forwarding",
          "Still Developing more....."
        ],
        link: "https://github.com/LakshmiPhani7680/ApiGateWayService",
        image: APIBackend
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
              <span className="code-keyword">const</span>{' '}
              <span className="skill-emphasis">projectPortfolio</span> = [
              <div className="grid gap-6 mt-4">
                {getFilteredProjects().map((project, index) => (
                  <div key={index} className="terminal-card p-6 border border-green-400 rounded-md flex flex-col md:flex-row justify-between items-stretch gap-4">
                    {/* Project Details (left) */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
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
                                <span className="text-purple-400">{'>'}</span>{' '}
                                {highlight}
                              </div>
                            ))}
                          </div>
                          ]
                        </div>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2"
                      >
                        <button className="code-button">
                          <span className="code-function">view-source</span>()
                        </button>
                      </a>
                    </div>
                    {/* Project Image (right, larger) */}
                    <div className="flex-shrink-0 flex items-center justify-center md:ml-4">
                      <img
                        src={project.image || '/vite.svg'}
                        alt={project.title + ' preview'}
                        className="rounded-lg border border-green-400 shadow-md w-64 h-44 object-cover bg-black/30"
                        onError={e => { e.target.src = '/vite.svg'; }}
                      />
                    </div>
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
