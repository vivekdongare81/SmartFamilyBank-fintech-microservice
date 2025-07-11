import { Goal } from '../../types';

// Mock API for goals
export const goalsApi = {
  async getGoals(): Promise<Goal[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      {
        id: '1',
        title: 'Emma\'s College Fund',
        description: 'Saving for Emma\'s college education at Stanford University',
        targetAmount: 50000,
        currentAmount: 32000,
        deadline: '2028-08-15',
        category: 'education',
        contributors: [
          {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            role: 'owner',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          },
          {
            id: '2',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            role: 'co-owner',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          }
        ],
        status: 'active',
        createdAt: '2024-01-15'
      },
      {
        id: '2',
        title: 'Family Trip to Europe',
        description: 'Summer vacation to Europe for the whole family - visiting Paris, Rome, and Barcelona',
        targetAmount: 12000,
        currentAmount: 8500,
        deadline: '2025-06-01',
        category: 'travel',
        contributors: [
          {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            role: 'owner',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          },
          {
            id: '2',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            role: 'co-owner',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          },
          {
            id: '3',
            name: 'Emma Johnson',
            email: 'emma@example.com',
            role: 'member',
            avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          }
        ],
        status: 'active',
        createdAt: '2024-02-01'
      },
      {
        id: '3',
        title: 'Home Renovation',
        description: 'Kitchen and bathroom renovation with modern appliances and fixtures',
        targetAmount: 30000,
        currentAmount: 15000,
        deadline: '2025-12-31',
        category: 'home',
        contributors: [
          {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            role: 'owner',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          },
          {
            id: '2',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            role: 'co-owner',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          }
        ],
        status: 'active',
        createdAt: '2024-03-01'
      },
      {
        id: '4',
        title: 'Emergency Fund',
        description: '6 months of family expenses for financial security',
        targetAmount: 25000,
        currentAmount: 18500,
        deadline: '2025-03-01',
        category: 'emergency',
        contributors: [
          {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            role: 'owner',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          },
          {
            id: '2',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            role: 'co-owner',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          }
        ],
        status: 'active',
        createdAt: '2024-01-01'
      },
      {
        id: '5',
        title: 'New Car Fund',
        description: 'Saving for a family-friendly SUV',
        targetAmount: 35000,
        currentAmount: 12000,
        deadline: '2026-01-01',
        category: 'other',
        contributors: [
          {
            id: '1',
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            role: 'owner',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          },
          {
            id: '2',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            role: 'co-owner',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
          }
        ],
        status: 'active',
        createdAt: '2024-04-01'
      }
    ];
  },

  async createGoal(goal: Omit<Goal, 'id' | 'createdAt'>): Promise<Goal> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      ...goal,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0]
    };
  },

  async updateGoal(id: string, updates: Partial<Goal>): Promise<Goal> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const goals = await this.getGoals();
    const goal = goals.find(g => g.id === id);
    if (!goal) throw new Error('Goal not found');
    
    return { ...goal, ...updates };
  }
};