import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Goals from './components/Goals/Goals';
import SharedWallets from './components/SharedWallets/SharedWallets';
import Insights from './components/Insights/Insights';
import Rewards from './components/Rewards/Rewards';
import Notifications from './components/Notifications/Notifications';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'goals':
        return <Goals />;
      case 'shared-wallets':
        return <SharedWallets />;
      case 'insights':
        return <Insights />;
      case 'rewards':
        return <Rewards />;
      case 'notifications':
        return <Notifications />;
      case 'accounts':
        return <div className="text-center py-12"><p className="text-gray-500">Accounts view coming soon...</p></div>;
      case 'budget':
        return <div className="text-center py-12"><p className="text-gray-500">Budget management coming soon...</p></div>;
      case 'settings':
        return <div className="text-center py-12"><p className="text-gray-500">Settings coming soon...</p></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <Header />
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;