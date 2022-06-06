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
    },
    getPayslipSuccess: (state, action) => {
      state.isFetching = false;
      state.payslip = action.payload;
    },
    getPayslipFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //clear payslip when logout
    clearPayslip: (state) => {
      state.isFetching = false;
      state.payslip = [];
    },
  },
});

export const {
  addPayslipStart,
  addPayslipSuccess,
  addPayslipFailure,
  getPayslipStart,
  getPayslipSuccess,
  getPayslipFailure,
  clearPayslip,
} = payslipSlice.actions;
export default payslipSlice.reducer;
