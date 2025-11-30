// --- БАЗОВА ЧАСТИНА (API) ---
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

// --- ІНДИВІДУАЛЬНЕ ЗАВДАННЯ (Валідація форми) ---
const form = document.getElementById("contactForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (event) => {
  // 1. Зупиняємо стандартну відправку (сторінка не перезавантажиться)
  event.preventDefault();

  // 2. Скидаємо старі повідомлення
  emailError.textContent = "";
  successMessage.textContent = "";
  emailInput.classList.remove("invalid");

  // 3. Отримуємо текст із поля
  const emailValue = emailInput.value.trim();

  // 4. Перевірка: чи є @ і крапка
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    // Якщо помилка
    emailError.textContent = "Помилка! Email має містити '@' та крапку.";
    emailInput.classList.add("invalid");
    return; // Виходимо, далі код не виконується
  }

  // 5. Якщо все ок
  successMessage.textContent = "Супер! Дані валідні.";
  console.log("Валідний email:", emailValue);
});