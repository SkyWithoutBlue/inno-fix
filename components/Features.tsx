import { useEffect, useRef, useState } from 'react';

const Features: React.FC = () => {
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

  const features = [
    {
      title: 'Выгодная цена',
      description: 'Собственное производство позволяет нам снизить издержки и предлагать конкурентоспособные цены без посредников.'
    },
    {
      title: 'Гарантированное качество',
      description: (
        <>
          Многолетний опыт, строгий контроль на всех этапах производства и ручная проверка каждой детали более чем <strong>100 специалистами</strong> обеспечивают высокое качество продукции.
        </>
      )
    },
    {
      title: 'Высокая скорость',
      description: (
        <>
          Благодаря современным технологиям и эффективной логистике, мы обеспечиваем <strong>своевременную доставку</strong> и <strong>оперативное производство</strong> для наших партнеров по всему миру.
        </>
      )
    }
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-[#032A62] text-2xl">✓</div>
              <div>
                <h3 className="text-[22px] font-bold mb-2">{feature.title}</h3>
                <div className="w-full h-[2px] bg-[#032a62] mb-4"></div>
                <p className="text-[18px]">{feature.description}</p>
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

export default Features;
