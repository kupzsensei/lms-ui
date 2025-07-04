import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/login.jsx";
import { AuthProvider } from "sirbenj-jwt-auth-client";
import authConfig from "./authConfig.js";
import Cookies from "js-cookie";
import Dashboard from "./pages/dashbord/index.jsx";
import SectionTab from "./pages/dashbord/sections/index.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SubjectTab from "./pages/dashbord/subjects/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "sections", element: <SectionTab /> },
      { path: "subjects", element: <SubjectTab /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <LoginPage /> },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider config={authConfig}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
