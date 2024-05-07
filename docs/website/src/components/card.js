/*
Returns different variants of cards depending on the "cardType" prop: 
- Example cards take: hed, dek, image, body, and optionally moreLink and/or caseLink
- About cards take optionally: hed, image, body, link, buttonText
*/

import React from "react";
import card from "./card.module.css";

export default function Card({ content, cardType }) {
  switch (cardType) {
    case 'example':
      return <ExampleCard content={content} />;
    case 'about':
      return <AboutCard content={content} />;
    case 'team':
      return <TeamCard content={content} />;
    default:
      return <AboutCard content={content} />;
  }
}

// Card for example section
const ExampleCard = ({ content: { hed, dek, image, body, moreLink, caseLink, old } }) => {
  const isCaseURLString = "learngala.com/cases";
  return (
    <li className="card">
      <div className="card__image`">
        {image && image.length > 0 && (
          <img src={require("./assets/" + image).default}></img>
        )}
      </div>
      {!!old && <div className={card.old}>Past Project</div>}
      <div className="card__header">
        <h4>
          <span className={card.hed}>{hed}</span>
          <br />
          <span className={card.dek}>{dek}</span>
        </h4>
      </div>
      <div className={"card__body"}>{body}</div>
      <div className="card__footer">
        <div className={"button-group button-group--block"}>
          {caseLink && caseLink.length > 0 && (
            <a
              href={caseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--block"
            >
              {caseLink.includes(isCaseURLString)
                ? "See the case"
                : "See case library"}
            </a>
          )}
          {moreLink && moreLink.length > 0 && (
            <a
              href={moreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--block"
            >
              Learn more
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

// Card for the about section.
const AboutCard = ({ content: { hed, image, body, moreLink, buttonText } }) => {
  return (
    <div className={`card ${card.aboutCard}`}>
      {!!hed && (
        <div className="card__header">
          <h4>
            <span className={card.hed}>{hed}</span>
          </h4>
        </div>
      )}
      {!!image && (
        <div className={`card__image ${card.aboutCardImage}`}>
          <img src={require("@site/static/img/" + image).default}></img>
        </div>
      )}
      {!!body && (
        <div className={"card__body"}>{body}</div>
      )}
      {!!moreLink && (
        <div className="card__footer">
          <a
            href={require(`@site/static/${moreLink}`).default}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--secondary button--block"
          >
            {buttonText} ›
          </a>
        </div>

      )}
    </div>
  );
}

// Card for the Teamsection.
const TeamCard = ({ content: { name, title, about, link, image } }) => {
  return (
    <li className={`card ${card.exampleCard}`}>
      <div>
        {!!image && (
          <div className={`card__image ${card.aboutCardImage}`}>
            <img src={require("@site/static/img/" + image).default}></img>
          </div>
        )}
        {!!name && (
          <div className="card__header">
            <h4>
              <span className={card.name}>{name}</span>
            </h4>
          </div>
        )}
        {!!title && (
          <div className={`card__body ${card.cardTitle}`}>{title}</div>
        )}
        {!!about && (
          <div className={"card__body"}>{about}</div>
        )}
        {!!link && (
          <div className="card__footer">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--block"
            >
              More ›
            </a>
          </div>
        )}
      </div>
    </li>
  );
}