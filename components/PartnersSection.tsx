const partners: { src: string }[] = [
  // ... массив с партнерами остается тем же ...
];

const PartnersSection = () => {
  return (
    <div className="relative h-[697px]">
      {/* Фоновое изображение */}
      <div 
        className="t-cover__carrier absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(https://optim.tildacdn.com/tild6665-3265-4239-b438-633632373939/-/format/webp/WhatsApp_Image_2025-.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      />
      <div className="relative z-10 h-full">
           
            </div>

            {/* Первый ряд */}
            <div className="text-[30px] !text-white text-center font-[Arial]">
                Партнеры
              </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8 w-full">
              {partners.slice(0, 6).map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    className="t1074__img max-w-[120px] w-full h-auto"
                    src={partner.src}
                    alt=""
                  />
                </div>
              ))}
            </div>

            {/* Второй ряд */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 w-full">
              {partners.slice(6).map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    className="t1074__img max-w-[120px] w-full h-auto"
                    src={partner.src}
                    alt=""
                  />
                </div>
              ))}
            </div>
    
        </div>
  
  );
};

export default PartnersSection; 