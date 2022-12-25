import React from "react";
import ProfileOverview from "../ProfileOverview/ProfileOverview.js";
import WorkExperiences from "../WorkExperience/WorkExperiences.js";
import HorizontalDivider from "../HorizontalDivider/HorizontalDivider.js";
import Educations from "../Education/Educations.js";
import HonorsAndAwards from "../HonorAndAward/HonorsAndAwards.js";
import Projects from "../Projects/Projects.js";
import LeadershipAndAffiliations from "../LeadershipAndAffiliations/LeadershipAndAffiliations.js";

function LeftSide() {
    return (
        <section className="left-side">
            <ProfileOverview />
            <WorkExperiences />
            <HorizontalDivider />
            <Educations />
            <HorizontalDivider />
            <HonorsAndAwards />
            <HorizontalDivider />
            <Projects />
            <HorizontalDivider />
            <LeadershipAndAffiliations />
        </section>
    );
}

export default LeftSide;
