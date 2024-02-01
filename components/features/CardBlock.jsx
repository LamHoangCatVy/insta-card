import React from "react";
import Image from "next/image";

const CardBlock = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center items-stretch align-start">
      {cards.map((item, index) => {
        const { svgIcon, title, description } = item.fields;
        const svg = svgIcon.content[0].content[0].value;
        return (
          <div key={index} className="flex flex-wrap justify-between items-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="	h-64 bg-blue-300 shadow-blue-400  bg-opacity-5 rounded-[5px] shadow-inner w-full m-2 ">
              <div className="flex flex-col items-center justify-center p-4 m-4">
                <Image src={svg} alt={title} className=" rounded-t-lg" width={50} height={50} />
              </div>
              <div className="align-baseline h-32 p-2">
                <h2 className="font-bold text-2xl text-gray-800 text-center">{title}</h2>
                <p className="text-md text-gray-600 text-center">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardBlock;
