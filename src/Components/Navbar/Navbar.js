import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <section className="navbar">
            <Link className={location.pathname === "/" || location.pathname === "/portfolio" ? "navbar-link-selected" : "navbar-link"} to="/">Portfolio</Link>
            <Link className={location.pathname === "/resume" ? "navbar-link-selected" : "navbar-link"} to="/resume">Resume</Link>
        </section >
    );
}

export default Navbar;
