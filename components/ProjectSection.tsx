import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "React Admin Dashboard",
        description:
            "Admin Dashboard UI using technologies Reactjs, SCSS, Material UI and Recharts to create fully functional dashboard.",
        image: "/admin-panel.png",
        github: "https://github.com/tri-anupam/react-admin-dashboard",
        link: "https://react-admin-dashboard-lemon.vercel.app/",
    },
    {
        name: "Doctor Appointment System",
        description:
            "Doctor Appointment System is a full stack MERN app including Tailwind css and Redux. It is used to appoint doctor in real time.",
        image: "/doc-appoint.png",
        github: "https://github.com/tri-anupam/doctor-appointment-system",
        link: "",
    },
    {
        name: "Nextjs Auth Project",
        description: "Nextjs Authentication app containing login and signup page with API connecting with mongodb atlas.",
        image: "/next-auth.png",
        github: "https://github.com/tri-anupam/nextjs-auth-project",
        link: "https://nextjs-auth-project-silk.vercel.app/",
    },
    {
        name: "Personal Portfolio 3D",
        description:
            "Within this captivating project, the fusion of Three.js, React.js, Framer Motion, and Tailwind CSS forms a symphony of my web development prowess.",
        image: "/portfolio.png",
        github: "https://github.com/tri-anupam/personal-portfolio",
        link: "https://personal-portfolio-mu-lac.vercel.app/",
    },
    {
        name: "Weather Analyzer",
        description:
            "Get real time weather of your city. API integration with Open Weather and CountryStateCity api.",
        image: "/weather.png",
        github: "https://github.com/tri-anupam/Weather-analyser.githu.io",
        link: "https://tri-anupam.github.io/Weather-analyser.githu.io/",
    },
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Link href={project.link}>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link href={project.github} target="_blank">
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            <Link href={project.link} target="_blank">
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default ProjectsSection
