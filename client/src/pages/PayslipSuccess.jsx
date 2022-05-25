import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'

const Container = styled.div`
    background-color:#f0f0f0;
    width:100vw;
    height: 80vh;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    width:50%;
    background-color:white;
    padding: 20px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin: 20px 0px;
    color:#6246ca;
`

const Desc = styled.p`
    margin-bottom:20px;
`

const Button = styled.button`
    border:none;
    border-radius:4px;
    background-color:#6246ca;
    color:white;
    font-size:16px;
    padding: 10px 20px;
    cursor: pointer;
`

const PayslipSuccess = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    <Title>
                        Pay slip successfully generated!
                    </Title>
                    <Desc>
                        You can view it in your payment history.
                    </Desc>
                    <Link to="/paysliplist">
                        <Button>
                            Payment History
                        </Button>
                    </Link>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default PayslipSuccess