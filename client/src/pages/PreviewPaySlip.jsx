import { FaMoneyBill } from 'react-icons/fa'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

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

const InfoContainer = styled.div`
    margin:10px;
    display:flex;
    align-items:center;
`

const InfoText = styled.p`
    margin-left:24px;
`

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const Tr = styled.tr``

const Th = styled.th`
    padding:10px;
    text-align:left;
    border-bottom: 2px solid #ddd;
`

const Td = styled.td`
    padding:10px;
    text-align:left;
    border-bottom: 1px solid #ddd;
`

const Button = styled.button`
    margin:20px 0;
    border:none;
    border-radius:4px;
    background-color: #6246ca;
    padding: 10px 40px;
    color:white;
    font-size:16px;

`

const PreviewPaySlip = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Wrapper>
                    <InfoContainer>
                        <FaMoneyBill size="30" />
                        <InfoText>Pay Slip for ***</InfoText>
                    </InfoContainer >
                    <Table>
                        <Tr>
                            <Th>Item</Th>
                            <Th>Employee Details</Th>
                        </Tr>
                        <Tr>
                            <Td>Employee</Td>
                            <Td>John Smith</Td>
                        </Tr>
                        <Tr>
                            <Td>Pay Date</Td>
                            <Td>30 March 2017</Td>
                        </Tr>
                        <Tr>
                            <Td>Pay Frequency</Td>
                            <Td>Monthly</Td>
                        </Tr>
                        <Tr>
                            <Td>Annual Income</Td>
                            <Td>$ 60,050.00</Td>
                        </Tr>
                        <Tr>
                            <Td>Gross Income</Td>
                            <Td>$ 5,004.00</Td>
                        </Tr>
                        <Tr>
                            <Td>Income Tax</Td>
                            <Td>$ 871.00</Td>
                        </Tr>
                        <Tr>
                            <Td>Net Income</Td>
                            <Td>$ 4,082.00</Td>
                        </Tr>
                        <Tr>
                            <Td>Super</Td>
                            <Td>$ 450.00</Td>
                        </Tr>
                        <Tr>
                            <Td>Pay</Td>
                            <Td>$ 3,632.00</Td>
                        </Tr>
                    </Table>
                    <Button>Pay</Button>
                </Wrapper>
            </Container>
            <Footer />
        </>
    )
}

export default PreviewPaySlip