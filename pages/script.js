const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let lastOperation = '';
let lastOperand = '';

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
      lastOperation = '';
      lastOperand = '';
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id === "equal") {
      if (display.innerText !== "") {
        display.innerText = "I love you!";
      } else {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      // Append the clicked button's value to the display
      display.innerText += item.id;

      // Reset the stored last operation and operand when a number or operator is pressed
      if (['+', '-', '*', '/'].includes(item.id)) {
        lastOperation = '';
        lastOperand = '';
      }
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
