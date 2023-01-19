import { getProviders, getSession, signOut, useSession } from "next-auth/react";
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
          Welkom Admin {session.data?.user?.name}
        </p>
        <div className="mt-10 flex gap-2">
          <Link href="/admin/addBlogNL">
            <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Maak blog NL
            </button>
          </Link>
          <Link href="/admin/addBlogEN">
            <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Maak blog EN
            </button>
          </Link>
          <Link href="/admin/aanvragen">
            <button className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Bekijk aanvragen
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default dashboard;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);
  if (session) {
    if (!session?.user?.id?.includes("cld203pga000ov3w4lkvakz7i")) {
      signOut();
      return {
        redirect: {
          destination: "/admin/",
          permanent: false,
        },
      };
    }
  } else {
    signOut();
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
