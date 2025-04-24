import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-white w-full">
      <div className="w-full">
        <div className="flex flex-col 2xl:flex-row gap-[10px] items-start max-w-[1920px] mx-auto justify-between">
          {/* Левая колонка с изображением */}
          <div className="w-full 2xl:w-[1014px]">
            <div className="w-full h-[760px] relative">
              <Image
                src="/assets/about-company-bg.jpg"
                alt="About company background"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>

          {/* Правая колонка с текстом */}
          <div className="w-full 2xl:w-[800px] pl-[10px]">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
              <img
                src="https://optim.tildacdn.com/tild3832-3530-4263-a564-383539636336/-/resize/132x/-/format/webp/image.png"
                alt="INNO LINK LLC Logo"
                className="w-[176px] h-[128px] object-contain mr-[10px]"
              />
              <div
                className="tn-atom text-[42px] font-bold flex"
                style={{
                  transformOrigin: 'center center',
                  lineHeight: '46px'
                }}
              >
                О КОМПАНИИ
              </div>
            </div>
            <div
              className="text-[30px] mt-[60px]"
              style={{
                transformOrigin: 'center center',
                lineHeight: '50px',
                verticalAlign: 'middle',
                color: '#000000',
                fontFamily: 'Arial, Arial, sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.5px',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderStyle: 'solid',
                wordBreak: 'normal'
              }}
            >
              <strong className="text-[32px]">INNO LINK LLC</strong> — это международная производственная компания, специализирующаяся на выпуске <strong>высококачественных компонентов</strong> для автомобильной, судостроительной и полупроводниковой промышленности. Благодаря современным технологиям и строгому контролю качества компания обеспечивает надежность и долговечность своей продукции.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
