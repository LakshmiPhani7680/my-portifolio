import React, { useState, useEffect } from 'react';

const ResumeViewer = ({ isOpen, onClose }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen && !isUnlocked) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUnlocked(true);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isOpen, isUnlocked]);

  const handleUnlock = () => {
    setShowPdf(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="terminal-window w-full max-w-4xl mx-4">
        <div className="terminal-header">
          <div className="terminal-button red" onClick={onClose}></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
          <span className="ml-4 text-green-400 text-sm">resume-viewer.exe</span>
        </div>
        
        <div className="p-6 bg-gray-900">
          {!isUnlocked ? (
            <div className="text-center space-y-6">
              <h3 className="text-2xl text-green-400 font-mono">Decrypting Resume...</h3>
              <div className="w-full bg-gray-800 rounded-full h-4 relative overflow-hidden">
                <div
                  className="bg-green-400 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent animate-[gradient_2s_linear_infinite]" />
              </div>
              <p className="text-gray-400 font-mono">{progress}% complete</p>
              <div className="flex justify-center space-x-2">
                {Array(5).fill(null).map((_, i) => (
                  <span 
                    key={i} 
                    className="text-2xl animate-bounce" 
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    {progress < 100 ? '⚡' : '🎉'}
                  </span>
                ))}
              </div>
            </div>
          ) : !showPdf ? (
            <div className="text-center space-y-6">
              <h3 className="text-2xl text-green-400 font-mono">Resume Decrypted Successfully!</h3>
              <div className="flex justify-center">
                <button
                  onClick={handleUnlock}
                  className="code-button group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    <span className="code-function">view-resume</span>()
                  </span>
                  <div className="absolute inset-0 bg-green-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ) : (
            <div className="h-[80vh]">
              <embed
                src="src/assets/pdfs/Resume_Putrevu_Phani.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="rounded-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;