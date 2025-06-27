import { NavLink } from "react-router-dom";
import logo from '../assets/HobbyHubLogo.png';
import { Link } from "react-router";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { RiApps2AddLine, RiHandCoinLine } from "react-icons/ri";
const Sidebar = () => {
    const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${
      isActive
        ? "bg-orange-100 text-orange-600 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;
  return (
    <div className="w-64 bg-base-100 p-5 shadow-md">
      <Link to='/'>
      <img className="w-30 mb-6 mt-4 ml-4" src={logo} alt="" />
      </Link>
      {/* <h2 className="text-2xl font-bold mb-6">Dashboard</h2> */}
      <ul className="space-y-2">
        <li>
          <NavLink to="/dashboard" end className={linkClass}>
          <MdOutlineContentPasteSearch size={30} />
          Overview</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/all-groups" className={linkClass}>
          <GrGroup size={30} />
          All Groups</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/add-group" className={linkClass}>
          <RiApps2AddLine size={30} />
          Add Group</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/my-groups" className={linkClass}>
          <RiHandCoinLine size={30} />
          My Groups</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
