import { Account } from '../../types';

// Mock API for accounts
export const accountsApi = {
  async getAccounts(): Promise<Account[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      {
        id: '1',
        name: 'Family Checking',
        type: 'checking',
        balance: 15750.00,
        currency: 'USD',
        ownerId: '1',
        members: [
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
        ]
      },
      {
        id: '2',
        name: 'Emergency Fund',
        type: 'savings',
        balance: 25000.00,
        currency: 'USD',
        ownerId: '1'
      },
      {
        id: '3',
        name: 'Vacation Fund',
        type: 'shared',
        balance: 8500.00,
        currency: 'USD',
        ownerId: '1',
        members: [
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
        ]
      },
      {
        id: '4',
        name: 'Kids Savings',
        type: 'savings',
        balance: 3200.00,
        currency: 'USD',
        ownerId: '1',
        members: [
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
        ]
      }
    ];
  },

  async getAccountById(id: string): Promise<Account | null> {
    const accounts = await this.getAccounts();
    return accounts.find(account => account.id === id) || null;
  },

  async updateAccountBalance(id: string, amount: number): Promise<Account> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const accounts = await this.getAccounts();
    const account = accounts.find(a => a.id === id);
    if (!account) throw new Error('Account not found');
    
    return { ...account, balance: account.balance + amount };
  }
};