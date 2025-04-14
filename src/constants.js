// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import viteLogo from './assets/tech_logo/vite.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import clerkLogo from './assets/tech_logo/clerk.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import pytorchLogo from './assets/tech_logo/pytorch.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import streamlitLogo from './assets/tech_logo/streamlit.png';
import jupyterLogo from './assets/tech_logo/jupyter.png';
import assemblyaiLogo from './assets/tech_logo/assemblyai.png';
import geminiLogo from './assets/tech_logo/gemini.png';
import goLogo from './assets/tech_logo/go.png';

// Experience Section Logo's
import targetLogo from './assets/company_logo/target_logo.png';
import edgemapLogo from './assets/company_logo/edgemap_logo.png';


// Education Section Logo's
import revaLogo from './assets/education_logo/reva_logo.png';
import presidencyLogo from './assets/education_logo/presidency_logo.png';
import oxfordLogo from './assets/education_logo/oxford_logo.png';

// Project Section Logo's
import techcartLogo from './assets/work_logo/tech_cart.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import jobsLogo from './assets/work_logo/jobs.png';
import gitspherexLogo from './assets/work_logo/gitspherex.png';
import breweryLogo from './assets/work_logo/brewery_review.png';
import todoLogo from './assets/work_logo/todo.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Vite', logo: viteLogo },
      { name: 'Clerk', logo: clerkLogo }, 
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
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Streamlit', logo: streamlitLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Go', logo: goLogo },
      { name: 'C-Sharp', logo: csharpLogo },
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
      { name: 'Jupyter', logo: jupyterLogo }, 
      { name: 'AssemblyAI', logo: assemblyaiLogo },
      { name: 'Gemini', logo: geminiLogo }, 
      { name: 'PyTorch', logo: pytorchLogo }, 
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: targetLogo,
      role: "Software Developer Apprentice",
      company: "Target Corp India Private Limited",
      location: "Bengaluru, India",
      date: "September 2024 - Present",
      desc: "Contributed to building robust infrastructure tools and internal web platforms using Go and React. Automated deployment workflows using Docker and Kubernetes. Collaborated in an agile environment to streamline CI/CD processes, improve system scalability, and implement efficient solutions through Bash and cloud-native practices.",
      skills: [
        "Go",
        "Docker",
        "Kubernetes",
        "MongoDB",
        "Bash",
        "Git",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      id: 1,
      img: edgemapLogo,
      role: "Fullstack Developer Intern",
      company: "Edgemap Softwares Pvt Ltd",
      location: "Bengaluru, India",
      date: "September 2023 - December 2023",
      desc: "Contributed to backend development using VB and C#. Developed and integrated an email system into the company’s ERP with SMTP configuration. Worked on HRM software and enhanced functionality. Collaborated on designing and implementing custom backend features as per organizational needs.",
      skills: [
        "MS SQL Server",
        ".NET Framework",
        "VB",
        "ASP.NET",
        "HTML",
        "C#",
        "SMTP",
        "CSS",
      ],
    },

  ];
  
  export const education = [
    {
      id: 0,
      img: revaLogo,
      school: "REVA University, Bengaluru",
      date: "Sept 2020 - Aug 2024",
      grade: "98.3%",
      desc: "Pursued a Bachelor's degree in Computer Science and Systems Engineering, where I built a strong foundation in core computer science subjects such as Data Structures, Algorithms, Machine Learning, IoT, and Web Development. Gained hands-on experience through projects and lab work, applying theoretical knowledge to real-world tech solutions.",
      degree: "Bachelor of Technology (B.Tech) - Computer Science and System Engineering",
    },
    {
      id: 1,
      img: presidencyLogo,
      school: "Presidency PU College, Bengaluru",
      date: "Apr 2019 - March 2020",
      grade: "85.16%",
      desc: "Completed my Pre-University Course (PUC) with Physics, Chemistry, Mathematics, and Computer Science as major subjects. This laid the academic foundation for my future studies in engineering and technology.",
      degree: "2nd PUC(12th) - PCM with Computer Science",
    },
    {
      id: 2,
      img: oxfordLogo,
      school: "Oxford English School, Bengaluru",
      date: "June 2017 - April 2018",
      grade: "94.08%",
      desc: "Completed SSLC (10th grade) with a focus on Science and Computer applications. Developed early interest in technology and problem-solving during this period.",
      degree: "SSLC(10th)"
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "TechCart – Smart Shopping with Automated Billing",
      description:
        "An IoT-enabled smart shopping solution that automates billing processes. Built with React, Node.js, and MongoDB, this system integrates sensors to detect products in a cart and provides a seamless checkout experience, improving retail efficiency.",
      image: techcartLogo,
      tags: ["React", "Node.js", "Material UI", "MongoDB", "Express", "IoT"],
      github: "https://github.com/Gowtham-R-19",
      webapp: "https://techcartonline.vercel.app/",
    },
    {
      id: 1,
      title: "Movie Recommendation App",
      description:
        "A machine learning-based movie recommendation system built using Streamlit and Python libraries. It recommends movies based on user preferences, similarity metrics, and popular trends using scikit-learn, pandas, and NumPy.",
      image: movierecLogo,
      tags: ["Python","Streamlit", "NumPy","Pandas", "Scikit-learn"],
      github: "https://github.com/Gowtham-R-19/Movie_Recommender_System",
      webapp: "https://gowtham-movie-recommender-system.streamlit.app/",
    },
    {
      id: 2,
      title: "GitSphereX - Intelligent Code Collab Tool ",
      description:
        "A collaborative platform for developers to work on code intelligently. Features include AI-powered documentation, commit summaries, and contextual codebase search. Built using a microservices architecture with Next.js, TypeScript, and AI tools.",
      image: gitspherexLogo,
      tags: [ "Next.js", "TypeScript", "Prisma", "PostgreSQL", "Gemini", "AssemblyAI"],
      github: "https://github.com/Gowtham-R-19/",
      webapp: "https://github.com/Gowtham-R-19",
    },
    {
      id: 3,
      title: "Brewery Review System",
      description:
        "A full-stack review platform that lets users rate and review breweries. Built with React, Node.js, and MongoDB, it provides an engaging UI with AntDesign components and secure backend APIs for user interaction.",
      image: breweryLogo,
      tags: ["React JS", "NodeJs", "Express", "AntDesign", "MongoDB", "JavaScript"],
      github: "https://github.com/Gowtham-R-19/Brewery_Review_System_Frontend",
      webapp: "https://brewery-review-system-frontend-1.onrender.com/",
    },
    {
      id: 4,
      title: "React Jobs Portal",
      description:
        "A responsive job portal built with React + Vite and styled using Tailwind CSS. It features job listings, search, and filtering functionalities, enhanced with Framer Motion for smooth animations and MongoDB for data storage.",
      image: jobsLogo,
      tags: ["React + Vite", "TailwindCss", "MongoDB", "Javascript","Framer Motion"],
      github: "https://github.com/Gowtham-R-19/React-Job-Portal",
      webapp: "https://github.com/Gowtham-R-19",
    },
    {
      id: 5,
      title: "To-Do App",
      description:
        "A minimal, full-stack productivity application to manage daily tasks. Developed with Go and MongoDB, it includes Dockerized deployment and a simple yet effective UI built using HTML, CSS, and JavaScript.",
      image: todoLogo,
      tags: ["Golang", "HTML", "Javascript", "CSS", "MongoDB", "Docker"],
      github: "https://github.com/Gowtham-R-19",
      webapp: "https://github.com/Gowtham-R-19",
    },
  ];  