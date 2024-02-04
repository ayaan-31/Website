import React from "react";
import Helmet from "react-helmet";
import DouglasInput from "../../Assets/Images/douglas-peucker-01.png";
import DouglasOutput from "../../Assets/Images/douglas-peucker-02.png"
import "./DouglasPeucker.css";

function DouglasPeucker() {
    return (
        <section className="douglas-peucker">
            <Helmet>
                <title>Douglas Peucker</title>
            </Helmet>

            <div className="heading">
                Douglas-Peucker Algorithm Implementation
            </div>

            <div className="content">
                <p>
                    I attended a Brunch & Learn at work and one of the things the speaker talked about was
                    the Douglas-Peucker algorithm.
                    They didn't dive deeper into the algorithm itself, but I was intrigued to implement
                    a basic version of it myself over the following weekend. Source code and instructions to build and
                    run can be found <a href="https://github.com/tahaafzal5/Douglas-Peucker">here</a>.
                </p>

                <p>
                    The algorithm's goal is to simplify a path or curve with fewer points while maintaining its
                    overall shape. In the context of autonomous vehicles, for example, it would mean to optimize the
                    representation of a planned path from point "A" to point "B", making it more efficient without significantly
                    altering the intended route.
                </p>

                <p>
                    I used <a href="https://github.com/alandefreitas/matplotplusplus">matplotplusplus</a>, which is a C++ graphics library for data visualization to
                    plot the original and the reduced paths.
                </p>

                <p>
                    The entire implementation took me a few hours, but finding the ideal epsilon value took a good amount of time
                    and was mainly through experimentation. My main goal was to not lose too much "fidelity".
                </p>

                <p>
                    The following image is the input path with 501 points.

                    <div>
                        <img className="image" src={DouglasInput} width={500}></img>
                    </div>
                </p>

                <p>
                    The output path has 142 points, which means a 71.65% reduction!

                    <div>
                        <img className="image" src={DouglasOutput} width={500}></img>
                    </div>
                </p>
            </div>

        </section>
    );
}

export default DouglasPeucker;