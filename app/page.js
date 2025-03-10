// import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-purple-500 to-purple-700 text-white flex flex-col items-center justify-center h-screen w-full rounded-2xl shadow-xl overflow-hidden">  
    <div className="flex flex-col gap-4 px-6 md:px-12 items-center justify-center text-center animate-fade-in">  
      <p className="text-5xl font-extrabold tracking-wide animate-bounce transition-all duration-500">Best URL Shortener in the Market</p>  
      <p className="max-w-md text-lg leading-relaxed animate-fade-in delay-200">We are the most straightforward shortener in the market. Unlike others that require logins and track your data, we focus on simplicity and privacy for your convenience.</p>  

      <div className="flex gap-4 mt-4">  
        <Link href="/shorten"><button className='bg-purple-900 hover:bg-purple-950 text-white px-6 py-3 font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-110 animate-pulse'>Try Now</button></Link>  
        <Link href="https://github.com/vivekborkar17"><button className='bg-purple-900 hover:bg-purple-950 text-white px-6 py-3 font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-110 animate-pulse'>GitHub</button></Link>  
      </div>  
    </div>  

    <div className="flex justify-center items-center relative animate-fade-in delay-300">  
      <Image className="mix-blend-lighten drop-shadow-2xl rounded-lg scale-105" alt="Image of vector" src={"/vector.png"} fill={true}></Image>  
    </div>  
</section>
    </main>
  );
}
