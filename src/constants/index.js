import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  nextjs,
  bs,
  express,
  aws,
  wolmart,
  cineplex,
  admin,
  posapp,
  myfolio,
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
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testi",
    title: "Reviews",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Back End Developer",
    icon: backend,
  },
  {
    title: "Technology Explorer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "React Bootstrap",
    icon: bs,
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React JS Developer",
    company_name: "Starbucks",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next JS Developer",
    company_name: "Tesla",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node JS Developer",
    company_name: "Shopify",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
      "I thought it was impossible to make a website as beautiful as our product, but Sajib proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sajib does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sajib optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ShoppingCart App",
    description: `It's an all-in-one Ecommerce and Inventory Management System for Discover Products, Making a
      purchase, Managing carts, Execute secure payments, and effortlessly completing checkouts 
      MongoDB, Node.js, Express.js, React.js, Redux, and JavaScript
      `,
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
    image: wolmart,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/shoppingcart-ecommerce",
    live_link : "https://shopping-cart-client-dun.vercel.app"
  },
  {
    name: "Cineplex Book a Show ",
    description: `An Online Ticket Booking Application as well as purchase tickets, reserve seats for your favorite
      shows, and even create personalized Halls and Theatres - Node Js, Express Js, React Js, Mongo DB, Stripe, RTK, Ant Design,
      Bootstrap, CSS & HTML`,
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
    image: cineplex,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/ticket-booking",
    live_link : "https://ticket-booking-client-vite.onrender.com/"
  },
  {
    name: "DOCCURE Admin Panel",
    description: `Its an smart authentication and authorization project with role-based permissions.
      Imagine an admin dashboard where users handle tasks based on their permissions and ensuring
      security - MERN Stack, JWT, Bcrypt.js, Axios, react-router-dom, and more.`,
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
    image: admin,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/doccure-admin-dashboard",
    live_link : "https://doccure-dashboard-clinet.onrender.com/"
  },
  {
    name: "Point of Sale Solutions",
    description: `An Online Ticket Booking Application as well as purchase tickets, reserve seats for your favorite shows, and even create personalized Halls and Theatres - MERN Stack, Redux, AntD & Tailwind`,
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
    image: posapp,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/pointOfSells-App",
    live_link : "https://pos-app-client-zarj.onrender.com/"
  },
  {
    name: "Myfolio - Portfolio",
    description: `Boasting proficiency in the coveted MERN Stack. From conceptualization to deployment, I breathe life into projects, user-centric solutions. Let's build something extraordinary together`,
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
    image: myfolio,
    source_code_link: "https://github.com/DEVELOPERxSAJIB/my-portfolio",
    live_link : "https://developersajib.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
