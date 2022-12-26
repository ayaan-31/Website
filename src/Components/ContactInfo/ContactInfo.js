import React from "react";
import GitHubLogo from "../../Assets/Images/github-logo.png";
import LinkedinLogo from "../../Assets/Images/linkedin-logo.jpg";
import DownloadLogo from "../../Assets/Images/download-logo.jpg";
import ResumePdf from "../../Assets/Files/resume-taha-afzal.pdf";

function ContactInfo() {
    return (
        <section className="contact-info">
            Contact

            <div className="email">
                <a className="email" href="mailto:tahaafzal5@hotmail.com">tahaafzal5@hotmail.com &#8594;</a>
            </div>

            <div className="phone">
                <a className="phone" href="tel:+12245223432">(224) 522-3432 &#8594;</a>
            </div>

            <div className="logos">
                <a className="logo" href="http://github.com/tahaafzal5/" target="_blank" rel="noreferrer">
                    <img className="github-logo" src={GitHubLogo} alt="GitHub logo." />
                </a>
                <a className="logo" href="http://linkedin.com/in/tahaafzal5/" target="_blank" rel="noreferrer">
                    <img className="linkedin-logo" src={LinkedinLogo} alt="Linkedin logo." />
                </a>

                <a className="logo" href={ResumePdf} target="_blank" rel="noreferrer">
                    <img className="download-logo" src={DownloadLogo}
                        alt="PDF file download logo for Taha's resume." />
                </a>
            </div>
        </section>
    );
}

export default ContactInfo;
