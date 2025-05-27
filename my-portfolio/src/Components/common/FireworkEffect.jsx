import React, { useState, useEffect } from 'react';

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

export default FireworkEffect;
