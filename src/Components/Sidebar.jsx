import { NavLink } from "react-router-dom";
import logo from '../assets/HobbyHubLogo.png';
const Sidebar = () => {
    const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200 ${
      isActive
        ? "bg-orange-100 text-orange-600 font-semibold"
        : "text-gray-700 hover:bg-gray-100"
    }`;
  return (
    <div className="w-64 bg-base-100 p-5 shadow-md">
      <img className="w-30 mb-6" src={logo} alt="" />
      {/* <h2 className="text-2xl font-bold mb-6">Dashboard</h2> */}
      <ul className="space-y-2">
        <li>
          <NavLink to="/dashboard" end className={linkClass}>Overview</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/all-items" className={linkClass}>All Items</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/add-item" className={linkClass}>Add Item</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/my-items" className={linkClass}>My Items</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
