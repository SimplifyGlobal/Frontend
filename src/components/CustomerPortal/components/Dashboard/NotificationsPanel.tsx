import React from 'react';
import { Bell, Package, MessageSquare, AlertTriangle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'delivery',
    message: 'Order #ORD-2024-001 has arrived at the local distribution center',
    time: '10 minutes ago',
    icon: Package,
    color: 'text-blue-500 bg-blue-100',
  },
  {
    id: 2,
    type: 'support',
    message: 'Support team has responded to your inquiry',
    time: '1 hour ago',
    icon: MessageSquare,
    color: 'text-green-500 bg-green-100',
  },
  {
    id: 3,
    type: 'alert',
    message: 'Possible delay for Order #ORD-2024-003 due to weather conditions',
    time: '2 hours ago',
    icon: AlertTriangle,
    color: 'text-amber-500 bg-amber-100',
  },
];

export default function NotificationsPanel() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Recent Notifications</h2>
          <Bell className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div key={notification.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${notification.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All Notifications
        </button>
      </div>
    </div>
  );
}