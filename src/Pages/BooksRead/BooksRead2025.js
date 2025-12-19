import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";
import tuesdaysWithMorrie from "./tuesdaysWithMorrie.png";
import exitWest from "./exitWest.png";

const booksData = [
    {
        title: "Tuesdays with Morrie",
        description:
            "A memoir by Mitch Albom recounting life lessons from weekly conversations with his former professor, Morrie Schwartz. Recommended by @rachida._.rm",
        imageUrl: tuesdaysWithMorrie
    },
    {
        title: "Exit West",
        description:
            "A novel by Mohsin Hamid following two lovers who flee a war-torn city through mysterious doors, exploring migration, belonging, and hope. Also recommended by @rachida._.rm and many others.",
        imageUrl: exitWest
    }
];

function BooksRead2025() {
    return (
        <section className="books-read">
            <Helmet>
                <title>Books Read</title>
            </Helmet>

            <div className="heading">Books Read in 2025</div>

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

export default BooksRead2025;
