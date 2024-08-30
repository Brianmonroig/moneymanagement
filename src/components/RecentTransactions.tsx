import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const RecentTransactions: React.FC = () => {
  const incomes = useSelector((state: RootState) => state.income.incomes);
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  const recentTransactions = [...incomes, ...expenses]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Recent Transactions</h2>
      <ul className="divide-y divide-gray-200">
        {recentTransactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between p-2">
          <span className="font-bold">{transaction.date.split('T')[0]}</span> -{' '}
          <span className="font-semibold">
              {'source' in transaction ? transaction.source : transaction.description}
            </span> ${transaction.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
