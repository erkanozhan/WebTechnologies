# JavaScript Ders Notları

## 1. İstemci-Sunucu (Client-Server) Mimarisi

İstemci-sunucu mimarisi, bilgisayar ağlarında görevlerin istemci (client) ve sunucu (server) arasında paylaştırıldığı temel bir sistem modelidir. Bu modelde, istemci tarafı genellikle kullanıcı arayüzünü ve kullanıcıdan gelen talepleri yönetirken, sunucu tarafı ise veri işleme, depolama, kimlik doğrulama gibi arka plan işlemlerini yürütür.

- **İstemci (Client):** Kullanıcının bilgisayarında çalışan ve genellikle bir web tarayıcısı aracılığıyla sunucuya istek gönderen yazılım veya donanım birimidir. İstemci, sunucudan aldığı yanıtları kullanıcıya sunar.
- **Sunucu (Server):** İstemciden gelen istekleri karşılayan, işleyen ve uygun yanıtları döndüren merkezi bilgisayardır. Sunucu, veri tabanı işlemleri, kimlik doğrulama ve iş mantığı gibi kritik görevleri üstlenir.

Bu yapı sayesinde, sistem kaynakları daha verimli kullanılır ve güvenlik, ölçeklenebilirlik gibi avantajlar elde edilir.

---

## 2. İstemci Tarafı ve Sunucu Tarafı Betikleme (Client-side ve Server-side Scripting)

### İstemci Tarafı Betikleme (Client-side Scripting)

- Kodlar doğrudan kullanıcının tarayıcısında çalışır.
- İşlemler istemcinin bilgisayarında gerçekleştiği için hızlı yanıt süreleri sağlar.
- Güvenlik açısından sınırlı yetkilere sahiptir; kritik işlemler için uygun değildir.
- Yaygın olarak kullanılan diller: **JavaScript**, HTML, CSS.

### Sunucu Tarafı Betikleme (Server-side Scripting)

- Kodlar sunucu üzerinde çalışır ve istemciden gelen talepleri işler.
- Veri tabanı işlemleri, kullanıcı doğrulama gibi güvenlik gerektiren işlemler burada gerçekleştirilir.
- Her işlemde istemciden sunucuya istek gönderilir ve sunucudan yanıt alınır.
- Güvenlik açısından daha uygundur.
- Yaygın olarak kullanılan diller: **PHP**, Python, Node.js, ASP.NET.

---

## 3. JavaScript Nedir?

JavaScript, web tarayıcılarında çalışan, dinamik ve etkileşimli web sayfaları oluşturmak için kullanılan bir **istemci taraflı (client-side) betik dilidir**. HTML ve CSS ile birlikte kullanılarak web sayfalarına hareketlilik ve kullanıcı etkileşimi kazandırır. JavaScript, derlenmeye ihtiyaç duymadan, tarayıcı tarafından doğrudan yorumlanarak çalışır. Modern JavaScript, sunucu tarafında da (ör. Node.js ile) kullanılabilmektedir.

---

## 4. JavaScript’in Web Sayfasına Eklenmesi

JavaScript kodları web sayfalarına üç farklı yöntemle entegre edilebilir:

- **HTML içinde `<script>` etiketiyle:** JavaScript kodları doğrudan HTML dosyasının içerisine yazılır.
- **Harici `.js` dosyası ile:** JavaScript kodları ayrı bir dosyada tutulur ve HTML dosyasına `<script src="dosya.js"></script>` etiketiyle dahil edilir.
- **HTML öğelerine doğrudan olay (event) atanarak:** HTML etiketlerine doğrudan olay özellikleri (ör. `onclick`) eklenerek JavaScript fonksiyonları tetiklenir.

### Örnek:

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript’e Giriş</title>
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

JavaScript’te değişkenler, veri saklamak amacıyla kullanılır. Değişken tanımlamak için üç ana anahtar kelime kullanılır:

- `let`: Değeri değiştirilebilir değişken tanımlar.
- `const`: Sabit, değeri değiştirilemeyen değişken tanımlar.
- `var`: Eski tip değişken tanımıdır, günümüzde önerilmez.

```javascript
let isim = "Ayşe";
const yas = 30;
```

---

## 6. Veri Türleri

JavaScript’te temel veri türleri aşağıdaki gibidir:

- **String:** Metinsel ifadeler. Örnek: `"merhaba"`
- **Number:** Sayısal değerler. Örnek: `42`, `3.14`
- **Boolean:** Mantıksal değerler. Örnek: `true`, `false`
- **Array:** Sıralı veri koleksiyonları. Örnek: `[1, 2, 3]`
- **Object:** Anahtar-değer çiftlerinden oluşan yapılar. Örnek: `{ad: "Ali", yas: 25}`
- **null:** Bilinçli olarak boş bırakılmış değer.
- **undefined:** Tanımlanmamış değişkenlerin varsayılan değeri.

---

## 7. Operatörler

JavaScript’te çeşitli işlemler için farklı operatörler kullanılır:

| Tür           | Operatörler                           |
|---------------|---------------------------------------|
| Aritmetik     | `+`, `-`, `*`, `/`, `%`               |
| Karşılaştırma | `==`, `===`, `!=`, `!==`, `<`, `>`    |
| Mantıksal     | `&&`, `||`, `!`                       |

---

## 8. Koşul İfadeleri (if/else)

Koşul ifadeleri, belirli bir şartın sağlanıp sağlanmadığına göre farklı kod bloklarının çalıştırılmasını sağlar.

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

Döngüler, belirli bir işlemin birden fazla kez tekrarlanmasını sağlar.

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

Fonksiyonlar, belirli bir işlemi gerçekleştiren ve gerektiğinde tekrar tekrar çağrılabilen kod bloklarıdır.

```javascript
function topla(a, b) {
  return a + b;
}

let sonuc = topla(5, 7); // 12
```

---

## 11. Olaylar (Events)

Olaylar, kullanıcının web sayfası ile etkileşime girmesi sonucu tetiklenen işlemlerdir. Örneğin, bir butona tıklanması bir olaydır.

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

## 12. Belge Nesne Modeli (DOM - Document Object Model)

DOM, HTML ve XML belgelerinin programatik olarak erişilmesini ve değiştirilmesini sağlayan bir modeldir. JavaScript ile DOM üzerinden HTML elemanlarına erişebilir ve bu elemanların özelliklerini değiştirebilirsiniz.

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

Diziler, birden fazla veriyi sıralı şekilde saklamak için kullanılır.

```javascript
let sayilar = [10, 20, 30];

sayilar.push(40);  // Diziye yeni bir eleman ekler
sayilar.pop();     // Dizinin son elemanını çıkarır

sayilar.forEach(function(sayi) {
  console.log(sayi);
});
```

---

## 14. Nesneler (Objects)

Nesneler, anahtar-değer (key-value) çiftleriyle veri saklamaya yarar.

```javascript
let ogrenci = {
  ad: "Zeynep",
  yas: 22
};

console.log(ogrenci.ad); // Zeynep
```

---

## 15. Koşul Kısaltması (Ternary Operator)

Ternary operatörü, kısa koşul ifadeleri yazmak için kullanılır.

```javascript
let yas = 18;
let mesaj = (yas >= 18) ? "Reşit" : "Çocuk";
console.log(mesaj);
```

---

## 16. Şablon Metinler (Template Literals)

Şablon metinler, değişkenlerin ve ifadelerin metin içerisine kolayca gömülmesini sağlar. Backtick (`` ` ``) karakteri ile kullanılır.

```javascript
let ad = "Kemal";
console.log(`Merhaba, ${ad}`);
```

---

## 17. Zamanlayıcı Fonksiyonlar

JavaScript’te belirli bir süre sonra veya belirli aralıklarla kod çalıştırmak için zamanlayıcı fonksiyonlar kullanılır:

- `setTimeout()`: Belirtilen süre sonra bir defa çalışır.
- `setInterval()`: Belirtilen aralıklarla tekrar tekrar çalışır.

```javascript
setTimeout(function() {
  console.log("3 saniye sonra çalıştı");
}, 3000);
```

---

## 18. JSON (JavaScript Object Notation)

JSON, veri paylaşımı ve saklama için yaygın olarak kullanılan, hafif ve insan tarafından okunabilir bir veri formatıdır.

```javascript
let jsonVeri = '{"ad":"Ali","yas":25}';
let nesne = JSON.parse(jsonVeri);
console.log(nesne.ad); // Ali
```

---

## 19. JavaScript’in Kullanım Alanları

JavaScript, günümüzde çok çeşitli alanlarda kullanılmaktadır:

- Web sitelerinde dinamik içerik oluşturma
- Form doğrulama işlemleri
- Buton ve menü gibi kullanıcı arayüzü etkileşimleri
- Web tabanlı oyun geliştirme
- Modern JavaScript framework’leri (React, Angular, Vue) ile tek sayfa uygulamaları (SPA) geliştirme

---

### Uygulamalı Örnek: Not Hesaplama

Aşağıda, bir öğrencinin vize ve final notlarını alarak ağırlıklı ortalamasını hesaplayan ve başarı durumunu belirleyen bir uygulama örneği sunulmuştur.

```html
<!DOCTYPE HTML>
<!-- HTML belgesinin türünü belirtir ve tarayıcıya sayfanın HTML5 standardında yazıldığını bildirir. -->
<html lang="tr">
<!-- HTML belgesinin dilini Türkçe olarak ayarlar. -->
<head>
  <meta charset="UTF-8">
  <!-- Karakter kodlamasını UTF-8 olarak belirler, Türkçe karakterlerin doğru görüntülenmesini sağlar. -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Sayfanın mobil cihazlarda düzgün ölçeklenmesini ve uyumlu görünmesini sağlar. -->
  <title>Not Hesaplama</title>
  <!-- Tarayıcı sekmesinde görünen başlığı belirler. -->
</head>
<body>
  <label for="vize">Vize Notu (%40):</label>
  <!-- Kullanıcıdan vize notunu almak için bir etiket oluşturur ve ilgili input ile ilişkilendirir. -->
  <input type="number" id="vize" /><br>
  <!-- Vize notu için sayısal bir giriş alanı sağlar ve satır sonu ekler. -->
  <label for="final">Final Notu (%60):</label>
  <!-- Kullanıcıdan final notunu almak için bir etiket oluşturur ve ilgili input ile ilişkilendirir. -->
  <input type="number" id="final" /><br>
  <!-- Final notu için sayısal bir giriş alanı sağlar ve satır sonu ekler. -->
  <button onclick="notHesapla()">Sonucu Göster</button>
  <!-- Kullanıcıya not hesaplama işlemini başlatacak bir buton sunar ve tıklanınca 'notHesapla' fonksiyonunu çağırır. -->
  <p id="notSonucu"></p>
  <!-- Hesaplanan sonucun ekranda gösterileceği paragraf alanını tanımlar. -->

  <script>
    function notHesapla() {
      // Vize ve final notlarını al
      let vize = parseFloat(document.getElementById("vize").value);
      // 'vize' inputundan alınan değeri ondalıklı sayıya çevirir ve 'vize' değişkenine atar.
      let final = parseFloat(document.getElementById("final").value);
      // 'final' inputundan alınan değeri ondalıklı sayıya çevirir ve 'final' değişkenine atar.
      let sonucText = document.getElementById("notSonucu");
      // Sonucun yazdırılacağı paragraf elemanını seçer ve 'sonucText' değişkenine atar.

      // Girişlerin geçerliliğini kontrol et
      if (isNaN(vize) || isNaN(final) || vize < 0 || vize > 100 || final < 0 || final > 100) {
        // Vize veya final notu sayı değilse ya da 0-100 aralığında değilse, kullanıcıya uyarı mesajı gösterir.
        sonucText.textContent = "Lütfen 0-100 arası geçerli notlar giriniz.";
        // Geçersiz girişlerde fonksiyonun çalışmasını sonlandırır.
        return;
      }

      // Ortalama ve başarı durumu hesapla
      let ortalama = (vize * 0.4) + (final * 0.6);
      // Vize notunun %40'ı ve final notunun %60'ı alınarak ağırlıklı ortalama hesaplanır.
      let durum = (ortalama >= 60 && final >= 50) ? "Geçtiniz" : "Kaldınız";
      // Ortalama en az 60 ve final en az 50 ise "Geçtiniz", aksi halde "Kaldınız" sonucu atanır.

      // Sonucu ekrana yazdır
      sonucText.textContent = `Ortalama: ${ortalama.toFixed(2)} / ${durum}`;
      // Hesaplanan ortalama ve başarı durumu, iki ondalık basamak hassasiyetinde kullanıcıya gösterilir.
    }
  </script>
  <!-- JavaScript kodlarını içeren script bloğu, not hesaplama işlemlerini gerçekleştirir. -->
</body>
</html>
```

### Kodun Açıklaması

Bu örnek uygulama, kullanıcıdan alınan vize ve final notlarını kullanarak ağırlıklı ortalamayı hesaplamakta ve öğrencinin başarı durumunu belirlemektedir. Kodun işleyişi şu şekildedir:

1. **Veri Girişi ve Dönüştürme:** Kullanıcıdan alınan vize ve final notları, `parseFloat()` fonksiyonu ile ondalıklı sayıya dönüştürülür. HTML’deki `input` elemanlarından alınan değerler varsayılan olarak metin (string) tipindedir.
2. **Geçerlilik Kontrolü:** `isNaN()` fonksiyonu ile girilen değerlerin sayı olup olmadığı, ayrıca 0 ile 100 arasında olup olmadığı kontrol edilir. Geçersiz girişlerde kullanıcıya uyarı mesajı gösterilir ve fonksiyon sonlandırılır.
3. **Ortalama Hesaplama:** Vize notunun %40’ı ve final notunun %60’ı alınarak ağırlıklı ortalama hesaplanır.
4. **Başarı Durumu:** Ortalama en az 60 ve final notu en az 50 ise öğrenci “Geçtiniz”, aksi halde “Kaldınız” olarak değerlendirilir. Bu işlem, kısa koşul ifadesi (ternary operator) ile gerçekleştirilir.
5. **Sonucun Gösterilmesi:** Sonuç, iki ondalık basamak hassasiyetinde kullanıcıya sunulur.

---

### JavaScript Fonksiyonlarının Açıklamaları

#### `parseFloat()`

- String türündeki veriyi ondalıklı sayıya dönüştürür.
- HTML `input` elemanlarından alınan değerler varsayılan olarak string tipindedir.
- Örnek: `"85.6"` → `85.6`

#### `document.getElementById()`

- HTML belgesindeki belirli bir `id` değerine sahip elemana erişmek için kullanılır.

#### `isNaN()`

- Bir değerin sayı olup olmadığını kontrol eder.
- `NaN` (Not a Number): Geçersiz sayı anlamına gelir.

#### `textContent`

- Bir HTML elemanının metin içeriğini değiştirmek için kullanılır.

---

## Mantıksal Operatörler

### `||` (VEYA - OR)

- En az bir koşul doğruysa işlem gerçekleşir.
- Örnek:

```javascript
if (vize < 0 || vize > 100)
```
Burada, `vize` ya 0’dan küçük ya da 100’den büyükse koşul sağlanır.

### `&&` (VE - AND)

- Tüm koşullar doğruysa işlem gerçekleşir.
- Örnek:

```javascript
if (ortalama >= 60 && final >= 50)
```
Hem ortalama 60 veya üzeri **ve** final 50 veya üzeri ise öğrenci geçer.

---

## Koşul İfadesi Açıklaması

```javascript
if (isNaN(vize) || isNaN(final) || vize < 0 || vize > 100 || final < 0 || final > 100)
```

- Vize ya da final notu girilmemişse (`isNaN`)
- 0 ile 100 arası dışında bir değer girilmişse
- Bu durumlarda kullanıcıya uyarı verilir.

---

## Ortalama Hesaplama

```javascript
let ortalama = (vize * 0.4) + (final * 0.6);
```

- Vize notu %40, final notu %60 oranında etkilidir.

---

## Durum Değerlendirmesi

```javascript
let durum = (ortalama >= 60 && final >= 50) ? "Geçtiniz" : "Kaldınız";
```

- Koşul doğruysa `"Geçtiniz"`
- Yanlışsa `"Kaldınız"`
- Bu yapı, kısa koşul ifadesi (ternary operator) olarak adlandırılır.

---

## Sonucun Ekrana Yazdırılması

```javascript
sonucText.textContent = `Ortalama: ${ortalama.toFixed(2)} / ${durum}`;
```

- Sonuç, kullanıcıya iki ondalık basamak hassasiyetinde gösterilir.
- `toFixed(2)` fonksiyonu, sayıyı virgülden sonra iki basamakla sınırlar.

---