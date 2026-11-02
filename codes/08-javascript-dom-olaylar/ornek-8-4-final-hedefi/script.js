const form = document.getElementById("hedefFormu");
const odevAlani = document.getElementById("odev");
const odevOraniAlani = document.getElementById("odevOrani");
const sonuc = document.getElementById("sonuc");
const hata = document.getElementById("hata");

const GECME_ORTALAMASI = 60;

// "Yok" seçilince ödev alanları pasifleşir; pasif alanlar FormData'ya da girmez.
function odevAlanlariniAyarla() {
  const odevYok = form.elements.odevVar.value === "hayir";
  odevAlani.disabled = odevYok;
  odevOraniAlani.disabled = odevYok;
}

// change olayı radyo düğmelerinden form öğesine kabarır; tek dinleyici yeterlidir.
form.addEventListener("change", (olay) => {
  if (olay.target.name === "odevVar") {
    odevAlanlariniAyarla();
  }
});

function hesapla() {
  hata.textContent = "";
  const veri = new FormData(form);
  const odevVar = veri.get("odevVar") === "evet";

  const vize = Number(veri.get("vize"));
  const vizeOrani = Number(veri.get("vizeOrani")) / 100;
  const finalOrani = Number(veri.get("finalOrani")) / 100;
  const odev = odevVar ? Number(veri.get("odev")) : 0;
  const odevOrani = odevVar ? Number(veri.get("odevOrani")) / 100 : 0;

  // Boş alan, sayı olmayan değer ve aralık dışı değer denetimi
  if (!form.checkValidity()) {
    hata.textContent = "Lütfen tüm etkin alanlara 0–100 aralığında değer giriniz.";
    sonuc.value = "—";
    return;
  }
  if (Math.abs(vizeOrani + odevOrani + finalOrani - 1) > 1e-9) {
    hata.textContent = "Oranların toplamı %100 olmalıdır.";
    sonuc.value = "—";
    return;
  }

  // ortalama = vize*vo + odev*oo + final*fo ≥ 60 eşitsizliğinden gereken final
  let gerekli = (GECME_ORTALAMASI - vize * vizeOrani - odev * odevOrani) / finalOrani;
  gerekli = Math.ceil(Number(gerekli.toFixed(6))); // kayan nokta artıklarını temizle
  gerekli = Math.max(gerekli, 0);                  // negatif sonuç: final notu gerekmez

  if (gerekli > 100) {
    sonuc.value = "100'den fazla (bu notlarla geçmek mümkün değil)";
  } else if (gerekli === 0) {
    sonuc.value = "0 (finalden 0 alınsa da geçersiniz)";
  } else {
    sonuc.value = String(gerekli);
  }
}

form.addEventListener("submit", (olay) => {
  olay.preventDefault();
  hesapla();
});

odevAlanlariniAyarla();
hesapla();
