import React from "react";
import Calculator from "./Calculator";

const Service = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-col sm:justify-center sm:items-center lg:flex-row mt-8">
      <div className="flex flex-col  lg:flex-col bg-transparent mx-16 sm:mx-16 md:mx-16 lg:mx-16 w-96 sm:w-96 md:w-[500px] lg:w-[500px]">
        <div>
          <h1 className="text-2xl md:text-2xl font-bold container">
            <span className="ml-2  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-sans">Try our awesome Calculator</span>
          </h1>
          <h1 className="container font-sans text-black md:pb-4 ml-2 py-4">Adjust the purchase price, down payment, and interest rate to fit your budget.</h1>
          <button className="ml-2 px-12 py-2 mb-4 bg-blue-500 text-white rounded-full font-medium mr-2">
            Register
          </button>
        </div>
      </div>

      {/* end input div */}
      <Calculator />
    </div>
  );
};

export default Service;

