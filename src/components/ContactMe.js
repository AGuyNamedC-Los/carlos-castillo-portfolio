import React from "react";

class ContactMe extends React.Component {
    constructor() {
        super();
        this.state = {myEmail: "closcastillo95@gmail.com"};
    }

    render() {
        return(
            <section className="card-list contact-me">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=closcastillo95@gmail.com" target="_blank" rel="noopener noreferrer" className="card email-option">
                        <h2>Email Me (GMail)</h2>
                    </a>
                    <a className="card email-option" href="mailto:closcastillo95@gmail.com">
                        <h2>Email Me (default)</h2>
                    </a>
                    <article className="card email-option" onClick={() => {navigator.clipboard.writeText(this.state.myEmail)}}>
                        <h2>Copy my Email to clipboard</h2>
                    </article>
            </section>
        );
    }
    
}

export default ContactMe