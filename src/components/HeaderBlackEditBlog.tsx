import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
function Header({}: any) {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between p-6 px-4 lg:p-3 lg:py-5 lg:px-10">
      <Link href="/">
        <div className="w-20 lg:w-40">
          <Image
            loading="eager"
            width={150}
            height={150}
            src="/Ruby_logo_black.png"
            alt=""
          />
        </div>
      </Link>
      <div className="flex items-center sm:gap-0 lg:gap-20 lg:p-4">
        <div className="mr-6">
          {router.locale == "nl-NL" ? (
            <h3 className="sm:text-1x1 font-bold lg:text-2xl">085 - 4835878</h3>
          ) : (
            <h3 className="sm:text-1x1 font-bold lg:text-2xl">085 - 4835878</h3>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
