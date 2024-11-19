// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/CustomerPortal/components/Header';
import Sidebar from '../components/CustomerPortal/components/Sidebar';
import Dashboard from '../components/CustomerPortal/Pages/Dashboard';
import Orders from '../components/CustomerPortal/Pages/Orders';
import Support from '../components/CustomerPortal/Pages/Support';
import Feedback from '../components/CustomerPortal/Pages/Feedback';
import Settings from '../components/CustomerPortal/Pages/Settings';

function CustomerPortal() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default CustomerPortal;