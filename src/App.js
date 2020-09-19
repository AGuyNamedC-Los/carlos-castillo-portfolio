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
        <Menu />
        <div id="page-content">
          <div id="slide-1" className="slide slide-1"><Bio /></div>
          <div id="slide-2" className="slide slide-2"><ProjectList /></div>
          <div id="slide-3" className="slide slide-3"><ContactMe /></div>
        </div>
      </div>
    );
  }
}

export default App;
