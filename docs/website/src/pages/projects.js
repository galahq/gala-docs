import React from "react";
import Layout from "@theme/Layout";
import Wrapper from "../components/pageWrapper";
import { projects } from "../content/projects-content"
import Projects from "../components/projects"

function PublicationsPage() {

    return (
        <Layout title="Projects">
            <Wrapper wide={true}>
                <header>
                    <h1>Projects</h1>
                </header>
                <main>
                    <Projects showTitle={false} projectExamples={projects} numberOfColumns={3} />
                </main>
            </Wrapper>
        </Layout>
    );
}

export default PublicationsPage;
