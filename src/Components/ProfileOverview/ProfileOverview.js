import React from "react";
import Memoji from "../../Assets/Images/memoji.png";
import "./ProfileOverview.css";

function ProfileOverview() {
    return (
        <section className="profile-overview">
            <div>
                <img className="memoji" src={Memoji} alt="Taha's Memoji, in a circular frame, with shadow underneath."></img>
            </div>
            <div className="name-title">
                <p className="name">Taha Afzal</p>
                <p className="title">Software Engineer</p>
            </div>
        </section>
    );
}

export default ProfileOverview;
