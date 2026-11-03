// Wraps the standard blog plugin to expose each post's `category` frontmatter
// as global data, so the homepage can show separate feeds per category.
const blogPlugin = require("@docusaurus/plugin-content-blog");

async function blogPluginWithCategories(context, options) {
  const instance = await blogPlugin.default(context, options);

  return {
    ...instance,
    async contentLoaded(args) {
      await instance.contentLoaded(args);

      const posts = args.content.blogPosts.map(({ metadata }) => ({
        title: metadata.title,
        permalink: metadata.permalink,
        date: metadata.date,
        category: metadata.frontMatter.category,
      }));
      args.actions.setGlobalData({ posts });
    },
  };
}

module.exports = {
  ...blogPlugin,
  default: blogPluginWithCategories,
};
