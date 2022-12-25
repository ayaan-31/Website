import React from "react";
import About from "../About/About.js";
import Skills from "../Skills/Skills.js";
import ContactInfo from "../ContactInfo/ContactInfo.js";
import CopyrightInfo from "../CopyrightInfo/CopyrightInfo.js";
import "./RightSide.css";

function RightSide() {
    return (
        <section className="right-side">
            <About />
            <Skills />
            <ContactInfo />
            <CopyrightInfo />
        </section>
    );
}

export default RightSide;
