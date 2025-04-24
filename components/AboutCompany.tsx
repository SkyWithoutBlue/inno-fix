import React from 'react';
import Image from 'next/image';

const AboutCompany: React.FC = () => {
  return (
    <div className="full-width">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col xl:flex-row xl:items-start">
          {/* Левая колонка с изображением */}
          <div className="relative xl:w-[634px] xl:h-[475px]">
            <Image
              src="/assets/Company.png"
              alt="INNO LINK LLC"
              width={1000}
              height={600}
              className="w-full h-auto object-cover"
              unoptimized
            />
          </div>

          {/* Правая колонка с текстом */}
          <div className="flex flex-col xl:pl-[21px] xl:pt-[14px] mt-6 xl:mt-0">
            {/* Заголовок с логотипом */}
            <div className="flex items-center gap-4 mb-[30px]">
              <Image
                src="/assets/LOGO_INNO_LINK_LLC-P.png"
                alt="INNO LINK LLC Logo"
                width={110}
                height={109}
                className="w-[110px] h-auto"
              />
              <h2 className="section-title">О КОМПАНИИ</h2>
            </div>

            {/* Описание */}
            <div className="max-w-[511px]">
              <p className="section-text">
                <strong>INNO LINK LLC</strong> — это международная производственная компания,
                специализирующаяся на выпуске <strong>высококачественных компонентов</strong> для
                автомобильной, судостроительной и полупроводниковой промышленности. Благодаря
                современным технологиям и строгому контролю качества компания обеспечивает
                надежность и долговечность своей продукции.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
