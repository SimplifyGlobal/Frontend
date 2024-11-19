// import React from 'react';
import {
  LayoutDashboard,
  Package,
  MessageSquare,
  Star,
  Settings,
  LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/user/customer' },
  { icon: Package, label: 'Orders', path: '/user/customer/orders' },
  { icon: MessageSquare, label: 'Support', path: '/user/customer/support' },
  { icon: Star, label: 'Feedback', path: '/user/customer/feedback' },
  { icon: Settings, label: 'Settings', path: '/user/customer/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 h-screen">
      <div className="p-5 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">TradePortal</h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}