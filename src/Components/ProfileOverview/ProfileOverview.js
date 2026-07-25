import React from "react";
import Headshot from "./headshot.jpg";
import "./ProfileOverview.css";

function ProfileOverview() {
    return (
        <section className="profile-overview">
            <div>
                <img className="headshot" src={Headshot} alt="Muhammad Ayaan Afzal's headshot, in a circular frame, with shadow underneath."></img>
            </div>
            <div className="name-title">
                <p className="name">Muhammad Ayaan Afzal</p>
                <p className="title">Honors Junior in Mechanical Engineering</p>
            </div>
        </section>
    );
}

export default ProfileOverview;
