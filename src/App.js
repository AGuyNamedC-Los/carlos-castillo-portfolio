import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import MainApp from "./MainApp.js";
import Menu from "./components/Menu.js";
import Bio from "./components/Bio.js";
import ProjectList from './components/projects/ProjectsList';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Menu />
        <Bio />
        <ProjectList />
        <MainApp />
      </div>

    );
  }
}

export default App;
