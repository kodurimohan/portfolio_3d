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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codiis_icon,
  dalle,
  memories,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  /*{
    name: "Tailwind CSS",
    icon: tailwind,
  },*/
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  /*{
    name: "Three JS",
    icon: threejs,
  },*/
  {
    name: "git",
    icon: git,
  },
  /*{
    name: "figma",
    icon: figma,
  },*/
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "CODIIS",
    icon: codiis_icon,
    iconBg: "#383E56",
    date: "Jul 2023 - Present",
    points: [
      "Developing and maintaining web applications using Node.js, React.js and other related technologies.",
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
    name: "Memories",
    description:
      "Web-based platform that is called 'Memories' and it is a simple social media app that allows users to post interesting events that happened in their lives. with real app features like user authentication and social login using Google accounts.",
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
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/kodurimohan/Memories-App",
  },
  {
    name: "DALL-E Clone",
    description:
      "Experience the power of AI with the DALL-E website clone! Generate mesmerizing images from text descriptions, experiment with customizable prompts, securely save your creations and share with Community. Enjoy a seamless user experience with data security.",
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
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/kodurimohan/Image_Generator",
  },
];

export { services, technologies, experiences, testimonials, projects };
