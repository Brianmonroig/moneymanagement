import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BudgetState {
  amount: number;
}

const initialState: BudgetState = {
  amount: 0,
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    setBudget: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { setBudget } = budgetSlice.actions;
export default budgetSlice.reducer;
