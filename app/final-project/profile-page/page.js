"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <main className="flex items-center justify-center bg-gradient-to-br from-white to-pink-300 w-screen h-screen">
        <p className="flex p-3 font-semibold font-serif text-4xl text-pink-500 justify-center items-center w-screen">
          Please login to your GitHub account
        </p>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-0 items-center justify-center bg-gradient-to-br from-white to-pink-300 w-screen h-screen">
      <Image
        src="/toughlogo.png"
        alt="Logo of website Tough Quokie Club"
        width={250}
        height={250}
      />
      <h1 className="flex font-semibold font-serif text-4xl text-pink-500 justify-center items-center p-10">
        User Profile
      </h1>
      <div className="flex flex-row gap-3 justify-center items-center font-sans font-semibold text-white bg-white rounded-3xl p-10 ">
        <img
          src={user.photoURL}
          alt="User Photo"
          className="rounded-full shadow-cyan-900 w-20 h-20"
        />
        <ul className="flex flex-col items-center font-semibold text-pink-400">
          <li>Name: {user.displayName}</li>
          <li>Email: {user.email}</li>
        </ul>
      </div>
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
            href="/final-project/website-credit-page"
            className="flex no-underline hover:bg-pink-500 hover:text-white  font-serif font-semibold text-pink-400 bg-white p-3 rounded-3xl"
          >
            Website Credits
          </Link>
        </button>
      </div>
    </main>
  );
}
