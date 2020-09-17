import React from 'react';

class ProjectCard extends React.Component {
    constructor(props)  {
        super(props);
        this.animateValue = this.animateValue.bind(this);
        this.tools = this.props.cardInfo.tools.map(tool => <span>{tool}</span>);   
    }

    animateValue(index, start, end, duration) {        
        var obj = document.getElementsByClassName("completion")[index];
        var range = end - start;    
        var minTimer = 50;  // no timer shorter than 50ms (not really visible any way)
        var stepTime = Math.abs(Math.floor(duration / range));  // calc step time to show all interediate values
        stepTime = Math.max(stepTime, minTimer);    // never go below minTimer
        
        // get current time and calculate desired end time
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;
      
        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            obj.innerHTML = "Completion: " + value + "%";
            
            if (value === end) {clearInterval(timer);}
        }
        
        timer = setInterval(run, stepTime);
        run();
      }

    render() {
        return(
            <article className="card" onMouseEnter={this.animateValue.bind(this, this.props.cardInfo.index, 0, this.props.cardInfo.completionPercentage, 1000)}>
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