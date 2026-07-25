import React from "react";
import "./Portfolio.css";
import Helmet from "react-helmet";
import ProfileOverview from "../../Components/ProfileOverview/ProfileOverview.js";
import PortfolioProject from "../../Components/Portfolio/PortfolioProject.js";
import TillerDesignExpoPoster from "./documents/ME-270-Design-Expo-Poster.pdf";
import CNHWeldFixtureImg from "./CNH weld fixture.png";
import TOROPokaYokeImg from "./TORO Poka-yoke.png";
import CoolantTrayImg from "./Coolant tray.png";
import INPRImg from "./INPR.png";
import TillerCADImg from "./tiller - CAD.jfif";
import TillerPrototypeImg from "./tiller - prototype.jfif";
import UkuleleCADImg from "./ukelele - CAD.jfif";
import TireRimImg from "./prisum tire rim.jfif";
import EngineImg from "./4 piston engine.jfif";
import TOROFixtureImg1 from "./TORO defect.png";
import TOROFixtureImg2 from "./TORO defect 1.png";
import TOROFixtureImg3 from "./TORO defect 2.png";

function Portfolio() {
    return (
        <section className="portfolio">
            <Helmet>
                <title>Portfolio</title>
            </Helmet>

            <div className="portfolio-hero">
                <ProfileOverview />
                <p className="portfolio-intro">
                    Mechanical engineering junior with a manufacturing background — raised around my
                    family's kitchen-appliance manufacturing business, which shaped an early interest
                    in how things are actually built. I now design fixtures and production tooling in
                    SolidWorks for real production lines, and take on independent design projects,
                    from reverse engineering to CAD modeling, outside of coursework.
                </p>
            </div>

            <div className="portfolio-section">
                <h2 className="portfolio-section-heading">Skills</h2>
                <ul className="portfolio-skills">
                    <li>SolidWorks</li>
                    <li>CAD</li>
                    <li>GD&T</li>
                    <li>Tolerance stack-up</li>
                    <li>DXF</li>
                    <li>DFM/DFA</li>
                    <li>PPAP</li>
                    <li>Poka-yoke</li>
                    <li>Progressive fixture design</li>
                    <li>Plex (ERP/MES)</li>
                    <li>CNC machining</li>
                    <li>G-code</li>
                    <li>Vision-system integration</li>
                    <li>Reverse engineering</li>
                    <li>3D printing</li>
                    <li>Wire Arc Additive Manufacturing (WAAM)</li>
                    <li>Tecplot 360</li>
                    <li>Python</li>
                    <li>Fortran</li>
                    <li>MATLAB</li>
                    <li>MS Excel</li>
                    <li>monday.com</li>
                </ul>
            </div>

            <div className="portfolio-section">
                <h2 className="portfolio-section-heading">Projects</h2>
                <div className="portfolio-projects">
                    <PortfolioProject
                        title="CNH — Weld Fixture Design"
                        context="General Stamping & Metalworks — CNH Industrial — Manufacturing Engineering Intern — June 2026 – Present"
                        objective="Design a weld fixture for a CNH Industrial part to accurately locate and clamp it for production welding."
                        contribution="Independently designed the fixture in SolidWorks: placed toggle clamps for repeatable clamping force, defined the locating scheme, and sized the base plate to match production workholding standards."
                        technicalDetail={[
                            "Toggle clamps at each end fully constrain the part without blocking the weld path.",
                            "Locating features pulled directly from the part print for cycle-to-cycle repeatability.",
                            "Base plate sized to the plant's standard fixture-mounting layout."
                        ]}
                        result="Fixture is in active use on the production line, holding the CNH part accurately for every weld cycle."
                        tags={["SolidWorks", "GD&T", "Locating scheme design", "Weldment fixturing"]}
                        atAGlance={[
                            { label: "Customer", value: "CNH Industrial" },
                            { label: "Software", value: "SolidWorks" }
                        ]}
                        images={["CNH weld fixture — SolidWorks"]}
                        imageFiles={[CNHWeldFixtureImg]}
                    />

                    <PortfolioProject
                        title="TORO — Progressive Fixture Design (Tack + Final Weld)"
                        context="General Stamping & Metalworks — TORO — Manufacturing Engineering Intern — June 2026 – Present"
                        objective="Design a two-station progressive fixture for a TORO part welded by a cobot whose torch can't reach every joint from one orientation — station 1 tacks what's reachable, station 2 finishes the rest."
                        contribution="Independently designed both stations in SolidWorks. Revised station 1's clamp and locating layout after an early version let the part shift, then built station 2 to pick the part up from its tack datum on locating bushings."
                        technicalDetail={[
                            "Station 1 (tack): clamps and pins hold the part in the cobot-reachable orientation; the initial design let it shift, the revised layout fixed it.",
                            "Station 2 (final weld): two bushings pick the part up from its tack datum; a single clamp leaves the remaining joints open to the torch.",
                            "Shared base-plate mounting layout keeps one consistent part datum across both stations."
                        ]}
                        result="Both stations are in active use, letting the cobot complete every joint despite reach limits at any single orientation."
                        tags={["SolidWorks", "Progressive fixture design", "Robot reach/access analysis", "Multi-station tooling"]}
                        atAGlance={[
                            { label: "Customer", value: "TORO" },
                            { label: "Stations", value: "2 — tack, then final weld" },
                            { label: "Software", value: "SolidWorks" }
                        ]}
                        images={[
                            "Fixture — SolidWorks",
                            "Fixture — alternate view, SolidWorks",
                            "Fixture — bushings and clamp detail, SolidWorks"
                        ]}
                        imageFiles={[TOROFixtureImg1, TOROFixtureImg2, TOROFixtureImg3]}
                    />

                    <PortfolioProject
                        title="TORO — Weld + Check Fixture Design (Poka-Yoke)"
                        context="General Stamping & Metalworks — TORO — Manufacturing Engineering Intern — June 2026 – Present"
                        objective="Design a combined weld-and-check fixture for a TORO part — a poka-yoke (mistake-proofing) design that locates, clamps, and dimensionally verifies the part in one tool, so an out-of-spec part can't be welded."
                        contribution="Independently designed the fixture in SolidWorks, combining weld-locating and poka-yoke check features on a single base plate defined directly from the part print."
                        technicalDetail={[
                            "Toggle clamps at each end fully constrain the part in a fixed orientation before welding.",
                            "Poka-yoke features only let the part seat if it matches print, blocking an out-of-spec part from being welded.",
                            "One tool combines locating and checking, cutting the handling steps per part."
                        ]}
                        result="Fixture is in active use, error-proofing the weld setup for every TORO part on the line."
                        tags={["SolidWorks", "Poka-yoke (mistake-proofing)", "Go/no-go gauging", "Lean manufacturing", "Error-proofing design"]}
                        atAGlance={[
                            { label: "Customer", value: "TORO" },
                            { label: "Function", value: "Weld locating + dimensional check" },
                            { label: "Software", value: "SolidWorks" }
                        ]}
                        images={["Weld + check fixture (poka-yoke) — SolidWorks"]}
                        imageFiles={[TOROPokaYokeImg]}
                    />

                    <PortfolioProject
                        title="Coolant Tray Design — Continuous Improvement"
                        context="General Stamping & Metalworks — Internal project — Manufacturing Engineering Intern — June 2026 – Present"
                        objective="Internal continuous improvement project: design coolant trays for a roller conveyor to capture cutting coolant that was being lost, cutting waste and cost."
                        contribution="Independently designed the tray in SolidWorks to retrofit the existing conveyor, sizing and positioning it to catch runoff and route it back into the system."
                        technicalDetail={[
                            "Tray geometry matched to the conveyor's width and roller spacing for a drop-in fit — no structural changes needed.",
                            "Positioned at the exact points coolant was reaching the floor.",
                            "Built as part of a shop-wide effort to cut waste and material cost."
                        ]}
                        result="Reduced coolant waste and cost, saving an estimated $7,600/year in recovered coolant; now in use on the production floor."
                        tags={["SolidWorks", "Sheet-metal design", "Retrofit design for existing equipment", "Waste-stream reduction", "Cost-benefit analysis"]}
                        atAGlance={[
                            { label: "Project type", value: "Internal project" },
                            { label: "Program", value: "Continuous improvement (CI)" },
                            { label: "Focus", value: "Coolant capture and reuse" },
                            { label: "Savings", value: "$7,600/year (coolant recovery)" }
                        ]}
                        images={["Roller conveyor with coolant trays — SolidWorks"]}
                        imageFiles={[CoolantTrayImg]}
                    />

                    <PortfolioProject
                        title="INPR Vision-Inspection Cart"
                        context="General Stamping & Metalworks — Internal project, Insertion Press (INPR) — Manufacturing Engineering Intern — June 2026 – Present"
                        objective="Internal continuous improvement project on the insertion press (INPR) process: design a mobile vision-inspection cart to verify insertions and catch defects earlier."
                        contribution="Designed the cart and fixture in SolidWorks: the mobile frame, a repeatable part-holding surface, and the overhead mount for the vision sensor."
                        technicalDetail={[
                            "Casters let the cart be staged at the insertion press station as needed.",
                            "Overhead frame sizes the sensor's field of view to fully capture the part.",
                            "Fixture shelf holds the part in a fixed, repeatable position for consistent readings."
                        ]}
                        result="Improved inspection consistency on the insertion press process; now in daily use."
                        tags={["SolidWorks", "Vision-system integration", "Mobile equipment design", "Process inspection", "Ergonomic layout"]}
                        atAGlance={[
                            { label: "Project type", value: "Internal project" },
                            { label: "Process", value: "Insertion press (INPR)" },
                            { label: "Function", value: "Vision-based part inspection" }
                        ]}
                        images={["INPR vision-inspection cart — SolidWorks"]}
                        imageFiles={[INPRImg]}
                    />

                    <PortfolioProject
                        title="Human-Powered Tiller Design"
                        context="Iowa State University, ME 2700 — Classroom Team Project — Aug 2025 – Dec 2025"
                        objective="Design and build a human-powered tiller (ME 2700) that maximizes soil-turning performance within a strict $150 material budget and full BOM/DFM documentation."
                        contribution="Led mechanical design and material selection in SolidWorks; owned the DFM/DFA analysis and the full bill of materials to stay on budget."
                        technicalDetail={[
                            "CAD model used to tolerance and validate every custom part before cutting metal.",
                            "Fabricated parts on the lathe, mill, bandsaw, and drill press, designing for machining feasibility from the start."
                        ]}
                        result="Delivered a fully functional, budget-compliant prototype that passed every performance check."
                        tags={["SolidWorks", "DFM/DFA", "Machining (lathe, mill, bandsaw, drill press)", "Budget-constrained design", "BOM development"]}
                        atAGlance={[
                            { label: "Team", value: "ME 2700 class team" },
                            { label: "Budget", value: "$150 material budget" },
                            { label: "Software", value: "SolidWorks" }
                        ]}
                        images={[
                            "Tiller — SolidWorks CAD model",
                            "Finished prototype in field testing"
                        ]}
                        imageFiles={[TillerCADImg, TillerPrototypeImg]}
                        documents={[
                            { label: "Design Expo Poster (PDF)", href: TillerDesignExpoPoster }
                        ]}
                    />

                    <PortfolioProject
                        title="Makala Soprano Ukulele — Reverse Engineering"
                        context="Iowa State University — Outside-of-classroom Project, Model MK-S — Jul 2025 – Aug 2025"
                        objective="Reverse-engineer a Makala soprano ukulele into a precise, manufacturable CAD model, capturing exact geometry and surface detail."
                        contribution="Measured and modeled the instrument in SolidWorks, rebuilding its complex curved surfaces from direct physical measurement."
                        technicalDetail={[
                            "High-fidelity model built entirely from measurement of the original instrument.",
                            "3D-printed replica used to verify geometry and surface accuracy."
                        ]}
                        result="Produced a replica that closely matched the original's geometry and surface detail."
                        tags={["SolidWorks", "Reverse engineering", "Surface modeling", "Metrology", "3D printing"]}
                        atAGlance={[
                            { label: "Method", value: "Reverse-engineered from a physical instrument" },
                            { label: "Output", value: "High-fidelity CAD model + 3D-printed replica" },
                            { label: "Software", value: "SolidWorks" }
                        ]}
                        images={["Ukulele — SolidWorks CAD model"]}
                        imageFiles={[UkuleleCADImg]}
                    />

                    <PortfolioProject
                        title="Solar Car Tire Rim Design"
                        context="Iowa State University, PRISM Team — Outside-of-classroom Project — Jun 2025 – Jul 2025"
                        objective="Design a lightweight tire rim for the PRISM solar car team, balancing structural strength against cost and weight under real driving loads."
                        contribution="Designed and 3D printed a custom rim in SolidWorks, applying structural and cost trade-off analysis to the geometry."
                        technicalDetail={[
                            "Mechanical features and mates modeled to reflect real-world component interaction.",
                            "Structural and cost trade-offs guided material and geometry choices."
                        ]}
                        result="Delivered a rim that met the team's performance requirements at lower cost and weight."
                        tags={["SolidWorks", "Structural design", "Weight optimization", "3D printing", "Cost-performance trade-off analysis"]}
                        atAGlance={[
                            { label: "Team", value: "PRISM solar car team" },
                            { label: "Method", value: "Designed in SolidWorks, 3D printed" },
                            { label: "Priorities", value: "Structural strength, cost, weight" }
                        ]}
                        images={["PRISM tire rim — SolidWorks CAD model"]}
                        imageFiles={[TireRimImg]}
                    />

                    <PortfolioProject
                        title="Four-Cylinder Piston Engine Assembly"
                        context="Iowa State University — Outside-of-classroom Project — Jun 2025 – Jun 2025"
                        objective="Model a 4-cylinder piston engine assembly from scratch to build a mechanically accurate representation of combustion-engine motion."
                        contribution="Modeled every component — crankshaft, pistons, hardware — in SolidWorks and assembled them with mates that reproduce true engine motion."
                        technicalDetail={[
                            "Precise modeling reproduced realistic component interaction and clearances.",
                            "Mates configured to simulate crankshaft/piston motion through a full combustion cycle."
                        ]}
                        result="Produced a mechanically accurate assembly demonstrating real internal-combustion component interaction."
                        tags={["SolidWorks", "Assembly modeling", "Mechanism design", "Tolerancing"]}
                        atAGlance={[
                            { label: "Components modeled", value: "Crankshaft, pistons, connecting hardware" },
                            { label: "Motion simulated", value: "Full combustion cycle" },
                            { label: "Software", value: "SolidWorks" }
                        ]}
                        images={["4-cylinder piston engine — SolidWorks assembly"]}
                        imageFiles={[EngineImg]}
                    />
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
