import { useRouter } from "next/router";
import { useEffect } from "react";

function Admin() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://mail.zxcs.nl/");
  });
  return <div>Loading...</div>;
}

export default Admin;
