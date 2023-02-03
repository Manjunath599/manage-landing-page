import React from "react";

export default function Sidebar() {
    return (
        <div className="bg-[#fafafa] h-64 w-[75vw] ml-16 font-body">
            <ul className=" cursor-pointer p-6">
                <li className="my-4 mx-20">Pricing</li>
                <li className="my-4 mx-20">Product</li>
                <li className="my-4 mx-20">Community</li>
                <li className="my-4 mx-20">About Us</li>
                <li className="my-4 mx-20">Careers</li>
            </ul>
        </div>
    )
}