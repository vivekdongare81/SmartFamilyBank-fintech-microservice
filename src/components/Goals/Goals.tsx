import React, { useState } from 'react';
import { Plus, Calendar, DollarSign, Users, Target, Clock } from 'lucide-react';
import { mockGoals, mockUsers } from '../../data/mockData';
import { Goal } from '../../types';

const Goals: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      education: 'bg-blue-100 text-blue-800',
      travel: 'bg-green-100 text-green-800',
      home: 'bg-purple-100 text-purple-800',
      emergency: 'bg-red-100 text-red-800',
      other: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.other;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      paused: 'bg-yellow-100 text-yellow-800'
    };
    return colors[status as keyof typeof colors] || colors.active;
  };

  const calculateProgress = (goal: Goal) => {
    return Math.min((goal.currentAmount / goal.targetAmount) * 100, 100);
  };

  const calculateTimeLeft = (deadline: string) => {
    const now = new Date();
    const end = new Date(deadline);
    const diffTime = end.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return '1 day left';
    if (diffDays < 30) return `${diffDays} days left`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months left`;
    return `${Math.floor(diffDays / 365)} years left`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Financial Goals</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create Goal</span>
        </button>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockGoals.map((goal) => {
          const progress = calculateProgress(goal);
          const timeLeft = calculateTimeLeft(goal.deadline);
          
          return (
            <div
              key={goal.id}
              className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedGoal(goal)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(goal.category)}`}>
                  {goal.category}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                  {goal.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">{goal.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{goal.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Progress</span>
                  <span className="text-sm font-medium text-gray-800">{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-800 font-medium">
                    ${goal.currentAmount.toLocaleString()}
                  </span>
                  <span className="text-gray-500">
                    of ${goal.targetAmount.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{timeLeft}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">{goal.contributors.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Goal Details Modal */}
      {selectedGoal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedGoal.title}</h2>
                <button
                  onClick={() => setSelectedGoal(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-500">Target Amount</p>
                        <p className="text-lg font-semibold text-gray-800">
                          ${selectedGoal.targetAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm text-gray-500">Current Amount</p>
                        <p className="text-lg font-semibold text-gray-800">
                          ${selectedGoal.currentAmount.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <div>
                        <p className="text-sm text-gray-500">Deadline</p>
                        <p className="text-lg font-semibold text-gray-800">
                          {new Date(selectedGoal.deadline).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="text-sm text-gray-500">Time Left</p>
                        <p className="text-lg font-semibold text-gray-800">
                          {calculateTimeLeft(selectedGoal.deadline)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Contributors</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedGoal.contributors.map((contributor) => (
                      <div key={contributor.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src={contributor.avatar}
                          alt={contributor.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-gray-800">{contributor.name}</p>
                          <p className="text-sm text-gray-500 capitalize">{contributor.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Contribute
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                    Edit Goal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Goal Form */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-lg w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Goal</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Goal Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter goal title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                    placeholder="Describe your goal"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Target Amount
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="education">Education</option>
                      <option value="travel">Travel</option>
                      <option value="home">Home</option>
                      <option value="emergency">Emergency</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    Create Goal
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

export default Goals;