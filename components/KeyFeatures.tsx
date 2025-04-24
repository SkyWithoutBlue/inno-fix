import React from 'react';

const KeyFeatures = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1400px] mx-auto px-4 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Выгодная цена */}
          <div>
            <h3 className="text-[22px] font-bold mb-2">Выгодная цена</h3>
            <div className="w-full h-[2px] bg-[#032a62] mb-4"></div>
            <p className="text-[16px]">
              Собственное производство позволяет нам снизить издержки и предлагать конкурентоспособные цены без посредников.
            </p>
          </div>

          {/* Гарантированное качество */}
          <div>
            <h3 className="text-[22px] font-bold mb-2">Гарантированное качество</h3>
            <div className="w-full h-[2px] bg-[#032a62] mb-4"></div>
            <p className="text-[16px]">
              Многолетний опыт, строгий контроль на всех этапах производства и ручная проверка каждой детали более чем 100 специалистами обеспечивают высокое качество продукции.
            </p>
          </div>

          {/* Высокая скорость */}
          <div>
            <h3 className="text-[22px] font-bold mb-2">Высокая скорость</h3>
            <div className="w-full h-[2px] bg-[#032a62] mb-4"></div>
            <p className="text-[16px]">
              Благодаря современным технологиям и эффективной логистике, мы обеспечиваем своевременную доставку и оперативное производство для наших партнеров по всему миру.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
