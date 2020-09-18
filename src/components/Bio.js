import React from 'react';
import bitmoji from "../images/bitmoji.png";

class Bio extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section className="bio">
                <img src={bitmoji} alt="bitmoji"></img>
                <h1>I'm Carlos Castillo</h1>
                <p>
                    I'm currently looking for a position in software engineering after having graduated from
                    California State University East Bay this past May with a Bachelors in Computer Science.
                </p>
                <p>Please visit the links in the menu above to see more of my critera and work</p>
            </section>
        );
    }
}

export default Bio