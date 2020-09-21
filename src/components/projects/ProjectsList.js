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
                    completionPercentage: 80
                }}/>
                <ProjectCard cardInfo={{
                    index: "1",
                    projectName: "Portfolio Website v2",
                    projectDescription: "Second iteration of my personal portfolio website containing links to all my work, criteria, and social media",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/carlos-castillo-portfolio",
                    projectURL: "https://carlos-castillo-portfolio.herokuapp.com/",
                    projectIMG_URL: "https://raw.githubusercontent.com/AGuyNamedC-Los/carlos-castillo-portfolio/master/src/images/bitmoji.png",
                    tools: ["Javascript", "React", "Heroku", "HTML5", "CSS3"],
                    completionPercentage: 94
                }}/>
                <ProjectCard cardInfo={{
                    index: "2",
                    projectName: "Gift-ee",
                    projectDescription: "Social media-esque website that lets you manage one gift list and can include items from any number of online stores",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/gift-ee",
                    projectURL: "https://tranquil-fjord-29285.herokuapp.com/",
                    projectIMG_URL: "https://raw.githubusercontent.com/AGuyNamedC-Los/carlos-castillo-portfolio/master/src/images/gift.png",
                    tools: ["Javascript", "Nunjucks", "Heroku", "HTML5", "CSS3"],
                    completionPercentage: 35
                }}/>
                <ProjectCard cardInfo={{
                    index: "3",
                    projectName: "Text-Mockify",
                    projectDescription: "Enter plain text into the text area to transform it into mockified text!",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/text-mockify/tree/master/src",
                    projectURL: "https://text-mockify.herokuapp.com/",
                    projectIMG_URL: "https://i.pinimg.com/originals/30/f8/8a/30f88a741221bbb0387a2067c9a92a87.jpg",
                    tools: ["Javascript", "React", "Heroku", "HTML5", "CSS3"],
                    completionPercentage: 85
                }}/> 
                <ProjectCard cardInfo={{
                    index: "4",
                    projectName: "Tree Data Structure",
                    projectDescription: "A c++ tree that features basic tree funtions as well as different methods of search functions like BFS and DFS",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/data_structures/tree/master/BasicTree",
                    projectURL: "",
                    projectIMG_URL: "",
                    tools: ["c++", "iterative", ""],
                    completionPercentage: 100
                }}/>
                <ProjectCard cardInfo={{
                    index: "5",
                    projectName: "Doubly Linked List Data Structure",
                    projectDescription: "A c++ doubly linked list that features basic linked list funtions",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/data_structures/tree/master/DoublyLinkedList",
                    projectURL: "",
                    projectIMG_URL: "",
                    tools: ["C++", "iterative", ""],
                    completionPercentage: 100
                }}/>
                <ProjectCard cardInfo={{
                    index: "6",
                    projectName: "Portfolio Website v1",
                    projectDescription: "This was my first iteration of a portfolio website, it has since been depricated and will no longer receive any updates",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/personal-website",
                    projectURL: "https://serene-wildwood-73140.herokuapp.com/",
                    projectIMG_URL: "https://raw.githubusercontent.com/AGuyNamedC-Los/carlos-castillo-portfolio/master/src/images/bitmoji.png",
                    tools: ["Javascript", "React", "Heroku", "HTML5&", "CSS3"],
                    completionPercentage: 100
                }}/>
                <ProjectCard cardInfo={{
                    index: "7",
                    projectName: "Connect-3",
                    projectDescription: "Single player game of connect-3 against a Lisp based AI",
                    githubProjectURL: "https://github.com/AGuyNamedC-Los/connect-3",
                    projectURL: "",
                    projectIMG_URL: "",
                    tools: ["Lisp", "", ""],
                    completionPercentage: 100
                }}/> 
            </section>
        );
    }
}

export default ProjectList

{/* 
<ProjectCard cardInfo={{
    index: "",
    projectName: "",
    projectDescription: "",
    githubProjectURL: "",
    projectURL: "",
    projectIMG_URL: "",
    tools: [],
    completionPercentage: ""
}}/> 
*/}