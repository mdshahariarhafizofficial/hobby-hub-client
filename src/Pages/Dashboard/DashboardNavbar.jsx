// import { useContext } from "react";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";


const DashboardNavbar = () => {
    const {user, handleSingOut} = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-2 rounded-xl mb-5">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
      </div>

      <div className="flex-none gap-3 items-center">
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
            className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <span className="font-semibold">{user?.displayName}</span>
            </li>
            <li>
              <span className="text-sm text-gray-500">{user.email}</span>
            </li>
            <div className="divider my-1" />
            <li>
              <button onClick={handleSingOut} className="btn btn-sm btn-secondary text-white">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
