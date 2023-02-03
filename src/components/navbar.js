import React, { useState } from "react";
import Sidebar from "./sidebar";
import logo from "../images/logo.svg"
import close from "../images/icon-close.svg"
import hamburger from "../images/icon-hamburger.svg"


export default function Navbar() {
    const [openSidebar, setOpenSidebar] = useState(false)

    return (
        <>
            <nav className="flex justify-between p-6 lg:justify-between lg:px-20 font-body">
                <img src={logo} />
                <ul className="hidden lg:flex cursor-pointer">
                    <li className="mx-4" >Pricing</li>
                    <li className="mx-4" >Product</li>
                    <li className="mx-4" >Community</li>
                    <li className="mx-4" >About Us</li>
                    <li className="mx-4" >Careers</li>
                </ul>
                <img className="lg:hidden cursor-pointer" src={openSidebar ? close : hamburger} onClick={() => setOpenSidebar(!openSidebar)} />
                <button className="hidden lg:inline border bg-[#f25f3a] py-3 px-8 text-white text-sm rounded-3xl">Get started</button>
            </nav>
            {openSidebar && <Sidebar />}
        </>
    )
}