import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addExpense, removeExpense } from '../redux/expensesSlice';
import { Expense } from '../redux/expensesSlice';
import Navigation from './Navigation';

const ManageExpenses: React.FC = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now().toString(),
      description,
      amount,
      date: new Date().toISOString(),
    };
    dispatch(addExpense(newExpense));
    setDescription('');
    setAmount(0);
  };

  return (
    <div>
      <Navigation/>
    <div className="p-4">
      <h1 className="text-2xl font-bold">Manage Expenses</h1>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddExpense}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Expense
        </button>
      </div>

      <ul className="mt-4">
        {expenses.map((expense: Expense) => (
          <li key={expense.id} className="flex justify-between p-2 border-b">
            <div>
              <span className="font-bold">{expense.description}</span> - $
              {expense.amount}
            </div>
            <button
              onClick={() => dispatch(removeExpense(expense.id))}
              className="text-red-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ManageExpenses;
