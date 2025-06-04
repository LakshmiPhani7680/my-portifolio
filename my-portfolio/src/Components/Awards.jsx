import React, { useState, useEffect } from 'react';
import insta_award from '../assets/awards/Phani_INSTA_AWARDS.png'; // Ensure this path is correct
// Firework Effect Component
const FireworkEffect = ({ side }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newParticles = [];
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 50 + Math.random() * 50;
        newParticles.push({
          id: Date.now() + i,
          style: {
            '--x': `${Math.cos(angle) * velocity}px`,
            '--y': `${Math.sin(angle) * velocity}px`,
            animationDelay: `${Math.random() * 0.5}s`
          }
        });
      }
      setParticles(newParticles);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`firework-container firework-${side}`}>
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={particle.style}
        />
      ))}
    </div>
  );
};

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unlockProgress, setUnlockProgress] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const awards = [
    {
      title: "Insta Award",
      organization: "Infosys",
      year: "2023",
      description: "Awarded a Certificate of Appreciation for independently leading the VLL Platform deployment in a new cloud environment for the Enterprise Metaverse project, demonstrating exceptional dedication and technical expertise.",
      category: "professional",
      image: insta_award
    },
    {
      title: "Outstanding Performance",
      organization: "Infosys",
      year: "2022-2024",
      description: "Awarded for exceptional contribution to critical project deliveries and mentoring team members",
      category: "professional"
      // No image property
    }
  ];
  const openModal = (award) => {
    setSelectedAward(award);
    setIsModalOpen(true);
    setUnlockProgress(0);
    setShowImage(false);
  };

  const closeModal = () => {
    setSelectedAward(null);
    setIsModalOpen(false);
    setUnlockProgress(0);
    setShowImage(false);
    // Reset body overflow
    document.body.style.overflow = 'unset';
  };  // Handle scroll lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Handle loading animation
  useEffect(() => {
    let timer;
    if (isModalOpen && unlockProgress < 100) {
      timer = setInterval(() => {
        setUnlockProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isModalOpen]);

  // Handle showing image after loading
  useEffect(() => {
    if (unlockProgress === 100) {
      const showTimer = setTimeout(() => setShowImage(true), 500);
      return () => clearTimeout(showTimer);
    }
  }, [unlockProgress]);

  const getAwardIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'professional': return '💼';
      case 'academic': return '🎓';
      case 'technical': return '💻';
      case 'leadership': return '👑';
      default: return '🏆';
    }
  };

  return (
    <section id="awards" className="py-20 terminal-section">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="section-title code-syntax mb-8">
          display-achievements
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">awards.exe</span>
          </div>
          
          <div className="p-8">
            <div className="code-block mb-10 p-6 bg-gray-900/50">
              <span className="code-keyword">const</span>{" "}
              <span className="skill-emphasis">achievements</span> = [
              <div className="mt-4">
                {awards.map((award, index) => (
                  <div 
                    key={index} 
                    className="terminal-card p-6 border border-green-400 rounded-md mb-6 cursor-pointer hover:bg-green-900/30 transition-all hover:scale-102 group"
                    onClick={() => openModal(award)}
                  >
                    <div className="pl-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl transform group-hover:scale-110 transition-transform">
                            {getAwardIcon(award.category)}
                          </span>
                          <span className="text-xl text-green-300">{award.title}</span>
                        </div>
                        <span className="text-purple-400">🔍 View Details</span>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🏢</span>
                          <span className="code-param">organization</span>:{" "}
                          <span className="text-green-300 ml-2">{award.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">📅</span>
                          <span className="code-param">year</span>:{" "}
                          <span className="text-green-300 ml-2">{award.year}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xl">🎯</span>
                          <div>
                            <span className="code-param">impact</span>:{" "}
                            <span className="text-gray-300 ml-2">{award.description}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              ];
            </div>

            <div className="mt-8">
              <div className="code-function mb-4">{"achievement-highlights"}</div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="terminal-card p-6 border border-green-400 rounded-md transform hover:scale-102 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl">🏆</span>
                      <span className="text-xs text-green-400 mt-1">Excellence</span>
                    </div>
                    <div>
                      <h3 className="text-green-300 text-lg mb-2">Professional Excellence</h3>
                      <p className="text-gray-300">
                        Consistently recognized for delivering high-impact solutions and driving innovation
                      </p>
                    </div>
                  </div>
                </div>
                <div className="terminal-card p-6 border border-green-400 rounded-md transform hover:scale-102 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl">🎓</span>
                      <span className="text-xs text-green-400 mt-1">Academic</span>
                    </div>
                    <div>
                      <h3 className="text-green-300 text-lg mb-2">Academic Achievement</h3>
                      <p className="text-gray-300">
                        Distinguished academic performance with focus on practical applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="key-point">
                <span className="code-comment">{"/* "}</span>
                Recognition for innovation and technical excellence
                <span className="code-comment">{" */"}</span>
              </p>
              <p className="text-gray-300">
                <span className="code-comment">{"/* "}</span>
                Proven track record of delivering impactful solutions
                <span className="code-comment">{" */"}</span>
              </p>
            </div>

            <div className="mt-8">
              <div className="code-function">{"quick-links"}</div>
              <div className="flex gap-4 mt-4">
                <button 
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="code-button"
                >
                  <span className="code-function">view-projects</span>()
                </button>
                <button 
                  onClick={() => document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' })}
                  className="code-button"
                >
                  <span className="code-function">view-certifications</span>()
                </button>
              </div>
            </div>
          </div>
        </div>        {/* Enhanced Award Modal */}
        {isModalOpen && selectedAward && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50" 
            onClick={closeModal}
            style={{ 
              top: `${window.scrollY}px`, 
              height: `${window.innerHeight}px` 
            }}
          >
            <div className="terminal-window w-full max-w-4xl mx-4" onClick={e => e.stopPropagation()}>
              <div className="terminal-header">
                <div className="terminal-button red" onClick={closeModal}></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
                <span className="ml-4 text-green-400 text-sm">view-achievement.exe</span>
              </div>

              <div className="p-8">
                {!showImage ? (
                  <div className="text-center space-y-6">
                    <h4 className="text-xl text-green-400 font-mono mb-8">
                      {unlockProgress < 100 ? 'Loading Achievement Details...' : 'Achievement Unlocked!'}
                    </h4>
                    <div className="w-full bg-gray-800 rounded-full h-4 relative overflow-hidden border border-green-500/30">
                      <div
                        className="h-full rounded-full transition-all duration-300 relative overflow-hidden"
                        style={{
                          width: `${unlockProgress}%`,
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
                    <div className="flex justify-center space-x-4">
                      {Array(5).fill(null).map((_, i) => (
                        <span 
                          key={i} 
                          className="text-2xl animate-bounce" 
                          style={{ 
                            animationDelay: `${i * 200}ms`,
                            opacity: unlockProgress < 20 * (i + 1) ? 0.3 : 1 
                          }}
                        >
                          {unlockProgress < 100 ? '⭐' : '🎉'}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="celebration-modal">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="text-3xl">{getAwardIcon(selectedAward.category)}</span>
                        <h3 className="text-2xl text-green-400 font-bold">{selectedAward.title}</h3>
                      </div>                        <div className="flex justify-center mb-8 px-8">
                        <div className="relative w-1/2">
                          <FireworkEffect side="left" />
                          <FireworkEffect side="right" />
                          <div className="absolute inset-0 bg-green-400/20 blur-xl animate-pulse"></div>
                          <img
                            src={selectedAward.image}
                            alt={selectedAward.title}
                            className="relative z-10 w-full h-auto rounded-lg border-2 border-green-400 shadow-xl shadow-green-400/20 achievement-image transform transition-all duration-500 hover:scale-105"
                            onError={(e) => {
                              e.target.src = '/awards/default-award.png';
                            }}
                          />
                        </div>
                      </div>

                      <div className="achievement-card p-4 border border-green-400/50 rounded-lg bg-black/30">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🎯</span>
                          <span className="text-purple-400">Impact & Achievement</span>
                        </div>
                        <p className="text-gray-300">{selectedAward.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards;
