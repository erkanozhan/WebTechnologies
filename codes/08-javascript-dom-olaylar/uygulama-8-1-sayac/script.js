const degerAlani = document.getElementById("deger");
const azaltDugmesi = document.getElementById("azalt");
const artirDugmesi = document.getElementById("artir");
const sifirlaDugmesi = document.getElementById("sifirla");

const HEDEF = 10;
let sayac = 0;

// Durum (sayac) değiştikten sonra ekran tek bir fonksiyonla güncellenir.
function ekraniGuncelle() {
  degerAlani.textContent = sayac;
  degerAlani.classList.toggle("hedef", sayac >= HEDEF);
  azaltDugmesi.disabled = sayac === 0;
}

artirDugmesi.addEventListener("click", () => {
  sayac++;
  ekraniGuncelle();
});

azaltDugmesi.addEventListener("click", () => {
  if (sayac > 0) {
    sayac--;
  }
  ekraniGuncelle();
});

sifirlaDugmesi.addEventListener("click", () => {
  sayac = 0;
  ekraniGuncelle();
});

ekraniGuncelle();
