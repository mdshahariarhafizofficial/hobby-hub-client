import { useContext, useEffect, useState } from "react";
import StatCard from "../Components/StatCard";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import { MdOutlineGroups2 } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";
import { LuClockAlert } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import CategorySection from "./CategorySection/CategorySection";

const Overview = () => {
  const {user} = useContext(AuthContext);
  const data = useLoaderData();
  const [myGroups, setMyGroups] = useState(data);
  const [expiredGroup, setExpiredGroup] = useState([]);
  const [activeGroup, setActiveGroup] = useState([]);

    useEffect(()=>{
        const remainingGroups = data.filter(group => group.email === user.email );
        setMyGroups(remainingGroups)
    },[data, user.email])  

    // Expired Group
    useEffect(() => {
      const expiredGroup = data.filter(group => new Date(group?.date) < new Date() );
      setExpiredGroup(expiredGroup);      
    }, [data]);

    // Active Group
    useEffect(() => {
      const activeGroup = data.filter(group => new Date(group?.date) >= new Date() );
      setActiveGroup(activeGroup)
    }, [data]);

  return (
    <div>
      <h1 className="text-3xl text-secondary font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard 
          title="Total Groups" 
          value={data?.length}
          bgColor={'bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800'}
          icon={<MdOutlineGroups2 size={60} color="black" />}
        />
        <StatCard 
          title="My Groups" 
          value={myGroups?.length}
          bgColor={'bg-gradient-to-r from-green-200 via-green-400 to-green-500'}
          icon={<FaLayerGroup size={60} color="black" />} 
        />
        <StatCard 
          title="Expired Group" 
          value={expiredGroup?.length} 
          bgColor={'bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'}
          icon={<LuClockAlert size={60} color="black" />}
        />
        <StatCard 
          title="Active Groups" 
          value={activeGroup?.length} 
          bgColor={'bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500'}
          icon={<FaCheckCircle size={60} color="black" />}
        />

      </div>
      <div className="my-10">
        <CategorySection></CategorySection>
      </div>
      <div className="bg-white shadow p-5 rounded-lg">
        <h2 className="text-xl font-semibold text-secondary">Logged-in User Info</h2>
        <p><strong>Name:</strong> {user?.displayName}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default Overview;
