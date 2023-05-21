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
  shiryam,
  codeprism,
  eonlint,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Devops Engineer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Technical Blogger",
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
    name: "Three JS",
    icon: threejs,
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
    title: "Backend Developer",
    company_name: "Codeprism Technologies",
    icon: codeprism,
    iconBg: "#1B1B1B",
    date: "March 2023 - Present",
    points: [
      "Designed and optimized API endpoints,reducing response time and improving system performance.",
      "Used TypeORM for complex queries and efficient database interaction, improving data retrieval and manipulation.",
      "Collaborated with the front-end team to define API contracts, ensuring seamless integration.",
      "Implemented event-driven integration between microservices using RabbitMQ, ensuring efficient & reliable data\n" +
      "exchange.",
      "Proactively optimized microservices architecture based on Prometheus monitoring data, enhancing performance,\n" +
      "scalability, and stability."
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Eonlint",
    icon: eonlint,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - March 2023",
    points: [
      "Developed a customized CRM system, streamlining CRM processes and improving overall efficiency.",
      "Created student & college dashboards, enhancing user experience and facilitating easy access to important info.",
      "Leveraged Next.js forfrontend development and Express.js with MongoDB for backend development, ensuring\n" +
      "seamless integration and efficient data management",
      "Utilized AWS services (EC2, S3, etc.) for storage and infra management,resulting in scalable & reliable application.",
      "Contributed to India’s 1st AI-powered Edutech platform, developing chatbot w/ advanced capabilities &\n" +
      "personalized AI career counseling using ChatGPT APIs, providing tailored guidance to students."
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Shiryam Technologies",
    icon: shiryam,
    iconBg: "#383E56",
    date: "Jan 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.Spearheaded development of essential features for Troopod,resulting in intuitive and user-friendly dashboard.",
      "Implemented real-time notifications and customizable user preferences in the dashboard, creating a seamless and\n" +
      "personalized user experience.",
      "Built a robust backend infrastructure using Node.js, Express, and MongoDB for efficient storage and retrieval of\n" +
      "user preferences and notification data.",
      "Utilized React to build dynamic and interactive frontend components for effortless user preference customization.",
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
