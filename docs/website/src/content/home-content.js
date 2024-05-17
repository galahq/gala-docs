/* Content for home page (index.js) */
import React from "react";

// Features section content
const features = [
    {
        title: "Create and Innovate",
        imageUrl: "img/create.svg",
        description: (
            <>
                Gala makes it quick and easy to create a case or adapt an existing
                learning module. Effortlessly integrate multimedia content into your
                module including videos, podcasts, and data tools.
            </>
        ),
    },
    {
        title: "Collaborate and Adapt",
        imageUrl: "img/community.svg",
        description: (
            <>
                Gala encourages prototyping and iterative improvement. Collaborators can
                develop pilot cases together and solicit feedback with inline comments
                before publishing and sharing.
            </>
        ),
    },
    {
        title: "Teach and Share",
        imageUrl: "img/share.svg",
        description: (
            <>
                Gala modules perform well in classroom, community, and remote learning
                settings. Publish your case and share it as widely as you like.
                Institutions can create libraries with multiple cases.
            </>
        ),
    },
];

// about section content

const aboutOverview = "We are working to make learning more grounded, dynamic, and collaborative. Our work is focused on developing and maintaining the open source Gala platform and partnering with teams and networks to explore the possibilities of collaborative learning module and case study production and use.";

const about = {
    buttonText: "See what you can do with Gala",
    image: "overview-thumbnail.png",
    moreLink: "gala-overview.pdf",
};


// connect section content
const connect = `We are eager to share your experiences creating and using modules on Gala with the rest of the Gala community. We also invite contributions to the Gala guides and codebase, translations of modules and the Gala UI, and integrations with third-party tools. You can get in contact with our team at hello@learngala.com or via LinkedIn.`;

const socials = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/learngala",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/@learngala",
    },
    {
        name: "GitHub",
        url: "https://github.com/galahq",
    },
];

export { about, aboutOverview, features, socials, connect };