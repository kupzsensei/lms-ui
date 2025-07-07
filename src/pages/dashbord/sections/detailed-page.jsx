import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSectionDetailAPI, updateSectionAPI } from "../../../api/section";
import ManyToManyModal from "./many-to-many-modal";
import { useState } from "react";
import { useAuth } from "sirbenj-jwt-auth-client";

export default function SectionDetailedPage() {
  const [subjectModal, setSubjectModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const { accessToken } = useAuth();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["section-detail"],
    queryFn: () => {
      return getSectionDetailAPI(id);
    },
  });
  const { mutate } = useMutation({
    mutationFn: updateSectionAPI,
    onSuccess: (data) => {
      console.log(data, "success data");
      queryClient.invalidateQueries(["section-detail"]);
      setSubjectModal(false);
    },
  });

  const handleSubmit = () => {
    const formData = {
      id: data.id,
      subjects: selected.map((item) => item.id),
    };
    mutate({ formData, accessToken, id });
  };
  return (
    <main className="flex-1 min-h-0 min-w-0 flex flex-col gap-5">
      <h1 className="font-bold text-2xl">Python Fundamentals</h1>
      <div className="flex-1 flex gap-5 flex-col min-h-0 min-w-0">
        <div className="flex gap-5 justify-between items-center">
          <h1 className="font-bold">Subjects</h1>
          <button onClick={() => setSubjectModal(true)}>add subject</button>
        </div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-left">Subject name</th>
              <th className="text-left">Description</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {data?.subjects.map((subject) => (
              <tr key={subject.id}>
                <td className="text-left">{subject.name}</td>
                <td className="text-left">{subject.description}</td>
                <td>{subject.teacher.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 flex gap-5 flex-col min-h-0 min-w-0">
        <div className="flex gap-5 justify-between items-center">
          <h1 className="font-bold">Students</h1>
          <button>add student</button>
        </div>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-left">Subject name</th>
              <th className="text-left">Description</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {data?.students.map((student) => (
              <tr key={student.id}>
                <td className="text-left">{student.email}</td>
                <td className="text-left">{student.username}</td>
                <td>{student.lastname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {subjectModal && (
        <ManyToManyModal
          handleSubmit={handleSubmit}
          setSubjects={setSelected}
          close={setSubjectModal}
        />
      )}
    </main>
  );
}
