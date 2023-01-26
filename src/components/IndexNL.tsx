import Header from "./HeaderWhite";
import Image from "next/image";
import Whatsapp from "./Whatsapp";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

function IndexNL() {
  function scrolltoId() {
    const access = document.getElementById("contact");
    access?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="">
      <div className="h-screen w-full bg-gradient-to-br from-[#496adc] to-[#c57bfe] text-white">
        <Header scrolltoId={scrolltoId} />
        <div className="mt-0 grid grid-cols-1 items-center justify-center lg:mt-20 lg:flex lg:grid-cols-2 ">
          <div className="w-full p-10 lg:w-5/12 lg:p-0">
            <h1 className="body-font mt-8 p-2 font-primary text-2xl font-bold lg:mt-0 lg:text-6xl">
              Dé Online Boekhouder voor ZZP’ers
            </h1>
            <p className="mt-2 text-lg font-semibold lg:mt-0">
              Als ZZP’er/Freelancer wil je je maar op één ding focussen; het
              runnen van je bedrijf. Ons team ontlast je van de administratie,
              zorgt voor een correcte boekhouding en is bereikbaar voor al je
              (fiscale) vragen. Zodat jij je kan focussen op het geen dat écht
              belangrijk is: je business runnen.
            </p>
            <button
              onClick={scrolltoId}
              className="mt-10 rounded-full border border-white bg-transparent p-2 p-3 text-lg font-bold transition hover:bg-white hover:text-purple-600 lg:mt-4"
            >
              Plan een gesprek
            </button>
          </div>
          <div className="">
            <Image
              loading="eager"
              className="ml-10 hidden transform p-10 drop-shadow-md transition duration-700 ease-in-out hover:-rotate-12  hover:scale-125 lg:ml-0  lg:flex lg:p-0"
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
            <h2 className="text-4xl font-bold">Jij staat centraal</h2>
            <div className=" mt-4  w-4/6 text-center font-normal lg:w-2/6">
              Om het onze klanten zo makkelijk mogelijk te maken werken wij met
              een overzichtelijke{" "}
              <strong className="font-normal text-purple-500">
                boekhoudtool
              </strong>
              , bieden we{" "}
              <strong className="font-normal text-blue-500">
                onbeperkt advies
              </strong>{" "}
              op maat en heeft onze{" "}
              <strong className="text-black-500 font-normal">
                bereikbaarheid
              </strong>{" "}
              een hoge prioriteit.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center gap-20 pt-14  lg:flex">
          <div className="flex flex-col items-center gap-3 text-center">
            <Image
              loading="eager"
              src="/feature-3.png"
              alt="man_ideeen"
              width={160}
              height={160}
            />

            <h3 className="text-lg font-bold text-gray-800">Boekhoudtool</h3>
            <p className="w-96 px-6 text-sm">
              Met onze boekhoudtool stel je bijvoorbeeld gemakkelijk nieuwe
              offertes en facturen op, heb je overzicht van de openstaande of
              betaalde facturen, weet je welke inkoopfacturen nog verwerkt
              moeten worden en zie je je BTW-overzicht. Zo zijn er nog meer
              functies die het makkelijk en overzichtelijk maken.
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
              Onbeperkt advies
            </h3>
            <p className="mt-4 w-96 px-6 text-sm">
              Bij Ruby Finance vinden we het belangrijk dat je niet te veel
              belasting betaald. Met onze kennis zorgen we ervoor dat elk
              mogelijk belastingvoordeel toegepast wordt. Zo kun je tijdens onze
              werkuren altijd met ons bellen over je situatie. We denken graag
              met je mee, ook wanneer jouw vraag buiten onze fiscale expertise
              valt.
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
              Bereikbaarheid
            </h3>
            <p className="mt-4 w-96 px-6 text-sm ">
              Sinds jij als ZZP’er waarschijnlijk lange dagen maakt, is het
              lekker als je boekhouder nog bereikbaar is wanneer je thuis komt.
              Dan hoef je geen hele dag vrij te nemen voor bijvoorbeeld een
              gesprek van een half uur. We zijn dan ook bereikbaar op Ma. t/m
              Vr. tussen 10.00 en 20.00. Zelfs buiten onze openingstijden doen
              we ons best om zo snel mogelijk te reageren mits die mogelijkheid
              er is.
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="mt-40 flex flex-col items-center justify-center lg:p-0">
            <h2 className="px-4 text-3xl font-bold lg:w-4/12 lg:text-center">
              De volledige boekhouding, voor een vaste prijs.
            </h2>
          </div>

          <div>
            <section className="">
              <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
                <div className="space-y-3 sm:gap-2 lg:grid lg:grid-cols-2 lg:space-y-0">
                  <div className="">
                    <h2 className="text-3xl font-bold">
                      Eén vaste prijs per jaar, maandelijks gefactureerd.
                    </h2>
                    <p className="mt-2 text-2xl font-semibold text-blue-700">
                      Ons bedrijf is kostenefficiënt ingericht zodat we de beste
                      prijs kunnen geven.
                    </p>
                    <p className="mt-2 pb-20 text-lg font-normal">
                      Als startende ondernemer heb je veel kosten. Daarom bieden
                      wij de volledige boekhouding met de boekhoudapp, voor een
                      vaste lage prijs met de goede service van Ruby Finance.
                    </p>
                  </div>
                  <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white bg-opacity-60 p-6 text-center text-gray-900 shadow backdrop-blur-sm hover:shadow-lg xl:p-8">
                    <h3 className="mb-4 text-2xl font-bold text-[#2C234D]">
                      ZZP&apos;ers/Freelancers
                    </h3>

                    <div className="mt-8 flex justify-center text-[#2C234D]">
                      <span className="mr-1">€</span>
                      <span className="mr-2 text-5xl font-extrabold">50</span>
                    </div>
                    <div className="font-normal">
                      <p>Per maand excl. btw</p>
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
                        <span>Boekhoudtool</span>
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
                        <span>Facturen maken</span>
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
                        <span>Inkoopfacturen/Bonnetjes verwerken</span>
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
                          <span>Onbeperkt advies</span>
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
                          <span>BTW aangifte</span>
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
                          <span>Inkomstenbelasting</span>
                        </span>
                      </li>
                      <li className="px-12">
                        <button
                          onClick={scrolltoId}
                          className="rounded-full border-2 border-blue-500 bg-transparent p-2 font-bold text-blue-500 transition hover:bg-blue-500 hover:text-white"
                        >
                          Plan gesprek
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
                  Begin dit kwartaal
                </h2>
                <h2 className="text-3xl font-bold lg:text-5xl">
                  zonder zorgen
                </h2>
              </div>
              <div>
                <p className="mt-4 text-2xl">
                  Plan een gesprek om te kijken of Ruby Finance past bij jouw
                </p>
                <p className="text-2xl">business.</p>
              </div>
              <div className="mt-6 lg:mt-32"></div>
            </div>

            {/* BLOGS??? */}

            <div className="mb-6 px-10 lg:px-0">
              <Image
                loading="eager"
                src="/undraw_calculator_re_alsc.svg"
                alt="boekhouder_voor_zzper"
                height={300}
                width={300}
              />
            </div>
          </div>
        </div>
        <div id="contact" className=" h-full min-h-screen bg-white ">
          <div className="mt-10 flex flex-col items-center justify-center p-12">
            <h2 className="text-3xl font-bold">Plan een gesprek</h2>
            <h2 className="text-3xl font-bold">Wij helpen je graag verder</h2>
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

export default IndexNL;
