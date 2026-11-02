// ---- Dijital saat ----
const saatAlani = document.getElementById("saat");
const tarihAlani = document.getElementById("tarih");

const saatBicimi = new Intl.DateTimeFormat("tr-TR", {
  hour: "2-digit", minute: "2-digit", second: "2-digit"
});
const tarihBicimi = new Intl.DateTimeFormat("tr-TR", { dateStyle: "full" });

function saatiGuncelle() {
  const simdi = new Date();
  saatAlani.textContent = saatBicimi.format(simdi);
  tarihAlani.textContent = tarihBicimi.format(simdi);
}

saatiGuncelle();                  // ilk gösterim hemen yapılır
setInterval(saatiGuncelle, 1000); // sonra her saniye yinelenir

// ---- Geri sayım ----
const sinavGirdisi = document.getElementById("sinavZamani");
const mesaj = document.getElementById("mesaj");
const alanlar = {
  gun: document.getElementById("gun"),
  saat: document.getElementById("saatKalan"),
  dakika: document.getElementById("dakika"),
  saniye: document.getElementById("saniye")
};

let geriSayimKimligi = null;

function kalanSureyiGoster(hedef) {
  const farkMs = hedef - Date.now();

  if (farkMs <= 0) {
    clearInterval(geriSayimKimligi); // hedefe ulaşıldı: zamanlayıcı durdurulur
    for (const alan of Object.values(alanlar)) alan.textContent = "0";
    mesaj.textContent = "Sınav zamanı geldi. Başarılar!";
    return;
  }

  const toplamSaniye = Math.floor(farkMs / 1000);
  alanlar.gun.textContent = Math.floor(toplamSaniye / 86400);
  alanlar.saat.textContent = Math.floor((toplamSaniye % 86400) / 3600);
  alanlar.dakika.textContent = Math.floor((toplamSaniye % 3600) / 60);
  alanlar.saniye.textContent = toplamSaniye % 60;
}

function geriSayimiBaslat() {
  clearInterval(geriSayimKimligi); // önceki zamanlayıcı varsa durdurulur
  mesaj.textContent = "";

  // datetime-local değeri ("2027-06-14T10:00") yerel saat olarak yorumlanır.
  const hedef = new Date(sinavGirdisi.value);
  if (Number.isNaN(hedef.getTime())) {
    mesaj.textContent = "Lütfen geçerli bir tarih ve saat seçiniz.";
    return;
  }

  kalanSureyiGoster(hedef);
  geriSayimKimligi = setInterval(() => kalanSureyiGoster(hedef), 1000);
}

sinavGirdisi.addEventListener("change", geriSayimiBaslat);
geriSayimiBaslat();
