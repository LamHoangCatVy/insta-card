import React, { useState, useEffect } from "react";
import { Slide } from "@mui/material";
import Logo from "../logo/Logo";

export default function NavBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Slide direction="down" in={visible} timeout={500}>
      <header className="flex flex-col lg:flex-row items-center to lg:mx-16">
        <div className="flex justify-center lg:justify-start items-center">
          <Logo />
        </div>
        <div className="flex justify-end items-center lg:ml-auto md:mb-4 sm:mb-4 mb-4">
          <h2 className="md:text-left text-lg mt-5 md:pl-8">Ready to changing?</h2>
          <button className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-bold py-2 px-4 rounded overflow-hidden bg-border-gradient border hover:text-black text-center md:text-left text-lg mt-5 ml-5">
            <a>
              <span>Insta </span>
              Benefit
            </a>
          </button>
        </div>
      </header>
    </Slide>
  );
}
