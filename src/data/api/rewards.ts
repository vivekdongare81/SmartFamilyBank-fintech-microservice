import { Reward } from '../../types';

// Mock API for rewards
export const rewardsApi = {
  async getRewards(): Promise<Reward[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      {
        id: '1',
        title: '5% Cashback',
        description: 'Get 5% cashback on your next purchase at participating retailers',
        pointsRequired: 500,
        category: 'cashback',
        image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        available: true
      },
      {
        id: '2',
        title: 'Free Coffee',
        description: 'Redeem for a free coffee at partner cafes including Starbucks and local shops',
        pointsRequired: 200,
        category: 'dining',
        image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        available: true
      },
      {
        id: '3',
        title: 'Travel Miles',
        description: '1000 airline miles for your next trip with major airlines',
        pointsRequired: 1000,
        category: 'travel',
        image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        available: true
      },
      {
        id: '4',
        title: 'Shopping Voucher',
        description: '$25 voucher for online shopping at Amazon, Target, and more',
        pointsRequired: 750,
        category: 'shopping',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        available: true
      },
      {
        id: '5',
        title: '10% Cashback',
        description: 'Premium cashback reward for high-value purchases',
        pointsRequired: 1200,
        category: 'cashback',
        image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        available: true
      },
      {
        id: '6',
        title: 'Restaurant Discount',
        description: '20% off at premium restaurants in your area',
        pointsRequired: 600,
        category: 'dining',
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        available: true
      },
      {
        id: '7',
        title: 'Hotel Stay Credit',
        description: '$100 credit towards hotel bookings worldwide',
        pointsRequired: 2000,
        category: 'travel',
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        available: false
      },
      {
        id: '8',
        title: 'Electronics Discount',
        description: '15% off on electronics and gadgets',
        pointsRequired: 900,
        category: 'shopping',
        image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        available: true
      }
    ];
  },

  async redeemReward(rewardId: string, userId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock redemption logic
    return true;
  }
};