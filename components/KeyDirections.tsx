import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const KeyDirections: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const directions = [
    {
      img: 'https://static.tildacdn.com/tild3937-3530-4861-b166-356130396362/automotive.png',
      title: 'Производство компонентов для автомобильной отрасли'
    },
    {
      img: 'https://static.tildacdn.com/tild3637-3833-4664-b339-306631366166/car-wheel_1.png',
      title: 'Особый акцент на производство компонентов для прес-форм'
    },
    {
      img: 'https://static.tildacdn.com/tild3239-3133-4337-b137-636665623361/technology.png',
      title: 'Современные технологии и постоянные исследования'
    },
    {
      img: 'https://static.tildacdn.com/tild3139-3835-4162-b933-366263613135/network.png',
      title: 'Полное сопровождение клиентов от производства до поставки'
    }
  ];

  return (
    <div className="relative w-full" ref={sectionRef}>
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 200"
          preserveAspectRatio="none"
          className="relative block w-full rotate-180"
          style={{ height: '15vw' }}
        >
          <path
            d="M0 200h1280V0L0 195.5V200z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="t-cover__wrapper t-valign_middle w-full" style={{ height: 'auto', minHeight: '1171px' }}>
        {/* Фоновое изображение */}
        <div
          className="t-cover__carrier absolute inset-0 w-full h-full bg-cover"
          style={{
            backgroundImage: `url('https://optim.tildacdn.com/tild3335-3033-4436-a134-313765383031/-/format/webp/WhatsApp_Image_2025-.jpeg')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100%'
          }}
        />

        {/* Затемнение */}
        <div
          className="t-cover__filter absolute inset-0 w-full h-full"
          style={{
            backgroundColor: 'rgb(0, 0, 0)',
            opacity: 0.4
          }}
        />

        {/* Контент */}
        <div className=" relative z-10 py-20" data-hook-content="covercontent">
          <div className="t-width t-width_8 mx-auto">
            <div
              className={`t1031__title t-section_title t-title t-title_md text-center text-white ${isVisible ? 'animate-fadeinleft' : ''}`}
              data-animate-style="fadeinleft"
              data-animate-group="yes"
              style={{ transitionDelay: '0s' }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-12">Наши ключевые направления</div>
            </div>
          </div>

          <ul className="t1031__blockswrapper t-list__container_inrow4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12">
            {directions.map((direction, index) => (
              <li
                key={index}
                className={`t1031__col t-list__item t-item t-col t-col_3 ${isVisible ? 'animate-fadeinleft' : ''}`}
                data-animate-style="fadeinleft"
                data-animate-chain="yes"
                style={{
                  transitionDelay: `${index * 0.16}s`
                }}
              >
                <div className="t1031__wrapper flex flex-col items-center text-center p-8 hover:scale-105 transition-transform duration-300">
                  <div className="t1031__img w-[180px] h-[180px] mb-8">
                    <Image
                      src={direction.img}
                      alt={direction.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="t1031__title t-name t-name_md text-white">
                    <span className="text-xl md:text-2xl font-medium leading-relaxed">{direction.title}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Нижний треугольник */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 200"
          preserveAspectRatio="none"
          className="relative block w-full"
          style={{ height: '15vw' }}
        >
          <path
            d="M0 200h1280V0L0 195.5V200z"
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
};

export default KeyDirections;
