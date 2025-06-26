import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          О НАС
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900 via-purple-600 to-pink-600 rounded-lg p-8 text-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">СТАНЬ МОДЕЛЬЮ</h3>
                <h4 className="text-xl font-semibold text-white">
                  И ЗАРАБАТЫВАЙ
                </h4>
                <div className="text-4xl font-bold text-yellow-400">
                  ОТ 100 000₽
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="text-gray-300 text-lg leading-relaxed">
              <p className="mb-4">
                С 2019 года мы открыли три студии в Москве, которые успешно
                работают по сей день. За это время более 20 наших моделей вышли
                на доход более 50000 в месяц. В дальнейшем, мы планируем открыть
                филиал в Европе.
              </p>

              <p className="mb-4">
                Пройди собеседование, познакомься с нашей студией, и после
                несложного первого дня обучения, ты будешь готова начать
                работать и зарабатывать. Самая простая работа для девушек!
              </p>

              <p>
                В дальнейшей практике мы покажем тебе множество полезных мелочей
                и профессиональных уловок, подробнее о которых ты можешь узнать
                на студии. Начни работу веб-модели вместе с нами и, успех не
                заставит себя ждать!
              </p>
            </div>

            <button className="bg-transparent border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
              СТАТЬ МОДЕЛЬЮ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
