# 04 - DOM Manipülasyonu: HTML Elementlerine Erişim ve Değiştirme

## 1. DOM Nedir?

**DOM** (Document Object Model), tarayıcının HTML belgesini bir **ağaç yapısında** temsil etmesidir. JavaScript, bu ağaç üzerinden sayfadaki her elementi okuyabilir ve değiştirebilir.

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

## 2. Elementi Seçme

### 2.1 ID ile Seçme (En yaygın yöntem)

```html
<p id="mesaj">Merhaba!</p>

<script>
    // ID'ye göre elementi seç
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
document.querySelector("div > p");      // Alt element
document.querySelector("input[type='text']"); // Özelliğe göre

// Tüm eşleşenleri seçer (dizi döner)
document.querySelectorAll("p");         // Tüm <p> elementleri
document.querySelectorAll(".kart");     // Tüm .kart sınıflılar
```

### 2.3 Diğer Seçim Yöntemleri

```javascript
document.getElementsByClassName("kutu"); // Sınıfa göre (eski yöntem)
document.getElementsByTagName("li");     // Etikete göre (eski yöntem)
```

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

### 3.2 Form Elemanı Değeri

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

> **CSS ile JS Farkı:** CSS'de `background-color` → JS'de `backgroundColor` (tire yerine camelCase)

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

## 6. Yeni Element Oluşturma ve Silme

```javascript
// Yeni element oluştur
let yeniParagraf = document.createElement("p");
yeniParagraf.textContent = "Bu dinamik eklenen paragraf!";
yeniParagraf.className = "yeni-paragraf";

// Sayfaya ekle
let konteyner = document.getElementById("icerik");
konteyner.appendChild(yeniParagraf);     // sona ekle
konteyner.prepend(yeniParagraf);         // başa ekle

// Element sil
let silinecek = document.getElementById("eski");
silinecek.remove(); // direkt sil
```

---

## 7. Özellik (Attribute) Yönetimi

```javascript
let resim = document.getElementById("profil");

// Özellik okuma
console.log(resim.getAttribute("src")); // resim kaynağı
console.log(resim.getAttribute("alt")); // alternatif metin

// Özellik değiştirme
resim.setAttribute("src", "yeni-resim.jpg");
resim.setAttribute("alt", "Yeni açıklama");

// Kısa yol
resim.src = "yeni-resim.jpg";
resim.alt = "Yeni açıklama";
```

---

## 8. Tam Uygulama: Metin Arama (JavaScript Uyg-5.html ve Uyg-7.html'den düzeltilmiş)

Mevcut `JavaScript Uyg-5.html` ve `Uyg-7.html` dosyalarında `getElementByld` şeklinde yanlış yazım vardı (`I` yerine `l`). Düzeltilmiş ve geliştirilmiş versiyonu:

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
        // Orijinal metni sakla (temizleme için)
        const orijinalMetin = document.getElementById("icerik").innerHTML;

        function araVeVurgula() {
            // getElementById ile elementi seç (düzeltilmiş - eski kodda getElementByld yazıyordu)
            let aramaKelimesi = document.getElementById("aramaKelime").value;
            let icerikDiv = document.getElementById("icerik");
            let sonucBilgi = document.getElementById("sonucBilgi");

            // Boş arama kontrolü
            if (aramaKelimesi.trim() === "") {
                sonucBilgi.textContent = "Lütfen bir kelime girin.";
                sonucBilgi.style.color = "#e74c3c";
                return;
            }

            // Orijinal metni geri yükle, sonra vurgula
            icerikDiv.innerHTML = orijinalMetin;
            let metin = icerikDiv.innerHTML;

            // Büyük/küçük harf duyarsız arama için RegEx
            let regEx = new RegExp(aramaKelimesi, "gi"); // g=tümünü bul, i=büyük/küçük duyarsız
            let eslesmeSayisi = (metin.match(regEx) || []).length;

            if (eslesmeSayisi === 0) {
                sonucBilgi.textContent = `"${aramaKelimesi}" bulunamadı.`;
                sonucBilgi.style.color = "#e74c3c";
                return;
            }

            // Bulunan kelimeleri vurgulu span ile değiştir
            icerikDiv.innerHTML = metin.replace(
                regEx,
                match => `<span class="vurgu">${match}</span>`
            );

            sonucBilgi.textContent = `"${aramaKelimesi}" ${eslesmeSayisi} yerde bulundu.`;
            sonucBilgi.style.color = "#27ae60";
        }

        function temizle() {
            // Orijinal metni geri yükle
            document.getElementById("icerik").innerHTML = orijinalMetin;
            document.getElementById("aramaKelime").value = "";
            document.getElementById("sonucBilgi").textContent = "";
        }

        // Enter tuşuna basınca arama yap
        document.getElementById("aramaKelime").addEventListener("keypress", function(e) {
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
3. "Ekle" butuına tıklandığında yeni bir `<li>` elemanı listeye ekleyen bir uygulama yapın.
4. Renk seçici (`<input type="color">`) kullanarak sayfanın arka plan rengini değiştirin.
