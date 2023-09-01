import React from "react"
import Image from "next/image"

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Nodejs & Expressjs" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "MongoDB" },
    { skill: "MySQL" },
    { skill: "Tailwind CSS" },
    { skill: "Golang" },
    { skill: "Git & Github" },
    { skill: "AWS" },
    { skill: "Docker" },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is Anupam Tripathi and I am a{" "}
                            <span className="font-bold">{"highly ambitious"}</span>,
                            <span className="font-bold">{" self-motivated"}</span>, individual passionate about translating innovative ideas into tangible realities.{/* With a relentless drive for excellence, I thrive on challenges and am dedicated to continuous learning and growth. */}
                        </p>
                        <br />
                        <p>
                            {"I'm"} a versatile full-stack MERN developer with a strong grasp of AWS, Git & GitHub, TypeScript, Golang, and Docker. My expertise spans both frontend and backend development, allowing me to create dynamic web applications. I leverage AWS for robust cloud solutions, utilize Git & GitHub for effective version control, and implement TypeScript for enhanced code quality. <br />Additionally, my proficiency in Golang and Docker enables me to create efficient and scalable backend services. My well-rounded skill set ensures that I can tackle various aspects of the development process, delivering comprehensive and high-quality solutions.
                        </p>
                        <br />
                        <p>
                            I am always seeking new experiences and love to keep myself
                            engaged and learning new things.
                        </p>
                        <br />

                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                        <Image
                            src="/skill.png"
                            alt=""
                            width={325}
                            height={325}
                            className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 mt-5 drop-shadow-2xl"
                            style={{ transform: "scaleX(-1)", filter: "drop-shadow(2px 2px 5px black)" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection