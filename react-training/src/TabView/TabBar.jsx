const TabBar = ({ tabs, activeTab, onSelect }) => {
  return (
    <div className="tab-bar">
      {tabs.map(({ id, label }) => (
        <button
          className={id === activeTab ? 'active' : 'not-active'}
          onClick={() => onSelect(id)}
          key={id}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
