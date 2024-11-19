import React from 'react';
import { Globe2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe2 className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">TradeEase</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
          <a href='/login'>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Login
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>

            <a href='/login'>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Login
              </button>
            </a>
          </div>
        </div>
      )
      }
    </header >
  );
}