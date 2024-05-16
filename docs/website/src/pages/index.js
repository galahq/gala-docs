import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import home from "./home.module.css";
import Feed from "../components/feed";
import Card from "../components/card";
import Projects from "../components/projects"
import { features, about, aboutOverview, socials } from "../content/home-content";
import { projects } from "../content/projects-content"

// Features section
function Features() {
  const Feature = ({ imageUrl, title, description }) => {
    const imgUrl = useBaseUrl(imageUrl);
    return (
      <div className={`col col--4 ${home.feature}`}>
        {imgUrl && (
          <div className="text--center">
            <img className={home.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  const featuresList = features.map((props, idx) => (
    <Feature key={idx} {...props} />
  ));
  return (
    <div className="container">
      <div className="row">{featuresList}</div>
    </div>
  );
}

// About section
function About() {
  const AboutSection = ({ children, header }) => {
    return (
      <section className={"col col--4"}>
        <h3>{header}</h3>
        {children}
      </section>
    );
  };

  return (
    <div className={`container ${home.aboutWrapper}`}>
      <div className="row">
        <AboutSection header="About Gala">
          <div>
            {aboutOverview}
          </div>
          <Card
            content={about}
          />
          <ul>
            <li>
              <Link to={useBaseUrl("publications/")}>Publications</Link>
            </li>
          </ul>
        </AboutSection>
        <AboutSection header="Connect">
          <div className={home.connectWrapper}>
            <ul>
              {socials.map(link => <li key={link.name}><a href={link.url}>{link.name}</a></li>)}
            </ul>
          </div>
        </AboutSection>
        <AboutSection header="News & Updates">
          <div className={home.newsWrapper}>
            <Feed />
          </div>
          <div className={home.moreButton}>
            <Link className="button button--link" to={useBaseUrl("blog/")}>
              More
            </Link>
          </div>
        </AboutSection>
      </div>
    </div>
  );
}

// Call to action section
function CallToAction() {
  return (
    <div className={home.callToActionContainer}>
      <img
        className={home.callToActionImage}
        src={require("@site/static/img/gala-background.png").default}
      />
      <div className={home.callToActionWrapper}>
        <div className={home.callToActionInnerContainer}>
          <h3>Ready to get started?</h3>
          <p>
            The best way to get to know Gala is to dive in and{" "}
            <a href="https://www.learngala.com/my_cases">create a pilot case</a>{" "}
            or <a href="https://www.learngala.com">browse some cases</a> in our
            libraries. You can also check out the{" "}
            <Link to={useBaseUrl("docs/")}>quick start guide</Link> for a basic
            how-to.
          </p>
        </div>
      </div>
    </div>
  );
}

// Order in which to render the homepage sections
const mainSectionsOrder = [
  <Features />,
  <About />,
  <Projects showTitle={true} projectExamples={projects} />,
  <CallToAction />,
];

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const homeSections = mainSectionsOrder.map((section, idx) => (
    <section key={idx} className={home.homeSection}>
      {section}
    </section>
  ));

  return (
    <Layout
      title={`About ${siteConfig.title}`}
      description="Gala is making sustainability learning more grounded, dynamic, and collaborative."
    >
      <header className={`hero hero--primary ${home.heroBanner}`}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={home.heroButtonContainer}>
            <div className="button-group button-group--block">
              <a
                href="https://www.learngala.com"
                className={`button button--secondary ${home.primaryHeaderButton}`}
              >
                Try Gala
              </a>
              <Link
                to={useBaseUrl("docs/")}
                className={`button ${home.secondaryHeaderButton}`}
              >
                Quick Start Guide
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={[home.bodyWrapper]}>{homeSections}</div>
      </main>
    </Layout>
  );
}
