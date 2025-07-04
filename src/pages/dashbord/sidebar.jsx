import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-5 border-r border-gray-500 p-5 w-[200px]">
      <h1 className="font-bold text-2xl">LMS</h1>

      <div className="flex flex-col gap-3">
        <NavLink to={"/"}>Dashborad</NavLink>
        {/* <NavLink to={"/"}>My Attendance</NavLink> */}
        <NavLink to={"/sections"}>Sections</NavLink>
        <NavLink to={"/subjects"}>Subjects</NavLink>
        <NavLink to={"/activity"}>Activity</NavLink>
        {/* <NavLink to={"/"}>Dashborad</NavLink> */}
      </div>
    </nav>
  );
}
