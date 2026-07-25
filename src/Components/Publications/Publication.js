import React from "react";

function Publication(props) {
    const title = props.title;
    const venue = props.venue;
    const date = props.date;
    const description = props.description;
    const link = props.link;

    return (
        <div className="publication">
            <div className="project">{title}</div>
            <div className="role">{venue}</div>
            <div className="date">{date}</div>
            {link &&
                <a className="publication-link" href={link} target="_blank" rel="noreferrer">
                    View Publication
                </a>
            }
            {description && description.length > 0 &&
                <div className="description">
                    <ul className="description-points">
                        {description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}

export default Publication;
