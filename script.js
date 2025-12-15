// ===== DARK MODE =====
const btn = document.querySelectorAll("#darkModeBtn");
btn.forEach(button => {
  const body = document.body;
  if (localStorage.getItem("darkMode") === "on") {
    body.classList.add("dark");
    button.textContent = "☀️";
  }
  button.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("darkMode", "on");
      button.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "off");
      button.textContent = "🌙";
    }
  });
});

// ===== CONTAGEM DE CLIQUES =====
const links = document.querySelectorAll("a");
const cliques = {};
const armazenado = localStorage.getItem("cliquesLinks");
if (armazenado) {
  const dados = JSON.parse(armazenado);
  for (const url in dados) {
    cliques[url] = dados[url];
  }
}
links.forEach(link => {
  if(!cliques[link.href]) cliques[link.href] = 0;
  link.addEventListener("click", () => {
    cliques[link.href] += 1;
    console.log(`O link ${link.href} foi clicado ${cliques[link.href]} vezes.`);
    localStorage.setItem("cliquesLinks", JSON.stringify(cliques));
  });
});
