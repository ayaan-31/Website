import React from "react";
import ProfileOverview from "../ProfileOverview/ProfileOverview.js";
import WorkExperiences from "../WorkExperience/WorkExperiences.js";
import HorizontalDivider from "../HorizontalDivider/HorizontalDivider.js";
import Educations from "../Education/Educations.js";
import HonorsAndAwards from "../HonorAndAward/HonorsAndAwards.js";
import Publications from "../Publications/Publications.js";
import Projects from "../Projects/Projects.js";
import LeadershipAndAffiliations from "../LeadershipAndAffiliations/LeadershipAndAffiliations.js";
import "./LeftSide.css";

function LeftSide() {
    return (
        <section className="left-side">
            <ProfileOverview />
            <WorkExperiences />
            <HorizontalDivider />
            <Educations />
            <HorizontalDivider />
            <Projects />
            <HorizontalDivider />
            <HonorsAndAwards />
            <HorizontalDivider />
            <Publications />
            <HorizontalDivider />
            <LeadershipAndAffiliations />
        </section>
    );
}

export default LeftSide;
