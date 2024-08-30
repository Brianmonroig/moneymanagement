import React from 'react';
import Navigation from './Navigation';
import Recommendations from './Recommendations';
import RecentTransactions from './RecentTransactions';
import BudgetGoals from './BudgetGoals';
import ExpensesPieChart from './ExpensesPieChart';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      <div className="text-center p-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-lg m-4">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to Money Management App</h1>
        <p className="text-2xl font-semibold">Track your income, expenses, and manage your financial life.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Recommendations />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <BudgetGoals />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <RecentTransactions />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-lg">
          <ExpensesPieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
