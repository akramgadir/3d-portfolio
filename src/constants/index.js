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
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
