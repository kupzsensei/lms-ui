import { BASE_URL } from ".";

export const getSectionAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/sections/`);
  console.log("getSectionAPI is running");

  return await response.json();
};

export const createSectionAPI = async ({ formData, token }) => {
  const response = await fetch(`${BASE_URL}/api/sections/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  console.log("createSectionAPI is running");

  return await response.json();
};
