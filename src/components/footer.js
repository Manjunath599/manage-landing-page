import React from "react";
import insta from "../images/icon-instagram.svg"
import fb from "../images/icon-facebook.svg"
import YT from "../images/icon-youtube.svg"
import twitter from "../images/icon-twitter.svg"
import logo from "../images/logo.svg"
import pin from "../images/icon-pinterest.svg"


export default function Footer() {
    return (
        <section className="font-body">
            <div className="bg-[#f25f3a] w-[100vw] lg:h-[200px] h-[250px] mt-20 flex flex-col  items-center lg:flex-row lg:justify-between lg:p-6">
                <h1 className="text-3xl font-bold text-white px-24 py-10 lg:p-0">
                    Simplify how your team works today.</h1>
                <button className="border bg-[white] py-3 px-8 text-[#f25f3a] text-sm rounded-3xl">Get started</button>
            </div>

            <footer className="bg-[#1d1e25] w-[100vw] h-[400px] overflow-hidden flex flex-col-reverse text-white items-center lg:flex-row lg:justify-evenly
           lg:h-[250px] ">
                <div className="lg:ml-44 lg:py-20 flex flex-col-reverse lg:flex-col">
                    <img className="w-44" src={logo} alt="name" />
                    <div className="flex lg:mt-20 my-10">
                        <img src={fb} alt="fb" />
                        <img className="mx-6" src={YT} alt="Yt" />
                        <img src={twitter} alt="twitter" />
                        <img className="mx-6" src={pin} alt="pin" />
                        <img src={insta} alt="insta" />
                    </div>
                </div>
                <div className="flex mt-6">
                    <div className="mx-20">
                        <p>Home</p>
                        <p>Pricing</p>
                        <p>Products</p>
                        <p>About</p>
                        <p>Careers</p>
                    </div>
                    <div>
                        <p>Careers</p>
                        <p>Community</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <input placeholder="Updates in your inbox.." className="w-60 h-10 rounded-3xl" />
                    <button className="ml-4  bg-[#f25f3a] py-2 px-5 text-white text-sm rounded-2xl">G0</button>
                </div>
            </footer>
        </section>
    )
}