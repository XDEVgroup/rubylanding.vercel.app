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
      <div className="mx-auto mt-10 w-full rounded-lg lg:w-3/6">
        <div className=" overflow-x-auto">
          <table className="ml-1 mr-1 w-full rounded-lg text-left text-sm text-gray-500 ">
            <thead className="rounded-lg bg-gray-50 text-xs uppercase text-gray-700 ">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Gebeld?
                </th>
                <th scope="col" className="px-3 py-3">
                  Naam
                </th>
                <th scope="col" className="px-3 py-3">
                  Telefoon
                </th>
                <th scope="col" className="px-3 py-3">
                  Mail
                </th>
                <th scope="col" className="px-3 py-3">
                  Offerte
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((dat: any) => {
                return (
                  <tr key={dat.id} className="border-b bg-white ">
                    <td
                      onClick={() => handleGebeld(dat.id)}
                      className="px-3 py-4 font-bold "
                    >
                      <p className="text-green-600">{dat.gebeld && "Ja"}</p>
                      <p className="text-red-600">{!dat.gebeld && "Nee"}</p>
                    </td>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-3 py-4 font-medium text-gray-900 "
                    >
                      {dat.naam}
                    </th>

                    <td className="px-3 py-4">{dat.telefoon}</td>
                    <td className="px-3 py-4">{dat.mail}</td>
                    <td className="px-3 py-4">{dat.offerte ? "Ja" : "Nee"}</td>
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
