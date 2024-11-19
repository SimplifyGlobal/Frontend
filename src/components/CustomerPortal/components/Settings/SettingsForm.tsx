import React from 'react';
import { Bell, Globe, Lock, User } from 'lucide-react';

const sections = [
  {
    id: 'profile',
    title: 'Profile Information',
    icon: User,
    fields: [
      { label: 'Full Name', type: 'text', value: 'John Doe' },
      { label: 'Email Address', type: 'email', value: 'john@example.com' },
      { label: 'Phone Number', type: 'tel', value: '+1 (555) 123-4567' },
    ],
  },
  {
    id: 'preferences',
    title: 'Preferences',
    icon: Globe,
    fields: [
      {
        label: 'Language',
        type: 'select',
        value: 'en',
        options: [
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Spanish' },
          { value: 'fr', label: 'French' },
        ],
      },
      {
        label: 'Time Zone',
        type: 'select',
        value: 'UTC-5',
        options: [
          { value: 'UTC-8', label: 'Pacific Time (PT)' },
          { value: 'UTC-5', label: 'Eastern Time (ET)' },
          { value: 'UTC+0', label: 'Greenwich Mean Time (GMT)' },
        ],
      },
    ],
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    fields: [
      { label: 'Order Updates', type: 'checkbox', value: true },
      { label: 'Shipping Alerts', type: 'checkbox', value: true },
      { label: 'Promotional Emails', type: 'checkbox', value: false },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: Lock,
    fields: [
      { label: 'Current Password', type: 'password', value: '' },
      { label: 'New Password', type: 'password', value: '' },
      { label: 'Confirm New Password', type: 'password', value: '' },
    ],
  },
];

export default function SettingsForm() {
  return (
    <div className="space-y-6">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <div key={section.id} className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {section.fields.map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      defaultValue={field.value}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked={field.value}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600">Enable notifications</span>
                    </label>
                  ) : (
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div className="flex justify-end">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}