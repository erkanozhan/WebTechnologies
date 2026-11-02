// Uygulama 7.7 – Öğrenci nesnesi ve JSON
const konsol = document.querySelector("#konsol");

function yaz(metin) {
  console.log(metin);
  konsol.textContent += metin + "\n";
}

// Nesne değişmezi (object literal)
const ogrenci = {
  ad: "Zeynep",
  soyad: "Kaya",
  numara: "2025123456",
  bolum: "Bilgisayar Mühendisliği",
  sinif: 1,
  dersler: ["Web Teknolojileri", "Fizik II", "Matematik II"],
  notlar: { vize: 72, final: 81 },

  // Metot: nesneye ait fonksiyon; this, metodu çağıran nesneyi gösterir
  tamAd() {
    return `${this.ad} ${this.soyad}`;
  },
  ortalama() {
    return this.notlar.vize * 0.4 + this.notlar.final * 0.6;
  }
};

// Özellik erişimi: nokta ve köşeli parantez gösterimi
yaz(`Ad Soyad : ${ogrenci.tamAd()}`);
yaz(`Bölüm    : ${ogrenci["bolum"]}`);
yaz(`İlk ders : ${ogrenci.dersler[0]} (toplam ${ogrenci.dersler.length} ders)`);
yaz(`Ortalama : ${ogrenci.ortalama().toFixed(1)}`);

// Özellik ekleme ve değiştirme (const nesnenin içeriği değişebilir)
ogrenci.eposta = "zeynep.kaya@ornek.edu.tr";
ogrenci.sinif = 2;
yaz(`Yeni özellikler eklendikten sonra anahtarlar: ${Object.keys(ogrenci).join(", ")}`);
yaz("");

// Nesne → JSON metni (metotlar JSON'a aktarılmaz)
const jsonMetni = JSON.stringify(ogrenci, null, 2);
yaz("JSON.stringify sonucu:");
yaz(jsonMetni);
yaz(`typeof jsonMetni → ${typeof jsonMetni}`);
yaz("");

// Sunucudan gelmiş gibi düşünülen bir JSON metni → nesne
const sunucuYaniti = '{"numara":"2025123456","donem":"2025-2026 Bahar","dersler":[{"kod":"BMB112","harf":"BA"},{"kod":"FIZ102","harf":"CB"}]}';
const transkript = JSON.parse(sunucuYaniti);
yaz(`typeof transkript → ${typeof transkript}`);
yaz(`Dönem: ${transkript.donem}`);
for (const ders of transkript.dersler) {
  yaz(`  ${ders.kod}: ${ders.harf}`);
}

// Hatalı JSON: anahtarlar çift tırnakta olmalıdır
try {
  JSON.parse("{ad: 'Ali'}");
} catch (hata) {
  yaz(`Hatalı JSON yakalandı → ${hata.name}`);
}
