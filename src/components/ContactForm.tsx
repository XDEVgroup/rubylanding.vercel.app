import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "../utils/api";

function ContactForm() {
  const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    email: "",
    telefoon: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { mutate, data, isLoading } = api.mail.addContact.useMutation();
  return (
    <div className="-mt-0 rounded-md px-4 py-4 shadow-md lg:-mt-10 lg:px-10 lg:py-16">
      {router.locale.includes("en") ? (
        <div className="">
          <div className="flex flex-col">
            <label
              className="mr-2 -mt-0 font-semibold text-gray-500 lg:-mt-8"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              placeholder="Name"
              className="mt-2 rounded-md border border-gray-200 bg-slate-100 p-2"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              value={input.name}
              required
            />
          </div>
          <div className=" flex flex-col">
            <label
              className="mr-2 mt-2 font-semibold text-gray-500"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              placeholder="Email"
              className="mt-2 rounded-md border border-gray-200 bg-slate-100 p-2"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              type="email"
              value={input.email}
              required
            />
          </div>
          <div className=" flex flex-col">
            <label
              className="mr-2 mt-2  font-semibold text-gray-500"
              htmlFor="email"
            >
              Phone:
            </label>
            <input
              placeholder="Phone"
              className="mt-2 w-80 rounded-md border border-gray-200 bg-slate-100 p-2"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  telefoon: e.target.value,
                }))
              }
              type="tel"
              value={input.telefoon}
              required
            />
          </div>
          <div className="mt-2 p-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
                className="h-4 w-4 rounded border-gray-300 text-blue-600   "
              />
              <label className="ml-2 text-sm font-medium text-gray-900 ">
                Yes, I request a quote.
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            {!data ? (
              <div>
                <button
                  className="mt-6 w-full rounded-full border-2 border-blue-500 bg-transparent p-2 font-bold text-blue-500 transition hover:bg-blue-500 hover:text-white"
                  onClick={() =>
                    mutate({
                      name: input.name,
                      email: input.email,
                      checked: isChecked,
                      telefoon: input.telefoon,
                    })
                  }
                >
                  Send
                </button>
              </div>
            ) : (
              <div className="">
                <button
                  disabled
                  className="mt-6 w-full rounded-full border-2 border-blue-500 bg-transparent p-2 font-bold text-blue-500 transition hover:text-white disabled:border-gray-700 disabled:text-gray-700"
                >
                  Thank you !
                </button>
              </div>
            )}
            {isLoading && <p>Sending..</p>}
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col">
            <label
              className="mr-2 -mt-0 font-semibold text-gray-500 lg:-mt-8"
              htmlFor="name"
            >
              Naam:
            </label>
            <input
              placeholder="Naam"
              className="mt-2 rounded-md border border-gray-200 bg-slate-100 p-2"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              value={input.name}
              required
            />
          </div>
          <div className=" flex flex-col">
            <label
              className="mr-2 mt-2 font-semibold text-gray-500"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              placeholder="Email"
              className="mt-2 rounded-md border border-gray-200 bg-slate-100 p-2"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              type="email"
              value={input.email}
              required
            />
          </div>
          <div className=" flex flex-col">
            <label
              className="mr-2 mt-2  font-semibold text-gray-500"
              htmlFor="email"
            >
              Telefoon:
            </label>
            <input
              placeholder="Telefoon"
              className="mt-2 w-80 rounded-md border border-gray-200 bg-slate-100 p-2"
              onChange={(e) =>
                setInput((prev) => ({
                  ...prev,
                  telefoon: e.target.value,
                }))
              }
              type="tel"
              value={input.telefoon}
              required
            />
          </div>
          <div className="mt-2 p-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
                className="h-4 w-4 rounded border-gray-300 text-blue-600   "
              />
              <label className="ml-2 text-sm font-medium text-gray-900 ">
                Ja, Ik wil een offerte.
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            {!data ? (
              <div>
                <button
                  className="mt-6 w-full rounded-full border-2 border-blue-500 bg-transparent p-2 font-bold text-blue-500 transition hover:bg-blue-500 hover:text-white"
                  onClick={() =>
                    mutate({
                      name: input.name,
                      email: input.email,
                      checked: isChecked,
                      telefoon: input.telefoon,
                    })
                  }
                >
                  Verzend
                </button>
              </div>
            ) : (
              <div className="">
                <button
                  disabled
                  className="mt-6 w-full rounded-full border-2 border-blue-500 bg-transparent p-2 font-bold text-blue-500 transition hover:text-white disabled:border-gray-700 disabled:text-gray-700"
                >
                  Tot ziens !
                </button>
              </div>
            )}
            {isLoading && <p>Verzenden..</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
