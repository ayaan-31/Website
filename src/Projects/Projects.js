import React from "react";
import Project from "./Project.js";

function Projects() {
    return (
        <section className="personal-projects">
            <h1 className="heading">PROJECTS</h1>

            <Project
                project="Ridesio"
                role="Developer"
                date="Oct 2020 - Present"
                description={[
                    "Developing a ride-sharing iOS app for college campuses over 6-weeks to serve as a communal and sustainable way for long-distance travel.",
                    "Collaborating remotely in a team of 4 on the front and back ends of the app to implement MapKit and Parse.",
                    "Focused on the UI and practicality of the app to secure 2nd position in CodePath's Demo Day and SF Student Showcase.",
                ]}
            />

            <Project
                project="Sanford HealthHack"
                role="Tech Lead"
                date="Oct 2020 - Nov 2020"
                description={[
                    "Led a team of 3 to develop an iOS app to help the elderly manage their chronic diseases and share regular updates with their doctor.",
                    "Utilized EMRs and implemented Google's Text-to-Speech and Speech-to-Text to create a personalized experience for patients.",
                    "Won $9,000 along with an invitation to work with engineers at Sanford Health for further research and development of the project.",
                ]}
            />

            <Project
                project="CodePath"
                role="Developer"
                date="Sep 2020 - Present"
                description={[
                    "Developing a social media app for college students over 6-weeks to help them connect with each other and find events on campus.",
                    "Collaborating remotely in a team of 4 on the front and back ends of the app to implement MapKit and Parse.",
                    "Focused on the UI and practicality of the app to secure 2nd position in CodePath's Demo Day and SF Student Showcase.",
                ]}
            />
        </section>
    );
}

export default Projects;
