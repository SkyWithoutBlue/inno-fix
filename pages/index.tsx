import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import AboutCompany from '../components/AboutCompany';
import KeyDirections from '../components/KeyDirections';
import Advantages from '../components/Advantages';
import Features from '../components/Features';
import ProductGallery from '../components/ProductGallery';
import ResearchDevelopment from '../components/ResearchDevelopment';
import ProductionProcess from '../components/ProductionProcess';
import QualityControl from '@/components/QualityControl';
import CoverImage from '@/components/CoverImage';
import Partners from '@/components/Partners';
import FAQ from '../components/FAQ';
import About from '../components/About';

const Home: NextPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial window width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      // Update window width on resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const position = window.scrollY;
      setScrollPosition(position);

      // Минимальный эффект параллакса или полное отключение
      if (windowWidth >= 768) {
        const scrollFactor = 0.05; // Минимальное значение для легкого эффекта
        parallaxRef.current.style.transform = `translate3d(0, ${position * scrollFactor}px, 0)`;
      } else {
        parallaxRef.current.style.transform = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    setIsMounted(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted, windowWidth]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Первый блок */}
      <div
        className="t-cover relative"
        style={{
          height: windowWidth <= 414 ? '100vh' : '100vh',
          overflow: 'hidden'
        }}
      >
        {/* Обертка для параллакса */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 w-full will-change-transform"
          style={{
            height: '100vh',
            top: '0',
            transform: windowWidth < 768 ? 'none' : undefined
          }}
          data-content-cover-parallax="fixed"
          data-content-cover-height="100vh"
        >
          {/* Фоновое изображение */}
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: 'url("https://static.tildacdn.com/tild3133-3935-4533-b831-306437663762/noroot.png")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              transform: 'scale(1)',
            }}
          />
        </div>

        {/* Затемнение */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: '-webkit-linear-gradient(top, rgba(51, 51, 51, 0.4), rgba(51, 51, 51, 0.4))'
          }}
        />

        {/* t-container */}
        <div className="mx-auto pt-[80px] xs:pt-[100px] sm:pt-[60px] md:pt-0">
          {/* t-col t-col_8 */}
          <div className="w-full">
            {/* t-cover__wrapper */}
            <div
              className="flex flex-col relative z-[1] pt-[120px] items-center max-w-[1920px] mx-auto"
              style={{
                height: windowWidth <= 430 ? '100vh' : windowWidth < 640 ? '80vh' : '929px',
                paddingTop: windowWidth <= 320 ? '10px' :
                           windowWidth <= 375 ? '80px' :
                           windowWidth <= 430 ? '80px' :
                           windowWidth <= 768 ? '-20px' : '20px'
              }}
            >
              <div className="h-full">
                <div
                  data-hook-content="covercontent"
                  className="w-full items-start h-full px-[20px]"
                  style={{
                    padding: windowWidth <= 320 ? '0 20px' :
                             windowWidth <= 375 ? '0 20px' :
                             windowWidth <= 430 ? '0 20px' :
                             windowWidth <= 768 ? '0 20px 0 5px' :
                             windowWidth <= 1024 ? '0 0 0 10%' : '0 0 0 15%',
                    marginLeft: windowWidth <= 430 ? '0' : windowWidth <= 768 ? '-15px' : windowWidth <= 1024 ? '-100px' : windowWidth <= 1440 ? '-150px' : '-300px',
                    textAlign: 'left',
                    height: '100%',
                    maxWidth: windowWidth <= 768 ? '100%' : '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: windowWidth <= 320 ? 'flex-start' :
                                    windowWidth <= 375 ? 'flex-start' :
                                    windowWidth <= 430 ? 'flex-start' : 'center',
                    alignItems: 'flex-start',
                    position: 'relative',
                    left: windowWidth <= 430 ? '0' : windowWidth <= 768 ? '15px' : windowWidth <= 1024 ? '-100px' : windowWidth <= 1440 ? '-150px' : '-300px',

                  }}
                >
                  <div className="w-full items-start" style={{ marginBottom: '20px' }}>
                    <div className="t181__title t-title t-title_md w-full" style={{ marginBottom: '20px', textAlign: 'left' }}>
                      <div
                        style={{
                          fontSize: windowWidth <= 320 ? '64px' : '72px',
                          lineHeight: '1',
                          letterSpacing: '0',
                          fontFamily: 'Arial, sans-serif',
                          fontWeight: 400,
                          color: 'rgb(255, 255, 255)',
                          textAlign: 'left',
                          width: windowWidth <= 768 ? 'auto' : '525px',

                        }}
                        data-customstyle="yes"
                      >
                        {windowWidth <= 320 ? (
                          <>
                            INNO<br />
                            LINK<br />
                            LLC
                          </>
                        ) : windowWidth <= 375 ? (
                          <>
                            INNO<br />
                            LINK LLC
                          </>
                        ) : windowWidth <= 430 ? (
                          <>
                            INNO LINK<br />
                            LLC
                          </>
                        ) : (
                          <>
                            INNO LINK LLC
                          </>
                        )}
                      </div>
                    </div>
                    <div className="t181__descr t-descr t-descr_lg" style={{ marginTop: '30px', textAlign: 'left' }}>
                      <div
                        style={{
                          color: 'rgb(255, 255, 255)',
                          fontSize: windowWidth <= 768 ? '18px' : '24px',
                          fontFamily: 'Arial, sans-serif',
                          lineHeight: '1.5',
                          fontWeight: 400,
                          width: windowWidth <= 768 ? 'auto' : '521px',
                          margin: '0',
                          whiteSpace: windowWidth <= 768 ? 'normal' : 'nowrap'
                        }}
                      >
                        Технологии будущего, качество без компромиссов!
                      </div>
                    </div>
                  </div>
                  <div
                    className="t181__buttons-wrapper"
                    style={{
                      display: 'flex',
                      flexDirection: windowWidth <= 430 ? 'column' : 'row',
                      marginTop: '50px',
                      gap: '15px',
                      alignItems: windowWidth <= 430 ? 'center' : 'flex-start',
                      justifyContent: 'flex-start'
                    }}
                  >
                    <a
                      href="#products"
                      className="t-btn"
                      style={{
                        display: 'inline-block',
                        fontSize: '16px',
                        height: '54px',
                        minWidth: '200px',
                        padding: '0 30px',
                        backgroundColor: '#ffffff',
                        textAlign: 'center',
                        border: 'none',
                        borderRadius: '0px',
                        fontWeight: 600,
                        color: '#032a62',
                        fontFamily: 'Arial, sans-serif',
                        lineHeight: '54px',
                        letterSpacing: '0.5px',
                        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
                        cursor: 'pointer',
                        textDecoration: 'none'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#032a62';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.color = '#032a62';
                      }}
                    >
                      Продукты
                    </a>
                    <a
                      href="#contacts"
                      className="t-btn"
                      style={{
                        display: 'inline-block',
                        fontSize: '16px',
                        height: '54px',
                        minWidth: '200px',
                        padding: '0 30px',
                        backgroundColor: '#ffffff',
                        textAlign: 'center',
                        border: '1px solid #ffffff',
                        borderRadius: '0px',
                        fontWeight: 600,
                        color: '#032a62',
                        fontFamily: 'Arial, sans-serif',
                        lineHeight: '54px',
                        letterSpacing: '0.5px',
                        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
                        cursor: 'pointer',
                        textDecoration: 'none'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#032a62';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.color = '#032a62';
                      }}
                    >
                      Контакты
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="py-16">
        <About />
      </section>

      <section id="key-directions">
        <KeyDirections />
      </section>

      <section id="advantages">
        <Advantages />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="products">
        <ProductGallery />
      </section>


      <section id="research-development">
        <ResearchDevelopment />
      </section>

      <section id="production-process">
        <ProductionProcess />
      </section>

      <QualityControl />
      <Partners />
      <FAQ />
    </div>
  );
};

export default Home;
