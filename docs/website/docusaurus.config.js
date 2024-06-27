/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Gala",
  tagline: "Open tools for collaborative learning",
  url: "https://docs.learngala.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://msc-gala.imgix.net/favicon_gala.png",
  organizationName: "galahq", // Usually your GitHub org/user name.
  projectName: "gala-docs", // Usually your repo name.

  customFields: {
    fonts: {
      sansSerif: ["Tenso", "system-ui"],
    },
  },
  themeConfig: {
    image: "img/twittercard.png",
    navbar: {
      title: "",
      logo: {
        alt: "Gala",
        src: "img/gala-logo.svg",
      },
      items: [
        {
          to: "/",
          label: "About",
          position: "right",
        },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Guides",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          to: "/team",
          label: "Team",
          position: "right",
        },
        {
          to: "/help",
          label: "Help",
          position: "right",
        },
        {
          to: "/publications",
          label: "Publications",
          position: "right",
        },
        {
          href: "https://www.learngala.com",
          label: "Go to Gala",
          position: "left",
        },
      ],
    },

    colorMode: {
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ["r"],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Team",
              to: "team"
            },
            {
              label: "Publications",
              to: "publications",
            },
            {
              label: "Policies",
              to: "policies",
            },
          ],
        },
        {
          title: "Guides",
          items: [
            {
              // Label of the link
              label: "Authoring",
              // Client-side routing, used for navigating within the website.
              // The baseUrl will be automatically prepended to this value.
              to: "docs/",
            },
            {
              label: "Teaching",
              to: "docs/teaching-getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/learngala",
            },
            {
              label: "Github",
              // A full-page navigation, used for navigating outside of the website.
              href: "https://github.com/galahq/gala",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Regents of the University of Michigan`,
      logo: {
        src: "img/gala-logo.svg",
      },
    },

    metadata: [
      {
        name: "keywords",
        content: "sustainability, module, learning, oer, open",
      },
    ],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/galahq/gala",
        },
        blog: {
          feedOptions: {
            type: 'all',
            // createFeedItems: async (params) => {
            //   const {blogPosts, defaultCreateFeedItems, ...rest} = params;
            //   return defaultCreateFeedItems({
            //     // keep only the 10 most recent blog posts in the feed
            //     blogPosts: blogPosts.filter((item, index) => index < 10),
            //     ...rest,
            //   });
            // },
          },
          showReadingTime: false,
          blogSidebarCount: 7,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "data-analytics",
        path: "data-analytics",
        routeBasePath: "data-analytics",
        sidebarPath: require.resolve("./sidebarsDataAnalytics.js"),
        // ... other options
      },
    ],
  ],
  scripts: ["/js/typekit.js"],
};
