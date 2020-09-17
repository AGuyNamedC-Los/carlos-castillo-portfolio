import React from 'react';
import ProjectCard from "./ProjectCard.js";

class ProjectList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <section className="card-list">
                <ProjectCard cardInfo={{
                    index: "0",
                    projectName: "PathFinder Interactive",
                    projectDescription: "An interactive pathfinding website that utilizes path finding algorithms to find the most optimal path between two points",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/pathfinder_interactive",
                    projectURL: "https://pathfinder-interactive.herokuapp.com/",
                    projectIMG_URL: "https://raw.githubusercontent.com/AGuyNamedC-Los/pathfinder_interactive/master/path.png",
                    tools: ["Javascript", "Heroku", "HTML5", "CSS3"],
                    completionPercentage: "80"
                }}/>
                <ProjectCard cardInfo={{
                    index: "1",
                    projectName: "Portfolio Website v2",
                    projectDescription: "Second iteration of my personal portfolio website containing links to all my work, criteria, and social media",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/carlos-castillo-portfolio",
                    projectURL: "https://carlos-castillo-portfolio.herokuapp.com/",
                    projectIMG_URL: "https://raw.githubusercontent.com/AGuyNamedC-Los/carlos-castillo-portfolio/master/src/images/bitmoji.png",
                    tools: ["Javascript", "React", "Heroku", "HTML5", "CSS3"],
                    completionPercentage: "80"
                }}/>
                <ProjectCard cardInfo={{
                index: "0",
                projectName: "",
                projectDescription: "",
                githubProjectURL: "",
                projectURL: "",
                projectIMG_URL: "",
                tools: [],
                completionPercentage: ""
                }}/>
            </section>
        );
    }
}

export default ProjectList

{/* 
    <ProjectCard cardInfo={{
        index: "0",
        projectName: "",
        projectDescription: "",
        githubProjectURL: "",
        projectURL: "",
        projectIMG_URL: "",
        tools: [],
        completionPercentage: ""
    }}/> 
*/}