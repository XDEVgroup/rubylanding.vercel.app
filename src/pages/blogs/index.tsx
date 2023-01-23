import { useRouter } from "next/router";
import Header from "../../components/HeaderBlack";
import Image from "next/image";
import Footer from "../../components/Footer";
import { api } from "../../utils/api";
import Head from "next/head";
import Whatsapp from "../../components/Whatsapp";
import BlogAllIndex from "../../components/BlogAllIndex";

function BlogId() {
  const router = useRouter();
  //focus deze query voor serverfetch

  const { isLoading: isLoadingItemsALL } = api.blog.getBlogALL.useQuery({
    routerLang: router.locale,
  });

  return (
    <>
      <Head>
        <title>Ruby Finance - Blogs</title>
        <meta
          name="description"
          content={`Ruby Finance, Blogs over de laatste trends voor boekhouding en belastingzaken`}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
      </Head>
      <div className="h-full min-h-screen">
        <Header />
        {isLoadingItemsALL ? (
          <div className="-mt-36 flex min-h-screen items-center justify-center">
            <Image
              placeholder="blur"
              blurDataURL="/rubygif.gif"
              loading="eager"
              src="/rubygif.gif"
              alt=""
              className="h-10 animate-pulse"
              height={50}
              width={100}
            />
          </div>
        ) : (
          <div>
            <BlogAllIndex />
          </div>
        )}
        <div className="fixed bottom-6 right-6">
          <Whatsapp />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlogId;
