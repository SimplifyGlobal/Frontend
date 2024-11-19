import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Package, TrendingUp, AlertCircle, Clock } from 'lucide-react';

const data = [
  { name: 'Jan', orders: 40 },
  { name: 'Feb', orders: 55 },
  { name: 'Mar', orders: 65 },
  { name: 'Apr', orders: 50 },
  { name: 'May', orders: 80 },
  { name: 'Jun', orders: 75 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Package}
          title="Active Orders"
          value="24"
          trend="+12%"
          color="blue"
        />
        <StatCard
          icon={TrendingUp}
          title="Monthly Revenue"
          value="₹8.5L"
          trend="+8%"
          color="green"
        />
        <StatCard
          icon={AlertCircle}
          title="Pending Actions"
          value="7"
          trend="-2"
          color="yellow"
        />
        <StatCard
          icon={Clock}
          title="Avg. Processing Time"
          value="2.4 days"
          trend="-0.5 days"
          color="purple"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Order Trends</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <ActivityItem key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, title, value, trend, color }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-full ${colors[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-sm font-medium text-gray-500">{trend}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold">{value}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

const ActivityItem = () => (
  <div className="flex items-start space-x-3">
    <div className="h-2 w-2 mt-2 rounded-full bg-blue-500"></div>
    <div>
      <p className="text-sm text-gray-600">New order #1234 received from Chennai</p>
      <span className="text-xs text-gray-400">2 hours ago</span>
    </div>
  </div>
);

export default Dashboard;