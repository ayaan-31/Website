import React from "react";

function WorkExperience(props) {
    const position = props.position;
    const company = props.company;
    const date = props.date;
    const description = props.description;

    return (
        <div className="work-experience">
            <div className="position">{position}</div>
            <div className="company">{company}</div>
            <div className="date">{date}</div>
            <div className="description">
                <ul className="description-points">
                    {description.map((point) => (
                        <li>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WorkExperience;
