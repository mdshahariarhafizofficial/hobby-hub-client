import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import GroupCard from "../Components/GroupCard/GroupCard";

const Category = () => {
  const data = useLoaderData();
  const [groups, setGroups] = useState(data);
  const {category} = useParams();
  const normalizeCategory = (str) => str.toLowerCase().replace(/[\s&]+/g, '-');

  console.log(category);
  
useEffect(() => {
  const filterGroups = data.filter(
    (group) => normalizeCategory(group.category) === category
  );
  setGroups(filterGroups);
}, [category, data]);

  return (
    <div>
      <div className="mb-5 border-b-2 pb-2 border-gray-300">
        <h2 className="text-5xl font-bold text-center text-secondary dark:text-[#ff946a] capitalize">
          {category}
        </h2>
        <div className="divider divider-primary w-52 mx-auto mb-0"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-40">
        {groups
          .map((group) => (
            <GroupCard key={group._id} group={group}></GroupCard>
          ))}
      </div>
    </div>
  );
};

export default Category;
