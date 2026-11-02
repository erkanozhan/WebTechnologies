// Uygulama 7.5 – Not ortalaması ve harf notu

// Bir notun 0–100 aralığında geçerli bir sayı olup olmadığını denetler
function notGecerliMi(not) {
  return typeof not === "number" && not >= 0 && not <= 100;
}

function ortalamaHesapla(vize, final) {
  return vize * 0.4 + final * 0.6;
}

// Geçme kuralı: ağırlıklı ortalama en az 60
function gectiMi(ortalama) {
  return ortalama >= 60;
}

// if / else if zinciri: koşullar yukarıdan aşağıya denenir
// (örnek ölçek; harf notu yalnızca ortalamaya göre verilir)
function harfNotu(ortalama) {
  if (ortalama >= 90) {
    return "AA";
  } else if (ortalama >= 85) {
    return "BA";
  } else if (ortalama >= 75) {
    return "BB";
  } else if (ortalama >= 70) {
    return "CB";
  } else if (ortalama >= 60) {
    return "CC";
  } else {
    return "FF";
  }
}

// switch: tek bir değerin farklı durumlarına göre dallanma
function katsayi(harf) {
  switch (harf) {
    case "AA":
      return 4.0;
    case "BA":
      return 3.5;
    case "BB":
      return 3.0;
    case "CB":
      return 2.5;
    case "CC":
      return 2.0;
    default:
      return 0;
  }
}

const ogrenciler = [
  { ad: "Ayşe", vize: 70, final: 85 },
  { ad: "Mehmet", vize: 90, final: 45 },
  { ad: "Zeynep", vize: 40, final: 70 },
  { ad: "Can", vize: 55, final: 65 },
  { ad: "Elif", vize: 95, final: 92 },
  { ad: "Deniz", vize: 120, final: 80 }
];

const tablo = document.querySelector("#sonucTablosu");

function hucre(metin, sinif) {
  const td = document.createElement("td");
  td.textContent = metin;
  if (sinif) {
    td.className = sinif;
  }
  return td;
}

for (const ogr of ogrenciler) {
  const satir = document.createElement("tr");
  satir.append(hucre(ogr.ad), hucre(ogr.vize), hucre(ogr.final));

  if (!notGecerliMi(ogr.vize) || !notGecerliMi(ogr.final)) {
    satir.append(hucre("—"), hucre("—"), hucre("—"), hucre("Geçersiz not", "gecersiz"));
    console.warn(`${ogr.ad}: notlar 0–100 aralığında olmalıdır.`);
  } else {
    const ortalama = ortalamaHesapla(ogr.vize, ogr.final);
    const harf = harfNotu(ortalama);
    const gecti = gectiMi(ortalama);
    const durum = gecti ? "Geçti" : "Kaldı";

    satir.append(
      hucre(ortalama.toFixed(1)),
      hucre(harf),
      hucre(katsayi(harf).toFixed(1)),
      hucre(durum, gecti ? "gecti" : "kaldi")
    );
    console.log(`${ogr.ad}: ortalama ${ortalama.toFixed(1)}, ${harf}, ${durum}`);
  }
  tablo.append(satir);
}
