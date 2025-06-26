import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              РАБОТА ДЛЯ
              <br />
              ЦЕЛЕУСТРЕМЛЕННЫХ И<br />
              ПРИВЛЕКАТЕЛЬНЫХ
              <br />
              ДЕВУШЕК
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Стань
              <br />
              успешной
              <br />
              моделью!
            </h1>

            <p className="text-gray-300 text-lg max-w-md">
              Высокооплачиваемая работа веб-моделью в МОСКВЕ — шанс изменить
              жизнь к лучшему!
            </p>
          </div>

          <button className="bg-transparent border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            НАЧАТЬ ЗАРАБАТЫВАТЬ
          </button>
        </div>

        {/* Right Content - Neon Sign */}
        <div className="relative">
          <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
            <div className="relative">
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-500 text-sm font-medium">REC</span>
              </div>

              <div className="absolute top-4 right-4">
                <div className="w-12 h-8 border-2 border-white rounded-sm relative">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-3 bg-white"></div>
                </div>
              </div>

              <div className="text-center py-16">
                <div className="space-y-4">
                  <div className="text-yellow-400 text-4xl font-bold neon-text">
                    SAINTS & SINNERS
                  </div>
                  <div className="text-pink-500 text-6xl font-bold neon-text-pink">
                    STUDIO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow:
            0 0 10px #ffd700,
            0 0 20px #ffd700,
            0 0 30px #ffd700;
        }
        .neon-text-pink {
          text-shadow:
            0 0 10px #ff1493,
            0 0 20px #ff1493,
            0 0 30px #ff1493;
        }
      `}</style>
    </section>
  );
};

export default Hero;
