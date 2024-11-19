import React from 'react';
import { 
  FileText, 
  Map, 
  Globe, 
  Users, 
  Shield, 
  MessageSquare,
  TrendingUp
} from 'lucide-react';

const benefits = [
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Effortless handling of trade documentation and compliance requirements'
  },
  {
    icon: Map,
    title: 'Real-Time Tracking',
    description: 'Track shipments and receive instant alerts about your cargo location'
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Break language barriers with automatic translation features'
  },
  {
    icon: Users,
    title: 'Distributor Network',
    description: 'Compare and connect with verified global distributors'
  },
  {
    icon: Shield,
    title: 'Secure Compensation',
    description: 'Integrated damage and loss compensation system'
  },
  {
    icon: MessageSquare,
    title: 'Customer Feedback',
    description: 'Transparent review system for better decision making'
  },
  {
    icon: TrendingUp,
    title: 'Cost Efficiency',
    description: 'Optimize operations and reduce overhead costs'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose TradeEase?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Streamline your global trade operations with our comprehensive solution
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}