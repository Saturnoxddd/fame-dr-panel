// Lista de afirmações
const quotes = [
  "Tudo o que desejo já é meu.",
  "Eu já vivo a vida dos meus sonhos.",
  "Meu corpo e mente estão prontos para minha DR.",
  "Estou seguro(a), calmo(a) e confiante.",
  "Eu mereço toda alegria e sucesso da minha realidade desejada."
];

const quoteEl = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuote");

newQuoteBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = "“" + quotes[random] + "”";
});

// Diário (salva localmente)
const noteEl = document.getElementById("note");
const saveBtn = document.getElementById("saveNote");
const savedMsg = document.getElementById("savedMsg");

// Carregar nota salva
noteEl.value = localStorage.getItem("drNote") || "";

saveBtn.addEventListener("click", () => {
  localStorage.setItem("drNote", noteEl.value);
  savedMsg.classList.add("show");
  setTimeout(() => savedMsg.classList.remove("show"), 1500);
});
