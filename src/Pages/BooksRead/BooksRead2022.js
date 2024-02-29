import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";
import hooked from "./hooked.jpg";
import richPoor from "./rich-dad-poor-dad.jpg";
import theInnovators from "./the-innovators.jpg";
import elonMusk from "./elon-musk.jpg";
import artOfLettingGo from "./the-art-of-letting-go.jpg";
import twoAm from "./2am.jpg";
import anUglyTruth from "./an-ugly-truth.jpg";
import notGivingAFuck from "./the-subtle-art-of-not-giving-a-fuck.jpg";

const booksData = [
    {
        title: "Hooked: How to Build Habit-Forming Products",
        description: "Explains how products capture our attention by using the Hook Model -- a four-step process embedded into the products of many successful companies to subtly encourage customer behavior.",
        imageUrl: hooked
    },
    {
        title: "Rich Dad Poor Dad",
        description: "Advocates the importance of financial literacy, financial independence and building wealth \
            through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's \
            financial intelligence.",
        imageUrl: richPoor
    },
    {
        title: "The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution",
        description: "The book is an overview of the history of computer science and the Digital Revolution. \
                    It answers questions like, \“What were the talents that allowed certain inventors and entrepreneurs to turn \
                    their visionary ideas into disruptive realities?\”, \“What led to their creative leaps?\”, “Why did some succeed and others fail?.\” Gifted by @itzbhs.",
        imageUrl: theInnovators
    },
    {
        title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        description: "The book by Ashlee Vance traces Elon Musk's life from his \
                    childhood up to the time he spent at Zip2 and PayPal, and then onto SpaceX, Tesla, and SolarCity.",
        imageUrl: elonMusk
    },
    {
        title: "The Art of Letting Go",
        description: "Talks about how we question the universe, we question ourselves and we question everyone \
            around us when we are struggling to let someone go.",
        imageUrl: artOfLettingGo
    },
    {
        title: "2 AM: A Guide To Restless Nights And Restless Hearts",
        description: "Dives into the world of the unspoken, difficult, \
                    and often gut- wrenching feelings we all experience in the middle of the night.",
        imageUrl: twoAm
    },
    {
        title: "An Ugly Truth: Inside Facebook's Battle for Domination",
        description: "Focuses on the actions of Zuckerberg and Sheryl Sandberg as\
                    they work to turn Facebook into the greatest social media company and a power player in world affairs and covers the \
                    period from the early days of Facebook to about 2021.",
        imageUrl: anUglyTruth
    },
    {
        title: "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life",
        description: "The book cuts through the crap to show us how to stop trying to be \"positive\" \
                    all the time so that we can truly become better, happier people.",
        imageUrl: notGivingAFuck
    },
];

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

export default BooksRead2022;