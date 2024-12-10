"use client";

import { useState } from "react";

export default function NewQuote({ onAddQuote }) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("life");

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    let quote = { id, content, author, category };
    console.log(quote);

    onAddQuote(quote);
  };

  return (
    <form
      className="items-center justify-center flex flex-col mt-5 bg-pink-300 rounded-3xl"
      onSubmit={(event) => handleSubmit(event)}
    >
      <input
        id="content"
        type="text"
        value={content}
        placeholder="Quote Content"
        onChange={(e) => setContent(e.target.value)}
        required
        className="text-pink-400 font-semibold font-sans w-80 h-20 rounded-xl ml-10 mt-10 mr-10"
      />
      <input
        id="author"
        type="text"
        value={author}
        placeholder="Quote Author"
        onChange={(e) => setAuthor(e.target.value)}
        required
        className="text-pink-400 font-sans font-semibold w-60 h-10 rounded-xl ml-10 mt-10 mr-10"
      />

      <div className="flex flex-row">
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className=" text-pink-400 font-sans font-bold text-lg w-50 h-14 rounded-xl mr-5 mt-8 mb-6"
        >
          <option value="life">Life</option>
          <option value="love">Love</option>
          <option value="inspirational">Inspirational</option>
          <option value="study">Study</option>
          <option value="humour">Humour</option>
          <option value="philosophy">Philosophy</option>
          <option value="other">Other</option>
        </select>
      </div>
      <input
        type="submit"
        value="Add Quote"
        className="m-2 bg-pink-500 text-white font-sans hover:text-white hover:bg-pink-600 w-30 h-10 rounded-full font-bold pl-4 pr-4 ml-5 mr-5 mb-5"
      />
    </form>
  );
}
