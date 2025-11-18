const container = document.querySelector(".container");
const inputField = document.querySelector(".input-field");
const button = document.querySelector(".btn");
const resultBox = document.querySelector(".result-box");

if (!inputField || !button || !resultBox) {
  console.error("One or more required elements are missing in the HTML.");
} else {
  const reversed = document.createElement("div");
  const count = document.createElement("div");
  count.textContent = "Character Count: 0";
  resultBox.appendChild(reversed);
  resultBox.appendChild(count);
  inputField.addEventListener("input", (e) => {
    const text = e.target.value;
    const reversedText = text.split("").reverse().join("");
    reversed.textContent = `Reversed :${reversedText}`;
    count.textContent = `Character Count: ${text.length}`;
  });
  button.addEventListener("click", () => {
    inputField.value = "";
    inputField.focus();
    inputField.dispatchEvent(new Event("input"));
  });
  inputField.dispatchEvent(new Event("input"));
}
