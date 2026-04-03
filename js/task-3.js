const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const value = event.target.value;
  const trimmedValue = value.trim();

  output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});