import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { signout } from "../../redux/apiCalls"
import "./Navbar.css"
import { FaBorderNone, FaRegUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const Container = styled.div`
    height:60px;
    border-bottom:3px solid #6246ca;
`

const Wrapper = styled.div`
    padding:15px 30px;
    display:flex;
    align-items:center;
    
`

const Left = styled.div`
    flex:1;
`

const Logo = styled.h1`
    color:#6246ca;
    font-size:24px;
    font-weight:800;
    cursor: pointer;
`

const Center = styled.div`
    flex:2;
`

const Right = styled.div`
    flex:1;
    display: flex;
    justify-content:flex-end;
    
`

const Navbar = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.currentUser);

    const handleClick = () => {
        signout(dispatch);
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{ textDecoration: "none" }}><Logo>EzPayslip</Logo></Link>
                </Left>
                <Center />
                <Right>
                    <div class="dropdown">
                        <button class="dropbtn">
                            <FaRegUser size="14" style={{ marginRight: "10px" }} />
                            {user.username}
                        </button>
                        <div class="dropdown-content">
                            <a href="/">Dashboard</a>
                            <a href="/newpayslip">New pay slip</a>
                            <a href="/paysliplist">Payment History</a>
                            <a href="#" onClick={handleClick}>Logout</a>
                        </div>
                    </div>
                </Right>
            </Wrapper>
        </Container >
    )
}

export default Navbar