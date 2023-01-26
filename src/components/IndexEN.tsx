import Header from "./HeaderWhite";
import Image from "next/image";
import Whatsapp from "./Whatsapp";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

function IndexEN() {
  function scrolltoId() {
    const access = document.getElementById("contact");
    access?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <div className="h-screen w-full bg-gradient-to-br from-[#496adc] to-[#c57bfe] text-white">
        <Header scrolltoId={scrolltoId} />
        <div className="mt-0 grid grid-cols-1 items-center justify-center lg:mt-20 lg:flex lg:grid-cols-2 ">
          <div className="w-full p-10 lg:w-5/12 lg:p-0">
            <h1 className="body-font mt-8 font-primary text-2xl font-bold lg:mt-0 lg:text-6xl">
              The Online platform For Entrepreneurs
            </h1>
            <p className="mt-2 text-lg font-semibold lg:mt-0">
              As an entrepreneur / freelancer you only want to focus on one
              thing; running your business. Our team relieves you of the
              administrative tasks involved. Then you can keep focus on what
              really matters.
            </p>
            <button
              onClick={scrolltoId}
              className="mt-10 rounded-full border border-white bg-transparent p-2 text-lg font-bold transition hover:bg-white hover:text-purple-600 lg:mt-4"
            >
              Schedule a call
            </button>
          </div>
          <div className="">
            <Image
              loading="eager"
              className="ml-10 hidden transform p-10 drop-shadow-lg  transition duration-700 ease-in-out hover:-rotate-12  hover:scale-125 lg:ml-0  lg:flex lg:p-0"
              width={250}
              height={250}
              src="/iphonewhiteR.png"
              alt="iphone_ruby_app"
            />
          </div>
        </div>
      </div>
      <main className="h-full min-h-screen bg-white text-black">
        <div className="">
          <div className="flex flex-col items-center justify-center pt-36">
            <h2 className="text-4xl font-bold">You are central</h2>
            <div className=" mt-4  w-4/6 text-center font-normal lg:w-2/6">
              We work to make things as easy as possible for our customers we
              offer an{" "}
              <strong className="font-normal text-purple-500">
                accounting tool
              </strong>
              , with{" "}
              <strong className="font-normal text-blue-500">
                unlimited advice
              </strong>{" "}
              custom and has our{" "}
              <strong className="text-black-500 font-normal">
                accessibility
              </strong>{" "}
              a high priority.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center gap-20 pt-14 lg:flex">
          <div className="flex flex-col items-center gap-3  text-center">
            <Image
              loading="eager"
              src="/feature-3.png"
              alt="man_idee"
              width={160}
              height={160}
            />

            <h3 className="text-2xl font-bold text-gray-800">
              Accounting tool
            </h3>
            <p className="w-96 px-6 text-sm">
              With our accounting tool, for example, you can easily set up new
              ones quotes and invoices, you have an overview of the outstanding
              ones or paid invoices, you know which purchase invoices are still
              available to be processed and you will see your VAT overview. For
              example, there are even more functions that make it easy and
              clear.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              loading="eager"
              src="/feature-2.png"
              alt="vrouw_idee"
              width={160}
              height={160}
            />
            <h3 className="mt-3 text-2xl font-bold text-gray-800">
              Unlimited advice
            </h3>
            <p className="mt-4 w-96 px-6 text-sm">
              At Ruby Finance, we think it&apos;s important that you don&apos;t
              spend too much tax paid. With our knowledge we ensure that every
              possible tax benefit. So you can during our working hours always
              call us about your situation. We are happy to think along with
              you, even if your question is outside our scope tax expertise.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              loading="eager"
              src="/feature-1.png"
              alt="man_zwaait"
              width={160}
              height={160}
            />
            <h3 className="mt-3 text-2xl font-bold text-gray-800">
              Accessibility
            </h3>
            <p className="mt-4 w-96 px-6 text-sm">
              Since you probably work long days as a self-employed person, it is
              nice if your bookkeeper is still available when you get home
              coming. Then you don&apos;t have to take a whole day off for it
              for example a conversation of half an hour. So we are available on
              Mon. to Fri. between 10 a.m. and 8 p.m. Even outside We do our
              best to change our opening hours as quickly as possible respond if
              possible.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="mt-40 flex flex-col items-center justify-center lg:p-0">
            <h2 className="px-4 text-3xl font-bold lg:w-3/12 lg:text-center">
              The full accounting, for a fixed price.
            </h2>
          </div>

          <div>
            <section className="">
              <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
                <div className="space-y-3 sm:gap-2 lg:grid lg:grid-cols-2 lg:space-y-0">
                  <div className="">
                    <h2 className="text-3xl font-bold">
                      One fixed price per year, billed monthly.
                    </h2>
                    <p className="mt-2 text-2xl font-semibold text-blue-700">
                      Our company is set up cost-efficiently so that we can can
                      give best price.
                    </p>
                    <p className="mt-2 pb-20 text-lg font-normal">
                      As a starting entrepreneur you have a lot of costs.
                      Therefore we provide full accounting with the accounting
                      app, for a fixed low price with the right one service from
                      Ruby Finance.
                    </p>
                  </div>
                  <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white bg-opacity-60 p-6 text-center text-gray-900 shadow backdrop-blur-sm hover:shadow-lg xl:p-8">
                    <h3 className="mb-4 text-2xl font-bold text-[#2C234D]">
                      Entrepreneurs/Freelancers
                    </h3>

                    <div className="mt-8 flex justify-center text-[#2C234D]">
                      <span className="mr-1">€</span>
                      <span className="mr-2 text-5xl font-extrabold">50</span>
                    </div>
                    <div className="font-normal">
                      <p>Per month excl. VAT</p>
                    </div>

                    <ul role="list" className="mb-8 mt-8 space-y-4 text-left">
                      <li className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Accounting tool</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Create invoices</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Process purchase invoices/receipts</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          <span>Unlimited advice</span>
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          <span>VAT declaration</span>
                        </span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>
                          <span>VAT Income tax</span>
                        </span>
                      </li>
                      <li className="px-12">
                        <button
                          onClick={scrolltoId}
                          className="rounded-full border-2 border-blue-500 bg-transparent p-2 font-bold text-blue-500 transition hover:bg-blue-500 hover:text-white"
                        >
                          Schedule conversation
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="mt-16 h-full bg-gradient-to-r from-[#8c53fa] to-[#496adc] pt-10 text-white">
          <div className="grid grid-cols-1 justify-center lg:flex lg:p-20">
            <div className="mb-10 px-4 lg:mb-4 lg:px-20">
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold lg:text-5xl">
                  Start this quarter
                </h2>
                <h2 className="text-3xl font-bold lg:text-5xl">
                  without worries
                </h2>
              </div>
              <div>
                <p className="mt-4 text-2xl">
                  Schedule a meeting to see if Ruby Finance is a good fit your
                </p>
                <p className="text-2xl">business.</p>
              </div>
              <div className="mt-6 lg:mt-32"></div>
            </div>

            {/* BLOGS??? */}

            <div className="mb-6 px-10 lg:px-0">
              <Image
                loading="eager"
                src="/manruby.png"
                alt="man_drukt_op_knop"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
        <div id="contact" className=" h-full min-h-screen bg-white ">
          <div className="mt-10 flex flex-col items-center justify-center p-12">
            <h2 className="text-3xl font-bold">Schedule a call</h2>
            <h2 className="text-3xl font-bold">We are happy to help you</h2>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="hidden lg:-mt-80 lg:flex lg:pr-20">
                <Image
                  loading="eager"
                  src="/realTime.png"
                  alt="computer"
                  height={300}
                  width={300}
                />
              </div>
              <ContactForm />
              <div className="hidden lg:flex lg:pl-20 lg:pt-80">
                <Image
                  loading="eager"
                  src="/coding.png"
                  alt="man_achter_laptop"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-6 right-6">
          <Whatsapp />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default IndexEN;
