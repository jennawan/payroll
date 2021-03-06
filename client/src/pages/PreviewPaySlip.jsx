import React from "react"
import { FaMoneyBill } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import { calculator } from '../payslipCalculator'
import { addPayslip } from '../redux/apiCalls'

const Container = styled.div`
 background-color:#f0f0f0;
    width:100vw;
    height: 80vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    width:50%;
    background-color:white;
    padding: 20px;
`

const InfoContainer = styled.div`
    margin:10px;
    display:flex;
    align-items:center;
`

const InfoText = styled.p`
    margin-left:24px;
`

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const Tr = styled.tr``

const Th = styled.th`
    padding:10px;
    text-align:left;
    border-bottom: 2px solid #ddd;
`

const Td = styled.td`
    padding:10px;
    text-align:left;
    border-bottom: 1px solid #ddd;
`

const Button = styled.button`
    margin:20px 0;
    border:none;
    border-radius:4px;
    background-color: #6246ca;
    padding: 10px 40px;
    color:white;
    font-size:16px;
    cursor: pointer;

`

const PreviewPaySlip = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = location.state.data;
    const result = calculator(data);
    const userId = useSelector(state => state.user.currentUser._id);

    const payslip = {
        userId,
        firstName: data.firstName,
        lastName: data.lastName,
        payStartDate: data.payStartDate,
        annualSalary: parseInt(data.annualSalary),
        grossIncome: result.grossIncome,
        tax: result.tax,
        netIncome: result.netIncome,
        superannuation: result.superannuation,
        pay: result.pay
    }

    const format = (num) => {
        return num.toFixed(2).toLocaleString('en-US');
    }

    const handleClick = (e) => {
        e.preventDefault();
        addPayslip(dispatch, payslip);
        navigate("/payslipsuccess");
    }

    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    <InfoContainer>
                        <FaMoneyBill size="30" />
                        <InfoText>Pay Slip for {payslip.firstName} {payslip.lastName}</InfoText>
                    </InfoContainer >
                    <Table>
                        <Tr>
                            <Th>Item</Th>
                            <Th>Employee Details</Th>
                        </Tr>
                        <Tr>
                            <Td>Employee</Td>
                            <Td>{payslip.firstName} {payslip.lastName}</Td>
                        </Tr>
                        <Tr>
                            <Td>Pay Date</Td>
                            <Td>{payslip.payStartDate}</Td>
                        </Tr>
                        <Tr>
                            <Td>Pay Frequency</Td>
                            <Td>Monthly</Td>
                        </Tr>
                        <Tr>
                            <Td>Annual Income</Td>
                            <Td>$ {format(payslip.annualSalary)}</Td>
                        </Tr>
                        <Tr>
                            <Td>Gross Income</Td>
                            <Td>$ {format(payslip.grossIncome)}</Td>
                        </Tr>
                        <Tr>
                            <Td>Income Tax</Td>
                            <Td>$ {format(payslip.tax)}</Td>
                        </Tr>
                        <Tr>
                            <Td>Net Income</Td>
                            <Td>$ {format(payslip.netIncome)}</Td>
                        </Tr>
                        <Tr>
                            <Td>Super</Td>
                            <Td>$ {format(payslip.superannuation)}</Td>
                        </Tr>
                        <Tr>
                            <Td>Pay</Td>
                            <Td>$ {format(payslip.pay)}</Td>
                        </Tr>
                    </Table>
                    <Button onClick={handleClick}>Pay</Button>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default PreviewPaySlip