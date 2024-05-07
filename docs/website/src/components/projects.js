import React from "react";
import Card from "./card";
import projects from './projects.module.css'

function columns(number) {
    switch (number) {
        case 2:
            return { gridTemplateColumns: "repeat(2, 1fr)" };
        case 3:
            return { gridTemplateColumns: "repeat(3, 1fr)" };
        default:
            return { gridTemplateColumns: "repeat(3, 1fr)" };
    }
}

export default function Projects({ projectExamples, showTitle, numberOfColumns }) {
    const currentProjects = projectExamples.map((project, idx) => (
        !project.old && <Card content={project} key={idx} cardType="example" />
    ));
    const oldProjects = projectExamples.map((project, idx) => (
        !!project.old && <Card content={project} key={idx} cardType="example" />
    ));

    return (
        <div className="container">
            {!!showTitle && <h3>In Action</h3>}
            <div className="row">
                <div className="col">
                    <ul style={columns(numberOfColumns)} className={projects.projectsGrid}>
                        {currentProjects}{oldProjects}
                    </ul>
                </div>
            </div>
        </div >
    );
}