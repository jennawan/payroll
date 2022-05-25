export const calculator = (data) => {
    const grossIncome = Math.round(data.annualSalary / 12);
    const tax = calculateTax(data.annualSalary, TAX_TABLE_2018);
    const netIncome = grossIncome - tax;
    const superannuation = Math.round(grossIncome * data.superannuation / 100);
    const pay = netIncome - superannuation;

    return { grossIncome, tax, netIncome, superannuation, pay }
}

const calculateTax = (annualSalary, taxTable) => {
    const result = taxTable.find((row) => annualSalary > row.min && annualSalary <= row.max);
    const { accumulate, rate, min } = result;
    const tax = Math.round(((annualSalary - min) * rate + accumulate) / 12);

    return tax;
}

const TAX_TABLE_2018 = [
    { min: 0, max: 18200, accumulate: 0, rate: 0 },
    { min: 18200, max: 37000, accumulate: 0, rate: 0.19 },
    { min: 37000, max: 87000, accumulate: 3572, rate: 0.325 },
    { min: 87000, max: 180000, accumulate: 19822, rate: 0.37 },
    { min: 180000, max: Number.POSITIVE_INFINITY, accumulate: 54232, rate: 0.45 },
]