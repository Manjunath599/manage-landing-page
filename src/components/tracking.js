import React from "react";


export default function Tracker() {
    return (
        <section className="p-6 lg:flex lg:justify-around font-body">
            <div className="text-center lg:w-96 md:text-left">
                <h1 className="text-4xl font-bold"> What’s different about Manage?</h1>
                <p className="mt-4 mb-12">Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams.</p>
            </div>
            <div>
                <div>
                    <button className="bg-[#f25f3a] rounded-3xl px-6 py-2 text-white">01</button>
                    <button className="lg:bg-white bg-[#ffefeb]  rounded-3xl px-6 py-2 inline">Track company-wide progress</button>
                    <p className="mt-6 mb-10 md:w-96">See how your day-to-day tasks fit into the wider vision. Go from
                        tracking progress at the milestone level all the way done to the
                        smallest of details. Never lose sight of the bigger picture again.</p>
                </div>
                <div>
                    <button className="bg-[#f25f3a] rounded-3xl px-6 py-2 text-white">02</button>
                    <button className="lg:bg-white bg-[#ffefeb]  rounded-3xl px-8 py-2 inline"> Advanced built-in reports</button>
                    <p className="mt-6 mb-10 md:w-96">Set internal delivery estimates and track progress toward company
                        goals. Our customisable dashboard helps you build out the reports
                        you need to keep key stakeholders informed.</p>
                </div>
                <div>
                    <button className="bg-[#f25f3a] rounded-3xl px-6 py-2 text-white">03</button>
                    <button className="lg:bg-white bg-[#ffefeb]  rounded-3xl px-6 py-2 inline">Everything you need in one place</button>
                    <p className="mt-6 mb-10 md:w-96">Stop jumping from one service to another to communicate, store files,
                        track tasks and share documents. Manage offers an all-in-one team
                        productivity solution.</p>
                </div>
            </div>
        </section>
    )
}