import { BASE_URL } from ".";

export const getAllSubjectAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/subjects/`);

  return await response.json();
};

export const createSectionAPI = async ({ formData, token }) => {
  const response = await fetch(`${BASE_URL}/api/subjects/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  console.log("createSubjectAPI is running");

  return await response.json();
};
