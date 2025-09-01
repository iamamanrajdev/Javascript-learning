const incomeInput = document.getElementById("income");
const resultDiv = document.getElementById("result");
const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", () => {
  const income = parseFloat(incomeInput.value);
  let tax = 0;

  if (isNaN(income) || income < 0) {
    resultDiv.textContent = "❌ Please enter a valid income.";
    resultDiv.style.color = "red";
    return;
  }

  if (income <= 400000) {
    tax = 0;
  } else if (income <= 800000) {
    tax = (income - 400000) * 0.05;
  } else if (income <= 1200000) {
    tax = (400000 * 0.05) + (income - 800000) * 0.10;
  } else if (income <= 1600000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (income - 1200000) * 0.15;
  } else if (income <= 2000000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (income - 1600000) * 0.20;
  } else if (income <= 2400000) {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (income - 2000000) * 0.25;
  } else {
    tax = (400000 * 0.05) + (400000 * 0.10) + (400000 * 0.15) + (400000 * 0.20) + (400000 * 0.25) + (income - 2400000) * 0.30;
  }

  resultDiv.style.color = "#2f80ed";
  resultDiv.textContent = `💰 Estimated Tax: ₹${tax.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
});