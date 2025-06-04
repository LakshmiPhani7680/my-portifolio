import React from 'react';

import Btech_OD from '../assets/certs/Edu/Btech_OD.png';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electronics and Communication",
      school: "Godavari Institute of Engineering and Technology",
      location: "Rajahmundry, India",
      period: "2018 - 2021",
      gpa: "7.85/10.0",
      highlights: [
        "Completed major project on SPYBird drone",
        "Led technical club initiatives",
        "Completed internship at ONGC"
      ]
    }
  ];

  return (
    <section id="education" className="py-16 terminal-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title code-syntax">
          display-academic-records
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">education.exe</span>
          </div>
          
          <div className="p-6">
            <div className="code-block mb-8">
              <span className="code-keyword">const</span>{" "}
              <span className="skill-emphasis">academicQualifications</span> = [
              <div className="space-y-6 mt-4">
                {education.map((edu, index) => (
                  <div key={index} className="terminal-card p-6 border border-green-400 rounded-md">
                    <div className="mb-4">
                      <h3 className="text-xl text-green-300 font-mono">{edu.degree}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-300">{edu.school}</span>
                        <span className="text-purple-400">{edu.period}</span>
                      </div>
                      <div className="text-gray-400 mt-1">{edu.location}</div>
                    </div>

                    <div className="mb-4">
                      <span className="code-param">academic_performance</span>:{" "}
                      <span className="text-green-300">{edu.gpa}</span>
                    </div>

                    <div>
                      <span className="code-param">highlights</span>: [
                      <div className="pl-4 mt-2 space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <div key={i} className="text-gray-300">
                            <span className="text-purple-400">{">"}</span>{" "}
                            {highlight}
                          </div>
                        ))}
                      </div>
                      ]
                    </div>
                  </div>
                ))}
              </div>
              ];
            </div>

            <div className="mt-8 space-y-4">
              <p className="key-point">
                <span className="code-comment">{"/* "}</span>
                Strong academic foundation with focus on practical implementation
                <span className="code-comment">{" */"}</span>
              </p>
              <p className="text-gray-300">
                <span className="code-comment">{"/* "}</span>
                Continuously applying theoretical knowledge to real-world problems
                <span className="code-comment">{" */"}</span>
              </p>
            </div>
{/* 
            <div className="mt-8">
              <div className="code-function">{"academic-achievements"}</div>
              <div className="pl-4 mt-4 grid md:grid-cols-2 gap-4">
                <div className="terminal-card p-4 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🎓</span>
                    <span className="text-green-300">Academic Excellence</span>
                  </div>
                  <p className="mt-2 text-gray-300 pl-9">
                    Consistent high academic performance with research contributions
                  </p>
                </div>
                <div className="terminal-card p-4 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔬</span>
                    <span className="text-green-300">Research Focus</span>
                  </div>
                  <p className="mt-2 text-gray-300 pl-9">
                    Published research work in machine learning applications
                  </p>
                </div>
              </div>
            </div> */}

            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                className="code-button"
              >
                <span className="code-function">view-technical-skills</span>()
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;