import React, { useRef } from "react";
import Image from "next/image";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { Fade } from "@mui/material";  // Import the Fade component

const Intro = ({ intro }) => {
  const introRef = useRef(null);
  const { targetRef, isVisible } = useIntersectionObserver();

  const { title, description, buttonSvg1, buttonSvg2, img } = intro[0].fields;

  return (
    <div className="text-black relative items-center">
      <Fade in={isVisible} timeout={1000}>
        <div
          ref={(element) => {
            targetRef.current = element;
            introRef.current = element;
          }}
          className="h-screen flex items-center"
          style={{
            backgroundImage: `url("https:${img.fields.file.url}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col  lg:flex-col bg-transparent mx-16 sm:mx-16 md:mx-16 lg:mx-16 w-96 sm:w-96 md:w-[500px] lg:w-[500px]">
            <h1 className="text-2xl md:text-2xl font-bold container">
              <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">{title}</span>
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold container sm:text-5xl text-black md:pb-4 ml-2 py-8">
              {description}
            </h1>

            <div className="flex items-center ml-2 gap-4">
              <a href="https://www.apple.com/vn/app-store/" rel="noreferrer" target="_blank">
                <Image src={buttonSvg1} alt={title} width={150} height={150} />
              </a>
              <a href="https://play.google.com/store/games?hl=vi&gl=US" rel="noreferrer" target="_blank">
                <Image src={buttonSvg2} alt={title} width={150} height={150} />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Intro;
