import React from "react";
import Layout from "@theme/Layout";
import Wrapper from "../components/pageWrapper";
import helpContent from "../content/help.json";

// Text wrapped in *asterisks* is rendered in italics.
function withEmphasis(text) {
  return text
    .split(/\*(.+?)\*/)
    .map((part, idx) => (idx % 2 ? <em key={idx}>{part}</em> : part));
}

export default function HelpPage() {
  return (
    <Layout>
      <Wrapper>
        <h1>{helpContent.title}</h1>
        <div>{withEmphasis(helpContent.body)}</div>
      </Wrapper>
    </Layout>
  );
}
