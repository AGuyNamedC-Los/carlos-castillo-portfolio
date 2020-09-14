import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <h1>Projects</h1>
        <section className="card-list">
          <article className="card">
              <header>
                <h1>Pathfinder Interactive</h1>
                <p>
                  An interactive pathfinding website that utilizes path 
                  finding algorithms to find the most optimal path between two points
                </p>
              </header>
              <div className="project-links">
                <a href="https://github.com/AGuyNamedC-Los/pathfinder_interactive" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                <a href="https://pathfinder-interactive.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/AGuyNamedC-Los/pathfinder_interactive/master/path.png" alt="pathfinder interactive"></img></a>
              </div>
              <h2>Using</h2>
              <div className="tools">
                <span>Javascript</span>
                <span>Heroku</span>
                <span>HTML5</span>
                <span>CSS</span>
              </div>
              <h2>Completion: 80%</h2>
              <div className="progress" data-value="80%">
                <div className="progress-value"></div>
              </div>
          </article>
          <article className="card">
              <header>
                <h1>Portfolio Website v2</h1>
                <p>
                  Second iteration of my personal portfolio website containing links to all 
                  my work, criteria, and social media
                </p>
              </header>
              <div className="project-links">
                <a href="https://github.com/AGuyNamedC-Los/carlos-castillo-portfolio" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                <a href="https://carlos-castillo-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/AGuyNamedC-Los/personal-website/master/public/bitmoji.png" alt="pathfinder interactive"></img></a>
              </div>
              <h2>Using</h2>
              <div className="tools">
                <span>Javascript</span>
                <span>React</span>
                <span>Heroku</span>
                <span>HTML5</span>
                <span>CSS</span>
              </div>
              <h2>Completion: 80%</h2>
              <div className="progress" data-value="80%">
                <div className="progress-value"></div>
              </div>
          </article>
        </section>
    </div>
  );
}

export default App;
