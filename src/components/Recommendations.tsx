import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Recommendations: React.FC = () => {
  const totalIncome = useSelector((state: RootState) =>
    state.income.incomes.reduce((total, income) => total + income.amount, 0)
  );
  const totalExpenses = useSelector((state: RootState) =>
    state.expenses.expenses.reduce((total, expense) => total + expense.amount, 0)
  );

  const savingsRecommendation = totalIncome * 0.1;
  const balance = totalIncome - totalExpenses;

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-lg max-w-xl mx-auto my-4">
      <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-4">Financial Recommendations</h2>
      <div className="text-lg text-gray-700 space-y-2">
        <p className="flex justify-between items-center">
          <span>💡 Save 10% of your income:</span> 
          <strong className="text-blue-600">${savingsRecommendation.toFixed(2)}</strong>
        </p>
        <p className="flex justify-between items-center">
          <span>💰 Current balance:</span> 
          <strong className={`text-xl ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${balance.toFixed(2)}
          </strong>
        </p>
        {balance < savingsRecommendation && (
          <p className="flex items-center text-red-600">
            ⚠️ <span className="ml-2">Your current balance is below the recommended savings of ${savingsRecommendation.toFixed(2)}. Consider reducing expenses or increasing your income.</span>
          </p>
        )}
        {balance >= savingsRecommendation && (
          <p className="flex items-center text-green-600">
            ✔️ <span className="ml-2">You're on track! You have enough balance to meet your savings goal of ${savingsRecommendation.toFixed(2)}.</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
