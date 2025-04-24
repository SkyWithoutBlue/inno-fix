import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const QualityControl: React.FC = () => {
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

  const checkItems = [
    {
      text: 'Тщательный контроль на всех этапах производства'
    },
    {
      text: 'Проверка всей партии продукции на брак'
    },
    {
      text: 'Финальная ручная проверка более чем 100 специалистами'
    }
  ];

  return (
    <div className="py-[60px] bg-[#032a62]" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-[30px] text-white mb-[40px] md:mb-[20px]">
            Контроль качества
          </h2>
          <div className="text-[20px] text-white max-w-[560px] mx-auto mb-[90px] md:mb-[45px]">
            Наша <strong>система управления качеством</strong> включает несколько уровней проверки:
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {checkItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
              style={{ animationDelay: `${(index + 2) * 0.2}s` }}
            >
              <img
                src="https://static.tildacdn.com/lib/icons/tilda/-/paint/ffffff--2-0-100/check_bullet_round_corner.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0"
              />
              <div className="text-white text-lg font-normal">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QualityControl;
