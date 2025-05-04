import React, { useState } from 'react';

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const awards = [
    {
      title: "Insta Award",
      organization: "Infosys",
      year: "2023",
      description: "Awarded a Certificate of Appreciation for independently leading the VLL Platform deployment in a new cloud environment for the Enterprise Metaverse project, demonstrating exceptional dedication and technical expertise.",
      category: "professional",
      image: "src/assets/awards/Phani_INSTA_AWARDS.png" // You'll need to add these images to your public folder
    },
    {
      title: "Outstanding Performance",
      organization: "Infosys",
      year: "2022-2024",
      description: "Awarded for exceptional contribution to critical project deliveries and mentoring team members",
      category: "professional",
      image: "/awards/outstanding-performance.png" // You'll need to add these images to your public folder
    }
  ];

  const openModal = (award) => {
    setSelectedAward(award);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAward(null);
    setIsModalOpen(false);
  };

  return (
    <section id="awards" className="py-16 terminal-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title code-syntax">
          display-achievements
        </h2>

        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button red"></div>
            <div className="terminal-button yellow"></div>
            <div className="terminal-button green"></div>
            <span className="ml-4 text-green-400 text-sm">awards.exe</span>
          </div>
          
          <div className="p-6">
            <div className="code-block mb-8">
              <span className="code-keyword">const</span>{" "}
              <span className="skill-emphasis">achievements</span> = [
              {awards.map((award, index) => (
                <div 
                  key={index} 
                  className="terminal-card p-4 border border-green-400 rounded-md mb-4 cursor-pointer hover:bg-green-900/30 transition-all"
                  onClick={() => openModal(award)}
                >
                  <div className="pl-4">
                    {"{"}
                    <div className="pl-4">
                      <span className="code-param">title</span>:{" "}
                      <span className="text-green-300">'{award.title}'</span>,
                      <br />
                      <span className="code-param">organization</span>:{" "}
                      <span className="text-green-300">'{award.organization}'</span>,
                      <br />
                      <span className="code-param">year</span>:{" "}
                      <span className="text-green-300">'{award.year}'</span>,
                      <br />
                      <span className="code-param">category</span>:{" "}
                      <span className="text-green-300">'{award.category}'</span>,
                      <br />
                      <span className="code-param">impact</span>:{" "}
                      <span className="text-gray-300">'{award.description}'</span>
                    </div>
                    {"}"}
                  </div>
                </div>
              ))}
              ];
            </div>

            <div className="mt-8">
              <div className="code-function">{"achievement-highlights"}</div>
              <div className="pl-4 mt-4 grid gap-4">
                <div className="terminal-card p-4 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🏆</span>
                    <span className="text-green-300">Professional Excellence</span>
                  </div>
                  <p className="mt-2 text-gray-300 pl-9">
                    Consistently recognized for delivering high-impact solutions and driving innovation
                  </p>
                </div>
                <div className="terminal-card p-4 border border-green-400 rounded-md">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🎓</span>
                    <span className="text-green-300">Academic Achievement</span>
                  </div>
                  <p className="mt-2 text-gray-300 pl-9">
                    Distinguished academic performance with focus on practical applications
                  </p>
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
        </div>

        {/* Award Modal */}
        {isModalOpen && selectedAward && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
            <div className="bg-gray-900 border-2 border-green-400 rounded-lg p-6 max-w-2xl w-full mx-4 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-green-400 hover:text-green-300"
              >
                <span className="text-2xl">×</span>
              </button>
              
              <div className="celebration-modal">
                <div className="text-center">
                  <h3 className="text-2xl text-green-400 font-bold mb-4">{selectedAward.title}</h3>
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      {/* Celebration effects */}
                      <div className="absolute -inset-4">
                        <div className="w-full h-full animate-spin-slow opacity-30 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full blur-lg"></div>
                      </div>
                      <img
                        src={selectedAward.image}
                        alt={selectedAward.title}
                        className="w-64 h-64 object-contain rounded-lg border-2 border-green-400"
                        onError={(e) => {
                          e.target.src = '/awards/default-award.png';
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-green-300 mb-2">{selectedAward.organization} • {selectedAward.year}</div>
                  <p className="text-gray-300">{selectedAward.description}</p>
                  
                  <div className="mt-6 flex justify-center space-x-2">
                    {Array(5).fill(null).map((_, i) => (
                      <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 200}ms` }}>
                        🎉
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards;