import React from "react";
import Link from "@docusaurus/Link";

export default function Feed() {
  const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

  return (
    <ul>
      {recentPosts.items.slice(0, 6).map((item, index) => (
        <li key={index}>
          <Link to={`${item.permalink}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
