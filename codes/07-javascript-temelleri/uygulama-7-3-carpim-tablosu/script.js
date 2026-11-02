// Uygulama 7.3 – Döngülerle çarpım tablosu
const konsol = document.querySelector("#konsol");

function yaz(metin) {
  console.log(metin);
  konsol.textContent += metin + "\n";
}

// 1) Tek döngü: bir sayının çarpım tablosu
const carpan = 7;
for (let i = 1; i <= 10; i++) {
  yaz(`${carpan} x ${i} = ${carpan * i}`);
}

// 2) while: 7'nin katlarından 50'yi aşan ilki
let kat = carpan;
while (kat <= 50) {
  kat += carpan;
}
yaz(`50'yi aşan ilk kat: ${kat}`);

// 3) İç içe döngü: 10 x 10 tablo
const tablo = document.querySelector("#tablo");
const baslikSatiri = document.createElement("tr");
baslikSatiri.append(document.createElement("th"));
for (let sutun = 1; sutun <= 10; sutun++) {
  const th = document.createElement("th");
  th.textContent = sutun;
  baslikSatiri.append(th);
}
tablo.append(baslikSatiri);

for (let satir = 1; satir <= 10; satir++) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = satir;
  tr.append(th);

  for (let sutun = 1; sutun <= 10; sutun++) {
    const td = document.createElement("td");
    td.textContent = satir * sutun;
    if (satir === sutun) {
      td.className = "kare";
    }
    tr.append(td);
  }
  tablo.append(tr);
}
