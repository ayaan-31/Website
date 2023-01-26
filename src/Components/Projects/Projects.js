import React from "react";
import Project from "./Project.js";

function Projects() {
    return (
        <section className="personal-projects">
            <h1 className="heading">PROJECTS</h1>

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

            <Project
                project="Ridesio"
                role="Developer"
                date="Oct 2020 - Nov 2020"
                description={[
                    "Developed a ride-sharing iOS app for college campuses over 6-weeks to serve as a communal and sustainable way for long-distance travel.",
                    "Collaborated remotely in a team of 4 to develop the app utilizing AWS, MapKit, SwiftUI, and Parse.",
                    "Focused on the UI and practicality of the app to secure 2nd position in CodePath's Demo Day and SF Student Showcase."
                ]}
            />

            <Project
                project="Apple Beta Software Program"
                role="Volunteer"
                date="Jun 2020 - Sep 2020"
                description={[
                    "Developed a ride-sharing iOS app for college campuses over 6-weeks to serve as a communal and sustainable way for long-distance travel.",
                    "Collaborated remotely in a team of 4 to develop the app utilizing AWS, MapKit, SwiftUI, and Parse.",
                    "Focused on the UI and practicality of the app to secure 2nd position in CodePath's Demo Day and SF Student Showcase."
                ]}
            />

            <Project
                project="Midwest Undergraduate Data Analytics Competition (MUDAC)"
                role="Team Lead"
                date="Mar 2020 - Apr 2020"
                description={[
                    "Led Augustana University's team in MUDAC 2020 - a rigorous and prestigious data analytics hackathon.",
                    "Predicted the outcomes of legal cases with 87% accuracy, visualized data on Tableau, and presented the results to SMEs."
                ]}
            />
        </section>
    );
}

export default Projects;
