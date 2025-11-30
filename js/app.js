document.getElementById("load").addEventListener("click", async () => {
  const out = document.getElementById("out");
  out.textContent = "Завантаження...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) throw new Error("Помилка мережі");
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = "Помилка завантаження: " + e.message;
  }
});

const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  emailError.textContent = "";
  successMessage.textContent = "";
  emailInput.classList.remove("invalid");

  const emailValue = emailInput.value.trim();

  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    emailError.textContent = "Будь ласка, введіть коректність вводу електронної адреси!";
    emailInput.classList.add("invalid");
    return;
  }

  successMessage.textContent = "Варіант електронної адреси введено коректно!";
  console.log("Валідний email:", emailValue);
});