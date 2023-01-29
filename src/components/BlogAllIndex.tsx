import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { api } from "../utils/api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import Image from "next/image";

function BlogAllIndex() {
  const router = useRouter();
  const { data: dataALL, isLoading: isLoadingItemsALL } =
    api.blog.getBlogALL.useQuery({
      routerLang: router.locale as string,
    });
  const splittedAll = dataALL && dataALL[0]?.text.split("/n");
  const textMapped = splittedAll?.map((field: string, index: number) => {
    return (
      <div key={index}>
        <p className="mt-2">
          <ReactMarkdown>{field}</ReactMarkdown>
        </p>
      </div>
    );
  });
  return (
    <>
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
        <div className="grid min-h-screen grid-cols-1 lg:flex">
          {dataALL && (
            <div className="w-full justify-center p-2 lg:w-4/6 lg:p-4">
              <>
                <Link href={`/blogs/${dataALL[0]?.title}`}>
                  <div>
                    <div className="m-auto mt-6 w-full cursor-pointer lg:w-8/12">
                      <div className="">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            {dataALL[0]?.author == "Mark Teekens" ? (
                              <Image
                                loading="eager"
                                src="/mark.jpg"
                                alt="mark"
                                className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                                height={400}
                                width={400}
                              />
                            ) : (
                              <Image
                                loading="eager"
                                src="/jorn.jpeg"
                                alt="jorn"
                                className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                                height={400}
                                width={400}
                              />
                            )}

                            <div className="flex flex-col">
                              <p className="ml-2 text-sm font-medium lg:text-base">
                                {dataALL[0]?.author}
                              </p>
                              <p className="ml-2 text-sm font-normal text-gray-700 lg:text-base">
                                {dataALL &&
                                  (dataALL[0]?.date?.toLocaleDateString() as any)}
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
                        <div className="mt-4 flex items-center text-[#2C234D]">
                          <h3 className="text-2xl font-bold text-[#2C234D] lg:text-4xl">
                            {dataALL[0]?.title}
                          </h3>
                        </div>
                      </div>
                      <div className="mt-4 flex h-52 max-w-4xl">
                        <Image
                          priority
                          loading="eager"
                          src={dataALL[0]?.image as string}
                          alt="blog_banner"
                          className="mt-4 w-full object-cover"
                          height={400}
                          width={400}
                        />
                      </div>

                      <div className=" mt-10 flex flex-col text-xl text-gray-700 ">
                        {textMapped}
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            </div>
          )}
          <div className="w-full p-6 lg:w-2/12 lg:p-0">
            <Link href="/">
              <div className="flex p-6 lg:p-0">
                <button className="mt-4 w-full rounded-full border border-black bg-black p-2 text-white transition hover:bg-white hover:text-black">
                  Plan een gesprek
                </button>
              </div>
            </Link>

            {dataALL &&
              dataALL[0]?.title.includes(router.query.id as string) && (
                <div className="-ml-0 hidden lg:-ml-40 lg:grid">
                  <div className="flex-col items-center">
                    {dataALL[0]?.author == "Mark Teekens" ? (
                      <Image
                        loading="eager"
                        height={600}
                        width={600}
                        src="/mark.jpg"
                        alt="mark"
                        className="mt-6 h-20 w-20 rounded-full object-cover "
                      />
                    ) : (
                      <Image
                        loading="eager"
                        height={600}
                        width={600}
                        src="/jorn.jpeg"
                        alt="jorn"
                        className="mt-6 h-20 w-20 rounded-full object-cover "
                      />
                    )}
                    <div className="mt-4">
                      <p className=" font-semibold">{dataALL[0].author}</p>
                    </div>
                  </div>
                  <h3 className="mt-6 mb-4 text-lg font-semibold">
                    Meer van Ruby
                  </h3>
                </div>
              )}

            {dataALL && (
              <div className="-ml-0 hidden lg:-ml-40 lg:grid">
                <div className="flex-col items-center">
                  {dataALL[0]?.author == "Mark Teekens" ? (
                    <Image
                      loading="eager"
                      src="/mark.jpg"
                      alt="mark"
                      className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                      height={400}
                      width={400}
                    />
                  ) : (
                    <Image
                      loading="eager"
                      src="/jorn.jpeg"
                      alt="jorn"
                      className="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                      height={400}
                      width={400}
                    />
                  )}
                  <div className="mt-4">
                    <p className=" font-semibold">{dataALL[0]?.author}</p>
                  </div>
                </div>
                <h3 className="mt-6 mb-4 text-lg font-semibold">
                  Meer van Ruby
                </h3>
              </div>
            )}

            {dataALL?.map((data, index: number) => {
              return (
                <div key={index} className="mt-6 -ml-0 lg:-ml-40">
                  <Link href={`/blogs/${data.title}`}>
                    <div className="flex">
                      <div className="w-4/6">
                        <div className="flex">
                          {data?.author == "Mark Teekens" ? (
                            <Image
                              loading="eager"
                              src="/mark.jpg"
                              alt="mark"
                              className="h-6 w-6 rounded-full object-cover "
                              height={400}
                              width={400}
                            />
                          ) : (
                            <Image
                              loading="eager"
                              src="/jorn.jpeg"
                              alt="jorn"
                              className="h-6 w-6 rounded-full object-cover "
                              height={400}
                              width={400}
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
                          src={data.image}
                          alt="blog_banner_nieuw"
                          className="ml-6 h-14 w-14 rounded-md object-cover "
                          height={400}
                          width={400}
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
    </>
  );
}

export default BlogAllIndex;
