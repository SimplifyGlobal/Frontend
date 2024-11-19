import React from 'react';
import OrderList from '../components/Orders/OrderList';

export default function Orders() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-gray-600">Track and manage your orders</p>
      </div>
      <OrderList />
    </div>
  );
}