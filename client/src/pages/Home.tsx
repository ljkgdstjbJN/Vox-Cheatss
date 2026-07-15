import AnimatedBackground from '@/components/AnimatedBackground';
import { useState } from 'react';

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const handleDiscordClick = () => {
    window.open('https://discord.gg/GrVguzE5n', '_blank');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Fundo animado com chamas */}
      <AnimatedBackground />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl text-center">
          {/* Ícone VOX CHEATS com brilho neon */}
          <div className="mb-8 sm:mb-12 animate-slide-in-down">
            <div className="inline-block relative">
              {/* Brilho neon ao redor do ícone */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-50"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
                  width: '100%',
                  height: '100%',
                }}
              />
              
              {/* Ícone */}
              <img
                src="/manus-storage/vox-cheats-icon_3284c05d.png"
                alt="VOX CHEATS Logo"
                className="relative w-32 sm:w-40 md:w-48 h-auto mx-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.6))',
                }}
              />
            </div>
          </div>

          {/* Título principal com efeito neon */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tighter animate-slide-in-down"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#A855F7',
              textShadow: `
                0 0 10px rgba(168, 85, 247, 0.5),
                0 0 20px rgba(138, 43, 226, 0.3),
                0 0 30px rgba(168, 85, 247, 0.2),
                0 0 40px rgba(168, 85, 247, 0.1)
              `,
              letterSpacing: '0.05em',
            }}
          >
            VOX CHEATS
          </h1>

          {/* Subtítulo */}
          <p
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light tracking-wide animate-slide-in-up"
            style={{
              fontFamily: 'Space Mono, monospace',
              color: '#A855F7',
              opacity: 0.9,
              textShadow: '0 0 10px rgba(168, 85, 247, 0.3)',
            }}
          >
            Entre no nosso servidor do Discord e faça parte da comunidade
          </p>

          {/* Botão Discord Premium */}
          <div className="animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={handleDiscordClick}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="relative group px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-xl sm:text-2xl md:text-3xl font-bold rounded-lg transition-all duration-300 ease-out"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: isHovering
                  ? 'linear-gradient(135deg, #A855F7 0%, #8A2BE2 100%)'
                  : 'linear-gradient(135deg, #8A2BE2 0%, #6B21A8 100%)',
                color: '#050505',
                boxShadow: isHovering
                  ? `
                    0 0 30px rgba(168, 85, 247, 0.8),
                    0 0 60px rgba(138, 43, 226, 0.6),
                    inset 0 0 20px rgba(168, 85, 247, 0.3)
                  `
                  : `
                    0 0 20px rgba(168, 85, 247, 0.5),
                    0 0 40px rgba(138, 43, 226, 0.3)
                  `,
                transform: isHovering ? 'scale(1.08)' : 'scale(1)',
                border: '2px solid rgba(168, 85, 247, 0.5)',
              }}
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                {/* Ícone Discord SVG */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="transition-transform duration-300"
                  style={{
                    transform: isHovering ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg)',
                  }}
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.395-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.009-.119c.125-.093.25-.19.371-.287a.075.075 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.195.371.288a.072.072 0 0 1-.008.119c-.598.35-1.225.645-1.873.89a.07.07 0 0 0-.037.099c.36.687.772 1.341 1.225 1.962a.078.078 0 0 0 .084.028a20.023 20.023 0 0 0 6.002-3.03a.074.074 0 0 0 .032-.057c.5-4.718-.838-8.812-3.54-12.46a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.965-2.157-2.156c0-1.193.93-2.157 2.157-2.157c1.226 0 2.157.964 2.157 2.157c0 1.19-.93 2.155-2.157 2.155zm7.975 0c-1.183 0-2.157-.965-2.157-2.156c0-1.193.93-2.157 2.157-2.157c1.226 0 2.157.964 2.157 2.157c0 1.19-.931 2.155-2.157 2.155z" />
                </svg>
                <span>ENTRAR NO DISCORD</span>
              </div>
            </button>

            {/* Efeito de brilho adicional ao hover */}
            {isHovering && (
              <div
                className="absolute inset-0 rounded-lg blur-2xl opacity-50 -z-10"
                style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #8A2BE2 100%)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            )}
          </div>

          {/* Texto decorativo */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center opacity-60">
            <p
              className="text-xs sm:text-sm tracking-widest uppercase"
              style={{
                fontFamily: 'Space Mono, monospace',
                color: '#8A2BE2',
              }}
            >
              ✦ Comunidade Premium ✦ Servidor Exclusivo ✦
            </p>
          </div>
        </div>
      </div>

      {/* Efeito de ondas de energia nas bordas */}
      <div
        className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(76, 29, 149, 0.1) 100%)',
        }}
      />
    </div>
  );
          }
