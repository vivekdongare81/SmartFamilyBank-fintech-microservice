import React from 'react';
import { Gift, Star, ShoppingCart, Coffee, Plane, CreditCard } from 'lucide-react';
import { mockRewards, userPoints } from '../../data/mockData';

const Rewards: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cashback':
        return CreditCard;
      case 'travel':
        return Plane;
      case 'shopping':
        return ShoppingCart;
      case 'dining':
        return Coffee;
      default:
        return Gift;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      cashback: 'bg-green-100 text-green-800 border-green-200',
      travel: 'bg-blue-100 text-blue-800 border-blue-200',
      shopping: 'bg-purple-100 text-purple-800 border-purple-200',
      dining: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const earnHistory = [
    { date: '2024-12-18', description: 'Grocery Store Purchase', points: 25 },
    { date: '2024-12-17', description: 'Gas Station Purchase', points: 15 },
    { date: '2024-12-16', description: 'Monthly Savings Goal', points: 100 },
    { date: '2024-12-15', description: 'Restaurant Purchase', points: 35 },
    { date: '2024-12-14', description: 'Bill Payment', points: 10 }
  ];

  const redeemHistory = [
    { date: '2024-12-10', description: 'Free Coffee Reward', points: -200 },
    { date: '2024-12-05', description: '5% Cashback Applied', points: -500 },
    { date: '2024-11-28', description: 'Shopping Voucher', points: -750 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Rewards Center</h1>
        <div className="bg-blue-50 px-4 py-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">{userPoints.toLocaleString()} Points</span>
          </div>
        </div>
      </div>

      {/* Points Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Points</p>
              <p className="text-2xl font-bold text-gray-800">{userPoints.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">This Month</p>
              <p className="text-2xl font-bold text-gray-800">185</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Redeemed</p>
              <p className="text-2xl font-bold text-gray-800">1,450</p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Rewards */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Rewards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockRewards.map((reward) => {
            const Icon = getCategoryIcon(reward.category);
            const canRedeem = userPoints >= reward.pointsRequired;
            
            return (
              <div key={reward.id} className={`p-4 rounded-lg border-2 ${
                canRedeem ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <Icon className={`w-6 h-6 ${canRedeem ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(reward.category)}`}>
                    {reward.category}
                  </span>
                </div>
                
                <h4 className="font-semibold text-gray-800 mb-1">{reward.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-800">
                    {reward.pointsRequired} pts
                  </span>
                  <button
                    disabled={!canRedeem}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      canRedeem
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {canRedeem ? 'Redeem' : 'Not Available'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Points History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Points Earned</h3>
          <div className="space-y-3">
            {earnHistory.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <div className="text-green-600 font-semibold">
                  +{item.points}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Points Redeemed</h3>
          <div className="space-y-3">
            {redeemHistory.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{item.description}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <div className="text-red-600 font-semibold">
                  {item.points}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Earn Points */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">How to Earn Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <ShoppingCart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-800">Shopping</h4>
            <p className="text-sm text-gray-600">1 point per $1 spent</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-800">Goal Progress</h4>
            <p className="text-sm text-gray-600">100 points per milestone</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <CreditCard className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-800">Bill Payments</h4>
            <p className="text-sm text-gray-600">10 points per payment</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <Gift className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h4 className="font-medium text-gray-800">Referrals</h4>
            <p className="text-sm text-gray-600">500 points per referral</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;