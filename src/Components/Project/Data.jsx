import Makeup from "../../assets/makeup.png"
import Todo from "../../assets/Todo.png"
import RealEstate from "../../assets/real-estate.png"
import Invoice from "../../assets/invoice.png"
import Farm from "../../assets/farm.png"
import Stream from "../../assets/stream.png"





const projects = [
    {
        id: 1,
        Image: Makeup,
        name: "Make-up Website",
        summary: "A responsive makeup artist website for showcasing beauty services, portfolio work and allowing clients to request consultations.",
        problem: "Makeup artists often rely on social media to showcase their work and manage client inquiries, making it difficult to present their services professionally in one place.",
        solution: "Created a responsive website that showcases makeup services and previous work while providing clients with an easy way to submit consultation requests.",
        technologies: [
            { name: "React" }, { name: "Tailwind CSS" },{ name: "JavaScript" },
            { name: "express.js" }
        ],
        link: "https://ikemi.vercel.app/"
    },
    {
        id: 2,
        Image: Todo,
        name: "Todo Card App",
        summary: "A responsive task management app for creating, organizing and tracking daily tasks with persistent local storage.",
        problem: "Users need a simple way to manage daily tasks without losing their tasks whenever they refresh or close the app.",
        solution: "Built a responsive React Todo app with CRUD functionality and local storage persistence, allowing users to create, edit, complete and delete tasks while keeping their data saved.",
        technologies: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }],
        link: "https://todo-list-card.vercel.app/"

    },
    {
        id: 3,
        Image: RealEstate,
        name: "Real Estate Website",
        summary: "A responsive real estate website for browsing properties, viewing property details and exploring available listings.",
        problem: "Finding suitable properties can be difficult when property information is scattered or presented through complicated interfaces.",
        solution: "Built a clean, responsive real estate platform that allows users to browse available properties, explore detailed listings and easily find relevant property information.",
        technologies: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }],
        link: "https://slime-rent.vercel.app/"
    },
    {
        id: 4,
        Image: Invoice,
        name: "Invoice Card App",
        summary: "A responsive invoice management app for creating, editing, tracking and managing invoices efficiently.",
        problem: "Manually creating and tracking invoices can be time-consuming and makes it difficult to keep invoice records organized.",
        solution: "Built a responsive invoice management application that allows users to create, edit, delete and track invoices while organizing them by payment status.",
        technologies: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
        link: "https://invoice-card.vercel.app/"
    },
    {
        id: 5, name: "Farm Website",
        Image: Farm,
        summary: "A responsive farm website dashboard for tracking livestock, crops, equipments and analyzing farm data.",
        problem: "Farm management software can be complex and not user-friendly for farmers.",
        solution: "Created a simple, responsive dashboard using Next.js to help farmers easily track and manage their farm operations.",
        technologies: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }],
        link: "https://amusa-farm.vercel.app/",
    },
    {
        id: 6, name: "Streaming Website",
        Image: Stream,
        summary: "A React-based platform where users can watch movies across multiple genres, fully responsive.",
        problem: "Many streaming apps have cluttered interfaces and poor responsiveness.",
        solution: "Developed a React app with a clean interface, responsive design, and genre-based movie browsing.",
        technologies: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
        link: "https://slime-naija.vercel.app/",

    },
];

export {projects}