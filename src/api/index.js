export const BASE_URL = "http://127.0.0.1:8000";

export const getAllTeacherAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/teachers/`);

  return await response.json();
};
