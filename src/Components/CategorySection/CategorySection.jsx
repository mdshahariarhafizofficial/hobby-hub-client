import {
  FaPaintBrush,
  FaCameraRetro,
  FaGamepad,
  FaFish,
  FaRunning,
  FaUtensils,
  FaBook,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router

const categories = [
  { icon: <FaPaintBrush className="text-2xl dark:text-primary hover:text-primary" />, name: "Drawing & Painting", path: "/category/drawing-painting" },
  { icon: <FaCameraRetro className="text-2xl dark:text-primary hover:text-primary" />, name: "Photography", path: "/category/photography" },
  { icon: <FaGamepad className="text-2xl dark:text-primary hover:text-primary" />, name: "Video Gaming", path: "/category/video-gaming" },
  { icon: <FaFish className="text-2xl dark:text-primary hover:text-primary" />, name: "Fishing", path: "/category/fishing" },
  { icon: <FaRunning className="text-2xl dark:text-primary hover:text-primary" />, name: "Running", path: "/category/running" },
  { icon: <FaUtensils className="text-2xl dark:text-primary hover:text-primary" />, name: "Cooking", path: "/category/cooking" },
  { icon: <FaBook className="text-2xl dark:text-primary hover:text-primary" />, name: "Reading", path: "/category/reading" },
];

const CategorySection = () => {
  return (
    <div className="py-15 mt-5 rounded-xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 justify-items-center">
        {categories.map((cat, index) => (
          <Link
            to={cat.path}
            key={index}
            className="flex flex-col items-center group"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full border border-indigo-100 hover:text-primary group-hover:bg-indigo-50 transition">
              {cat.icon}
            </div>
            <span className="mt-2 text-sm font-medium text-center group-hover:text-primary dark:text-white">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
