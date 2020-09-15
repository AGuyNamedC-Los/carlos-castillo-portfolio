import React from "react";

class MainApp extends React.Component {
    constructor(props) {
        super (props);
        this.animateValue = this.animateValue.bind(this);
    }

    animateValue(index, start, end, duration) {
        // assumes integer values for start and end
        
        var obj = document.getElementsByClassName("completion")[index];
        var range = end - start;
        // no timer shorter than 50ms (not really visible any way)
        var minTimer = 50;
        // calc step time to show all interediate values
        var stepTime = Math.abs(Math.floor(duration / range));
        
        // never go below minTimer
        stepTime = Math.max(stepTime, minTimer);
        
        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;
      
        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            obj.innerHTML = "Completion: " + value + "%";
            if (value == end) {
                clearInterval(timer);
            }
        }
        
        timer = setInterval(run, stepTime);
        run();
      }

    render() {
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
                  <article className="card" onMouseEnter={this.animateValue.bind(this, 0, 0, 80, 1000)}>
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
                      <h2 className="completion">Completion: ...%</h2>
                      <div className="progress" data-value="80%">
                        <div className="progress-value"></div>
                      </div>
                  </article>
                  {/* Portfolio Website v2 */}
                  <article className="card" onMouseEnter={this.animateValue.bind(this, 1, 0, 40, 1000)}>
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
                      <h2 className="completion">Completion: ...%</h2>
                      <div className="progress" data-value="40%">
                        <div className="progress-value"></div>
                      </div>
                  </article>
                  {/* Gift-ee */}
                  <article className="card" onMouseEnter={this.animateValue.bind(this, 2, 0, 35, 1000)}>
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
                      <h2 className="completion">Completion: ...%</h2>
                      <div className="progress" data-value="40%">
                        <div className="progress-value"></div>
                      </div>
                  </article>
                  {/* Tree Datastructure */}
                  <article className="card" onMouseEnter={this.animateValue.bind(this, 3, 0, 100, 1000)}>
                      <header>
                        <h1>Tree Data Structure</h1>
                        <p>
                          A c++ tree that features basic tree funtions as well as different methods of 
                          search functions like BFS and DFS
                        </p>
                      </header>
                      <div className="project-links">
                        <a href="https://github.com/AGuyNamedC-Los/data_structures/tree/master/BasicTree" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                      </div>
                      <h2>Using</h2>
                      <div className="tools">
                        <span>C++</span>
                        <span>iterative</span>
                        <span style={{visibility: "hidden"}}>dummy</span>
                        <span style={{visibility: "hidden"}}>dummy</span>
                      </div>
                      <h2 className="completion">Completion: ...%</h2>
                      <div className="progress" data-value="100%">
                        <div className="progress-value"></div>
                      </div>
                  </article>
                  {/* Doubly Linked List Data Structure */}
                  <article className="card" onMouseEnter={this.animateValue.bind(this, 4, 0, 100, 1000)}>
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
                        <span style={{visibility: "hidden"}}>dummy</span>
                        <span style={{visibility: "hidden"}}>dummy</span>
                      </div>
                      <h2 className="completion">Completion: ...%</h2>
                      <div className="progress" data-value="100%">
                        <div className="progress-value"></div>
                      </div>
                  </article>
                  {/* Portfolio Website v1 */}
                  <article className="card" onMouseEnter={this.animateValue.bind(this, 5, 0, 100, 1000)}>
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
                      <h2 className="completion">Completion: ...%</h2>
                      <div className="progress" data-value="100%">
                        <div className="progress-value"></div>
                      </div>
                  </article>
                  {/* Connect-3 */}
                  <article className="card" onMouseEnter={this.animateValue.bind(this, 6, 0, 100, 1000)}>
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
                        <span style={{visibility: "hidden"}}>dummy</span>
                        <span style={{visibility: "hidden"}}>dummy</span>
                        <span style={{visibility: "hidden"}}>dummy</span>
                      </div>
                      <h2 className="completion">Completion: ...%</h2>
                      <div className="progress" data-value="100%">
                        <div className="progress-value"></div>
                      </div>
                  </article>
                </section>
            </div>
          );
    }
}

export default MainApp;