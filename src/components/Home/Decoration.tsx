import LightsOn from "@/assets/Lights.jpg"

export default function Decoration() {
  return (
    <section id="decoration" className="grid grid-cols-2 justify-between py-12 px-24 2xl:px-48 2xl:gap-12">
      <div className="w-full h-full pt-12">
        <div className="mb-6">
          <span className="font-fontWorkSans font-medium text-base uppercase tracking-[4px] pb-2 block">DECORATION</span>
          <h2 className="font-fontPlayfairDisplay font-semibold text-5xl !leading-[1.3em]">Stylish Decoration <br /> for an Organized Home</h2>
        </div>
        <div className="mb-6">
          <p className="font-fontWorkSans text-base">Transform your house into a functional and welcoming space with our decoration solutions. Explore a wide range of practical and stylish items to organize every room, blending beauty and efficiency. Everything you need to create a home full of personality and harmony!</p>
          <p className="font-fontWorkSans text-base my-3">An organized space saves time, reduces stress, and boosts productivity by eliminating clutter. It enhances your {'home\'s'} aesthetic appeal, creating a more inviting atmosphere. Additionally, it supports better hygiene, making maintenance easier and more efficient.</p>
          <p className="font-fontWorkSans text-base text-zinc-600 font-normal">Discover all the benefits of an organized home — click Explore More and transform your space today!</p>
        </div>
        <button className="border-2 border-zinc-950 outline-none py-2 px-8 font-fontWorkSans text-base 2xl:text-xl font-semibold rounded hover:bg-zinc-950 hover:text-white transition ease-in-out duration-150">Explore More</button>
      </div>
      <div className="h-full w-full flex justify-end 2xl:justify-start">
        <img src={LightsOn.src} width={"80%"} height={LightsOn.height} alt="" className="rounded" draggable={false} />
      </div>
    </section>
  )
}
