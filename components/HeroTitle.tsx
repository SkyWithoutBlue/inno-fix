import React from 'react';

const HeroTitle: React.FC = () => {
  return (
    <div className="w-full min-h-screen  flex flex-col items-center justify-center text-center px-4 relative">
      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl  md:text-5xl break-all lg:text-6xl text-white font-normal mb-4 md:mb-6">
        INNO LINK LLC
      </h1>

      {/* Подзаголовок */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-3xl px-4">
        Технологии будущего, качество без компромиссов!
      </p>

      {/* Кнопки */}
      <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
        <button className="px-6 py-2 bg-white text-black hover:bg-opacity-90 transition-all text-sm sm:text-base">
          Продуктыы
        </button>
        <button className="px-6 py-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all text-sm sm:text-base">
          Контакты
        </button>
      </div>
    </div>
  );
};

export default HeroTitle;
