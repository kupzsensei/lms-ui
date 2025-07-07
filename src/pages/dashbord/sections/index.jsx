import { useQuery } from "@tanstack/react-query";
import { getSectionAPI } from "../../../api/section";
import { useState } from "react";
import CreateSectionModal from "./create-section-modal";
import { Link } from "react-router-dom";

export default function SectionTab() {
  const [createModal, setCreateModal] = useState(false);

  const { data: sections } = useQuery({
    queryFn: getSectionAPI,
    queryKey: ["sections"],
    staleTime: Infinity,
  });

  return (
    <main className="flex flex-1 min-h-0 min-w-0 flex-col gap-5">
      <div className="flex gap-5 justify-between">
        <h1 className="font-bold text-2xl">Sections</h1>
        <button
          onClick={() => setCreateModal(!createModal)}
          className="p-2 bg-green-400 text-white font-bold"
        >
          add section
        </button>
      </div>
      <table className="table-auto border-collapse    border-gray-400 ">
        <thead>
          <tr className="border-b border-gray-400 ">
            <th>Name</th>
            <th>School Year</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {sections?.map((obj) => (
            <tr key={obj.id} className="hover:text-blue-500 cursor-pointer">
              <td className="p-2">{obj.name}</td>
              <td className="p-2">{obj.school_year}</td>
              <td className="p-2 cursor-pointer text-blue-600 underline">
                <Link to={`/sections/${obj.id}`}>Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {createModal && <CreateSectionModal close={setCreateModal} />}
    </main>
  );
}
