// Task 1: Emplyee Salary Calculation

function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// Task 2: Product Price After Discount

const calculateDiscount = function(price, discountRate) {
    return `Final Price: $${(price - (price * discountRate)).toFixed(2)}`;
};
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// Task 3: Service Fee Calculation

const calculateServiceFee = (amount, serviceType) => {
    let rate = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
    return `Service Fee: $${(amount * rate).toFixed(2)}`;
};
console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

// Task 4: Car Rental Cost Calculation

function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = carType === "Economy" ? 40 : carType === "Standard" ? 60 : 100;
    let totalCost = (days * dailyRate) + (insurance ? days * 20 : 0);
    return `Total Rental Cost: $${totalCost}`;
}
console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"

// Task 5: Loan Payment Calculation

function calculateLoanPayment(principal, rate, time) {
    return `Total Payment: $${(principal + (principal * rate * time)).toFixed(2)}`;
}
console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

// Task 6: Identifying Large Transactions

let transactions = [200, 1500, 3200, 800, 2500];

function filterLargeTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // Expected output: [1500, 3200, 2500]
