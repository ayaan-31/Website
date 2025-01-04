import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";
import badBlood from "./bad-blood.jpg"
import codeBook from "./the-code-book.jpg"
import the48Laws from "./the-48-laws-of-power.jpg"
import numbersDontLie from "./numbers-dont-lie.jpg"
import filterworld from "./filterworld.jpg"
import rust from "./the-rust-programming-language.jpg"
import algorithms from "./algorithms-to-live-by.jpg"
import princess from "./princess.jpg"

const booksData = [
    {
        title: "Bad Blood: Secrets and Lies in a Silicon Valley Startup",
        description: "Covers the rise and collapse of Theranos, the multibillion-dollar biotech by the journalist who first broke the story and pursued it to the end.",
        imageUrl: badBlood
    },
    {
        title: "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
        description: "Offers a history of encryption, tracing its evolution and revealing the dramatic effects codes have had on wars, nations, and individual lives, while covering the incredible (and incredibly simple) journey to the breakthrough that made internet commerce secure.",
        imageUrl: codeBook
    },
    {
        title: "The 48 Laws of Power",
        description: "Provides a deeper understanding of how power works and give readers tools and strategies for improving their own lives and careers and shedding light on how others may leverage principles of human and social psychology, such as selective honesty, to their advantage.",
        imageUrl: the48Laws
    },
    {
        title: "Numbers Don’t Lie: 71 Stories to Help Us Understand the Modern World",
        description: "The book is packed with ‘well-I-never-knew-that’ information and fascinating, unusual examples throughout, such as how vaccination yields the best return on investment, why electric cars aren’t as great as we think (yet), and more.",
        imageUrl: numbersDontLie
    },
    {
        title: "Filterworld: How Algorithms Flattened Culture",
        description: "Explores how algorithmic recommendations dictate our experiences and choices in everyday life. The book also makes you think how the internet is shaped by algorithms and how both online and offline spaces have been engineered for seamless consumption.",
        imageUrl: filterworld
    },
    {
        title: "The Rust Programming Language",
        description: "This is the official book on the Rust programming language, written by the Rust development team to help you learn the language, which helps you write faster and more reliable software.",
        imageUrl: rust
    },
    {
        title: "Algorithms to Live By: The Computer Science of Human Decisions",
        description: "Algorithms to Live By is a great read that explores how computer algorithms can be applied to our everyday lives—like finding the closest parking spot, managing your to-do list by prioritizing important tasks, or experimenting with different routines, such as testing morning habits to discover what works best.",
        imageUrl: algorithms
    },
    {
        title: "Princess: A True Story of Life Behind the Veil in Saudi Arabia",
        description: "Describes a Saudi princess’s life who is jailed by her family and country.",
        imageUrl: princess
    }
];

function BooksRead2024() {
    return (
        <section className="books-read">
            <Helmet>
                <title>Books Read</title>
            </Helmet>

            <div className="heading">
                Books Read in 2024
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

export default BooksRead2024;