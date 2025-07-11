import React from 'react';
import { DollarSign, TrendingUp, Target, Users, CreditCard, PiggyBank } from 'lucide-react';
import DashboardCard from './DashboardCard';
import Chart from '../Charts/Chart';
import { mockAccounts, mockGoals, mockTransactions, mockBudgets } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const totalBalance = mockAccounts.reduce((sum, account) => sum + account.balance, 0);
  const totalGoals = mockGoals.length;
  const completedGoals = mockGoals.filter(g => g.status === 'completed').length;
  const totalSaved = mockGoals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  
  const recentTransactions = mockTransactions.slice(0, 5);
  
  const spendingByCategory = mockBudgets.map(budget => ({
    label: budget.category,
    value: budget.spent,
    color: budget.status === 'exceeded' ? '#EF4444' : budget.status === 'warning' ? '#F59E0B' : '#10B981'
  }));

  const goalProgress = mockGoals.map(goal => ({
    label: goal.title,
    value: (goal.currentAmount / goal.targetAmount) * 100
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Balance"
          value={`$${totalBalance.toLocaleString()}`}
          icon={DollarSign}
          change="+2.5% from last month"
          changeType="positive"
        />
        <DashboardCard
          title="Active Goals"
          value={totalGoals.toString()}
          icon={Target}
          change={`${completedGoals} completed`}
          changeType="positive"
        />
        <DashboardCard
          title="Total Saved"
          value={`$${totalSaved.toLocaleString()}`}
          icon={PiggyBank}
          change="+8.2% from last month"
          changeType="positive"
        />
        <DashboardCard
          title="Family Members"
          value="3"
          icon={Users}
          change="All active"
          changeType="neutral"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <Chart
            data={spendingByCategory}
            type="pie"
            title="Spending by Category"
          />
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <Chart
            data={goalProgress}
            type="bar"
            title="Goal Progress (%)"
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <CreditCard className={`w-5 h-5 ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Create New Goal
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              Add Transaction
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;