// Tax rates and deductions
const taxRates = [
  { lowerBound: 0, upperBound: 24000, rate: 10 },
  { lowerBound: 24001, upperBound: 40400, rate: 15 },
  { lowerBound: 40401, upperBound: 57600, rate: 20 },
  { lowerBound: 57601, upperBound: 72800, rate: 25 },
  { lowerBound: 72801, upperBound: Infinity, rate: 30 }
];

const nhifDeductions = [
  { lowerBound: 0, upperBound: 5999, deduction: 150 },
  { lowerBound: 6000, upperBound: 7999, deduction: 300 },
  { lowerBound: 8000, upperBound: 11999, deduction: 400 },
  { lowerBound: 12000, upperBound: 14999, deduction: 500 },
  { lowerBound: 15000, upperBound: 19999, deduction: 600 },
  { lowerBound: 20000, upperBound: 24999, deduction: 750 },
  { lowerBound: 25000, upperBound: 29999, deduction: 850 },
  { lowerBound: 30000, upperBound: 34999, deduction: 900 },
  { lowerBound: 35000, upperBound: 39999, deduction: 950 },
  { lowerBound: 40000, upperBound: 44999, deduction: 1000 },
  { lowerBound: 45000, upperBound: 49999, deduction: 1100 },
  { lowerBound: 50000, upperBound: 59999, deduction: 1200 },
  { lowerBound: 60000, upperBound: 69999, deduction: 1300 },
  { lowerBound: 70000, upperBound: 79999, deduction: 1400 },
  { lowerBound: 80000, upperBound: 89999, deduction: 1500 },
  { lowerBound: 90000, upperBound: 99999, deduction: 1600 },
  { lowerBound: 100000, upperBound: Infinity, deduction: 1700 }
];

const nssfDeduction = 200;

// Function to calculate tax based on salary
function calculateTax(salary) {
  let tax = 0;

  for (const rate of taxRates) {
      if (salary > rate.upperBound) {
          tax += (rate.upperBound - rate.lowerBound + 1) * (rate.rate / 100);
      } else {
          tax += (salary - rate.lowerBound + 1) * (rate.rate / 100);
          break;
      }
  }

  return tax;
}

// Function to calculate deductions based on salary
function calculateDeductions(salary) {
  let nhif = 0;
  for (const deduction of nhifDeductions) {
      if (salary >= deduction.lowerBound && salary <= deduction.upperBound) {
          nhif = deduction.deduction;
          break;
      }
  }

  const nssf = Math.min(salary * (nssfDeduction / 100), 2000);

  return {
      nhif,
      nssf
  };
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  const tax = calculateTax(grossSalary);
  const deductions = calculateDeductions(grossSalary);

  const netSalary = grossSalary - tax - deductions.nhif - deductions.nssf;

  return {
      grossSalary,
      tax,
      nhif: deductions.nhif,
      nssf: deductions.nssf,
      netSalary
  };
}

// Get user input
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

// Calculate and display net salary
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Tax:", salaryDetails.tax);
console.log("NHIF Deductions:", salaryDetails.nhif);
console.log("NSSF Deductions:", salaryDetails.nssf);
console.log("Net Salary:", salaryDetails.netSalary);