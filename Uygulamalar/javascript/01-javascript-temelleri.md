# 01 - JavaScript Temelleri: Değişkenler, Veri Tipleri ve Operatörler

## 1. Değişkenler Nedir?

Değişken, bir veriyi hafızada saklayan isimlendirilmiş bir kutucuktur.

JavaScript'te değişken tanımlamak için 3 anahtar kelime vardır:

| Anahtar Kelime | Kullanım | Açıklama |
|----------------|----------|----------|
| `var` | Eski yöntem | Tüm dosyada geçerli, tekrar tanımlanabilir |
| `let` | Modern yöntem | Sadece blok içinde geçerli, değeri değişebilir |
| `const` | Sabit değer | Değeri bir daha değiştirilemez |

```javascript
// var - eski yöntem (artık pek kullanılmıyor)
var isim = "Ahmet";

// let - değeri değişebilen değişken
let yas = 20;
yas = 21; // değiştirilebilir ✓

// const - sabit değer
const PI = 3.14159;
// PI = 3; // HATA! const değiştirilemez ✗
```

---

## 2. Veri Tipleri

JavaScript'te 7 temel veri tipi vardır:

### 2.1 String (Metin)

Tırnak işaretleri içine yazılan metinlerdir.

```javascript
let ad = "Fatma";           // çift tırnak
let soyad = 'Yılmaz';       // tek tırnak
let mesaj = `Merhaba, ${ad} ${soyad}!`; // şablon literal (template literal)

console.log(mesaj); // Çıktı: Merhaba, Fatma Yılmaz!
```

**String özellikleri ve metotları:**

```javascript
let metin = "Web Teknolojileri";

console.log(metin.length);          // 17 (karakter sayısı)
console.log(metin.toUpperCase());   // WEB TEKNOLOJİLERİ
console.log(metin.toLowerCase());   // web teknolojileri
console.log(metin.includes("Web")); // true
console.log(metin.indexOf("Tek"));  // 4 (kaçıncı karakterde başladığı)
```

---

### 2.2 Number (Sayı)

Tam sayı ve ondalıklı sayıları kapsar.

```javascript
let tamSayi = 42;
let ondalikli = 3.14;
let negatif = -10;

// Matematiksel işlemler
console.log(5 + 3);   // 8
console.log(10 - 4);  // 6
console.log(3 * 7);   // 21
console.log(15 / 4);  // 3.75
console.log(15 % 4);  // 3 (kalan - modulo)
console.log(2 ** 8);  // 256 (üs alma)
```

**Sayı dönüşümleri:**

```javascript
let metinSayi = "42";
let gercekSayi = Number(metinSayi); // string'i sayıya çevirir
let tamSayiDon = parseInt("3.9");   // 3 (ondalık kısmı atar)
let ondalikDon = parseFloat("3.9"); // 3.9

console.log(typeof metinSayi);  // "string"
console.log(typeof gercekSayi); // "number"
```

---

### 2.3 Boolean (Mantıksal)

Sadece `true` (doğru) veya `false` (yanlış) değer alır.

```javascript
let ogrenciMi = true;
let mezunMu = false;

// Karşılaştırma işlemleri boolean döndürür
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 === 5); // true (hem değer hem tip eşit mi?)
console.log(5 == "5");  // true  (sadece değer eşit mi? - dikkat!)
console.log(5 === "5"); // false (değer VE tip eşit mi? - güvenli yol)
```

---

### 2.4 Undefined ve Null

```javascript
let tanimlanmamis; // değer atanmamış
console.log(tanimlanmamis); // undefined

let bosDeger = null; // kasıtlı olarak boş bırakılmış
console.log(bosDeger); // null
```

---

### 2.5 typeof Operatörü

Bir değişkenin tipini öğrenmek için kullanılır:

```javascript
console.log(typeof "Merhaba"); // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (JavaScript'in bilinen bir hatası!)
```

---

## 3. Operatörler

### 3.1 Aritmetik Operatörler

```javascript
let a = 10, b = 3;

console.log(a + b);  // 13 - toplama
console.log(a - b);  // 7  - çıkarma
console.log(a * b);  // 30 - çarpma
console.log(a / b);  // 3.333... - bölme
console.log(a % b);  // 1  - mod (kalan)
console.log(a ** b); // 1000 - üs (10³)
```

### 3.2 Atama Operatörleri

```javascript
let x = 10;

x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
x ++;    // x = x + 1 → 7
x --;    // x = x - 1 → 6
```

### 3.3 Karşılaştırma Operatörleri

```javascript
let sayi = 5;

console.log(sayi > 3);   // true
console.log(sayi < 3);   // false
console.log(sayi >= 5);  // true
console.log(sayi <= 4);  // false
console.log(sayi == 5);  // true (gevşek eşitlik)
console.log(sayi === 5); // true (katı eşitlik - BUNU KULLANIN)
console.log(sayi != 3);  // true
console.log(sayi !== 3); // true (katı eşitsizlik)
```

### 3.4 Mantıksal Operatörler

```javascript
let yas = 20;
let ogrenciMi = true;

// && (VE) - her iki koşul da doğruysa true
console.log(yas >= 18 && ogrenciMi); // true

// || (VEYA) - en az biri doğruysa true
console.log(yas < 18 || ogrenciMi); // true

// ! (DEĞİL) - true ise false, false ise true yapar
console.log(!ogrenciMi); // false
```

---

## 4. Konsola Çıktı Verme

```javascript
console.log("Merhaba!");        // Normal çıktı
console.warn("Dikkat!");        // Sarı uyarı
console.error("Hata oluştu!"); // Kırmızı hata mesajı
```

> **İpucu:** Tarayıcıda F12 tuşuna basarak Geliştirici Araçları → Console sekmesini açabilirsiniz.

---

## 5. Tam Uygulama Örneği

Aşağıdaki kodu bir `.html` dosyasına kopyalayıp tarayıcıda açın:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Temelleri</title>
    <style>
        body { font-family: Arial; max-width: 600px; margin: 50px auto; padding: 20px; }
        .sonuc { background: #e8f4f8; padding: 15px; border-radius: 8px; margin-top: 20px; }
        button { background: #3498db; color: white; border: none; padding: 10px 20px;
                 border-radius: 5px; cursor: pointer; font-size: 16px; }
        button:hover { background: #2980b9; }
        input { padding: 8px; font-size: 16px; border: 2px solid #ddd; border-radius: 5px; width: 100%; }
    </style>
</head>
<body>
    <h1>Bilgi Kartı Oluşturucu</h1>

    <label>Adınız:</label>
    <input type="text" id="adInput" placeholder="Adınızı girin...">
    <br><br>

    <label>Yaşınız:</label>
    <input type="number" id="yasInput" placeholder="Yaşınızı girin...">
    <br><br>

    <button onclick="bilgiKarti()">Bilgi Kartı Oluştur</button>

    <div class="sonuc" id="sonucAlani" style="display:none;">
        <h3>Bilgi Kartınız:</h3>
        <p id="bilgiMetni"></p>
    </div>

    <script>
        function bilgiKarti() {
            // Kullanıcıdan değerleri al
            let ad = document.getElementById("adInput").value;
            let yas = Number(document.getElementById("yasInput").value);

            // Boş girdi kontrolü
            if (ad === "" || yas === 0) {
                alert("Lütfen tüm alanları doldurun!");
                return;
            }

            // Doğum yılını hesapla (const kullanıyoruz çünkü değişmez)
            const buYil = new Date().getFullYear();
            const dogumYili = buYil - yas;

            // Öğrenci mi? (boolean kullanımı)
            let ogrenciMi = yas >= 18 && yas <= 30;

            // Şablon literal ile mesaj oluştur
            let mesaj = `
                <strong>Ad:</strong> ${ad}<br>
                <strong>Yaş:</strong> ${yas}<br>
                <strong>Tahmini Doğum Yılı:</strong> ${dogumYili}<br>
                <strong>Öğrenci Olabilir mi?</strong> ${ogrenciMi ? "Evet" : "Hayır"}<br>
                <strong>Ad Uzunluğu:</strong> ${ad.length} karakter
            `;

            // Sonucu sayfada göster
            document.getElementById("bilgiMetni").innerHTML = mesaj;
            document.getElementById("sonucAlani").style.display = "block";
        }
    </script>
</body>
</html>
```

---

## Alıştırmalar

1. `firstName` ve `lastName` adında iki değişken tanımlayın ve tam adınızı bir `fullName` değişkenine birleştirin.
2. 0-100 arasında bir not değişkeni tanımlayın. Notun 50'den büyük olup olmadığını `console.log` ile yazdırın.
3. Bir dikdörtgenin en ve boyunu değişkenlerde saklayın, alanını hesaplayıp ekrana yazdırın.
