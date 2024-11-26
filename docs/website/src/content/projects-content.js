/* Content for projects component and page 
links: caseLink (link to case or library, will detect if it's a library), moreLink (more information)
set 'old' to true to indicate a past project
*/

const projects = [
    {
        hed: "Open Knowledge",
        dek: "Socio-Environmental Knowledge (SEEK) Commons",
        body: `SEEK Commons—an NSF-funded collaboration between the University of Notre Dame, University of Michigan, University of Virginia, UC Davis, and the HDF Group—is working to extend Gala in order to create an open and editable resource hub, to house tools, resources, and curricular modules for integrating data stewardship frameworks into participatory socio-environmental research.`,
        image: "seek-commons.png",
        moreLink: "https://seekcommons.org/about.html",
        caseLink: ""
    },
    {
        hed: "Past Perspectives",
        dek: "Centre for Ancient Environmental Studies (CAES)",
        body: `The premodern world provides a laboratory of various experiments in human-environment interactions, all operating on a global scale over the longue durée. The Centre for Ancient Environmental Studies (CAES), through their use of Gala, is exploring the value of historical case studies in teaching and learning. Working on a largely UK based context, they are also developing toolkits for creators on Gala tracing impact and use.`,
        image: "caes.png",
        moreLink: "https://caes.wp.st-andrews.ac.uk/",
        caseLink: ""
    },
    {
        hed: "Public Utilities Research and Education",
        dek: "Consortium on Disinfection by-products and Opportunistic pathogens in Water Networks (CO-DOWN)",
        body: "CO-DOWN is comprised of researchers from the University of Michigan, the University of Texas, George Washington University, and the University of Massachusetts, working in collaboration with The Water Tower, a nonprofit organization based in Georgia focused on solving critical real-world drinking water problems. Their findings will be deployed in Gala learning modules to aid in understanding and communicating the risks associated with opportunistic pathogens and disinfection by-products in drinking water utilities.",
        image: "watertower.png",
        moreLink: "https://cfpub.epa.gov/ncer_abstracts/index.cfm/fuseaction/display.abstractDetail/abstract_id/11404/report/0",
        caseLink: ""
    },
    {
        hed: "Collaborative Curriculum",
        dek: "NeurotechEU: the European University of Brain and Technology",
        body: "The European University of Brain and Technology (NeurotechEU) is an alliance between eight European universities with the goal to build a trans-European network of excellence in brain research and technologies to increase the competitiveness of European education, research, economy and society. The alliance is integrating Gala and the ICF Training Space platform to collaboratively adapt neurotechnology courses for innovative hybrid and online learning accross the member universities.",
        image: "neurotech.png",
        moreLink: "https://theneurotech.eu/",
        caseLink: "https://www.learngala.com/catalog/libraries/neurotecheu",
    },
    {
        hed: "Accessible Data Science Tools",
        dek: "Data Learning for Better Drinking Water in Small Utilities",
        body: "In partnership with the U-M School of Civil & Environmental Engineering with funding from Public Interest Technology University Network, in collaboration with SEAS professor Kyle Whyte, the City of Ann arbor, the BlueConduit startup, and U-M’s Blue Sky Initiative for water sector engagement the team is using Gala to make learning tools for classrooms, communities and workforces facing challenges in the monitoring and improvement of quality drinking water distribution systems. These tools can be shared among utilities in cities like Michigan’s Benton Harbor and Flint—and eventually, shared with rural communities and tribal water utilities.",
        image: "pit.png",
        moreLink:
            "https://seas.umich.edu/news/big-tech-faces-scrutiny-24-universities-get-36m-major-foundations-fuel-inclusive-public",
        caseLink: "",
        old: true,
    },
    {
        hed: "Learning at the Edge of Applied Research",
        dek: "Distributed Solar Energy Harvesting for Carbon-Free Ammonia Synthesis",
        body: "Funded by the National Science Foundation (EFRI DChem award #2131709), this project aims to provide the scientific and technical foundation for producing fertilizer close to the farm and avoid the enormous greenhouse gas footprint of the industrial Haber-Bosch ammonia synthesis process. As the research group, based at the University of Michigan, works to pioneer the concept of photo-enhanced thermal catalysis in the lab, they are also prototyping, piloting, and assessing training modules to convey the innovations to stakeholders, inspire students, and move towards implementation.",
        image: "dchem.png",
        moreLink:
            "https://news.engin.umich.edu/2021/09/2m-to-replace-fossil-fuels-with-solar-power-in-fertilizer-production/",
        caseLink: "",
    },
    {
        hed: "Place-Based Narratives",
        dek: "Detroit River Story Lab (DRSL)",
        body: "The Detroit River Watershed is one of the nation’s most deeply and visibly implicated in the troubling legacy of the carbon economy. The DRSL project is working with Gala to research and amplify stories of the Detroit River, and to make the rich history and current challenges facing the river and adjoining communities more present, palpable, and real. The modules, which are piloted at the University of Michigan and in schools or sites in the Detroit area, focus on themes of Indigenous relationships to water and land and connecting decolonization with decarbonization. are piloted at University of Michigan and in schools or sites in the Detroit area.",
        image: "detroitriver.png",
        moreLink:
            "https://sites.lsa.umich.edu/detroit-river-story-lab/about/research-team/",
        caseLink: "https://www.learngala.com/catalog/libraries/detroit-river-storylab",
    },
    {
        hed: "Data Skills for Future Economies",
        dek: "MBDH Learning Innovation Fellows",
        body: "Student fellows from across the midwest region’s colleges, vocational schools, and universities work with faculty to create innovative interactive data analysis activities that nest within sustainability science case studies. They design, prototype, and pilot these features in classrooms or professional learning communities within the Midwest Big Data Hub (MBDH) network, part of a four year, $4 million award from the National Science Foundation.",
        image: "mbdh.png",
        moreLink:
            "https://midwestbigdatahub.org/mbdh-learning-innovation-fellows-program/",
        caseLink: "",
        old: true,
    },
    {
        hed: "Enhancing Ecology Learning",
        dek: "Online Content for Experiential Learning of Tropical Systems (OCELOTS)",
        body: "OCELOTS is an international network of tropical ecologists, educators, media specialists, instructional designers, and software developers, exploring best practices in research-based modules for teaching tropical biology and conservation. Funded by a National Science Foundation Grant (RCN-UBE proposal ID: 2120141), members of the network have integrated interactive data applications into cases to create online labs, used video and sound to capture place-based experiences, and pioneered collaborative online “networkshops” to exchange feedback on cases in progress.",
        image: "ocelots.png",
        moreLink: "https://ocelots.nrem.iastate.edu/",
        caseLink: "https://www.learngala.com/catalog/libraries/ocelots",
    },
    {
        hed: "Grounded Engagement",
        dek: "U-M SEAS Environmental Justice Education",
        body: "Cases in this library have been created in the University of Michigan's Environmental Justice Certificate and Masters Degree programs, by a combination of students, faculty and alumni and other professionals in advocacy, policy and research sectors. Each case addresses an environmental justice topic, from ableism in the environmentalist movement to indigenous rights and resource development.",
        image: "ej.png",
        moreLink: "",
        caseLink:
            "https://www.learngala.com/catalog/libraries/um-seas-environmental-justice",
    },
    {
        hed: "Adapting Case-Based Teaching for an Emerging Field",
        dek: "Michigan Sustainability Cases",
        body: "Michigan Sustainability Cases center on real-world problems with multiple possible solutions. They are co-designed by teams of students and faculty from across the University of Michigan campus, in partnership with practitioners from various sectors. As the very first and one of the finest libraries on gala, they seek both to transform case based learning itself, and to widen participation in solving environment and sustainability challenges.",
        image: "msc.png",
        moreLink:
            "https://crlt.umich.edu/michigan-sustainability-cases-initiative-adapting-case-based-teaching-innovative-sustainability",
        caseLink: "https://www.learngala.com/catalog/libraries/michigan",
    },
    {
        hed: "Sustainability and Development for Global Learners",
        dek: "Sustainability and Development MasterTrack™ Certificate",
        body: "This online masters program focuses on the United Nations’ Sustainable Development goals and has students analyze three Gala cases and synthesize their lessons for sustainability and development, before creating their own cases and developing an instructional component for the case of their choosing with a faculty member. This program was created by University of Michigan School for Environment and Sustainability (SEAS) faculty who have gone on to create a new, and more modular curriculum for an in person field of specialization at U-M SEAS on Sustainability and Development.",
        image: "sdgs.png",
        moreLink:
            "https://online.umich.edu/series/sustainability-and-development-mastertrack-certificate/",
        caseLink: "",
    },
    {
        hed: "Curricular Environmental Partnerships",
        dek: "The Dow Innovation Fellows Program at CEDER",
        body: "The Dow Innovation Teacher Fellowship (DITF), sponsored by the Dow Company Foundation, is implemented through the University of Michigan’s Center for Education Design, Evaluation, and Research (CEDER), supporting sustainability education methods, through professional development opportunities for teachers in the Saginaw-Midland-Bay City Tri-City area of Michigan. The program integrates sustainability across school subjects, to support development of new Gala cases and adaptation of existing cases as interdisciplinary sustainability learning units in middle and high school classrooms using project and place-based pedagogical methods.",
        image: "ditf.png",
        moreLink:
            "https://soe.umich.edu/news/secondary-teachers-invited-apply-dow-innovation-teacher-fellowship",
        caseLink:
            "https://www.learngala.com/catalog/libraries/um-center-for-education-design-evaluation-and-research",
    },
];

export { projects };