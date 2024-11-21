// import React from 'react';
import { Package, ChevronRight } from 'lucide-react';
import { statusConfig } from '../../../../Data/statusConfig';

const orders = [
  {
    id: 'ORD-2024-001',
    status: 'in-transit',
    date: '2024-03-15',
    items: 3,
    total: 1250.00,
    destination: 'New York, USA',
    eta: '2024-03-18',
  },
  {
    id: 'ORD-2024-002',
    status: 'delivered',
    date: '2024-03-12',
    items: 1,
    total: 450.00,
    destination: 'London, UK',
    eta: null,
  },
  {
    id: 'ORD-2024-003',
    status: 'delayed',
    date: '2024-03-10',
    items: 2,
    total: 890.00,
    destination: 'Tokyo, Japan',
    eta: '2024-03-20',
  },
];

export default function OrderList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">All Orders</h2>
          <div className="flex space-x-2">
            <select className="rounded-lg border border-gray-300 text-sm p-2">
              <option>All Time</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
            <select className="rounded-lg border border-gray-300 text-sm p-2">
              <option>All Status</option>
              <option>In Transit</option>
              <option>Delivered</option>
              <option>Delayed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {orders.map((order) => {
          const status = statusConfig[order.status];
          const StatusIcon = status.icon;
          
          return (
            <div key={order.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${status.bg}`}>
                    <StatusIcon className={`w-6 h-6 ${status.color}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{order.id}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Package className="w-4 h-4 text-gray-400" />
                      <p className="text-sm text-gray-500">{order.destination}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="font-medium text-gray-900">${order.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">{order.items} items</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bg} ${status.color}`}>
                  {status.label}
                </span>
                <div className="text-right space-y-1">
                  <span className="text-sm text-gray-500">Ordered: {order.date}</span>
                  {order.eta && (
                    <p className="text-sm text-gray-500">ETA: {order.eta}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}