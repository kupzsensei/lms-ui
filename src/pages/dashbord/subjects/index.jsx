import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { getAllSubjectAPI } from "../../../api/subject";
import CreateSubjectModal from "./create-subject-modal";

export default function SubjectTab() {
  const [createModal, setCreateModal] = useState(false);

  const { data: subjects } = useQuery({
    queryFn: getAllSubjectAPI,
    queryKey: ["subjects"],
    staleTime: Infinity,
  });

  return (
    <main className="flex flex-1 min-h-0 min-w-0 flex-col gap-5">
      <div className="flex gap-5 justify-between">
        <h1 className="font-bold text-2xl">Subjects</h1>
        <button
          onClick={() => setCreateModal(!createModal)}
          className="p-2 bg-green-400 text-white font-bold"
        >
          add subject
        </button>
      </div>
      <table className="table-auto border-collapse    border-gray-400 ">
        <thead>
          <tr className="border-b border-gray-400 ">
            <th>Name</th>
            <th>Description</th>
            <th>Teacher</th>
            <th>isActive</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {subjects?.map((obj) => (
            <tr key={obj.id} className={`hover:text-blue-500 cursor-pointer `}>
              <td className="p-2">{obj.name}</td>
              <td className="p-2">{obj.description}</td>
              <td className="p-2">{obj.teacher.username}</td>
              <td
                className={`p-2 font-bold ${
                  obj.active ? "text-green-400" : "text-red-400"
                }`}
              >
                {obj.active ? "True" : "False"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {createModal && <CreateSubjectModal close={setCreateModal} />}
    </main>
  );
}
