"use client";
import { useState } from "react";
import Image from "next/image";

export default function RandomQuote() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      let json = await response.json();

      // Since the response is an array, we need to get the first item
      setData(json[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setData({ quote: "Error fetching quote", character: "" });
    }
  };

  return (
    <>
      <h1 className="mt-10 mb-10 flex text-5xl font-semibold font-serif text-pink-500 justify-center items-center">
        Funny Quote of the Day
      </h1>
      <button
        className="m-2 bg-pink-500 text-white font-sans hover:text-white hover:bg-pink-600 w-30 h-10 rounded-full font-bold pl-4 pr-4 ml-5 mr-5 mb-5"
        onClick={fetchData}
      >
        Fetch Data 🍪
      </button>

      {data ? (
        <div className=" bg-white p-10 rounded-xl">
          <p>{`"${data.quote}"`}</p>
          <p>
            <em>- {data.character}</em>
          </p>
        </div>
      ) : (
        <p>Click the button to get a quote!</p>
      )}
    </>
  );
}
