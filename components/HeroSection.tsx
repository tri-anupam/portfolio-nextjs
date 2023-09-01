"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 mt-20 md:py-10 pt-16 sm:py-32 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/user1.png"
                        alt="user"
                        width={325}
                        height={325}
                        className="rounded-full shadow-2xl"
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">{"Hi, I'm Anupam!"}</h1>
                    <p className="text-lg mt-8 mb-8  md:text-2xl">
                        {"I'm a "}
                        <span className="font-semibold text-teal-600">
                            MERN Developer{" "}
                        </span>
                        with expertise in building dynamic web applications. From efficient backend development with Node.js and Express.js to crafting engaging user interfaces using React, I ensure seamless experiences. I integrate MongoDB for reliable data management and always prioritize delivering high-quality, scalable full-stack solutions.
                    </p>
                    <div className="flex md:justify-normal  item-center justify-center gap-4">
                        <Link
                            to="projects"
                            className="text-neutral-100 font-semibold px-6 py-3 h-fit  bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >
                            Projects
                        </Link>

                        <a href="https://drive.google.com/file/d/1P_InZLkAdHd3bkVfUFMBBcHZrCEWSGAE/view" target="_blank" className="text-neutral-100 font-semibold px-6 py-3 bg-orange-600 rounded shadow hover:bg-orange-700 cursor-pointer">Resume</a>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-row items-center text-center justify-center ">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div> */}
        </section>
    )
}

export default HeroSection
