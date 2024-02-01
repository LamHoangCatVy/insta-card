import React, { useRef } from "react";
import EmailIcon from "../../public/svg/Email";
import { Fade } from "@mui/material";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
const Hero = ({ hero }) => {
  const heroRef = useRef(null);
  const { targetRef, isVisible } = useIntersectionObserver();
  const { title, subtitle, description, buttonLink, backgroundImage } = hero[0].fields;
  const imageUrl = `https:${backgroundImage.fields.file.url}`;

  return (
    <div className="text-black relative items-center">
      <Fade in={isVisible} timeout={1000}>
        {/* backgroundImg div */}
        <div
          ref={(element) => {
            targetRef.current = element;
            heroRef.current = element; // Assign the ref to heroRef for convenience
          }}
          className={`h-screen flex items-center md:bg bg-size-cover bg-center ${isVisible ? "visible" : "invisible"}`}
          style={{
            backgroundImage: `url("${imageUrl}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          {/* text section */}
          <section className="flex flex-col  lg:flex-col bg-transparent mx-16 sm:mx-16 md:mx-16 lg:mx-16 ">
            <h1 className="text-5xl md:text-6xl font-bold container">
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">{title}</span>
            </h1>
            <h1 className="text-5xl md:text-6xl font-bold container text-black md:pb-4 ml-2">{subtitle}</h1>
            <p className="text-black my-4 ml-2 text-xl ">{description}</p>
            {/* input div */}
            <div className="w-[400] md:w-[500] h-16 p-2 pr-2 m-2 bg-white rounded-[40px] justify-between items-center inline-flex">
              <div className="justify-start items-center gap-3 flex ">
                <EmailIcon />
                <input type="text" placeholder="Enter your email" className="  rounded-3xl border-none focus:ring-0 focus:outline-none" />
              </div>
              <div className="h-12 px-4 pt-4 pb-[15px] bg-blue-500 rounded-[50px] justify-center items-center gap-2.5 flex">
                <div className="text-center text-white text-base font-medium content">
                  <span className="hidden sm:inline">{buttonLink}</span>
                  <span className="sm:hidden">Join</span>
                </div>
              </div>
              {/* end button input div */}
            </div>
            {/* end input div */}
          </section>
          {/* end text section */}
        </div>
        {/* end backgroundImage */}
      </Fade>
    </div>
  );
};

export default Hero;
