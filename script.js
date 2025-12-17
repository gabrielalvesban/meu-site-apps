const toggle = document.getElementById("toggle-dark");
const body = document.body;

// manter preferência
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggle.innerText = "🌙";
  }
});