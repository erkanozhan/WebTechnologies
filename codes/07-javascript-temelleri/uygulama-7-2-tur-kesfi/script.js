// Uygulama 7.2 – Değişken ve tür keşfi
const ornekler = [
  { ifade: "42", deger: 42, aciklama: "Tam sayı da number türündedir" },
  { ifade: "3.14", deger: 3.14, aciklama: "Ondalık sayı" },
  { ifade: "NaN", deger: NaN, aciklama: "\"Sayı değil\" de bir number değeridir" },
  { ifade: "Infinity", deger: Infinity, aciklama: "Sonsuz" },
  { ifade: "10n", deger: 10n, aciklama: "Büyük tam sayı (BigInt)" },
  { ifade: "\"Merhaba\"", deger: "Merhaba", aciklama: "Metin (dizge)" },
  { ifade: "`Toplam: ${2 + 3}`", deger: `Toplam: ${2 + 3}`, aciklama: "Şablon dizgesi de string üretir" },
  { ifade: "true", deger: true, aciklama: "Mantıksal değer" },
  { ifade: "undefined", deger: undefined, aciklama: "Değer atanmamış" },
  { ifade: "null", deger: null, aciklama: "Dildeki tarihsel bir tutarsızlık" },
  { ifade: "Symbol(\"id\")", deger: Symbol("id"), aciklama: "Benzersiz tanımlayıcı" },
  { ifade: "[1, 2, 3]", deger: [1, 2, 3], aciklama: "Dizi, özel bir nesnedir" },
  { ifade: "{ ad: \"Ayşe\" }", deger: { ad: "Ayşe" }, aciklama: "Nesne" },
  { ifade: "function () {}", deger: function () {}, aciklama: "Fonksiyon da bir nesnedir" }
];

// Bir tabloya, metinleri textContent ile yazarak satır ekler
function satirEkle(tablo, hucreler) {
  const satir = document.createElement("tr");
  for (const metin of hucreler) {
    const hucre = document.createElement("td");
    hucre.textContent = metin;
    satir.append(hucre);
  }
  tablo.append(satir);
}

const turTablosu = document.querySelector("#turTablosu");
const konsolIcin = [];

for (const ornek of ornekler) {
  const tur = typeof ornek.deger;
  satirEkle(turTablosu, [ornek.ifade, tur, ornek.aciklama]);
  konsolIcin.push({ ifade: ornek.ifade, typeof: tur });
}
console.table(konsolIcin);

// Değeri, metinse tırnak içinde gösterir
function goster(deger) {
  return typeof deger === "string" ? `"${deger}"` : String(deger);
}

const donusumler = [
  ["Number(\"42\")", Number("42")],
  ["Number(\"42px\")", Number("42px")],
  ["parseInt(\"42px\")", parseInt("42px")],
  ["parseFloat(\"3.75 kg\")", parseFloat("3.75 kg")],
  ["String(2026)", String(2026)],
  ["\"5\" + 3", "5" + 3],
  ["\"5\" - 3", "5" - 3],
  ["\"5\" * \"2\"", "5" * "2"],
  ["true + 1", true + 1],
  ["0.1 + 0.2", 0.1 + 0.2],
  ["\"\" == 0", "" == 0],
  ["\"\" === 0", "" === 0],
  ["null == undefined", null == undefined],
  ["null === undefined", null === undefined]
];

const donusumTablosu = document.querySelector("#donusumTablosu");
for (const ikili of donusumler) {
  const ifade = ikili[0];
  const sonuc = ikili[1];
  satirEkle(donusumTablosu, [ifade, goster(sonuc), typeof sonuc]);
  console.log(ifade, "→", sonuc);
}
