let string = "";
let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");
let arr = Array.from(buttons);

arr.forEach(function (buttons) {
  buttons.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".display").value = string;
      console.log(string);
    } else if (e.target.innerHTML == "%") {
      string = (string * 100).toFixed(2);
      document.querySelector(".display").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector(".display").value = string;
    } else if (e.target.innerHTML == "C") {
      string = string.slice(0, (string.length - 1));
      document.querySelector(".display").value = string;
    } else {
      console.log(e.target.innerHTML);
      string = (string + e.target.innerHTML);
      document.querySelector(".display").value = string;
    }
  });
});
