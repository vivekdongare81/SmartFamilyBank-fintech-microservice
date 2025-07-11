import { Budget } from '../../types';

// Mock API for budgets
export const budgetsApi = {
  async getBudgets(): Promise<Budget[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
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
      },
      {
        id: '5',
        category: 'Shopping',
        limit: 600,
        spent: 425,
        period: 'monthly',
        status: 'healthy'
      },
      {
        id: '6',
        category: 'Healthcare',
        limit: 300,
        spent: 150,
        period: 'monthly',
        status: 'healthy'
      }
    ];
  },

  async updateBudget(id: string, updates: Partial<Budget>): Promise<Budget> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const budgets = await this.getBudgets();
    const budget = budgets.find(b => b.id === id);
    if (!budget) throw new Error('Budget not found');
    
    return { ...budget, ...updates };
  },

  async createBudget(budget: Omit<Budget, 'id'>): Promise<Budget> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      ...budget,
      id: Date.now().toString()
    };
  }
};