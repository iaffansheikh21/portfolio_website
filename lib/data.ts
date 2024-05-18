
import expenseTrackerImg from "@/public/expensetrackerImg.png";
import blogsite from "@/public/blogsite.png";
import covid from "@/public/covid.png"
import HMS from "@/public/HMS.png"
import VacationList from "@/public/vacationWihlist.png"
import docFinderPro from "@/public/docfinderpro.png";
import AmazonClone from "@/public/AmazonClone.png"
import NewsWave from "@/public/NewsWave.png"




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
    title: "Full-Stack Developer",
    location: "Faisalabad, Pakistan",
    description:
      "I am actively gaining hands-on experience in web development by working on real projects. This practical approach allows me to apply my skills and build a solid understanding of creating websites and applications.",
    date: "2022 - present",
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
    title: "Blog Website",
    description:
      "A blog website crafted for hands-on experience, featuring seamless integration with the Contentful API for dynamic and efficient content management.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Contentful Api"],
    imageUrl: blogsite
  },
  {
    title: "Vacation WishList",
    description:
      "Vacation WishList is a project utilizing HTML, Tailwind CSS, jQuery, and JavaScript to create a dynamic and stylish platform for planning dream vacations.",
    tags: ["JQuery", "HTML", "Bootstrap5", "JavaScript" ],
    imageUrl: VacationList,
  },
  {
    title: "Expense Tracker",
    description:
      "An expense tracker designed for hands-on experience and logic-building, fostering practical skills in financial management.",
    tags: [" Next.Js", "Typescript", "Tailwind CSS" , "React Graphs"],
    imageUrl: expenseTrackerImg ,
  },
  {
    title: "Amazon Clone",
    description:
      "An Amazon clone project, meticulously crafted with HTML, CSS, and JavaScript, providing a hands-on experience in web development and dynamic functionality.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: AmazonClone ,
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
  
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "C++",
  "MySql",
  "Firebase",
  "Framer Motion",
] as const;
