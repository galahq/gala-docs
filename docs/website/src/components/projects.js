import React from "react";
import Card from "./card";
import projects from './projects.module.css'

function columns() {
            return { gridTemplateColumns: "repeat(3, 1fr)" };
}

export default function Projects({ projectExamples, showTitle, numberOfColumns }) {
    const currentProjects = projectExamples.map((project, idx) => (
        !project.old && <Card content={project} key={idx} cardType="project" />
    ));
    const oldProjects = projectExamples.map((project, idx) => (
        !!project.old && <Card content={project} key={idx} cardType="project" />
    ));

    return (
        <div className="container">
            {!!showTitle && <h3>In Action</h3>}
            <div className="row">
                    <ul className={projects.projectsGrid}>
                        {currentProjects}{oldProjects}
                    </ul>
            </div>
        </div >
    );
}