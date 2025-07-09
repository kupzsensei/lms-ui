import { BASE_URL } from ".";

export const getSectionAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/sections/`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUyMDA3ODc2LCJpYXQiOjE3NTE5MjE0NzYsImp0aSI6IjRhZDdlY2NlYThiNDQ1NjJiOTNlYTNjNDhlMzBlZDBhIiwidXNlcl9pZCI6MiwidXNlcm5hbWUiOiJyYWxwIiwiZS1tYWlsIjoicmFscEBnbWFpbC5jb20iLCJsYXN0bmFtZSI6IkJlcm5hcmRvIiwicm9sZXMiOlsiVGVhY2hlciJdLCJwZXJzbWlzc2lvbnMiOlsic3ViamVjdC5kZWxldGVfc3ViamVjdCJdfQ.QzTNuqd_mGdin7t4_DdvNRnV5S__hSTYAPOLqUD1uok",
      "Content-Type": "application/json",
    },
  });
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
      // Authorization: `Bearer ${accessToken}`,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUyMDA3ODc2LCJpYXQiOjE3NTE5MjE0NzYsImp0aSI6IjRhZDdlY2NlYThiNDQ1NjJiOTNlYTNjNDhlMzBlZDBhIiwidXNlcl9pZCI6MiwidXNlcm5hbWUiOiJyYWxwIiwiZS1tYWlsIjoicmFscEBnbWFpbC5jb20iLCJsYXN0bmFtZSI6IkJlcm5hcmRvIiwicm9sZXMiOlsiVGVhY2hlciJdLCJwZXJzbWlzc2lvbnMiOlsic3ViamVjdC5kZWxldGVfc3ViamVjdCJdfQ.QzTNuqd_mGdin7t4_DdvNRnV5S__hSTYAPOLqUD1uok",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  //   console.log("update section is running", await response.json());

  return await response.json();
};
