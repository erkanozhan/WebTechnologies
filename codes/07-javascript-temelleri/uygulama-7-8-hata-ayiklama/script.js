// Uygulama 7.8 – Düzeltilmiş sürüm
const konsol = document.querySelector("#konsol");

function yaz(metin) {
  console.log(metin);
  konsol.textContent += metin + "\n";
}

// Üçüncü not bir formdan metin olarak gelmiştir
const notlar = [70, 85, "90", 60];

function ortalamaBul(dizi) {
  let toplam = 0;
  // Düzeltme 1: son geçerli indis dizi.length - 1 olduğundan koşul "<" olmalıdır
  for (let i = 0; i < dizi.length; i++) {
    // Düzeltme 2: metin olarak gelen değer sayıya dönüştürülür
    toplam = toplam + Number(dizi[i]);
  }
  return toplam / dizi.length;
}

const ortalama = ortalamaBul(notlar);
yaz(`Ortalama: ${ortalama}`);
