// Form geçerliyse, POST isteğinin gövdesinde gidecek
// application/x-www-form-urlencoded biçimindeki metni gösterir.
const form = document.querySelector("form");
const sonuc = document.querySelector(".sonuc");
const govde = document.querySelector("#govde");

form.addEventListener("submit", (olay) => {
  olay.preventDefault();
  const veri = new FormData(form);
  govde.textContent = new URLSearchParams(veri).toString();
  sonuc.hidden = false;
});
