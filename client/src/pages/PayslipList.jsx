import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import { getPayslips } from '../redux/apiCalls';
// import DataGrid from 'react-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
 background-color:#f0f0f0;
    width:100vw;
    height: 80vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Title = styled.h1`
    margin:20px 0;
    font-size:24px;
`

const Wrapper = styled.div`
    height:65vh;
    width:800px;
    background-color:white;
    padding: 20px;
`

const Button = styled.button`
    border:none;
    border-radius: 4px;
    background-color:#6246ca;
    color:white;
    padding:5px 10px;
    cursor: pointer;
`

const PayslipList = () => {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.user.currentUser._id)
    const payslips = useSelector(state => state.payslip.payslip)


    useEffect(() => {
        getPayslips(dispatch, userId)
    }, [dispatch, userId])

    const columns = [
        // { field: "_id", headerName: "ID", width: 220 },
        {
            field: "firstName",
            headerName: "First Name",
            width: 100,
        },
        {
            field: "lastName",
            headerName: "Last Name",
            width: 100
        },
        {
            field: "pay",
            headerName: "Pay Amount ($)",
            width: 120,
        },
        {
            field: "payStartDate",
            headerName: "Pay Start Date",
            width: 150,
        },
        {
            field: "createdAt",
            headerName: "Created Date",
            width: 150,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/payslip/" + params.row._id}>
                            <Button>View</Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <Navbar />
            <Container>
                <Title>Payment History</Title>
                <Wrapper>
                    <DataGrid
                        columns={columns}
                        rows={payslips}
                        getRowId={row => row._id}
                        autoPageSize pagination {...payslips}
                        initialState={{
                            sorting: {
                                sortModel: [{ field: 'createdAt', sort: 'desc' }],
                            },
                        }}
                    />
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default PayslipList