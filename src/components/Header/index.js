import React from "react";
import "./style.css";
import Nav from "../Nav";

const Header = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <header>
      <div className="container d-lg-flex justify-content-lg-between">
        <h1 className="text-center">Chris Verges</h1>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </header>
  );
};

export default Header;
