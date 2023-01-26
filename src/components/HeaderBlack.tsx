import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
function Header({}: any) {
  const router = useRouter();
  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push(`${router.pathname}`, `${router.pathname}`, { locale });
  };
  const [flag, setFlag] = useState<any>();

  useEffect(() => {
    if (router.locale == "en") {
      setFlag(
        <div>
          <Image
            loading="eager"
            className=""
            src={"/england.png"}
            alt="whatsapp"
            height={20}
            width={20}
          />
        </div>
      );
    } else {
      setFlag(
        <div>
          <Image
            loading="eager"
            className=""
            src={"/netherlands.png"}
            alt="whatsapp"
            height={20}
            width={20}
          />
        </div>
      );
    }
  }, [router.locale]);
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
        <div className="flex items-center">
          <div>{flag}</div>
          <div>
            <select
              className="bg-transparent"
              onChange={changeLanguage}
              defaultValue={router.locale}
            >
              <option className="bg-transparent text-black" value="en">
                EN
              </option>
              <option className="bg-transparent text-black" value="nl-NL">
                NL
              </option>
            </select>
          </div>
        </div>
        {/* <div className="hidden lg:flex">
              <button onClick={scrolltoId} className="rounded-full border border-black bg-transparent p-2 font-bold transition hover:bg-black hover:text-white">
                Plan gesprek
              </button>
            </div> */}
      </div>
    </header>
  );
}

export default Header;
