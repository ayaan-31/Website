import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <section className="navbar">
            <Link className="navbar-link" to="/resume">Resume</Link>
        </section>
    );
}

export default Navbar;
