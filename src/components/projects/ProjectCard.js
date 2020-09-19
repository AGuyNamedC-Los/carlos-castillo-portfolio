import React from 'react';
import CountUp from "./CountUp.js";
import CountDown from "./CountDown.js"

class ProjectCard extends React.Component {
    constructor(props)  {
        super(props);
        // solves formatting issues of the tools section on each card
        this.tools = this.props.cardInfo.tools.map(tool => (tool === "") ? <span style={{visibility: "hidden"}}>" "</span> : <span>{tool}</span>);
        this.state = {isHovering: false,};
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {this.setState({isHovering: true});}
    handleMouseLeave() {this.setState({isHovering: false})}

    render() {
        return(
            <article className="card" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
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
                {this.state.isHovering ? 
                    <CountUp currentProgressVal={this.state.currentProgressVal} completionPercentage={this.props.cardInfo.completionPercentage}/> 
                    : 
                    <CountDown completionPercentage={this.props.cardInfo.completionPercentage}/>
                }
                <div className="progress">
                    <div className="progress-value"></div>
                </div>
            </article>
        );
    }
}

export default ProjectCard