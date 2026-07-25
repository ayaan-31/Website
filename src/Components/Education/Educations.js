import React from "react";
import Education from "./Education.js";

function Educations() {
    return (
        <section className="educations">
            <h1 className="heading">EDUCATION</h1>
            <Education
                degree="B.S. Mechanical Engineering (Honors)"
                institution="Iowa State University"
                date="Expected May 2028"
                gpa="GPA: 3.86/4.0"
            />
        </section>
    );
}

export default Educations;
