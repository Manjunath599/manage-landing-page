import React from "react";
import Navbar from "./navbar";
import bgPattern from "../images/bg-tablet-pattern.svg"
import intro from "../images/illustration-intro.svg"


export default function Header() {
    return (
        <section className="bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${bgPattern})`
            }}
        >
            <Navbar />
            <div className="p-6 text-center lg:flex lg:flex-row-reverse lg:justify-evenly font-body">
                <div >
                    <img src={intro} />
                </div>
                <div className="lg:w-80 lg:mt-32 lg:mr-44 md:text-left ">
                    <h1 className="text-4xl font-bold"> Bring everyone together to build better products.</h1>
                    <p className="my-5">Manage makes it simple for software teams to plan day-to-day
                        tasks while keeping the larger team goals in view.</p>
                    <button className="lg:mt-12 lg:mr-10 border bg-[#f25f3a] py-3 px-8 text-white text-sm rounded-3xl">Get started</button>
                </div>
            </div>
        </section>
    )
}