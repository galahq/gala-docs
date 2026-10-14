import React from "react";
import Layout from "@theme/Layout";
import Wrapper from "../components/pageWrapper";
import projectsContent from "../content/projects.json"
import Projects from "../components/projects"

function PublicationsPage() {

    return (
        <Layout title="Projects">
            <Wrapper wide={true}>
                <header>
                    <h1>Projects</h1>
                </header>
                <main>
                    <Projects showTitle={false} projectExamples={projectsContent.projects} numberOfColumns={3} />
                </main>
            </Wrapper>
        </Layout>
    );
}

export default PublicationsPage;
