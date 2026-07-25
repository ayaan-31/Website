import React from "react";
import "./ContactInfo.css";
import LinkedinLogo from "./linkedin-logo.jpg";
import DownloadLogo from "./download-logo.jpg";
import ResumePdf from "./resume-ayaan-afzal.pdf";

function ContactInfo() {
    return (
        <section className="contact-info">
            Contact

            <div className="email">
                <a className="email" href="mailto:mayaan31@iastate.edu">mayaan31@iastate.edu &#8594;</a>
            </div>

            <div className="phone">
                <a className="phone" href="tel:+15154252328">(515) 425-2328 &#8594;</a>
            </div>

            <div className="logos">
                <a className="logo" href="https://www.linkedin.com/in/mayaanafzal/" target="_blank" rel="noreferrer">
                    <img className="linkedin-logo" src={LinkedinLogo} alt="Linkedin logo." />
                </a>

                <a className="logo" href={ResumePdf} target="_blank" rel="noreferrer">
                    <img className="download-logo" src={DownloadLogo}
                        alt="PDF file download logo for Muhammad Ayaan Afzal's resume." />
                </a>
            </div>
        </section>
    );
}

export default ContactInfo;
