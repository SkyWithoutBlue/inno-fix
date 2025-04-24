import React from 'react';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const ProductSection = ({ title, images, features }: { title: string, images: string[], features: string[] }) => (
  <div className="mb-20">
    <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Левая часть со свайпером */}
      <div className="">
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="xl:!w-[600px] xl:!h-[450px] md:!w-[400px] md:!h-[300px] lg:!w-[500px] lg:!h-[375px] w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[4/3] relative">
                  <div
                    className="w-full h-full xl:!w-[600px] xl:!h-[450px] md:!w-[400px] md:!h-[300px] lg:!w-[500px] lg:!h-[375px]"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !left-[20px]" />
            <div className="swiper-button-next !text-black !bg-[#e8e8e8] !w-[30px] !h-[30px] !right-[20px]" />
          </Swiper>
        </div>
      </div>

      {/* Правая часть с заголовком и кругами */}
      <div className="w-full lg:w-auto flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-[22px] leading-[34px] mb-2">{title}</h2>
          <div className="w-[300px] h-[2px] bg-[#032a62]" />
        </div>
        <div className="flex flex-nowrap items-center justify-center">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <div className="circle w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] flex items-center justify-center border border-[#032a62] rounded-full">
                  <div className="text-[10px] sm:text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] px-2 sm:px-3 md:px-4 text-center" style={{ lineHeight: '1.2' }}>
                    {feature}
                  </div>
                </div>
              </div>
              {index < features.length - 1 && (
                <div
                  className="text-[#4e6991] md:text-[18px] lg:text-[20px]"
                  style={{
                    width: '11px',
                    height: '18px',
                    fontSize: '14px',
                    lineHeight: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '0.5px',
                    marginRight: '0.5px'
                  }}
                >
                  +
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ProductGallery: React.FC = () => {
  const slidingPlatesImages = [
    '/images/plates/SLP1.jpg',
    '/images/plates/SLP2.jpg',
    '/images/plates/SLP3.jpg',
    '/images/plates/SLP4.jpg',
    '/images/plates/SLP5.jpg'
  ];

  const threadedPartsImages = [
    'https://static.tildacdn.com/tild6632-6437-4933-a531-313833653333/1_Annular_Gear.png',
    'https://static.tildacdn.com/tild6433-6231-4839-b964-313264333235/2_Helical_Gear.jpg',
    'https://static.tildacdn.com/tild6163-6439-4433-a166-386236323166/3_Herring_Bone_Gear.jpg',
    'https://static.tildacdn.com/tild6335-3638-4433-a363-386639363563/4_Hypoid_Gear.jpg',
    'https://static.tildacdn.com/tild3839-6337-4535-b536-373731316634/5_internal_gear.jpg',
    'https://static.tildacdn.com/tild6139-3065-4962-b433-383439383363/6_Pinion_Shaft.jpg',
    'https://static.tildacdn.com/tild6466-3763-4131-b136-353562313539/7_Rack_And_Pinion.jpg',
    'https://static.tildacdn.com/tild6431-3238-4838-a332-633233643130/8_Screw_Gear.jpg',
    'https://static.tildacdn.com/tild3839-6436-4362-b161-303462393064/9_planetary-gear.jpeg',
    'https://static.tildacdn.com/tild3262-6363-4132-b134-376132323165/10_Plastic_Gear.jpg',
    'https://static.tildacdn.com/tild3635-3661-4463-a435-653437396633/11_Spiral_Bevel_Gear.jpg',
    'https://static.tildacdn.com/tild3636-6265-4262-b661-366438306362/12_Spline_Shaft.jpg',
    'https://static.tildacdn.com/tild3863-6532-4836-a136-666337653236/13_Spur_Gear.jpg',
    'https://static.tildacdn.com/tild6463-3039-4231-a362-386335313337/14_timing_pulley.jpg',
    'https://static.tildacdn.com/tild3164-6134-4337-b734-326162346639/15_Worm_Gear.jpg'
  ];

  const springVentsImages = [
    'https://static.tildacdn.com/tild3666-3837-4763-b266-663632313561/Housing.jpg',
    'https://static.tildacdn.com/tild3536-3261-4661-b964-336238633334/SP1.jpg',
    'https://static.tildacdn.com/tild6432-3762-4537-a166-303561653130/SP2.jpg',
    'https://static.tildacdn.com/tild3061-3266-4366-a663-353535393339/SP3.jpg',
    'https://static.tildacdn.com/tild3564-6562-4263-a334-326530386165/SP4.jpg',
    'https://static.tildacdn.com/tild3330-3062-4462-a164-343562363366/SP6.jpg',
    'https://static.tildacdn.com/tild3364-6335-4735-a465-643230333861/SP7.jpg'
  ];

  return (
    <div className="relative max-w-[1400px] mx-auto px-4">
      <ProductSection
        title="Пластины скольжения"
        images={slidingPlatesImages}
        features={[
          'Разработка\n3д\nчертежей',
          'Современный\nсамосмазывающий\nматериал',
          'Массовое\nпроизводство'
        ]}
      />

      <ProductSection
        title="Изделия с резьбой"
        images={threadedPartsImages}
        features={[
          'Высокотехнологичное\nпроизводство',
          'Производство\nиндивидуальных\nмоделей',
          'Высокое\nкачество'
        ]}
      />

      <ProductSection
        title="Spring vents"
        images={springVentsImages}
        features={[
          'Высокоскоростная\nобработка',
          'Сверхточность',
          'Быстрая\nдоставка'
        ]}
      />
    </div>
  );
};

export default ProductGallery;
