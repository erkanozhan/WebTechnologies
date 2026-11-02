const kok = document.documentElement; // <html> öğesi
const temaDugmesi = document.getElementById("temaDugmesi");
const ANAHTAR = "bmb112-tema";

// localStorage gizli pencerede veya engellenmiş çerezlerde hata verebilir.
function tercihiOku() {
  try {
    return localStorage.getItem(ANAHTAR); // "koyu", "acik" ya da null
  } catch {
    return null;
  }
}

function tercihiYaz(deger) {
  try {
    localStorage.setItem(ANAHTAR, deger);
  } catch {
    // Saklanamazsa tema yalnızca bu oturum için geçerli olur.
  }
}

function temayiUygula(koyuMu) {
  kok.classList.toggle("koyu", koyuMu);
  temaDugmesi.setAttribute("aria-pressed", String(koyuMu));
  temaDugmesi.textContent = koyuMu ? "Açık temaya geç" : "Koyu temaya geç";
}

// Kayıtlı tercih yoksa işletim sisteminin renk tercihi kullanılır.
const kayitli = tercihiOku();
const sistemKoyu = window.matchMedia("(prefers-color-scheme: dark)").matches;
temayiUygula(kayitli ? kayitli === "koyu" : sistemKoyu);

temaDugmesi.addEventListener("click", () => {
  const koyuMu = !kok.classList.contains("koyu");
  temayiUygula(koyuMu);
  tercihiYaz(koyuMu ? "koyu" : "acik");
});
