import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const COLORS = ['#4CAF50', '#FF5722', '#2196F3', '#FFC107', '#E91E63'];

const ExpensesPieChart: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.expenses.expenses);

  const data = expenses.map((expense) => ({
    name: expense.description,
    value: expense.amount,
  }));

  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Expenses Breakdown</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ExpensesPieChart;
