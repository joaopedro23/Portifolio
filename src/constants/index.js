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
    title: "React.js Developer",
    company_name: "Sistema Finaceiro Simples",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Desenvolvimento e manutenção de um sistema financeiro com React.js e tecnologias associadas.",
"Colaboração com equipes multidisciplinares, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
"Implementação de design responsivo e garantia de compatibilidade entre navegadores.",
"Participação em revisões de código e fornecimento de feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "API-com-nodeJS",
    company_name: "API",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Desenvolvimento de uma API com Node.js, Prisma como ORM e SQLite como banco de dados, como único desenvolvedor.",
"Implementação de serviços e garantia de compatibilidade com vários clientes.",
"Participação em revisões de código e autocrítica para aprimoramento constante.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Portifolio 3d",
    icon: shopify,
    iconBg: "#383E56",
    date: "Ago 2022 - Jan 2023",
    points: [
      "Desenvolvendo e mantendo aplicações web usando React.js e outras tecnologias relacionadas.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participando de revisões de código e recebendo feedback construtivo a outros desenvolvedores."
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Web-Cooked-app",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Web-Cooked-app foi um projeto colaborativo entre mim e um amigo, onde desenvolvemos uma aplicação web usando React para o front-end e Node.js para o back-end. Neste projeto conjunto, trabalhamos juntos para criar uma aplicação de receitas, utilizando nossas habilidades em programação para implementar uma interface amigável e responsiva. Durante o desenvolvimento, colaboramos de perto em equipe, incorporando feedback construtivo um do outro para garantir a alta qualidade do produto final. Esta experiência nos proporcionou valiosas oportunidades de aprendizado e fortaleceu nossas habilidades em tecnologias modernas de desenvolvimento web.",
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
    image: "https://randomuser.me/api/portraits/men/60.jpg",
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
  // trabalha aqui agora //
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
