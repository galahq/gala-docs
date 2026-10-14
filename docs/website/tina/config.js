import { defineConfig } from "tinacms";

const slugify = (text = "") =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Single-file JSON collections: editors change the content but can't add or remove the file.
const singleFile = { allowedActions: { create: false, delete: false } };

const guides = {
  name: "doc",
  label: "Guides",
  path: "docs",
  format: "md",
  // Left out because saving them through Tina changes the content: it merges adjacent
  // blockquotes, drops headings nested in list items, or can't serialize the page at all.
  // Edit these three by hand.
  match: {
    exclude: "{authoring-planning-your-case,general-licensing,teaching-strategies}",
  },
  fields: [
    {
      // "id" is reserved by Tina, so the field is exposed as docId and written as "id".
      type: "string",
      name: "docId",
      nameOverride: "id",
      label: "ID",
      description:
        "Used in sidebars.js and in the page URL. Changing it breaks existing links.",
      required: true,
    },
    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
    { type: "string", name: "sidebar_label", label: "Sidebar label" },
    { type: "string", name: "slug", label: "Slug" },
    { type: "string", name: "description", label: "Description" },
    { type: "rich-text", name: "body", label: "Body", isBody: true },
  ],
};

const blog = {
  name: "post",
  label: "Blog",
  path: "blog",
  format: "md",
  ui: {
    filename: {
      slugify: (values) =>
        `${new Date().toISOString().slice(0, 10)}-${slugify(values?.title)}`,
    },
  },
  fields: [
    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
    { type: "string", name: "slug", label: "Slug" },
    { type: "string", name: "tags", label: "Tags", list: true, ui: { component: "tags" } },
    { type: "rich-text", name: "body", label: "Body", isBody: true },
  ],
};

const publications = {
  name: "publications",
  label: "Publications",
  path: "src/content",
  format: "json",
  match: { include: "publications" },
  ui: singleFile,
  fields: [
    // Rich text so editors can add links. Tina saves it as a Markdown string,
    // which src/components/inlineMarkdown.js renders.
    { type: "rich-text", name: "description", label: "Introduction" },
    {
      type: "object",
      name: "publications",
      label: "Publications",
      list: true,
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        { type: "string", name: "title", label: "Title", required: true },
        { type: "string", name: "citation", label: "Citation", ui: { component: "textarea" } },
        { type: "string", name: "date", label: "Year" },
        { type: "string", name: "url", label: "URL" },
      ],
    },
  ],
};

const team = {
  name: "team",
  label: "Team",
  path: "src/content",
  format: "json",
  match: { include: "team" },
  ui: singleFile,
  fields: [
    {
      type: "object",
      name: "members",
      label: "Team members",
      list: true,
      ui: { itemProps: (item) => ({ label: item?.name }) },
      fields: [
        { type: "string", name: "name", label: "Name", required: true },
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "about", label: "About", ui: { component: "textarea" } },
        { type: "image", name: "image", label: "Photo" },
        { type: "string", name: "website", label: "Website" },
        { type: "string", name: "linkedIn", label: "LinkedIn" },
      ],
    },
  ],
};

const projects = {
  name: "projects",
  label: "Projects",
  path: "src/content",
  format: "json",
  match: { include: "projects" },
  ui: singleFile,
  fields: [
    {
      type: "object",
      name: "projects",
      label: "Projects",
      list: true,
      ui: { itemProps: (item) => ({ label: item?.dek || item?.hed }) },
      fields: [
        { type: "string", name: "hed", label: "Heading", required: true },
        { type: "string", name: "dek", label: "Project name" },
        { type: "string", name: "body", label: "Description", ui: { component: "textarea" } },
        { type: "image", name: "image", label: "Image" },
        { type: "string", name: "moreLink", label: "Learn more link" },
        {
          type: "string",
          name: "caseLink",
          label: "Case or library link",
          description: "A learngala.com/cases link is labelled as a case, anything else as a library.",
        },
        { type: "boolean", name: "old", label: "Past project" },
      ],
    },
  ],
};

const home = {
  name: "home",
  label: "Home page",
  path: "src/content",
  format: "json",
  match: { include: "home" },
  ui: singleFile,
  fields: [
    {
      type: "object",
      name: "features",
      label: "Features",
      list: true,
      ui: { itemProps: (item) => ({ label: item?.title }) },
      fields: [
        { type: "string", name: "title", label: "Title", required: true },
        { type: "image", name: "imageUrl", label: "Image" },
        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
      ],
    },
    { type: "string", name: "aboutOverview", label: "About Gala", ui: { component: "textarea" } },
    {
      type: "object",
      name: "about",
      label: "About card",
      fields: [
        { type: "string", name: "buttonText", label: "Button text" },
        { type: "image", name: "image", label: "Image" },
        {
          type: "string",
          name: "moreLink",
          label: "Button link",
          description: "Path to a file in static/, e.g. /gala-overview.pdf",
        },
      ],
    },
    { type: "string", name: "connect", label: "Connect", ui: { component: "textarea" } },
    {
      type: "object",
      name: "socials",
      label: "Social links",
      list: true,
      ui: { itemProps: (item) => ({ label: item?.name }) },
      fields: [
        { type: "string", name: "name", label: "Name", required: true },
        { type: "string", name: "url", label: "URL", required: true },
      ],
    },
  ],
};

const help = {
  name: "help",
  label: "Help page",
  path: "src/content",
  format: "json",
  match: { include: "help" },
  ui: singleFile,
  fields: [
    { type: "string", name: "title", label: "Title", required: true },
    {
      type: "string",
      name: "body",
      label: "Body",
      description: "Wrap text in *asterisks* to show it in italics.",
      ui: { component: "textarea" },
    },
  ],
};

const policies = {
  name: "policies",
  label: "Policies page",
  path: "src/pages",
  format: "md",
  match: { include: "policies" },
  ui: singleFile,
  fields: [
    { type: "string", name: "docId", nameOverride: "id", label: "ID" },
    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
    { type: "rich-text", name: "body", label: "Body", isBody: true },
  ],
};

export default defineConfig({
  branch: process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME || process.env.SEMAPHORE_GIT_BRANCH || "main",
  // Both come from the Tina Cloud project at app.tina.io
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [guides, blog, publications, team, projects, home, help, policies],
  },
});
