import React from "react";
import Layout from "@theme/Layout";
import Wrapper from "../components/pageWrapper";
import Card from "../components/card";
import { teamContent } from "../content/team-content";
import team from './team.module.css'

export default function Team() {
  const teamCards = teamContent.map(member => {
    return (
      <Card
        key={member.name}
        cardType="team"
        content={member}
      />
    )
  })

  return (
    <Layout title="Team">
      <Wrapper wide={true}>
        <h1>Our Team</h1>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <ul className={team.teamGrid}>
              {teamCards}
            </ul>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
