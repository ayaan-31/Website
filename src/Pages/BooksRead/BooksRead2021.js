import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";

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
                <ul className="books-read-list">
                    <li className="book-title">
                        “We Should All Be Feminists” defines feminism for the 21st century.
                        It talks about the discrimination and institutional behaviors that women face around the world.
                        Recommended by @musingintheocean.
                    </li>
                    <li className="book-title">
                        “A Quick & Easy Guide to They/Them Pronouns” explains what pronouns are, why they matter, how to use them,
                        and how to correct yourself or others if you make a mistake.
                        Borrowed it from a coworker at Raven who has this book on their desk.
                    </li>
                    <li className="book-title">
                        “The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win” explains what DevOps is,
                        how it can be used to cut down Software Development Life Cycle and improve a company’s IT organizations.
                        Recommended by my mentor at Raven.
                    </li>
                    <li className="book-title">
                        Stephan Hawking answers big questions like “Is There God?”, “Should We Colonize Space?”, “Will AI Outsmart Us?”
                        and others in “Brief Answers to the Big Questions.”
                    </li>
                    <li className="book-title">
                        “What If? Serious Scientific Answers to Absurd Hypothetical Questions” gives scientific and logical explanations
                        to questions like how fast can we hit a speed bump while driving and live, what would happen if everyone on Earth
                        jumped (and landed) at the same time, etc.
                    </li>
                    <li className="book-title">
                        “Outliers: The Story of Success” talks about the background, family, and culture of successful people.
                        It also explains the secrets of software billionaires, what it takes to be a great soccer player, why Asians are good at math,
                        etc. Gifted by @lauarce99.
                    </li>
                    <li className="book-title">
                        “The Secret” contains wisdom from modern-day teachers who have achieved health, wealth, and happiness by using The Secret.
                        It also brings to light stories of eradicating disease, acquiring massive wealth, overcoming obstacles, and achieving what
                        many would regard as impossible.
                    </li>
                    <li className="book-title">
                        In “How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need,”
                        Bill Gates shares how we can prevent the climate catastrophe by investing in research, inventing new technologies,
                        deploying them quickly at large scale, and meaningful ways each one of us can help in.
                    </li>
                    <li className="book-title">
                        "The Structure of Scientific Revolutions” challenges the linear notions of scientific progress, arguing that transformative
                        ideas don’t arise from the gradual process of experimentation but breakthrough moments that disrupt accepted thinking occur
                        outside of “normal science.”
                    </li>
                    <li className="book-title">
                        "The Presentation Secrets of Steve Jobs” shares Steve Jobs’ presentation secrets and how we can use them to captivate our
                        audience’s attention, sell our ideas enthusiastically, and make our presentations engaging and seem effortless.
                    </li>
                </ul>
            </div>


        </section >
    );
}

export default BooksRead2021;
