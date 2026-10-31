# 04 - DOM Manipülasyonu: HTML Öğelerine Erişim ve Değiştirme

## 1. DOM Nedir?

**DOM** (Document Object Model), tarayıcının HTML belgesini bir **ağaç yapısında** temsil etmesidir. JavaScript, bu ağaç üzerinden sayfadaki her öğeyi okuyabilir ve değiştirebilir.

```
document
└── html
    ├── head
    │   └── title → "Benim Sayfam"
    └── body
        ├── h1 → "Başlık"
        ├── p  → "Paragraf metni"
        └── div#kutu
            ├── p → "İçerik"
            └── button → "Tıkla"
```

> **Analoji:** HTML iskelet, CSS kıyafet, JavaScript ise hareket ve etkileşimdir. DOM, JavaScript'in HTML'e el atmasını sağlayan köprüdür.

---

## 2. Öğe Seçme

### 2.1 ID ile Seçme (En yaygın yöntem)

```html
<p id="mesaj">Merhaba!</p>

<script>
    // ID'ye göre öğeyi seç
    let element = document.getElementById("mesaj");
    console.log(element); // <p id="mesaj">Merhaba!</p>
</script>
```

### 2.2 querySelector ile Seçme (Modern yöntem)

CSS seçicilerini kullanır:

```javascript
// İlk eşleşeni seçer
document.querySelector("#mesaj");       // ID ile
document.querySelector(".kutu");        // Sınıf (class) ile
document.querySelector("p");            // Etiket ile
document.querySelector("div > p");      // Doğrudan çocuk öğe
document.querySelector("input[type='text']"); // Özelliğe göre

// Tüm eşleşenleri seçer (NodeList döner)
document.querySelectorAll("p");         // Tüm <p> öğeleri
document.querySelectorAll(".kart");     // Tüm .kart sınıflılar
```

`querySelectorAll` bir dizi (Array) değil, **NodeList** döndürür. NodeList üzerinde `forEach` ve `length` kullanılabilir; ancak `map`, `filter` gibi dizi metotları yoktur. Bu metotlar gerekiyorsa liste önce diziye çevrilir:

```javascript
const paragraflar = document.querySelectorAll("p");
paragraflar.forEach(p => p.style.color = "navy");          // ✓ çalışır
// paragraflar.map(...)                                     // ✗ TypeError: map is not a function
const metinler = Array.from(paragraflar).map(p => p.textContent); // ✓ önce diziye çevrildi
```

### 2.3 Diğer Seçim Yöntemleri

```javascript
document.getElementsByClassName("kutu"); // Sınıfa göre
document.getElementsByTagName("li");     // Etiket adına göre
```

Bu iki metot hâlâ geçerlidir; ancak `querySelectorAll`'dan farklı olarak **canlı** (live) bir `HTMLCollection` döndürür: Sayfaya sonradan aynı sınıfta bir öğe eklenirse koleksiyon kendiliğinden güncellenir. `querySelectorAll` ise çağrıldığı andaki durumun sabit bir kopyasını verir.

---

## 3. İçeriği Okuma ve Değiştirme

### 3.1 Metin İçeriği

```javascript
let baslik = document.getElementById("baslik");

// Okuma
console.log(baslik.textContent); // Düz metin (HTML etiketleri dahil değil)
console.log(baslik.innerHTML);   // HTML dahil tüm içerik

// Yazma
baslik.textContent = "Yeni Başlık";          // Düz metin yazar
baslik.innerHTML = "<strong>Kalın</strong>"; // HTML olarak yazar
```

> **Güvenlik:** Kullanıcıdan gelen metni hiçbir zaman `innerHTML` ile sayfaya yazmayın; `textContent` kullanın. Aksi hâlde kullanıcının yazdığı `<img src=x onerror=...>` gibi bir ifade sayfanızda kod olarak çalışır (XSS). Ayrıntılı açıklama için `01-javascript-temelleri.md` dosyasındaki "innerHTML ve güvenlik" kutusuna bakınız.

### 3.2 Form Öğesinin Değeri

```javascript
// Input değerini oku
let girdi = document.getElementById("adInput");
let deger = girdi.value;

// Input değerini değiştir
girdi.value = "Yeni değer";
```

---

## 4. Stil Değiştirme

```javascript
let kutu = document.getElementById("kutu");

// CSS özelliklerini JavaScript ile değiştir
kutu.style.color = "red";
kutu.style.backgroundColor = "yellow";  // ← CSS'teki background-color, JS'te camelCase
kutu.style.fontSize = "24px";
kutu.style.display = "none";  // gizle
kutu.style.display = "block"; // göster
```

> **CSS ile JS Farkı:** CSS'te `background-color` → JS'te `backgroundColor` (tire yerine camelCase)

---

## 5. Sınıf (Class) Yönetimi

Stilleri doğrudan JS'te yazmak yerine, CSS sınıflarını ekleyip çıkarmak daha temiz bir yöntemdir:

```html
<style>
    .aktif { color: white; background: #27ae60; }
    .hata  { color: white; background: #e74c3c; }
    .gizli { display: none; }
</style>

<div id="kutu">İçerik</div>

<script>
    let kutu = document.getElementById("kutu");

    kutu.classList.add("aktif");       // sınıf ekle
    kutu.classList.remove("hata");     // sınıf çıkar
    kutu.classList.toggle("gizli");    // varsa çıkar, yoksa ekle
    kutu.classList.contains("aktif");  // sınıf var mı? (true/false)
</script>
```

---

## 6. Yeni Öğe Oluşturma ve Silme

```javascript
// Yeni öğe oluştur
let yeniParagraf = document.createElement("p");
yeniParagraf.textContent = "Bu dinamik eklenen paragraf!";
yeniParagraf.className = "yeni-paragraf";

// Sayfaya ekle
let konteyner = document.getElementById("icerik");
konteyner.appendChild(yeniParagraf);     // sona ekle

let baslikParagrafi = document.createElement("p");
baslikParagrafi.textContent = "Bu paragraf en başa eklendi.";
konteyner.prepend(baslikParagrafi);      // başa ekle

// Öğe sil
let silinecek = document.getElementById("eski");
silinecek.remove(); // doğrudan sil
```

> **Dikkat:** Bir DOM düğümü aynı anda yalnızca bir yerde bulunabilir. Zaten sayfada olan bir düğüm `appendChild` veya `prepend` ile başka bir yere eklenirse **kopyalanmaz, taşınır**. Örneğin `yeniParagraf` önce `appendChild` ile sona, ardından `prepend` ile başa eklenseydi sayfada iki paragraf değil, başa taşınmış tek bir paragraf olurdu. İki ayrı kopya isteniyorsa ikinci bir öğe oluşturulmalı veya `yeniParagraf.cloneNode(true)` kullanılmalıdır.

---

## 7. Nitelik (Attribute) Yönetimi

```javascript
let resim = document.getElementById("profil");

// Nitelik okuma
console.log(resim.getAttribute("src")); // resim kaynağı
console.log(resim.getAttribute("alt")); // alternatif metin

// Nitelik değiştirme
resim.setAttribute("src", "yeni-resim.jpg");
resim.setAttribute("alt", "Yeni açıklama");

// Kısa yol
resim.src = "yeni-resim.jpg";
resim.alt = "Yeni açıklama";
```

---

## 8. Tam Uygulama: Metin Arama ve Vurgulama

Aşağıdaki uygulama, kullanıcının yazdığı kelimeyi bir paragraf içinde arar ve bulunan yerleri vurgular. Metot adlarının büyük/küçük harfine dikkat edin: `getElementById` yerine `getElementByld` (büyük `I` yerine küçük `l`) yazmak sık yapılan ve `TypeError` hatasına yol açan bir yazım hatasıdır.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Metin Arama ve Vurgulama</title>
    <style>
        body { font-family: Arial; max-width: 700px; margin: 40px auto; padding: 20px; }
        .arama-kutu { display: flex; gap: 10px; margin-bottom: 20px; }
        input { flex: 1; padding: 10px; border: 2px solid #ddd;
                border-radius: 5px; font-size: 16px; }
        button { padding: 10px 20px; border: none; border-radius: 5px;
                 font-size: 14px; cursor: pointer; }
        #araBtn  { background: #3498db; color: white; }
        #temizBtn { background: #95a5a6; color: white; }
        #icerik { line-height: 2; font-size: 16px; background: #fafafa;
                  padding: 20px; border-radius: 8px; border: 1px solid #ddd; }
        .vurgu { background: #f39c12; color: white;
                 padding: 2px 4px; border-radius: 3px; font-weight: bold; }
        #sonucBilgi { color: #27ae60; font-weight: bold; margin-bottom: 10px; }
    </style>
</head>
<body>
    <h2>Metin Arama ve Vurgulama</h2>

    <div class="arama-kutu">
        <input type="text" id="aramaKelime" placeholder="Aramak istediğiniz kelimeyi yazın...">
        <button id="araBtn" onclick="araVeVurgula()">Ara</button>
        <button id="temizBtn" onclick="temizle()">Temizle</button>
    </div>

    <p id="sonucBilgi"></p>

    <div id="icerik">
        Web teknolojileri, internet üzerinde çalışan uygulamaların geliştirilmesinde kullanılan
        teknolojilerin bütününü ifade eder. HTML, web sayfalarının yapısını oluşturur.
        CSS, web sayfalarının görünümünü belirler. JavaScript ise web sayfalarına
        dinamizm ve etkileşim katar. Modern web geliştirme, bu üç temel teknolojinin
        uyum içinde çalışmasına dayanır. Web tarayıcıları, bu teknolojileri yorumlayarak
        kullanıcılara zengin içerik sunar. JavaScript öğrenmek, web geliştirme yolculuğunda
        kritik bir adımdır.
    </div>

    <script>
        const icerikDiv = document.getElementById("icerik");
        // Orijinal metni yalnızca düz metin olarak sakla (temizleme için)
        const orijinalMetin = icerikDiv.textContent;

        // Kullanıcının yazdığı metindeki RegExp özel karakterlerini ( . * + ? ( ) [ ] vb.) kaçırır.
        // Böylece "(" gibi bir giriş hata vermez, "." ise her karakterle değil yalnızca noktayla eşleşir.
        function regexKacir(metin) {
            return metin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }

        function araVeVurgula() {
            let aramaKelimesi = document.getElementById("aramaKelime").value;
            let sonucBilgi = document.getElementById("sonucBilgi");

            // Boş arama kontrolü
            if (aramaKelimesi.trim() === "") {
                sonucBilgi.textContent = "Lütfen bir kelime girin.";
                sonucBilgi.style.color = "#e74c3c";
                return;
            }

            // Önceki vurguları temizle
            icerikDiv.textContent = orijinalMetin;

            // Büyük/küçük harf duyarsız arama için RegEx (g=tümünü bul, i=büyük/küçük duyarsız)
            let regEx = new RegExp(regexKacir(aramaKelimesi), "gi");
            let eslesmeSayisi = (orijinalMetin.match(regEx) || []).length;

            if (eslesmeSayisi === 0) {
                sonucBilgi.textContent = `"${aramaKelimesi}" bulunamadı.`;
                sonucBilgi.style.color = "#e74c3c";
                return;
            }

            // Metni parçalara ayırıp eşleşmeleri <span> içine alarak yeniden kur.
            // innerHTML kullanılmadığı için kullanıcının yazdığı metin hiçbir zaman HTML olarak yorumlanmaz.
            icerikDiv.textContent = "";
            let sonIndeks = 0;
            for (const eslesme of orijinalMetin.matchAll(regEx)) {
                icerikDiv.append(orijinalMetin.slice(sonIndeks, eslesme.index));
                const span = document.createElement("span");
                span.className = "vurgu";
                span.textContent = eslesme[0];
                icerikDiv.append(span);
                sonIndeks = eslesme.index + eslesme[0].length;
            }
            icerikDiv.append(orijinalMetin.slice(sonIndeks));

            sonucBilgi.textContent = `"${aramaKelimesi}" ${eslesmeSayisi} yerde bulundu.`;
            sonucBilgi.style.color = "#27ae60";
        }

        function temizle() {
            // Orijinal metni geri yükle
            icerikDiv.textContent = orijinalMetin;
            document.getElementById("aramaKelime").value = "";
            document.getElementById("sonucBilgi").textContent = "";
        }

        // Enter tuşuna basınca arama yap
        // keypress olayı kullanımdan kaldırılmıştır (deprecated); yerine keydown kullanılır
        document.getElementById("aramaKelime").addEventListener("keydown", function(e) {
            if (e.key === "Enter") araVeVurgula();
        });
    </script>
</body>
</html>
```

---

## Alıştırmalar

1. Bir butona tıklandığında sayfadaki bir paragrafın rengini kırmızıya çevirin.
2. İki input kutusu oluşturun; kullanıcı yazdıkça altında anlık olarak birleştirilmiş metni gösterin.
3. "Ekle" düğmesine tıklandığında yeni bir `<li>` öğesi listeye ekleyen bir uygulama yapın.
4. Renk seçici (`<input type="color">`) kullanarak sayfanın arka plan rengini değiştirin.
