let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let symbols = document.getElementById("Symbols");
let numbers = document.getElementById("Numbers");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
  // console.log(inputSlider.value);
});

// let change = () => {
//   sliderValue.textContent = inputSlider.value;
// };

let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let nums = "0123456789";
let sym = "!@#$%^&*()-";

// console.log(upperChar[Math.floor(Math.random() * upperChar.length)]);
let generatePass = () => {
  let password = "";
  let genText = [];
  if (upperCase.checked) genText.push(upperChar);
  if (lowerCase.checked) genText.push(lowerChars);
  if (numbers.checked) genText.push(nums);
  if (symbols.checked) genText.push(sym);

  while (password.length < inputSlider.value) {
    let randomSet = genText[Math.floor(Math.random() * genText.length)];
    let randomChar = randomSet[Math.floor(Math.random() * randomSet.length)];
    password += randomChar;
  }
  console.log(genText);

  return password;
};

genBtn.addEventListener("click", () => {
  passBox.value = generatePass();
});

copyIcon.addEventListener("click", () => {
  if (passBox.value !== "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "PasswordCopied";
  }
});
