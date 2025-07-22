import React from 'react';
import { 
  Home, 
  Target, 
  Users, 
  Gift, 
  BarChart3, 
  Settings, 
  Bell,
  CreditCard,
  PiggyBank
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'goals', icon: Target, label: 'Goals' },
    { id: 'shared-wallets', icon: Users, label: 'Shared Wallets' },
    { id: 'insights', icon: BarChart3, label: 'Insights' },
    { id: 'rewards', icon: Gift, label: 'Rewards' },
    { id: 'accounts', icon: CreditCard, label: 'Accounts' },
    { id: 'budget', icon: PiggyBank, label: 'Budget' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg h-screen fixed left-0 top-0 z-40">
      <div className="p-6 border-b dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <PiggyBank className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">FamilyBank</h1>
        </div>
        
        {/* Family Members Display */}
        <div className="mt-4 flex items-center space-x-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
              <span className="text-xs text-blue-600 dark:text-blue-400">👨‍👩‍👧‍👦</span>
            </div>
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Johnson Family (4 members)</span>
        </div>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                activeTab === item.id 
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;