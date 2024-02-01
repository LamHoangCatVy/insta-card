import Service from "../mortgage-calculator/Service";
import Demo from "../demo/Demo";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
