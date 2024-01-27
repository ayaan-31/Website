import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";

function BooksRead2022() {
    return (
        <section className="books-read">
            <Helmet>
                <title>Books Read</title>
            </Helmet>

            <div className="heading">
                Books Read in 2022
            </div>

            <div className="content">
                <ul className="books-read-list">
                    <li className="book-title">
                        “Hooked: How to Build Habit-Forming Products” explains how products capture our attention by using the
                        Hook Model—a four-step process embedded into the products of many successful companies to subtly encourage customer behavior.
                    </li>
                    <li className="book-title">
                        “Rich Dad Poor Dad” advocates the importance of financial literacy, financial independence and building wealth
                        through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's
                        financial intelligence.
                    </li>
                    <li className="book-title">
                        “The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution” is an overview of the
                        history of computer science and the Digital Revolution. It answers questions like,
                        “What were the talents that allowed certain inventors and entrepreneurs to turn their visionary ideas into disruptive
                        realities?”, “What led to their creative leaps?”, “Why did some succeed and others fail?.” Gifted by @itzbhs.
                    </li>
                    <li className="book-title">
                        “Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future” by Ashlee Vance traces Elon Musk's life from his
                        childhood up to the time he spent at Zip2 and PayPal, and then onto SpaceX, Tesla, and SolarCity.
                    </li>
                    <li className="book-title">
                        “The Art of Letting Go” talks about how we question the universe, we question ourselves and we question everyone
                        around us when we are struggling to let someone go.
                    </li>
                    <li className="book-title">
                        “2 AM: A Guide To Restless Nights And Restless Hearts” dives into the world of the unspoken, difficult,
                        and often gut-wrenching feelings we all experience in the middle of the night.
                    </li>
                    <li className="book-title">
                        “An Ugly Truth: Inside Facebook's Battle for Domination” focuses on the actions of Zuckerberg and Sheryl Sandberg as
                        they work to turn Facebook into the greatest social media company and a power player in world affairs and covers the
                        period from the early days of Facebook to about 2021.
                    </li>
                    <li className="book-title">
                        “The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life” cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people.
                    </li>
                </ul>
            </div>


        </section >
    );
}

export default BooksRead2022;
