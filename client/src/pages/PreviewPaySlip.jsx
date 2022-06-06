import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { calculator } from "../util/payslipCalculator";
import { addPayslip } from "../redux/apiCalls";
import {
  ButtonCommon,
  Container,
  WrapperCommon,
  InfoContainer,
  InfoText,
  Table,
  Th,
  Td,
} from "../style";
import { tableFormatter } from "../util/tableFormatter";

const Wrapper = styled.div`
  width: 50%;
  ${WrapperCommon};
`;

const Button = styled.button`
  ${ButtonCommon};
  margin: 20px 0;
  padding: 10px 40px;
  font-size: 16px;
`;

const Error = styled.span`
  color: red;
  margin-left: 20px;
`;

const PreviewPaySlip = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.payslip);
  const data = location.state.data;
  const result = calculator(data);

  const { superannuationRate, ...rest } = data;
  const payslip = { ...rest, ...result };

  const tableBody = tableFormatter(payslip);

  const handleClick = (e) => {
    e.preventDefault();
    addPayslip(dispatch, payslip);
    navigate("/payslipsuccess");
    //only navigate to payslipsuccess when error is false
    //BUG: payslip.error is false at initial state, but changed to true after persist/REHYDRATE
    // (!error) && navigate("/payslipsuccess");
  };

  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <FaMoneyBill size="30" />
          <InfoText>
            Pay Slip for {payslip.firstName} {payslip.lastName}
          </InfoText>
        </InfoContainer>
        <Table>
          <thead>
            <tr>
              <Th>Item</Th>
              <Th>Employee Details</Th>
            </tr>
          </thead>
          <tbody>
            {tableBody.map((row) => (
              <tr key={row.id}>
                <Td>{row.title}</Td>
                <Td>{row.detail}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleClick}>Pay</Button>
        {/* {error && <Error>Something went wrong!</Error>} */}
      </Wrapper>
    </Container>
  );
};

export default PreviewPaySlip;
