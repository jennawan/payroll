import styled from "styled-components"

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
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>EzPayslip</Logo>
                </Left>
                <Center />
                <Right>
                    Logout
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar