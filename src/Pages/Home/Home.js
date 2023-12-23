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
        </section>
    );
}

export default Home;
