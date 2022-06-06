import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ButtonCommon, Container } from "../style";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Button = styled.button`
  ${ButtonCommon};
  font-size: 16px;
  margin: 30px;
  padding: 40px 50px;
`;

const Dashboard = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Container>
        <Title>Welcome {user.username}!</Title>
        <Link to="/newpayslip">
          <Button>Create New Pay Slip</Button>
        </Link>
        <Link to="/paysliplist">
          <Button>View Payment History</Button>
        </Link>
      </Container>
    </>
  );
};

export default Dashboard;
