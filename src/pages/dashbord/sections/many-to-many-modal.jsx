import { useQuery } from "@tanstack/react-query";
import { getAllSubjectAPI } from "../../../api/subject";
import { useEffect, useState } from "react";

export default function ManyToManyModal({ close, setSubjects, handleSubmit }) {
  const { data: subjects } = useQuery({
    queryKey: ["subjects"],
    queryFn: getAllSubjectAPI,
  });

  const [selected, setSelected] = useState([]);
  const filtereditem = subjects?.filter((item) => !selected.includes(item));

  useEffect(() => {
    setSubjects(selected);
  }, [selected]);
  return (
    <main className="h-screen w-screen absolute bg-black/70 top-0 left-0 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded-md p-5 w-[500px] h-[400px] flex gap-2 ">
        <div className="border border-gray-400 flex-1 flex flex-col gap-2">
          {filtereditem?.map((item) => (
            <div
              key={item.id}
              className="hover:text-blue-600 px-2 flex justify-between"
            >
              <h1>{item.name}</h1>
              <button
                onClick={() => {
                  setSelected((prev) => [item, ...prev]);
                }}
              >
                add
              </button>
            </div>
          ))}
        </div>
        <div className="border border-gray-400 flex-1 flex flex-col gap-2">
          {selected?.map((item) => (
            <div
              key={item.id}
              className="hover:text-blue-600 px-2 flex justify-between"
            >
              <h1>{item.name}</h1>
              <button
                onClick={() => {
                  setSelected((prev) =>
                    prev.filter((obj) => obj.id !== item.id)
                  );
                }}
              >
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-5">
        <button
          onClick={handleSubmit}
          className="p-2 rounded-md mt-3 text-white font-medium bg-blue-400"
        >
          Submit
        </button>
        <button
          onClick={() => close(false)}
          className="p-2 rounded-md mt-3 text-white font-medium bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </main>
  );
}
