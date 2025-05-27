import React, { useState, useEffect, useCallback } from 'react';
import ResumeViewer from './ResumeViewer';

const Navigation = () => {  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [position, setPosition] = useState({ x: 20, y: 20 });

  const navItems = [
    { 
      id: 'home',
      title: "Home",
      label: "view-home",
      description: "Return to main screen",
      link: "/",
      icon: "🏠"
    },
    { 
      id: 'about',
      title: "About",
      label: "view-about",
      description: "View developer profile",
      link: "/about",
      icon: "👨‍💻"
    },
    { 
      id: 'experience',
      title: "Experience",
      label: "view-experience",
      description: "Professional work history",
      link: "/experience",
      icon: "💼"
    },
    { 
      id: 'education',
      title: "Education",
      label: "view-education",
      description: "Academic background",
      link: "/education",
      icon: "🎓"
    },
    { 
      id: 'skills',
      title: "Skills & Technologies",
      label: "view-skills",
      description: "Technical expertise",
      link: "/skills",
      icon: "⚡"
    },
    { 
      id: 'certifications',
      title: "Professional Certifications",
      label: "view-certifications",
      description: "Professional certifications and achievements",
      link: "/certifications",
      icon: "📜"
    },
    { 
      id: 'projects',
      title: "Projects",
      label: "view-projects",
      description: "Portfolio projects",
      link: "/projects",
      icon: "🚀"
    },
    { 
      id: 'awards',
      title: "Awards & Achievements",
      label: "view-awards",
      description: "Recognition and accomplishments",
      link: "/awards",
      icon: "🏆"
    },
    { 
      id: 'contact',
      title: "Contact",
      label: "view-contact",
      description: "Get in touch",
      link: "/contact",
      icon: "📧"
    },
    { 
      id: 'resume',
      title: "Resume",
      label: "view-resume",
      description: "View interactive resume",
      link: "#",
      icon: "📄",
      isKey: true
    }
  ];

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Command/Ctrl + K to toggle palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
      // Escape to close palette
      if (e.key === 'Escape') {
        setIsPaletteOpen(false);
      }
    };

    // Improved scroll position calculation
    const calculateActiveSection = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Find the section that takes up the most viewport space
      let maxVisibleSection = null;
      let maxVisibleHeight = 0;

      sections.forEach(section => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          maxVisibleSection = section;
        }
      });

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection.id);
      }
    };

    const debouncedScroll = debounce(calculateActiveSection, 100);
    window.addEventListener('scroll', debouncedScroll);
    window.addEventListener('keydown', handleKeyPress);
    
    // Initial calculation
    calculateActiveSection();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  console.log(navItems[0])
  const filteredItems = navItems.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleClick = (id) => {
    setIsPaletteOpen(false);
    
    if (id === 'resume') {
      // Update scroll position before opening resume
      const scrollPosition = window.scrollY;
      setIsResumeOpen(true);
      // Maintain scroll position
      window.scrollTo(0, scrollPosition);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      // Add polyfill for smooth scroll behavior
      if ('scrollBehavior' in document.documentElement.style) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback smooth scroll for browsers that don't support scrollBehavior
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;
        
        const animation = currentTime => {
          if (!start) start = currentTime;
          const progress = currentTime - start;
          const easeInOutCubic = t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          const run = easeInOutCubic(Math.min(progress / duration, 1));
          window.scrollTo(0, startPosition + distance * run);
          if (progress < duration) window.requestAnimationFrame(animation);
        };
        
        window.requestAnimationFrame(animation);
      }
      setIsPaletteOpen(false);
      setSearchQuery('');
    }
  };

  const handleDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return;
    setPosition({
      x: e.clientX - 150,
      y: e.clientY - 20
    });
  };

  return (
    <>
      {/* Floating Command Button */}
      <div className="command-button-wrapper">
        <button
          onClick={() => setIsPaletteOpen(true)}
          className="fixed z-50 p-3 rounded-full bg-gray-900 border border-green-400 text-green-400 hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-green-400/20 group"
          style={{ 
            left: `${position.x}px`, 
            top: `${position.y}px`,
            cursor: 'move'
          }}
          draggable="true"
          onDragEnd={handleDrag}
          aria-label="Open navigation menu"
        >
          <span className="text-lg group-hover:animate-pulse">⌘</span>
          {/* Tooltip */}
          <div className="command-tooltip">
            <div className="tooltip-content">
              <p className="tooltip-title">Quick Navigation <span className="text-xs">⌘K</span></p>
              <p className="tooltip-hint">Press ⌘K or click to navigate</p>
            </div>
            <div className="tooltip-arrow"></div>
          </div>
        </button>
      </div>

      {/* Command Palette */}
      {isPaletteOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsPaletteOpen(false)}
          />
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50">
            <div className="terminal-window command-palette">
              <div className="terminal-header">
                <div className="terminal-button red"></div>
                <div className="terminal-button yellow"></div>
                <div className="terminal-button green"></div>
                <span className="ml-4 text-green-400 text-sm">quick-nav.exe</span>
              </div>
              
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <span className="text-green-400 mr-2">{">"}</span>
                  <input
                    type="text"
                    className="w-full bg-transparent border-none outline-none text-white placeholder-gray-500"
                    placeholder="Type to search sections..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                </div>

                <div className="max-h-96 overflow-y-auto custom-scrollbar">
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleClick(item.id)}
                      className={`w-full text-left p-3 hover:bg-gray-800 rounded-md transition-colors duration-200 flex items-center group ${
                        activeSection === item.id ? 'bg-green-400/10 text-green-400' : 'text-gray-300'
                      } ${item.isKey ? 'key-point' : ''}`}
                    >
                      <span className="text-xl mr-3 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div>
                        <div className="font-mono code-syntax">
                          {item.label}
                          {activeSection === item.id && (
                            <span className="ml-2 text-xs opacity-60">active</span>
                          )}
                          {item.isKey && (
                            <span className="ml-2 text-xs text-highlight">key-section</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-400">
                          {item.description}
                        </div>
                      </div>
                      <span className="ml-auto text-xs text-gray-500 group-hover:text-green-400">
                        Enter ↵
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-500 flex items-center justify-between">
                    <span>Press <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">Esc</kbd> to close</span>
                    <span>
                      <kbd className="px-2 py-1 bg-gray-800 rounded text-xs">⌘</kbd> + 
                      <kbd className="px-2 py-1 bg-gray-800 rounded text-xs ml-1">K</kbd> to open
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navigation;