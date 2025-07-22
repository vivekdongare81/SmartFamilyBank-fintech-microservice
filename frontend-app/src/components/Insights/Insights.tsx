import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, DollarSign, Calendar } from 'lucide-react';
import Chart from '../Charts/Chart';
import { mockTransactions, mockBudgets } from '../../data/mockData';

const Insights: React.FC = () => {
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  const spendingByCategory = mockBudgets.map(budget => ({
    label: budget.category,
    value: budget.spent
  }));

  const monthlyTrends = [
    { label: 'Jan', value: 2800 },
    { label: 'Feb', value: 3200 },
    { label: 'Mar', value: 2900 },
    { label: 'Apr', value: 3400 },
    { label: 'May', value: 3100 },
    { label: 'Jun', value: 3600 }
  ];

  const insights = [
    {
      id: 1,
      title: 'Entertainment Budget Alert',
      description: 'You\'ve exceeded your entertainment budget by $20 this month. Consider adjusting your spending habits.',
      type: 'warning',
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 2,
      title: 'Savings Goal Progress',
      description: 'Great job! You\'re ahead of schedule on your Europe trip savings goal.',
      type: 'success',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      title: 'Monthly Spending Trend',
      description: 'Your spending has increased by 15% compared to last month. Review your transactions.',
      type: 'info',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 4,
      title: 'Recurring Payment Due',
      description: 'Your monthly utility bill of $120 is due in 3 days.',
      type: 'reminder',
      icon: Calendar,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const recommendations = [
    {
      title: 'Optimize Food Spending',
      description: 'You could save $200/month by reducing dining out by 2 times per week.',
      potential: '$200/month',
      difficulty: 'Easy'
    },
    {
      title: 'High-Yield Savings',
      description: 'Move your emergency fund to a high-yield savings account to earn 4.5% APY.',
      potential: '$1,125/year',
      difficulty: 'Easy'
    },
    {
      title: 'Subscription Audit',
      description: 'Cancel unused subscriptions. You have 3 subscriptions you haven\'t used in 3 months.',
      potential: '$45/month',
      difficulty: 'Easy'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Spending Insights</h1>
        <div className="text-sm text-gray-500">
          {currentMonth}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Spent</p>
              <p className="text-2xl font-bold text-gray-800">$3,245</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingDown className="w-4 h-4 mr-1" />
                5% less than last month
              </p>
            </div>
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Avg. Daily Spending</p>
              <p className="text-2xl font-bold text-gray-800">$108</p>
              <p className="text-sm text-red-600 flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                12% more than last month
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Budget Utilized</p>
              <p className="text-2xl font-bold text-gray-800">78%</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                Within budget
              </p>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
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
            data={monthlyTrends}
            type="bar"
            title="Monthly Spending Trends"
          />
        </div>
      </div>

      {/* Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Smart Insights</h3>
          <div className="space-y-4">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <div key={insight.id} className={`p-4 rounded-lg ${insight.bgColor}`}>
                  <div className="flex items-start space-x-3">
                    <Icon className={`w-5 h-5 ${insight.color} mt-0.5`} />
                    <div>
                      <h4 className="font-medium text-gray-800">{insight.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommendations</h3>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{rec.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{rec.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-sm text-green-600 font-medium">
                        Save {rec.potential}
                      </span>
                      <span className="text-sm text-gray-500">
                        {rec.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className="ml-4 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;