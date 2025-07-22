import { User } from '../../types';

// Mock API for users
export const usersApi = {
  async getUsers(): Promise<User[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
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
      },
      {
        id: '4',
        name: 'Alex Johnson',
        email: 'alex@example.com',
        role: 'member',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ];
  },

  async getUserById(id: string): Promise<User | null> {
    const users = await this.getUsers();
    return users.find(user => user.id === id) || null;
  },

  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const users = await this.getUsers();
    const user = users.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    
    return { ...user, ...updates };
  }
};