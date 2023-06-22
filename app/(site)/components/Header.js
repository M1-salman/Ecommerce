"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
const ubuntu = Roboto({ weight: "400", subsets: ["latin"] });
import React, { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <header className=" flex items-center justify-between mt-3 max-w-full">
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
        className={`max-[1150px]:fixed max-[1150px]:top-0 max-[1150px]:bg-white max-[1150px]:w-full max-[1150px]:drop-shadow-md ${
          nav ? "right-0" : "right-[-100vw]"
        } transition-all duration-300`}
      >
        <ul className="flex pl-52 max-[1150px]:pl-0 max-[1150px]:flex-col max-[1150px]:items-center max-[1150px]:mt-5">
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110`}
          >
            <Link href={"/"}>New Arrivals</Link>
          </li>
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110`}
          >
            <Link href={"men"}>Men</Link>
          </li>
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110`}
          >
            <Link href={"women"}>Women</Link>
          </li>
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110`}
          >
            <Link href={"snkrs"}>SNKRS</Link>
          </li>
          <li
            className={`${ubuntu.className} mx-8 max-[1150px]:my-2 text-lg hover:text-slate-500 transition ease-in-out hover:scale-110 min-[1150px]:hidden`}
          >
            <Link href={`https://twitter.com/salman_code`}>Twitter</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center mr-12">
        <div className="bg-gray-100 p-2 my-2 rounded-2xl flex items-center max-[1150px]:bg-transparent">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 outline-0 mx-2 w-28 h-5 max-[1150px]:hidden"
          />
        </div>
        <div className="flex items-center">
          <Link
            href={`https://twitter.com/salman_code`}
            className="max-[1150px]:hidden"
          >
            <Image
              src="/images/twitter2.svg"
              height={29}
              width={29}
              alt="Follow us on Instagram"
              className="mx-7 hover:scale-110 h-7"
            />
          </Link>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="h-6 hover:scale-110 max-[1150px]:mx-7"
          />
        </div>
        {nav ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="min-[1150px]:hidden h-6 absolute right-4 top-7"
            onClick={showNav}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="min-[1150px]:hidden h-6 absolute right-4 top-7"
            onClick={showNav}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
