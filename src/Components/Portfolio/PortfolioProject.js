import React from "react";

function PortfolioProject(props) {
    const title = props.title;
    const context = props.context;
    const objective = props.objective;
    const contribution = props.contribution;
    const technicalDetail = props.technicalDetail;
    const result = props.result;
    const tags = props.tags;
    const atAGlance = props.atAGlance;
    const images = props.images;
    const imageFiles = props.imageFiles || [];
    const documents = props.documents;

    return (
        <div className="portfolio-project-card">
            <div className="portfolio-project">
                <div className="portfolio-project-text">
                    <h2 className="portfolio-project-title">{title}</h2>
                    <p className="portfolio-project-context">{context}</p>

                    <h3 className="portfolio-project-subheading">Objective</h3>
                    <p>{objective}</p>

                    <h3 className="portfolio-project-subheading">My Contribution</h3>
                    <p>{contribution}</p>

                    <h3 className="portfolio-project-subheading">Technical Detail</h3>
                    <ul className="description-points">
                        {technicalDetail.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>

                    <h3 className="portfolio-project-subheading">Result</h3>
                    <p>{result}</p>

                    <ul className="portfolio-tags">
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <div className="portfolio-project-media">
                    {images.map((caption, index) => (
                        imageFiles[index] ? (
                            <img className="portfolio-image" src={imageFiles[index]} alt={caption} key={index} />
                        ) : (
                            <div className="portfolio-image-placeholder" key={index}>
                                Image coming soon: {caption}
                            </div>
                        )
                    ))}

                    <div className="portfolio-at-a-glance">
                        <h4>At a Glance</h4>
                        <dl>
                            {atAGlance.map((item, index) => (
                                <React.Fragment key={index}>
                                    <dt>{item.label}</dt>
                                    <dd>{item.value}</dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    </div>

                    {documents && documents.length > 0 &&
                        <div className="portfolio-documents">
                            <h4>Documents</h4>
                            <ul>
                                {documents.map((doc, index) => (
                                    <li key={index}>
                                        <a href={doc.href} target="_blank" rel="noreferrer">{doc.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default PortfolioProject;
