import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/SellerPortal/components/Sidebar';
import Header from '../components/SellerPortal/components/Header';
import Dashboard from '../components/SellerPortal/Pages/Dashboard';
import Orders from '../components/SellerPortal/Pages/Orders';
import Distributors from '../components/SellerPortal/Pages/Distributors';
import Documents from '../components/SellerPortal/Pages/Documents';
import Claims from '../components/SellerPortal/Pages/Claims';
import Feedback from '../components/SellerPortal/Pages/Feedback';
import Settings from '../components/SellerPortal/Pages/Settings';

function App() {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/distributors" element={<Distributors />} />
                        <Route path="/documents" element={<Documents />} />
                        <Route path="/claims" element={<Claims />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </div>

    );
}

export default App;