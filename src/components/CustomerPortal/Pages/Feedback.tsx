import React from 'react';
import FeedbackForm from '../components/Feedback/FeedbackForm';

export default function Feedback() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Feedback</h1>
        <p className="text-gray-600">Share your experience with us</p>
      </div>
      <FeedbackForm />
    </div>
  );
}