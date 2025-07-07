import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "sirbenj-jwt-auth-client";
import { createSectionAPI } from "../../../api/section";
import { getAllTeacherAPI } from "../../../api";

export default function CreateSubjectModal({ close }) {
  const queryClient = useQueryClient();

  const { accessToken } = useAuth();

  const { data: teachers } = useQuery({
    queryKey: ["teachers"],
    queryFn: getAllTeacherAPI,
  });

  const { mutate: createSection } = useMutation({
    mutationFn: createSectionAPI,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["sections"]);
      close(false);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    createSection({ formData, token: accessToken });
  };
  return (
    <div className="absolute w-screen gap-5 h-screen bg-black/70 left-0 top-0 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 p-5 w-[300] bg-white shadow-md"
      >
        <h1 className="font-bold text-xl">Add subject</h1>
        <input
          name="name"
          className="p-2 border-gray-400 border rounded-sm"
          type="text"
          placeholder="Enter subject name"
        />
        <input
          name="description"
          className="p-2 border-gray-400 border rounded-sm"
          type="text"
          placeholder="Description"
        />
        <select
          name="teacher"
          className="p-2 border-gray-400 border rounded-sm"
        >
          {teachers?.map((item) => (
            <option value={item.id}>{item.username}</option>
          ))}
        </select>
        <input
          type="submit"
          value={"submit"}
          className="p-2 text-white font-medium bg-green-400 rounded-sm"
        />
      </form>
      <button
        onClick={() => close(false)}
        className="p-2 text-white font-bold bg-red-500"
      >
        cancel
      </button>
    </div>
  );
}
