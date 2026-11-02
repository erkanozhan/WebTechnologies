const form = document.getElementById("notFormu");
const sonucKutusu = document.getElementById("sonucKutusu");
const ortalamaCiktisi = document.getElementById("ortalama");
const harfCiktisi = document.getElementById("harf");
const harfSatiri = document.getElementById("harfSatiri");
const durumCiktisi = document.getElementById("durum");
const aciklama = document.getElementById("aciklama");

const VIZE_AGIRLIGI = 0.4;
const FINAL_AGIRLIGI = 0.6;
const GECME_ORTALAMASI = 60;

const ikiBasamak = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

// Örnek harf notu ölçeği (kurumların yönetmeliklerinde farklı olabilir).
// Harf notu yalnızca ortalamaya göre verilir; 60'ın altı (FD, FF) başarısızdır.
const HARF_OLCEGI = [
  [90, "AA"], [85, "BA"], [80, "BB"], [75, "CB"], [70, "CC"],
  [65, "DC"], [60, "DD"], [50, "FD"], [0, "FF"]
];

// Bir alanın değerini doğrular; geçerliyse sayıyı, değilse null döndürür.
function notOku(alan) {
  const hataAlani = document.getElementById(`${alan.id}-hata`);
  const metin = alan.value.trim();
  const sayi = Number(metin);
  let mesaj = "";

  if (alan.validity.badInput) {
    mesaj = "Lütfen yalnızca sayı giriniz.";
  } else if (metin === "") {
    mesaj = "Bu alan boş bırakılamaz.";
  } else if (Number.isNaN(sayi)) {
    mesaj = "Lütfen yalnızca sayı giriniz.";
  } else if (sayi < 0 || sayi > 100) {
    mesaj = "Not 0 ile 100 arasında olmalıdır.";
  }

  alan.setCustomValidity(mesaj);          // :invalid sözde sınıfı bu mesaja göre çalışır
  alan.setAttribute("aria-invalid", String(mesaj !== ""));
  hataAlani.textContent = mesaj;
  return mesaj === "" ? sayi : null;
}

function harfNotu(ortalama) {
  return HARF_OLCEGI.find(([alt]) => ortalama >= alt)[1];
}

function hesapla() {
  const vize = notOku(form.elements.vize);
  const final = notOku(form.elements.final);

  if (vize === null || final === null) {
    sonucKutusu.hidden = true;
    form.querySelector(":invalid").focus(); // ilk hatalı alana odaklan
    return;
  }

  // Ortalama iki basamağa yuvarlanır; karşılaştırma da yuvarlanmış değerle yapılır.
  const ortalama = Math.round((vize * VIZE_AGIRLIGI + final * FINAL_AGIRLIGI) * 100) / 100;
  const gecti = ortalama >= GECME_ORTALAMASI;

  ortalamaCiktisi.textContent = ikiBasamak.format(ortalama);
  durumCiktisi.textContent = gecti ? "Geçti" : "Kaldı";
  sonucKutusu.classList.toggle("gecti", gecti);
  sonucKutusu.classList.toggle("kaldi", !gecti);

  harfSatiri.hidden = !form.elements.harfGoster.checked;
  harfCiktisi.textContent = harfNotu(ortalama);

  aciklama.textContent = gecti
    ? `Ortalama ${GECME_ORTALAMASI} veya üzerindedir.`
    : `Ortalama ${GECME_ORTALAMASI}'ın altındadır.`;

  sonucKutusu.hidden = false;
}

form.addEventListener("submit", (olay) => {
  olay.preventDefault(); // sayfanın yeniden yüklenmesini engelle
  hesapla();
});

// Kullanıcı düzeltme yaptıkça o alanın hata mesajı temizlenir.
form.addEventListener("input", (olay) => {
  if (olay.target.type === "number") {
    notOku(olay.target);
  }
});

form.elements.harfGoster.addEventListener("change", () => {
  harfSatiri.hidden = !form.elements.harfGoster.checked;
});

// Sayfa açıldığında örnek değerlerle bir kez hesaplanır.
form.requestSubmit();
