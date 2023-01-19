import Image from "next/image";
import Link from "next/link";
import React from "react";

function Whatsapp() {
  return (
    <div>
      <Link href="https://api.whatsapp.com/send?phone=31687954360">
        <Image
          className="cursor-pointer transition ease-in-out hover:scale-105"
          src={"/whatsapp.png"}
          alt="whatsapp"
          height={50}
          width={50}
        />
      </Link>
    </div>
  );
}

export default Whatsapp;
