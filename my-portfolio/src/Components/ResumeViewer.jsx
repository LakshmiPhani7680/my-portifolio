import React, { useState, useEffect } from 'react';
import resumePdf from '../assets/pdfs/Resume_Putrevu.pdf';

const ResumeViewer = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(0);
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    if (isOpen && loading < 100) {
      const interval = setInterval(() => {
        setLoading(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isOpen]);
  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle PDF display after loading
  useEffect(() => {
    if (loading === 100) {
      setTimeout(() => setShowPdf(true), 500);
    }
  }, [loading]);

  if (!isOpen) return null;

  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50" 
      onClick={onClose}
      style={{ top: `${scrollY}px`, height: `${viewportHeight}px` }}
    >
      <div className="terminal-window w-full max-w-5xl mx-4" onClick={e => e.stopPropagation()}>
        <div className="terminal-header">
          <div className="terminal-button red" onClick={() => {
            onClose();
            setLoading(0);
            setShowPdf(false);
          }}></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
          <span className="ml-4 text-green-400 text-sm">decrypt-resume.exe</span>
        </div>
              
        <div className="p-6 bg-gray-900">
          {!showPdf ? (
            <div className="text-center space-y-6 p-8">
              <h3 className="text-2xl text-green-400 font-mono mb-8">
                {loading < 100 ? 'Decrypting Resume...' : 'Decryption Complete!'}
              </h3>
              <div className="w-full bg-gray-800 rounded-full h-4 relative overflow-hidden border border-green-500/30">
                <div
                  className="h-full rounded-full transition-all duration-300 relative overflow-hidden"
                  style={{
                    width: `${loading}%`,
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
                <span>Progress: {loading}%</span>
                <span>{loading < 100 ? 'Decrypting...' : 'Complete!'}</span>
              </div>
              {loading === 100 && (
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
                title="Resume"
                className="w-full h-full"
                style={{ border: 'none', background: 'white' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeViewer;