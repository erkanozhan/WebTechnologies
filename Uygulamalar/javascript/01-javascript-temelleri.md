
# 01 - JavaScript Temelleri

HTML bir sayfanın *ne* içerdiğini belirler, CSS *nasıl göründüğünü* tanımlar; JavaScript ise sayfanın *nasıl davranacağını* programlar. Bir sayfaya tıklandığında açılan menü, doğrulanan form, canlı güncellenen içerik — bunların arkasında JavaScript vardır.

JavaScript, 1995 yılında Brendan Eich tarafından Netscape bünyesinde tasarlandı ve on yıllar içinde dünyanın en yaygın kullanılan programlama diline dönüştü. Aynı yıl Microsoft benzer bir dil olan JScript'i geliştirdi; iki dilin uyumsuzluğu sorunu ortadan kaldırmak için ECMA (European Computer Manufacturers Association) standardizasyona gitti ve dil **ECMAScript** adıyla standartlaştırıldı.

---

## 1. JavaScript Nerede Çalışır?

Derlenen (compiled) dillerde kod önce makine diline çevrilir; ardından çalıştırılır. JavaScript ise *yorumlanan* (interpreted) bir dildir: tarayıcının JavaScript motoru kodu satır satır okuyup anında yürütür.

### İstemci Taraflı mı, Sunucu Taraflı mı?

| Tür                  | Nerede Çalışır              | Örnekler             |
|----------------------|-----------------------------|----------------------|
| **İstemci taraflı**  | Kullanıcının tarayıcısında  | JavaScript           |
| **Sunucu taraflı**   | Web sunucusunda             | PHP, Python, Node.js |

Tarayıcı JavaScript'i sunucuya sormadan çalıştırır; bu nedenle hızlı etkileşimler için idealdir. Veritabanı erişimi ya da kullanıcı kimlik doğrulama gibi güvenlik gerektiren işlemler sunucu tarafında kalmalıdır.

---

## 2. JavaScript'i Sayfaya Dahil Etme

### `<script>` Etiketi

**Satır içi (inline):**

```html
<script>
  alert("Merhaba Dünya!");
</script>
```

**Harici dosya:**

```html
<script src="script.js"></script>
```

Harici yöntem tercih edilir: kod bakımı kolaylaşır, aynı dosya birden fazla sayfada kullanılabilir.

### `<script>` Etiketi Nereye?

```html
<!-- Önerilen: </body> kapanış etiketinin hemen öncesi -->
<body>
  <h1>İçerik</h1>
  <script src="script.js"></script>
</body>
```

Sayfa başında (`<head>` içinde) yerleştirilen script, HTML tam yüklenmeden çalışabilir ve henüz oluşturulmamış elemanları bulamaz. Sayfanın sonuna koymak, HTML'in önce yüklenmesini garanti eder.

---

## 3. Değişkenler

Değişken, bir veriyi hafızada saklayan isimlendirilmiş bir kutucuktur. JavaScript'te üç anahtar kelime vardır:

| Anahtar Kelime | Kapsam | Açıklama |
| --- | --- | --- |
| `var` | Fonksiyon kapsamı | Eski yöntem — artık pek kullanılmıyor |
| `let` | Blok kapsamı | Modern: değeri değiştirilebilir |
| `const` | Blok kapsamı | Modern: değeri değiştirilemez |

```javascript
var  isim = "Ahmet";   // eski yöntem
let  yas  = 20;
yas = 21;              // değiştirilebilir ✓

const PI = 3.14159;
// PI = 3;             // HATA! const değiştirilemez ✗
```

> **Kural:** Modern JavaScript'te `var` yerine `let` ve `const` kullanılır. Değer değişmeyecekse `const`, değişecekse `let` tercih edilir.

---

## 4. Veri Tipleri

JavaScript'te 7 temel veri tipi vardır.

### 4.1 String (Metin)

Tırnak işaretleri içine yazılan metinlerdir.

```javascript
let ad    = "Fatma";
let soyad = 'Yılmaz';
let mesaj = `Merhaba, ${ad} ${soyad}!`; // şablon literal (template literal)

console.log(mesaj); // Merhaba, Fatma Yılmaz!
```

**Yaygın string metotları:**

```javascript
let metin = "Web Teknolojileri";

console.log(metin.length);          // 17
console.log(metin.toUpperCase());   // WEB TEKNOLOJİLERİ
console.log(metin.toLowerCase());   // web teknolojileri
console.log(metin.includes("Web")); // true
console.log(metin.indexOf("Tek"));  // 4
```

---

### 4.2 Number (Sayı)

Tam sayı ve ondalıklı sayıları kapsar.

```javascript
let tamSayi   = 42;
let ondalikli = 3.14;
let negatif   = -10;

console.log(5 + 3);  // 8
console.log(15 % 4); // 3  (modulo — kalan)
console.log(2 ** 8); // 256 (üs alma)
```

**Sayı dönüşümleri:**

```javascript
let metinSayi  = "42";
Number(metinSayi);   // 42  — string'i sayıya çevirir
parseInt("3.9");     // 3   — ondalık kısmı atar
parseFloat("3.9");   // 3.9

console.log(typeof metinSayi); // "string"
console.log(typeof Number(metinSayi)); // "number"
```

---

### 4.3 Boolean (Mantıksal)

Sadece `true` (doğru) veya `false` (yanlış) değer alır.

```javascript
let ogrenciMi = true;
let mezunMu   = false;

console.log(5 > 3);    // true
console.log(5 == "5"); // true  (gevşek eşitlik — sadece değer)
console.log(5 === "5");// false (katı eşitlik — değer VE tip)
```

> **Kural:** `==` yerine her zaman `===` kullanın; tip dönüşümünden kaynaklanan beklenmedik sonuçları önler.

---

### 4.4 Null ve Undefined

```javascript
let tanimlanmamis;         // değer atanmamış → undefined
let bosDeger = null;       // kasıtlı olarak boş → null
```

---

### 4.5 `typeof` Operatörü

```javascript
console.log(typeof "Merhaba"); // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  ← JavaScript'in bilinen bir hatası!
```

---

### 4.6 Otomatik Tip Dönüşümü

JavaScript zayıf tiplidir: farklı türler bir arada kullanıldığında otomatik dönüşüm gerçekleşir.

```javascript
"5" + 3  // "53"  — sayı metne dönüştürüldü, birleştirildi
"5" - 3  // 2     — metin sayıya dönüştürüldü, çıkarıldı
```

---

## 5. Operatörler

### 5.1 Aritmetik Operatörler

```javascript
let a = 10, b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1  (mod — kalan)
console.log(a ** b); // 1000 (10³)
```

### 5.2 Atama Operatörleri

```javascript
let x = 10;
x += 5;  // x = 15
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6
x++;     // x = 7
x--;     // x = 6
```

### 5.3 Karşılaştırma Operatörleri

```javascript
let sayi = 5;

console.log(sayi > 3);   // true
console.log(sayi >= 5);  // true
console.log(sayi == 5);  // true  (gevşek — kullanmayın)
console.log(sayi === 5); // true  (katı — BUNU KULLANIN)
console.log(sayi !== 3); // true  (katı eşitsizlik)
```

### 5.4 Mantıksal Operatörler

```javascript
let yas = 20;
let ogrenciMi = true;

console.log(yas >= 18 && ogrenciMi); // true  — VE: her ikisi de doğru
console.log(yas < 18  || ogrenciMi); // true  — VEYA: en az biri doğru
console.log(!ogrenciMi);             // false — DEĞİL
```

---

## 6. Konsola Çıktı Verme

```javascript
console.log("Merhaba!");        // Normal çıktı
console.warn("Dikkat!");        // Sarı uyarı
console.error("Hata oluştu!"); // Kırmızı hata mesajı
```

> **İpucu:** Tarayıcıda F12 → Geliştirici Araçları → Console sekmesi.

---

## 7. DOM: Sayfayı JavaScript ile Yakalamak

DOM (Document Object Model), HTML sayfasının JavaScript tarafından görülen yapısıdır. Tarayıcı her etiketi bir nesneye dönüştürür; bu nesneler hiyerarşik bir ağaç oluşturur.

```text
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p
```

### Eleman Seçme

```javascript
const baslik        = document.getElementById("baslik");
const ilkParagraf   = document.querySelector("p");
const tumParagraflar = document.querySelectorAll(".metin");
```

### İçerik ve Stil Değiştirme

```javascript
baslik.textContent = "Yeni Başlık";      // yalnızca metin
baslik.innerHTML   = "<em>Merhaba</em>"; // HTML dahil

baslik.style.color    = "crimson";
baslik.style.fontSize = "2em";
```

---

## 8. Fonksiyonlar

Fonksiyon, bir kez tanımlanıp defalarca çağrılabilen komut bloğudur.

```javascript
function selamla(isim) {
  return "Merhaba, " + isim + "!";
}

console.log(selamla("Erkan")); // "Merhaba, Erkan!"
```

**Ok fonksiyonu (arrow function) — modern kısaltma:**

```javascript
const selamla = (isim) => "Merhaba, " + isim + "!";
```

---

## 9. Koşullar ve Döngüler

### `if / else`

```javascript
let saat = 14;

if (saat < 12) {
  console.log("Günaydın!");
} else if (saat < 18) {
  console.log("İyi öğleden sonralar!");
} else {
  console.log("İyi akşamlar!");
}
```

### `for` Döngüsü

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Adım " + i);
}
```

---

## 10. Olaylar ve `addEventListener`

Bir "olay" (event), kullanıcının ya da tarayıcının yaptığı eylemdir: tıklama, klavye tuşuna basma, sayfa yüklenme…

```javascript
const dugme = document.getElementById("dugme");

dugme.addEventListener("click", () => {
  dugme.textContent = "Tıklandı!";
  dugme.style.backgroundColor = "green";
});
```

### Yaygın Olay Türleri

| Olay | Ne Zaman Tetiklenir |
| --- | --- |
| `click` | Eleman tıklandığında |
| `dblclick` | Çift tıklandığında |
| `mouseover` | Fare üzerine geldiğinde |
| `mouseout` | Fare üzerinden ayrıldığında |
| `keydown` | Klavye tuşuna basıldığında |
| `keyup` | Tuş bırakıldığında |
| `submit` | Form gönderildiğinde |
| `change` | Giriş alanı değeri değiştiğinde |
| `load` | Sayfa tamamen yüklendiğinde |
| `DOMContentLoaded` | DOM hazır olduğunda |

### `removeEventListener`

```javascript
function tiklamaIsleyici() {
  console.log("Tıklandı");
}

dugme.addEventListener("click", tiklamaIsleyici);
dugme.removeEventListener("click", tiklamaIsleyici);
```

`removeEventListener` çalışması için işlevin adıyla tanımlanmış ve aynı referansın verilmiş olması gerekir; anonim işlevler kaldırılamaz.

---

## 11. İstemci / Sunucu Mimarisi

```text
Kullanıcı                  İnternet              Sunucu
┌──────────┐   HTTP İsteği  ──────────►  ┌──────────────┐
│ Tarayıcı │                              │  Web Sunucu  │
│ (Client) │ ◄──────────────  HTTP Yanıtı │  (Server)    │
└──────────┘                             └──────────────┘
```

**İstemci (client):** Tarayıcı — HTML, CSS ve JavaScript'i çalıştırır.  
**Sunucu (server):** Web sunucusu — veritabanı sorgular, iş mantığı yürütür, yanıtı oluşturur.

Üç katmanlı (3-tier) mimaride araya bir uygulama katmanı eklenir; bu katman sunucu taraflı işlemleri veritabanından ayırır ve ölçeklenebilirliği artırır.

---

## 12. Tam Uygulama Örneği

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
            let ad  = document.getElementById("adInput").value;
            let yas = Number(document.getElementById("yasInput").value);

            if (ad === "" || yas === 0) {
                alert("Lütfen tüm alanları doldurun!");
                return;
            }

            const buYil     = new Date().getFullYear();
            const dogumYili = buYil - yas;
            let ogrenciMi   = yas >= 18 && yas <= 30;

            let mesaj = `
                <strong>Ad:</strong> ${ad}<br>
                <strong>Yaş:</strong> ${yas}<br>
                <strong>Tahmini Doğum Yılı:</strong> ${dogumYili}<br>
                <strong>Öğrenci Olabilir mi?</strong> ${ogrenciMi ? "Evet" : "Hayır"}<br>
                <strong>Ad Uzunluğu:</strong> ${ad.length} karakter
            `;

            document.getElementById("bilgiMetni").innerHTML = mesaj;
            document.getElementById("sonucAlani").style.display = "block";
        }
    </script>
</body>
</html>
```

---

## Uygulama Görevleri

### Görev 1 — DOM Manipülasyonu

`dom.html` ve `dom.js` dosyaları oluşturun:

- Bir `<h1>` ve bir `<p>` elemanı oluşturun; her ikisine `id` verin
- Bir `<button>` ekleyin; tıklandığında başlığın rengini ve paragrafın metnini değiştiren bir `addEventListener` yazın
- İkinci bir düğme ekleyin; tıklandığında `display: none` ile bir elemanı gizlesin, tekrar tıklandığında geri getirsin (toggle mantığı)

### Görev 2 — Form Doğrulama

`dogrulama.html` dosyası oluşturun:

- Bir metin alanı ve gönder düğmesinden oluşan basit bir form oluşturun
- Form gönderildiğinde `submit` olayını yakalayın; `event.preventDefault()` ile varsayılan gönderme davranışını durdurun
- Alan boşsa `alert` gösterin; doluysa "Teşekkürler, [isim]!" mesajı verin

### Görev 3 — Olay Zenginleştirme

`olaylar.html` dosyası oluşturun:

- `mouseover` ve `mouseout` olaylarını kullanan, fare üzerine gelince rengi değişen en az üç kart oluşturun
- `keydown` olayını yakalayan ve hangi tuşa basıldığını `event.key` ile sayfada gösteren bir kod yazın
- `DOMContentLoaded` olayını kullanarak sayfa yüklenince otomatik odak alan bir giriş alanı oluşturun

---

## Alıştırmalar

1. `firstName` ve `lastName` adında iki değişken tanımlayın ve tam adınızı bir `fullName` değişkenine birleştirin.
2. 0–100 arasında bir not değişkeni tanımlayın. Notun 50'den büyük olup olmadığını `console.log` ile yazdırın.
3. Bir dikdörtgenin en ve boyunu değişkenlerde saklayın, alanını hesaplayıp ekrana yazdırın.

---

## Hızlı Başvuru

| Kavram / Metot | Örnek | Açıklama |
| --- | --- | --- |
| `let` | `let x = 5;` | Değiştirilebilir değişken |
| `const` | `const PI = 3.14;` | Sabit değişken |
| `typeof` | `typeof x` | Değişken tipini öğrenme |
| `===` | `x === 5` | Katı eşitlik (değer + tip) |
| Template literal | `` `${x}` `` | String içine değişken gömme |
| `document.getElementById` | `document.getElementById("id")` | ID ile eleman seçme |
| `document.querySelector` | `document.querySelector(".cls")` | CSS seçici ile eleman seçme |
| `element.textContent` | `el.textContent = "Yeni"` | Metin içeriği değiştirme |
| `element.innerHTML` | `el.innerHTML = "<b>Yeni</b>"` | HTML içeriği değiştirme |
| `element.style` | `el.style.color = "red"` | Satır içi stil değiştirme |
| `addEventListener` | `el.addEventListener("click", fn)` | Olay dinleyici ekleme |
| `removeEventListener` | `el.removeEventListener("click", fn)` | Olay dinleyici kaldırma |
| `event.preventDefault()` | Form submit'ini durdurmak | Varsayılan davranışı engelleme |
| `console.log()` | `console.log(deger)` | Konsola yazdırma |
| `alert()` | `alert("Mesaj")` | Uyarı diyaloğu |
