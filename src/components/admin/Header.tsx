import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex h-4 justify-between text-black">
      <div></div>
      <div className="flex items-center gap-4">
        <Link href="/admin/dashboard">
          <button className=" mb-2 rounded-lg  px-5 py-2.5 text-sm  font-bold text-blue-800  focus:outline-none focus:ring-4 focus:ring-blue-300 ">
            Dashboard
          </button>
        </Link>
        <Link href="/admin/aanvragen">
          <button className=" mb-2 rounded-lg  px-5 py-2.5 text-sm  font-bold text-blue-800  focus:outline-none focus:ring-4 focus:ring-blue-300 ">
            Aanvragen
          </button>
        </Link>
        <div
          onClick={() => signOut()}
          className=" duration-200 hover:text-[#80051]"
        >
          <button className=" mb-2 rounded-lg  px-5 py-2.5 text-sm  font-bold text-blue-800  focus:outline-none focus:ring-4 focus:ring-blue-300 ">
            Log uit-
          </button>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
