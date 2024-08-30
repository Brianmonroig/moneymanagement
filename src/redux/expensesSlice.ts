import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Expense {
    id: string;
    description: string;
    amount: number;
    date: string;

}

interface ExpensesState {
    expenses: Expense[];
}

const initialState: ExpensesState = {
    expenses: [], // Replace the semicolon with a comma (or nothing if it's the last property)
  };

const expensesSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense: (state, action: PayloadAction<Expense>) =>{
            state.expenses.push(action.payload)
        },
        removeExpense: (state, action: PayloadAction<string>) =>{
            state.expenses = state.expenses.filter(expense =>
                expense.id !== action.payload);
        }
    }
});

export const {addExpense, removeExpense } = expensesSlice.actions;
export default expensesSlice.reducer;