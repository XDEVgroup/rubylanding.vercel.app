import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/HeaderBlack";
import Image from "next/image";
import Footer from "../../components/Footer";
import { api } from "../../utils/api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Head from "next/head";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import Whatsapp from "../../components/Whatsapp";

function BlogId() {
  const router = useRouter();
  const { data: dataNL, isLoading: isLoadingItems } =
    api.blog.getBlogNL.useQuery();

  const { data: dataEN, isLoading: isLoadingItemsEnglish } =
    api.blog.getBlogEN.useQuery();

  return (
    <>
      <Head>
        <title>Ruby Finance - {router.query.id}</title>
        <meta
          name="description"
          content={`Ruby Finance,  ${router.query.id}`}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
      </Head>
      <div className="h-full min-h-screen">
        <Header />
        {isLoadingItems ? (
          <div className="-mt-36 flex min-h-screen items-center justify-center">
            <Image height={50} width={100} src="/rubygif.gif" alt="" className="h-10 animate-pulse" />
          </div>
        ) : (
          <div>
            {router.locale == "nl-NL" ? (
              /* NL */
              <div className="grid min-h-screen grid-cols-1 lg:flex">
                <div className="w-full justify-center p-2 lg:w-4/6 lg:p-4">
                  {dataNL?.map((data: any, index: number) => {
                    const splittedAll = data.text.split("/n");
                    const textMapped = splittedAll?.map(
                      (field: string, index: number) => {
                        return (
                          <div key={index}>
                            <p className="mt-2">
                              <ReactMarkdown>{field}</ReactMarkdown>
                            </p>
                          </div>
                        );
                      }
                    );

                    return (
                      <div key={index}>
                        {data.title.includes(router.query.id) && (
                          <div className="m-auto w-full cursor-pointer lg:w-8/12">
                            <div className="">
                              <div className="flex justify-between">
                                <div className="flex items-center">
                                  {data?.author == "Mark Teekens" ? (
                                    <Image height={600} width={600}
                                      src="/mark.jpg"
                                      alt="mark"
                                      className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                                    />
                                  ) : (
                                    <Image height={600} width={600}
                                      src="/jorn.jpeg"
                                      alt="jorn"
                                      className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                                    />
                                  )}
                                  <div className="flex flex-col">
                                    <p className="ml-2 text-sm font-medium lg:text-base">
                                      {data.author}
                                    </p>
                                    <p className="ml-2 text-sm font-normal text-gray-700 lg:text-base">
                                      {" "}
                                      {data.date}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-2 flex space-x-2">
                                  <Link
                                    href="https://www.facebook.com/rubyfinance"
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
                                    href="https://www.instagram.com/rubyfinance/"
                                    className="text-gray-400 hover:text-gray-900 "
                                  >
                                    <BsInstagram className="h-4 w-4 lg:h-6 lg:w-6" />
                                  </Link>
                                </div>
                              </div>
                              <div className="mt-4 flex items-center text-[#2C234D]">
                                <h3 className="text-2xl font-bold text-[#2C234D] lg:text-4xl">
                                  {data.title}
                                </h3>
                              </div>
                            </div>
                            <div className="mt-4 flex h-52 max-w-4xl">
                              <Image height={600} width={600}
                                src={data.image}
                                alt="blog_banner"
                                className="mt-4 w-full object-cover "
                              />
                            </div>

                            <div className="m-auto mt-10 flex w-full flex-col justify-center text-xl text-gray-700 ">
                              {textMapped}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="w-full p-6 lg:w-2/12 lg:p-0">
                  <Link href="/#contact">
                    <div className="flex p-6 lg:p-0">
                      <button className="mt-4 w-full rounded-full border border-black bg-black p-2 text-white transition hover:bg-white hover:text-black">
                        Plan een gesprek
                      </button>
                    </div>
                  </Link>
                  {dataNL?.map((data: any, index: number) => {
                    return (
                      <>
                        {data.title.includes(router.query.id) && (
                          <div
                            className="-ml-0 hidden lg:-ml-40 lg:grid"
                            key={index}
                          >
                            <div className="flex-col items-center">
                              {data?.author == "Mark Teekens" ? (
                                <Image height={600} width={600}
                                  src="/mark.jpg"
                                  alt="mark"
                                  className="mt-6 h-20 w-20 rounded-full object-cover "
                                />
                              ) : (
                                <Image height={600} width={600}
                                  src="/jorn.jpeg"
                                  alt="jorn"
                                  className="mt-6 h-20 w-20 rounded-full object-cover "
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
                  {dataNL?.map((data: any, index: number) => {
                    return (
                      <div key={index} className="mt-6 -ml-0 lg:-ml-40">
                        <Link href={`/blogs/${data.title}`}>
                          <div className="flex">
                            <div className="w-4/6">
                              <div className="flex">
                                {data?.author == "Mark Teekens" ? (
                                  <Image height={600} width={600}
                                    src="/mark.jpg"
                                    alt="mark"
                                    className="h-6 w-6 rounded-full object-cover "
                                  />
                                ) : (
                                  <Image height={600} width={600}
                                    src="/jorn.jpeg"
                                    alt="jorn"
                                    className="h-6 w-6 rounded-full object-cover "
                                  />
                                )}
                                <p className=" ml-2 font-semibold">
                                  {data.author}
                                </p>
                              </div>
                              <div className="">
                                <h3 className="text-md mt-2 font-extrabold">
                                  {data.title}
                                </h3>
                              </div>
                            </div>

                            <div className="w-2/6">
                              <Image height={600} width={600}
                                src={data.image}
                                alt="blog_banner_nieuw"
                                className="ml-6 h-14 w-14 rounded-md object-cover "
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* EN */
              <div className="grid min-h-screen grid-cols-1 lg:flex">
                <div className="w-full justify-center p-2 lg:w-4/6 lg:p-4">
                  {dataEN?.map((data: any, index: number) => {
                    const splittedAll = data.text.split("/n");
                    const day = new Date(data.date);
                    const textMapped = splittedAll?.map(
                      (field: string, index: number) => {
                        return (
                          <div key={index}>
                            <p className="mt-2">
                              <ReactMarkdown>{field}</ReactMarkdown>
                            </p>
                          </div>
                        );
                      }
                    );

                    return (
                      <div key={index}>
                        {data.title.includes(router.query.id) && (
                          <div className="m-auto w-full cursor-pointer lg:w-8/12">
                            <div className="">
                              <div className="flex justify-between">
                                <div className="flex items-center">
                                  {data?.author == "Mark Teekens" ? (
                                    <Image height={600} width={600}
                                      src="/mark.jpg"
                                      alt="mark"
                                      className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                                    />
                                  ) : (
                                    <Image height={600} width={600}
                                      src="/jorn.jpeg"
                                      alt="jorn"
                                      className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                                    />
                                  )}
                                  <div className="flex flex-col">
                                    <p className="ml-2 text-sm font-medium lg:text-base">
                                      {data.author}
                                    </p>
                                    <p className="ml-2 text-sm font-normal text-gray-700 lg:text-base">
                                      {" "}
                                      {data.date}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-2 flex space-x-2">
                                  <Link
                                    href="https://www.facebook.com/rubyfinance"
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
                                    href="https://www.instagram.com/rubyfinance/"
                                    className="text-gray-400 hover:text-gray-900 "
                                  >
                                    <BsInstagram className="h-4 w-4 lg:h-6 lg:w-6" />
                                  </Link>
                                </div>
                              </div>
                              <div className="mt-4 flex items-center text-[#2C234D]">
                                <h3 className="text-2xl font-bold text-[#2C234D] lg:text-4xl">
                                  {data.title}
                                </h3>
                              </div>
                            </div>
                            <div className="mt-4 flex h-52 max-w-4xl">
                              <Image height={600} width={600}
                                src={data.image}
                                alt="blog_banner"
                                className="mt-4 w-full object-cover "
                              />
                            </div>

                            <div className="m-auto mt-10 flex w-full flex-col justify-center text-xl text-gray-700 ">
                              {textMapped}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="w-full p-6 lg:w-2/12 lg:p-0">
                  <Link href="/">
                    <div className="flex p-6 lg:p-0">
                      <button className="mt-4 w-full rounded-full border border-black bg-black bg-transparent p-2 text-white transition hover:bg-white hover:text-black">
                        Plan een gesprek
                      </button>
                    </div>
                  </Link>
                  {dataEN?.map((data: any, index: number) => {
                    return (
                      <>
                        {data.title.includes(router.query.id) && (
                          <div
                            className="-ml-0 hidden lg:-ml-40 lg:grid"
                            key={index}
                          >
                            <div className="flex-col items-center">
                              {data?.author == "Mark Teekens" ? (
                                <Image height={600} width={600}
                                  src="/mark.jpg"
                                  alt="mark"
                                  className="mt-6 h-20 rounded-full object-cover "
                                />
                              ) : (
                                <Image height={600} width={600}
                                  src="/jorn.jpeg"
                                  alt="jorn"
                                  className="mt-6 h-20 rounded-full object-cover "
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
                  {dataEN?.map((data: any, index: number) => {
                    return (
                      <div key={index} className="mt-6 -ml-0 lg:-ml-40">
                        <Link href={`/blogs/${data.title}`}>
                          <div className="flex">
                            <div className="w-4/6">
                              <div className="flex">
                                {data?.author == "Mark Teekens" ? (
                                  <Image height={600} width={600}
                                    src="/mark.jpg"
                                    alt="mark"
                                    className="h-6 w-6 rounded-full object-cover "
                                  />
                                ) : (
                                  <Image height={600} width={600}
                                    src="/jorn.jpeg"
                                    alt="jorn"
                                    className="h-6 w-6 rounded-full object-cover "
                                  />
                                )}
                                <p className=" ml-2 font-semibold">
                                  {data.author}
                                </p>
                              </div>
                              <div className="">
                                <h3 className="text-md mt-2 font-extrabold">
                                  {data.title}
                                </h3>
                              </div>
                            </div>

                            <div className="w-2/6">
                              <Image height={600} width={600}
                                src={data.image}
                                alt="blog_banner_nieuw"
                                className="ml-6 h-14 w-14 rounded-md object-cover "
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
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
