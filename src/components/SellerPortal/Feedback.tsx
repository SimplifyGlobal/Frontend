import React from 'react';
import { MessageSquare, Star, ThumbsUp, ThumbsDown } from 'lucide-react';

const Feedback = () => {
  const feedback = [
    {
      id: 1,
      customer: 'Global Traders Ltd',
      rating: 4,
      comment: 'Excellent service and timely delivery. Very professional handling of documents.',
      date: '2024-03-09',
      orderId: 'ORD-001',
      status: 'Unresponded'
    },
    {
      id: 2,
      customer: 'Eastern Exports',
      rating: 5,
      comment: 'Best export handling experience. The team was very cooperative.',
      date: '2024-03-08',
      orderId: 'ORD-002',
      status: 'Responded'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Customer Feedback</h1>
        <div className="flex gap-3">
          <select className="input max-w-xs">
            <option>All Feedback</option>
            <option>Unresponded</option>
            <option>Responded</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {feedback.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.customer}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${
                        index < item.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Order #{item.orderId}</span>
                </div>
              </div>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                item.status === 'Responded'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {item.status}
              </span>
            </div>

            <p className="mt-4 text-gray-600">{item.comment}</p>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center gap-1 text-gray-500 hover:text-green-600">
                  <ThumbsUp className="h-5 w-5" />
                  <span>Helpful</span>
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:text-red-600">
                  <ThumbsDown className="h-5 w-5" />
                  <span>Not Helpful</span>
                </button>
              </div>
              <button className="btn btn-primary flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Respond
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;