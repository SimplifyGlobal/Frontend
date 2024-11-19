import React from 'react';
import { Package, Truck, CheckCircle, AlertCircle } from 'lucide-react';

const orders = [
  {
    id: 'ORD-2024-001',
    status: 'in-transit',
    date: '2024-03-15',
    items: 3,
    total: 1250.00,
    destination: 'New York, USA',
  },
  {
    id: 'ORD-2024-002',
    status: 'delivered',
    date: '2024-03-12',
    items: 1,
    total: 450.00,
    destination: 'London, UK',
  },
  {
    id: 'ORD-2024-003',
    status: 'delayed',
    date: '2024-03-10',
    items: 2,
    total: 890.00,
    destination: 'Tokyo, Japan',
  },
];

const statusConfig = {
  'in-transit': {
    icon: Truck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    label: 'In Transit',
  },
  'delivered': {
    icon: CheckCircle,
    color: 'text-green-600',
    bg: 'bg-green-50',
    label: 'Delivered',
  },
  'delayed': {
    icon: AlertCircle,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    label: 'Delayed',
  },
};

export default function OrderSummary() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {orders.map((order) => {
          const status = statusConfig[order.status];
          const StatusIcon = status.icon;
          
          return (
            <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${status.bg}`}>
                    <StatusIcon className={`w-6 h-6 ${status.color}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{order.id}</h3>
                    <p className="text-sm text-gray-500">{order.destination}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${order.total.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">{order.items} items</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                  {status.label}
                </span>
                <span className="text-sm text-gray-500">{order.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}