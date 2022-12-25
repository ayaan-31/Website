import React from "react";
import LeftSide from "../LeftSide/LeftSide.js";
import RightSide from "../RightSide/RightSide.js";
import "./Resume.css";

function Resume() {
    return (
        <section className="resume">

            <LeftSide />
            <RightSide />

        </section>
    );
}

export default Resume;
