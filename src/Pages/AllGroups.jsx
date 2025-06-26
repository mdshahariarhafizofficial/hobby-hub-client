import React, { useState } from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../Components/GroupCard/GroupCard";

const AllGroups = () => {
  const data = useLoaderData();
  const [groups, setGroups] = useState(data);
  const normalizeCategory = (str) => str.toLowerCase().replace(/[\s&]+/g, '-');
  const [sortOrder, setSortOrder] = useState('descending');
// Category Filter
const categoryFilter = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === '') {
        setGroups(data);
    } else {
        const filterGroups = data.filter(group => 
            normalizeCategory(group.category) === selectedCategory
        );
        setGroups(filterGroups);
    }
};

// Status Filter
const statusFilter = (e) => {
    const category = e.target.value;
    console.log(category);
    if (category === "expired") {
        const ExpiredGroups = data.filter(group => new Date(group.date) < new Date());
        setGroups(ExpiredGroups);
    }
    if (category === "active") {
        const ExpiredGroups = data.filter(group => new Date(group.date) >= new Date());
        setGroups(ExpiredGroups);
    }
    if (category === '') {
        setGroups(data)
    }
}

// Sort
const handleOrder = (e) => {
    const value = e.target.value;
    setSortOrder(value)
};

  return (
    <div>
      <div className="mb-5 border-b-2 pb-2 border-gray-300">
        <h2 className="text-5xl font-bold text-center text-secondary dark:text-[#ff946a]">
          All Groups
        </h2>
        <div className="divider divider-primary w-52 mx-auto mb-0"></div>
        <div className="flex justify-between">
            <div>
            {/* Hobby Category Name */}
            <select
                onChange={categoryFilter}
                name="category"
                className="border border-gray-300 py-3 px-2 text-primary font-bold rounded"
                required
            >
                <option value="">Filter by Category</option>

                <option
                className="text-secondary font-bold"
                value="drawing-and-painting"
                >
                Drawing & Painting
                </option>
                <option className="text-secondary font-bold" value="photography">
                Photography
                </option>
                <option className="text-secondary font-bold" value="video-gaming">
                Video Gaming
                </option>
                <option className="text-secondary font-bold" value="fishing">
                Fishing
                </option>
                <option className="text-secondary font-bold" value="running">
                Running
                </option>
                <option className="text-secondary font-bold" value="cooking">
                Cooking
                </option>
                <option className="text-secondary font-bold" value="reading">
                Reading
                </option>
            </select>
            </div>
            {/* Sort */}
            <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-primary font-semibold">Sort by order:</label>
                <form onChange={handleOrder} className="filter">
                <input className="btn btn-square" type="reset" value="×" onClick={() => setSortOrder('descending')} />
                <input defaultValue='ascending' className="btn" type="radio" name="order" aria-label="Ascending"/>
                <input defaultValue='descending' className="btn" type="radio" name="order" aria-label=" Descending"/>
                </form>
            </div>
            <div>
            {/* Status Filter */}
            <select
                onChange={statusFilter}
                name="selectStatus"
                className="border border-gray-300 py-3 px-2 text-primary font-bold rounded"
                required
            >
                <option value="">Select status</option>

                <option
                className="text-secondary font-bold"
                value="active"
                >
                Active
                </option>
                <option className="text-secondary font-bold" value="expired">
                Expired
                </option>
            </select>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-40">
        {groups
          .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (sortOrder === 'ascending') {
                return dateA - dateB;
            }else{
                return dateB - dateA;
            }
          })
          .map((group) => (
            <GroupCard key={group._id} group={group}></GroupCard>
          ))}
      </div>
    </div>
  );
};

export default AllGroups;
