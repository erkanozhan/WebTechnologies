// Uygulama 7.1 – İlk betik ve Console
const konsol = document.querySelector("#konsol");

// Metni hem Console'a hem de sayfadaki kutuya yazar
function yaz(metin) {
  console.log(metin);
  konsol.textContent += metin + "\n";
}

yaz("Merhaba, JavaScript!");

const simdi = new Date();
const saat = simdi.getHours();
let selam;

if (saat < 12) {
  selam = "Günaydın";
} else if (saat < 18) {
  selam = "İyi günler";
} else {
  selam = "İyi akşamlar";
}

yaz(`${selam}! Bugünün tarihi: ${simdi.toLocaleDateString("tr-TR")}`);
yaz(`2 + 3 * 4 = ${2 + 3 * 4}`);
yaz(`(2 + 3) * 4 = ${(2 + 3) * 4}`);
yaz(`"BMB" + 112 = ${"BMB" + 112}`);

// Yalnızca Console'da görünen çıktılar
console.info("Bilgi: Bu satır yalnızca Console'da görünür.");
console.warn("Uyarı: Sarı renkli bir uyarı mesajı.");
console.error("Hata: Kırmızı renkli bir hata mesajı (gerçek bir hata değildir).");
console.table([
  { urun: "Defter", fiyat: 45, adet: 3 },
  { urun: "Kalem", fiyat: 20, adet: 5 },
  { urun: "Silgi", fiyat: 12.5, adet: 2 }
]);
