import React from 'react'

export default function Interiors() {
  return (
    <section id="interiors" className="interiorBackground lg:h-[auto] 2xl:min-h-[480px] py-16 px-24 2xl:px-48">
      <div className="mb-6">
        <span className="font-fontWorkSans font-medium text-sm uppercase tracking-[4px] pb-2 block">Interiors</span>
        <h2 className="font-fontPlayfairDisplay font-semibold text-5xl 2xl:text-6xl !leading-[1.3em]">Everything for organizing <br /> your home</h2>
      </div>
      <div className="mb-6 ">
        <p className="font-fontWorkSans text-sm 2xl:text-base w-[720px] leading-[1.5em]">Welcome to your ultimate destination for stylish and functional home decoration! Here, yu'll find everything you need to transform your house into an organized and inviting space. Whether you're looking to declutter, enhance your home's aesthetics, or simply add a touch of personality to your rooms, we've got you covered. Let us help you create the perfect balance between beauty and practicality, making your everyday life more comfortable and enjoyable.</p>
      </div>

      <button className="border-2 border-zinc-950 outline-none py-2 px-8 font-fontWorkSans text-base 2xl:text-xl font-semibold rounded hover:bg-zinc-950 hover:text-white transition ease-in-out duration-150">Explore More</button>
    </section>
  )
}
