const prompt = require("prompt-sync")();

const basicSalary = () => Number(prompt("Provide the basic salary: "));
const benefits = () => Number(prompt("Provide the benefits: "));

const grossSalary = basicSalary() + benefits()

function netSalary(salary) {
    const shifContribution = salary * 0.0275
    const housingLevy = salary * 0.015
    const nssfContribution = salary * 0.06

    const paye = () => {
        const taxableIncome = salary - nssfContribution - shifContribution
        let taxAmount = 0;

        if (taxableIncome <= 24000) {
            // Tax for taxableIncome up to 24,000
            taxAmount = taxableIncome * 0.10;
        } else if (taxableIncome <= 32333) {
            // Tax for taxableIncome between 24,001 and 32,333
            taxAmount = 24000 * 0.10 + (taxableIncome - 24000) * 0.25;
        } else if (taxableIncome <= 500000) {
            // Tax for taxableIncome between 32,334 and 500,000
            taxAmount = 24000 * 0.10 + (32333 - 24000) * 0.25 + (taxableIncome - 32333) * 0.30;
        } else if (taxableIncome <= 800000) {
            // Tax for taxableIncome between 500,001 and 800,000
            taxAmount = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (taxableIncome - 500000) * 0.325;
        } else {
            // Tax for taxableIncome above 800,000
            taxAmount = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (taxableIncome - 800000) * 0.35;
        }

        return taxAmount;
    }

    return grossSalary - (paye() + shifContribution + nssfContribution + housingLevy)
}

console.log ("Net Salary: ksh ", netSalary(grossSalary))