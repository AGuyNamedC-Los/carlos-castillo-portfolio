import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import MainApp from "./MainApp.js";
import Menu from "./components/Menu.js";
import Bio from "./components/Bio.js";
import ProjectList from './components/projects/ProjectsList';
import ContactMe from "./components/ContactMe.js";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p id="top-of-page" style={{visibility: "hidden"}}>hi</p>   {/* simply for scrolling up purposes */}
        <Menu />
        <Bio />
        <h1 id="projects" style={{visibility: "hidden"}}>Projects</h1>
        <h1>Projects</h1>
        <ProjectList />
        <h1 id="contact-me" style={{visibility: "hidden"}}>Contact Me</h1>   
        <h1>Contact Me</h1>
        <ContactMe />
        {/* <MainApp /> */}
      </div>

    );
  }
}

export default App;
