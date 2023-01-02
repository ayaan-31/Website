import React from "react";
import "./ReleaseNotes.css";
import Helmet from "react-helmet";

function ReleaseNotes() {
    return (
        <section className="release-notes">
            <Helmet>
                <title>Release Notes - Taha Afzal</title>
            </Helmet>

            <div className="heading">
                Release Notes
            </div>

            <info>
                Newest to oldest in this format: <code>year.quarter.patch</code>
                <ul>
                    <li><code>year</code>: calendar year of release</li>
                    <li><code>quarter</code>: quarter of release
                        <ul>
                            <li>Q1 (Jan - Mar)</li>
                            <li>Q2 (Apr - Jun)</li>
                            <li>Q3 (Jul - Sep)</li>
                            <li>Q4 (Oct - Dec)</li>
                        </ul>
                    </li>
                    <li><code>patch</code>: 0-indexed patch number of release</li>
                </ul>
            </info>

            <div>
                <p className="version">v23.1.0</p>
                <ul>
                    <li>Introducing the all-new footer!</li>
                    <li>Updated resume's pdf to make it more readable.</li>
                    <li>Internal re-org and some typo & bug fixes.</li>
                </ul>
            </div>

            <div>
                <p className="version">v22.4.0</p>
                <ul>
                    <li>First launch with just the good ol' navbar with an in-progress home page and a link to my resume page.</li>
                    <li>404 page so you don't have to see GitHub's default 404 page.</li>
                    <li>Release notes page for the ones who find it.</li>
                </ul>
            </div>
        </section>
    );
}

export default ReleaseNotes;
