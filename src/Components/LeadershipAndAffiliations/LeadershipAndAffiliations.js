import React from "react";
import LeadershipOrAffiliation from "./LeadershipOrAffiliation.js";

function LeadershipAndAffiliations() {
    return (
        <section className="leadership-and-affiliations">
            <h1 className="heading">LEADERSHIP AND AFFILIATIONS</h1>

            <LeadershipOrAffiliation
                organization="Augustana University"
                role="Trustee"
                date="Dec 2024 - Present"
                description={[
                    "Serving as a trustee on the Board of Trustees at Augustana, focusing on the well-being of faculty, students, and staff.",
                    "Strengthening the Computer Science program, advancing international education, and driving entrepreneurial initiatives on campus."
                ]}
            />

            <LeadershipOrAffiliation
                organization="UnderDog Devs"
                role="Mentor"
                date="Dec 2023 - Present"
                description={[
                    "Serving as a mentor to aspiring developers who are either formerly incarcerated or from an economically disadvantaged background.",
                    "Conducting weekly meetings with mentees to offer coding practice, interview preparation, resume analysis, and encouragement."
                ]}
            />

            <LeadershipOrAffiliation
                organization="Office of Diversity and Inclusion"
                role="Diversity Peer Mentor"
                date="May 2020 - Aug 2021"
                description={[
                    "Facilitated 10+ educational programs to increase academic, social, and professional opportunities for underrepresented students.",
                    "Increased studentsʼ awareness and cultural competency through 1-on-1 mentorship.",
                ]}
            />


            <LeadershipOrAffiliation
                organization="Apple Beta Software Program"
                role="Volunteer"
                date="Jun 2020 - Sep 2020"
                description={[
                    "Developed a ride-sharing iOS app for college campuses over 6-weeks to serve as a communal and sustainable way for long-distance travel.",
                    "Collaborated remotely in a team of 4 to develop the app utilizing AWS, MapKit, SwiftUI, and Parse.",
                    "Focused on the UI and practicality of the app to secure 2nd position in CodePath's Demo Day and SF Student Showcase."
                ]}
            />

            <LeadershipOrAffiliation
                organization="Hult Prize"
                role="Campus Director"
                date="Oct 2019 - Aug 2021"
                description={[
                    "Worked with students of Augustana and members of the community to provide a platform for the launch of 3 sustainable businesses.",
                    "Achieved a 250% increment in the participation with Augustana's team placing in the top 6 in the U.S. from 5000+ teams.",
                ]}
            />
        </section >
    );
}

export default LeadershipAndAffiliations;
