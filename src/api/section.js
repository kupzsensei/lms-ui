import { BASE_URL } from ".";

export const getSectionAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/sections/`);
  console.log("getSectionAPI is running");

  return await response.json();
};

export const getSectionDetailAPI = async (id) => {
  const response = await fetch(`${BASE_URL}/api/sections/${id}`);
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

export const updateSectionAPI = async ({ formData, accessToken, id }) => {
  const response = await fetch(`${BASE_URL}/api/sections/${id}/`, {
    method: "PATCH",
    headers: {
      //   Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  //   console.log("update section is running", await response.json());

  return await response.json();
};
