import styled from "styled-components";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { ButtonCommon, WrapperCommon } from "../style";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  color: #6246ca;
  font-size: 30px;
  font-weight: 800;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin: 20px 0px;
`;

const Wrapper = styled.div`
  ${WrapperCommon};
  width: 25%;
  border: 1px solid lightgrey;
  box-shadow: 1px 1px 10px #ababab;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  ${ButtonCommon};
  padding: 15px 20px;
  margin-bottom: 10px;
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 12px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Logo>EzPayslip</Logo>
      <Title>Sign in to Pay Slip Generator</Title>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Wrong credentials!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Home;
