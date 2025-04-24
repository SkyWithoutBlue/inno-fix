const Partners = () => {
  const partners = [
    // First row
    {
      src: "/partnerLogos/IMI.png",
      style: {
        width: '130px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Continental.png",
      style: {
        width: '240px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Honda.png",
      style: {
        width: '130px',
        height: 'auto'
      }
    },

    {
      src: "/partnerLogos/SKF.png",
      style: {
        width: '180px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Nokian Tyres.png",
      style: {
        width: '220px',
        height: 'auto'
      }
    },
    // Second row
    {
      src: "/partnerLogos/himile.png",
      style: {
        width: '180px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/ADAYO.png",
      style: {
        width: '250px',
        height: 'auto'
      }
    },
    {
        src: "/partnerLogos/pirelli.png",
        style: {
          width: '280px',
          height: 'auto'
        }
      },
    {
      src: "/partnerLogos/AMETEK.png",
      style: {
        width: '200px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Hankook.png",
      style: {
        width: '220px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/FLEXTRONICS.png",
      style: {
        width: '240px',
        height: 'auto'
      }
    },
    {
      src: "/partnerLogos/Michelin.svg",
      style: {
        width: '170px',
        height: 'auto'
      }
    }
  ];

  const firstRow = partners.slice(0, 6);
  const secondRow = partners.slice(6);

  return (
    <div id="partners" className="relative min-h-[700px]">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://optim.tildacdn.com/tild6665-3265-4239-b438-633632373939/-/format/webp/WhatsApp_Image_2025-.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          height: '100%'
        }}
      />

      {/* Фильтр */}
      <div
        className="absolute inset-0"
        style={{
          height: '100%',
          backgroundColor: 'rgba(153, 153, 153, 0.7)'
        }}
      />

      {/* Контент */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-full py-8 md:py-16">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Партнеры
            </h2>
            <p className="text-base md:text-xl text-black mx-auto">
              Мы поставляем компоненты ведущим мировым производителям, их подрядчиками и компаниям-производителям.
            </p>
          </div>

          <div className="w-full max-w-[1400px]">
            {/* Контейнер для обоих рядов с адаптивным отступом */}
            <div className="space-y-12 md:space-y-16">
              {/* Первый ряд */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 items-end">
                {firstRow.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-24 md:h-32 group"
                  >
                    <img
                      src={partner.src}
                      alt=""
                      style={{
                        ...partner.style,
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                      className="object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110 "
                    />
                  </div>
                ))}
              </div>

              {/* Второй ряд */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 items-end gap-2">
                {secondRow.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center h-24 md:h-32 group"
                  >
                    <img
                      src={partner.src}
                      alt=""
                      style={{
                        ...partner.style,
                        maxWidth: '100%',
                        height: 'auto'
                      }}
                      className="object-contain transition-all duration-300 ease-in-out transform group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
