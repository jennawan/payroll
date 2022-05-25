
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import { useSelector } from 'react-redux'

const Container = styled.div`
    background-color:#f0f0f0;
    width:100vw;
    height: 80vh;
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


const Button = styled.button`
    border:none;
    border-radius:4px;
    height:50px;
    background-color:#6246ca;
    color:white;
    font-size: 16px;
    cursor: pointer;
    margin:30px;
    padding:30px 50px 50px 50px;
`

const Dashboard = () => {
    const user = useSelector(state => state.user.currentUser)

    return (
        <>
            <Navbar />
            <Container>
                <Title>Welcome {user.username}!</Title>
                <Link to="/newpayslip" >
                    <Button>Create New Pay Slip</Button>
                </Link>
                <Link to="/paysliplist" >
                    <Button>View Payment History</Button>
                </Link>
            </Container>
            <Footer />
        </>
    )
}

export default Dashboard