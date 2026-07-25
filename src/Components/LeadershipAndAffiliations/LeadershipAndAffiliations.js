import React from "react";
import LeadershipOrAffiliation from "./LeadershipOrAffiliation.js";

function LeadershipAndAffiliations() {
    return (
        <section className="leadership-and-affiliations">
            <h1 className="heading">LEADERSHIP AND AFFILIATIONS</h1>

            <LeadershipOrAffiliation
                organization="Pakistan Student Association, Iowa State University"
                role="Vice President"
                date="Sep 2025 - Present"
                description={[
                    "Plan and host cultural, social, and academic events for 150 students.",
                    "Coordinate communication across members, the executive team, and administration.",
                    "Launch initiatives to raise involvement and foster an inclusive campus."
                ]}
            />

            <LeadershipOrAffiliation
                organization="Pakistan Student Association, Iowa State University"
                role="Treasurer"
                date="Sep 2024 - Aug 2025"
                description={[
                    "Managed a $1,000 budget and event funding with 4 executive members.",
                    "Maintained financial records in compliance with university policy."
                ]}
            />

            <LeadershipOrAffiliation
                organization="Birch Hall Cabinet, Iowa State University"
                role="President"
                date="Sep 2024 - May 2025"
                description={[
                    "Headed a 5-member team organizing community initiatives for Birch Hall.",
                    "Invested $600 in funded initiatives to boost resident engagement.",
                    "Facilitated communication between residents and dorm administration."
                ]}
            />

            <LeadershipOrAffiliation
                organization="Ray of Hope"
                role="Co-founder and Vice President"
                date="Oct 2015 - Present"
                description={[
                    "Co-founded and serve as VP of this poverty-alleviation nonprofit.",
                    "Empowered 500+ underprivileged households through joint initiatives.",
                    "Impacted 2,000+ lives directly."
                ]}
            />
        </section>
    );
}

export default LeadershipAndAffiliations;
