import { User, Account, Goal, Transaction, Budget, Reward, Notification } from '../types';

export const mockUsers: User[] = [
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
];

export const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Family Checking',
    type: 'checking',
    balance: 15750.00,
    currency: 'USD',
    ownerId: '1',
    members: mockUsers
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
    members: mockUsers
  }
];

export const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Emma\'s College Fund',
    description: 'Saving for Emma\'s college education',
    targetAmount: 50000,
    currentAmount: 32000,
    deadline: '2028-08-15',
    category: 'education',
    contributors: mockUsers,
    status: 'active',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Family Trip to Europe',
    description: 'Summer vacation to Europe for the whole family',
    targetAmount: 12000,
    currentAmount: 8500,
    deadline: '2025-06-01',
    category: 'travel',
    contributors: mockUsers,
    status: 'active',
    createdAt: '2024-02-01'
  },
  {
    id: '3',
    title: 'Home Renovation',
    description: 'Kitchen and bathroom renovation',
    targetAmount: 30000,
    currentAmount: 15000,
    deadline: '2025-12-31',
    category: 'home',
    contributors: [mockUsers[0], mockUsers[1]],
    status: 'active',
    createdAt: '2024-03-01'
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    amount: -85.50,
    description: 'Grocery Store',
    category: 'Food & Dining',
    date: '2024-12-18',
    type: 'expense',
    accountId: '1',
    userId: '1'
  },
  {
    id: '2',
    amount: 3200.00,
    description: 'Salary Deposit',
    category: 'Income',
    date: '2024-12-17',
    type: 'income',
    accountId: '1',
    userId: '1'
  },
  {
    id: '3',
    amount: -45.00,
    description: 'Gas Station',
    category: 'Transportation',
    date: '2024-12-16',
    type: 'expense',
    accountId: '1',
    userId: '2'
  },
  {
    id: '4',
    amount: -120.00,
    description: 'Utilities Bill',
    category: 'Bills & Utilities',
    date: '2024-12-15',
    type: 'expense',
    accountId: '1',
    userId: '1'
  },
  {
    id: '5',
    amount: 500.00,
    description: 'Vacation Fund Contribution',
    category: 'Transfer',
    date: '2024-12-14',
    type: 'income',
    accountId: '3',
    userId: '2'
  }
];

export const mockBudgets: Budget[] = [
  {
    id: '1',
    category: 'Food & Dining',
    limit: 800,
    spent: 645,
    period: 'monthly',
    status: 'healthy'
  },
  {
    id: '2',
    category: 'Transportation',
    limit: 400,
    spent: 380,
    period: 'monthly',
    status: 'warning'
  },
  {
    id: '3',
    category: 'Entertainment',
    limit: 300,
    spent: 320,
    period: 'monthly',
    status: 'exceeded'
  },
  {
    id: '4',
    category: 'Bills & Utilities',
    limit: 500,
    spent: 450,
    period: 'monthly',
    status: 'healthy'
  }
];

export const mockRewards: Reward[] = [
  {
    id: '1',
    title: '5% Cashback',
    description: 'Get 5% cashback on your next purchase',
    pointsRequired: 500,
    category: 'cashback',
    available: true
  },
  {
    id: '2',
    title: 'Free Coffee',
    description: 'Redeem for a free coffee at partner cafes',
    pointsRequired: 200,
    category: 'dining',
    available: true
  },
  {
    id: '3',
    title: 'Travel Miles',
    description: '1000 airline miles for your next trip',
    pointsRequired: 1000,
    category: 'travel',
    available: true
  },
  {
    id: '4',
    title: 'Shopping Voucher',
    description: '$25 voucher for online shopping',
    pointsRequired: 750,
    category: 'shopping',
    available: true
  }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Budget Alert',
    message: 'You\'ve exceeded your Entertainment budget by $20',
    type: 'warning',
    timestamp: '2024-12-18T10:30:00Z',
    read: false
  },
  {
    id: '2',
    title: 'Goal Achievement',
    message: 'Great job! You\'re 70% towards your Europe trip goal',
    type: 'success',
    timestamp: '2024-12-17T14:20:00Z',
    read: false
  },
  {
    id: '3',
    title: 'New Reward Available',
    message: 'You have enough points to redeem a 5% cashback reward',
    type: 'info',
    timestamp: '2024-12-16T09:15:00Z',
    read: true
  }
];

export const currentUser = mockUsers[0];
export const userPoints = 1250;