import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import IndexNL from "../components/IndexNL";
import IndexEN from "../components/IndexEN";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        {router.locale == "nl-NL" ? (
          <title>Ruby Finance - boekhouden en administatie</title>
        ) : (
          <title>Ruby Finance - accountancy for entrepreneurs</title>
        )}
        <meta
          name="description"
          content="Ruby Finance boekhouden en administatie, online boekhouden voor ZZp'ers en eenmanszaken voor een lage prijs en kwaliteit service."
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {router.locale == "nl-NL" ? (
        /* NL */
        <IndexNL />
      ) : (
        /* EN */
        <IndexEN />
      )}
    </>
  );
};

export default Home;
