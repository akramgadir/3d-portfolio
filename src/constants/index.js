import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  makerversity,
  deloitte,
  carrent,
  jobit,
  tripguide,
  threejs,
  chevalier,
  northcoders,
  express,
  pokemongameimage,
  ncnews,
  onepercentbetter,
  uom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Electronic Engineer",
    icon: mobile,
  },
  {
    title: "Consultant",
    icon: backend,
  },
  {
    title: "3D Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "BEng Electronic Engineering",
    company_name: "The University of Manchester - 2:1 with honours",
    icon: uom,
    iconBg: "#383E56",
    date: "Sept 2016 - June 2019",
    points: [
      "Wirelessly Controlled Robotic Arm and Data Glove (1st class) - Final Year Individual Project.",
      "Created and programmed a fully working prototype of a hand (3D printed) controlled by a wearable electronic glove that I have also created",
      "C++, ARM microcontrollers, IMUs, actuators, I2C and SPI, haptic feedback, control systems.",
    ],
  },
  {
    title: "Electronics Engineer",
    company_name: "Makerversity",
    icon: makerversity,
    iconBg: "#383E56",
    date: "Oct 2019 - February 2020",
    points: [
      "Hardware and software design of the world’s most portable electric scooter.",
      "PCB design, microcontroller engineering, electronics circuit design, sensors, mechatronics, motor control, reverse engineering, Arduino prototyping.",
      "Worked directly with the CEO in a team of four engineers to release our first product.",
    ],
  },
  {
    title: "R&D Automotive Electronics Engineer",
    company_name: "Chevalier Technologies Ltd.",
    icon: chevalier,
    iconBg: "#E6DEDD",
    date: "June 2020 - Aug 2020",
    points: [
      "Designed and developed new products in the Advanced Technology Department.",
      "Designed high power and low power circuits and PCBs with Altium Designer.",
      "Developed automotive electronics products with Tesla, SONY, McLaren, Aston Martin, BMW, and other international companies.",
      "Safety critical systems, power actuators and control electronics systems development.",
    ],
  },
  {
    title: "R&D Software Analyst",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#383E56",
    date: "Feb 2021 - Aug 2023",
    points: [
      "Lead technical interviews with client technical experts from billion dollar tech companies to discuss their R&D projects and document them for technical and non-technical audiences.",
      "Researched and analysed technical documentation and data from clients.",
      "Project management of up to 10 clients at a time to deliver R&D claims timely and within budget.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Trained other analysts and consultants within the team on our technologies.",
    ],
  },
  {
    title: "Trainee Software Engineer",
    company_name: "Northcoders",
    icon: northcoders,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Nov 2023",
    points: [
      "Intensive full-time bootcamp covering: Javascript, HTML, CSS, React, Node.js, test-driven development (TDD), pair programming, object-oriented programming, asynchronous programming, APIs and databases, Express, SQL, third-party data sets and APIs, cloud deployment, DOM.",
      "Preceded by 3-month pre-course covering: Javascript, HTML, CSS, Object Oriented Programming, Advanced Challenges, Refactoring, Debugging",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Hard-working and focused are two words that come to mind when I think of Akram. I had the pleasure of working with him for a few months when I started my position at Taur and, though we were working in different departments, in the open-plan office I'd always see him hard at work on his projects, making a bundle of wires and circuits come to life or using his initiative to solve any arising issues himself. I was always impressed by his meticulousness and the seeming ease with which he accomplished quite complex tasks. Beyond his engineering capabilities, Akram is friendly, bursting with ideas and suggestions, and is an overall delight to work with. He would make a great addition to any team.",
    name: "Keenia Dyer-Williams",
    designation: "Social Media and Content Marketer",
    company: "Makerversity",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
  {
    testimonial:
      "It has been a pleasure to work with Akram on the *** project which, from the outset, has not been the most straightforward. He joined the project team half way through and understood straight away the challenges faced, such as getting the client to cooperate but was willing right from the start to help delivering the best outcome. His delivery is always of very good quality, produced on time and accurate ready to be used for delivery. His good technical knowledge is always very valuable.",
    name: "Eric Salles",
    designation: "Consultant",
    company: "Deloitte",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    testimonial:
      "I really enjoyed working with you so far. I appreciate the fact that you showed you availability to share your insights on **** with me and you were very patient and methodical in the steps you took. It was very easy for me to understand all the new features. I believe we collaborated well also on ****** to do a first review of the survey. I appreciated you were open to my insights and experiences I had and I believe this is just the beginning of an efficient collaboration.",
    name: "Ruxandra X Velicu",
    designation: "Consultant",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/lego/7.jpg",
  },
];

const projects = [
  {
    name: "News Website",
    description:
      "Full stack web-based platform with articles which are divided topics. This also involved building an API for the purpose of accessing application data programmatically. The intention here is to mimic the building of a real world backend service (such as reddit) which should provide this information to the front end architecture. The database will be PSQL, and we interact with it using node-postgres",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "PSQL",
        color: "pink-text-gradient",
      },
    ],
    image: ncnews,
    source_code_link: "https://github.com/akramgadir/Akrams-nc-news-project",
  },
  {
    name: "Pokemon Memory Game",
    description: "DOM based web application featuring a memory matching game.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pokemongameimage,
    source_code_link: "https://github.com/akramgadir/pokemon-memory-game.git",
  },
  {
    name: "Gym Performance Tracker (Mobile App)",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: onepercentbetter,
    source_code_link: "https://github.com/akramgadir/fe-1-percent-better/",
  },
];

export { services, technologies, experiences, testimonials, projects };
