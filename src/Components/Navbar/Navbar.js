import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <section className="navbar">
            <Link className={location.pathname === "/" || location.pathname === "/home" ? "navbar-link-selected" : "navbar-link"} to="/">Home</Link>
            <Link className={location.pathname === "/resume" ? "navbar-link-selected" : "navbar-link"} to="/resume">Resume</Link>
            <Link className={location.pathname === "/resources" ? "navbar-link-selected" : "navbar-link"} to="/resources">Resources</Link>
        </section >
    );
}

export default Navbar;
