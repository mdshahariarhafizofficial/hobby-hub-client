import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-base-100 p-5 shadow-md">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="menu space-y-2">
        <li>
          <NavLink to="/dashboard" end className="btn btn-ghost justify-start">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/all-items" className="btn btn-ghost justify-start">All Items</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/add-item" className="btn btn-ghost justify-start">Add Item</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/my-items" className="btn btn-ghost justify-start">My Items</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
