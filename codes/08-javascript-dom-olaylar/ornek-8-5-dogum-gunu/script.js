const form = document.getElementById("dogumFormu");
const girdi = document.getElementById("dogumTarihi");
const hata = document.getElementById("hata");

const GUN_MS = 24 * 60 * 60 * 1000;
const uzunTarih = new Intl.DateTimeFormat("tr-TR", { dateStyle: "full" });
const gunBicimi = new Intl.DateTimeFormat("tr-TR", { weekday: "long" });

function artikYilMi(yil) {
  return (yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0;
}

// Verilen yıldaki doğum günü; 29 Şubat doğumlular artık olmayan yıllarda 28 Şubat'ta kutlar.
function yildakiDogumGunu(yil, ay, gun) {
  if (ay === 1 && gun === 29 && !artikYilMi(yil)) {
    return new Date(yil, 1, 28);
  }
  return new Date(yil, ay, gun);
}

// İki yerel tarih arasındaki takvim günü farkı (yaz saati kaymalarından etkilenmez)
function gunFarki(baslangic, bitis) {
  const a = Date.UTC(baslangic.getFullYear(), baslangic.getMonth(), baslangic.getDate());
  const b = Date.UTC(bitis.getFullYear(), bitis.getMonth(), bitis.getDate());
  return Math.round((b - a) / GUN_MS);
}

function hesapla() {
  hata.textContent = "";
  if (girdi.value === "") {
    hata.textContent = "Lütfen doğum tarihinizi giriniz.";
    return;
  }

  // "YYYY-AA-GG" metni parçalanır; new Date("2006-08-15") UTC kabul edileceğinden kullanılmaz.
  const [yil, ay, gun] = girdi.value.split("-").map(Number);
  const dogum = new Date(yil, ay - 1, gun);

  const simdi = new Date();
  const bugun = new Date(simdi.getFullYear(), simdi.getMonth(), simdi.getDate());

  if (dogum > bugun) {
    hata.textContent = "Doğum tarihi bugünden sonra olamaz.";
    return;
  }

  let sonraki = yildakiDogumGunu(bugun.getFullYear(), ay - 1, gun);
  if (sonraki < bugun) {
    sonraki = yildakiDogumGunu(bugun.getFullYear() + 1, ay - 1, gun);
  }

  // Bu yılki doğum günü henüz gelmediyse yaş bir eksik olur.
  const buYilkiGeldi = yildakiDogumGunu(bugun.getFullYear(), ay - 1, gun) <= bugun;
  const yas = bugun.getFullYear() - yil - (buYilkiGeldi ? 0 : 1);
  const kalan = gunFarki(bugun, sonraki);

  document.getElementById("yas").textContent = `${yas}`;
  document.getElementById("gunAdi").textContent = gunBicimi.format(dogum);
  document.getElementById("sonrakiTarih").textContent = uzunTarih.format(sonraki);
  document.getElementById("kalanGun").textContent =
    kalan === 0 ? "Bugün doğum gününüz, iyi ki doğdunuz!" : `${kalan} gün`;
}

form.addEventListener("submit", (olay) => {
  olay.preventDefault();
  hesapla();
});

hesapla();
