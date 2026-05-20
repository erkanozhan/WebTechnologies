# 03 - Fonksiyonlar

## 1. Fonksiyon Nedir?

Fonksiyon, belirli bir görevi yerine getiren ve tekrar tekrar kullanılabilen kod bloğudur.

**Fonksiyon kullanmanın avantajları:**
- Aynı kodu tekrar tekrar yazmak zorunda kalmayız (**DRY** prensibi: Don't Repeat Yourself)
- Kodu daha okunabilir ve düzenli hale getirir
- Hata ayıklamayı kolaylaştırır

---

## 2. Fonksiyon Tanımlama Yöntemleri

### 2.1 Klasik Fonksiyon Tanımı

```javascript
// Tanımlama
function selamVer() {
    console.log("Merhaba, Dünya!");
}

// Çağırma (kullanma)
selamVer(); // Çıktı: Merhaba, Dünya!
selamVer(); // Yeniden çağırılabilir
```

### 2.2 Parametreli Fonksiyon

Fonksiyona dışarıdan değer gönderilmesini sağlar:

```javascript
function selamVer(isim) {
    console.log(`Merhaba, ${isim}!`);
}

selamVer("Ahmet");  // Merhaba, Ahmet!
selamVer("Fatma");  // Merhaba, Fatma!
selamVer("Dünya");  // Merhaba, Dünya!
```

Birden fazla parametre:

```javascript
function topla(sayi1, sayi2) {
    let sonuc = sayi1 + sayi2;
    console.log(`${sayi1} + ${sayi2} = ${sonuc}`);
}

topla(3, 5);   // 3 + 5 = 8
topla(10, 20); // 10 + 20 = 30
```

### 2.3 Değer Döndüren Fonksiyon (return)

Fonksiyondan hesaplama sonucunu geri almak için `return` kullanılır:

```javascript
function karesi(sayi) {
    return sayi * sayi; // sonucu geri döndür
}

// Dönen değeri bir değişkene atıyoruz
let sonuc = karesi(5);
console.log(sonuc); // 25

// Ya da direkt kullanıyoruz
console.log(karesi(7)); // 49
console.log(karesi(10) + karesi(5)); // 100 + 25 = 125
```

> **Önemli:** `return` komutu çalışınca fonksiyon durur ve değeri döndürür.

### 2.4 Varsayılan Parametre Değeri

Parametre girilmezse ne olacağını belirleriz:

```javascript
function selamVer(isim = "Misafir") {
    return `Hoş geldiniz, ${isim}!`;
}

console.log(selamVer("Mehmet")); // Hoş geldiniz, Mehmet!
console.log(selamVer());         // Hoş geldiniz, Misafir!
```

---

## 3. Fonksiyon İfadeleri (Function Expression)

Fonksiyonu bir değişkene atayabiliriz:

```javascript
// Fonksiyon ifadesi
const topla = function(a, b) {
    return a + b;
};

console.log(topla(3, 7)); // 10
```

### Ok Fonksiyonları (Arrow Functions) - Modern Yöntem

```javascript
// Klasik fonksiyon
function carp(a, b) {
    return a * b;
}

// Ok fonksiyonu ile aynısı
const carp = (a, b) => a * b;

// Tek parametrede parantez isteğe bağlı
const karesi = sayi => sayi * sayi;

// Çok satırlı ok fonksiyonu
const mutlakDeger = sayi => {
    if (sayi < 0) return -sayi;
    return sayi;
};

console.log(carp(4, 5));       // 20
console.log(karesi(6));        // 36
console.log(mutlakDeger(-8));  // 8
```

---

## 4. Özyinelemeli Fonksiyon (Recursive Function)

Kendi kendini çağıran fonksiyondur. Faktöriyel hesabı en klasik örnektir.

**Faktöriyel Nedir?**
- 5! = 5 × 4 × 3 × 2 × 1 = 120
- 4! = 4 × 3 × 2 × 1 = 24
- 1! = 1
- 0! = 1 (tanım gereği)

```javascript
// Özyinelemeli faktöriyel fonksiyonu
// (JavaScript_3.html ve JavaScript Uyg-3.html'den alınmış, düzeltilmiş)
function faktoriyel(n) {
    // Temel durum: sonsuz döngüyü önler!
    if (n === 0 || n === 1) {
        return 1;
    }
    // Özyineleme: fonksiyon kendini çağırır
    return n * faktoriyel(n - 1);
}

// Çağrı sırası: faktoriyel(4)
//   = 4 * faktoriyel(3)
//   = 4 * 3 * faktoriyel(2)
//   = 4 * 3 * 2 * faktoriyel(1)
//   = 4 * 3 * 2 * 1
//   = 24

console.log(faktoriyel(0));  // 1
console.log(faktoriyel(1));  // 1
console.log(faktoriyel(5));  // 120
console.log(faktoriyel(10)); // 3628800
```

---

## 5. Kapsam (Scope)

Değişkenlerin hangi bölgede geçerli olduğudur.

```javascript
let global = "Ben global değişkenim"; // Her yerden erişilebilir

function kapsam() {
    let yerel = "Ben yerel değişkenim"; // Sadece bu fonksiyon içinde
    console.log(global); // ✓ Erişilebilir
    console.log(yerel);  // ✓ Erişilebilir
}

kapsam();
console.log(global); // ✓ Erişilebilir
// console.log(yerel); // ✗ HATA! yerel fonksiyon dışında tanımsız
```

---

## 6. Tam Uygulama: Faktöriyel Tablosu

Bu örnek, `JavaScript_3.html` ve `JavaScript Uyg-3.html` dosyalarının düzeltilmiş ve geliştirilmiş versiyonudur:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Faktöriyel Tablosu</title>
    <style>
        body { font-family: Arial; max-width: 500px; margin: 40px auto; padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th { background: #2c3e50; color: white; padding: 12px; }
        td { padding: 10px; border: 1px solid #ddd; text-align: center; }
        tr:nth-child(even) { background: #f2f2f2; }
        tr:hover { background: #d6eaf8; }
        .buyuk-sayi { color: #e74c3c; font-weight: bold; }
        input { padding: 8px; font-size: 16px; border: 2px solid #ddd;
                border-radius: 5px; width: 100%; box-sizing: border-box; }
        button { background: #2c3e50; color: white; border: none;
                 padding: 12px; width: 100%; border-radius: 5px;
                 font-size: 16px; cursor: pointer; margin-top: 10px; }
        button:hover { background: #1a252f; }
    </style>
</head>
<body>
    <h2>Faktöriyel Tablosu Oluşturucu</h2>

    <label>Kaçıncı faktöriyele kadar hesaplayalım? (1-15)</label>
    <input type="number" id="sinir" value="10" min="1" max="15">
    <button onclick="tabloOlustur()">Tabloyu Göster</button>

    <div id="tablo"></div>

    <script>
        // Özyinelemeli faktöriyel fonksiyonu
        function faktoriyel(n) {
            if (n === 0 || n === 1) return 1;
            return n * faktoriyel(n - 1);
        }

        // Tabloyu HTML olarak oluşturan fonksiyon
        function tabloOlustur() {
            let sinir = Number(document.getElementById("sinir").value);

            // Sınır kontrolü
            if (sinir < 1 || sinir > 15) {
                alert("Lütfen 1-15 arasında bir değer girin!");
                return;
            }

            // HTML tablosu oluştur
            let html = `
                <table>
                    <thead>
                        <tr>
                            <th>n</th>
                            <th>n! (Faktöriyel)</th>
                            <th>Açıklama</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            for (let i = 1; i <= sinir; i++) {
                let f = faktoriyel(i);
                // Büyük sayıları kırmızı göster
                let sinifIsmi = f > 1000000 ? "buyuk-sayi" : "";

                // Çarpım açıklamasını oluştur
                let aciklama = "";
                for (let j = i; j >= 1; j--) {
                    aciklama += j;
                    if (j > 1) aciklama += " × ";
                }

                html += `
                    <tr>
                        <td>${i}</td>
                        <td class="${sinifIsmi}">${f.toLocaleString("tr-TR")}</td>
                        <td>${aciklama}</td>
                    </tr>
                `;
            }

            html += "</tbody></table>";
            document.getElementById("tablo").innerHTML = html;
        }

        // Sayfa yüklenince otomatik çalıştır
        tabloOlustur();
    </script>
</body>
</html>
```

---

## 7. Yararlı Yerleşik Fonksiyonlar

```javascript
// Matematiksel fonksiyonlar
console.log(Math.abs(-7));       // 7 (mutlak değer)
console.log(Math.round(4.6));    // 5 (yuvarla)
console.log(Math.floor(4.9));    // 4 (aşağı yuvarla)
console.log(Math.ceil(4.1));     // 5 (yukarı yuvarla)
console.log(Math.max(3, 7, 1));  // 7 (en büyük)
console.log(Math.min(3, 7, 1));  // 1 (en küçük)
console.log(Math.pow(2, 8));     // 256 (üs)
console.log(Math.sqrt(16));      // 4 (karekök)
console.log(Math.random());      // 0-1 arası rastgele sayı

// 1-100 arası rastgele tam sayı:
let rastgele = Math.floor(Math.random() * 100) + 1;
```

---

## Alıştırmalar

1. İki sayının EBOB'unu (En Büyük Ortak Bölen) bulan bir fonksiyon yazın.
2. Bir metnin palindrom olup olmadığını kontrol eden fonksiyon yazın. (Palindrom: önden ve arkadan aynı okunan sözcük, örn: "aba", "kayak")
3. Fibonacci dizisinin n. terimini özyineleme ile hesaplayan fonksiyon yazın. (0, 1, 1, 2, 3, 5, 8, 13, ...)
4. Kullanıcıdan bir sayı alıp o sayıya kadar olan tüm asal sayıları listeleyen fonksiyon yazın.
