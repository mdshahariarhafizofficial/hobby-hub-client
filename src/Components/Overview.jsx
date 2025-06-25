import StatCard from "../Components/StatCard";

const Overview = () => {
  const user = { name: "Shahariar", email: "user@example.com" }; // Replace with context or props
  const stats = {
    totalProducts: 100,
    myItems: 15,
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Products" value={stats.totalProducts} />
        <StatCard title="My Items" value={stats.myItems} />
        <StatCard title="Active Users" value={1} />
      </div>
      <div className="bg-white shadow p-5 rounded-lg">
        <h2 className="text-xl font-semibold">Logged-in User Info</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default Overview;
