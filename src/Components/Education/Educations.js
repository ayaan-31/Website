import React from "react";
import Education from "./Education.js";

function Educations() {
    return (
        <section className="educations">
            <h1 className="heading">EDUCATION</h1>

            <Education
                degree="BA Computer Science and Software Engineering"
                institution="Augustana University"
                date="Aug 2018 - May 2022"
                gpa="GPA: 3.75"
            />
        </section>
    );
}

export default Educations;
