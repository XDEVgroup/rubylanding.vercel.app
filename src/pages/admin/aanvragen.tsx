import { getProviders, getSession } from "next-auth/react";
import React from "react";
import Header from "../../components/admin/Header";
import HeaderBlack from "../../components/HeaderBlack";
import { api } from "../../utils/api";

function aanvragen() {
  const ctx = api.useContext();
  const { data } = api.mail.getContact.useQuery();

  const { mutateAsync: handlegebeldMutate } = api.mail.addgebeld.useMutation({
    onSuccess: () => {
      ctx.invalidate();
    },
  });

  const handleGebeld = (datid: any) => {
    handlegebeldMutate({ id: datid as any });
  };
  return (
    <div>
      <HeaderBlack />
      <Header />
      <div className="mx-auto mt-10 w-3/6 rounded-lg">
        <div className=" overflow-x-auto">
          <table className="w-full rounded-lg text-left text-sm text-gray-500 ">
            <thead className="rounded-lg bg-gray-50 text-xs uppercase text-gray-700 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Naam
                </th>
                <th scope="col" className="px-6 py-3">
                  Telefoon
                </th>
                <th scope="col" className="px-6 py-3">
                  Mail
                </th>
                <th scope="col" className="px-6 py-3">
                  Offerte
                </th>
                <th scope="col" className="px-6 py-3">
                  Gebeld?
                </th>
                <th scope="col" className="px-6 py-3">
                  Verander Gebeld Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((dat: any) => {
                return (
                  <tr key={dat.id} className="border-b bg-white ">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                    >
                      {dat.naam}
                    </th>
                    <td className="px-6 py-4">{dat.telefoon}</td>
                    <td className="px-6 py-4">{dat.mail}</td>
                    <td className="px-6 py-4">{dat.offerte ? "Ja" : "Nee"}</td>
                    <td className="px-6 py-4 font-bold ">
                      <p className="text-green-600">{dat.gebeld && "Ja"}</p>
                      <p className="text-red-600">{!dat.gebeld && "Nee"}</p>
                    </td>
                    <td className="mt-4 flex justify-center">
                      <button
                        className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => handleGebeld(dat.id)}
                      >
                        Toggle
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default aanvragen;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);

  if (!session?.user?.id?.includes("cld203pga000ov3w4lkvakz7i")) {
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
