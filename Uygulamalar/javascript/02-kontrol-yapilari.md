# 02 - Kontrol Yapıları: if/else, switch ve Döngüler

## 1. Koşullu İfadeler (if / else if / else)

Program, belirli bir koşul doğruysa farklı, yanlışsa farklı bir yol izler.

### Temel Sözdizimi

```javascript
if (koşul) {
    // koşul doğruysa çalışır
} else if (başkaKoşul) {
    // ikinci koşul doğruysa çalışır
} else {
    // hiçbiri doğru değilse çalışır
}
```

### Örnek: Not Hesaplama

Aşağıdaki örnek, 100'lük notu harf notuna çevirir. Koşullar yukarıdan aşağıya denenir; ilk doğru koşulun bloğu çalışır ve zincirin geri kalanı atlanır:

```javascript
let not = 75;
let harf;

if (not >= 90) {
    harf = "AA";
} else if (not >= 85) {
    harf = "BA";
} else if (not >= 75) {
    harf = "BB";
} else if (not >= 70) {
    harf = "CB";
} else if (not >= 60) {
    harf = "CC";
} else if (not >= 55) {
    harf = "DC";
} else if (not >= 50) {
    harf = "DD";
} else {
    harf = "FF";
}

console.log(`Notunuz: ${not} → Harf Notu: ${harf}`);
// Çıktı: Notunuz: 75 → Harf Notu: BB
```

### Kısa Koşul: Ternary Operatör

Basit if/else işlemleri için kısaltma:

```javascript
// Normal if/else:
let puan = 65;
let sonuc;
if (puan >= 60) {
    sonuc = "Geçti";
} else {
    sonuc = "Kaldı";
}

// Ternary ile aynısı (tek satırda):
let sonuc2 = puan >= 60 ? "Geçti" : "Kaldı";

console.log(sonuc2); // "Geçti"
```

---

## 2. switch İfadesi

Bir değişkenin birden fazla değeri için farklı işlemler yapmak istediğimizde kullanılır.

```javascript
let gun = "Pazartesi";

switch (gun) {
    case "Pazartesi":
    case "Salı":
    case "Çarşamba":
    case "Perşembe":
    case "Cuma":
        console.log("İş günü");
        break; // ← UNUTMAYIN! break olmadan sonraki case'e geçer
    case "Cumartesi":
    case "Pazar":
        console.log("Hafta sonu");
        break;
    default:
        console.log("Geçersiz gün");
}
```

> **Dikkat:** Her `case` sonunda `break` yazılmazsa, doğru case bulunsa bile sonraki case'ler de çalışır!

---

## 3. Döngüler

Aynı işlemi birden fazla kez yapmak için kullanılır.

### 3.1 for Döngüsü

Kaç kez döneceği baştan belli olduğunda kullanılır.

```javascript
// Sözdizimi: for (başlangıç; koşul; artım)
for (let i = 1; i <= 5; i++) {
    console.log(`${i}. tekrar`);
}
// Çıktı:
// 1. tekrar
// 2. tekrar
// 3. tekrar
// 4. tekrar
// 5. tekrar
```

**Faktöriyel Hesaplama:**

```javascript
// 5! = 5 × 4 × 3 × 2 × 1 = 120
let sayi = 5;
let faktoriyel = 1;

for (let i = 1; i <= sayi; i++) {
    faktoriyel *= i; // faktoriyel = faktoriyel * i
}

console.log(`${sayi}! = ${faktoriyel}`); // 5! = 120
```

**Çarpım Tablosu:**

```javascript
let carpan = 7;
console.log(`--- ${carpan} Çarpım Tablosu ---`);

for (let i = 1; i <= 10; i++) {
    console.log(`${carpan} x ${i} = ${carpan * i}`);
}
```

### 3.2 while Döngüsü

Koşul doğru olduğu sürece döner. Kaç kez döneceği önceden bilinmediğinde kullanılır.

```javascript
let sayac = 0;
let toplam = 0;

while (sayac < 10) {
    sayac++;
    toplam += sayac;
    console.log(`Sayaç: ${sayac}, Toplam: ${toplam}`);
}

console.log(`1'den 10'a kadar toplam: ${toplam}`); // 55
```

> **Uyarı:** Koşulun bir noktada `false` olacağından emin olun, yoksa **sonsuz döngü** oluşur!

### 3.3 do...while Döngüsü

Koşul yanlış olsa bile en az bir kez çalışır.

```javascript
let girdi, yas;

do {
    girdi = prompt("Kaç yaşındasınız? (18-99 arası girin)");
    if (girdi === null) break;      // İptal'e basıldı: döngüden çık
    yas = Number(girdi);
} while (girdi.trim() === "" || Number.isNaN(yas) || yas < 18 || yas > 99);

if (girdi === null) {
    console.log("Kullanıcı girişi iptal etti.");
} else {
    console.log(`Geçerli yaş girildi: ${yas}`);
}
```

> **Neden bu kadar koşul?** `prompt` her zaman metin döndürür; kullanıcı İptal'e basarsa `null` döndürür. `Number("abc")` sonucu `NaN` olur ve `NaN` ile yapılan her karşılaştırma (`NaN < 18`, `NaN > 99`) `false` verir. Bu nedenle yalnızca `yas < 18 || yas > 99` yazılsaydı "abc" girişi geçerli sayılır ve ekrana `NaN` yazılırdı. `Number(null)` ve `Number("")` ise `0` sonucunu verir; İptal ayrıca ele alınmasaydı kullanıcı döngüden hiç çıkamazdı.

### 3.4 Döngü Kontrolü: break ve continue

```javascript
// break: döngüyü tamamen durdurur
for (let i = 1; i <= 10; i++) {
    if (i === 5) break; // 5'e gelince dur
    console.log(i);
}
// Çıktı: 1, 2, 3, 4

// continue: o adımı atlar, devam eder
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue; // çift sayıları atla
    console.log(i);
}
// Çıktı: 1, 3, 5, 7, 9 (sadece tekler)
```

---

## 4. Dizi (Array) ile Döngü

```javascript
let ogrenciler = ["Ali", "Ayşe", "Mehmet", "Fatma", "Zeynep"];

// for döngüsü ile
for (let i = 0; i < ogrenciler.length; i++) {
    console.log(`${i + 1}. ${ogrenciler[i]}`);
}

// for...of döngüsü (daha okunabilir)
for (let ogrenci of ogrenciler) {
    console.log(ogrenci);
}

// forEach metodu
ogrenciler.forEach(function(ogrenci, indeks) {
    console.log(`${indeks + 1}. ${ogrenci}`);
});
```

---

## 5. Tam Uygulama: Not Hesaplama Sistemi

Aşağıdaki örnek, `if / else if` zincirini bir web sayfasında kullanır. Geçme kuralı, bu derslerdeki diğer not örnekleriyle aynıdır: ağırlıklı ortalama en az 60 ve final notu en az 50 olmalıdır.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Not Hesaplama Sistemi</title>
    <style>
        body { font-family: Arial; max-width: 500px; margin: 40px auto; padding: 20px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; font-weight: bold; margin-bottom: 5px; }
        input { width: 100%; padding: 10px; border: 2px solid #ddd;
                border-radius: 5px; font-size: 16px; box-sizing: border-box; }
        button { background: #27ae60; color: white; border: none;
                 padding: 12px 30px; border-radius: 5px; font-size: 16px;
                 cursor: pointer; width: 100%; }
        button:hover { background: #229954; }
        .sonuc { margin-top: 20px; padding: 20px; border-radius: 8px; }
        .gecti { background: #d5f5e3; border: 2px solid #27ae60; }
        .kaldi { background: #fadbd8; border: 2px solid #e74c3c; }
    </style>
</head>
<body>
    <h2>Not Hesaplama Sistemi</h2>

    <div class="form-group">
        <label for="vize">Vize Notu (Ağırlık: %40):</label>
        <input type="number" id="vize" min="0" max="100" placeholder="0-100 arası">
    </div>

    <div class="form-group">
        <label for="final">Final Notu (Ağırlık: %60):</label>
        <input type="number" id="final" min="0" max="100" placeholder="0-100 arası">
    </div>

    <button onclick="notHesapla()">Hesapla</button>

    <div id="sonuc" class="sonuc" style="display:none;"></div>

    <script>
        function notHesapla() {
            // Girilen değerleri al
            let vizeMetni  = document.getElementById("vize").value;
            let finalMetni = document.getElementById("final").value;
            let vize  = Number(vizeMetni);
            let final = Number(finalMetni);
            let sonucDiv = document.getElementById("sonuc");

            // Geçerlilik kontrolü: Number("") sonucu 0 olduğu için boş alanı ayrıca denetliyoruz
            if (vizeMetni === "" || finalMetni === "" ||
                vize < 0 || vize > 100 || final < 0 || final > 100) {
                alert("Lütfen 0-100 arasında not girin!");
                return;
            }

            // Ağırlıklı ortalama hesapla
            let ortalama = (vize * 0.4) + (final * 0.6);
            ortalama = Math.round(ortalama * 10) / 10; // 1 ondalık basamak

            // Harf notunu belirle (if/else if zinciri)
            let harfNotu;
            if (ortalama >= 90)      harfNotu = "AA";
            else if (ortalama >= 85) harfNotu = "BA";
            else if (ortalama >= 75) harfNotu = "BB";
            else if (ortalama >= 70) harfNotu = "CB";
            else if (ortalama >= 60) harfNotu = "CC";
            else if (ortalama >= 55) harfNotu = "DC";
            else if (ortalama >= 50) harfNotu = "DD";
            else                     harfNotu = "FF";

            // Geçti mi kaldı mı?
            let gectiMi = ortalama >= 60 && final >= 50;

            // Sonucu göster
            sonucDiv.className = "sonuc " + (gectiMi ? "gecti" : "kaldi");
            sonucDiv.innerHTML = `
                <h3>${gectiMi ? "✓ Geçti" : "✗ Kaldı"}</h3>
                <p><strong>Vize:</strong> ${vize}</p>
                <p><strong>Final:</strong> ${final}</p>
                <p><strong>Ağırlıklı Ortalama:</strong> ${ortalama}</p>
                <p><strong>Harf Notu:</strong> ${harfNotu}</p>
            `;
            sonucDiv.style.display = "block";
        }
    </script>
</body>
</html>
```

---

## Alıştırmalar

1. 1'den 100'e kadar olan sayılardan **hem 3'e hem 5'e bölünebilenleri** (yani 15'in katlarını) ekrana yazdırın.
2. Kullanıcıdan bir sayı alın ve o sayının kaç basamaklı olduğunu bulun.
3. Haftanın gününü soran ve o güne göre farklı mesaj gösteren bir `switch` yapısı oluşturun.
4. Dizideki notların ortalamasını hesaplayın: `[75, 88, 62, 95, 70, 84]`
