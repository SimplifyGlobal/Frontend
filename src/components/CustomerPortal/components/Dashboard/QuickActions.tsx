import React from 'react';
import { Search, MessageSquare, Clock, Package } from 'lucide-react';

const actions = [
  {
    icon: Search,
    label: 'Track Order',
    description: 'Check your shipment status',
    color: 'bg-blue-500',
  },
  {
    icon: MessageSquare,
    label: 'Contact Support',
    description: 'Get help with your order',
    color: 'bg-green-500',
  },
  {
    icon: Clock,
    label: 'Order History',
    description: 'View past purchases',
    color: 'bg-purple-500',
  },
  {
    icon: Package,
    label: 'Returns',
    description: 'Manage your returns',
    color: 'bg-amber-500',
  },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`${action.color} p-3 rounded-lg`}>
            <action.icon className="w-6 h-6 text-white" />
          </div>
          <div className="ml-4 text-left">
            <h3 className="font-medium text-gray-900">{action.label}</h3>
            <p className="text-sm text-gray-500">{action.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}