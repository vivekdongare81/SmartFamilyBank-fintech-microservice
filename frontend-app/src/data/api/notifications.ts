import { Notification } from '../../types';

// Mock API for notifications
export const notificationsApi = {
  async getNotifications(): Promise<Notification[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      {
        id: '1',
        title: 'Budget Alert',
        message: 'You\'ve exceeded your Entertainment budget by $20 this month. Consider reviewing your spending habits.',
        type: 'warning',
        timestamp: '2024-12-18T10:30:00Z',
        read: false
      },
      {
        id: '2',
        title: 'Goal Achievement',
        message: 'Congratulations! You\'re 70% towards your Europe trip goal. Keep up the great work!',
        type: 'success',
        timestamp: '2024-12-17T14:20:00Z',
        read: false
      },
      {
        id: '3',
        title: 'New Reward Available',
        message: 'You have enough points to redeem a 5% cashback reward. Check out the rewards center!',
        type: 'info',
        timestamp: '2024-12-16T09:15:00Z',
        read: true
      },
      {
        id: '4',
        title: 'Large Transaction Alert',
        message: 'A transaction of $1,200 was made from your Family Checking account for Flight Tickets.',
        type: 'info',
        timestamp: '2024-12-15T16:45:00Z',
        read: true
      },
      {
        id: '5',
        title: 'Monthly Statement Ready',
        message: 'Your December monthly statement is now available for download.',
        type: 'info',
        timestamp: '2024-12-14T08:00:00Z',
        read: true
      },
      {
        id: '6',
        title: 'Savings Milestone',
        message: 'Great news! Your Emergency Fund has reached $18,500. You\'re 74% towards your goal!',
        type: 'success',
        timestamp: '2024-12-13T12:30:00Z',
        read: false
      },
      {
        id: '7',
        title: 'Bill Reminder',
        message: 'Your Pacific Gas & Electric bill of $120 is due in 3 days.',
        type: 'warning',
        timestamp: '2024-12-12T09:00:00Z',
        read: true
      }
    ];
  },

  async markAsRead(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    // Mock API call to mark notification as read
  },

  async markAllAsRead(): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Mock API call to mark all notifications as read
  },

  async deleteNotification(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    // Mock API call to delete notification
  }
};