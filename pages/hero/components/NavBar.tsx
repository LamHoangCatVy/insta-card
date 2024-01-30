import React from "react";

import Logo from "../../../app/utils/Logo"

export default function NavBar() {
  return (
    <header className="flex-col md:flex-row flex items-center md:justify-between mt-12 mb-16 md:mb-12">
      <Logo />
      <div className="flex justify-end items-center ">
        <h2 className="md:text-left text-lg mt-5 md:pl-8">Ready to changing?</h2>
        <button className="relative bg-clip-text text-transparent from-blue-500 to-purple-500 font-bold py-2 px-4 rounded overflow-hidden bg-border-gradient border hover:text-black text-center md:text-left text-lg mt-5 ml-5">
          <a>
            <span>Insta </span>
            Benefit
          </a>
        </button>
      </div>
    </header>
  );
}
