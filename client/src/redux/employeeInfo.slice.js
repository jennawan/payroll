import { createSlice } from "@reduxjs/toolkit";

const employeeInfoSlice = createSlice({
    name: "employeeInfo",
    initialState: {
        employeeInfo: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //ADD
        addEmployeeInfoStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addEmployeeInfoSuccess: (state, action) => {
            state.isFetching = false;
            state.employeeInfo = action.payload;
        },
        addEmployeeInfoFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const {
    addEmployeeInfoStart,
    addEmployeeInfoSuccess,
    addEmployeeInfoFailure,
} = employeeInfoSlice.actions;
export default employeeInfoSlice.reducer;