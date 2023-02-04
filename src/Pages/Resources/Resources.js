import React from "react";
import "./Resources.css";
import Helmet from "react-helmet";

function Resources() {
    return (
        <section className="resources">
            <Helmet>
                <title>Resources - Taha Afzal</title>
            </Helmet>

            <p>Writing is one of the best ways to learn and retain information.</p>

            <p>
                This section of my website will host notes that I take for myself
                to better understand the tools, concepts, and technologies I use.
            </p>

            <p>
                It will also include any other resources that I have found useful and
                worth sharing.
            </p>

            <blockquote>
                <p>
                    I blog like UDP packets, so these entries are not guaranteed to arrive in order or
                    at all.
                </p>
                <blockquote-footer>
                    - Pete Elmore
                </blockquote-footer>
            </blockquote>

            <ul className="resources-list">
                <li className="list-date">Feb 3, 2023</li>
                {/* TODO: look at how to append "time-travel-bug" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/resources/time-travel-bug">Time Travel Bug</a></li>

                <li className="list-date">January 21, 2023</li>
                {/* TODO: look at how to append "zshell-setup" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/resources/zshell-setup">My Z Shell Setup</a></li>

                <li className="list-date">January 16, 2023</li>
                {/* TODO: look at how to append "books-read" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/resources/books-read">Books I Have Read</a></li>

                <li className="list-date">January 04, 2023</li>
                {/* TODO: look at how to append "getting-hired" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/resources/getting-hired">Getting Hired</a></li>
            </ul>

        </section >
    );
}

export default Resources;
