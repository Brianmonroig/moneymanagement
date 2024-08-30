import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ManageExpenses from './components/ManageExpenses';
import ManageIncome from './components/ManageIncome';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/manage-income" element={<ManageIncome />} /> {/* New Route */}
          <Route path="/manage-expenses" element={<ManageExpenses />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
