import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import Seller from './Pages/Seller';
import Distributor from './Pages/Distributor';
import Customer from './Pages/Customer';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/seller" element={<Seller />} />
          <Route path="/user/distributor" element={<Distributor />} />
          <Route path="/user/customer" element={<Customer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;