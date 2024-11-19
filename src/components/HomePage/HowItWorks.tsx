import React from 'react';
import { CheckCircle2, Package, FileSearch } from 'lucide-react';

const steps = {
  seller: [
    { icon: FileSearch, title: 'Register & Verify', description: 'Complete your business profile and verification' },
    { icon: Package, title: 'List Products', description: 'Upload your products and set trade terms' },
    { icon: CheckCircle2, title: 'Connect & Trade', description: 'Match with distributors and start trading' }
  ],
  distributor: [
    { icon: FileSearch, title: 'Join Network', description: 'Register and verify your distribution business' },
    { icon: Package, title: 'Browse Products', description: 'Find products that match your portfolio' },
    { icon: CheckCircle2, title: 'Start Distribution', description: 'Connect with sellers and expand your network' }
  ],
  customer: [
    { icon: FileSearch, title: 'Easy Search', description: 'Find products from verified sellers' },
    { icon: Package, title: 'Place Orders', description: 'Order with confidence and transparent pricing' },
    { icon: CheckCircle2, title: 'Track & Receive', description: 'Monitor shipments and provide feedback' }
  ]
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = React.useState('seller');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple steps to start your global trade journey
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            {['seller', 'distributor', 'customer'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps[activeTab as keyof typeof steps].map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-6"
              >
                {index < steps[activeTab as keyof typeof steps].length - 1 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-blue-200 -z-10" />
                )}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}