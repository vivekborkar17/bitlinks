// import { Main } from "next/document";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-purple-100 grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-3 px-4 items-center justify-center"> 
          <p className="text-3xl font-bold">Best URL Shortner in the market</p>
          <p className="px-40">We are the most straightforward shortner in the market. Most of the url shortner in the world will ask you give details for login and track your data.We understand your need and hence created this url shortner. </p>
        <div className="flex gap-3">

          <Link href="/shorten"><button className='bg-purple-500 p-3 font-bold py-1 rounded-lg'>Try Now </button></Link>
            <Link href="/github"><button className='bg-purple-500 p-3 font-bold py-1 rounded-lg'>Github</button></Link>
            </div>

        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="image of vector" src={"/vector.png"} fill={true}></Image>


        </div>

      </section>
    </main>
  );
}
