let budgetValue = 0;
let totalExpensesValue = 0;

const groceries = "groceries";
const restaurants = "restaurants";
const transport = "transport";
const home = "home";
const subscriptions = "subscriptions";

const expenseEntries = [
[groceries, 33],
[restaurants, 50],
[transport, 12],
[home, 70],
[subscriptions, 14],
[groceries, 28],
[subscriptions, 12]
];

for (const entry of expenseEntries) {
    totalExpensesValue += entry [1];
}


function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

const averageExpense = calculateAverageExpense();

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}


let balanceColor = "green";

function updateBalanceColor() {
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}


function calculateCategoryExpenses(category) {
  let sum = 0;
  for (const entry of expenseEntries) {
    if (entry[0] === category) {
      sum += entry[1];
    }
  }
  return sum;
}


function calculateLargestCategory() {
  const categories = ["groceries", "restaurants", "transport", "home", "subscriptions"];

  let largestCategory = categories[0];
  let largestAmount = calculateCategoryExpenses(largestCategory);

  for (const category of categories) {
    const amount = calculateCategoryExpenses(category);
    if (amount > largestAmount) {
      largestAmount = amount;
      largestCategory = category;
    }
  }

  return largestCategory;
}

const largestCategoryResult = calculateLargestCategory();


function addExpenseEntry(values) {
  expenseEntries.push(values);
  totalExpensesValue += values[1];
}