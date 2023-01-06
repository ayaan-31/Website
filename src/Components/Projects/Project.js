import React from "react";

function Project(props) {
    const project = props.project;
    const role = props.role;
    const date = props.date;
    const description = props.description;

    return (
        <div className="personal-project">
            <div className="project">{project}</div>
            <div className="role">{role}</div>
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

export default Project;