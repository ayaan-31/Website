import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";

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
                <ul className="books-read-list">
                    <li className="book-title">
                        “Ten Arguments For Deleting your Social Media Accounts Right Now” presents a compelling case against the use of social media,
                        citing 10 reasons to encourage readers to reconsider their online presence.
                    </li>
                    <li className="book-title">
                        “Make Something Wonderful: Steve Jobs in his own words” compiles Jobs’ thoughts into a compelling narrative,
                        providing a glimpse into his innovative mindset, emphasis on creativity, and passion on excellence.
                    </li>
                    <li className="book-title">
                        “A Cooperative Approach to Content Delivery” explores a collaborative approach among content providers
                        and network operators to optimize the content delivery process in a streaming-focused world.
                    </li>
                    <li className="book-title">
                        “Born a Crime: Stories from a South African Childhood” is a powerful and humorous memoir where
                        Noah speaks on his experiences growing up in apartheid-era South Africa. The book makes you laugh and cry within a few pages.
                    </li>
                    <li className="book-title">
                        “The Art of Thinking Clearly” explores various cognitive biases and logical fallacies that often
                        cloud human decision-making. I read this for our book club at work.
                    </li>
                    <li className="book-title">
                        “Refactoring: Improving the Design of Existing Code” was also read for the book club at work.
                        It focuses on the practice of improving the structure and design of existing code to enhance readability, maintainability, and quality.
                    </li>
                    <li className="book-title">
                        “Scrum: The Art of Doing Twice the Work in Half the Time” outlines the principles and practices of Scrum,
                        a framework for agile project management to improve a team’s efficiency and productivity. Also read for a book club at work.
                    </li>
                    <li className="book-title">
                        “My Brother” is the biography of Muhammad Ali Jinnah, the founder of Pakistan, by his sister Fatima Jinnah.
                        A major focus of the book are his political aspirations and how his failing health affected them.
                    </li>
                    <li className="book-title">
                        "Automate the Boring Stuff with Python” focuses on automating repetitive tasks like web scraping, handling Excel spreadsheets, scheduling, etc using Python.
                    </li>
                    <li className="book-title">
                        “The Reluctant Fundamentalist” is a story presented as a monologue by a Pakistani international student in the U.S. who becomes disillusioned
                        with the American dream after 9/11. His words about his identity, cultural clash, and being far from home really spoke to me.
                        Thanks @racheetah_1 for the recommendation! :)
                    </li>
                </ul>
            </div>


        </section >
    );
}

export default BooksRead2023;
