"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
const ubuntu = Roboto({ weight: "400", subsets: ["latin"] });
import React, { useState, useEffect } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  const hideNav = () => {
    if (nav === true) {
      setNav(!nav);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    } flex items-center justify-between max-w-full`}>
      <span className="ml-12 max-[415px]:ml-4">
        <Link href={"/"}>
          <Image
            src="/images/shoe.png"
            height={53}
            width={53}
            alt="Shoes logo"
            className="transition ease-in-out hover:scale-110 hover:drop-shadow-md"
          />
        </Link>
      </span>

      <nav
        className={`max-[1150px]:fixed max-[1150px]:top-0 max-[1150px]:bg-white max-[1150px]:w-full max-[1150px]:h-full max-[1150px]:flex max-[1150px]:flex-col max-[1150px]:justify-center ${
          nav ? "max-[1150px]:right-0" : "max-[1150px]:right-[-100%]"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="flex pl-52 max-[1150px]:pl-0 max-[1150px]:flex-col max-[1150px]:items-center max-[1150px]:space-y-8">
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110`}
            onClick={hideNav}
          >
            <Link href={"/"}>New arrivals</Link>
          </li>
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110`}
            onClick={hideNav}
          >
            <Link href={"men"}>Men</Link>
          </li>
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110`}
            onClick={hideNav}
          >
            <Link href={"women"}>Women</Link>
          </li>
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110`}
            onClick={hideNav}
          >
            <Link href={"contact"}>Contact us</Link>
          </li>
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110 min-[1150px]:hidden`}
            onClick={hideNav}
          >
            <Link href={`yourprofile`}>Your Profile</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center mr-6">
        <div className="bg-gray-100 p-2 my-2 rounded-2xl flex items-center max-[1150px]:bg-transparent">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 outline-0 mx-2 w-28 h-5 max-[1150px]:hidden"
          />
        </div>
        <div className="flex items-center">
          <Link href={`yourprofile`} className="max-[1150px]:hidden">
            <FontAwesomeIcon
              icon={faUser}
              className="mx-7 h-6 hover:scale-110 pt-1"
            />
          </Link>
          <Link href={`cart`}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="h-6 hover:scale-110 max-[1150px]:mx-7 pt-1"
            />
          </Link>
        </div>
        <button
          className="min-[1150px]:hidden z-50 p-2 focus:outline-none"
          onClick={showNav}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${nav ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${nav ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${nav ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
