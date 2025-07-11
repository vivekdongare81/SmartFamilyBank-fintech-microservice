import React, { useState } from 'react';
import { Users, Plus, DollarSign, Calendar, Settings, UserPlus } from 'lucide-react';
import { mockAccounts, mockUsers } from '../../data/mockData';

const SharedWallets: React.FC = () => {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const sharedWallets = mockAccounts.filter(account => account.type === 'shared');

  const contributions = [
    { userId: '1', amount: 5000, percentage: 58.8 },
    { userId: '2', amount: 3000, percentage: 35.3 },
    { userId: '3', amount: 500, percentage: 5.9 }
  ];

  const transactions = [
    { id: '1', date: '2024-12-18', description: 'Hotel Booking', amount: -450, userId: '1' },
    { id: '2', date: '2024-12-17', description: 'Flight Tickets', amount: -1200, userId: '2' },
    { id: '3', date: '2024-12-16', description: 'Monthly Contribution', amount: 500, userId: '3' },
    { id: '4', date: '2024-12-15', description: 'Travel Insurance', amount: -150, userId: '1' },
    { id: '5', date: '2024-12-14', description: 'Monthly Contribution', amount: 1000, userId: '1' }
  ];

  const getUserById = (userId: string) => mockUsers.find(u => u.id === userId);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Shared Wallets</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create Wallet</span>
        </button>
      </div>

      {/* Shared Wallets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sharedWallets.map((wallet) => (
          <div
            key={wallet.id}
            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedWallet(wallet.id)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{wallet.name}</h3>
                  <p className="text-sm text-gray-500">{wallet.type}</p>
                </div>
              </div>
              <Settings className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Balance</span>
                <span className="text-lg font-bold text-gray-800">
                  ${wallet.balance.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Members</span>
                <div className="flex -space-x-2">
                  {wallet.members?.slice(0, 3).map((member, index) => (
                    <img
                      key={member.id}
                      src={member.avatar}
                      alt={member.name}
                      className="w-6 h-6 rounded-full border-2 border-white"
                      style={{ zIndex: 10 - index }}
                    />
                  ))}
                  {wallet.members && wallet.members.length > 3 && (
                    <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-gray-600">+{wallet.members.length - 3}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Last Activity</span>
                  <span className="text-sm text-gray-800">2 days ago</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wallet Details Modal */}
      {selectedWallet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Vacation Fund</h2>
                <button
                  onClick={() => setSelectedWallet(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Wallet Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">Wallet Overview</h3>
                      <span className="text-2xl font-bold text-blue-600">$8,500</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Total Contributions</p>
                        <p className="text-lg font-semibold text-gray-800">$8,500</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Spent</p>
                        <p className="text-lg font-semibold text-gray-800">$1,800</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
                    <div className="space-y-3">
                      {transactions.map((transaction) => {
                        const user = getUserById(transaction.userId);
                        return (
                          <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <img
                                src={user?.avatar}
                                alt={user?.name}
                                className="w-8 h-8 rounded-full"
                              />
                              <div>
                                <p className="font-medium text-gray-800">{transaction.description}</p>
                                <p className="text-sm text-gray-500">{user?.name} • {transaction.date}</p>
                              </div>
                            </div>
                            <div className={`font-semibold ${
                              transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Members & Contributions */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">Members</h3>
                      <button className="text-blue-600 hover:text-blue-700">
                        <UserPlus className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="space-y-3">
                      {contributions.map((contribution) => {
                        const user = getUserById(contribution.userId);
                        return (
                          <div key={contribution.userId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <img
                                src={user?.avatar}
                                alt={user?.name}
                                className="w-8 h-8 rounded-full"
                              />
                              <div>
                                <p className="font-medium text-gray-800">{user?.name}</p>
                                <p className="text-sm text-gray-500 capitalize">{user?.role}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-gray-800">
                                ${contribution.amount.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-500">{contribution.percentage}%</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Add Money
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                      Request Money
                    </button>
                    <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                      Wallet Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Wallet Form */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-lg w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Shared Wallet</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Wallet Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Family Emergency Fund"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Describe the purpose of this shared wallet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Initial Amount
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Invite Members
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email addresses"
                  />
                </div>
                <div className="flex space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Wallet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SharedWallets;