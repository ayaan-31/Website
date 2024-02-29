import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";
import tenArguments from "./ten-arguments.jpg";
import makeWonderful from "./make-something-wonderful.png";
import contentDelivery from "./a-corporative-approach-to-content-delivery.png";
import bornACrime from "./born-a-crime.jpg";
import thinkingClearly from "./the-art-of-thinking-clearly.jpg";
import refactoring from "./refactoring.jpg";
import scrum from "./scrum.jpg";
import myBrother from "./my-brother.jpg";
import automatePython from "./automate-the-boring-stuff-with-python.jpg";
import reluctantFundamentalist from "./the-reluctant-fundamentalist.jpg";

const booksData = [
    {
        title: "Ten Arguments For Deleting your Social Media Accounts Right Now",
        description: "Presents a compelling case against the use of social media, citing 10 reasons to encourage readers to reconsider their online presence.",
        imageUrl: tenArguments
    },
    {
        title: "Make Something Wonderful: Steve Jobs in his own words",
        description: "Compiles Jobs’ thoughts into a compelling narrative,\
                    providing a glimpse into his innovative mindset, emphasis on creativity, and passion on excellence.",
        imageUrl: makeWonderful
    },
    {
        title: "A Cooperative Approach to Content Delivery",
        description: "Explores a collaborative approach among content providers\
                    and network operators to optimize the content delivery process in a streaming- focused world.",
        imageUrl: contentDelivery
    },
    {
        title: "Born a Crime: Stories from a South African Childhood",
        description: "The book is a powerful and humorous memoir where Noah speaks\
                    on his experiences growing up in apartheid- era South Africa.The book makes you laugh and cry within a few pages.",
        imageUrl: bornACrime
    },
    {
        title: "The Art of Thinking Clearly",
        description: "Explores various cognitive biases and logical fallacies that often\
                    cloud human decision- making.I read this for our book club at work.",
        imageUrl: thinkingClearly
    },
    {
        title: "Refactoring: Improving the Design of Existing Code",
        description: "This book was also read for the book club at work.\
                    It focuses on the practice of improving the structure and design of existing code to enhance readability, maintainability, and quality.",
        imageUrl: refactoring
    },
    {
        title: "Scrum: The Art of Doing Twice the Work in Half the Time",
        description: "Outlines the principles and practices of Scrum,\
                    a framework for agile project management to improve a team’s efficiency and productivity.Also read for a book club at work.",
        imageUrl: scrum
    },
    {
        title: "My Brother",
        description: "This is a biography of Muhammad Ali Jinnah, the founder of Pakistan, by his sister Fatima Jinnah.\
                    A major focus of the book are his political aspirations and how his failing health affected them.",
        imageUrl: myBrother
    },
    {
        title: "Automate the Boring Stuff with Python",
        description: "Focuses on automating repetitive tasks like web scraping, handling Excel spreadsheets, scheduling, etc using Python.",
        imageUrl: automatePython
    },
    {
        title: "The Reluctant Fundamentalist",
        description: "This is a story presented as a monologue by a Pakistani international student in the U.S. who becomes disillusioned\
                    with the American dream after 9/11. His words about his identity, cultural clash, and being far from home really spoke to me.\
                    Thanks @racheetah_1 for the recommendation! :)",
        imageUrl: reluctantFundamentalist
    },
];

function BooksRead2023() {
    return (
        <section className="books-read">
            <Helmet>
                <title>Books Read</title>
            </Helmet>

            <div className="heading">
                Books Read in 2023
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

export default BooksRead2023;
