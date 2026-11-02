// Uygulama 7.6 – Dizi metotlarıyla alışveriş sepeti
const konsol = document.querySelector("#konsol");

function yaz(metin) {
  console.log(metin);
  konsol.textContent += metin + "\n";
}

const KDV_ORANI = 0.20;
const UCRETSIZ_KARGO_SINIRI = 750;
const KARGO_UCRETI = 49.90;

// Tutarı Türk lirası biçiminde metne çevirir: 1234.5 → "₺1.234,50"
function tl(tutar) {
  return tutar.toLocaleString("tr-TR", { style: "currency", currency: "TRY" });
}

// Kuruş hassasiyetinde yuvarlar (0.1 + 0.2 sorununa karşı)
function kurusaYuvarla(tutar) {
  return Math.round(tutar * 100) / 100;
}

const sepet = [
  { ad: "Kablosuz kulaklık", fiyat: 349.90, adet: 1 },
  { ad: "USB-C kablo", fiyat: 89.50, adet: 2 },
  { ad: "Defter", fiyat: 42.75, adet: 3 }
];

// push: sona ürün ekler; pop: sondaki ürünü çıkarır
sepet.push({ ad: "Mouse pad", fiyat: 64.90, adet: 1 });
sepet.push({ ad: "Hediye paketi", fiyat: 15, adet: 1 });
const cikarilan = sepet.pop();
yaz(`Sepetten çıkarıldı: ${cikarilan.ad}`);
yaz(`Sepetteki ürün çeşidi: ${sepet.length}`);
yaz("");

// forEach: her ürün için bir satır yazar
sepet.forEach((urun, sira) => {
  const satirTutari = kurusaYuvarla(urun.fiyat * urun.adet);
  yaz(`${sira + 1}. ${urun.ad} — ${urun.adet} × ${tl(urun.fiyat)} = ${tl(satirTutari)}`);
});

// map: her ürünü satır tutarına dönüştürür (yeni dizi)
const satirTutarlari = sepet.map((urun) => kurusaYuvarla(urun.fiyat * urun.adet));

// for...of ile toplama
let araToplam = 0;
for (const tutar of satirTutarlari) {
  araToplam += tutar;
}
araToplam = kurusaYuvarla(araToplam);

const kdv = kurusaYuvarla(araToplam * KDV_ORANI);
const kdvDahil = kurusaYuvarla(araToplam + kdv);
const kargo = kdvDahil >= UCRETSIZ_KARGO_SINIRI ? 0 : KARGO_UCRETI;
const genelToplam = kurusaYuvarla(kdvDahil + kargo);

yaz("");
yaz(`Ara toplam (KDV hariç): ${tl(araToplam)}`);
yaz(`KDV (%${KDV_ORANI * 100}): ${tl(kdv)}`);
yaz(`Kargo: ${kargo === 0 ? "Ücretsiz" : tl(kargo)}`);
yaz(`Genel toplam: ${tl(genelToplam)}`);
yaz("");

// filter: 100 TL'den pahalı ürünler
const pahalilar = sepet.filter((urun) => urun.fiyat > 100);
yaz(`100 TL üzeri ürünler: ${pahalilar.map((urun) => urun.ad).join(", ")}`);

// includes: bir ad listesinde arama
const urunAdlari = sepet.map((urun) => urun.ad);
yaz(`Sepette defter var mı? ${urunAdlari.includes("Defter") ? "Evet" : "Hayır"}`);
yaz(`Sepette kalem var mı? ${urunAdlari.includes("Kalem") ? "Evet" : "Hayır"}`);

console.table(sepet);
