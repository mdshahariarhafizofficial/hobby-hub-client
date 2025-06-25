const StatCard = ({ title, value }) => {
  return (
    <div className="stats shadow w-full bg-base-100">
      <div className="stat">
        <div className="stat-title">{title}</div>
        <div className="stat-value text-primary">{value}</div>
      </div>
    </div>
  );
};

export default StatCard;
