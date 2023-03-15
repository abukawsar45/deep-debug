const calculateexpense = () => {
  const income = document.querySelector("#income").value;
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;
  // console.log(income, food, rent, clothes)
  // console.log(income)
  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);
    // console.log(expense)

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } 
  else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentageString = document.getElementById("save").value;
  const savePercentage = parseInt(savePercentageString)
  // console.log(savePercentage)
//   Validate saving percentage value
if (savePercentage < 0) {
  alert("Provide positive saving value");
}
const balance = document.getElementById("balance").innerText;

  const savingAmount = (savePercentage / 100) * balance;
  // console.log(savingAmount)

  // calculate remaining balance
  const remainingBalance = balance - savingAmount;
  console.log(remainingBalance)

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
