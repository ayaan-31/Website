import React from "react";
import LeadershipOrAffiliation from "./LeadershipOrAffiliation.js";

function LeadershipAndAffiliations() {
    return (
        <section className="leadership-and-affiliations">
            <h1 className="heading">LEADERSHIP AND AFFILIATIONS</h1>

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

            <LeadershipOrAffiliation
                organization="CodePath"
                role="Developer"
                date="Sep 2020 – Dec 2020"
                description={[
                    "Selected to participate in CodePath's Fall 2020 program from over 1000 candidates in the U.S. to learn iOS app development.",
                    "Re-created apps like IMDb, Twitter, Instagram, and Mario Kart to build my portfolio and network.",
                ]}
            />

            <LeadershipOrAffiliation
                organization="Augustana eSports Club"
                role="Founder and President"
                date="Sep 2019 - May 2021"
                description={[
                    "Founded the first eSports club at Augustana College to provide a platform for students to compete in tournaments and build their network.",
                ]}
            />
        </section >
    );
}

export default LeadershipAndAffiliations;
