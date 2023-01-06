import React from "react";
import About from "../About/About.js";
import Skills from "../Skills/Skills.js";
import ContactInfo from "../ContactInfo/ContactInfo.js";
import "./RightSide.css";

function RightSide() {
    return (
        <section className="right-side">
            <About />
            <Skills />
            <ContactInfo />
        </section>
    );
}

export default RightSide;
