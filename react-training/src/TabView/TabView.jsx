import TabPanel from './TabPanel.jsx';
import TabBar from './TabBar.jsx';
import tabs from './data.js';
import { useState } from 'react';
const TabView = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const currentTab = tabs.find(({ id }) => id === activeTab);
  return (
    <div>
      <TabBar tabs={tabs} onSelect={setActiveTab} activeTab={activeTab} />
      <TabPanel content={currentTab.content} />
    </div>
  );
};

export default TabView;
