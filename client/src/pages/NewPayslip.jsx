import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addEmployeeInfo } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";
import { ButtonCommon, Container, WrapperCommon } from "../style";

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  ${WrapperCommon};
  width: 400px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InfoText = styled.p`
  margin-left: 24px;
`;

const Form = styled.form`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const Label = styled.label`
  color: grey;
  font-size: 14px;
`;

const Input = styled.input`
  border: solid 1px #acacac;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  border: solid 1px #acacac;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  margin-top: 10px;
`;

const Span = styled.span`
  color: grey;
  font-size: 14px;
`;

const InputBox = styled.input`
  border: none;
  font-size: 16px;
  width: 80%;
  padding-left: 8px;
`;

const Button = styled.button`
  ${ButtonCommon};
  align-self: flex-end;
  font-size: 16px;
  padding: 10px;
`;

const NewPayslip = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.currentUser._id);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const employeeInfo = { ...inputs, userId };
    addEmployeeInfo(dispatch, employeeInfo);
    navigate("/previewpayslip", { state: { data: employeeInfo } });
  };

  return (
    <Container>
      <Title>Pay Slip Generator</Title>
      <Wrapper>
        <InfoContainer>
          <FaRegUserCircle size="30" />
          <InfoText>Employee Info</InfoText>
        </InfoContainer>
        <Form>
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="annualSalary">Annual Salary</Label>
            <InputContainer>
              <Span>$</Span>
              <InputBox
                type="number"
                name="annualSalary"
                id="annualSalary"
                onChange={handleChange}
              />
            </InputContainer>
          </div>
          <div>
            <Label htmlFor="super">Superannuation Rate</Label>
            <InputContainer>
              <Span>%</Span>
              <InputBox
                type="number"
                name="superannuationRate"
                id="super"
                onChange={handleChange}
              />
            </InputContainer>
          </div>
          <div>
            <Label htmlFor="payStartDate">Payment Start Date</Label>
            <Input
              name="payStartDate"
              id="payStartDate"
              type="date"
              onChange={handleChange}
            />
          </div>
          <Button onClick={handleClick}>Generate Payslip</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default NewPayslip;
