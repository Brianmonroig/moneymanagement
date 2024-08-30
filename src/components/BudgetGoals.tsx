import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setBudget } from '../redux/budgetSlice';

const BudgetGoals: React.FC = () => {
  const dispatch = useDispatch();
  const budget = useSelector((state: RootState) => state.budget.amount);
  const totalExpenses = useSelector((state: RootState) =>
    state.expenses.expenses.reduce((total, expense) => total + expense.amount, 0)
  );

  const [inputValue, setInputValue] = useState<number>(budget);

  useEffect(() => {
    const savedBudget = localStorage.getItem('budget');
    if (savedBudget) {
      dispatch(setBudget(Number(savedBudget)));
    }
  }, [dispatch]);

  const handleSetBudget = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('budget', inputValue.toString());
    dispatch(setBudget(inputValue));
  };

  return (
    <div className="mt-6 p-6 bg-blue-100 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center">Set Your Budget Goal</h2>
      <form onSubmit={handleSetBudget} className="mt-4 flex flex-col sm:flex-row justify-center">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
          placeholder="Enter your budget"
          className="border p-2 mr-2 mb-2 sm:mb-0 sm:mr-4 flex-grow"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Set Budget
        </button>
      </form>
      <div className="mt-4 text-center">
        <p>Your budget goal: <strong>${budget.toFixed(2)}</strong></p>
        <p>Amount spent: <strong>${totalExpenses.toFixed(2)}</strong></p>
        <p>Remaining budget: <strong>${(budget - totalExpenses).toFixed(2)}</strong></p>
      </div>
    </div>
  );
};

export default BudgetGoals;
