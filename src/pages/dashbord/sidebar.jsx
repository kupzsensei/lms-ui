import { NavLink } from "react-router-dom";
import { useAuth } from "sirbenj-jwt-auth-client";

export default function Sidebar() {
  const { getRoles } = useAuth();
  console.log(getRoles(), "roles");
  return (
    <nav className="flex flex-col gap-5 border-r border-gray-500 p-5 w-[200px]">
      <h1 className="font-bold text-2xl">LMS</h1>

      <div className="flex flex-col gap-3">
        <NavLink to={"/"}>Dashborad</NavLink>
        {/* <NavLink to={"/"}>My Attendance</NavLink> */}
        <NavLink to={"/sections"}>Sections</NavLink>
        <NavLink to={"/subjects"}>Subjects</NavLink>
        {["iAmATeacher"].includes("Teacher") ? (
          <NavLink to={"/subjects"}>Activity</NavLink>
        ) : null}
        {/* <NavLink to={"/"}>Dashborad</NavLink> */}
      </div>
    </nav>
  );
}
