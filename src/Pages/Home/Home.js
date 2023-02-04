import React from "react";
import Helmet from "react-helmet";
import ProfileOverview from "../../Components/ProfileOverview/ProfileOverview";
import "./Home.css";

function Home() {
    return (
        <section className="home">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <ProfileOverview />

            <div className="heading">
                Introduction 👋🏽
            </div>

            <div className="content">
                <p>By now, it is likely that you know my name and what I do, so let's jump in.</p>
                <p>Writing intros isn't easy. Thanks for your patience as I work on it. 👨🏽‍💻</p>
                <p>Please checkout the other tabs until then.</p>
            </div>

            <div className="heading">
                What's coming?
            </div>

            <div className="content">
                <ul>
                    <li>Collection of things I find cool.</li>
                    <li>How-Tos and just general notes about things like <code>git, bash, vim</code>, etc.</li>
                    <li>And more...</li>
                </ul>
            </div>
        </section>
    );
}

export default Home;
