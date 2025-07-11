import React, { useState } from 'react';
import { Plus, CreditCard, Eye, EyeOff, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockAccounts, mockTransactions } from '../../data/mockData';
import { Account, Transaction } from '../../types';

const Accounts: React.FC = () => {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [showBalance, setShowBalance] = useState<{ [key: string]: boolean }>({});
  const [showCreateForm, setShowCreateForm] = useState(false);

  const toggleBalanceVisibility = (accountId: string) => {
    setShowBalance(prev => ({
      ...prev,
      [accountId]: !prev[accountId]
    }));
  };

  const getAccountTransactions = (accountId: string): Transaction[] => {
    return mockTransactions.filter(t => t.accountId === accountId).slice(0, 10);
  };

  const getAccountTypeColor = (type: string) => {
    const colors = {
      checking: 'bg-blue-100 text-blue-800 border-blue-200',
      savings: 'bg-green-100 text-green-800 border-green-200',
      shared: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[type as keyof typeof colors] || colors.checking;
  };

  const getAccountTypeIcon = (type: string) => {
    switch (type) {
      case 'shared':
        return Users;
      case 'savings':
        return TrendingUp;
      default:
        return CreditCard;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Accounts</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Account</span>
        </button>
      </div>

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockAccounts.map((account) => {
          const Icon = getAccountTypeIcon(account.type);
          const isBalanceVisible = showBalance[account.id];
          const transactions = getAccountTransactions(account.id);
          const recentTransaction = transactions[0];
          
          return (
            <div
              key={account.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedAccount(account)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">{account.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getAccountTypeColor(account.type)}`}>
                      {account.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleBalanceVisibility(account.id);
                  }}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {isBalanceVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Balance</span>
                  <span className="text-xl font-bold text-gray-800 dark:text-white">
                    {isBalanceVisible ? `$${account.balance.toLocaleString()}` : '••••••'}
                  </span>
                </div>

                {account.members && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Members</span>
                    <div className="flex -space-x-2">
                      {account.members.slice(0, 3).map((member, index) => (
                        <img
                          key={member.id}
                          src={member.avatar}
                          alt={member.name}
                          className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"
                          style={{ zIndex: 10 - index }}
                        />
                      ))}
                      {account.members.length > 3 && (
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 border-2 border-white dark:border-gray-800 flex items-center justify-center">
                          <span className="text-xs text-gray-600 dark:text-gray-300">+{account.members.length - 3}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {recentTransaction && (
                  <div className="pt-3 border-t dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          recentTransaction.type === 'income' ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
                        }`}>
                          {recentTransaction.type === 'income' ? 
                            <ArrowUpRight className="w-3 h-3 text-green-600 dark:text-green-400" /> : 
                            <ArrowDownRight className="w-3 h-3 text-red-600 dark:text-red-400" />
                          }
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 dark:text-white">{recentTransaction.description}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{recentTransaction.date}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-semibold ${
                        recentTransaction.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {recentTransaction.type === 'income' ? '+' : ''}${Math.abs(recentTransaction.amount).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Account Details Modal */}
      {selectedAccount && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{selectedAccount.name}</h2>
                    <p className="text-gray-500 dark:text-gray-400 capitalize">{selectedAccount.type} Account</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedAccount(null)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Account Balance</h3>
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        ${selectedAccount.balance.toLocaleString()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
                        <p className="text-lg font-semibold text-gray-800 dark:text-white">
                          ${selectedAccount.balance.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Account Type</p>
                        <p className="text-lg font-semibold text-gray-800 dark:text-white capitalize">
                          {selectedAccount.type}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Transactions</h3>
                    <div className="space-y-3">
                      {getAccountTransactions(selectedAccount.id).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === 'income' ? 'bg-green-100 dark:bg-green-900/20' : 'bg-red-100 dark:bg-red-900/20'
                            }`}>
                              {transaction.type === 'income' ? 
                                <ArrowUpRight className="w-5 h-5 text-green-600 dark:text-green-400" /> : 
                                <ArrowDownRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                              }
                            </div>
                            <div>
                              <p className="font-medium text-gray-800 dark:text-white">{transaction.description}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.category} • {transaction.date}</p>
                            </div>
                          </div>
                          <div className={`font-semibold ${
                            transaction.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                          }`}>
                            {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {selectedAccount.members && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Account Members</h3>
                      <div className="space-y-3">
                        {selectedAccount.members.map((member) => (
                          <div key={member.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-gray-800 dark:text-white">{member.name}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{member.role}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Transfer Money
                    </button>
                    <button className="w-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
                      View Statements
                    </button>
                    <button className="w-full bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
                      Account Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Account Form */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Create New Account</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Account Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="e.g., Emergency Fund"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Account Type
                  </label>
                  <select className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="checking">Checking</option>
                    <option value="savings">Savings</option>
                    <option value="shared">Shared</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Initial Balance
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="0.00"
                  />
                </div>
                <div className="flex space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="flex-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Account
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

export default Accounts;