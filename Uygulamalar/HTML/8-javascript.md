
# 8. Uygulama: JavaScript Temelleri

HTML bir sayfanın *ne* içerdiğini belirler, CSS *nasıl göründüğünü* tanımlar; JavaScript ise sayfayı *nasıl davranacağını* programlar. Bir sayfaya tıklandığında açılan menü, doğrulanan form, canlı güncellenen içerik — bunların arkasında JavaScript vardır.

JavaScript, 1995 yılında Brendan Eich tarafından Netscape bünyesinde tasarlandı ve on yıllar içinde dünyanın en yaygın kullanılan programlama diline dönüştü. Aynı yıl Microsoft benzer bir dil olan JScript'i geliştirdi; iki dilin uyumsuzluğu sorunu ortadan kaldırmak için ECMA (European Computer Manufacturers Association — Avrupa Bilgisayar Üreticileri Derneği) standardizasyona gitti ve dil **ECMAScript** adıyla standartlaştırıldı. "JavaScript" adı ise gündelik kullanımda kalmaya devam etti.

---

## 1. JavaScript Nerede Çalışır?

Derlenen (compiled) dillerde kod önce makine diline çevrilir; ardından çalıştırılır. JavaScript ise *yorumlanan* (interpreted) bir dildir: tarayıcının JavaScript motoru kodu satır satır okuyup anında yürütür. Bu, kodun anında test edilebilmesini sağlar.

### İstemci Taraflı mı, Sunucu Taraflı mı?

| Tür | Nerede Çalışır | Örnekler |
|-----|----------------|----------|
| **İstemci taraflı** | Kullanıcının tarayıcısında | JavaScript |
| **Sunucu taraflı** | Web sunucusunda | PHP, Python, Node.js |

Tarayıcı JavaScript'i sunucuya sormadan çalıştırır; bu nedenle hızlı etkileşimler (forma anlık tepki, menü açma) için idealdir. Veritabanı erişimi ya da kullanıcı kimlik doğrulama gibi güvenlik gerektiren işlemler ise sunucu tarafında kalmalıdır.

---

## 2. JavaScript'i Sayfaya Dahil Etme

### `<script>` Etiketi

HTML sayfasına doğrudan yazılır. İki yöntem vardır:

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

Harici yöntem CSS ile aynı gerekçeyle tercih edilir: kod bakımı kolaylaşır, aynı dosya birden fazla sayfada kullanılabilir.

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

## 3. Değişkenler ve Veri Türleri

### Değişken Tanımlama

```javascript
var   isim = "Erkan";    // Eski yöntem (function scope)
let   yas  = 25;         // Modern: blok kapsamlı, değiştirilebilir
const PI   = 3.14159;    // Modern: blok kapsamlı, değiştirilemez
```

> **Kural:** Modern JavaScript'te `var` yerine `let` ve `const` kullanılır. Değer değişmeyecekse `const`, değişecekse `let` tercih edilir.

### Temel Veri Türleri

| Tür | Örnek | Açıklama |
|-----|-------|----------|
| `string` | `"Merhaba"`, `'Web'` | Metin — tırnak içinde |
| `number` | `42`, `3.14`, `-7` | Tam sayı ve ondalıklı sayı |
| `boolean` | `true`, `false` | Mantıksal değer |
| `null` | `null` | Kasıtlı boşluk; "değer yok" |
| `undefined` | `undefined` | Değer atanmamış değişken |

```javascript
let mesaj   = "Hoş geldiniz";  // string
let puan    = 98.5;             // number
let aktif   = true;             // boolean
let veri    = null;             // null
let henuz;                      // undefined
```

### Tip Dönüşümü

JavaScript zayıf tiplidir: farklı türler bir arada kullanıldığında otomatik dönüşüm gerçekleşir.

```javascript
"5" + 3     // "53"  — sayı metne dönüştürüldü, birleştirildi
"5" - 3     // 2     — metin sayıya dönüştürüldü, çıkarıldı
```

---

## 4. DOM: Sayfayı JavaScript ile Yakalamak

DOM (Document Object Model — Belge Nesne Modeli), HTML sayfasının JavaScript tarafından görülen yapısıdır. Tarayıcı, HTML'i ayrıştırırken her etiketi bir nesneye (object) dönüştürür; bu nesneler hiyerarşik bir ağaç (tree) oluşturur.

```
document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        └── p
```

JavaScript bu ağacın herhangi bir düğümünü okuyabilir, değiştirebilir, ekleyebilir ya da silebilir.

### Eleman Seçme

```javascript
// id ile seçim
const baslik = document.getElementById("baslik");

// CSS seçici ile tek eleman
const ilkParagraf = document.querySelector("p");

// CSS seçici ile tüm eşleşenler
const tümParagraflar = document.querySelectorAll(".metin");
```

### İçerik ve Stil Değiştirme

```javascript
baslik.textContent = "Yeni Başlık";      // Yalnızca metin
baslik.innerHTML   = "<em>Merhaba</em>"; // HTML dahil

baslik.style.color     = "crimson";
baslik.style.fontSize  = "2em";
```

---

## 5. Fonksiyonlar

Fonksiyon (function), bir kez tanımlanıp defalarca çağrılabilen komut bloğudur.

```javascript
function selamla(isim) {
  return "Merhaba, " + isim + "!";
}

let sonuc = selamla("Erkan");
console.log(sonuc);  // "Merhaba, Erkan!"
```

### Ok Fonksiyonu (Arrow Function) — Modern Kısaltma

```javascript
const selamla = (isim) => "Merhaba, " + isim + "!";
```

---

## 6. Koşullar ve Döngüler

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

## 7. Olaylar ve `addEventListener`

Bir "olay" (event), kullanıcının ya da tarayıcının yaptığı bir eylemdir: tıklama, klavye tuşuna basma, sayfa yüklenme, fare hareketi…

`addEventListener` yöntemi, bir elemana belirli bir olay gerçekleştiğinde çalışacak işlevi bağlar:

```javascript
const dugme = document.getElementById("dugme");

dugme.addEventListener("click", function() {
  alert("Düğmeye tıklandı!");
});
```

Kısaltılmış biçim:

```javascript
dugme.addEventListener("click", () => {
  dugme.textContent = "Tıklandı!";
  dugme.style.backgroundColor = "green";
});
```

### Yaygın Olay Türleri

| Olay | Ne Zaman Tetiklenir |
|------|---------------------|
| `click` | Eleman tıklandığında |
| `dblclick` | Çift tıklandığında |
| `mouseover` | Fare üzerine geldiğinde |
| `mouseout` | Fare üzerinden ayrıldığında |
| `keydown` | Klavye tuşuna basıldığında |
| `keyup` | Tuş bırakıldığında |
| `submit` | Form gönderildiğinde |
| `change` | Giriş alanı değeri değiştiğinde |
| `load` | Sayfa tamamen yüklendiğinde |
| `DOMContentLoaded` | HTML ayrıştırılıp DOM hazır olduğunda |

### `removeEventListener`

Daha önce eklenen olay dinleyicisini kaldırır:

```javascript
function tiklamaIsleyici() {
  console.log("Tıklandı");
}

dugme.addEventListener("click", tiklamaIsleyici);
dugme.removeEventListener("click", tiklamaIsleyici);
```

`removeEventListener` çalışması için işlevin adıyla tanımlanmış olması ve aynı referansın verilmesi gerekir; anonim işlevler kaldırılamaz.

---

## 8. İstemci / Sunucu Mimarisi

Web, iki temel katmanlı (2-tier) mimari üzerine kurulur:

```
Kullanıcı                  İnternet              Sunucu
┌──────────┐   HTTP İsteği  ──────────►  ┌──────────────┐
│ Tarayıcı │                              │  Web Sunucu  │
│ (Client) │ ◄──────────────  HTTP Yanıtı │  (Server)    │
└──────────┘                             └──────────────┘
```

**İstemci (client):** Tarayıcı — HTML, CSS ve JavaScript'i çalıştırır.  
**Sunucu (server):** Web sunucusu — veritabanı sorgular, iş mantığı yürütür, yanıtı oluşturur.

Üç katmanlı (3-tier) mimaride araya bir uygulama katmanı (application server) eklenir; bu katman sunucu taraflı işlemleri veritabanından ayırır ve ölçeklenebilirliği artırır.

---

## Uygulama Görevleri

### Görev 1 — DOM Manipülasyonu

`dom.html` ve `dom.js` dosyaları oluşturun:

- Bir `<h1>` ve bir `<p>` elemanı oluşturun; her ikisine `id` verin
- Bir `<button>` ekleyin; tıklandığında başlığın rengini ve paragrafın metnini değiştiren bir `addEventListener` yazın
- İkinci bir düğme ekleyin; tıklandığında `display: none` ile bir elemanı gizlesin, tekrar tıklandığında geri getirsin (geçiş — toggle mantığı)

### Görev 2 — Form Doğrulama

`dogrulama.html` dosyası oluşturun:

- Bir metin alanı ve gönder düğmesinden oluşan basit bir form oluşturun
- Form gönderildiğinde `submit` olayını yakalayın; `event.preventDefault()` ile varsayılan gönderme davranışını durdurun
- Alan boşsa kullanıcıya bir uyarı (`alert`) gösterin; doluysa "Teşekkürler, [isim]!" mesajı verin

### Görev 3 — Olay Zenginleştirme

`olaylar.html` dosyası oluşturun:

- `mouseover` ve `mouseout` olaylarını kullanan, fare üzerine gelince rengi değişen en az üç kart elemanı oluşturun
- `keydown` olayını yakalayan ve hangi tuşa basıldığını `event.key` ile sayfada gösteren bir kod yazın
- `DOMContentLoaded` olayını kullanarak sayfa yüklenince otomatik odak alan bir giriş alanı oluşturun

---

## Hızlı Başvuru

| Kavram / Metot | Örnek | Açıklama |
|----------------|-------|----------|
| `let` | `let x = 5;` | Değiştirilebilir değişken |
| `const` | `const PI = 3.14;` | Sabit değişken |
| `document.getElementById` | `document.getElementById("id")` | ID ile eleman seçme |
| `document.querySelector` | `document.querySelector(".class")` | CSS seçici ile eleman seçme |
| `element.textContent` | `el.textContent = "Yeni";` | Metin içeriği değiştirme |
| `element.innerHTML` | `el.innerHTML = "<b>Yeni</b>";` | HTML içeriği değiştirme |
| `element.style` | `el.style.color = "red";` | Satır içi stil değiştirme |
| `addEventListener` | `el.addEventListener("click", fn)` | Olay dinleyici ekleme |
| `removeEventListener` | `el.removeEventListener("click", fn)` | Olay dinleyici kaldırma |
| `event.preventDefault()` | Form submit'ini durdurmak | Varsayılan davranışı engelleme |
| `console.log()` | `console.log(deger)` | Tarayıcı konsoluna yazdırma |
| `alert()` | `alert("Mesaj")` | Uyarı diyaloğu |
