import React from 'react';
import { Star, MapPin, Phone, Mail } from 'lucide-react';

const Distributors = () => {
  const distributors = [
    {
      id: 1,
      name: 'Express Logistics',
      rating: 4.8,
      location: 'Delhi NCR',
      specialization: 'Air Freight',
      contact: '+91 98765 43210',
      email: 'contact@expresslogistics.com',
      activeOrders: 12
    },
    {
      id: 2,
      name: 'Sea Route Cargo',
      rating: 4.5,
      location: 'Mumbai',
      specialization: 'Sea Freight',
      contact: '+91 98765 43211',
      email: 'info@searoute.com',
      activeOrders: 8
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Distributors</h1>
        <button className="btn btn-primary">Add Distributor</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {distributors.map((distributor) => (
          <div key={distributor.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{distributor.name}</h3>
                <div className="flex items-center mt-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{distributor.rating}</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {distributor.activeOrders} Active Orders
              </span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{distributor.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>{distributor.contact}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>{distributor.email}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="btn btn-primary flex-1">Assign Order</button>
              <button className="btn btn-secondary flex-1">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distributors;