import { useEffect, useRef } from 'react';

interface Flame {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

interface Smoke {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flamesRef = useRef<Flame[]>([]);
  const smokesRef = useRef<Smoke[]>([]);
  const sparklesRef = useRef<Sparkle[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Função para gerar chamas
    const createFlame = () => {
      const id = idRef.current++;
      const x = Math.random() * 100;
      const y = 100 + Math.random() * 20;
      const size = 40 + Math.random() * 80;
      const duration = 2 + Math.random() * 1.5;
      const delay = Math.random() * 0.5;
      const drift = (Math.random() - 0.5) * 30;
      const opacity = 0.6 + Math.random() * 0.4;

      const flame: Flame = { id, x, y, size, duration, delay, drift, opacity };
      flamesRef.current.push(flame);

      const flameEl = document.createElement('div');
      flameEl.className = 'absolute animate-flame-flicker';
      flameEl.style.cssText = `
        left: ${x}%;
        bottom: 0;
        width: ${size}px;
        height: ${size * 1.5}px;
        background: radial-gradient(ellipse at center, rgba(168, 85, 247, ${opacity}) 0%, rgba(138, 43, 226, ${opacity * 0.7}) 40%, transparent 70%);
        filter: blur(${size * 0.3}px);
        --drift: ${drift}px;
        animation: flameRise ${duration}s ease-out ${delay}s forwards, flameWave ${duration * 0.8}s ease-in-out ${delay}s infinite;
        pointer-events: none;
        z-index: 1;
      `;

      container.appendChild(flameEl);

      setTimeout(() => {
        flameEl.remove();
        flamesRef.current = flamesRef.current.filter(f => f.id !== id);
      }, (duration + delay) * 1000);
    };

    // Função para gerar fumaça
    const createSmoke = () => {
      const id = idRef.current++;
      const x = Math.random() * 100;
      const y = 100 + Math.random() * 30;
      const size = 60 + Math.random() * 100;
      const duration = 3 + Math.random() * 2;
      const delay = Math.random() * 0.8;
      const drift = (Math.random() - 0.5) * 40;

      const smoke: Smoke = { id, x, y, size, duration, delay, drift };
      smokesRef.current.push(smoke);

      const smokeEl = document.createElement('div');
      smokeEl.className = 'absolute';
      smokeEl.style.cssText = `
        left: ${x}%;
        bottom: 0;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(ellipse at center, rgba(76, 29, 149, 0.3) 0%, transparent 70%);
        filter: blur(${size * 0.4}px);
        --drift: ${drift}px;
        animation: smokeRise ${duration}s ease-out ${delay}s forwards;
        pointer-events: none;
        z-index: 0;
      `;

      container.appendChild(smokeEl);

      setTimeout(() => {
        smokeEl.remove();
        smokesRef.current = smokesRef.current.filter(s => s.id !== id);
      }, (duration + delay) * 1000);
    };

    // Função para gerar faíscas
    const createSparkle = () => {
      const id = idRef.current++;
      const x = Math.random() * 100;
      const y = 100 + Math.random() * 40;
      const size = 2 + Math.random() * 4;
      const duration = 1.5 + Math.random() * 1;
      const delay = Math.random() * 0.6;
      const drift = (Math.random() - 0.5) * 50;

      const sparkle: Sparkle = { id, x, y, size, duration, delay, drift };
      sparklesRef.current.push(sparkle);

      const sparkleEl = document.createElement('div');
      sparkleEl.className = 'absolute rounded-full';
      sparkleEl.style.cssText = `
        left: ${x}%;
        bottom: 0;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(168, 85, 247, 1) 0%, rgba(168, 85, 247, 0.5) 100%);
        box-shadow: 0 0 ${size * 2}px rgba(168, 85, 247, 0.8);
        --drift: ${drift}px;
        animation: sparkleFloat ${duration}s ease-out ${delay}s forwards;
        pointer-events: none;
        z-index: 2;
      `;

      container.appendChild(sparkleEl);

      setTimeout(() => {
        sparkleEl.remove();
        sparklesRef.current = sparklesRef.current.filter(sp => sp.id !== id);
      }, (duration + delay) * 1000);
    };

    // Criar chamas, fumaça e faíscas continuamente
    const flameInterval = setInterval(createFlame, 300);
    const smokeInterval = setInterval(createSmoke, 800);
    const sparkleInterval = setInterval(createSparkle, 400);

    // Criar algumas chamas iniciais
    for (let i = 0; i < 3; i++) {
      setTimeout(createFlame, i * 200);
      setTimeout(createSmoke, i * 400);
      setTimeout(createSparkle, i * 300);
    }

    return () => {
      clearInterval(flameInterval);
      clearInterval(smokeInterval);
      clearInterval(sparkleInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, #050505 0%, #0F0F1F 50%, #050505 100%)',
      }}
    >
      {/* Camada de iluminação dinâmica */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Efeito de nevoa escura nas laterais */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(90deg, 
              rgba(76, 29, 149, 0.2) 0%, 
              transparent 20%, 
              transparent 80%, 
              rgba(76, 29, 149, 0.2) 100%
            )
          `,
        }}
      />
    </div>
  );
}
