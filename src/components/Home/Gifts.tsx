import Gift from "@/assets/Party.jpg";

export default function Gifts() {
  return (
    <section id="gifts" className="grid grid-cols-2 justify-between py-12 px-24 2xl:px-48 2xl:gap-12">
      <div className="h-full w-full flex justify-start ">
        <img src={Gift.src} width="90%" height={Gift.height} alt="" className="rounded object-cover 2xl:w-full" draggable={false} />
      </div>
      <div className="w-full h-full pt-12 2xl:pt-24">
        <div className="mb-6">
          <span className="font-fontWorkSans font-medium text-base uppercase tracking-[4px] pb-2 block">GIFTS</span>
          <h2 className="font-fontPlayfairDisplay font-semibold text-5xl !leading-[1.3em]">Gift with style</h2>
        </div>
        <div className="mb-6">
          <p className="font-fontWorkSans text-base">Delight your loved ones with gifts that bring both charm and functionality into their lives. Our curated collection offers stylish home accents, decorative pieces, and unique treasures designed to leave a lasting impression. Whether it's a special occasion or just a token of appreciation, find the perfect gift that blends elegance and practicality, making every moment unforgettable.</p>
          <p className="font-fontWorkSans text-sm text-zinc-600 my-3">
            Gifting with style is about more than just the present—it's about the experience. Each piece is designed to inspire and elevate, adding a touch of elegance to any space. Explore our range of thoughtful options and turn every gift into a cherished memory.
          </p>
        </div>
        <button className="border-2 border-zinc-950 outline-none py-2 px-8 font-fontWorkSans text-base 2xl:text-xl font-semibold rounded hover:bg-zinc-950 hover:text-white transition ease-in-out duration-150">Explore More</button>
      </div>
    </section>
  )
}
