const yorum = document.getElementById("yorum");
const sayac = document.getElementById("sayac");
const kelime = document.getElementById("kelime");

const SINIR = Number(yorum.maxLength); // HTML'deki maxlength niteliğinden okunur

function sayaciGuncelle() {
  const uzunluk = yorum.value.length;
  const kalan = SINIR - uzunluk;
  sayac.textContent = `${uzunluk} / ${SINIR} (kalan ${kalan})`;

  // Sınıra yaklaşıldıkça renk değişir: %80'den sonra uyarı, sınırda hata rengi
  sayac.classList.toggle("uyari", uzunluk >= SINIR * 0.8 && uzunluk < SINIR);
  sayac.classList.toggle("dolu", uzunluk >= SINIR);

  const kelimeler = yorum.value.trim().split(/\s+/).filter(Boolean);
  kelime.textContent = `${kelimeler.length} kelime`;
}

// input olayı her değişiklikte (yazma, silme, yapıştırma, sürükleme) tetiklenir.
yorum.addEventListener("input", sayaciGuncelle);

sayaciGuncelle();
