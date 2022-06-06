import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { signout } from "../redux/apiCalls";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  border-bottom: 3px solid #6246ca;
`;

const Wrapper = styled.div`
  padding: 15px 30px;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  color: #6246ca;
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 2;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover div {
    display: block;
  }
`;
const DropBtn = styled.button`
  background-color: white;
  font-size: 16px;
  border: none;
  margin-right: 30px;

  &:hover {
    color: #6246ca;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #ddd;
    }
  }
`;

const Button = styled.button`
  font-size: 16px;
  border: none;
  display: block;
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const dropdownContents = [
  {
    id: 1,
    url: "/",
    title: "Dashboard",
  },
  {
    id: 2,
    url: "/newpayslip",
    title: "New pay slip",
  },
  {
    id: 3,
    url: "/paysliplist",
    title: "Payment History",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);

  const handleClick = () => {
    signout(dispatch);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>EzPayslip</Logo>
          </Link>
        </Left>
        <Center />
        <Right>
          <Dropdown>
            <DropBtn>
              <FaRegUser />
              {user.username}
            </DropBtn>
            <DropdownContent>
              {dropdownContents.map((content) => (
                <Link to={content.url} key={content.id}>
                  {content.title}
                </Link>
              ))}
              <Button onClick={handleClick}>Logout</Button>
            </DropdownContent>
          </Dropdown>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
