import React, { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
import people from "./data";


export default function Profiles() {
  const [profile, setProfile] = useState(people)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = profile.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)

    return () => clearInterval(slider)

  }, [index, profile])

  return (
    <section className="text-center flex flex-col  items-center">
      <h1 className="my-6 font-bold text-3xl">What they’ve said</h1>
      <div className="flex overflow-hidden text-center w-[80vw] h-80 relative">
        {profile.map((item, itemIndex) => {
          const { id, name, img, desc } = item

          let position = 'nextSlide'

          if (itemIndex === index) {
            position = 'activeSlide'
          }

          if (itemIndex === index - 1 || (index === 0 && itemIndex === people.length - 1)) {
            position = 'lastSlide'
          }


          return (
            <div key={id} className={` ${position} component`}>
              <img src={img} className="w-16" alt="avatar" />
              <h2 className="my-4" >{name}</h2>
              <p className="px-10 lg:px-80" >{desc}</p>
            </div>
          )
        })
        }
      </div>
      <div>
        <button className="mx-4" onClick={() => setIndex(index - 1)}><AiOutlineLeft /></button>
        <button onClick={() => setIndex(index + 1)}><AiOutlineRight /></button>
      </div>
      <button className="mt-4 block border bg-[#f25f3a] py-3 px-8 text-white text-sm rounded-3xl">Get started</button>
    </section>
  )
}