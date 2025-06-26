// import { useContext } from "react";
import { useContext } from "react";
import { FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import { MdDashboard, MdMailOutline, MdOutlineLogout } from "react-icons/md";

const DashboardNavbar = () => {
    const {user, handleSingOut} = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-2 rounded-xl mb-5">
      <div className="flex-1">
        <h2 className="flex items-center gap-1 text-2xl font-bold text-primary"> <span className="hidden md:flex"><MdDashboard size={50}></MdDashboard></span> Dashboard</h2>
      </div>

      <div className="flex-none gap-3 items-center flex">
        <h2 className="hidden md:block">{user?.displayName}</h2>
        {/* You can add notification icon etc. here */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user.photoURL ? (
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            ) : (
              <FaUserCircle className="text-3xl text-gray-600" />
            )}
          </div>

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-auto space-y-3"
          >
            <li>
              <span className="font-semibold text-secondary"><FaRegUserCircle size={20} /> {user?.displayName}</span>
            </li>
            <li>
              <span className="text-sm text-gray-500"><MdMailOutline size={20} /> {user.email}</span>
            </li>
            <div className="divider my-1" />
            <li>
              <button onClick={handleSingOut} className="btn btn-sm bg-red-500 text-white text-lg font-medium py-5"><MdOutlineLogout size={22} /> Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
