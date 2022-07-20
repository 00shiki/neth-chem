import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center flex-wrap p-3">
        <Link href="/">
          <a className="inline-flex items-center p-2 w-5/12">
            <Image
              src="/images/logo.png"
              alt="Neth Chem"
              width={50}
              height={50}
            />
            <span className="text-2xl text-black font-bold uppercase tracking-wide">
              Neth Chem
            </span>
          </a>
        </Link>
        <div className="w-6/12">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-amber-400 hover:underline underline-offset-8">
                Home
              </a>
            </Link>
            <Link href="/learn">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-amber-400 hover:underline underline-offset-8">
                Learn
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-amber-400 hover:underline underline-offset-8">
                About
              </a>
            </Link>
          </div>
        </div>
        <div className="w-1/12 text-center">
          <div className="bg-amber-300 shadow-md py-3 px-2">Hello, Nethy!</div>
        </div>
      </nav>
    </>
  );
};
