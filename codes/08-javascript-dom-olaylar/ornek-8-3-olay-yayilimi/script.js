const kayit = document.getElementById("kayit");
const durdurKutusu = document.getElementById("durdur");

const asamaAdi = {
  [Event.CAPTURING_PHASE]: "yakalama",
  [Event.AT_TARGET]: "hedef",
  [Event.BUBBLING_PHASE]: "kabarma"
};

function kaydaEkle(metin, sinif) {
  const satir = document.createElement("li");
  satir.textContent = metin;
  satir.className = sinif;
  kayit.append(satir);
}

// Aynı üç öğeye hem yakalama hem kabarma aşaması için dinleyici eklenir.
for (const kimlik of ["dis", "orta", "ic"]) {
  const oge = document.getElementById(kimlik);

  oge.addEventListener("click", (olay) => {
    kaydaEkle(`${kimlik} — ${asamaAdi[olay.eventPhase]} aşaması (capture: true)`, "yakalama");
  }, { capture: true });

  oge.addEventListener("click", (olay) => {
    kaydaEkle(`${kimlik} — ${asamaAdi[olay.eventPhase]} aşaması (capture: false)`, "kabarma");
    if (kimlik === "orta" && durdurKutusu.checked) {
      olay.stopPropagation();
      kaydaEkle("orta — stopPropagation() çağrıldı; olay dış kutuya ulaşmayacak", "durdu");
    }
  });
}

document.getElementById("temizle").addEventListener("click", () => {
  kayit.replaceChildren();
});

// Gösterim amacıyla sayfa açılırken düğmeye bir kez programla tıklanır.
document.getElementById("ic").click();
