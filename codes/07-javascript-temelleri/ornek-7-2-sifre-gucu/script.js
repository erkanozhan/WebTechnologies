// Örnek 7.2 – Parola gücü denetimi
const YAYGIN_PAROLALAR = ["123456", "123456789", "qwerty", "password", "111111", "sifre123"];

// Bir karakterin harf olup olmadığını Türkçe büyük/küçük harf kuralıyla anlar
function harfMi(karakter) {
  return karakter.toLocaleLowerCase("tr-TR") !== karakter.toLocaleUpperCase("tr-TR");
}

function parolaGucu(parola) {
  const oneriler = [];
  let puan = 0;

  if (YAYGIN_PAROLALAR.includes(parola.toLocaleLowerCase("tr-TR"))) {
    return { puan: 0, seviye: "Zayıf", oneriler: ["Çok yaygın bir parola; tümüyle değiştirin"] };
  }

  if (parola.length >= 12) {
    puan += 2;
  } else if (parola.length >= 8) {
    puan += 1;
    oneriler.push("12 karakter veya daha uzun olsun");
  } else {
    oneriler.push("En az 8, tercihen 12 karakter olsun");
  }

  let kucuk = false;
  let buyuk = false;
  let rakam = false;
  let ozel = false;

  for (const k of parola) {
    if (k >= "0" && k <= "9") {
      rakam = true;
    } else if (harfMi(k)) {
      if (k === k.toLocaleUpperCase("tr-TR")) {
        buyuk = true;
      } else {
        kucuk = true;
      }
    } else if (k !== " ") {
      ozel = true;
    }
  }

  if (kucuk) { puan += 1; } else { oneriler.push("küçük harf ekleyin"); }
  if (buyuk) { puan += 1; } else { oneriler.push("büyük harf ekleyin"); }
  if (rakam) { puan += 1; } else { oneriler.push("rakam ekleyin"); }
  if (ozel) { puan += 1; } else { oneriler.push("özel karakter ekleyin"); }

  let seviye;
  if (puan <= 2) {
    seviye = "Zayıf";
  } else if (puan <= 4) {
    seviye = "Orta";
  } else {
    seviye = "Güçlü";
  }
  return { puan, seviye, oneriler };
}

const denemeler = ["123456", "kedi", "Tekirdag59", "çorlu-Kampüs", "Güneşli.Bir.Gün.2026"];
const tablo = document.querySelector("#tablo");
const sinifAdi = { "Zayıf": "zayif", "Orta": "orta", "Güçlü": "guclu" };

for (const parola of denemeler) {
  const sonuc = parolaGucu(parola);
  const satir = document.createElement("tr");
  const metinler = [parola, `${sonuc.puan} / 6`, sonuc.seviye, sonuc.oneriler.join("; ") || "—"];

  metinler.forEach((metin, i) => {
    const td = document.createElement("td");
    td.textContent = metin;
    if (i === 2) {
      td.className = sinifAdi[sonuc.seviye];
    }
    satir.append(td);
  });
  tablo.append(satir);
  console.log(`${parola}: ${sonuc.seviye} (${sonuc.puan}/6)`);
}
