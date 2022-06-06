import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonCommon, Container, WrapperCommon } from "../style";

const Wrapper = styled.div`
  ${WrapperCommon};
  width: 50%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0px;
  color: #6246ca;
`;

const Desc = styled.p`
  margin-bottom: 20px;
`;

const Button = styled.button`
  ${ButtonCommon};
  font-size: 16px;
  padding: 10px 20px;
`;

const PayslipSuccess = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Pay slip successfully generated!</Title>
        <Desc>You can view it in your payment history.</Desc>
        <Link to="/paysliplist">
          <Button>Payment History</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default PayslipSuccess;
