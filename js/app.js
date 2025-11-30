document.getElementById("load").addEventListener("click", async () => {
  const out = document.getElementById("out");
  out.textContent = "Завантаження...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = "Помилка завантаження: " + e.message;
  }
});