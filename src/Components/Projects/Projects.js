import React from "react";
import Project from "./Project.js";

function Projects() {
    return (
        <section className="personal-projects">
            <h1 className="heading">PROJECTS</h1>

            <Project
                project="Uni Go"
                role="Founder and Developer"
                date="Oct 2023 - Present"
                description={[
                    "Leading the re-branded development of Ridesio to bring an affordable, and communal mode of transportation to college campuses.",
                    "Collaborating with 3 college campuses to integrate Uni Go, delivering a tailored solution that meets the unique needs of each college."
                ]}
            />

            <Project
                project="Health Memo"
                role="Tech Lead"
                date="Oct 2020 - Nov 2020"
                description={[
                    "Led a team of 3 to develop an iOS app to help the elderly manage their chronic diseases and share regular updates with their doctor.",
                    "Utilized EMRs and implemented Google's Text-to-Speech and Speech-to-Text to create a personalized experience for patients.",
                    "Won $9,000 along with an invitation to work with engineers at Sanford Health for further research and development of the project."
                ]}
            />
        </section>
    );
}

export default Projects;
