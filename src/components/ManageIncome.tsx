import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { addIncome, removeIncome } from "../redux/incomeSlice";
import Navigation from "./Navigation";

const ManageIncome: React.FC = () => {
    const dispatch = useDispatch();
    const incomes = useSelector((state: RootState) => state.income.incomes);

    const [source, setSource] = useState('');
    const [amount, setAmount] = useState<number>(0);

    const handleAddIncome = () => {
        const newIncome = {
            id: Date.now().toString(),
            source,
            amount,
            date: new Date().toISOString(),
        };
        dispatch(addIncome(newIncome));
        setSource('');
        setAmount(0);
    };

    return (
     <div>
        <Navigation/>
        <div className="p-4">
            <h1 className="text-2xl font-bold">Manage Income</h1>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Income Source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
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
                    onClick={handleAddIncome}
                    className="bg-green-500 text-white p-1 rounded"
                >
                    Add Income
                </button>
            </div>
            <ul className="mt-4">
                {incomes.map((income) => (
                    <li key={income.id} className="flex justify-between p-2 border-b">
                        <div>
                            <span className="font-bold">{income.source}</span> - ${income.amount}
                        </div>
                        <button
                            onClick={() => dispatch(removeIncome(income.id))}
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

export default ManageIncome;
