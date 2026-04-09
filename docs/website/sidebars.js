module.exports = {
  docs: [
    {

      type: "category",
      label: "Authoring",
      items: [
        "authoring-getting-started",
        "authoring-introducing-writing",
        "authoring-embedding-media",
        {
          type: "category",
          label: "Working with Multimedia",
          items: [
            "authoring-finding-media",
            "authoring-embeds",
            "authoring-accessibility",
          ],
          collapsed: true
        },
        "authoring-collaboration",
        "authoring-preparing-for-publication", 
        "general-licensing", 
        "advanced-planning-your-case"
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Teaching",
      items: ["teaching-strategies","teaching-getting-started", "teaching-discussions"],
      collapsed: false,
    },
  ]};
