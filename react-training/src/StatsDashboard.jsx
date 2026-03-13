const StatBox = ({ label = 'No Label', value = 0, unit = 'total' }) => {
  return (
    <div className="stat-box">
      <h3>{label}</h3>
      <p>{value}</p>
      <span>{unit}</span>
    </div>
  );
};

const StatsDashboard = () => {
  return (
    <div className="stats-dashboard">
      <StatBox label="Total Users" value={10} unit="all time" />
      <StatBox label="Active Sessions" value={4} />
      <StatBox label="Revenue" value={8400} unit="this month" />
    </div>
  );
};

export default StatsDashboard;
