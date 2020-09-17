import React from 'react';
import github from "../images/github.png";
import home from "../images/home-run.png";
import linkedin from "../images/linkedin.png";
import resume from "../images/resume.png";
import projects from "../images/project.png";
import contactMe from "../images/mail.png";

class Menu extends React.Component {
    constructor() {
        super();
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress(index) {
        let menuButtons = document.getElementsByClassName("menu")[0].children;
        let menuButtonImage = document.getElementsByClassName("menu_icon");
        for(let i = 0; i < menuButtons.length; i++) {
            menuButtons[i].style.boxShadow = "inset 0 20px 4px -21px rgba(255,255,255,0.4), 0 19px 13px 0 rgba(0,0,0,0.3)";
            menuButtons[i].style.backgroundImage = "";
            // menuButtonImage[i].style.backgroundImage = "linear-gradient(to top, #242424 0%, #303030 100%)";
            menuButtonImage[i].style.backgroundImage = "";
            menuButtonImage[i].style.boxShadow = "";
        }

        menuButtons[index].style.backgroundImage = "linear-gradient(to top, #151515 0%, #1d1d1d 100%)";
        menuButtons[index].style.boxShadow = "inset 0 16px 14px -21px transparent, 0 0px 13px 0 rgba(0,0,0,0.3), inset 0 0 7px 2px rgba(0,0,0,3)";
        menuButtonImage[index].style.backgroundImage = "radial-gradient(circle 10px at center, #ebf7ff 0%, #b3e1ff 50%, #b3e1ff 100%)";
        menuButtonImage[index].style.boxShadow = "0px 0px 10px #ebf7ff";
    }

    render() {
        return (
            <div className="menu">
                <a className="menu-button" href="#top-of-page" onClick={this.buttonPress.bind(this, 0)}><img className="menu_icon" src={home} alt="home"></img></a>
                <a className="menu-button" href="https://docs.google.com/document/d/1K-3VK16w9j0yWRLB88lPVZMlzlR8DVcQ9ZDwyTef5oM/edit" target="_blank" rel="noopener noreferrer" onClick={this.buttonPress.bind(this, 1)}><img className="menu_icon" src={resume} alt="resume"></img></a>
                <a className="menu-button" href="https://www.linkedin.com/in/carlos-castillo-1363a6133/" target="_blank" rel="noopener noreferrer" onClick={this.buttonPress.bind(this, 2)}><img className="menu_icon" src={linkedin} alt="linkedin"></img></a>
                <a className="menu-button" href="https://github.com/AGuyNamedC-Los" target="_blank" rel="noopener noreferrer" onClick={this.buttonPress.bind(this, 3)}><img className="menu_icon" src={github} alt="github"></img></a>
                <a className="menu-button" href="#projects" onClick={this.buttonPress.bind(this, 4)}><img className="menu_icon" src={projects} alt="projects"></img></a>
                <a className="menu-button" href="#contact-me" onClick={this.buttonPress.bind(this, 5)}><img className="menu_icon" src={contactMe} alt="contact me"></img></a>
            </div>
        );
    }
}

export default Menu