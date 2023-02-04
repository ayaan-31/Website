import React from "react";
import "./NotFound.css";
import Helmet from "react-helmet";

function NotFound() {
    return (
        <section class="not-found">
            <Helmet>
                <title>404</title>
            </Helmet>

            <h1 class="heading">404: Page not found</h1>
            <p>The rabbits might be nibbling on the cables again...</p>
        </section>
    );
}

export default NotFound;
