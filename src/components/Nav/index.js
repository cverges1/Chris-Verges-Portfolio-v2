import React from "react";
import './style.css';

const Nav = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <nav className="nav">
      {pages.map((page) => (
        <a
          href="/#"
          key={page}
          className={`nav-link ${page === currentPage && "active"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
