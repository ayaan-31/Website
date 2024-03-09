import React from "react";

function HonorsAndAwards() {
    return (
        <section className="honors-and-awards">
            <h1 className="heading">HONORS AND AWARDS</h1>

            <ul className="honor-or-award-points">
                {/* BUG: Couldn't further modularize this because of how I want the <li> items to be arranged in columns */}
                <li>Global Leader Scholar</li>
                <li>Slate Ronning International Scholar</li>
                <li>Fred C. and J. Marie Christopherson Scholar</li>
                <li>AURAFA Award Recipient</li>
            </ul>
        </section>
    );
}

export default HonorsAndAwards;
