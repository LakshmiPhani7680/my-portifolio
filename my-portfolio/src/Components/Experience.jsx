// components/Experience.jsx
import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState(null);
  const [totalExp, setTotalExp] = useState('');

  const experiences = [
    {
      role: "Python Developer",
      company: "Exponential AI",
      duration: "2025 Feb - Present",
      location: "hyderabad-india",
      responsibilities:[],
      tech: [
        "python",
        "numpy",
        "pandas"
      ]
    },
    {
      role: "Senior Systems Engineer",
      company: "Infosys",
      duration: "2024 Jan - 2025 Feb",
      location: "hyderabad-india",
      responsibilities: [
        "Developed an interactive chatbot using Azure OpenAI API and integrated Microsoft Text-to-Speech for audio responses",
        "Mapped visemes to a Digital Human Avatar using NodeJS and ThreeJS for dynamic facial animations",
        "Led development of a web-based metaverse application supporting 100+ concurrent users",
        "Integrated video/audio calls, chat, and screen sharing using Agora ScreenShare SDK",
        "Engineered and deployed a 3D card shuffle game to enhance user engagement",
        "Optimized application performance and load times by 30% using Chrome DevTools and pm2 cluster mode",
        "Created and optimized C# APIs to interface with Amazon backend servers, improving data retrieval speed by 40%",
        "Identified and resolved critical vulnerabilities in production applications to maintain system security"
      ],
      tech: [
        "node-js",
        "three-js",
        "html",
        "css",
        "javascript",
        "azure-openai",
        "microsoft-tts",
        "agora-sdk",
        "pm2",
        "chrome-devtools",
        "c-sharp",
        "amazon-web-services"
      ]
    },
    {
      role: "Systems Engineer",
      company: "Infosys",
      duration: "2022 Mar - 2024 Jan",
      location: "remote",
      responsibilities: [
        "Contributed to Virtual Living Labs R&D project to improve team productivity",
        "Developed interactive 3D globe using ThreeJS and amCharts4 for HSBC POC",
        "Deployed Virtual Living Labs in client environment for KPMG integration",
        "Developed custom Node.js APIs for data retrieval in TGE Solariswind project"
      ],
      tech: [
        "three-js",
        "amcharts4",
        "node-js"
      ]
    },
    {
      role: 'Systems Engineer Trainee',
      company: 'Infosys',
      duration: '2021 Nov - 2022 Mar',
      location: 'remote',
      responsibilities: [
        "Completed training in Java, MySQL, Advanced Java, and Spring Framework",
        "Achieved 80% score in FA1, FA2, and FA3 assessments"
      ],
      tech: [
        "java",
        "mysql",
        "spring"
      ]
    }
  ];

  useEffect(() => {
    // Calculate total experience
    const calculateTotalExperience = () => {
      const now = new Date();
      const startDate = new Date('2021-11-29'); // First role start date
      const years = (now - startDate) / (1000 * 60 * 60 * 24 * 365.25);
      const fullYears = Math.floor(years);
      const months = Math.floor((years - fullYears) * 12);
      return `${fullYears}+ Years ${months} Months`;
    };
    setTotalExp(calculateTotalExperience());
  }, []);

  const toggleExpand = (index) => {
    setExpandedExp(expandedExp === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 terminal-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title code-syntax flex items-center justify-between">
          <span>display-work-history</span>
          <span className="text-lg">
            <span className="code-comment">{"/* Total Experience: "}</span>
            <span className="text-green-400">{totalExp}</span>
            <span className="code-comment">{" */"}</span>
          </span>
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">career.exe</span>
          </div>
          
          <div className="p-6">
            <div className="code-block mb-8">
              <span className="code-keyword">const</span>{" "}
              <span className="skill-emphasis">career</span> = [
              <div className="mt-4">
                {experiences.map((exp, index) => (
                  <div 
                    key={index} 
                    className={`pl-4 mb-6 terminal-card transition-all duration-300 ${expandedExp === index ? 'border-green-400' : 'border-gray-700'}`}
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="p-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-green-300 text-lg">{exp.role}</span>
                          <span className="text-gray-400 ml-2">@</span>
                          <span className="text-purple-400 ml-2">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400">{exp.duration}</span>
                          <span className="ml-3 text-green-400 transform transition-transform duration-300" style={{ transform: expandedExp === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            ▼
                          </span>
                        </div>
                      </div>

                      {expandedExp === index && (
                        <div className="mt-4 pl-4 animate-fade-in">
                          <div className="mb-4">
                            <span className="code-param">location</span>:{" "}
                            <span className="text-green-300">'{exp.location}'</span>
                          </div>
                          
                          <div className="mb-4">
                            <span className="code-param">achievements</span>: [
                            <div className="pl-4 space-y-2 mt-2">
                              {exp.responsibilities.map((resp, i) => (
                                <div key={i} className="achievement-item flex items-start group">
                                  <span className="text-purple-400 mr-2 transform group-hover:translate-x-1 transition-transform">{">"}</span>
                                  <span className="text-gray-300 group-hover:text-green-300 transition-colors">'{resp}'</span>
                                  {i < exp.responsibilities.length - 1 ? ',' : ''}
                                </div>
                              ))}
                            </div>
                            ]
                          </div>
                          
                          <div>
                            <span className="code-param">tech-stack</span>: [
                            <div className="pl-4 flex flex-wrap gap-2 mt-2">
                              {exp.tech.map((tech) => (
                                <span 
                                  key={tech} 
                                  className="skill-tag animate-fade-in hover:scale-110 transition-transform"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            ]
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                ];
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="key-point">
                <span className="code-comment">{"/* "}</span>
                Strong focus on building scalable solutions and optimizing performance
                <span className="code-comment">{" */"}</span>
              </p>
              <p className="text-gray-300">
                <span className="code-comment">{"/* "}</span>
                Passionate about implementing best practices and mentoring team members
                <span className="code-comment">{" */"}</span>
              </p>
              <p className="text-gray-300">
                <span className="code-comment">{"/* "}</span>
                Continuously learning and adapting to new technologies
                <span className="code-comment">{" */"}</span>
              </p>
            </div>

            <div className="mt-8">
              <div className="code-function">{"career-highlights"}</div>
              <div className="pl-4 mt-4 grid gap-4">
                <div className="terminal-card p-4 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💡</span>
                    <span className="text-green-300">Performance Optimization Expert</span>
                  </div>
                  <p className="mt-2 text-gray-300 pl-9">
                    Significantly improved application performance through optimization techniques
                  </p>
                </div>
                <div className="terminal-card p-4 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🤝</span>
                    <span className="text-green-300">Team Leadership</span>
                  </div>
                  <p className="mt-2 text-gray-300 pl-9">
                    Mentored junior developers and promoted best practices within the team
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 code-block p-6">
              <p className="key-point">
                <span className="code-comment">{"/* "}</span>
                Open to discussing new opportunities and challenges
                <span className="code-comment">{" */"}</span>
              </p>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="code-button mt-4"
              >
                <span className="code-function">discuss-opportunities</span>()
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
