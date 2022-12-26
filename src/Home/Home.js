import React from "react";
import Helmet from "react-helmet";
import ProfileOverview from "../ProfileOverview/ProfileOverview";
import "./Home.css";

function Home() {
    return (
        <section className="home">
            <Helmet>
                <title>Home - Taha Afzal</title>
            </Helmet>

            <ProfileOverview />

            
        </section>
    );
}

export default Home;