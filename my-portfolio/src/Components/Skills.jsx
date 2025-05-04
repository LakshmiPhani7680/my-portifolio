import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = {
    frontend: [
      { name: 'React.js', level: 90, experience: '3 years' },
      { name: 'JavaScript', level: 90, experience: '3 years' },
      { name: 'HTML5', level: 95, experience: '3 years' },
      { name: 'CSS3', level: 90, experience: '3 years' },
      { name: 'Tailwind CSS', level: 90, experience: '2 years' }
    ],
    backend: [
      { name: 'Node.js', level: 85, experience: '3 years' },
      { name: 'Express.js', level: 85, experience: '3 years' },
      { name: 'REST APIs', level: 90, experience: '3 years' },
      { name: 'Socket.io', level: 75, experience: '2 years' },
      {name: 'Python', level: 70, experience: '2 years'},
      {name: 'NumPy', level: 70, experience: '1 year'},
      {name: 'Pandas', level: 70, experience: '1 year'},
    ],
    database: [
      { name: 'MongoDB', level: 80, experience: '2 years' },
      { name: 'PostgreSQL', level: 75, experience: '2 years' }
    ],
    devops: [
      { name: 'AWS', level: 70, experience: '2 years' },
      { name: 'Git', level: 90, experience: '3 years' }
    ],
    tools: [
      { name: 'VS Code', level: 90, experience: '3 years' },
      { name: 'Postman', level: 85, experience: '3 years' },
    ]
  };

  const categories = {
    all: 'All Skills',
    frontend: 'Frontend',
    backend: 'Backend',
    devops: 'DevOps',
    tools: 'Tools',
    database: 'Database'
  };

  const getLevelIcon = (level) => {
    if (level >= 90) return '💫';
    if (level >= 80) return '⚡';
    if (level >= 70) return '🔥';
    return '✨';
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skills).reduce((acc, [category, skillList]) => {
        return [...acc, ...skillList.map(skill => ({ ...skill, category }))];
      }, []);
    }
    return skills[activeCategory].map(skill => ({ ...skill, category: activeCategory }));
  };

  return (
    <section id="skills" className="py-16 terminal-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title code-syntax">
          validateTechnicalSkills()
        </h2>

        <div className="terminal-window achievement-terminal">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">skills.exe</span>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-green-400">Skill Matrix Progress:</span>
              <span className="text-yellow-400">Mastery Level Analysis</span>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-wrap gap-4">
                {Object.entries(categories).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                      activeCategory === key 
                      ? 'bg-green-500 text-black font-semibold' 
                      : 'bg-gray-800 text-green-400 hover:bg-gray-700'
                    }`}
                  >
                    <span className="code-function">filter-{key}</span>()
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {getFilteredSkills().map((skill, index) => (
                <div 
                  key={index} 
                  className="terminal-card p-6 border border-green-400 rounded-md transform transition-all duration-300 cursor-pointer hover:scale-105 relative group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">
                      {getLevelIcon(skill.level)}
                    </span>
                    <span className="text-green-300 font-mono text-lg">{skill.name}</span>
                  </div>
                  
                  {hoveredSkill === skill.name && (
                    <div className="absolute inset-0 bg-gray-900/95 rounded-md flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <div className="p-6 w-full space-y-4">
                        <div className="text-green-300 font-mono text-lg mb-4">{skill.name}</div>
                        <div className="space-y-3">
                          <div className="w-full bg-gray-800 rounded-full h-2.5">
                            <div
                              className="bg-green-400 h-2.5 rounded-full transition-all duration-1000 group-hover:animate-skillProgress"
                              style={{ 
                                '--progress': `${skill.level}%`,
                                width: '0%'
                              }}
                            />
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span className="text-green-400 font-medium">Mastery: {skill.level}%</span>
                            <span className="text-purple-400">{skill.experience}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="code-function mb-4">{"core-competencies"}</div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="terminal-card p-6 border border-green-400 rounded-md hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">🚀</span>
                    <span className="text-green-300 text-lg">Full Stack Development</span>
                  </div>
                  <p className="mt-3 text-gray-300 pl-10">
                    End-to-end application development with modern technologies
                  </p>
                </div>
                <div className="terminal-card p-6 border border-green-400 rounded-md hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">⚡</span>
                    <span className="text-green-300 text-lg">Performance Optimization</span>
                  </div>
                  <p className="mt-3 text-gray-300 pl-10">
                    Building efficient and scalable solutions
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

export default Skills;
