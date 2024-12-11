"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="bg-gradient-to-br from-white to-pink-300 w-screen h-screen">
      {user && (
        <div className="pt-10 flex flex-col items-center justify-center">
          <Image
            src="/toughlogo.png"
            alt="Logo of website Tough Quokie Club"
            width={300}
            height={300}
          />
          <p className="flex p-3 font-semibold font-serif text-4xl text-pink-500 justify-center items-center w-screen ">
            Welcome, {user.displayName}!
          </p>

          <p className="pt-10 font-semibold font-serif text-2xl text-pink-400">
            Content of Navigation
          </p>

          <ul className="mt-2 p-10 bg-white rounded-3xl items-center justify-center">
            <li className="p-3 hover:bg-pink-300 hover:text-white  font-serif font-semibold text-pink-400 bg-white rounded-full">
              <Link
                className="flex items-center justify-center"
                href="/final-project/tough-quokie-club"
              >
                Quote Space
              </Link>
            </li>
            <li className="p-3 hover:bg-pink-300 hover:text-white  font-serif font-semibold text-pink-400 bg-white rounded-full">
              <Link
                className="flex items-center justify-center"
                href="/final-project/profile-page"
              >
                Profile Page
              </Link>
            </li>
            <li className="p-3 hover:bg-pink-300 hover:text-white  font-serif font-semibold text-pink-400 bg-white rounded-full">
              <Link
                className="flex items-center justify-center"
                href="/final-project/website-credit-page"
              >
                Website Credits
              </Link>
            </li>
          </ul>
        </div>
      )}

      {user ? (
        <div className="flex pt-5 items-center justify-center no-underline hover:text-pink-400 hover:underline text-slate-500 font-sans font-semibold">
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <main className="flex flex-col gap-0 justify-center items-center bg-gradient-to-br from-white to-pink-300 w-screen h-screen">
          <h1 className="flex p-3 font-semibold font-serif text-4xl text-pink-500 justify-center items-center w-screen ">
            But first, let's log in!
          </h1>
          <div className="flex no-underline hover:text-pink-400 hover:underline text-slate-500 font-sans font-semibold">
            <button onClick={login}>Login with GitHub</button>
          </div>
        </main>
      )}
    </main>
  );
}
