import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Navigation from './Navigation';

const Dashboard: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const incomes = useSelector((state: RootState) => state.income.incomes);

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
  const balance = totalIncome - totalExpenses;




  return (
    <div>
      <Navigation/>
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mt-4">
        <div className="p-4 bg-green-100 rounded-lg">
          <h2 className="text-xl font-semibold">Total Income</h2>
          <p className="text-2xl">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg mt-4">
          <h2 className="text-xl font-semibold">Total Expenses</h2>
          <p className="text-2xl">${totalExpenses.toFixed(2)}</p>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg mt-4">
          <h2 className="text-xl font-semibold">Balance</h2>
          <p className="text-2xl">${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
