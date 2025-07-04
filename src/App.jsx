import { Outlet } from "react-router-dom";
import Sidebar from "./pages/dashbord/sidebar";

function App() {
  return (
    <main className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-0 min-w-0 p-5">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
