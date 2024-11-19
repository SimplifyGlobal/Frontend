import React from 'react';
import QuickActions from '../components/Dashboard/QuickActions';
import OrderSummary from '../components/Dashboard/OrderSummary';
import NotificationsPanel from '../components/Dashboard/NotificationsPanel';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600">Here's what's happening with your orders today.</p>
      </div>
      
      <QuickActions />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrderSummary />
        <NotificationsPanel />
      </div>
    </div>
  );
}