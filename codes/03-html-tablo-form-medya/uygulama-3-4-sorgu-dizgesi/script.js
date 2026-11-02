// Adres çubuğundaki sorgu dizgesini (?ad=deger&...) sayfada gösterir.
// Kullanıcı verisi yalnızca textContent ile yazılır (XSS'e karşı güvenli).
const sorgu = window.location.search;
const ham = document.querySelector("#ham");
const tablo = document.querySelector("#cozum");
const govde = tablo.querySelector("tbody");

if (sorgu.length > 0) {
  ham.textContent = sorgu;
  const parametreler = new URLSearchParams(sorgu);

  for (const [ad, deger] of parametreler) {
    const satir = document.createElement("tr");
    const adHucresi = document.createElement("td");
    const degerHucresi = document.createElement("td");
    adHucresi.textContent = ad;
    degerHucresi.textContent = deger;
    satir.append(adHucresi, degerHucresi);
    govde.append(satir);

    // Formu, gönderilen değerlerle yeniden doldur
    const alan = document.querySelector("form").elements.namedItem(ad);
    if (alan && "value" in alan) {
      alan.value = deger;
    }
  }

  tablo.hidden = false;
}
