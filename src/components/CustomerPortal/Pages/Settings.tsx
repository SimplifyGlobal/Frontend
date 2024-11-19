import React from 'react';
import SettingsForm from '../components/Settings/SettingsForm';

export default function Settings() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account preferences</p>
      </div>
      <SettingsForm />
    </div>
  );
}