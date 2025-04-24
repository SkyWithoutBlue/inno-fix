import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const Advantages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    // Функция для обновления ширины окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Устанавливаем начальное значение и добавляем слушатель изменения размера
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Стили для текстовых блоков в зависимости от размера экрана
  const getTextBlockStyle = () => {
    if (windowWidth >= 1440) {
      return { maxWidth: '400px' }; // Более широкие блоки для больших экранов
    }
    return {};
  };

  return (
    <section ref={sectionRef} className="bg-white py-[60px]">
      <div className={`max-w-[1400px] mx-auto px-4 md:px-[60px] ${windowWidth >= 1440 ? 'max-w-[1440px]' : ''}`}>
        <div className="xl:flex xl:items-center xl:justify-between gap-6">
          <div className={`xl:w-1/2 ${windowWidth >= 1440 ? 'xl:w-3/5' : ''}`}>
            <div className="mb-12 xl:mb-8">
              <div style={{ fontSize: '30px', fontWeight: 600 }} data-customstyle="yes">
                Наши преимущества
              </div>
              <p className={`text-[18px] leading-[1.55] ${windowWidth >= 1440 ? 'max-w-[900px]' : 'max-w-[800px]'}`}>
                Мы стремимся к постоянному развитию и совершенствованию, предлагая качественные, надежные, быстрые и доступные решения в индустрии.
              </p>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-10 ${windowWidth >= 1440 ? 'gap-x-12' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-[3.5px]">
                  <div className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM24.714 11.5566L23.2235 10.1309L13.6399 20.1502L9.2292 15.7395L7.7708 17.198L13.6726 23.0998L24.714 11.5566Z" fill="rgb(3, 42, 98)"/>
                    </svg>
                  </div>
                </div>
                <div style={getTextBlockStyle()}>
                  <h3 className="text-[22px] font-bold mb-2">Инновационные технологии</h3>
                  <p className="text-[20px]">Используем передовые методы проектирования и производства.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-[3.5px]">
                  <div className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM24.714 11.5566L23.2235 10.1309L13.6399 20.1502L9.2292 15.7395L7.7708 17.198L13.6726 23.0998L24.714 11.5566Z" fill="rgb(3, 42, 98)"/>
                    </svg>
                  </div>
                </div>
                <div style={getTextBlockStyle()}>
                  <h3 className="text-[22px] font-bold mb-2 whitespace-nowrap">Высочайшее качество</h3>
                  <p className="text-[20px]">Многоуровневый контроль качества на каждом этапе позволяет нам предлагать продукцию высочайшего качества.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-[3.5px]">
                  <div className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM24.714 11.5566L23.2235 10.1309L13.6399 20.1502L9.2292 15.7395L7.7708 17.198L13.6726 23.0998L24.714 11.5566Z" fill="rgb(3, 42, 98)"/>
                    </svg>
                  </div>
                </div>
                <div style={getTextBlockStyle()}>
                  <h3 className="text-[22px] font-bold mb-2 whitespace-nowrap">Гибкий подход</h3>
                  <p className="text-[20px]">Индивидуальная работа с клиентами и кастомизация продукции.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-[3.5px]">
                  <div className="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31ZM24.714 11.5566L23.2235 10.1309L13.6399 20.1502L9.2292 15.7395L7.7708 17.198L13.6726 23.0998L24.714 11.5566Z" fill="rgb(3, 42, 98)"/>
                    </svg>
                  </div>
                </div>
                <div style={getTextBlockStyle()}>
                  <h3 className="text-[22px] font-bold mb-2 whitespace-nowrap">Глобальное присутствие</h3>
                  <p className="text-[20px]">Более 1000 парнеров по всему миру.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`xl:w-1/2 mt-12 xl:mt-0 ${windowWidth >= 1440 ? 'xl:w-2/5' : ''}`}>
            <div className="w-full h-[146px] md:h-[400px] xl:h-[293px] relative max-w-[280px] md:max-w-full xl:max-w-[560px] mx-auto">
              <Image
                src="https://optim.tildacdn.com/tild3533-3636-4462-a661-343966636538/-/format/webp/WhatsApp_Image_2025-.jpeg"
                alt="Global presence map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
