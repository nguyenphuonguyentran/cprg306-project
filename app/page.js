import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col gap-0 justify-center items-center bg-gradient-to-br from-white to-pink-300 w-screen h-screen">
      <div className="rounded-lg">
        <Image
          src="/toughlogo.png"
          alt="Logo of website Tough Quokie Club"
          width={400}
          height={400}
        />
      </div>
      <p className="flex p-3 font-semibold font-serif text-4xl text-pink-600 justify-center items-center w-screen ">
        {" "}
        "Daily quotes to be a tough cookie"{" "}
      </p>
      <p className="mb-10 font-semibold font-serif text-2xl text-pink-500">
        Are you ready to be a "tough quokie"?
      </p>
      <button>
        <Link
          href="/final-project"
          className="flex no-underline hover:bg-pink-500 hover:text-white  font-serif font-semibold text-pink-400 bg-white p-3 rounded-3xl"
        >
          I'm in! 🍪
        </Link>
      </button>
    </main>
  );
}
