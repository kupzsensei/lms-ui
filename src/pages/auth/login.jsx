import { useRef } from "react";
import { useAuth } from "sirbenj-jwt-auth-client";

export default function LoginPage() {
  const { login } = useAuth();
  const formRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });

    console.log(res);
  };
  return (
    <main className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <form
        onSubmit={handleLogin}
        ref={formRef}
        className="p-5 border border-gray-500 shadow-sm flex flex-col gap-3"
      >
        <h1 className="text-2xl font-bold">Welcome to LMS</h1>
        <h1 className="font-xl font-bold text-gray-700">LOGIN</h1>
        <input
          ref={usernameRef}
          type="text"
          className="p-2 rounded-sm border border-gray-500 w-[300px]"
          placeholder="username"
          name="username"
        />
        <input
          ref={passwordRef}
          type="text"
          className="p-2 rounded-sm border border-gray-500 w-[300px]"
          placeholder="password"
          name="password"
        />
        <input
          className="p-2 font-bold rounded-sm border border-gray-500 w-[300px]"
          type="submit"
          value={"signin"}
        />
      </form>
    </main>
  );
}
