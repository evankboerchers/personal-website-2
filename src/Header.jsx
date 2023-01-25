import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
        setShowMenu(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  });

  return (
    <nav
      class={`bg-body z-50 inset-x-0 w-full transition-all fixed ${
        show ? 'top-0' : '-top-24'
      }`}
    >
      <div class="pt-6 px-8 md:px-8 lg:px-24 w-full">
        <div class={`${showMenu ? 'pb-0' : 'pb-6'}`}>
          <div class="container flex justify-between items-center mx-auto">
            <div class="text-2xl md:text-3xl font-mr-bedfort text-selected-text cursor-pointer">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={200}
              >
                Evan <span class="text-text-alt font-bold">.</span>
                Boerchers
              </Link>
            </div>
            <ul class="hidden md:flex space-x-12 items-center">
              <li class="hover:text-selected-text cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  About
                </Link>
              </li>
              <li class="hover:text-selected-text cursor-pointer">
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  Experience
                </Link>
              </li>
              <li class="hover:text-selected-text cursor-pointer">
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={200}
                >
                  Portfolio
                </Link>
              </li>
              <li class="hover:text-selected-text cursor-pointer">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div class="md:hidden">
              <AiOutlineMenu
                class={`cursor-pointer ${showMenu ? 'fill-selected-text' : ''}`}
                size="2rem"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
        <div>
          <div class={`${showMenu ? '' : 'hidden'}`}>
            <ul class="flex flex-col items-end space-y-1 py-2">
              <li class="hover:text-selected-text cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  About
                </Link>
              </li>
              <li class="hover:text-selected-text cursor-pointer">
                <Link
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  Experience
                </Link>
              </li>
              <li class="hover:text-selected-text cursor-pointer">
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  Portfolio
                </Link>
              </li>
              <li class="hover:text-selected-text cursor-pointer">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={200}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
