import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";
import weShouldAllBeFeministsImage from "../../Assets/Images/we-should-all-be-feminists.jpg";
import aQuickAndEasyGuide from "../../Assets/Images/a-quick-and-easy-guide-to-they-them-pronouns.jpg";
import pheonixProject from "../../Assets/Images/the-pheonix-project.jpg"
import briefAnswers from "../../Assets/Images/brief-answers-to-the-big-questions.jpg"
import whatIf from "../../Assets/Images/what-if.jpg"
import outliers from "../../Assets/Images/outliers.jpg"
import theSecret from "../../Assets/Images/the-secret.jpg"
import avoidAClimateDisaster from "../../Assets/Images/how-to-avoid-a-climate-disaster.jpg"
import structureOfScientificRevolutions from "../../Assets/Images/the-structure-of-scientific-revolutions.jpg"
import presentationSecrets from "../../Assets/Images/the-presentation-secrets-of-steve-jobs.jpg"

const booksData = [
    {
        title: "We Should All Be Feminists",
        description: "Defines feminism for the 21st century. Talks about discrimination and institutional behaviors that women face worldwide. Recommended by @musingintheocean.",
        imageUrl: weShouldAllBeFeministsImage
    },
    {
        title: "A Quick & Easy Guide to They/Them Pronouns",
        description: "Explains what pronouns are, why they matter, how to use them, and how to correct yourself or others if you make a mistake. \
                    Borrowed it from a coworker at Raven who had this book on their desk.",
        imageUrl: aQuickAndEasyGuide
    },
    {
        title: "The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win",
        description: "Explains what DevOps is, how it can be used to cut down Software Development Life Cycle and improve a company’s IT organizations. Recommended by my mentor at Raven.",
        imageUrl: pheonixProject
    },
    {
        title: "Brief Answers to the Big Questions",
        description: "Stephan Hawking answers big questions like “Is There God?”, “Should We Colonize Space?”, “Will AI Outsmart Us?” and others in “Brief Answers to the Big Questions.”",
        imageUrl: briefAnswers
    },
    {
        title: "What If?",
        description: "Serious Scientific Answers to Absurd Hypothetical Questions” gives scientific and logical explanations to questions like how fast can \
                    we hit a speed bump while driving and live, what would happen if everyone on Earth jumped (and landed) at the same time, etc.",
        imageUrl: whatIf
    },
    {
        title: "Outliers: The Story of Success",
        description: "Talks about the background, family, and culture of successful people. It also explains the secrets of software billionaires,\
                    what it takes to be a great soccer player, why Asians are good at math, etc. Gifted by @lauarce99",
        imageUrl: outliers
    },
    {
        title: "The Secret",
        description: "Contains wisdom from modern-day teachers who have achieved health, wealth, and happiness by using The Secret.\
                    It also brings to light stories of eradicating disease, acquiring massive wealth, overcoming obstacles, and achieving what many would regard as impossible.",
        imageUrl: theSecret
    },
    {
        title: "How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need",
        description: "Bill Gates shares how we can prevent the climate catastrophe by investing in research, inventing new technologies,\
                    deploying them quickly at large scale, and meaningful ways each one of us can help in.",
        imageUrl: avoidAClimateDisaster
    },
    {
        title: "The Structure of Scientific Revolutions",
        description: "Challenges the linear notions of scientific progress, arguing that transformative ideas don’t arise from the gradual process of experimentation but breakthrough moments that disrupt accepted thinking occur outside of \"normal science.\"",
        imageUrl: structureOfScientificRevolutions
    },
    {
        title: "The Presentation Secrets of Steve Jobs",
        description: "Shares Steve Jobs’ presentation secrets and how we can use them to captivate our audience’s attention, sell our\
                    ideas enthusiastically, and make our presentations engaging and seem effortless.",
        imageUrl: presentationSecrets
    },
];

function BooksRead2021() {
    return (
        <section className="books-read">
            <Helmet>
                <title>Books Read</title>
            </Helmet>

            <div className="heading">
                Books Read in 2021
            </div>

            <div className="content">
                <div className="books-read-grid">
                    {booksData.map((book, index) => (
                        <div key={index} className="book-grid-item">
                            <img src={book.imageUrl} alt={book.title} className="book-image" />
                            <div className="book-details">
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-description">{book.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BooksRead2021;
