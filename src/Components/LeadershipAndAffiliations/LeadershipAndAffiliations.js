import React from "react";
import LeadershipOrAffiliation from "./LeadershipOrAffiliation.js";

function LeadershipAndAffiliations() {
    return (
        <section className="leadership-and-affiliations">
            <h1 className="heading">LEADERSHIP AND AFFILIATIONS</h1>

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
