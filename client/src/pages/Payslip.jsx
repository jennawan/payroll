import { FaMoneyBill } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  ButtonCommon,
  Container,
  WrapperCommon,
  InfoContainer,
  InfoText,
  Table,
  Th,
  Td,
} from "../style";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useSelector } from "react-redux";
import { tableFormatter } from "../util/tableFormatter";
import { docFormatter } from "../util/docFormatter";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Wrapper = styled.div`
  width: 50%;
  ${WrapperCommon};
`;

const Button = styled.button`
  ${ButtonCommon};
  margin: 20px 20px 20px 0;
  padding: 10px 40px;
  font-size: 16px;
`;

const PaySlip = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const payslip = useSelector((state) =>
    state.payslip.payslip.filter((obj) => obj._id === id)
  )[0];

  const docDefinition = docFormatter(payslip);

  const printToPdf = () => {
    pdfMake.createPdf(docDefinition).print();
  };

  const downloadToPdf = () => {
    pdfMake.createPdf(docDefinition).download();
  };

  const tableBody = tableFormatter(payslip);

  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <FaMoneyBill size="30" />
          <InfoText>
            Pay Slip for {payslip.firstName} {payslip.lastName}
          </InfoText>
        </InfoContainer>
        <Table>
          <thead>
            <tr>
              <Th>Item</Th>
              <Th>Employee Details</Th>
            </tr>
          </thead>
          <tbody>
            {tableBody.map((row) => (
              <tr key={row.id}>
                <Td>{row.title}</Td>
                <Td>{row.detail}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={printToPdf}>Print</Button>
        <Button onClick={downloadToPdf}>Download</Button>
      </Wrapper>
    </Container>
  );
};

export default PaySlip;
