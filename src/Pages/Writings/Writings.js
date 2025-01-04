import React from "react";
import "./Writings.css";
import Helmet from "react-helmet";

function Writings() {
    return (
        <section className="writings">
            <Helmet>
                <title>Writings</title>
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

            <ul className="writings-list">
                <li className="list-date">January 4, 2025</li>
                {/* TODO: look at how to append path to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/writings/books-read-2024">Books Read in 2024</a></li>

                <li className="list-date">February 28, 2024</li>
                {/* TODO: look at how to append path to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/writings/apple-vision-pro">Apple Vision Pro</a></li>

                <li className="list-date">February 3, 2024</li>
                {/* TODO: look at how to append "douglas-peucker" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/writings/douglas-peucker">Douglas-Peucker Algorithm Implementation</a></li>

                <li className="list-date">January 27, 2024</li>
                {/* TODO: look at how to append "books-read" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/writings/books-read-2022">Books Read in 2022</a></li>
                <li className="list-title"><a href="/#/writings/books-read-2023">Books Read in 2023</a></li>

                <li className="list-date">January 21, 2023</li>
                {/* TODO: look at how to append "zshell-setup" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/writings/my-zshell-setup">My Z Shell Setup</a></li>

                <li className="list-date">January 16, 2023</li>
                {/* TODO: look at how to append "books-read" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/writings/books-read-2021">Books Read in 2021</a></li>

                <li className="list-date">January 04, 2023</li>
                {/* TODO: look at how to append "getting-hired" to the current path instead of hard-coding */}
                <li className="list-title"><a href="/#/writings/getting-hired">Getting Hired</a></li>
            </ul>

        </section >
    );
}

export default Writings;
