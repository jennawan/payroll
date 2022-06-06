import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #362951;
  color: white;
  border-top: 5px solid #6246ca;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 16px;
`;

const Desc = styled.p`
  margin-top: 16px;
  font-size: 12px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 12px;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  font-size: 12px;
  :last-child {
    margin-bottom: 0;
  }
`;

const usefulLinks = [
  {
    id: 1,
    title: "Link1",
    url: "https://www.link1.com",
  },
  {
    id: 2,
    title: "Link2",
    url: "https://www.link2.com",
  },
  {
    id: 3,
    title: "Link3",
    url: "https://www.link3.com",
  },
  {
    id: 4,
    title: "Link4",
    url: "https://www.link4.com",
  },
];

const contactItems = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    desc: "+61 234 56 789",
  },
  {
    id: 2,
    icon: <FaEnvelope />,
    desc: "contact@ezpayslip.com.au",
  },
];

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EzPayslip</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          {usefulLinks.map((link) => (
            <ListItem key={link.id}>
              <A href={link.url}>{link.title}</A>
            </ListItem>
          ))}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        {contactItems.map((contactItem) => (
          <ContactItem key={contactItem.id}>
            {contactItem.icon}
            {contactItem.desc}
          </ContactItem>
        ))}
      </Right>
    </Container>
  );
};

export default Footer;
