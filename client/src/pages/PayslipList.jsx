import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPayslips } from "../redux/apiCalls";
import { DataGrid } from "@mui/x-data-grid";
import { ButtonCommon, Container, WrapperCommon } from "../style";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  margin: 20px 0;
  font-size: 24px;
`;

const Wrapper = styled.div`
  height: 65vh;
  width: 800px;
  ${WrapperCommon};
`;

const Button = styled.button`
  ${ButtonCommon};
  padding: 5px 10px;
`;

const PayslipList = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser._id);
  const payslips = useSelector((state) => state.payslip.payslip);

  useEffect(() => {
    getPayslips(dispatch, userId);
  }, [dispatch, userId]);

  const columns = [
    {
      field: "firstName",
      headerName: "First Name",
      width: 100,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 100,
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
    <Container>
      <Title>Payment History</Title>
      <Wrapper>
        <DataGrid
          columns={columns}
          rows={payslips}
          getRowId={(row) => row._id}
          autoPageSize
          pagination
          {...payslips}
          initialState={{
            sorting: {
              sortModel: [{ field: "createdAt", sort: "desc" }],
            },
          }}
        />
      </Wrapper>
    </Container>
  );
};

export default PayslipList;
