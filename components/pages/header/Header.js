import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "./slider/Slider";
import Layout from "../../Layout";
import LeftSidebar from "../../Home/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Home/RightSidebar/RightSidebar";
const Header = () => {
  return (
    <>
      <Head></Head>
      <header className="w-full bg-indigo-500 py-2 px-5">
        <nav className="w-full flex items-center justify-between">
          <div>
            <Image
              width="150"
              height="50"
              className="mt-2"
              src="/logo/brand-logo.png"
              alt="logo"
            />
          </div>
          <ul className="flex justify-center">
            <li className="mr-5 text-2xl hover:underline  text-white">
              <Link href="/sports">Sports</Link>
            </li>
            <li className="mr-5 text-2xl text-white hover:underline">
              <Link href="/in-play">In-Play</Link>
            </li>
          </ul>
          <div>
            <div className="flex items-center">
              <button className="py-1 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white">
                Bank
              </button>
              <div className="mx-8 flex items-center  hover:cursor-pointer">
                <div className="mr-2">
                  <span className="block text-white">player 1</span>
                  <span className="block text-white">$370.00</span>
                </div>
                <Image
                  height="35"
                  width="35"
                  alt="profile icon"
                  src="/logo/profile.png"
                />
              </div>
              <div className="search flex items-center hover:cursor-pointer">
                <span className="text-2xl text-white">
                  <ion-icon name="search-outline"></ion-icon>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
