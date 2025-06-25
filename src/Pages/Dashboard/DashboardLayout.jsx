import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-base-200 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
