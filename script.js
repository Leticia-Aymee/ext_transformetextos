// Programa - Modelo 1
window.document.addEventListener("DOMContentLoaded", function () {
  // Botão Letra Maiúscula
  window.document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toUpperCase();
    });

  // Botão Letra Minúscula
  window.document
    .querySelector("#btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.toLowerCase();
    });

  // Botão Primeira Letra Maíuscula
  window.document
    .querySelector("#btnPriMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").innerHTML = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    });
});
