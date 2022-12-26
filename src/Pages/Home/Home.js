import React from "react";
import Helmet from "react-helmet";
import ProfileOverview from "../../Components/ProfileOverview/ProfileOverview";
import "./Home.css";

function Home() {
    return (
        <section className="home">
            <Helmet>
                <title>Home - Taha Afzal</title>
            </Helmet>

            <ProfileOverview />

            <div className="heading">
                Introduction 👋🏽
            </div>

            <div className="content">
                <p>By now, it is likely that you know my name and what I do already, so let's jump in.</p>
                <p>Writing intros isn't easy. Thanks for your patience as I work on it. 👨🏽‍💻</p>
            </div>

            <div className="heading">
                Why this website?
            </div>

            <div className="content">
                <p>There are a lot of reasons, but the main one is to have a place where I can share my thoughts and ideas with the world.</p>
                <p>It already has:</p>
                <ul>
                    <li>This home page which tells you <i>little</i> about me</li>
                    <li><a href="/#/resume" target="_blank" rel="noreferrer">Resume page</a> that tells you some more about me, but mainly about my work.</li>
                </ul>
            </div>

            <div className="heading">
                What's next? ⏭️
            </div>

            <div className="content">
                <ul>
                    <li>Writings about things I like.</li>
                    <li>Collection of things I find cool.</li>
                    <li>How-To's and just general notes about things like <code>git, bash, vim</code>, etc. Mostly for myself but hopefully others can benefit too.</li>
                    <li>And more... 🤷🏽‍♂️</li>
                </ul>
            </div>


        </section>
    );
}

export default Home;