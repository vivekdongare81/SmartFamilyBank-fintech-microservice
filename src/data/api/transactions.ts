import { Transaction } from '../../types';

// Mock API for transactions
export const transactionsApi = {
  async getTransactions(): Promise<Transaction[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      {
        id: '1',
        amount: -85.50,
        description: 'Whole Foods Market',
        category: 'Food & Dining',
        date: '2024-12-18',
        type: 'expense',
        accountId: '1',
        userId: '1'
      },
      {
        id: '2',
        amount: 3200.00,
        description: 'Salary Deposit - Tech Corp',
        category: 'Income',
        date: '2024-12-17',
        type: 'income',
        accountId: '1',
        userId: '1'
      },
      {
        id: '3',
        amount: -45.00,
        description: 'Shell Gas Station',
        category: 'Transportation',
        date: '2024-12-16',
        type: 'expense',
        accountId: '1',
        userId: '2'
      },
      {
        id: '4',
        amount: -120.00,
        description: 'Pacific Gas & Electric',
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
      },
      {
        id: '6',
        amount: -75.25,
        description: 'Target Store',
        category: 'Shopping',
        date: '2024-12-13',
        type: 'expense',
        accountId: '1',
        userId: '1'
      },
      {
        id: '7',
        amount: -32.50,
        description: 'Netflix Subscription',
        category: 'Entertainment',
        date: '2024-12-12',
        type: 'expense',
        accountId: '1',
        userId: '2'
      },
      {
        id: '8',
        amount: 2800.00,
        description: 'Salary Deposit - Design Studio',
        category: 'Income',
        date: '2024-12-11',
        type: 'income',
        accountId: '1',
        userId: '2'
      },
      {
        id: '9',
        amount: -95.00,
        description: 'Costco Wholesale',
        category: 'Food & Dining',
        date: '2024-12-10',
        type: 'expense',
        accountId: '1',
        userId: '1'
      },
      {
        id: '10',
        amount: -25.00,
        description: 'Starbucks Coffee',
        category: 'Food & Dining',
        date: '2024-12-09',
        type: 'expense',
        accountId: '1',
        userId: '3'
      }
    ];
  },

  async getTransactionsByAccount(accountId: string): Promise<Transaction[]> {
    const transactions = await this.getTransactions();
    return transactions.filter(t => t.accountId === accountId);
  },

  async createTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      ...transaction,
      id: Date.now().toString()
    };
  }
};