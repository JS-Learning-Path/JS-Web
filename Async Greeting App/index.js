const main = document.querySelector(".container");
const input = document.querySelector("#nameInput");
const button = document.querySelector("#greetBtn");
const greetingSection = document.querySelector("#greetMsg");

button.addEventListener("click", async () => {
  const name = input.value;
  greetingSection.textContent = "I am preparing your greeting...";
  await new Promise((resolve) => setTimeout(resolve, 1000));
  greetingSection.textContent = "Hello " + name + "! Have a great day!";
  greetingSection.style.color = "black";
  greetingSection.style.fontWeight = "bold";
  greetingSection.style.padding = "10px";
  greetingSection.style.fontFamily = "Arial, sans-serif";
});

input.addEventListener("keypress", (enter) => {
  if (enter.key === "Enter") {
    button.click();
  }
});
