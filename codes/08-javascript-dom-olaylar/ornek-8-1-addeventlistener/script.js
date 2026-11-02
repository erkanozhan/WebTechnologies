// Slayt 191'deki örneğin düzeltilmiş ve genişletilmiş hâli
const denemeDugmesi = document.getElementById("denemeDugmesi");
const kaldirDugmesi = document.getElementById("kaldirDugmesi");
const demo = document.getElementById("demo");
const durum = document.getElementById("durum");

let tiklamaSayisi = 0;

// Dinleyici adlandırılmış bir fonksiyondur; böylece daha sonra kaldırılabilir.
function mesajGoster() {
  tiklamaSayisi++;
  demo.textContent = `Merhaba Dünya (${tiklamaSayisi}. tıklama)`;
}

denemeDugmesi.addEventListener("click", mesajGoster);

// Kaldırma işlemi aynı olay türü ve AYNI fonksiyon referansı ile yapılır.
kaldirDugmesi.addEventListener("click", () => {
  denemeDugmesi.removeEventListener("click", mesajGoster);
  durum.textContent = "Dinleyici durumu: kaldırıldı";
  durum.classList.add("kaldirildi");
}, { once: true });
