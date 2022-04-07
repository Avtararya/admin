import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Dropdown from './dropdown';
import { useRouter } from 'next/router';
import { MobileMenu } from './MobileMenu';

const Navbar = () => {
  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [navHeight, setNavHeight] = useState('80px');

  const listenScrollEvent = () => {
    window.scrollY > 200 ? setNavHeight('50px') : setNavHeight('80px');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  });

  return (
    // <div className="fixed z-50 top-0">
    <nav
      className="flex top-0  items-center bg-white justify-between hover: px-16 sticky z-50"
      style={{ height: navHeight }}
    >
      <div className="cursor-pointer">LOGO</div>
      <div className="hidden md:block md:h-full">
        <ul className="flex h-full space-x-10 cursor-pointer">
          <li className="h-full flex items-center group hover:border-b-4 border-dropdown-item-color">
            <div className="flex items-start space-x-1">
              <Link href="/">
                <span> HOME</span>
              </Link>
              <i className="fa-solid fa-caret-down text-dropdown-item-color"></i>
            </div>
            <Dropdown list={['title1', 'title2']} />
          </li>

          <li className="h-full flex items-center group hover:border-b-4 border-dropdown-item-color">
            <div className="flex items-start space-x-1">
              <Link href="/contact-us">
                <span>CONTACT US</span>
              </Link>
              <i className="fa-solid fa-caret-down text-dropdown-item-color"></i>
            </div>
            <Dropdown list={['title1', 'title2', 'title3']} />
          </li>
          <li className="h-full flex items-center group hover:border-b-4 border-dropdown-item-color">
            <div className="flex items-start space-x-1">
              <Link href="/about-us">
                <span>ABOUT US</span>
              </Link>
              <i className="fa-solid fa-caret-down text-dropdown-item-color"></i>
            </div>
            <Dropdown list={['title1', 'title2']} />
          </li>
        </ul>
      </div>
      <div className="hidden md:flex md:cursor-pointer md:text-xl md:space-x-5 md:text-dropdown-item-color">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <MobileMenu isOpen={mobileMenu} setIsOpen={setMobileMenu} />
    </nav>
    // </div>
  );
};

export default Navbar;
