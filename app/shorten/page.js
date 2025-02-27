"use client"
import React, { useState } from 'react'
import Link from 'next/link'
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
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'> Generate your shorten URL      </h1>

      <div className='flex flex-col'>
        <input className='p-4 py-2 my-2 focus:outline-purple-600 rounded-md ' 
        type='text' 
        value={url}
        placeholder='Enter Your URL'
         onChange={e=>{seturl(e.target.value)}}/>

        <input className='p-4 py-2 my-2 focus:outline-purple-600 rounded-md'
         type='text' placeholder='Enter Your prefered short ulr text '
         value={shorturl}
         onChange={e=>{setshorturl(e.target.value)}}/>

        <button onClick={generate} className='bg-purple-500 p-3 font-bold py-1 rounded-lg my-3'>Generate</button>
      </div>
      {generated && 
      <code>
        <span>Your Link:</span> 
          <Link target='_blank' href={generated}>{generated}</Link> 
        </code>}

    </div>
  )
}

export default Shorten
