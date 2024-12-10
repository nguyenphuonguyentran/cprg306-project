import Link from "next/link";
import Image from "next/image";

export default function Credit() {
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
        Website Credits
      </p>
      <p className="mb-2 font-semibold font-serif text-2xl text-pink-500">
        A project of the course Web Development 2
      </p>
      <ul className="flex flex-col items-center justify-center mb-2 font-thin font-serif text-pink-400">
        <li className="font-bold">Developed by Nguyen Phuong Uyen Tran</li>
        <li className="font-bold text-sm text-white">
          (with all her tears and enjoyment :D)
        </li>
        <li>School of Advanced Digital Technology</li>
        <li>Southern Alberta Institute of Technology (SAIT)</li>
        <li className="font-bold">December, 2024</li>
      </ul>
      <div className=" flex flex-row justify-center items-center pt-8 pb-8 gap-3 font-semibold font-sans">
        <p className="p-3 bg-white rounded-full text-slate-500"> Visit 📍 </p>
        <button>
          <Link
            href="/final-project"
            className="flex no-underline hover:bg-pink-500 hover:text-white  font-serif font-semibold text-pink-400 bg-white p-3 rounded-3xl"
          >
            Home Page
          </Link>
        </button>
        <button>
          <Link
            href="/final-project/tough-quokie-club"
            className="flex no-underline hover:bg-pink-500 hover:text-white  font-serif font-semibold text-pink-400 bg-white p-3 rounded-3xl"
          >
            Quote Space
          </Link>
        </button>
        <button>
          <Link
            href="/final-project/profile-page"
            className="flex no-underline hover:bg-pink-500 hover:text-white  font-serif font-semibold text-pink-400 bg-white p-3 rounded-3xl"
          >
            Profile Page
          </Link>
        </button>
      </div>
    </main>
  );
}
