// Uygulama 7.8 – BİLEREK HATALI SÜRÜM
// Beklenen çıktı: Ortalama: 76.25
const konsol = document.querySelector("#konsol");

function yaz(metin) {
  console.log(metin);
  konsol.textContent += metin + "\n";
}

// Üçüncü not bir formdan metin olarak gelmiştir
const notlar = [70, 85, "90", 60];

function ortalamaBul(dizi) {
  let toplam = 0;
  for (let i = 0; i <= dizi.length; i++) {
    toplam = toplam + dizi[i];
  }
  return toplam / dizi.length;
}

const ortalama = ortalamaBul(notlar);
yaz(`Ortalama: ${ortalama}`);
