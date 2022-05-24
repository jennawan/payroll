import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
const Logo = styled.h1`
    color:#6246ca;
    font-size:30px;
    font-weight:800;
`

const Title = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin: 20px 0px;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color:white;
    border:1px solid lightgrey;
    box-shadow:1px 1px 10px #ababab;
`;


const Form = styled.form`
    display: flex;
    flex-direction:column;
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 100%;
    border:none;
    border-radius:3px;
    padding: 15px 20px;
    background-color:#6246ca;
    color:white;
    cursor: pointer;
    margin-bottom: 10px;
`;



const Home = () => {
    return (
        <Container>
            <Logo>EzPayslip</Logo>
            <Title>Sign in to Pay Slip Generator</Title>
            <Wrapper>
                <Form>
                    <Input placeholder="username" />
                    <Input type="password" placeholder="password" />
                    <Button>LOGIN</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Home