"use client";
import React, { useState } from "react";
import CopyText from "@/components/CopyText";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async () => {
    if (!url || !shorturl) {
      alert("Both URL and Short URL fields are required.");
      return;
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate short URL. Please try again.");
      }

      const result = await response.json();
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
      seturl("");
      setshorturl("");
      alert(result.message);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="mx-auto max-w-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md my-16 p-6 rounded-lg">
      <h1 className="font-semibold text-2xl text-center mb-4">
        Shorten Your URL
      </h1>
      <div className="flex flex-col gap-4">
        <input
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          type="text"
          value={url}
          placeholder="Enter your URL"
          onChange={(e) => seturl(e.target.value)}
        />
        <input
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          type="text"
          value={shorturl}
          placeholder="Enter your preferred short URL"
          onChange={(e) => setshorturl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-blue-500 dark:bg-blue-600 text-white p-3 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          Generate
        </button>
      </div>
      {generated && (
        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
          <span className="font-medium">Your Link: </span>
          <CopyText text={generated} />
        </div>
      )}
    </div>
  );
};

export default Shorten;
