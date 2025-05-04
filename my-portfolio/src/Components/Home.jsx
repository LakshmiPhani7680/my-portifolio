import React, { useState, useEffect } from 'react';
import resumePdf from '../assets/pdfs/Resume_Putrevu_Phani.pdf';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCommands, setShowCommands] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [resumeLoading, setResumeLoading] = useState(0);
  const [isDecrypted, setIsDecrypted] = useState(false);

  const commands = [
    { icon: '🎮', text: 'Interactive Portfolio Loaded' },
    { icon: '🔧', text: 'Developer Tools Initialized' },
    { icon: '🚀', text: 'Skills Matrix Activated' },
    { icon: '✨', text: 'Achievement System Online' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowCommands(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showResume && resumeLoading < 100) {
      const interval = setInterval(() => {
        setResumeLoading(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [showResume]);

  useEffect(() => {
    if (resumeLoading === 100) {
      setTimeout(() => setIsDecrypted(true), 500);
    }
  }, [resumeLoading]);

  return (
    <section className="min-h-screen flex items-center justify-center matrix-bg py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="terminal-window home-terminal">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">Portfolio.exe</span>
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
                <div className="code-block mb-8 welcome-block">
                  <span className="text-green-400">const</span>{" "}
                  <span className="text-yellow-400">developer</span> = {"{"}
                  <div className="pl-4 space-y-2">
                    <div className="reveal-text" style={{ animationDelay: '0.5s' }}>
                      <span className="text-purple-400">name</span>:{" "}
                      <span className="text-green-300">'Phani Putrevu'</span>,
                    </div>
                    <div className="reveal-text" style={{ animationDelay: '1s' }}>
                      <span className="text-purple-400">role</span>:{" "}
                      <span className="text-green-300">'Full Stack Developer'</span>,
                    </div>
                    <div className="reveal-text" style={{ animationDelay: '1.5s' }}>
                      <span className="text-purple-400">location</span>:{" "}
                      <span className="text-green-300">'Hyderabad, India'</span>,
                    </div>
                    <div className="reveal-text" style={{ animationDelay: '2s' }}>
                      <span className="text-purple-400">status</span>:{" "}
                      <span className="text-green-300">'Ready for new challenges'</span>
                    </div>
                  </div>
                  {"}"};
                </div>

                <h1 className="typing-text text-4xl md:text-6xl font-bold mb-6 glow-text">
                  Hello, World! <span className="wave-emoji">👋</span>
                </h1>

                <p className="text-lg md:text-xl mb-8 text-gray-300 reveal-text" style={{ animationDelay: '2.5s' }}>
                  <span className="text-green-400">{'>'}</span>
                  Welcome to my digital playground. I craft elegant solutions to complex problems.
                </p>

                <div className="flex gap-4 button-container reveal-text" style={{ animationDelay: '3s' }}>
                  <button 
                    onClick={() => setShowResume(true)}
                    className="code-button with-icon"
                  >
                    <span className="button-icon">📄</span>
                    {"<Resume />"}
                  </button>
                  <a 
                    href="#contact" 
                    className="code-button with-icon"
                  >
                    <span className="button-icon">💌</span>
                    {"<Contact />"}
                  </a>
                  <a 
                    href="#projects" 
                    className="code-button with-icon"
                  >
                    <span className="button-icon">🎯</span>
                    {"<Projects />"}
                  </a>
                  <a 
                    href="#skills" 
                    className="code-button with-icon"
                  >
                    <span className="button-icon">⚡</span>
                    {"<Skills />"}
                  </a>
                </div>

                <div className="mt-12 commands-list">
                  {showCommands && commands.map((cmd, index) => (
                    <div 
                      key={index}
                      className="text-sm text-gray-400 command-item"
                      style={{ animationDelay: `${3.5 + index * 0.2}s` }}
                    >
                      <span className="text-green-400">{'>'}</span>
                      {cmd.icon} {cmd.text}
                      <span className="text-green-400"> ✓</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {showResume && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
            <div className="terminal-window w-full max-w-5xl mx-4">
              <div className="terminal-header">
                <div className="terminal-button red" onClick={() => {
                  setShowResume(false);
                  setResumeLoading(0);
                  setIsDecrypted(false);
                }}></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
                <span className="ml-4 text-green-400 text-sm">decrypt-resume.exe</span>
              </div>
              
              <div className="p-6 bg-gray-900">
                {!isDecrypted ? (
                  <div className="text-center space-y-6 p-8">
                    <h3 className="text-2xl text-green-400 font-mono mb-8">
                      {resumeLoading < 100 ? 'Decrypting Resume...' : 'Decryption Complete!'}
                    </h3>
                    <div className="w-full bg-gray-800 rounded-full h-4 relative overflow-hidden border border-green-500/30">
                      <div
                        className="h-full rounded-full transition-all duration-300 relative overflow-hidden"
                        style={{
                          width: `${resumeLoading}%`,
                          background: 'linear-gradient(90deg, #059669, #10B981)'
                        }}
                      >
                        <div 
                          className="absolute inset-0 opacity-75"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                            animation: 'shine 1.5s infinite'
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-green-400 font-mono">
                      <span>Progress: {resumeLoading}%</span>
                      <span>{resumeLoading < 100 ? 'Decrypting...' : 'Complete!'}</span>
                    </div>
                    <div className="mt-8 flex justify-center space-x-4">
                      {Array(5).fill(null).map((_, i) => (
                        <span 
                          key={i} 
                          className="text-2xl animate-bounce" 
                          style={{ 
                            animationDelay: `${i * 200}ms`,
                            opacity: resumeLoading < 20 * (i + 1) ? 0.3 : 1 
                          }}
                        >
                          {resumeLoading < 100 ? '⚡' : '🎉'}
                        </span>
                      ))}
                    </div>
                    {resumeLoading === 100 && (
                      <div className="mt-8 animate-fade-in">
                        <p className="text-green-400 mb-4">Access Granted! Opening secure document...</p>
                        <div className="loading-dots">
                          <span className="dot"></span>
                          <span className="dot"></span>
                          <span className="dot"></span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden transform animate-scale-up">
                    <iframe
                      src={resumePdf}
                      className="w-full h-full"
                      style={{
                        border: 'none',
                        background: 'white'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          role="button"
          aria-label="Scroll to explore content"
        >
          <div className="scroll-indicator flex flex-col items-center">
            <span className="text-green-400 text-3xl animate-bounce mb-1">⌄</span>
            <p className="text-sm text-green-400 hover:text-green-300 transition-colors">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
