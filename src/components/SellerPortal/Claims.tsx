// import React from 'react';
import {
  AlertTriangle,
  // Clock, 
  // CheckCircle 
} from 'lucide-react';

const Claims = () => {
  const claims = [
    {
      id: 'CLM001',
      orderId: 'ORD-001',
      type: 'Damaged Goods',
      status: 'In Review',
      date: '2024-03-08',
      amount: '₹45,000',
      description: 'Partial damage to electronics shipment during transit'
    },
    {
      id: 'CLM002',
      orderId: 'ORD-003',
      type: 'Delayed Delivery',
      status: 'Resolved',
      date: '2024-03-05',
      amount: '₹15,000',
      description: 'Delivery delayed by 5 days causing business loss'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Claims Management</h1>
        <button className="btn btn-primary">File New Claim</button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {claims.map((claim) => (
          <div key={claim.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Claim #{claim.id}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Related to Order: {claim.orderId}
                </p>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${claim.status === 'Resolved'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
                }`}>
                {claim.status}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">{claim.description}</p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Claim Type</p>
                <p className="text-sm font-medium text-gray-900">{claim.type}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Filing Date</p>
                <p className="text-sm font-medium text-gray-900">{claim.date}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Claim Amount</p>
                <p className="text-sm font-medium text-gray-900">{claim.amount}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="btn btn-primary flex-1">View Details</button>
              <button className="btn btn-secondary flex-1">Track Status</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Claims;