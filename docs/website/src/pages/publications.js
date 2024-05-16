import React from "react";
import Layout from "@theme/Layout";
import publications from "./publications.module.css";
import Wrapper from "../components/pageWrapper";
import { publicationsList, publicationsDescription } from "../content/publications-content"

function PublicationsPage() {

  function PublicationsList() {
    return (
      <div className={publications.publications}>
        <div className="row">
          <div className="col col--10">
            <p>
              {publicationsDescription}
            </p>
          </div>
        </div>
        <ul>
          {publicationsList.map((pub, index) => (
            <li key={index}>
              <a href={pub.url}>
                <h4>{pub.title}</h4>
              </a>
              <p className={publications.citation}>{pub.citation}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <Layout title="Publications">
      <Wrapper>
        <header>
          <h1>Publications</h1>
        </header>
        <main>
          <PublicationsList />
        </main>
      </Wrapper>
    </Layout>
  );
}

export default PublicationsPage;
