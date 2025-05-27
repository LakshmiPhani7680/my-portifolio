import React, { useState, useEffect } from 'react';
import ResumeViewer from './ResumeViewer';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCommands, setShowCommands] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isResumeButtonLoading, setIsResumeButtonLoading] = useState(false);

  const commands = [
    { icon: '🎯', text: 'Initializing Development Environment' },
    { icon: '⚡', text: 'Loading Technical Expertise' },
    { icon: '🚀', text: 'Preparing Project Showcase' },
    { icon: '✨', text: 'Activating Professional Journey' }
  ];

  const skills = ['ReactJS Developer', 'Node.js Developer', 'JavaScript Developer', 'Python Developer', 'Full Stack Developer'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowCommands(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (showResume) {
      setIsResumeButtonLoading(true);
      setTimeout(() => {
        setIsResumeButtonLoading(false);
      }, 500);
    }
  }, [showResume]);

  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(skillInterval);
  }, []);
  const handleResumeClick = () => {
    setIsResumeButtonLoading(true);
    // Add a small delay before showing the resume to ensure loading animation is visible
    setTimeout(() => {
      setShowResume(true);
      // Keep the button in loading state for a moment after opening
      setTimeout(() => setIsResumeButtonLoading(false), 500);
    }, 300);
  };

  return (
    <section className="min-h-screen flex items-center justify-center matrix-bg py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="terminal-window home-terminal backdrop-blur-lg bg-black/70">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm font-mono">portfolio@phani:~$</span>
          </div>
          
          <div className="p-8 space-y-6">
            {isLoading ? (
              <div className="loading-sequence space-y-2">
                {commands.map((cmd, index) => (
                  <div 
                    key={index}
                    className="loading-item"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <span className="text-green-400">{'>'}</span>
                    <span className="text-gray-400">Loading: </span>
                    <span className="text-green-300">{cmd.icon} {cmd.text}</span>
                    <span className="loading-dots"></span>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <div className="code-block mb-8 welcome-block bg-gray-900/50 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-2"></div>
                    <span className="text-green-400 font-mono">system.status: active</span>
                  </div>
                  <span className="text-green-400">const</span>{" "}
                  <span className="text-yellow-400">developer</span> = {"{"}
                  <div className="pl-6 space-y-3">
                    <div className="reveal-text" style={{ animationDelay: '0.5s' }}>
                      <span className="text-purple-400">name</span>:{" "}
                      <span className="text-green-300">'Phani Putrevu'</span>,
                    </div>
                    <div className="reveal-text" style={{ animationDelay: '1s' }}>
                      <span className="text-purple-400">role</span>:{" "}
                      <span className="text-green-300 typewriter">'{skills[currentSkillIndex]}'</span>,
                    </div>
                    <div className="reveal-text" style={{ animationDelay: '1.5s' }}>
                      <span className="text-purple-400">location</span>:{" "}
                      <span className="text-green-300">'Hyderabad, India'</span>,
                    </div>
                    <div className="reveal-text" style={{ animationDelay: '2s' }}>
                      <span className="text-purple-400">status</span>:{" "}
                      <span className="text-green-300">'Available for opportunities'</span>
                    </div>
                  </div>
                  {"}"};
                </div>

                <div className="welcome-message space-y-6 bg-gray-900/30 p-6 rounded-lg backdrop-blur-sm">
                  <h1 className="typing-text text-4xl md:text-6xl font-bold mb-6 glow-text flex items-center gap-4">
                    Hello, World! <span className="wave-emoji animate-wave">👋</span>
                  </h1>

                  <p className="text-lg md:text-xl mb-8 text-gray-300 reveal-text leading-relaxed" style={{ animationDelay: '2.5s' }}>
                    <span className="text-green-400">{">"}</span> Welcome to my digital portfolio. I specialize in crafting innovative solutions through code, turning complex challenges into elegant applications.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 button-container reveal-text" style={{ animationDelay: '3s' }}>
                    <button 
                      onClick={handleResumeClick}
                      disabled={isResumeButtonLoading}
                      className={`code-button with-icon group relative overflow-hidden ${
                        isResumeButtonLoading ? 'button-loading cursor-wait' : 'hover:scale-105'
                      } transition-all duration-300`}
                    >
                      <div className={`flex items-center justify-center gap-2 transition-all duration-300 ${
                        isResumeButtonLoading ? 'opacity-0' : 'opacity-100'
                      }`}>
                        <span className="button-icon group-hover:rotate-12 transition-transform">📄</span>
                        <span className="relative">
                          {"<Resume />"}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                      </div>

                      {isResumeButtonLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="loading-grid">
                            {Array.from({ length: 9 }).map((_, i) => (
                              <div key={i} className="loading-cell" />
                            ))}
                          </div>
                        </div>
                      )}
                    </button>
                    <a 
                      href="#contact" 
                      className="code-button with-icon group hover:scale-105 transition-all duration-300"
                    >
                      <span className="button-icon group-hover:rotate-12 transition-transform">💌</span>
                      <span className="relative">
                        {"<Contact />"}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                    <a 
                      href="#projects" 
                      className="code-button with-icon group hover:scale-105 transition-all duration-300"
                    >
                      <span className="button-icon group-hover:rotate-12 transition-transform">🎯</span>
                      <span className="relative">
                        {"<Projects />"}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                    <a 
                      href="#skills" 
                      className="code-button with-icon group hover:scale-105 transition-all duration-300"
                    >
                      <span className="button-icon group-hover:rotate-12 transition-transform">⚡</span>
                      <span className="relative">
                        {"<Skills />"}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-12 commands-list bg-black/40 p-4 rounded-lg backdrop-blur-sm">
                  <div className="text-sm text-green-400 mb-2 font-mono">System Initialization Complete:</div>
                  {showCommands && commands.map((cmd, index) => (
                    <div 
                      key={index}
                      className="text-sm text-gray-400 command-item flex items-center gap-2 py-1"
                      style={{ animationDelay: `${3.5 + index * 0.2}s` }}
                    >
                      <span className="text-green-400 font-mono">$</span>
                      <span className="transform transition-all duration-300 hover:scale-110">{cmd.icon}</span>
                      <span className="text-gray-300">{cmd.text}</span>
                      <span className="text-green-400 ml-auto">✓</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>        <ResumeViewer 
          isOpen={showResume} 
          onClose={() => {
            setShowResume(false);
            setIsResumeButtonLoading(false);
          }} 
        />

        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          role="button"
          aria-label="Scroll to explore content"
        >
          <div className="explore-more-container">
            <div className="explore-more-icon">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
            <div className="explore-more-text-wrapper">
              <span className="explore-more-text-main">Explore More</span>
              <span className="explore-more-text-sub">Scroll to discover</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
