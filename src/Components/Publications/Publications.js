import React from "react";
import Publication from "./Publication.js";

function Publications() {
    return (
        <section className="publications">
            <h1 className="heading">PUBLICATIONS</h1>

            <Publication
                title="A Review on In-Situ Monitoring in Wire Arc Additive Manufacturing: Technologies, Applications, Challenges, and Needs"
                venue="Machines (MDPI)"
                date="Dec 2025"
                link="https://www.mdpi.com/2075-1702/14/1/19"
                description={[
                    "Reviewed in-situ monitoring technologies in Wire Arc Additive Manufacturing, synthesizing sensing capabilities such as infrared thermography and laser profiling for right-the-first-time manufacturing.",
                    "Proposed a strategic framework for machine learning and sensor fusion to enhance the structural integrity and precision of large-scale 3D-printed metal components."
                ]}
            />

            <Publication
                title="Computational Modeling of Temperature Distribution and Track Integrity During Wire Arc Additive Manufacturing (WAAM) with Arc Oscillation"
                venue="American Welding Society"
                date="Sep 2025"
                description={[
                    "Achieved 1st place out of 25 student entries and secured a $750 monetary award."
                ]}
            />

            <Publication
                title="Investigating Path Planning in Pulse and Longitudinal Arc Oscillation During Collaborative Robot-Assisted Wire Arc-Directed Energy Deposition"
                venue="Graduate and Professional Student Senate"
                date="Jun 2025"
            />
        </section>
    );
}

export default Publications;
