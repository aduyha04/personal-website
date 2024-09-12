// EFF5EF
// EB644D
// 457b9d
// 875949
// 2C2C3C
import {
  gmail,
  linkedin,
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
  gt,
  resume,
  github,
  landsend,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
];

const services = [
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/aduyha04",
  },
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/anh-duy-n-ha4/",
  },
  {
    title: "Resume",
    icon: resume,
    link: "https://drive.google.com/file/d/1u0DDPiUy3qv_jWZYd5cj9PugKeUsu2pP/view?usp=sharing",
  },
  {
    title: "Email",
    icon: gmail,
    link: "mailto:anhduy.n.ha4@gmail.com",
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
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Undergraduate Researcher",
    company_name: "Georgia Tech Data Systems and Analytics Lab",
    icon: "https://sites.gatech.edu/cc-db/wp-content/uploads/sites/926/2020/01/database.png",
    iconBg: "#FFFFFF",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Utilized Python to examine various LLMs' effect on educational assessment through automation and feedback.",
      "Compared the accuracy, fairness and reliability of LLMs on various topics and proposes a combination of AI and human review.",
      "Revealed the moral issues such as bias and AI-detection inaccuracies underscore why AI integration in education should be carefully checked.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Land's End Japan",
    icon: landsend,
    iconBg: "#FFFFFF",
    date: "May 2024 - Aug 2024",
    points: [
      "Collaborated with a team of 5 developers to design and implement RESTful APIs in Node.js and Express, improving data retrieval speed",
      "Completed over 15 Jira tickets including full features, user stories, updates, data retrieval, and bug fixes.",
      "Gained experience in testing frameworks and backend using technologies including Cypress and Jest",
      "Utilized skills in web development, UI/UX, and product management with React.js, HTML, CSS, JavaScript, and Redux"
    ],
  },
  {
    title: "Undergraduate Teacher Assistant",
    company_name: "Course: Intro to Computing",
    icon: gt,
    iconBg: "#FFFFFF",
    date: "August 2023 - Dec 2023",
    points: [
      "Held weekly 10h+ of office hours at the virtual Help Desk to clarify course content and help students with homework",
      "Provided support on online platforms on different issues including technical and academic difficulties",
    ],
  },
];

const testimonials = [
  {}
];

const projects = [
  {
    name: "WanderSync",
    description:
      "This is a Android travel application that recommends tourists attractions based on a set of parameters such as rating and price point.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "",
  },
  {
    name: "Driving Distraction Detector",
    description:
      "This is a multi-modal audio and video processing system using TensorFlow and PyTorch to detect real-time driver distraction through facial attribute analysis",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "",
  },
  {
    name: "Restaurant Finder",
    description:
      "This a web application that integrates the Google Places API to provide real-time restaurant search, interactive maps, and detailed venue information.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aduyha04/atl-restaurant-finder",
  },
  {
    name: "Spotify Wrapped",
    description:
      "a Django-based web application that mimics the popular Spotify Wrapped experience, allowing users to view their Spotify listening statistics.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aduyha04/spotify-wrapped-clone",
  },
  {
    name: "Flappy Bird",
    description:
      "An AI-driven version of Flappy Bird using Python, Pygame, and the NEAT algorithm that allows the neural networks to evolve in both structure and weight to train the AI to master the game.",
    tags: [
      {
        name: "Pygame",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "AI/ML",
        color: "pink-text-gradient",
      },
    ],
    image: gmail,
    source_code_link: "https://github.com/aduyha04/AI_Flappy_Bird",
  },
];

export { services, technologies, experiences, testimonials, projects };
