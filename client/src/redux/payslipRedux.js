import { createSlice } from "@reduxjs/toolkit";

const payslipSlice = createSlice({
    name: "payslip",
    initialState: {
        payslip: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //ADD
        addPayslipStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addPayslipSuccess: (state, action) => {
            state.isFetching = false;
            state.payslip = action.payload;
        },
        addPayslipFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //GET
        getPayslipStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getPayslipSuccess: (state, action) => {
            state.isFetching = false;
            state.payslip = action.payload;
        },
        getPayslipFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    }
})


export const {
    addPayslipStart,
    addPayslipSuccess,
    addPayslipFailure,
    getPayslipStart,
    getPayslipSuccess,
    getPayslipFailure,
} = payslipSlice.actions;
export default payslipSlice.reducer;