'use client'
import Header from "@/components/Header";
import Decoration from "@/components/Home/Decoration";
import Footer from "@/components/Home/Footer";
import Gifts from "@/components/Home/Gifts";
import Interiors from "@/components/Home/Interiors"

export default function Home() {
  return (
    <>
      <Header />
      <main className="2xl:min-h-[380px] lg:h-[310px] flex flex-col justify-center">
        <h2 className="font-fontWorkSans text-8xl text-black font-light tracking-widest text-center uppercase">Decoration</h2>
        <a href="https://github.com/RuanDevJs" className="font-fontWorkSans text-sm text-zinc-500 text-center block py-5 hover:text-zinc-900 transition ease-in-out duration-150">
          Developed by RuanDevJs - Follow me at Github
        </a>
      </main>
      <Interiors />
      <Decoration />
      <Gifts />
      <Footer />
    </>
  );
}
