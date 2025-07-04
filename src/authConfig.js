import { BASE_URL } from "./api";
import Cookies from "js-cookie";
import { verifyTokenAPi } from "./api/authAPI";

const cookieStorageAdapter = {
  getItem: (key) => Cookies.get(key),
  setItem: (key, value) =>
    Cookies.set(key, value, { expires: 7, secure: true, sameSite: "strict" }),
  removeItem: (key) => Cookies.remove(key),
};

const authConfig = {
  loginApiConfig: {
    url: `${BASE_URL}/api/auth/login/`,
    method: "POST",
    // Map your API response to extract tokens
    responseMapping: {
      accessToken: "access", // e.g., if your response is { data: { accessToken: '...' } }
      refreshToken: "refresh",
    },
  },
  refreshApiConfig: {
    url: `${BASE_URL}/api/auth/refresh/`,
    method: "POST",
    responseMapping: {
      newAccessToken: "access", // e.g., if your response is { token: '...' }
      newRefreshToken: "refreshToken",
    },
  },
  //   verifyApiConfig: {
  //     url: `${BASE_URL}/api/auth/verify/`,
  //     method: "POST",
  //     responseMapping: {
  //       isValid: "status.success", // e.g., if your response is { status: { success: true } }
  //     },
  //   },
  storage: cookieStorageAdapter,
  onVerify: verifyTokenAPi,

  // ... other configurations like storage, accessTokenKey, etc.
};

export default authConfig;
