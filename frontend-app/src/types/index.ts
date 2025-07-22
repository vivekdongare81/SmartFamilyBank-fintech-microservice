export interface User {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'co-owner' | 'member';
  avatar?: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'checking' | 'savings' | 'shared';
  balance: number;
  currency: string;
  ownerId: string;
  members?: User[];
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: 'education' | 'travel' | 'home' | 'emergency' | 'other';
  contributors: User[];
  status: 'active' | 'completed' | 'paused';
  createdAt: string;
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
  type: 'income' | 'expense';
  accountId: string;
  userId: string;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
  period: 'monthly' | 'weekly';
  status: 'healthy' | 'warning' | 'exceeded';
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsRequired: number;
  category: 'cashback' | 'travel' | 'shopping' | 'dining';
  image?: string;
  available: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: string;
  read: boolean;
}