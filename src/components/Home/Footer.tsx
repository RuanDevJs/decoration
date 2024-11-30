import Interios from "@/assets/Interior.jpg"
import { FacebookLogo, GithubLogo, InstagramLogo, TwitterLogo } from "phosphor-react"

export default function Footer() {
  return (
    <footer className='pt-28 pb-8 px-24 2xl:px-48 bg-black mt-16'>
      <div className="relative flex flex-col justify-center items-center gap-10">
        <img
          src={Interios.src}
          width={Interios.width}
          height={Interios.height}
          alt=""
          className="object-cover"
          draggable={false} />
        <h2 className="font-fontWorkSans text-8xl font-normal !tracking-[40px] text-white absolute -top-12 left-0 right-0 text-center p-1.5">INTERIOR</h2>
        <button className="border-2 border-white outline-none py-2 px-8 font-fontWorkSans text-lg 2xl:text-xl font-semibold hover:bg-white hover:text-black transition ease-in-out duration-150 text-white">CONTACT</button>
      </div>
      <div className="border-t border-white mt-16 flex items-center justify-between pt-10">
        <h2 className="text-zinc-300 text-lg font-fontWorkSans">Decoration: Organize Your Home with Style</h2>
        <div className="flex items-center justify-center gap-5">
          <a href="github.com/RuanDevJs" className="cursor-pointer border rounded-full border-transparent p-1.5 hover:border-white transition ease-in-out duration-150">
            <GithubLogo size={22} color="#fff" weight="regular" />
          </a>
          <div className="cursor-pointer border rounded-full border-transparent p-1.5 hover:border-white transition ease-in-out duration-150">
            <InstagramLogo size={22} color="#fff" weight="regular" />
          </div>
          <div className="cursor-pointer border rounded-full border-transparent p-1.5 hover:border-white transition ease-in-out duration-150">
            <TwitterLogo size={22} color="#fff" weight="regular" />
          </div>
        </div>
      </div>
    </footer>
  )
}
