import React from 'react';

const About = () => {
  const profile = {
    name: "Phani Putrevu",
    role: "Full Stack Developer",
    location: "hyderabad-india",
    interests: [
      "Web Development",
      "Cloud Computing",
      "System Design",
      "AI/ML"
    ],
    philosophy: [
      "Clean Code Advocate",
      "Continuous Learner",
      "Problem Solver",
      "Team Player"
    ]
  };

  return (
    <section id="about" className="py-16 terminal-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title code-syntax">
          get-developer-profile
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">about.exe</span>
          </div>
          
          <div className="p-6">
            <div className="code-block mb-8">
              <span className="code-keyword">const</span>{" "}
              <span className="skill-emphasis">developer</span> = {"{"}
              <div className="pl-4">
                <span className="code-param">name</span>:{" "}
                <span className="text-green-300">'{profile.name}'</span>,
                <br />
                <span className="code-param">role</span>:{" "}
                <span className="text-green-300">'{profile.role}'</span>,
                <br />
                <span className="code-param">location</span>:{" "}
                <span className="text-green-300">'{profile.location}'</span>,
                <br />
                <span className="code-param">interests</span>: [
                <div className="pl-4">
                  {profile.interests.map((interest, i) => (
                    <div key={i} className="text-gray-300">
                      <span className="text-purple-400">{">"}</span>{" "}
                      '{interest}'
                      {i < profile.interests.length - 1 ? ',' : ''}
                    </div>
                  ))}
                </div>
                ],
                <br />
                <span className="code-param">philosophy</span>: [
                <div className="pl-4">
                  {profile.philosophy.map((item, i) => (
                    <div key={i} className="text-gray-300">
                      <span className="text-purple-400">{">"}</span>{" "}
                      '{item}'
                      {i < profile.philosophy.length - 1 ? ',' : ''}
                    </div>
                  ))}
                </div>
                ]
              </div>
              {"}"};
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="terminal-card p-4 border border-green-400 rounded-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💡</span>
                  <span className="text-green-300">Technical Excellence</span>
                </div>
                <p className="text-gray-300">
                  Passionate about building efficient, scalable solutions and staying current with emerging technologies.
                </p>
              </div>

              <div className="terminal-card p-4 border border-green-400 rounded-md">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🤝</span>
                  <span className="text-green-300">Collaborative Approach</span>
                </div>
                <p className="text-gray-300">
                  Strong team player with experience in cross-functional collaboration and mentoring.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="key-point">
                <span className="code-comment">{"/* "}</span>
                Full stack developer with a passion for creating impactful solutions
                <span className="code-comment">{" */"}</span>
              </p>
              <p className="text-gray-300">
                <span className="code-comment">{"/* "}</span>
                Always eager to take on new challenges and learn cutting-edge technologies
                <span className="code-comment">{" */"}</span>
              </p>
            </div>

            <div className="mt-8">
              <div className="code-function">{"quick-links"}</div>
              <div className="flex gap-4 mt-4">
                <button 
                  onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                  className="code-button"
                >
                  <span className="code-function">view-skills</span>()
                </button>
                <button 
                  onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                  className="code-button"
                >
                  <span className="code-function">view-experience</span>()
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
