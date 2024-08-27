
import expenseTrackerImg from "@/public/expensetrackerImg.png";
import blogsite from "@/public/blogsite.png";
import covid from "@/public/covid.png"
import HMS from "@/public/HMS.png"
import VacationList from "@/public/vacationWihlist.png"
// import docFinderPro from "@/public/docfinderpro.png";
import AmazonClone from "@/public/AmazonClone.png"
import NewsWave from "@/public/NewsWave.png"
import businessdirectory from "@/public/business_directory.png"
import SmartTools from "@/public/smartTools.png"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaNodeJs, FaGitAlt, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiRedux, SiExpress, SiCplusplus, SiMysql,  SiPostgresql, SiFlutter, SiCsharp } from 'react-icons/si';
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";




export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Full-Stack Developer - FISTA SOLUTIONS",
    location: "Faisalabad, Pakistan",
    description:
    "I led a team in the creation and maintenance of web applications using JavaScript, React.js, and Node.js. My work involved leveraging Next.js with TypeScript to build a strong front-end, and I applied Tailwind CSS for efficient styling. I also implemented RESTful APIs and integrated them with both MongoDB and PostgreSQL databases. Additionally, I collaborated closely with stakeholders to establish project requirements and timelines.",
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  
  {
    title: "The NewsWave",
    description:
      "A news platform leveraging NewsAPI for content, with integrated web development APIs for easy news sharing, ensuring users access up-to-date information effortlessly.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript" , "News API"],
    imageUrl: NewsWave,
  },
  {
    title: "Smart SEO Tools",
    description:
      "A blog platform with rich text editing, commenting, user profiles, and Smart SEO tools, developed during my internship using Next.js with TypeScript, Tailwind CSS, and PostgreSQL in collaboration with Chaudhry Bassam Tanvir.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript" , "PostgresSQL"],
    imageUrl: SmartTools,
  },
  {
    title: "Business Directory",
    description:
      "A project completed at FISTA Solutions in partnership with Chaudhry Bassam Tanvir, developed using Next.js with TypeScript, Tailwind CSS, and PostgreSQL.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript" , "PostgresSQL"],
    imageUrl: businessdirectory,
  },
  {
    title: "Blog Website",
    description:
      "A blog website crafted for hands-on experience, featuring seamless integration with the Contentful API for dynamic and efficient content management.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Contentful Api"],
    imageUrl: blogsite
  },
  {
    title: "Expense Tracker",
    description:
      "An expense tracker designed for hands-on experience and logic-building, fostering practical skills in financial management.",
    tags: [" Next.Js", "Typescript", "Tailwind CSS" , "React Graphs"],
    imageUrl: expenseTrackerImg ,
  },
  {
    title: "Hotel Management System",
    description:
      "BuphinderJogi Hotel ensuring seamless functionality and user-friendly experience for effective hotel operations.",
    tags: ["HTML", "Javascript", "Tailwind CSS", "NodeJs"],
    imageUrl: HMS ,
  },
  {
    title: "Covid Screening App",
    description:
      "A beginner-friendly project designed with HTML, CSS, and JavaScript, offering hands-on learning and practical coding experience.",
    tags: ["HTML", "Javascript", "Bootstrap5", "JQuery"],
    imageUrl: covid ,
  },
  {
    title: "Amazon Clone",
    description:
      "An Amazon clone project, meticulously crafted with HTML, CSS, and JavaScript, providing a hands-on experience in web development and dynamic functionality.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: AmazonClone ,
  },
  {
    title: "Vacation WishList",
    description:
      "Vacation WishList is a project utilizing HTML, Tailwind CSS, jQuery, and JavaScript to create a dynamic and stylish platform for planning dream vacations.",
    tags: ["JQuery", "HTML", "Bootstrap5", "JavaScript" ],
    imageUrl: VacationList,
  }
  
  
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "MongoDB",
//   "Redux",
//   "Express",
//   "C++",
//   "MySql",
//   "Firebase",
//   "PostgresSQL",
//   "Framer Motion",
//   "Flutter"
// ] as const;
export const skillsData = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "BootStrap", icon: FaBootstrap },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  {name: "Java" , icon : FaJava},
  { name: "Python" , icon: FaPython},
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Git", icon: FaGitAlt },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redux", icon: SiRedux },
  { name: "Express", icon: SiExpress },
  { name: "C++", icon: SiCplusplus },
  { name: "C#", icon: SiCsharp },
  { name: "MySql", icon: SiMysql },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "PostgresSQL", icon: SiPostgresql },
  { name: "Framer Motion", icon: TbBrandFramerMotion  },
  { name: "Flutter", icon: SiFlutter },
] as const;