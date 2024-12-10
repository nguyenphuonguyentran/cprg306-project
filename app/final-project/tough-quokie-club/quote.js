export default function Quote({ content, author, category }) {
  return (
    <section>
      <ul className="mt-5 items-center flex flex-col bg-white rounded-lg font-serif">
        <li className="font-bold text-lg text-pink-500">"{content}"</li>
        <li className="text-pink-400 italic">
          {author} - [{category}]
        </li>
      </ul>
    </section>
  );
}
