# 06 - Tarih ve Zaman: Date Nesnesi

## 1. Date Nesnesi Nedir?

JavaScript'in yerleşik `Date` nesnesi, tarih ve saat bilgisiyle çalışmamızı sağlar.

```javascript
// Şu anki tarih ve saat
let simdi = new Date();
console.log(simdi); // Örn: Tue May 20 2026 14:35:22 GMT+0300

// Belirli bir tarih
let belirliTarih = new Date(2026, 0, 1);    // 1 Ocak 2026 (ay 0'dan başlar!)
let stringTarih = new Date("2026-05-20");    // ISO formatı
```

> **Dikkat:** Aylarda Ocak = 0, Şubat = 1, ..., Aralık = 11 şeklinde numaralandırılır!

---

## 2. Tarih Bileşenlerini Alma

```javascript
let simdi = new Date();

// Parçaları al
let yil   = simdi.getFullYear();  // 2026
let ay    = simdi.getMonth();     // 0-11 (Ocak=0, Aralık=11)
let gun   = simdi.getDate();      // 1-31
let gunNo = simdi.getDay();       // 0-6 (Pazar=0, Pazartesi=1, ..., Cumartesi=6)

// Saat parçaları
let saat    = simdi.getHours();   // 0-23
let dakika  = simdi.getMinutes(); // 0-59
let saniye  = simdi.getSeconds(); // 0-59

console.log(`Tarih: ${gun}.${ay + 1}.${yil}`);       // Ay'a +1 ekliyoruz!
console.log(`Saat:  ${saat}:${dakika}:${saniye}`);
```

---

## 3. Türkçe Tarih Formatı

```javascript
let simdi = new Date();

// Ay isimlerini dizi olarak sakla
const aylar = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

let gun    = simdi.getDate();
let ay     = aylar[simdi.getMonth()];  // Ay ismini diziden al
let yil    = simdi.getFullYear();
let gunAdi = gunler[simdi.getDay()];   // Gün adını diziden al

console.log(`${gunAdi}, ${gun} ${ay} ${yil}`);
// Çıktı: Salı, 20 Mayıs 2026
```

---

## 4. Saati Sıfırla Doldurma

Saat, dakika ve saniyede tek basamaklı sayılar `09` yerine `9` görünür. Düzeltme:

```javascript
function sifirDoldur(sayi) {
    // Sayı 10'dan küçükse başına "0" ekle
    return sayi < 10 ? "0" + sayi : String(sayi);
}

let simdi = new Date();
let saat    = sifirDoldur(simdi.getHours());   // "09" değil "9" değil
let dakika  = sifirDoldur(simdi.getMinutes()); // "05" formatında
let saniye  = sifirDoldur(simdi.getSeconds());

console.log(`${saat}:${dakika}:${saniye}`); // 09:05:03

// Modern alternatif: String.padStart()
let saat2 = String(simdi.getHours()).padStart(2, "0");
```

---

## 5. setInterval ile Canlı Saat

`setInterval`, belirli aralıklarla bir fonksiyonu tekrar çalıştırır.

```javascript
// Her 1000ms (1 saniye) de bir güncelle
setInterval(function() {
    let simdi = new Date();
    let saat = simdi.getHours().toString().padStart(2, "0");
    let dk   = simdi.getMinutes().toString().padStart(2, "0");
    let sn   = simdi.getSeconds().toString().padStart(2, "0");

    document.getElementById("saat").textContent = `${saat}:${dk}:${sn}`;
}, 1000);
```

---

## 6. setTimeout - Gecikmeli Çalıştırma

`setTimeout`, belirli bir süre sonra bir kez çalışır.

```javascript
// 3 saniye sonra çalıştır
setTimeout(function() {
    document.getElementById("mesaj").textContent = "3 saniye geçti!";
}, 3000);

// 5 saniye sonra sayfayı yönlendir
// (JavaScript Uyg-1.html örneğinden - sayfa yönlendirme)
setTimeout(function() {
    window.location.href = "https://www.google.com";
}, 5000);
```

---

## 7. Tarih Karşılaştırma ve Fark Hesaplama

```javascript
// İki tarih arasındaki gün farkı
let baslangic = new Date("2026-01-01");
let bitis     = new Date("2026-05-20");

let farkMs  = bitis - baslangic;           // Milisaniye farkı
let farkGun = Math.floor(farkMs / (1000 * 60 * 60 * 24)); // Güne çevir

console.log(`Aralarında ${farkGun} gün var.`); // 139 gün

// Doğum gününe kaç gün kaldı?
function dogumGununeKacGun(gun, ay) {
    let buYil = new Date().getFullYear();
    let dogum = new Date(buYil, ay - 1, gun); // ay 1'den başlayınca -1 yap
    let simdi = new Date();

    if (dogum < simdi) {
        dogum.setFullYear(buYil + 1); // bu yıl geçtiyse gelecek yıl
    }

    let farkMs  = dogum - simdi;
    return Math.ceil(farkMs / (1000 * 60 * 60 * 24));
}

console.log(`Doğum gününüze ${dogumGununeKacGun(15, 8)} gün kaldı.`);
```

---

## 8. Tam Uygulama: Dijital Saat + Tarih Göstergesi

Bu örnek, mevcut `JavaScript Uyg-2.html` dosyasının geliştirilmiş ve güzelleştirilmiş halidir:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Dijital Saat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: #1a1a2e;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            font-family: 'Courier New', monospace;
        }
        .saat-karti {
            background: #16213e;
            border-radius: 20px;
            padding: 50px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .saat-gosterge {
            font-size: 80px;
            color: #0f3460;
            color: #e94560;
            letter-spacing: 8px;
            text-shadow: 0 0 20px rgba(233, 69, 96, 0.5);
        }
        .tarih-gosterge {
            font-size: 20px;
            color: #a8b2d8;
            margin-top: 15px;
            letter-spacing: 2px;
        }
        .gun-gosterge {
            font-size: 16px;
            color: #64ffda;
            margin-top: 8px;
            text-transform: uppercase;
            letter-spacing: 4px;
        }
        .ikinci-cizgi { color: #e94560; opacity: 0.5; }
    </style>
</head>
<body>
    <div class="saat-karti">
        <div class="saat-gosterge" id="saatGosterge">00:00:00</div>
        <div class="gun-gosterge" id="gunGosterge">---</div>
        <div class="tarih-gosterge" id="tarihGosterge">-- --- ----</div>
    </div>

    <script>
        const AYLAR = [
            "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
        ];
        const GUNLER = [
            "Pazar", "Pazartesi", "Salı", "Çarşamba",
            "Perşembe", "Cuma", "Cumartesi"
        ];

        function saatiGuncelle() {
            let simdi = new Date();

            // Saat bileşenleri (her zaman 2 basamak)
            let saat   = String(simdi.getHours()).padStart(2, "0");
            let dakika = String(simdi.getMinutes()).padStart(2, "0");
            let saniye = String(simdi.getSeconds()).padStart(2, "0");

            // Tarih bileşenleri
            let gun    = simdi.getDate();
            let ayIsim = AYLAR[simdi.getMonth()];
            let yil    = simdi.getFullYear();
            let gunAdi = GUNLER[simdi.getDay()];

            // DOM'u güncelle
            document.getElementById("saatGosterge").textContent = `${saat}:${dakika}:${saniye}`;
            document.getElementById("gunGosterge").textContent = gunAdi;
            document.getElementById("tarihGosterge").textContent = `${gun} ${ayIsim} ${yil}`;
        }

        // Hemen çalıştır (aksi halde 1 saniye gecikmeli başlar)
        saatiGuncelle();

        // Her saniye güncelle
        setInterval(saatiGuncelle, 1000);
    </script>
</body>
</html>
```

---

## 9. Yararlı Date Metotları

```javascript
let tarih = new Date();

// Okuma metotları
tarih.getTime()          // 1970'ten bu yana milisaniye (timestamp)
tarih.toLocaleDateString("tr-TR")  // "20.05.2026"
tarih.toLocaleTimeString("tr-TR")  // "14:35:22"
tarih.toLocaleString("tr-TR")      // "20.05.2026 14:35:22"
tarih.toISOString()      // "2026-05-20T11:35:22.000Z"

// Yazma metotları (genellikle pek kullanılmaz)
tarih.setFullYear(2027);
tarih.setMonth(5);
tarih.setDate(15);
```

---

## Alıştırmalar

1. Kullanıcıdan doğum yılını alın ve kaç yaşında olduğunu hesaplayın.
2. Şu andan itibaren 100 gün sonrasının tarihini bulun ve gösterin.
3. Geri sayım saati yapın: 2 dakika (120 saniye) geri sayan ve bitince "Süre Doldu!" yazan uygulama.
4. `date.html` örneğini geliştirerek hem tarih hem saat gösterecek şekilde yeniden yazın.
