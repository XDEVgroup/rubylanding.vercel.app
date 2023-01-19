import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

function Admin() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://mail.zxcs.nl/");
  });
  return <div>Loading...</div>;
}

export default Admin;
