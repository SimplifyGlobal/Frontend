import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  AlertTriangle,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/user/seller' },
    { icon: Package, label: 'Orders', path: '/user/seller/orders' },
    { icon: Users, label: 'Distributors', path: '/user/seller/distributors' },
    { icon: FileText, label: 'Documents', path: '/user/seller/documents' },
    { icon: AlertTriangle, label: 'Claims', path: '/user/seller/claims' },
    { icon: MessageSquare, label: 'Feedback', path: '/user/seller/feedback' },
    { icon: Settings, label: 'Settings', path: '/user/seller/settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-600">Trade Portal</h1>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors ${isActive ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center w-full px-4 py-2 text-gray-600 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;