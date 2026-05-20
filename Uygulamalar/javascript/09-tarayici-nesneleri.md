# 09 - Tarayıcı Nesneleri: window, navigator, location

## 1. Tarayıcı Nesneleri Hiyerarşisi

JavaScript, tarayıcı ile etkileşim için hazır nesneler sunar:

```
window  (en üst nesne - tarayıcı penceresi)
├── document  (HTML sayfası - DOM)
├── navigator (tarayıcı bilgileri)
├── location  (sayfa URL'si)
├── history   (gezinme geçmişi)
└── screen    (ekran bilgileri)
```

> **Not:** `window.alert()` yerine sadece `alert()` yazılabilir. `window` global nesne olduğundan çoğu zaman açıkça yazılmaz.

---

## 2. window Nesnesi

### 2.1 Diyalog Kutuları

```javascript
// Mesaj göster (sadece OK butonu)
alert("Merhaba!");

// Kullanıcıdan onay iste (OK / İptal)
let onay = confirm("Silmek istediğinizden emin misiniz?");
if (onay) {
    console.log("Silme işlemi onaylandı.");
} else {
    console.log("İptal edildi.");
}

// Kullanıcıdan metin gir (metin kutusu)
let isim = prompt("Adınızı girin:", "Misafir"); // İkinci parametre varsayılan değer
if (isim !== null) { // İptal'e basılırsa null döner
    console.log(`Merhaba, ${isim}!`);
}
```

### 2.2 Zamanlayıcılar

```javascript
// setTimeout: Bir kez, belirtilen süre sonra çalışır
let zamanlayici = setTimeout(function() {
    console.log("3 saniye geçti!");
}, 3000);

// İptal etmek için:
clearTimeout(zamanlayici);

// setInterval: Tekrar tekrar çalışır
let tekrarlayan = setInterval(function() {
    console.log("Her saniye!");
}, 1000);

// İptal etmek için:
clearInterval(tekrarlayan);
```

### 2.3 Pencere Boyutu

```javascript
// Tarayıcı görüntü alanı boyutları
console.log(window.innerWidth);  // Genişlik (piksel)
console.log(window.innerHeight); // Yükseklik (piksel)

// Ekran boyutu
console.log(screen.width);  // Tam ekran genişliği
console.log(screen.height); // Tam ekran yüksekliği
```

---

## 3. navigator Nesnesi

Tarayıcı ve sistem hakkında bilgi verir.

Bu örnek, mevcut `JavaScript-15.html` ve `Untitled-1.html` dosyalarının düzeltilmiş halidir:

```javascript
// Tarayıcı adı ve versiyonu
console.log(navigator.userAgent);
// Örn: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0..."

// Platform (işletim sistemi)
console.log(navigator.platform);   // "Win32", "MacIntel", "Linux x86_64"

// Dil ayarı
console.log(navigator.language);   // "tr-TR", "en-US"

// Çevrimiçi mi?
console.log(navigator.onLine);     // true / false

// Tarayıcı adını çıkarmak için yardımcı fonksiyon
function tarayiciBul() {
    let ua = navigator.userAgent;

    if (ua.indexOf("Chrome") > -1 && ua.indexOf("Edg") === -1) return "Google Chrome";
    if (ua.indexOf("Firefox") > -1)  return "Mozilla Firefox";
    if (ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") === -1) return "Apple Safari";
    if (ua.indexOf("Edg") > -1)       return "Microsoft Edge";
    if (ua.indexOf("OPR") > -1)       return "Opera";
    return "Bilinmeyen Tarayıcı";
}

console.log(`Tarayıcınız: ${tarayiciBul()}`);
```

---

## 4. location Nesnesi

Sayfanın URL'sini okur ve yönetir.

```javascript
// Mevcut URL bilgileri
console.log(location.href);     // Tam URL: "https://www.ornek.com/sayfa?id=5"
console.log(location.protocol); // "https:"
console.log(location.hostname); // "www.ornek.com"
console.log(location.pathname); // "/sayfa"
console.log(location.search);  // "?id=5" (sorgu parametreleri)
console.log(location.hash);    // "#bolum" (bağlantı çıpası)

// Sayfayı yenile
location.reload();

// Başka sayfaya git (geri butonu çalışır)
location.href = "https://www.google.com";

// Başka sayfaya git (geri butonu ÇALIŞMAZ)
location.replace("https://www.google.com");
```

### Sayfa Yönlendirme (setTimeout ile)

Bu örnek `JavaScript Uyg-1.html` dosyasından alınmış ve düzeltilmiştir:

```javascript
let sayac = 5;
let geriSayimEl = document.getElementById("geriSayim");

let zamanlayici = setInterval(function() {
    geriSayimEl.textContent = sayac;
    sayac--;

    if (sayac < 0) {
        clearInterval(zamanlayici);
        location.href = "https://www.google.com"; // Yönlendir
    }
}, 1000);
```

---

## 5. history Nesnesi

Tarayıcı gezinme geçmişini yönetir:

```javascript
history.back();    // Geri git (← tuşu gibi)
history.forward(); // İleri git (→ tuşu gibi)
history.go(-2);    // 2 sayfa geri git
history.go(1);     // 1 sayfa ileri git
```

---

## 6. Tam Uygulama: Tarayıcı Bilgi Paneli

Bu örnek, mevcut `JavaScript-15.html` ve `Untitled-1.html` dosyalarının birleştirilmiş ve geliştirilmiş halidir:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Tarayıcı Bilgi Paneli</title>
    <style>
        body { font-family: Arial; max-width: 700px; margin: 40px auto; padding: 20px;
               background: #f0f4f8; }
        h2 { color: #2c3e50; }
        .kart {
            background: white; border-radius: 12px; padding: 20px;
            margin-bottom: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        .kart h3 { color: #3498db; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 8px; }
        .bilgi-satiri {
            display: flex; justify-content: space-between;
            padding: 8px 0; border-bottom: 1px dotted #eee;
        }
        .bilgi-satiri:last-child { border-bottom: none; }
        .etiket { color: #777; font-size: 14px; }
        .deger  { font-weight: bold; color: #2c3e50; font-size: 14px; max-width: 60%; text-align: right; word-break: break-all; }
        .online  { color: #27ae60; }
        .offline { color: #e74c3c; }
        .yonlendirme { background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; padding: 20px; text-align: center; }
        .sayac { font-size: 48px; font-weight: bold; color: #e74c3c; }
        button { background: #3498db; color: white; border: none; padding: 10px 20px;
                 border-radius: 5px; cursor: pointer; margin: 5px; }
        button:hover { background: #2980b9; }
    </style>
</head>
<body>
    <h2>Tarayıcı Bilgi Paneli</h2>

    <!-- Tarayıcı Bilgileri -->
    <div class="kart">
        <h3>Tarayıcı Bilgileri</h3>
        <div id="tarayiciBilgileri"></div>
    </div>

    <!-- Ekran ve Pencere Bilgileri -->
    <div class="kart">
        <h3>Ekran ve Pencere Bilgileri</h3>
        <div id="ekranBilgileri"></div>
    </div>

    <!-- URL ve Konum Bilgileri -->
    <div class="kart">
        <h3>Sayfa Konumu</h3>
        <div id="urlBilgileri"></div>
        <button onclick="location.reload()">Sayfayı Yenile</button>
        <button onclick="history.back()">Geri Git</button>
    </div>

    <!-- Otomatik Yönlendirme -->
    <div class="kart yonlendirme">
        <h3>Otomatik Yönlendirme Örneği</h3>
        <p>Google'a yönlendirme: <span class="sayac" id="geriSayim">5</span> saniye</p>
        <button onclick="yonlendirmeyiBaslat()" id="baslatBtn">Başlat</button>
        <button onclick="yonlendirmeyiDurdur()" id="durdurBtn" style="background:#e74c3c; display:none;">Durdur</button>
    </div>

    <script>
        function bilgiSatiri(etiket, deger, ekstraClass = "") {
            return `
                <div class="bilgi-satiri">
                    <span class="etiket">${etiket}</span>
                    <span class="deger ${ekstraClass}">${deger}</span>
                </div>
            `;
        }

        function tarayiciBul(ua) {
            if (ua.includes("Edg"))    return "Microsoft Edge";
            if (ua.includes("Chrome")) return "Google Chrome";
            if (ua.includes("Firefox")) return "Mozilla Firefox";
            if (ua.includes("Safari")) return "Apple Safari";
            if (ua.includes("OPR"))    return "Opera";
            return "Bilinmeyen";
        }

        // Tarayıcı bilgilerini doldur
        function tarayiciBilgileriniDoldur() {
            let ua = navigator.userAgent;
            let cevrimici = navigator.onLine;

            document.getElementById("tarayiciBilgileri").innerHTML =
                bilgiSatiri("Tarayıcı", tarayiciBul(ua)) +
                bilgiSatiri("Dil", navigator.language) +
                bilgiSatiri("Platform", navigator.platform) +
                bilgiSatiri("Durum",
                    cevrimici ? "Çevrimiçi" : "Çevrimdışı",
                    cevrimici ? "online" : "offline"
                ) +
                `<div class="bilgi-satiri">
                    <span class="etiket">User Agent</span>
                    <span class="deger" style="font-size:11px;">${ua.substring(0, 80)}...</span>
                </div>`;
        }

        // Ekran bilgilerini doldur
        function ekranBilgileriniDoldur() {
            document.getElementById("ekranBilgileri").innerHTML =
                bilgiSatiri("Ekran Genişliği", `${screen.width} px`) +
                bilgiSatiri("Ekran Yüksekliği", `${screen.height} px`) +
                bilgiSatiri("Pencere Genişliği", `${window.innerWidth} px`) +
                bilgiSatiri("Pencere Yüksekliği", `${window.innerHeight} px`);
        }

        // URL bilgilerini doldur
        function urlBilgileriniDoldur() {
            document.getElementById("urlBilgileri").innerHTML =
                bilgiSatiri("Tam URL", location.href) +
                bilgiSatiri("Protokol", location.protocol) +
                bilgiSatiri("Host", location.hostname || "localhost") +
                bilgiSatiri("Yol", location.pathname);
        }

        // Yönlendirme mantığı
        let geriSayimAraligi = null;
        let geriSayimSuresi = 5;

        function yonlendirmeyiBaslat() {
            document.getElementById("baslatBtn").style.display = "none";
            document.getElementById("durdurBtn").style.display = "inline-block";

            geriSayimSuresi = 5;
            document.getElementById("geriSayim").textContent = geriSayimSuresi;

            geriSayimAraligi = setInterval(function() {
                geriSayimSuresi--;
                document.getElementById("geriSayim").textContent = geriSayimSuresi;

                if (geriSayimSuresi <= 0) {
                    clearInterval(geriSayimAraligi);
                    // Gerçek yönlendirme için açıklamayı kaldırın:
                    // location.href = "https://www.google.com";
                    alert("Yönlendirme gerçekleşirdi! (Demo modunda engellendi)");
                    yonlendirmeyiDurdur();
                }
            }, 1000);
        }

        function yonlendirmeyiDurdur() {
            clearInterval(geriSayimAraligi);
            document.getElementById("baslatBtn").style.display = "inline-block";
            document.getElementById("durdurBtn").style.display = "none";
            document.getElementById("geriSayim").textContent = "5";
        }

        // Pencere boyutu değişince güncelle
        window.addEventListener("resize", ekranBilgileriniDoldur);

        // Sayfa yüklenince tümünü doldur
        tarayiciBilgileriniDoldur();
        ekranBilgileriniDoldur();
        urlBilgileriniDoldur();
    </script>
</body>
</html>
```

---

## 7. Özet: Ne Zaman Hangi Nesne?

| İhtiyaç | Nesne | Örnek |
|---------|-------|-------|
| Kullanıcıya mesaj göster | `window` | `alert()`, `confirm()`, `prompt()` |
| Belirli süre sonra kod çalıştır | `window` | `setTimeout()`, `setInterval()` |
| Tarayıcı/sistem bilgisi al | `navigator` | `.userAgent`, `.language`, `.onLine` |
| Sayfayı yönlendir/yenile | `location` | `.href`, `.reload()`, `.replace()` |
| Geri/ileri git | `history` | `.back()`, `.forward()`, `.go()` |
| Ekran boyutunu öğren | `screen` | `.width`, `.height` |

---

## Alıştırmalar

1. Kullanıcının tarayıcısını ve dilini tespit edip Türkçe açıklayan bir sayfa oluşturun.
2. Ekran boyutuna göre farklı mesaj gösteren bir uygulama yapın (mobil / tablet / masaüstü).
3. `confirm()` ile onay alarak kullanıcıyı farklı sayfalara yönlendiren bir uygulama yapın.
4. Çevrimiçi/çevrimdışı durumu izleyen ve değişince kullanıcıyı uyaran bir uygulama yapın.
