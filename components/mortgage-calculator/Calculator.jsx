import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const Calculator = () => {
  // State variables to hold values with useState
  const [purchasePrice, setPurchasePrice] = useState(100000);
  const [downPayment, setDownPayment] = useState(20000);
  const [repaymentTime, setRepaymentTime] = useState(30);
  const [interestRate, setInterestRate] = useState(5);

  // Function to calculate mortgage payment
  const calculateMortgage = (purchasePrice, downPayment, repaymentTime, interestRate) => {
    // P = the principal loan amount(Purchase Price - Down Payment)
    const P = purchasePrice - downPayment;

    // r = your monthly interest rate
    const r = interestRate / 100 / 12;

    // n = number of payments over the loan’s lifetime.
    const n = repaymentTime * 12;

    // M = the total monthly mortgage payment
    const M = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

    return M.toFixed(2);
  };

  // Calculate loan amount and monthly payment based on user inputs
  const loanAmount = purchasePrice - downPayment;
  const monthlyPayment = calculateMortgage(purchasePrice, downPayment, repaymentTime, interestRate);

  // Function to handle slider value changes
  const handleSliderChange = (value, setStateFunction) => {
    setStateFunction(value);
  };

  // JSX structure for the mortgage calculator UI
  return (
    <div className="p-6 bg-blue-500">
      <h1 className="text-white text-2xl font-bold mb-2 ml-4">Mortgage Calculator</h1>
      <p className="text-white text-sm font mb-2 ml-4">Take control with a plan set in stone.</p>
      {/* Purchase price and down payment input fields */}
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row m-4">
        {/* Purchase Price */}
        <div className="mb-8 px-4">
          <label className="text-white block text-sm font-medium mt-8">Purchase Price: ${purchasePrice.toLocaleString()}</label>
          <Slider
            value={purchasePrice}
            min={0}
            max={1000000}
            step={1000}
            onChange={(e, value) => handleSliderChange(value, setPurchasePrice)}
            sx={{
              width: "250px",
              height: "10px",
              color: "#05497A",
              "& .MuiSlider-thumb": {
                width: "16px",
                height: "16px",
                border: "2px solid #000", // Black border for the thumb (circle)
                backgroundColor: "#fff", // White background for the thumb (circle)
                "&:hover": {
                  boxShadow: "none", // Remove hover shadow
                },
              },
            }}
          />
        </div>

        {/* Down Payment */}
        <div className="mb-8 px-4">
          <label className="text-white block text-sm font-medium md:mt-8">Down Payment: ${downPayment.toLocaleString()}</label>
          <Slider
            value={downPayment}
            min={0}
            max={purchasePrice}
            step={1000}
            onChange={(e, value) => handleSliderChange(value, setDownPayment)}
            sx={{
              width: "250px",
              height: "10px",
              color: "#05497A",
              "& .MuiSlider-thumb": {
                width: "16px",
                height: "16px",
                border: "2px solid #000",
                backgroundColor: "#fff",
                "&:hover": {
                  boxShadow: "none",
                },
              },
            }}
          />
        </div>
      </div>

      {/* Repayment time and interest rate input fields */}
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row m-4">
        {/* Repayment Time */}
        <div className="mb-8 px-4">
          <label className="text-white block text-sm font-medium ">Repayment Time (years): {repaymentTime}</label>
          <Slider
            value={repaymentTime}
            min={1}
            max={50}
            onChange={(e, value) => handleSliderChange(value, setRepaymentTime)}
            sx={{
              width: "250px",
              height: "10px",
              color: "#05497A",
              "& .MuiSlider-thumb": {
                width: "16px",
                height: "16px",
                border: "2px solid #000", // Black border for the thumb (circle)
                backgroundColor: "#fff", // White background for the thumb (circle)
                "&:hover": {
                  boxShadow: "none", // Remove hover shadow
                },
              },
            }}
          />
        </div>

        {/* Interest Rate */}
        <div className="mb-8 px-4">
          <label className="text-white block text-sm font-medium">Interest Rate (%): {interestRate}</label>
          <Slider
            value={interestRate}
            min={0}
            max={10}
            step={0.1}
            onChange={(e, value) => handleSliderChange(value, setInterestRate)}
            sx={{
              width: "250px",
              height: "10px",
              color: "#05497A",
              "& .MuiSlider-thumb": {
                width: "16px",
                height: "16px",
                border: "2px solid #000", // Black border for the thumb (circle)
                backgroundColor: "#fff", // White background for the thumb (circle)
                "&:hover": {
                  boxShadow: "none", // Remove hover shadow
                },
              },
            }}
          />
        </div>
      </div>

      {/* Display loan amount and monthly payment */}
      <div className="mb-4 px-4">
        <p className="text-white">
          Loan Amount: <span className="text-black font-bold text-xl"> ${loanAmount.toLocaleString()}</span>
        </p>
        <p className="text-white">
          Monthly Payment: <span className="text-black font-bold text-xl"> ${monthlyPayment.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
};

export default Calculator;
