const sekmeListesi = document.getElementById("sekmeListesi");
const sekmeler = [...sekmeListesi.querySelectorAll("[role='tab']")];

// Seçilen sekmeyi etkinleştirir, diğerlerini pasifleştirir.
function sekmeSec(secilen) {
  for (const sekme of sekmeler) {
    const seciliMi = sekme === secilen;
    sekme.setAttribute("aria-selected", String(seciliMi));
    sekme.tabIndex = seciliMi ? 0 : -1;
    document.getElementById(sekme.getAttribute("aria-controls")).hidden = !seciliMi;
  }
  secilen.focus();
}

// Olay delegasyonu: üç düğme yerine kapsayıcıya tek dinleyici
sekmeListesi.addEventListener("click", (olay) => {
  const sekme = olay.target.closest("[role='tab']");
  if (sekme) {
    sekmeSec(sekme);
  }
});

// Klavye ile gezinme: sol/sağ ok, Home ve End tuşları
sekmeListesi.addEventListener("keydown", (olay) => {
  const simdiki = sekmeler.indexOf(document.activeElement);
  if (simdiki === -1) {
    return;
  }
  let yeni = null;
  if (olay.key === "ArrowRight") yeni = (simdiki + 1) % sekmeler.length;
  if (olay.key === "ArrowLeft") yeni = (simdiki - 1 + sekmeler.length) % sekmeler.length;
  if (olay.key === "Home") yeni = 0;
  if (olay.key === "End") yeni = sekmeler.length - 1;

  if (yeni !== null) {
    olay.preventDefault(); // sayfanın kaymasını engelle
    sekmeSec(sekmeler[yeni]);
  }
});
