import React from 'react';
import ChatInterface from '../components/Support/ChatInterface';

export default function Support() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Support</h1>
        <p className="text-gray-600">Get help with your orders and inquiries</p>
      </div>
      <ChatInterface />
    </div>
  );
}