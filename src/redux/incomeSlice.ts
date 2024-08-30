import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Income {
    id: string;
    source: string; 
    amount: number;
    date: string;
}

interface IncomeState {
    incomes: Income[];
}

const initialState: IncomeState = {
    incomes: [],
};

const incomeSlice = createSlice({
    name: 'income',
    initialState,
    reducers: {
        addIncome: (state, action: PayloadAction<Income>) =>{
            state.incomes.push(action.payload);
        },
        removeIncome: (state, action: PayloadAction<string>) => {
            state.incomes = state.incomes.filter(income => income.id !== action.payload);
          },
    }

});

export const { addIncome, removeIncome } = incomeSlice.actions;
export default incomeSlice.reducer;