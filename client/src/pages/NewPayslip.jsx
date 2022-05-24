import { FaRegUserCircle } from 'react-icons/fa'
import styled from 'styled-components';

const Container = styled.div`

`

const Title = styled.h1`

`

const Wrapper = styled.div`
`

const InfoContainer = styled.div`
    
`

const InfoText = styled.p``

const Form = styled.form``

const Label = styled.label``

const Input = styled.input``

const InputContainer = styled.div`
  

`

const Span = styled.span`
`

const InputBox = styled.input`

`

const NewPayslip = () => {
    return (
        <Container>
            <Title>Pay Slip Generator</Title>
            <Wrapper>
                <InfoContainer>
                    <FaRegUserCircle />
                    <InfoText>Employee Info</InfoText>
                </InfoContainer>
                <Form>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" />
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" />
                    <Label htmlFor="annualSalary">Annual Salary</Label>
                    <InputContainer>
                        <Span>$</Span>
                        <InputBox id="annualSalary" />
                    </InputContainer>
                    <Label htmlFor="super">Superannuation Rate</Label>
                    <InputContainer>
                        <Span>%</Span>
                        <InputBox id="super" />
                    </InputContainer>
                    <Label htmlFor="payStart">Payment Start Date</Label>
                    <Input id="payStart" type="date" />
                </Form>
            </Wrapper>
        </Container>
    )
}

export default NewPayslip