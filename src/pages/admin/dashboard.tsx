import { getProviders, getSession, GetSessionParams, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Header from "../../components/admin/Header";
import Footer from "../../components/Footer";
import HeaderBlack from "../../components/HeaderBlack";

function dashboard() {
  const session = useSession();
  return (
    <>
      <HeaderBlack />
      <Header />
      <div className="-mt-28 flex min-h-screen flex-col items-center justify-center">
        <p className="text-2xl font-bold">
          Welkom, {session.data?.user?.name}
        </p>
        <div className="mt-10 flex gap-2">
          <Link href="/admin/addBlog">
            <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Blog aanmaken
            </button>
          </Link>
          <Link href="/admin/aanvragen">
            <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Bekijk aanvragen
            </button>
          </Link>
        </div>
        <div className="mt-4 flex gap-2">
          <Link href="/admin/blogPumpAI">
            <button className="mr-2 ml-2 mb-2 rounded-lg bg-gradient-to-br from-blue-400 to-purple-400 px-5 py-2.5 text-sm font-medium text-white    ">
              Blog-AI (beta)
            </button>
          </Link>
          <Link href="/">
            <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ruby Landing
            </button>
          </Link>
          <a href="http://app.rubyfinance.nl">
            <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ruby App
            </button>
          </a>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center">
          <h2 className="font-bold">Updates & Fixes</h2>
          <p>-blog AI Beta toegevoegd</p>
          <p>-datums automatish aangemaakt </p>
          <p>-blogs gesorteerd op aflopende datums</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default dashboard;

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const providers = await getProviders();
  const session = await getSession(context);

  if (!session?.user?.id?.includes("cld356sj70000lf086717vww3")) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }
  return {
    props: { providers },
  };
}
