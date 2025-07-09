export const BASE_URL = "https://lms.new.sirbenj.pro";

export const getAllTeacherAPI = async () => {
  const response = await fetch(`${BASE_URL}/api/teachers/`);

  return await response.json();
};
