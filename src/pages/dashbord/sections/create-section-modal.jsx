import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "sirbenj-jwt-auth-client";
import { createSectionAPI } from "../../../api/section";

export default function CreateSectionModal({ close }) {
  const queryClient = useQueryClient();

  const { accessToken } = useAuth();

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
        <h1 className="font-bold text-xl">Add Section</h1>
        <input
          name="name"
          className="p-2 border-gray-400 border rounded-sm"
          type="text"
          placeholder="Enter Section Name"
        />
        <input
          name="school_year"
          className="p-2 border-gray-400 border rounded-sm"
          type="text"
          placeholder="School Year (e.g. 2025-2026)"
        />
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
