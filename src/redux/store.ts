import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from './expensesSlice';
import incomeReducer from './incomeSlice';
import budgetReducer from './budgetSlice';

const store = configureStore({
    reducer: {
        expenses: expensesReducer,
        income: incomeReducer,
        budget: budgetReducer,

    },
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;