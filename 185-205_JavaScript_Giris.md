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
