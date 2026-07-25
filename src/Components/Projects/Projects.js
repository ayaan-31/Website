import React from "react";
import Project from "./Project.js";

function Projects() {
    return (
        <section className="personal-projects">
            <h1 className="heading">PROJECTS</h1>

            <Project
                project="Human-Powered Tiller Design Project (ME 2700)"
                role="Lead Mechanical Designer"
                date="Aug 2025 - Dec 2025"
                description={[
                    "Directed SolidWorks design and material selection for a human-powered tiller.",
                    "Ran DFM/DFA and tracked the BOM to hit a $150 budget.",
                    "Fabricated a functional prototype on the lathe, mill, bandsaw, and drill press."
                ]}
            />

            <Project
                project="Makala Soprano Ukulele (Model MK-S)"
                role="Designer"
                date="Jul 2025 - Aug 2025"
                description={[
                    "Recreated a Makala soprano ukulele from direct measurement.",
                    "Modeled a high-fidelity CAD assembly in SolidWorks with complex surfaces.",
                    "Printed a 3D scale replica matching the original geometry."
                ]}
            />

            <Project
                project="Tire Rim Design for Solar Car — PRISUM Team"
                role="Design Engineer"
                date="Jun 2025 - Jul 2025"
                description={[
                    "Produced a lightweight rim via 3D printing, engineered for strength and cost.",
                    "Tuned geometry for real-world driving loads and vehicle dynamics.",
                    "Balanced aesthetic and functional requirements for the PRISM team."
                ]}
            />

            <Project
                project="Piston Engine – 4-Cylinder Assembly"
                role="Designer"
                date="Jun 2025 - Jun 2025"
                description={[
                    "Assembled a 4-cylinder piston engine from scratch in SolidWorks.",
                    "Simulated crankshaft and piston motion using mechanical mates.",
                    "Strengthened assembly design and constraint-management skills."
                ]}
            />
        </section>
    );
}

export default Projects;
