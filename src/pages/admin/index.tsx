import React, { useEffect } from "react";
import { signIn, getSession, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { getProviders } from "next-auth/react";
import { api } from "../../utils/api";
import Head from "next/head";
import HeaderBlack from "../../components/HeaderBlack";

function Login({ providers }: any) {
  const session = useSession();

  if (session.data?.user?.id) {
    if (!session.data?.user?.id?.includes("cld203pga000ov3w4lkvakz7i")) {
      signOut();
    } else {
    }
  } else {
  }

  console.log(providers);
  return (
    <div>
      <Head>
        <title>Ruby Finance | Login</title>
        <meta name="description" content="Ruby Finance | Login"></meta>
      </Head>
      <HeaderBlack />
      <div className="-mt-20 flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col items-center">
            <Image
              height={80}
              width={100}
              className="cursor-pointer sm:h-10"
              src="/Ruby_logo_black.png"
              alt="Veta"
            ></Image>
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight">
              Login met je account
            </h2>
          </div>
          <div className="flex justify-center">
            <div>
              <button
                onClick={() => signIn(providers.google.id)}
                type="button"
                className="dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 inline-flex items-center rounded-lg bg-[#1a6fe5] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1969d9] focus:outline-none focus:ring-4 focus:ring-[#1da1f2]/50"
              >
                <svg
                  className="mr-2 -ml-1 h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                  ></path>
                </svg>
                Login met Google
              </button>
            </div>
          </div>
        </div>
        {/* <form className="space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email adress
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Wachtwoord
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm ">
                Onthoud mij
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="ml-1 font-medium text-[#FF007A] ">
                Wachtwoord vergeten?
              </a>
            </div>
          </div>

          <div className="">
            <button className="buttonBase w-full">Inloggen</button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);

  if (session?.user?.id?.includes("cld203pga000ov3w4lkvakz7i")) {
    return {
      redirect: {
        destination: "/admin/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: { providers },
  };
}
export default Login;
