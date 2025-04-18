// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import herokulogo from './assets/tech_logo/heroku.png';

// Experience Section Logo's
import EdeviceCR from './assets/company_logo/EdeviceCR.png';
import bytewise from './assets/company_logo/bytewise.png';
import freelancer from './assets/company_logo/freelancer.png';

// Education Section Logo's
import comsats from './assets/education_logo/comsats.png';
import TCFC from './assets/education_logo/TCFC.png';
import TCFS from './assets/education_logo/TCFS.png';

// Project Section Logo's
import FurnishARt from './assets/work_logo/FurnishARt.png';
import Ecommerce from './assets/work_logo/Ecommerce.png';
import  Edevice from './assets/work_logo/Edevice.png';
import analogclock from './assets/work_logo/analog-clock.png';
import resturant from './assets/work_logo/resturant.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      {name: 'heroku', logo: herokulogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: EdeviceCR,
      role: "Frontend Developer",
      company: "KPK Police Department",
      date: "April 2024 - June 2024",
      desc: "It was a community service project where I Worked as a Frontend Developer, focusing on the development of a web-based application for the KPK Police Department. My responsibilities included to handle state management, API calls and improving the code, and bug fixes for a better user experience using JavaScript, and ReactJS. I collaborated with the backend team to ensure seamless integration and functionality, contributing to the overall success of the project.",
      skills: [
        "Redux",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Express JS",
      ],
    },
    {
      id: 1,
      img: bytewise,
      role: "MERN Stack Intern",
      company: "Bytewise Limited",
      date: "July 2024 - Sept 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "JavaScript",
        "ReactJS",
        "Redux",
        "Tailwind CSS",
        "SQL",
        "Node JS",
        "Express JS",
        "MongoDB",
      ],
    },
    {
      id: 2,
      img: freelancer,
      role: "JR. MERN Stack Developer",
      company: "Freelancer",
      date: "Jan 2023 - Present",
      desc: "As a Junior MERN Stack Developer, I have successfully completed multiple projects. My role involved developing both frontend and backend components, ensuring seamless integration and functionality. I utilized technologies such as HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, and MongoDB to deliver high-quality web applications that meet client requirements.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "React JS",
        "Redux",
        "Node JS",
        "Express JS",
        "MongoDB",  
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: comsats,
      school: "Comsats University Islamabad, Abbottabad Campus",
      date: "Jan 2021 - Jan 2025",
      grade: "2.79 CGPA out of 4.00",
      desc: "I have completed my Bachelor's degree (BSCS) in Computer Sciences from Comsats University, Abbottabad. During my time at Comsats, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Comsats University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Sciences - BSCS",
    },
    {
      id: 1,
      img: TCFC,
      school: "TCF College, Karachi",
      date: "March 2018 - March 2020",
      grade: "73.2%",
      desc: "I completed my Intermediate degree in Engineering from TCF College, Karachi. Throughout my studies, I was immersed in a variety of events like Robotics and Ardino programming that deepened my understanding of computing and technology. I gained practical insights into the world of programming. My time at TCF College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Engineering - Intermediate (Engineering)",
    },
    {
      id: 2,
      img: TCFS,
      school: "TCF School, Karachi",
      date: "Apr 2016 - March 2018",
      grade: "82.9%",
      desc: "I completed my class 10 education from TCF School, Karachi, under the BISE board, where I studied Science with Computer.",
      degree: "BISE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "FurnishARt - AR Furniture Application",
      description:
        "FurnishARt is an innovative Augmented Reality (AR) application that allows users to visualize furniture in their own space before making a purchase. Built using React Native and AR technology, it provides a seamless and interactive experience for users to explore various furniture options in real-time.",
      image: FurnishARt,
      tags: ["Next JS", "AR", "JavaScript", "PostgreSQL", "Tailwind CSS", "Unity3D"],
      github: "https://github.com/mnomandev/furnishARt_fullstack.git",
      webapp: "https://furnishart.vercel.app/",
    },
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform featuring role-based authentication for admins and users. It includes a visually stunning frontend and a seamless backend, enabling efficient product management, secure transactions, and a smooth shopping experience.",
      image: Ecommerce,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "tailwindCSS", "JavaScript"],
      github: "https://github.com/mnomandev/E-commerce-MERN.git",
      webapp: "",
    },
    {
      id: 2,
      title: "EdeviceCR - Electronic Device Complaint & Registration",
      description:
        "EdeviceCR is a web-based application designed for the KPK Police Department, enabling users to register complaints and track the status of their electronic devices. Built using React.js and Node.js, it features a user-friendly interface and efficient backend for seamless complaint management.",
      image: Edevice,
      tags: ["React JS", "JavaScript", "Redux", "tailwindCSS", "State Management", "API calls"],
      github: "https://github.com/ansar-javaid/edevice_admin_frontend.git",
      webapp: "https://abbottabadpolice.kp.gov.pk/eDevice/about",
    },
    {
      id: 3,
      title: "Yummy Restaurant",
      description:
        "A full-stack restaurant management system that allows users to view and order food items. Built with React.js and Node.js, it features a user-friendly interface and efficient backend for seamless order management.",
      image: resturant,
      tags: ["React JS", "JavaScript", "Redux", "tailwindCSS", "State Management"],
      github: "https://github.com/mnomandev/Resturant-Website.git",
      webapp: "",
    },
    
    {
      id: 4,
      title: "Analog Clock",
      description:
        "A sleek and modern analog clock built using HTML, CSS, and JavaScript. It features a smooth design and includes an alarm functionality with sound notifications, making it both visually appealing and practical for daily use.",
      image: analogclock,
      tags: ["HTML", "CSS", "JavaScript", "Alarm Feature"],
      github: "https://github.com/mnomandev/Analog_Clock.git",
      webapp: "https://analog-clock-mauve-mu.vercel.app/",
    },
  ];  