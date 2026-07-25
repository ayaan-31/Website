import React from "react";
import WorkExperience from "./WorkExperience.js";

function WorkExperiences() {
    return (
        <section className="work-experiences">
            <h1 className="heading">WORK EXPERIENCE</h1>

            <WorkExperience
                position="Manufacturing Engineering Intern"
                company="General Stamping & Metalworks (GSM) — South Bend, IN"
                date="Jun 2026 - Jul 2026"
                description={[
                    "Designed a CNH Industrial production weld fixture end-to-end — toggle-clamp locating scheme built to print, GD&T drawings, and a base plate sized to production standards — released directly to the line.",
                    "Built a TORO fixture combining poka-yoke error-proofing with an in-process check, and root-caused a part-shifting defect on a separate TORO weld fixture, redesigning clamping and locating to restore weld quality.",
                    "Delivered a weld fixture for customer TMH.",
                    "Drove a Kaizen CIP on an Amada HFA400W bandsaw — a coolant-recapture tray and coolant switch cut weekly loss from 1.5 to 0.5 gal, saving up to $7,600/yr (~$38,000 over 5 years).",
                    "Inspected first-article parts for PPAP using CMM probing software and manual measurements to verify dimensional conformance.",
                    "Contributed to internal CI projects — an INPR vision-inspection camera-mounting table and actuator upgrade, a digital twin of the nail-gun assembly cart, and a PBR cobot mounting holder for brake-line automation."
                ]}
            />

            <WorkExperience
                position="Undergraduate Teaching Assistant - EM 3240 Mechanics of Materials"
                company="Iowa State University - College of Engineering"
                date="Jan 2026 - Present"
                description={[
                    "Support instruction for 120 students in Mechanics of Materials.",
                    "Teach stress-strain behavior, failure theories, and buckling.",
                    "Guide problem-solving on axial, torsional, and combined loadings."
                ]}
            />

            <WorkExperience
                position="Undergraduate Teaching Assistant - ME 1700"
                company="Iowa State University - College of Engineering"
                date="Jan 2026 - Present"
                description={[
                    "Mentor 30 students in engineering graphics and CAD modeling.",
                    "Introduce multiview projections, dimensioning, and 3D visualization.",
                    "Review drawings and design assignments for accuracy and tolerancing."
                ]}
            />

            <WorkExperience
                position="Undergraduate Teacher Assistant - CE 2740 Engineering Statics"
                company="Iowa State University - College of Engineering"
                date="Aug 2025 - Present"
                description={[
                    "Lead weekly statics recitations for 15 students.",
                    "Grade homework and exams for a 120-student section.",
                    "Align scoring standards with instructors across sections."
                ]}
            />

            <WorkExperience
                position="Undergraduate Research Assistant"
                company="Mechanical Engineering Department - STAMP Group (Prof. Tuhin Mukherjee)"
                date="Jan 2025 - Present"
                description={[
                    "Optimize WAAM parameters by simulating droplet transfer and weld pool oscillation.",
                    "Enhance Fortran simulation code to model bulge formation and oscillatory motion.",
                    "Calibrate simulations against thermal and velocity data to reduce defects.",
                    "Conduct parametric studies in TECPLOT 360 on temperature and solidification."
                ]}
            />

            <WorkExperience
                position="Product Development Engineering Intern"
                company="Asia Gas & Electrical Appliances"
                date="Dec 2025 - Jan 2026"
                description={[
                    "Joined the team scaling production of a new electric mini tandoor oven for the German market, working hands-on with die press tooling.",
                    "Redesigned the oven door's bends to standard radii matching existing dies — faster press cycles, no operator misalignment.",
                    "Reverse engineered a thermal appliance, rebuilding its CAD geometry and contributing to the BOM."
                ]}
            />
        </section>
    );
}

export default WorkExperiences;
