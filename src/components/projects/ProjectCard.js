import React from 'react';

class ProjectCard extends React.Component {
    constructor(props)  {
        super(props);
        this.animateValue = this.animateValue.bind(this);
        this.resetValue = this.resetValue.bind(this);
        // solves formatting issues for the grid
        this.tools = this.props.cardInfo.tools.map(tool => <span style={{visibility: tool === "dummy" ? "hidden": "visible"}}>{tool}</span>)
        console.log(this.tools[1]);
    }

    animateValue(index, start, end, duration) {        
        let obj = document.getElementsByClassName("completion")[index];
        obj.innerHTML = "Completion: ...%";
        let range = end - start;    
        let minTimer = 50;  // no timer shorter than 50ms (not really visible any way)
        let stepTime = Math.abs(Math.floor(duration / range));  // calc step time to show all interediate values
        stepTime = Math.max(stepTime, minTimer);    // never go below minTimer
        
        // get current time and calculate desired end time
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;
      
        function run() {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - (remaining * range));
            obj.innerHTML = "Completion: " + value + "%";
            
            if (value === end) {clearInterval(timer);}
        }
        
        timer = setInterval(run, stepTime);
        run();
      }

      resetValue(index) {
            console.log(index);
            let obj2 = document.getElementsByClassName("completion")[index];
            obj2.innerHTML = "Completion: ...%";
            console.log(obj2.innerHTML);
      }

    render() {
        return(
            <article className="card" onMouseEnter={this.animateValue.bind(this, this.props.cardInfo.index, 0, this.props.cardInfo.completionPercentage, 1000)} onMouseLeave={this.resetValue.bind(this, this.props.cardInfo.index)}>
                <header>
                    <h1>{this.props.cardInfo['projectName']}</h1>
                    <p>{this.props.cardInfo.projectDescription}</p>        
                </header>
                {this.props.cardInfo.projectIMG_URL === "" && 
                    <div className="project-links">
                        <a href={this.props.cardInfo.githubProjectURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                    </div>
                }
                {this.props.cardInfo.projectIMG_URL !== "" && 
                    <div className="project-links">
                        <a href={this.props.cardInfo.githubProjectURL} target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                        <a href={this.props.cardInfo.projectURL} target="_blank" rel="noopener noreferrer"><img src={this.props.cardInfo.projectIMG_URL} alt="pathfinder interactive"></img></a>
                    </div>
                }
                <h2>Using</h2>
                <div className="tools">
                    {this.tools}
                </div>
                <h2 className="completion">Completion: ...%</h2>
                      <div className="progress">
                        <div className="progress-value"></div>
                      </div>
            </article>
        );
    }
}

export default ProjectCard