import { router } from "@trpc/server";
import { getProviders, getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Header from "../../../components/admin/Header";
import Footer from "../../../components/Footer";
import { api } from "../../../utils/api";
import Image from "next/image";
import HeaderBlack from "../../../components/HeaderBlack";

function Index(this: any) {
  const [title, setTitle] = useState("Vul een titel in");
  const [author, setAuthor] = useState("Jorn Ringeling");
  const [text, setText] = useState("");
  const [image, setImage] = useState("/manruby.png");
  const [date, setDate] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const router = useRouter();

  const { data: getdataNL, isLoading: isLoadinggetItemsNL } =
    api.blog.getBlogNL.useQuery();

  const {
    mutateAsync: mutateNL,
    data: dataNL,
    isLoading: isLoadingItemsNL,
  } = api.blog.AddBlogNL.useMutation();

  const {
    mutateAsync: mutateDeleteNL,
    data: dataDeleteNL,
    isLoading: isLoadingItemsDeleteNL,
  } = api.blog.DeleteBlogNL.useMutation();

  const addBlogNL = () => {
    if (title != "Vul een titel in" && text != "" && image != "/manruby.png") {
      mutateNL({
        title: title,
        author: author,
        text: text,
        image: image,
        date: date,
      });
      router.push("/admin/dashboard");
    } else {
      alert("vul alle velden in");
    }
  };

  const deleteBlog = (blogId: any) => {
    mutateDeleteNL({ id: blogId });
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
              <div className="mb-2 flex items-center">
                NL
                <Image
                  src="/netherlands.png"
                  alt=""
                  height={16}
                  width={24}
                  className=" ml-1"
                />
              </div>
              <div className="">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    {author == "Mark Teekens" ? (
                      <img
                        src="/mark.jpg"
                        alt="mark"
                        className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                      />
                    ) : (
                      <img
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
                      <p className="ml-2 text-sm font-normal text-gray-700 lg:text-base">
                        {date}
                      </p>
                      <input
                        type="date"
                        className="ml-5 text-sm font-normal text-gray-700 lg:text-base"
                      />
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
                <div className="mt-4 flex items-center text-[#2C234D]">
                  <input
                    className="w-full p-1 text-2xl font-bold text-[#2C234D] hover:border hover:border-blue-400 lg:text-4xl"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              {!isToggled && (
                <div className="mt-4 flex h-52 max-w-4xl">
                  <img
                    onClick={() => setIsToggled(true)}
                    src={image}
                    alt={`${image && "blog_banner"}`}
                    className="mt-4 w-full object-cover hover:border hover:border-blue-400 "
                  />
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
                <button className="mb-2 w-10 rounded-lg border border-black bg-gray-100">
                  /n
                </button>
                <textarea
                  id="textarea1"
                  className=" h-screen rounded p-2 hover:border hover:border-blue-400"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
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
          {getdataNL?.map((data: any, index: number) => {
            return (
              <>
                {data.title.includes(router.query.id) && (
                  <div className="-ml-0 hidden lg:-ml-40 lg:grid" key={index}>
                    <div className="flex-col items-center">
                      {data?.author == "Mark Teekens" ? (
                        <img
                          src="/mark.jpg"
                          alt="mark"
                          className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                        />
                      ) : (
                        <img
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
          {getdataNL?.map((data: any, index: number) => {
            return (
              <div key={index} className="mt-6 -ml-0 lg:-ml-40">
                <div className="flex">
                  <div className="w-4/6">
                    <div className="flex">
                      {data?.author == "Mark Teekens" ? (
                        <img
                          src="/mark.jpg"
                          alt="mark"
                          className="h-6 w-6 rounded-full object-cover "
                        />
                      ) : (
                        <img
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
                    <img
                      src={data.image}
                      alt="blog_banner_nieuw"
                      className="ml-6 h-14 w-14 rounded-md object-cover "
                    />
                  </div>
                  <div className="mt-4">
                    <Link href={`/admin/addBlogNL/${data.id}`}>
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

  if (!session?.user?.id?.includes("cld31y4uz0000me08352v8lcs")) {
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
