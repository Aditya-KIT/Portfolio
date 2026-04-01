import diziLogo from '../assets/company_logo/dizi.png';
import aktuLogo from '../assets/education_logo/aktu.png';
import lfhLogo from '../assets/education_logo/lfh.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import streamlitLogo from '../assets/tech_logo/streamlit.png';
import n8nLogo from '../assets/tech_logo/n8n.png';
import langchainLogo from '../assets/tech_logo/langchain.png';
import netlifyLogo from '../assets/tech_logo/netlify.png';
import langgraphLogo from '../assets/tech_logo/langgraph.png';
import madhuramLogo from '../assets/work_logo/madhuram.png';


import churnLogo from '../assets/work_logo/churn_analysis.png';
import pdfLogo from '../assets/work_logo/pdf_reader.png';


export const PersonalInfo = {
  name: "Aditya Gupta",
  role: "Software Engineer",
  bio: "B.Tech Computer Science graduate and results-driven Software Engineer with expertise in Java, Python, SQL, Azure, and GCP. Skilled in building scalable data pipelines, optimizing databases, and designing cloud architectures. Experienced in analytics, BI, and AI-driven workflows, including Generative AI and prompt engineering.",
  email: "adityaguptakit@gmail.com",
  phone: "+91 6388923200",
  location: "Varanasi, India",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    linktree: "https://linktr.ee/"
  }
};

export const Skills = [
  { 
    category: "Languages", 
    items: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ] 
  },
  { 
    category: "Technologies", 
    items: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Artificial Intelligence", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
      { name: "Data Analytics", icon: "https://img.icons8.com/color/48/line-chart.png" },
      { name: "DevOps", icon: "https://img.icons8.com/color/48/settings--v1.png" },
      { name: "Cloud Computing", icon: "https://img.icons8.com/color/48/cloud.png" },
      { name: "SpringBoot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
    ] 
  },
  { 
    category: "Tools", 
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "PowerBI", icon: "https://img.icons8.com/color/48/power-bi.png" },
      { name: "Tableau", icon: "https://img.icons8.com/color/48/tableau-software.png" },
      { name: "Langchain", icon: langchainLogo },
      { name: "Langgraph", icon: langgraphLogo },
      { name: "n8n", icon: n8nLogo },
      { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Wordpress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Streamlit", icon: streamlitLogo},
      { name: "Postman", icon: postmanLogo },
      { name: "Netlify", icon: netlifyLogo},
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ] 
  },
  { 
    category: "Other Skills", 
    items: [
      { name: "Effective Communication", icon: "https://img.icons8.com/color/48/communication.png" },
      { name: "Analytical Skill", icon: "https://img.icons8.com/color/48/analytics.png" },
      { name: "Quick Learning", icon: "https://img.icons8.com/color/48/learning.png" },
      { name: "Time Management", icon: "https://img.icons8.com/color/48/time-management.png" }
    ] 
  }
];

export const Experience = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Dizi Global Solution",
    duration: "Sept 2023 - Oct 2023",
    logo: diziLogo,
    description: "Contributed to software development by developing web applications, and implementing CI/CD pipelines to streamline project delivery and ensure efficient deployment. Successfully delivered multiple projects aligned with client requirements, contributing to a 10% increase in organizational sales during the internship period"
  },
];

export const Projects = [
  {
    id: 1,
    title: "AI PDF Summarizer",
    description: "I developed an AI-powered PDF Reader application using LangChain, Streamlit, and the Gemini LLM. This intelligent system is designed to analyze PDF documents and generate accurate responses based on user queries. By leveraging advanced language models, the application enables efficient information retrieval, making document interaction smarter, faster, and more user-friendly.",
    image: pdfLogo,
    technologies: ["Langchain", "Streamlit", "Gemini LLM"],
    liveLink: "#",
    githubLink: "https://github.com/Aditya-KIT/AI-PDF-Reader"
  },
  {
    id: 2,
    title: "Product Management",
    description: "This project is a product management web application designed to perform full CRUD (Create, Read, Update, Delete) operations efficiently. It is built using modern frontend technologies such as React.js, HTML, CSS, Bootstrap, and JavaScript, along with backend technologies including Java, Spring Boot, REST APIs, and MySQL. The application ensures seamless data management, a responsive user interface, and efficient communication between the frontend and backend systems.",
    image: "https://images.unsplash.com/photo-1510442650500-9321f5d59daf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Full Stack",
    technologies: ["React", "CSS Modules", "Node.js"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Madhuram Handicrafts",
    description: "Madhuram Handicrafts is a fully functional e-commerce website developed using WordPress, HTML, CSS, and JavaScript. The platform showcases a wide range of handcrafted products, offering a seamless online shopping experience.\n\nIt includes complete e-commerce functionality such as product listings, billing, secure online payment integration, and automated SMS notifications for customers. The website also provides detailed product descriptions to enhance user engagement.\n\nIn addition, comprehensive SEO optimization has been implemented, including on-page, off-page, and technical SEO, to improve visibility and search engine ranking.",
    image: madhuramLogo,
    category: "Full Stack",
    technologies: ["Wordpress", "PHP", "HTML", "CSS", "JavaScript"],
    liveLink: "https://madhuramhandicrafts.com/",
    githubLink: "https://madhuramhandicrafts.com/"
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "Developed an expense tracker web application designed to monitor and manage daily expenses, allowing users to access and review their financial data anytime. The application was built using HTML, CSS, Bootstrap, and JavaScript for the frontend, along with PHP, MySQL, and REST APIs for backend functionality. It ensures efficient data handling, a user-friendly interface, and seamless performance for real-time expense tracking.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Telecom Analysis",
    description: "This project focuses on telecom data analysis, with a primary emphasis on customer churn analysis. It involves the use of tools and technologies such as MS Excel, MySQL, Power BI, and Python, along with libraries like NumPy, Pandas, Matplotlib, and Scikit-learn. Through this project, I developed an interactive and dynamic dashboard to visualize key insights. Additionally, machine learning techniques were implemented to predict customer churn, enabling data-driven decision-making and strategic business insights.",
    image: churnLogo,
    category: "Data Analysis",
    technologies: ["React", "Python", "PowerBI"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 6,
    title: "AI Chatbot",
    description: "Developed a custom AI-powered chatbot designed to function as an intelligent agent, capable of generating accurate and context-aware responses based on user queries. The chatbot was enhanced using prompt engineering and fine-tuning techniques to improve response quality, adaptability, and overall user interaction experience.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI Projects",
    technologies: ["React", "Langchain", "OpenAI"],
    liveLink: "#",
    githubLink: "#"
  }
];

export const Certifications = [
  {
    id: 1,
    title: "Microsoft AI Fundamentals",
    issuer: "Microsoft",
    logo: "https://img.icons8.com/color/96/microsoft.png",
    date: "February 2026"
  },
  {
    id: 2,
    title: "Advanced Digital Marketing Course",
    issuer: "Dizi Global Solution",
    logo: diziLogo,
    date: "May 2021"
  }
];

export const Education = [
  {
    id: 1,
    degree: "Bachelor of Technology (Computer Science)",
    institution: "Kashi Institute of Technology",
    logo: aktuLogo,
    duration: "2021 - 2025",
    description: "I have completed my B.Tech in Computer Science, where I built a strong foundation in core technical and professional competencies. Throughout my academic journey, I gained in-depth knowledge of OOPS concepts, SDLC methodologies, and emerging technologies, understanding how theoretical concepts are applied in real-world scenarios. My coursework enhanced my problem-solving and analytical abilities, while college activities refined my communication skills, personality development, and overall professional confidence."
  },
  {
    id: 2,
    degree: "CBSE(XII) - PCM",
    institution: "Little Flower House, Varanasi",
    logo: lfhLogo,
    duration: "2021",
    description: "My 12th-grade studies laid a strong academic foundation for my higher education. The knowledge and discipline I developed during this phase greatly supported my college journey, especially in strengthening my analytical and statistical skills. It also played a vital role in helping me identify my interests and confidently choose my desired B.Tech field, setting a clear direction for building my future career."
  },
  {
    id: 3,
    degree: "CBSE(X)",
    institution: "Little Flower House, Varanasi",
    logo: lfhLogo,
    duration: "2019",
    description: "My 10th-grade education played a pivotal role in shaping my academic journey by exposing me to diverse subjects and broadening my perspective across different fields. It helped build a strong foundational base and guided me toward identifying my interests. Choosing PCM thereafter became a decisive step in defining my career path and setting the direction for my future aspirations."
  },
];

export const ResumesData = [
  {
    id: 1,
    title: "Software Engineer Resume",
    description: "Detailed resume highlighting software engineering experience, core competencies, and notable projects.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Data Scientist Resume",
    description: "Comprehensive resume focusing on data science, analytics, machine learning models, and data-driven insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    downloadLink: "#"
  },
  {
    id: 3,
    title: "AI Engineer Resume",
    description: "Specialized resume tailored for Artificial Intelligence, neural networks, natural language processing, and prompt engineering.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    downloadLink: "#"
  }
];
