import React from "react";

function Education(props) {
    const degree = props.degree;
    const institution = props.institution;
    const date = props.date;
    const gpa = props.gpa;

    return (
        <div className="education">
            <div className="degree">{degree}</div>
            <div className="institution">{institution}</div>
            <div className="date">{date}</div>
            <div className="gpa">{gpa}</div>
        </div>
    );
}

export default Education;
