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
          {/* Pathfinder Interactive */}
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
          {/* Portfolio Website v2 */}
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
              <h2>Completion: 40%</h2>
              <div className="progress" data-value="40%">
                <div className="progress-value"></div>
              </div>
          </article>
          {/* Gift-ee */}
          <article className="card">
              <header>
                <h1>Gift-ee</h1>
                <p>
                  Second iteration of my personal portfolio website containing links to all 
                  my work, criteria, and social media
                </p>
              </header>
              <div className="project-links">
                <a href="https://github.com/AGuyNamedC-Los/gift-ee" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                <a href="https://tranquil-fjord-29285.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/AGuyNamedC-Los/personal-website/master/public/bitmoji.png" alt="pathfinder interactive"></img></a>
              </div>
              <h2>Using</h2>
              <div className="tools">
                <span>Javascript</span>
                <span>Nunjucks</span>
                <span>Heroku</span>
                <span>HTML5</span>
                <span>CSS</span>
              </div>
              <h2>Completion: 35%</h2>
              <div className="progress" data-value="40%">
                <div className="progress-value"></div>
              </div>
          </article>
          {/* Tree Datastructure */}
          <article className="card">
              <header>
                <h1>Tree Data Structure</h1>
                <p>
                  A c++ tree that features basic tree funtions as well as different methods of 
                  search functions like BFS and DFS to traverse through the tree
                </p>
              </header>
              <div className="project-links">
                <a href="https://github.com/AGuyNamedC-Los/data_structures/tree/master/BasicTree" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              </div>
              <h2>Using</h2>
              <div className="tools">
                <span>C++</span>
                <span>iterative</span>
              </div>
              <h2>Completion: 100%</h2>
              <div className="progress" data-value="100%">
                <div className="progress-value"></div>
              </div>
          </article>
          {/* Doubly Linked List Data Structure */}
          <article className="card">
              <header>
                <h1>Doubly Linked List Data Structure</h1>
                <p>
                  A c++ doubly linked list that features basic linked list funtions
                </p>
              </header>
              <div className="project-links">
                <a href="https://github.com/AGuyNamedC-Los/data_structures/tree/master/DoublyLinkedList" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              </div>
              <h2>Using</h2>
              <div className="tools">
                <span>C++</span>
                <span>iterative</span>
              </div>
              <h2>Completion: 100%</h2>
              <div className="progress" data-value="100%">
                <div className="progress-value"></div>
              </div>
          </article>
          {/* Portfolio Website v1 */}
          <article className="card">
              <header>
                <h1>Portfolio Website v1</h1>
                <p>
                  This was my first iteration of a portfolio website, it has since been depricated 
                  and will no longer receive any updates
                </p>
              </header>
              <div className="project-links">
              <a href="https://github.com/AGuyNamedC-Los/personal-website" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                <a href="https://serene-wildwood-73140.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/AGuyNamedC-Los/personal-website/master/public/bitmoji.png" alt="pathfinder interactive"></img></a>
              </div>
              <h2>Using</h2>
              <div className="tools">
                <span>Javascript</span>
                <span>React</span>
                <span>Heroku</span>
                <span>HTML5</span>
                <span>CSS</span>
              </div>
              <h2>Completion: 100%</h2>
              <div className="progress" data-value="100%">
                <div className="progress-value"></div>
              </div>
          </article>
          {/* Connect-3 */}
          <article className="card">
              <header>
                <h1>Connect-3</h1>
                <p>
                  Single player game of connect-3 against a Lisp based AI
                </p>
              </header>
              <div className="project-links">
                <a href="https://github.com/AGuyNamedC-Los/connect-3" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
              </div>
              <h2>Using</h2>
              <div className="tools">
                <span>Lisp</span>
              </div>
              <h2>Completion: 100%</h2>
              <div className="progress" data-value="100%">
                <div className="progress-value"></div>
              </div>
          </article>
        </section>
    </div>
  );
}

export default App;
