import React from "react";
import { Helmet } from "react-helmet";
import "./TimeTravelBugs.css";

function TimeTravelBugs() {
    return (
        <section className="time-travel-bugs">
            <Helmet>
                <title>Time Travel Bugs - Taha Afzal</title>
            </Helmet>

            <div className="heading">
                Time Travel Bugs
            </div>

            <div className="content">
                <h3>Background</h3>
                <p>
                    The product line I work on <a href="https://ravenind.com/products/displays/viper-4" target={"_blank"}>(Viper 4)</a> does not have a
                    battery. This means that Viper 4s do not have a "true" internal clock. However, we still need to keep track of time for job reports, etc.
                    Currently, we do that by the storing the Unix epoch when the Viper 4 connected to the internet for the first time as our internal time zero.
                    Then each second, we increment the internal time by 1. But this means that when the Viper 4 is powered off, we don't increment the internal clock,
                    and our time does not advance.
                </p>

                <p>
                    Each job had a start time and end time. The start time was the internal time when the job started, and the end time was the internal time when the job ended.
                    The end time was always greater than the start time. This worked fine until the data team at Raven started to use the job data to do some analysis
                    and wanted the actual times -- not just the internal times.
                </p>

                <h3>The First Bug</h3>
                <p>
                    Because we weren't incrementing the internal clock when the Viper 4 was powered off, the number of seconds passed on our system would be less
                    than the actual number of seconds passed in the real world. This meant when you resume a job (a concept called a Session), the start time of this new
                    session would be less than the end time of the previous session. That is a problem for the data team since that doesn't tell them what data is from
                    which session. This the first instance of time travel bug. Time travel to the past. This needed to be fixed.
                </p>

                <h3>The Solution</h3>
                <p>
                    Each machine that the Viper 4 is on, has GPS. So, my solution to this bug was to get the time from GPS, calculate <code>gpsTimeOffset</code> as the difference
                    between the internal time and the GPS time, add the <code>gpsTimeOffset</code> to the internal time to each time we write out a timestamp to the job.
                </p>

                <p>
                    The data written to the job is in a proprietary file format called a Job Data File (<code>jdf</code>), which is just a serially written file of all the data in the order
                    we receive it. Before someone can consume the data from the <code>jdf</code>, they need to convert it to a more human readable format like to an XML file or a CSV file through
                    a tool called radconvert. Different consumers of this <code>jdf</code> file use different formats. The data team uses a CSV file and Raven's online portal uses an XML file.
                    While no excuse, but I only tested my calculations with the CSV file. I didn't test it with the XML file. That's where the second bug came in.
                </p>

                <h3>The Second Bug</h3>
                <p>
                    Because I wrote the piece of radconvert that converted a <code>jdf</code> to a CSV file, the timestamps in the CSV file were correct. The XML piece of radconvert used a
                    function <code>getTime()</code> that converted time from the <code>jdf</code> to a time format where it already accounted for the <code>gpsTimeOffset</code>.
                    This meant that for the XML file, the <code>gpsTimeOffset</code> was being added twice: once when I was writing the <code>jdf</code> and once when the <code>jdf</code>
                    was being read and converted to an XML. Time travel to the future. This needed to be fixed as well.

                </p>

                <p>In fixing the first bug, I had introduced another one.</p>

                <p>
                    It was on me to not test the XML file, but unfortunately, somehow, this bug also made it past the QA team, alpha testers, and beta testers. A period of about 4 months.
                    This bug made it to production and we found out about it 3 days after public release. I had to fix this bug in a hurry.
                </p>

                <h3>The Second Solution</h3>
                <p>
                    With some help from another developer and staying overtime, I was able to fix, test, create a build, and release the fix in about 5 hours.
                </p>

                <p>
                    The fix was to remove the <code>gpsTimeOffset</code> that I added when writing the <code>jdf</code> and instead just write the time from the GPS to the <code>jdf</code>
                    whenever we wrote a data point with a timestamp. My original solution to add the <code>gpsTimeOffset</code> wasn't even needed.

                </p>

                <h3>Conclusion</h3>
                <p>
                    Lessons learned:
                    <ul>
                        <li>understand the system fully before making changes since your work might have been done already</li>
                        <li>test more and the full system -- things are more related than we might think</li>
                        <li>own up to your mistakes</li>
                        <li>fix the bug and get it out the door!</li>
                    </ul>
                </p>

                <p>
                    While time seems to be a very easy thing to do, it is much more complicated than that. Two of the Computerphile videos I like on time are
                    <a href="https://youtu.be/-5wpm-gesOY" target={"_blank"}>The Problem with Time & Timezones</a> and <a href="https://youtu.be/BAo5C2qbLq8" target={"_blank"}>
                        Network Time Protocol (NTP)</a>.
                </p>
            </div>
        </section >
    );
}

export default TimeTravelBugs;
