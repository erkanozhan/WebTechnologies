# JavaScript Ders Notu

## 1. Client-Server Mimarisi

Client-Server mimarisi, istemci (client) ve sunucu (server) arasında görev paylaşımı yapılan bir sistem modelidir.

- **Client (İstemci):** Web tarayıcısı gibi, kullanıcının isteğini sunucuya ileten ve gelen cevabı görüntüleyen taraftır.
- **Server (Sunucu):** İstemciden gelen isteği işleyip uygun cevabı dönen bilgisayardır.

Bu yapı sayesinde görevler paylaşılır: istemci kullanıcı arayüzünü çalıştırırken, sunucu veritabanı işlemlerini, kimlik doğrulamasını vb. yürütür.

---

## 2. Client-side ve Server-side Scripting

### Client-side Scripting

- Tarayıcıda çalışır.
- Kullanıcının bilgisayarında işlenir.
- Hızlı geri dönüş sağlar.
- Güvenlik açısından sınırlıdır.
- Örnek diller: **JavaScript**, HTML, CSS

### Server-side Scripting

- Sunucuda çalışır.
- Veritabanı işlemleri ve kullanıcı doğrulaması yapılır.
- Her işlemde sunucuya istek gönderilir.
- Güvenliğe daha uygundur.
- Örnek diller: **PHP**, Python, Node.js, ASP.NET

---

## 3. JavaScript Nedir?

JavaScript, web tarayıcılarında çalışan **istemci taraflı (client-side)** bir **script dilidir**. HTML ve CSS ile birlikte çalışarak web sayfalarına **etkileşim ve dinamiklik** kazandırır.

JavaScript programlama dilinden farklı olarak tarayıcıda yorumlanarak çalışır ve derlenmeye ihtiyaç duymaz.

---

## 4. JavaScript Nasıl Eklenir?

JavaScript üç yolla web sayfasına eklenebilir:

- **HTML içinde script etiketiyle**
- **Harici `.js` dosyası ile**
- **HTML öğelerine doğrudan olay (event) atanarak**

### Örnek:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS Giriş</title>
</head>
<body>
  <h1>Merhaba</h1>
  <script>
    alert("Sayfaya hoş geldiniz!");
  </script>
</body>
</html>
```

---

## 5. Değişkenler

Değişkenler veri saklamak için kullanılır.

- `let` – değiştirilebilir
- `const` – sabit (değiştirilemez)
- `var` – eski (artık önerilmez)

```javascript
let isim = "Ayşe";
const yas = 30;
```

---

## 6. Veri Türleri

JavaScript’te temel veri türleri şunlardır:

- **String** → `"merhaba"`
- **Number** → `42`, `3.14`
- **Boolean** → `true`, `false`
- **Array** → `[1, 2, 3]`
- **Object** → `{ad: "Ali", yas: 25}`
- **null** → boş değeri ifade eder
- **undefined** → tanımlanmamış değişken

---

## 7. Operatörler

| Tür | Operatörler |
|-----|-------------|
| Aritmetik | `+`, `-`, `*`, `/`, `%` |
| Karşılaştırma | `==`, `===`, `!=`, `!==`, `<`, `>` |
| Mantıksal | `&&`, `||`, `!` |

---

## 8. Koşul İfadeleri (if/else)

```javascript
let puan = 75;

if (puan >= 90) {
  console.log("Pekiyi");
} else if (puan >= 70) {
  console.log("İyi");
} else {
  console.log("Başarısız");
}
```

---

## 9. Döngüler

### `for` Döngüsü

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### `while` Döngüsü

```javascript
let i = 0;
while (i < 3) {
  console.log("i: " + i);
  i++;
}
```

---

## 10. Fonksiyonlar

Fonksiyonlar tekrar eden işlemleri kapsüllemek için kullanılır.

```javascript
function topla(a, b) {
  return a + b;
}

let sonuc = topla(5, 7); // 12
```

---

## 11. Olaylar (Events)

Olaylar, kullanıcının sayfa ile etkileşime girmesiyle tetiklenir.

### Örnek:

```html
<button onclick="selamla()">Tıkla</button>

<script>
function selamla() {
  alert("Merhaba kullanıcı!");
}
</script>
```

---

## 12. DOM (Document Object Model)

JavaScript ile HTML elemanlarına erişip değiştirmek için kullanılır.

### Örnek:

```html
<p id="metin">Eski Metin</p>
<button onclick="degistir()">Değiştir</button>

<script>
function degistir() {
  document.getElementById("metin").innerText = "Yeni Metin";
}
</script>
```

---

## 13. Diziler (Arrays)

Verileri sıralı şekilde saklamak için kullanılır.

```javascript
let sayilar = [10, 20, 30];

sayilar.push(40);  // sona ekler
sayilar.pop();     // son elemanı çıkarır

sayilar.forEach(function(sayi) {
  console.log(sayi);
});
```

---

## 14. Nesneler (Objects)

Anahtar-değer (key-value) yapısıyla veri saklar.

```javascript
let ogrenci = {
  ad: "Zeynep",
  yas: 22
};

console.log(ogrenci.ad); // Zeynep
```

---

## 15. Koşul Kısaltması (Ternary Operator)

```javascript
let yas = 18;
let mesaj = (yas >= 18) ? "Reşit" : "Çocuk";
console.log(mesaj);
```

---

## 16. Template Literals (Şablon Metinler)

Backtick `` ` `` karakteri ile kullanılır.

```javascript
let ad = "Kemal";
console.log(`Merhaba, ${ad}`);
```

---

## 17. Zamanlayıcılar

Belirli sürede ya da aralıklarla işlem yapmak için:

- `setTimeout()` → bir defaya mahsus gecikmeli çalıştırır
- `setInterval()` → periyodik çalıştırır

```javascript
setTimeout(function() {
  console.log("3 saniye sonra çalıştı");
}, 3000);
```

---

## 18. JSON (JavaScript Object Notation)

Veri paylaşımı için yaygın kullanılan formattır.

```javascript
let jsonVeri = '{"ad":"Ali","yas":25}';
let nesne = JSON.parse(jsonVeri);
console.log(nesne.ad); // Ali
```

---

## 19. JavaScript Nerelerde Kullanılır?

- Web sitelerinde dinamik içerik oluşturma
- Form doğrulama
- Buton ve menü etkileşimi
- Web oyunları
- Modern framework’lerle (React, Angular) SPA uygulamaları

---
### Örnek

```html
<!DOCTYPE HTML>
<html lang="tr">
  <!-- Belge türü ve dil ayarı -->
  <meta charset="UTF-8">
  <!-- Karakter kodlaması Türkçe karakterler için UTF-8 olarak ayarlandı -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Mobil uyumluluk için viewport ayarı -->
  <title>Not Hesaplama</title>
  <!-- Sayfa başlığı -->
<head>
  
  <label for="vize">Vize Notu (%40):</label>
  <!-- Vize notu için etiket -->
  <input type="number" id="vize" /><br>
  <!-- Vize notu girişi için sayı tipi input ve satır sonu -->
  <label for="final">Final Notu (%60):</label>
  <!-- Final notu için etiket -->
  <input type="number" id="final" /><br>
  <!-- Final notu girişi için sayı tipi input ve satır sonu -->
  <button onclick="notHesapla()">Sonucu Göster</button>
  <!-- Sonucu hesaplamak için buton, tıklandığında notHesapla fonksiyonu çağrılır -->
  <p id="notSonucu"></p>
  <!-- Sonucun ekrana yazdırılacağı paragraf etiketi -->

  <script>
    function notHesapla() {
    // notHesapla adında bir fonksiyon tanımlanıyor
    let vize = parseFloat(document.getElementById("vize").value);
    // "vize" inputundan alınan değer ondalıklı sayıya çevrilerek vize değişkenine atanıyor
    let final = parseFloat(document.getElementById("final").value);
    // "final" inputundan alınan değer ondalıklı sayıya çevrilerek final değişkenine atanıyor
    let sonucText = document.getElementById("notSonucu");
    // Sonucun yazdırılacağı paragraf etiketi seçiliyor

    if (isNaN(vize) || isNaN(final) || vize < 0 || vize > 100 || final < 0 || final > 100) {
    // Girilen değerlerin sayı olup olmadığı ve 0-100 aralığında olup olmadığı kontrol ediliyor
    sonucText.textContent = "Lütfen 0-100 arası geçerli notlar giriniz.";
    // Geçersiz girişte kullanıcıya uyarı mesajı gösteriliyor
    return;
    // Fonksiyon burada sonlandırılıyor
    }

    let ortalama = (vize * 0.4) + (final * 0.6);
    // Vize ve final notları ağırlıklı olarak hesaplanıp ortalama değişkenine atanıyor
    let durum = (ortalama >= 60 && final >= 50) ? "Geçtiniz" : "Kaldınız";
    // Ortalama 60 ve üzeri, final 50 ve üzeri ise "Geçtiniz", aksi halde "Kaldınız" sonucu atanıyor

    sonucText.textContent = `Ortalama: ${ortalama.toFixed(2)} / ${durum}`;
    // Sonuç, virgülden sonra iki basamak olacak şekilde ekrana yazdırılıyor
  }
  </script>
</body>
</html>
```

---

### Kodun Genel Açıklaması

Bu HTML ve JavaScript kodu, bir öğrencinin vize ve final notlarını alarak, ağırlıklı ortalamasını hesaplamak ve başarı durumunu belirlemek amacıyla tasarlanmıştır. Kullanıcıdan alınan vize ve final notları, `parseFloat` fonksiyonu ile ondalıklı sayıya dönüştürülür. Girişlerin geçerliliği, hem sayı olup olmadıkları hem de 0 ile 100 arasında olup olmadıkları koşullarıyla denetlenir. Geçersiz bir girişte kullanıcıya uyarı mesajı gösterilir ve işlem sonlandırılır. Geçerli notlar için, vize notunun %40'ı ve final notunun %60'ı alınarak ortalama hesaplanır. Ardından, ortalama en az 60 ve final notu en az 50 ise öğrenci "Geçtiniz", aksi halde "Kaldınız" olarak değerlendirilir. Sonuç, iki ondalık basamak hassasiyetinde kullanıcıya sunulur. Bu yapı, temel kullanıcı girişi doğrulama ve koşullu mantık uygulamalarını içeren klasik bir not hesaplama algoritması örneğidir.
### Kodun Açıklaması:
## JavaScript Fonksiyonunun Açıklamaları

### `parseFloat()`

- `parseFloat()` fonksiyonu, string (metin) türündeki veriyi ondalıklı sayıya dönüştürür.
- `input` elemanlarından alınan değerler varsayılan olarak string'tir.
- Örnek: `"85.6"` → `85.6` (float)

### `document.getElementById()`

- HTML içerisindeki `id` özelliğine sahip elemente erişmek için kullanılır.

### `isNaN()`

- `isNaN()` fonksiyonu bir değerin sayı olup olmadığını kontrol eder.
- `NaN`: "Not a Number" (Geçersiz sayı)

### `textContent`

- Belirli bir HTML elemanının yazı içeriğini değiştirmek için kullanılır.

---

## Mantıksal Operatörler

### `||` (VEYA - OR)

- En az bir koşul doğruysa işlem gerçekleşir.
- Örnek:

```javascript
if (vize < 0 || vize > 100)
```

Eğer `vize` ya 0’dan küçük ya da 100’den büyükse `true` olur.

### `&&` (VE - AND)

- Tüm koşullar doğruysa işlem gerçekleşir.
- Örnek:

```javascript
if (ortalama >= 60 && final >= 50)
```

Hem ortalama 60 veya üzeri **ve** final 50 veya üzeri ise öğrenci geçer.

---

## `if` Koşulu Açıklaması

```javascript
if (isNaN(vize) || isNaN(final) || vize < 0 || vize > 100 || final < 0 || final > 100)
```

- Vize ya da final notu girilmemişse (`isNaN`)
- 0 ile 100 arası dışında bir değer girilmişse
- Yukarıdaki durumlarda kullanıcıya uyarı verilir.

---

## Ortalama Hesaplama

```javascript
let ortalama = (vize * 0.4) + (final * 0.6);
```

- Vize notu %40, final notu %60 etkilidir.

---

## Durum Değerlendirmesi

```javascript
let durum = (ortalama >= 60 && final >= 50) ? "Geçtiniz" : "Kaldınız";
```

- Koşul doğruysa `"Geçtiniz"`
- Yanlışsa `"Kaldınız"`

Bu yapı `ternary operator` olarak adlandırılır.

---

## Sonucun Ekrana Yazdırılması

```javascript
sonucText.textContent = `Ortalama: ${ortalama.toFixed(2)} / ${durum}`;
```

- Sonuç kullanıcıya görsel olarak gösterilir.
- `toFixed(2)` sayıyı virgülden sonra iki basamakla gösterir.

---