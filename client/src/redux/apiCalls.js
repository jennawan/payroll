import { publicRequest, userRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure, logout } from "./userRedux";
import { addEmployeeInfoStart, addEmployeeInfoSuccess, addEmployeeInfoFailure } from "./employeeInfoRedux";
import {
    addPayslipStart,
    addPayslipSuccess,
    addPayslipFailure,
    getPayslipStart,
    getPayslipSuccess,
    getPayslipFailure,
} from "./payslipRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const signout = (dispatch) => {
    dispatch(logout());
}

export const addEmployeeInfo = async (dispatch, employeeInfo) => {
    dispatch(addEmployeeInfoStart());
    try {
        const res = await userRequest.post('/employeeinfo', employeeInfo);
        dispatch(addEmployeeInfoSuccess(res.data));
    } catch (err) {
        dispatch(addEmployeeInfoFailure());
    }
}

export const addPayslip = async (dispatch, payslip) => {
    dispatch(addPayslipStart());
    try {
        const res = await userRequest.post('/payslip', payslip);
        dispatch(addPayslipSuccess(res.data));
    } catch (err) {
        dispatch(addPayslipFailure());
    }
}

export const getPayslips = async (dispatch, userId) => {
    dispatch(getPayslipStart());
    try {
        const res = await userRequest.get(`/payslip/find/${userId}`);
        dispatch(getPayslipSuccess(res.data))
    } catch (err) {
        dispatch(getPayslipFailure())
    }
}
