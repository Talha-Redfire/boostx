import React from "react";
import "./Layout.css";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
const Layout = ({ children }: any) => {
  return (
    <div className="LayoutMain">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
