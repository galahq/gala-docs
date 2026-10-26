import React from "react";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";

export default function Feed({ category }) {
  const { posts } = usePluginData("docusaurus-plugin-content-blog");
  const recentPosts = posts.filter((post) => post.category === category);

  return (
    <ul>
      {recentPosts.slice(0, 6).map((post) => (
        <li key={post.permalink}>
          <Link to={post.permalink}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
