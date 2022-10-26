module.exports = {
  docs: [
    {
      type: "category",
      label: "Quickstart Guide",
      items: [
        {
          type: "category",
          label: "Authoring",
          items: [
            "authoring-getting-started",
            "authoring-embedding-media",
            "authoring-collaboration",
            "authoring-preparing-for-publication",
          ],
          collapsed: false,
        },
        {
          type: "category",
          label: "Teaching",
          items: ["teaching-getting-started", "teaching-discussions"],
          collapsed: false,
        },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Working with Multimedia",
      items: [
        "authoring-finding-media",
        "authoring-embeds",
        "authoring-accessibility",
      ],
    },
    {
      type: "category",
      label: "Advanced",
      items: ["advanced-planning-your-case"],
      collapsed: false,
    },
  ],
};
