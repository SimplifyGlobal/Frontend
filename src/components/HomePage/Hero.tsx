import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Indian SMBs for{' '}
              <span className="text-blue-600">Seamless Global Trade</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Simplifying cross-border transactions, shipment tracking, and compliance for Indian SMBs.
              Join thousands of businesses expanding globally with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href='/login'>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
              alt="Global Trade Illustration"
              className="rounded-lg shadow-2xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}