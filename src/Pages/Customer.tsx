import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/CustomerPortal/Pages/Dashboard';
import Orders from '../components/CustomerPortal/Pages/Orders';
import Support from '../components/CustomerPortal/Pages/Support';
import Feedback from '../components/CustomerPortal/Pages/Feedback';
import SettingsPage from '../components/CustomerPortal/Pages/Settings';
import { Bell, Menu } from 'lucide-react';
import Drawer from '@mui/material/Drawer';

import {
    LayoutDashboard,
    Package,
    MessageSquare,
    Star,
    Settings,
} from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/user/customer' },
    { icon: Package, label: 'Orders', path: '/user/customer/orders' },
    { icon: MessageSquare, label: 'Support', path: '/user/customer/support' },
    { icon: Star, label: 'Feedback', path: '/user/customer/feedback' },
    { icon: Settings, label: 'Settings', path: '/user/customer/settings' },
];

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-4 py-3">
                <button

                    onClick={toggleDrawer(true)}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                    <Menu className="w-6 h-6 text-gray-600" />
                </button>
                <Drawer
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: '16rem', // Matches w-64 from Tailwind
                            boxShadow: '0px 2px 8px rgba(0,0,0,0.1)', // Optional
                        },
                    }}
                    open={open}
                    onClose={toggleDrawer(false)}
                >
                    <Sidebar menu={navItems} visiblity={"block"} />
                </Drawer>

                <div></div>

                <div className="flex items-center space-x-4">
                    <button className="relative p-2 rounded-lg hover:bg-gray-100">
                        <Bell className="w-6 h-6 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                    />
                </div>
            </div>
        </header>
    )
}



function CustomerPortal() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar menu={navItems} visiblity={"hidden"} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default CustomerPortal;