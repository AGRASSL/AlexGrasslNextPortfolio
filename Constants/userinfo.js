//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Alexandra Grassl",
    contact: {
        email: 'alexandragrassl2021@u.northwestern.edu', 
        phone: '(773) 420-6546',
    },
    socials: [
        { type: 'github', link: 'https://github.com/AGRASSL', icon: faGithubAlt },
        { type: 'linkedin', link: 'https://www.linkedin.com/in/alexandra-grassl-a61a07126/', icon: faLinkedinIn },
    ],
    greeting: {
        title: "Hey there! I'm Alex.",
        subtitle: "Full Stack Web Developer based in Chicago"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Front End", // eg.frontend, backend, devops etc
            skills: ["Javascript", "React", "SCSS Styling"] 
        },
        {
            category: "Back End",
            skills: ["MongoDB", "MySQL", "Node"]
        },
        {
            category: "DevOps",
            skills: ["Version Control", "Dev Tools", "Testing"]
        },
        // {
        //     category: "Category",
        //     skills: ["Skillset4", "Skillset4", "Skillset4"]
        // },
    ],
    about: {
        content: "Bachelors of Science in Business Leadership Management from DePaul University. Certificate of Full Stack Web Development from Northwestern University. I am to fully utilize and expand my knowlege of software development in an agile environment.",
        resume: "https://docs.google.com/document/d/1Iduoh9x38UDTP2MtXD9ZWX41CRDz6zHh-JSYZJw_uLM/edit?usp=sharing" 
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'January - July 2021', //timespan
                title: 'Full Stack Web Development Bootcamp',
                organization: 'Northwestern University',
                description: 'A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS'
            },
            {
                time: 'September 2014 - June 2019',
                title: 'Bachelors of Science in Business Management',
                organization: 'DePaul University',
                description: 'A degree focused on leadership management and a full scope understanding of the workplace and its actions.'
            },
        ],
    },
    experience: {
        visible: true,
        experienceList: [
            {
                company: 'Yelp',
                position: 'Account Executive',
                time: 'July 2019 - February 2020', //timespan
                description: 'Account Executive assisting small businesses obtain exposure for consumers to connect with their business. Working for SEO related to their page, increasing revenue, and identifying gaps in opportunity.' 
            },
            {
                company: 'Walter Payton College Prep',
                position: 'Volleyball Program Director',
                time: 'August 2017 - November 2018',
                description: 'Head Coach and Program Director for Walter Payton College Prep. Handled funding, inventory, scheduling, transportation, hiring, practice planning and achieved a regional championship in 2018.'
            },
            {
                company: 'State of Wisconsin',
                position: 'Regional Manager',
                time: 'April 2015 - September 2015',
                description: 'Managed the Department’s Microsoft Dynamics 365 database, conducted outreach, provided analysis reports of 2500+ contacts for the Small Business Regulatory Review Board.'
            },
        ],
    },
    blogs: {
        visible: false
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    // blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}