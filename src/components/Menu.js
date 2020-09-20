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
        this.changeSlide = this.changeSlide.bind(this);
        this.currSlide = 0;
    }

    buttonPress(index) {
        let menuButtons = document.getElementsByClassName("menu")[0].children;
        let menuButtonImage = document.getElementsByClassName("menu_icon");
        let color = "white";
        for(let i = 0; i < menuButtons.length; i++) {
            if(i === index) {
                menuButtons[index].style.backgroundImage = "linear-gradient(to top, #151515 0%, #1d1d1d 100%)";
                menuButtons[index].style.boxShadow = `inset 0 16px 14px -21px transparent, 0 0px 13px 0 black, inset 0 0 7px 2px black`;
                menuButtonImage[index].style.backgroundImage = `radial-gradient(circle 10px at center, ${color} 0%, ${color} 50%, ${color} 100%)`;
                menuButtonImage[index].style.boxShadow = "0px 0px 10px #ebf7ff";
            } else {
                menuButtons[i].style.boxShadow = "inset 0 20px 4px -21px rgba(255,255,255,0.4), 0 19px 13px 0 rgba(0,0,0,0.3)";
                menuButtons[i].style.backgroundImage = "";
                menuButtonImage[i].style.backgroundImage = "";
                menuButtonImage[i].style.boxShadow = "";
                menuButtonImage[i].style.color = "black";
            }
        }
    }

    changeSlide(index) {
        if(index === this.currSlide) return;

        let currSlide = document.getElementsByClassName("slide");
        currSlide[this.currSlide].style.display = "none";      
        this.currSlide = index;
        setTimeout(()=> {
            currSlide[this.currSlide].style.display = "initial";
            currSlide[this.currSlide].style.opacity = 0;
            setTimeout(() => {
                currSlide[this.currSlide].style.opacity = 1;
            }, 500)
        },0);
    }

    render() {
        return (
            <div className="menu">
                <a className="menu-button" href="#slide-1" onClick={() => {this.buttonPress(0); this.changeSlide(0)}}>{/*<img className="menu_icon" src={home} alt="home"></img>}*/}<i class="fas fa-user menu_icon"></i></a>
                <a className="menu-button" href="https://docs.google.com/document/d/1K-3VK16w9j0yWRLB88lPVZMlzlR8DVcQ9ZDwyTef5oM/edit" target="_blank" rel="noopener noreferrer" onClick={this.buttonPress.bind(this, 1)}>{/*<img className="menu_icon" src={resume} alt="resume">*</img>*/}<i class="far fa-file menu_icon"></i></a>
                <a className="menu-button" href="https://www.linkedin.com/in/carlos-castillo-1363a6133/" target="_blank" rel="noopener noreferrer" onClick={this.buttonPress.bind(this, 2)}>{/*<img className="menu_icon" src={linkedin} alt="linkedin"></img>*/}<i class="fab fa-linkedin menu_icon"></i></a>
                <a className="menu-button" href="https://github.com/AGuyNamedC-Los" target="_blank" rel="noopener noreferrer" onClick={this.buttonPress.bind(this, 3)}>{/*<img className="menu_icon" src={github} alt="github"></img>*/}<i class="fab fa-github-square menu_icon"></i></a>
                <a className="menu-button" href="#slide-2" onClick={() => {this.buttonPress(4); this.changeSlide(1)}}><i class="fas fa-lightbulb menu_icon"></i></a>
                <a className="menu-button" href="#slide-3" onClick={() => {this.buttonPress(5); this.changeSlide(2)}}>{/*<img className="menu_icon" src={contactMe} alt="contact me"></img>*/}<i class="fas fa-address-book menu_icon"></i></a>
            </div>
        );
    }
}

export default Menu
