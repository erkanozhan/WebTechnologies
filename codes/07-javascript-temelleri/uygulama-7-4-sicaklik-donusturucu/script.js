// Uygulama 7.4 – Sıcaklık dönüştürücü
const konsol = document.querySelector("#konsol");

function yaz(metin) {
  console.log(metin);
  konsol.textContent += metin + "\n";
}

// Fonksiyon bildirimi: Celsius → Fahrenheit
function fahrenheitaCevir(celsius) {
  return celsius * 9 / 5 + 32;
}

// Fonksiyon ifadesi: Fahrenheit → Celsius
const celsiusaCevir = function (fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
};

// Ok fonksiyonu: Celsius → Kelvin
const kelvineCevir = (celsius) => celsius + 273.15;

// Varsayılan parametre: basamak verilmezse 1 basamağa yuvarlar
function yuvarla(sayi, basamak = 1) {
  const carpan = 10 ** basamak;
  return Math.round(sayi * carpan) / carpan;
}

yaz(`25 °C = ${fahrenheitaCevir(25)} °F`);
yaz(`98.6 °F = ${yuvarla(celsiusaCevir(98.6))} °C`);
yaz(`-40 °C = ${fahrenheitaCevir(-40)} °F (iki ölçeğin kesiştiği nokta)`);
yaz(`0 °C = ${kelvineCevir(0)} K`);
yaz(`100 °F = ${yuvarla(celsiusaCevir(100), 2)} °C`);
yaz("");

// Geri çağırma: hangi dönüşümün yapılacağını parametre olarak alır
function tabloYaz(degerler, donusturucu, kaynakBirim, hedefBirim) {
  yaz(`${kaynakBirim} → ${hedefBirim}`);
  for (const deger of degerler) {
    const sonuc = yuvarla(donusturucu(deger));
    yaz(`  ${String(deger).padStart(4)} ${kaynakBirim}  =  ${sonuc} ${hedefBirim}`);
  }
}

tabloYaz([-10, 0, 10, 20, 30, 40], fahrenheitaCevir, "°C", "°F");
tabloYaz([0, 32, 50, 77, 100], celsiusaCevir, "°F", "°C");
