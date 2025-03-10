"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import CopyText from '@/components/CopyText'
const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")

    const [generated, setGenerated] = useState("")
    
    
    const generate =  (params) => {
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    console.log(result)
    alert(result.message)

  })
  .catch((error) => console.error(error));
    }
    
    

  return (
    <div className='mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg my-16 p-6 sm:p-8 rounded-2xl flex flex-col gap-6'>
      <h1 className='font-extrabold text-3xl text-center tracking-wide'>Generate Your Short URL</h1>

      <div className='flex flex-col gap-3'>
        <input 
          className='p-3 sm:p-4 py-2 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-xl shadow-md transition-all duration-300 w-full' 
          type='text' 
          value={url} 
          placeholder='Enter Your URL'
          onChange={e => seturl(e.target.value)}
        />

        <input 
          className='p-3 sm:p-4 py-2 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-xl shadow-md transition-all duration-300 w-full' 
          type='text' 
          placeholder='Enter Your Preferred Short URL Text' 
          value={shorturl} 
          onChange={e => setshorturl(e.target.value)}
        />

        <button 
          onClick={generate} 
          className='bg-purple-800 hover:bg-purple-900 text-white p-3 sm:py-2 rounded-xl shadow-md transition-all duration-300 hover:scale-105 w-full'>
          Generate
        </button>
      </div>

      {generated && (
        <code className='bg-purple-200 text-purple-900 p-3 sm:p-4 rounded-xl shadow-md mt-4 w-full text-center'>
          <span className='font-bold'>Your Link: </span> 
          <CopyText text={generated} />
        </code>
      )}
</div>

  )
}

export default Shorten
