import { FaRegUserCircle } from 'react-icons/fa'
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const Container = styled.div`
    background-color:#eeeeee;
    width:100vw;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Title = styled.h1`
    font-size:30px;
    font-weight: 600;
    margin-bottom:20px;
`

const Wrapper = styled.div`
    width:400px;
    background-color:white;
    padding: 20px;
`

const InfoContainer = styled.div`
    display:flex;
    align-items:center;
`

const InfoText = styled.p`
    margin-left:24px;
`

const Form = styled.form`
    margin-top:20px;  
    display: grid; 
    grid-template-columns:1fr 1fr;
    gap:16px; 
`

const Label = styled.label`
    color:grey;
    font-size:14px;
    
`

const Input = styled.input`
    border:solid 1px #acacac;
    border-radius:4px;
    font-size:16px;
    padding:8px;
    margin-top:10px;
`

const InputContainer = styled.div`
    border:solid 1px #acacac;
    border-radius:4px;
    font-size:16px;
    padding:8px;
    margin-top:10px;
`

const Span = styled.span`
    color:grey;
    font-size: 14px;
`

const InputBox = styled.input`
    border:none;
    font-size:16px;
    width:80%;
    padding-left:8px;
`

const Button = styled.button`
    border:none;
    border-radius:4px;
    height:50px;
    align-self:flex-end;
    background-color:#6246ca;
    color:white;
    font-size: 16px;;
`

const NewPayslip = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Title>Pay Slip Generator</Title>
                <Wrapper>
                    <InfoContainer>
                        <FaRegUserCircle size="30" />
                        <InfoText>Employee Info</InfoText>
                    </InfoContainer >
                    <Form>
                        <div>
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" />
                        </div>
                        <div>
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" />
                        </div>
                        <div>
                            <Label htmlFor="annualSalary">Annual Salary</Label>
                            <InputContainer>
                                <Span>$</Span>
                                <InputBox id="annualSalary" />
                            </InputContainer>
                        </div>
                        <div>
                            <Label htmlFor="super">Superannuation Rate</Label>
                            <InputContainer>
                                <Span>%</Span>
                                <InputBox id="super" />
                            </InputContainer>
                        </div>
                        <div>
                            <Label htmlFor="payStart">Payment Start Date</Label>
                            <Input id="payStart" type="date" />
                        </div>
                        <Button>Generate Payslip</Button>
                    </Form>
                </Wrapper>
            </Container>
        </>
    )
}

export default NewPayslip