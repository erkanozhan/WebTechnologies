const form = document.getElementById("ekleFormu");
const girdi = document.getElementById("yeniIs");
const liste = document.getElementById("liste");
const bosMesaj = document.getElementById("bosMesaj");
const ozet = document.getElementById("ozet");
const kalip = document.getElementById("satirKalibi");

// Kalıbın kopyasından yeni bir <li> üretir; kullanıcı metni textContent ile yazılır.
function isEkle(metin, tamamlandi = false) {
  const satir = kalip.content.firstElementChild.cloneNode(true);
  satir.querySelector(".metin").textContent = metin;
  satir.querySelector("input").checked = tamamlandi;
  satir.classList.toggle("tamam", tamamlandi);
  liste.append(satir);
  ozetiGuncelle();
}

function ozetiGuncelle() {
  const toplam = liste.children.length;
  const kalan = liste.querySelectorAll("li:not(.tamam)").length;
  bosMesaj.hidden = toplam > 0;
  ozet.textContent = toplam > 0 ? `${toplam} işten ${kalan} tanesi bekliyor.` : "";
}

form.addEventListener("submit", (olay) => {
  olay.preventDefault();
  const metin = girdi.value.trim();
  if (metin === "") {
    return;
  }
  isEkle(metin);
  form.reset();
  girdi.focus();
});

// Olay delegasyonu: tüm satırlar için listeye tek bir dinleyici eklenir.
// Sonradan eklenen satırlar da ek kod gerektirmeden çalışır.
liste.addEventListener("click", (olay) => {
  const dugme = olay.target.closest("[data-islem='sil']");
  if (dugme) {
    dugme.closest("li").remove();
    ozetiGuncelle();
  }
});

liste.addEventListener("change", (olay) => {
  if (olay.target.matches("[data-islem='tamamla']")) {
    olay.target.closest("li").classList.toggle("tamam", olay.target.checked);
    ozetiGuncelle();
  }
});

// Başlangıç verisi
isEkle("Bölüm 8 notlarını oku", true);
isEkle("Uygulama 8.3'ü tamamla");
isEkle("Değerlendirme sorularını yanıtla");
