let heroBtn = document.querySelector("#heroBtn");
let heroMessage = document.querySelector("#heroMessage");

heroBtn.addEventListener("click", function() {
  heroMessage.textContent = "С большой силой приходит большая ответственность.";
  heroMessage.style.color = "#e53935";
  heroMessage.style.fontWeight = "700";
});

