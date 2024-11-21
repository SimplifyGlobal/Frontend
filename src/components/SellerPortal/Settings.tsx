import React from 'react';
import { User, Bell, Shield, Globe, CreditCard } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>

      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-20 w-20 rounded-full"
              />
              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full">
                <User className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Raj Kumar</h2>
              <p className="text-gray-600">raj.kumar@globaltraders.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" className="input mt-1" value="Global Traders Ltd" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GSTIN</label>
              <input type="text" className="input mt-1" value="27AABCU9603R1ZX" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" className="input mt-1" value="+91 98765 43210" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" className="input mt-1" value="Mumbai, Maharashtra" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-gray-500">Manage your notification preferences</p>
                </div>
              </div>
              <button className="btn btn-secondary">Configure</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Language & Region</p>
                  <p className="text-sm text-gray-500">Set your preferred language and timezone</p>
                </div>
              </div>
              <button className="btn btn-secondary">Change</button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Password & Authentication</p>
                  <p className="text-sm text-gray-500">Manage your security settings</p>
                </div>
              </div>
              <button className="btn btn-secondary">Update</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Billing Information</p>
                  <p className="text-sm text-gray-500">Manage your payment methods</p>
                </div>
              </div>
              <button className="btn btn-secondary">Manage</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="btn btn-secondary">Cancel</button>
        <button className="btn btn-primary">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;