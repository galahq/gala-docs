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
            "authoring-introducing-writing",
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
      label: "Advanced topics",
      items: ["general-licensing", "advanced-planning-your-case",  {
        type: "category",
        label: "Working with Multimedia",
        items: [
          "authoring-finding-media",
          "authoring-embeds",
          "authoring-accessibility",
        ],
        collapsed: false,
      },],
      collapsed: false,
    },
  ],
};
