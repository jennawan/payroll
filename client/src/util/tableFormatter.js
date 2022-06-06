import { format } from "./util";

export const tableFormatter = (payslip) => {
  const name = `${payslip.firstName} ${payslip.lastName}`;
  const {
    payStartDate,
    annualSalary,
    grossIncome,
    tax,
    netIncome,
    superannuation,
    pay,
  } = payslip;
  return [
    {
      id: 1,
      title: "Employee",
      detail: `${name}`,
    },
    {
      id: 2,
      title: "Pay Date",
      detail: `${payStartDate?.split("T")[0]}`,
    },
    {
      id: 3,
      title: "Pay Frequency",
      detail: "Monthly",
    },
    {
      id: 4,
      title: "Annual Income",
      detail: `$ ${format(annualSalary)}`,
    },
    {
      id: 5,
      title: "Gross Income",
      detail: `$ ${format(grossIncome)}`,
    },
    {
      id: 6,
      title: "Income Tax",
      detail: `$ ${format(tax)}`,
    },
    {
      id: 7,
      title: "Net Income",
      detail: `$ ${format(netIncome)}`,
    },
    {
      id: 8,
      title: "Super",
      detail: `$ ${format(superannuation)}`,
    },
    {
      id: 9,
      title: "Pay",
      detail: `$ ${format(pay)}`,
    },
  ];
};
