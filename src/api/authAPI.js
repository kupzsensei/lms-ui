import { BASE_URL } from ".";

export const verifyTokenAPi = async (accessToken) => {
  const response = await fetch(`${BASE_URL}/api/auth/verify/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: accessToken }),
  });

  if (!response.ok) {
    return false;
  }

  return true;
};
