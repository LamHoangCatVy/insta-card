import Service from "../mortgage-calculator/Service";
import Footer from "./Footer";
import NavBar from "./NavBar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Service />
      <Footer />
    </>
  );
};

export default Layout;
