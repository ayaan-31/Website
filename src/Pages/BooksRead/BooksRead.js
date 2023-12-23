import React from "react";
import Helmet from "react-helmet";
import "./BooksRead.css";

function BooksRead() {
    return (
        <section className="books-read">
            <Helmet>
                <title>Books Read</title>
            </Helmet>

            <div className="heading">
                Books I Have Read
            </div>

            <div className="content">
                <p>
                    I love reading non-fiction books that teach me something new, make me think, and help me grow.
                    I am also a slow-reader and can't move on to the next paragraph until I have understood the current one.
                    That said, most of the books I read were quick reads, but others took me a while to finish.
                </p>
                <p>
                    Here's the list of the books I have read so far:
                </p>

                <ul className="books-read-list">
                    <li className="list-date">2023</li>
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

                <ul className="books-read-list">
                    <li className="list-date">2022</li>
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

                    <li className="list-date">2021</li>
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

export default BooksRead;
