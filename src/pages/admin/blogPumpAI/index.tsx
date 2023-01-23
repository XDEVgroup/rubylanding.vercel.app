import { router } from "@trpc/server";
import { getProviders, getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Header from "../../../components/admin/Header";
import Footer from "../../../components/Footer";
import { api } from "../../../utils/api";
import Image from "next/image";
import HeaderBlack from "../../../components/HeaderBlack";

function Index(this: any) {
  const [keyword, setKeyword] = useState("Vul een keyword in");
  const [title, setTitle] = useState<any>();
  const [author, setAuthor] = useState("Jorn Ringeling");
  const [text, setText] = useState("");
  const [image, setImage] = useState("/manruby.png");
  const [isToggled, setIsToggled] = useState(false);
  const router = useRouter();
  const [flag, setFlag] = useState<any>();

  const {
    mutateAsync: mutateALL,
    data: dataNL,
    isLoading: isLoadingItemsNL,
  } = api.blog.AddBlogALL.useMutation();

  const {
    mutateAsync: mutateAiTitle,
    data: dataAI,
    isLoading: isLoadingItemsAI,
  } = api.AI.addBlogAI.useMutation();

  const {
    mutateAsync: mutateAIText,
    data: dataAIText,
    isLoading: isLoadingItemsAIText,
  } = api.AI.addBlogAIText.useMutation();

  const { data: getdataALL, isLoading: isLoadinggetItemsNL } =
    api.blog.getBlogALL.useQuery({ routerLang: router.locale });

  const generateKeyword = () => {
    if (keyword != "Vul een keyword in") {
      mutateAiTitle({ topic: keyword });
    }
    generateImage();
  };
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

  const generateText = () => {
    mutateAIText({ topic: dataAI });
  };

  useEffect(() => {
    setText(dataAIText);
    setTitle(dataAI);
  }, [dataAIText, dataAI]);

  const generateImage = () => {
    let textArray = [];
    for (let i = 1; i < 9; i++) {
      textArray.push(`/banner/banner_${i}.png`);
    }

    var randomNumber = Math.floor(Math.random() * textArray.length);
    setImage(textArray[randomNumber]);
  };

  const addBlogNL = () => {
    if (
      title != "Vul een keyword in" &&
      text != "" &&
      image != "/manruby.png"
    ) {
      mutateALL({
        routerLang: router.locale,
        title: title,
        author: author,
        text: text,
        image: image,
      });
      router.push("/admin/dashboard");
    } else {
      alert("vul alle velden in");
    }
  };

  const deleteBlog = (blogId: any) => {
    router.push("/admin/dashboard");
  };
  return (
    <>
      {" "}
      <HeaderBlack />
      <Header />
      <div className=" grid grid-cols-1 lg:flex">
        <div className="min-h-screen  w-full justify-center p-2 lg:w-4/6 lg:p-4">
          <div>
            <div className="m-auto mt-6 w-full cursor-pointer lg:w-8/12">
              <div className="mb-2 flex items-center">{flag}</div>
              <div className="">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {author == "Mark Teekens" ? (
                      <Image
                        loading="eager"
                        height={600}
                        width={600}
                        src="/mark.jpg"
                        alt="mark"
                        className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                      />
                    ) : (
                      <Image
                        loading="eager"
                        height={600}
                        width={600}
                        src="/jorn.jpeg"
                        alt="jorn"
                        className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                      />
                    )}

                    <div className="flex flex-col">
                      <p className="ml-2 text-sm font-medium lg:text-base">
                        <select
                          onChange={(e) => setAuthor(e.target.value)}
                          className="ml-2 text-sm font-medium lg:text-base"
                        >
                          <option value={"Jorn Ringeling "}>
                            Jorn Ringeling
                          </option>
                          <option value={"Mark Teekens"}>Mark Teekens</option>
                        </select>
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <Link
                      href="https://www.facebook.com/profile.php?id=100089124375659"
                      className="text-gray-400 hover:text-gray-900 "
                    >
                      <BsFacebook className="h-4 w-4 lg:h-6 lg:w-6" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/rubyfinance/"
                      className="text-gray-400 hover:text-gray-900 "
                    >
                      <BsLinkedin className="h-4 w-4 lg:h-6 lg:w-6" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/rubyfinance.nl/"
                      className="text-gray-400 hover:text-gray-900 "
                    >
                      <BsInstagram className="h-4 w-4 lg:h-6 lg:w-6" />
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex flex-col  text-[#2C234D]">
                  <div className="flex flex-col">
                    <label className="font-bold">Keyword(s)</label>
                    <input
                      className="rounded-md border border-gray-400 p-1"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <div className="flex gap-2">
                      {!isLoadingItemsAI ? (
                        <div>
                          <button
                            className="mr-2 mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={generateKeyword}
                          >
                            Genereer een Titel
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button className="mr-2 mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Loading..{" "}
                          </button>
                        </div>
                      )}
                      <div>
                        <button
                          className="mr-2 mb-2 mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={generateImage}
                        >
                          Randomnize Image{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  {dataAI && (
                    <div className="flex flex-col">
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="mt-2 w-full p-1 text-2xl font-bold text-[#2C234D] hover:border hover:border-blue-400 lg:text-4xl"
                      />
                    </div>
                  )}
                </div>
              </div>
              {!isToggled && (
                <div className=" max-w-4xl">
                  <div className="flex flex-col">
                    <div className=" flex h-52">
                      <Image
                        loading="eager"
                        height={600}
                        width={600}
                        onClick={() => setIsToggled(true)}
                        src={image}
                        alt={`${image && "blog_banner"}`}
                        className="mt-4 w-full object-cover hover:border hover:border-blue-400 "
                      />
                    </div>

                    <div>
                      {!isLoadingItemsAIText ? (
                        <button
                          className="mr-2 mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          onClick={generateText}
                        >
                          Genereer naar Text{" "}
                        </button>
                      ) : (
                        <button className="mr-2 mt-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Text genereren..{" "}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {isToggled && (
                <div className="mt-4 flex max-w-4xl">
                  <input
                    className=" font-bold text-black hover:border hover:border-blue-400"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                  <button onClick={() => setIsToggled(false)}>Klaar</button>
                </div>
              )}

              <div className=" mt-10 flex flex-col text-xl text-gray-700 ">
                <div className="flex">
                  Markdown Guide
                  <a href="https://www.markdownguide.org/cheat-sheet/#basic-syntax">
                    <button className="ml-1 underline">Klik Hier</button>
                  </a>
                </div>
                {dataAIText && (
                  <textarea
                    onChange={(e) => setText(e.target.value)}
                    id="textarea1"
                    className=" h-screen rounded p-2 hover:border hover:border-blue-400"
                    value={text}
                  />
                )}
              </div>
              <div className="mt-2">
                <button
                  className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={addBlogNL}
                >
                  Maak aan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-6 lg:w-2/12 lg:p-0">
          <Link href="/">
            <div className="h-10"></div>
          </Link>
          {getdataALL?.map((data: any, index: number) => {
            return (
              <>
                {data.title.includes(router.query.id) && (
                  <div className="-ml-0 hidden lg:-ml-40 lg:grid" key={index}>
                    <div className="flex-col items-center">
                      {data?.author == "Mark Teekens" ? (
                        <Image
                          loading="eager"
                          height={600}
                          width={600}
                          src="/mark.jpg"
                          alt="mark"
                          className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                        />
                      ) : (
                        <Image
                          loading="eager"
                          height={600}
                          width={600}
                          src="/jorn.jpeg"
                          alt="jorn"
                          className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                        />
                      )}
                      <div className="mt-4">
                        <p className=" font-semibold">{data.author}</p>
                      </div>
                    </div>
                    <h3 className="mt-6 mb-4 text-lg font-semibold">
                      Meer van Ruby
                    </h3>
                  </div>
                )}
              </>
            );
          })}
          {getdataALL?.map((data: any, index: number) => {
            return (
              <div key={index} className="mt-6 -ml-0 lg:-ml-40">
                <div className="flex">
                  <div className="w-4/6">
                    <div className="flex">
                      {data?.author == "Mark Teekens" ? (
                        <Image
                          loading="eager"
                          height={600}
                          width={600}
                          src="/mark.jpg"
                          alt="mark"
                          className="h-6 w-6 rounded-full object-cover "
                        />
                      ) : (
                        <Image
                          loading="eager"
                          height={600}
                          width={600}
                          src="/jorn.jpeg"
                          alt="jorn"
                          className="h-6 w-6 rounded-full object-cover "
                        />
                      )}
                      <p className=" ml-2 font-semibold">{data.author}</p>
                    </div>
                    <div className="">
                      <h3 className="text-md mt-2 font-extrabold">
                        {data.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-2/6">
                    <Image
                      loading="eager"
                      height={600}
                      width={600}
                      src={data.image}
                      alt="blog_banner_nieuw"
                      className="ml-6 h-14 w-14 rounded-md object-cover "
                    />
                  </div>
                  <div className="mt-4">
                    <Link href={`/admin/addBlog/${data.id}`}>
                      <button className="font-semibold text-blue-800">
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <div className="">
                      <button
                        onClick={() => deleteBlog(data.id)}
                        className="ml-2 font-semibold text-blue-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;

export async function getServerSideProps(context: any) {
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
