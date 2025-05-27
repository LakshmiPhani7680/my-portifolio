import React, { useState, useEffect, useCallback } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [unlockedCerts, setUnlockedCerts] = useState(new Set());
  const [unlockProgress, setUnlockProgress] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const certifications = [
    {
      name: "ReactJS",
      issuer: "Internshaala",
      date: "2024",
      credentials: "ey6gk6107hb36tgw",
      skills: ["React", "JavaScript", "Tailwind CSS"],      image: "/src/assets/certs/ReactJS_NSDC.png",
      level: "Basic - Advanced"
    },
    {
      name: "Infosys Certified React Professional",
      issuer: "Infosys",
      date: "2024",
      credentials: "INFOSYS-REACT-2024",
      skills: ["React", "Routers", "React Hooks"],
      image: "/src/assets/certs/Infosys_React.png",
      level: "Basic - Advanced"
    },
    {
      name: "Infosys Certified JavaScript Developer",
      issuer: "Infosys",
      date: "2024",
      credentials: "INFOSYS-JS-2024",
      skills: ["JavaScript", "ES6", "DOM Manipulation"],
      image: "/src/assets/certs/Infosys_JavaScript.png",
      level: "Expert"
    }
  ];

  // Update the useEffect for loading animation
  useEffect(() => {
    let timer;
    if (selectedCert && unlockProgress < 100) {
      timer = setInterval(() => {
        setUnlockProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setShowImage(true), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [selectedCert, unlockProgress]);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const handleCertClick = useCallback((cert) => {
    setSelectedCert(cert);
    setUnlockProgress(0);
    setShowImage(false);
    setUnlockedCerts(prev => new Set([...prev, cert.name]));
  }, []);

  // Reset showImage when modal is closed
  const handleCloseModal = () => {
    setSelectedCert(null);
    setUnlockProgress(0);
    setShowImage(false);
  };

  const getLevelIcon = (level) => {
    switch(level.toLowerCase()) {
      case 'beginner': return '🌱';
      case 'intermediate': return '⚡';
      case 'advanced': return '🔥';
      case 'expert': return '💫';
      default: return '✨';
    }
  };

  return (
    <section id="certifications" className="py-16 terminal-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="code-heading text-3xl font-bold mb-12 typing-text">
          validateProfessionalCertifications()
        </h2>

        <div className="terminal-window achievement-terminal">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">certifications.exe</span>
          </div>
          
          <div className="p-6">
            <div className="code-block mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-400">Professional Certifications:</span>
                <span className="text-yellow-400">{unlockedCerts.size}/{certifications.length} Validated</span>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="achievement-card pl-4 cursor-pointer hover:bg-gray-800 p-4 rounded-md transition-all transform hover:scale-102 hover:translate-x-2"
                    onClick={() => handleCertClick(cert)}
                  >
                    <div className="flex items-center">
                      <div className="achievement-icon mr-4">{getLevelIcon(cert.level)}</div>
                      <div className="flex-1">
                        {"{"}
                        <div className="pl-4">
                          <span className="text-purple-400">skill</span>:{" "}
                          <span className="text-green-300 achievement-title">'{cert.name}'</span>,
                          <br />
                          <span className="text-purple-400">issuer</span>:{" "}
                          <span className="text-green-300">'{cert.issuer}'</span>,
                          <br />
                          <span className="text-purple-400">mastery</span>:{" "}
                          <span className="text-green-300">'{cert.level}'</span>,
                          <br />
                          <span className="text-purple-400">abilities</span>: [
                          <div className="pl-4">
                            {cert.skills.map((skill, i) => (
                              <span key={i} className="text-green-300">
                                '{skill}'{i < cert.skills.length - 1 ? ',' : ''}
                              </span>
                            ))}
                          </div>
                          ]
                        </div>
                        {"}"}
                      </div>
                      <div className="achievement-unlock-icon">
                        {unlockedCerts.has(cert.name) ? (
                          <span className="text-green-400">🔓</span>
                        ) : (
                          <span className="text-gray-500">🔒</span>
                        )}
                      </div>
                    </div>
                    
                    {unlockedCerts.has(cert.name) && (
                      <div className="mt-2 pl-8 text-gray-400">
                        
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300 mt-4 achievement-hint">
              <span className="text-purple-400">{"// "}</span>
              <span className="blink-animation">Click to unlock certification details 🎯</span>
            </p>
          </div>
        </div>

        {selectedCert && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 achievement-modal" 
            onClick={handleCloseModal}
            style={{ 
              top: `${window.scrollY}px`, 
              height: `${window.innerHeight}px` 
            }}
          >
            <div className="relative bg-gray-900 rounded-lg max-w-3xl w-full border border-green-400 achievement-showcase" onClick={e => e.stopPropagation()}>
              <div className="terminal-header sticky top-0 z-10 bg-gray-900">
                <div className="terminal-button red" onClick={handleCloseModal}></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
                <span className="ml-4 text-green-400 text-sm">decrypt-certificate.exe</span>
              </div>
              
              <div className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <span className="text-4xl mr-4 achievement-icon animate-bounce">{getLevelIcon(selectedCert.level)}</span>
                  <h3 className="text-2xl font-semibold text-green-400 glow-text">{selectedCert.name}</h3>
                </div>

                {!showImage ? (
                  <div className="text-center space-y-6 p-8">
                    <h4 className="text-xl text-green-400 font-mono mb-8 typing-text">
                      {unlockProgress < 100 ? 'Decrypting Certificate...' : 'Decryption Complete!'}
                    </h4>
                    <div className="w-full bg-gray-800 rounded-full h-4 relative overflow-hidden border border-green-500/30">
                      <div
                        className="h-full rounded-full transition-all duration-300 relative overflow-hidden"
                        style={{
                          width: `${unlockProgress}%`,
                          background: 'linear-gradient(90deg, #059669, #10B981)'
                        }}
                        onTransitionEnd={() => {
                          if (unlockProgress >= 100) {
                            setTimeout(() => {
                              setShowImage(true);
                            }, 500);
                          }
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
                      <span>Progress: {unlockProgress}%</span>
                      <span>{unlockProgress < 100 ? 'Decrypting...' : 'Complete!'}</span>
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
                          {unlockProgress < 100 ? '⚡' : '🎉'}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="certificate-container flex flex-col items-center justify-center">
                    <div className="relative w-1/2 mx-auto">
                      <div className="absolute inset-0 bg-green-400/20 blur-xl animate-pulse"></div>
                      <img
                        src={selectedCert.image}
                        alt={`${selectedCert.name} Certificate`}
                        className="relative z-10 w-full h-auto rounded-lg border-2 border-green-400 shadow-xl shadow-green-400/20 achievement-image transform transition-all duration-500 hover:scale-105"
                        onError={(e) => {
                          e.target.src = '/placeholder-certificate.png';
                          e.target.alt = 'Certificate image not available';
                        }}
                      />
                    </div>
                    
                    <div className="mt-8 w-full grid grid-cols-2 gap-6">
                      <div className="achievement-card p-4 border border-green-400/50 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                        <h4 className="text-purple-400 mb-3">Skills Unlocked:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCert.skills.map((skill, index) => (
                            <span 
                              key={index} 
                              className="skill-tag animate-fade-in"
                              style={{ animationDelay: `${index * 200}ms` }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="achievement-card p-4 border border-green-400/50 rounded-lg bg-black/30 hover:bg-black/50 transition-colors">
                        <h4 className="text-purple-400 mb-3">Achievement Details:</h4>
                        <p className="text-gray-300 mb-2">Level: {selectedCert.level}</p>
                        <p className="text-gray-300 mb-2">Issued: {selectedCert.date}</p>
                        <p className="text-gray-300">ID: {selectedCert.credentials}</p>
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

export default Certifications;