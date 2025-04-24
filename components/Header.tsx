// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('/', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="font-arial text-[20px] font-semibold text-[#032a62] no-underline relative whitespace-nowrap hover:text-blue-800"
    >
      {children}
    </button>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-white w-full z-[1000] p-3 shadow-[0_1px_10px_rgba(0,0,0,0.15)]">
      <div className="mx-0 pr-[20px] flex items-center h-full justify-between">
        {/* Логотип для десктопа */}
        <div className="hidden lg:block ml-4">
          <Link href="/" className="block">
            <Image
              src="/assets/LOGO_INNO_LINK_LLC-P.png"
              alt="INNO LINK LLC Logo"
              width={90}
              height={65}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Мобильное меню */}
        <div className="tmenu-mobile__container ml-4 lg:!hidden block">
          <button
            type="button"
            className={`t-menuburger t-menuburger_first ${isOpen ? 't-menuburger-opened' : ''} lg:!hidden`}
            aria-label="Навигационное меню"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span style={{ backgroundColor: '#0a314d' }}></span>
            <span style={{ backgroundColor: '#0a314d' }}></span>
            <span style={{ backgroundColor: '#0a314d' }}></span>
            <span style={{ backgroundColor: '#0a314d' }}></span>
          </button>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden lg:!flex" style={{ marginLeft: '' }}>
          <ul className="flex items-center m-0 p-0 -ml-5">
            <li className="px-[12px]">
              <NavLink href="about">О компании</NavLink>
            </li>
            <li className="px-[12px]">
              <NavLink href="key-directions">Ключевые направления</NavLink>
            </li>
            <li className="px-[12px]">
              <NavLink href="products">Продукты</NavLink>
            </li>
            <li className="px-[12px]">
              <Link
                href="#partners"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('partners')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="font-arial text-[20px] font-semibold text-[#032a62] no-underline relative whitespace-nowrap hover:text-blue-800"
              >
                Партнеры
              </Link>
            </li>
            <li className="pl-[12px]">
              <Link
                href="#contacts"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacts')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="font-arial text-[20px] font-semibold text-[#032a62] no-underline relative whitespace-nowrap hover:text-blue-800"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Выпадающее мобильное меню */}
      {isOpen && (
        <div className="block lg:!hidden bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            {/* Логотип в мобильном меню */}
            <div className="flex justify-center mb-6">
              <Link href="/" className="block">
                <Image
                  src="/assets/LOGO_INNO_LINK_LLC-P.png"
                  alt="INNO LINK LLC Logo"
                  width={90}
                  height={65}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            <ul className="space-y-6 text-center">
              <li>
                <NavLink href="about" onClick={() => setIsOpen(false)}>
                  О компании
                </NavLink>
              </li>
              <li>
                <NavLink href="key-directions" onClick={() => setIsOpen(false)}>
                  Ключевые направления
                </NavLink>
              </li>
              <li>
                <NavLink href="products" onClick={() => setIsOpen(false)}>
                  Продукты
                </NavLink>
              </li>
              <li>
                <NavLink href="partners" onClick={() => setIsOpen(false)}>
                  Партнеры
                </NavLink>
              </li>
              <li>
                <NavLink href="contacts" onClick={() => setIsOpen(false)}>
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
