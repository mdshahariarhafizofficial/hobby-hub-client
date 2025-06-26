import { Outlet, NavLink } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-base-200 p-6">
        <DashboardNavbar></DashboardNavbar>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
