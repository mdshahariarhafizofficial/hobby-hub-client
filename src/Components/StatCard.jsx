import CountUp from "react-countup";

const StatCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className={`${bgColor} text-center stats shadow w-full bg-base-100`}>
      <div className="stat">
        <div className="mx-auto">{icon}</div>
        <div className="stat-title text-black font-bold text-xl">{title}</div>
        <div className="stat-value text-black font-extrabold">
          <CountUp end={value} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
