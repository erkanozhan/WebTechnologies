# 05 - Olaylar (Events): Kullanıcı Etkileşimini Yakalamak

## 1. Olay Nedir?

Olay (event), kullanıcının sayfayla etkileşime girmesi ya da tarayıcıda bir şeyin gerçekleşmesi durumudur.

**Örnekler:**
- Butona tıklamak → `click`
- Klavyede tuşa basmak → `keydown`
- Fareyi bir öğenin üzerine getirmek → `mouseover`
- Formu göndermek → `submit`
- Sayfa yüklenince → `load`

---

## 2. Olay Dinleyici Ekleme Yöntemleri

### 2.1 HTML Özelliği ile (Basit ama tavsiye edilmez)

```html
<button onclick="selamVer()">Tıkla</button>

<script>
function selamVer() {
    alert("Merhaba!");
}
</script>
```

### 2.2 JavaScript ile (Önerilen modern yöntem)

```html
<button id="buton">Tıkla</button>

<script>
let buton = document.getElementById("buton");

// addEventListener(olay_adı, fonksiyon)
buton.addEventListener("click", function() {
    alert("Merhaba!");
});

// Ok fonksiyonu ile daha kısa yazım
buton.addEventListener("click", () => alert("Merhaba!"));
</script>
```

> **Neden `addEventListener` kullanmalıyız?**
> - Aynı elemente birden fazla olay eklenebilir
> - HTML ve JavaScript birbirinden ayrı kalır
> - Olayı daha sonra kaldırabilirsiniz

---

## 3. Fare Olayları

### 3.1 click, mouseover, mouseout

Bu örnek `JavaScript-17.html` dosyasından alınmış ve düzeltilmiştir:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Fare Olayları</title>
    <style>
        .kutu {
            width: 200px; height: 100px;
            background: #3498db; color: white;
            display: flex; align-items: center; justify-content: center;
            font-size: 18px; border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease; /* yumuşak geçiş */
        }
    </style>
</head>
<body>
    <div class="kutu" id="renkliBolum">Fareyi getir!</div>
    <p id="bilgi">Olay bekleniyor...</p>

    <script>
        let kutu = document.getElementById("renkliBolum");
        let bilgi = document.getElementById("bilgi");

        // Fare üzerine gelince
        kutu.addEventListener("mouseover", function() {
            kutu.style.background = "#e74c3c"; // kırmızı
            kutu.textContent = "Fare içinde!";
            bilgi.textContent = "mouseover olayı tetiklendi";
        });

        // Fare uzaklaşınca
        kutu.addEventListener("mouseout", function() {
            kutu.style.background = "#3498db"; // mavi
            kutu.textContent = "Fareyi getir!";
            bilgi.textContent = "mouseout olayı tetiklendi";
        });

        // Tıklanınca
        kutu.addEventListener("click", function() {
            kutu.style.background = "#27ae60"; // yeşil
            kutu.textContent = "Tıklandı!";
            bilgi.textContent = "click olayı tetiklendi";
        });
    </script>
</body>
</html>
```

### 3.2 Tıklama Sayacı

```html
<button id="sayacBtn">Tıklama Sayısı: 0</button>

<script>
    let sayac = 0;
    let btn = document.getElementById("sayacBtn");

    btn.addEventListener("click", function() {
        sayac++;
        btn.textContent = `Tıklama Sayısı: ${sayac}`;

        // 10'a gelince renk değiştir
        if (sayac >= 10) {
            btn.style.background = "#e74c3c";
        }
    });
</script>
```

---

## 4. Klavye Olayları

```javascript
let girdi = document.getElementById("aramaGirdisi");

// Tuş basılınca (basılı tutunca tekrarlar)
girdi.addEventListener("keydown", function(event) {
    console.log(`Basılan tuş: ${event.key}`);

    if (event.key === "Enter") {
        console.log("Enter'a basıldı! Arama yapılıyor...");
    }

    if (event.key === "Escape") {
        girdi.value = ""; // ESC ile temizle
    }
});

// Tuş bırakılınca
girdi.addEventListener("keyup", function(event) {
    let deger = event.target.value;
    console.log(`Şu an yazılan: ${deger}`);
});

// Değer değişince (yapıştırma dahil)
girdi.addEventListener("input", function() {
    document.getElementById("canliGosterim").textContent = this.value;
});
```

---

## 5. Olay Nesnesi (Event Object)

Olay fonksiyonuna otomatik gelen `event` parametresi, olayla ilgili bilgiler içerir:

```javascript
document.addEventListener("click", function(event) {
    console.log(event.type);        // "click"
    console.log(event.target);      // Tıklanan element
    console.log(event.clientX);     // Fare X koordinatı
    console.log(event.clientY);     // Fare Y koordinatı
    console.log(event.key);         // Basılan tuş (klavye olaylarında)
});
```

### preventDefault() - Varsayılan Davranışı Engelle

```javascript
// Bağlantının yönlendirmesini engelle
document.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault(); // sayfayı yönlendirme
    console.log("Bağlantıya tıklandı ama yönlendirilmedi");
});

// Form gönderimini engelle
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // sayfayı yenileme
    // Kendi doğrulama kodunu çalıştır
});
```

---

## 6. Tam Uygulama: Renk Değiştirici (JavaScript Uyg-9.html'den geliştirilmiş)

Mevcut `JavaScript Uyg-9.html` dosyasındaki renk değiştirme örneği, geliştirilmiş haliyle:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Etkileşimli Renk Panosu</title>
    <style>
        body { font-family: Arial; max-width: 600px; margin: 40px auto; padding: 20px; text-align: center; }

        .pano {
            width: 100%; height: 200px;
            background: #3498db; border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            color: white; font-size: 24px; font-weight: bold;
            cursor: pointer; transition: background 0.4s ease;
            user-select: none;
        }

        .renk-butonlar { display: flex; gap: 10px; margin: 20px 0; flex-wrap: wrap; justify-content: center; }

        .renk-btn {
            padding: 10px 20px; border: none; border-radius: 8px;
            color: white; cursor: pointer; font-size: 14px;
            transition: transform 0.2s; font-weight: bold;
        }
        .renk-btn:hover { transform: scale(1.1); }
        .renk-btn:active { transform: scale(0.95); }

        #olay-log {
            background: #2c3e50; color: #ecf0f1;
            padding: 15px; border-radius: 8px;
            text-align: left; font-family: monospace;
            max-height: 150px; overflow-y: auto;
        }
    </style>
</head>
<body>
    <h2>Etkileşimli Renk Panosu</h2>
    <p>Butonlara tıklayın veya panonun üzerine gelin!</p>

    <div class="pano" id="pano">Tıkla veya fareyi getir!</div>

    <div class="renk-butonlar">
        <button class="renk-btn" style="background:#e74c3c" onclick="rengiDegistir('#e74c3c', 'Kırmızı')">Kırmızı</button>
        <button class="renk-btn" style="background:#27ae60" onclick="rengiDegistir('#27ae60', 'Yeşil')">Yeşil</button>
        <button class="renk-btn" style="background:#8e44ad" onclick="rengiDegistir('#8e44ad', 'Mor')">Mor</button>
        <button class="renk-btn" style="background:#f39c12" onclick="rengiDegistir('#f39c12', 'Turuncu')">Turuncu</button>
        <button class="renk-btn" style="background:#1abc9c" onclick="rengiDegistir('#1abc9c', 'Turkuaz')">Turkuaz</button>
    </div>

    <h3>Olay Kaydı:</h3>
    <div id="olay-log">Henüz olay yok...</div>

    <script>
        let pano = document.getElementById("pano");
        let log = document.getElementById("olay-log");
        let olaySayisi = 0;

        function olayKaydet(mesaj) {
            olaySayisi++;
            let zaman = new Date().toLocaleTimeString("tr-TR");
            log.innerHTML = `[${zaman}] ${olaySayisi}. ${mesaj}<br>` + log.innerHTML;
        }

        function rengiDegistir(renk, isim) {
            pano.style.background = renk;
            pano.textContent = isim;
            olayKaydet(`Renk değiştirildi → ${isim}`);
        }

        // Fare üzerine gelince
        pano.addEventListener("mouseover", function() {
            olayKaydet("mouseover: fare pano üzerinde");
        });

        // Fare ayrılınca
        pano.addEventListener("mouseout", function() {
            olayKaydet("mouseout: fare panodan ayrıldı");
        });

        // Çift tıklanınca rastgele renk
        pano.addEventListener("dblclick", function() {
            let rastgeleRenk = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            pano.style.background = rastgeleRenk;
            pano.textContent = rastgeleRenk;
            olayKaydet(`dblclick: rastgele renk → ${rastgeleRenk}`);
        });
    </script>
</body>
</html>
```

---

## 7. Yaygın Olay Listesi

| Olay | Açıklama | Kullanım Yeri |
|------|----------|---------------|
| `click` | Tıklama | Buton, link, element |
| `dblclick` | Çift tıklama | Element |
| `mouseover` | Fare üzerine gelme | Element |
| `mouseout` | Fare ayrılma | Element |
| `mousemove` | Fare hareketi | Belge, element |
| `keydown` | Tuşa basma | Input, belge |
| `keyup` | Tuşu bırakma | Input, belge |
| `input` | Değer değişimi | Input, textarea |
| `change` | Değer onaylanma | Select, checkbox |
| `submit` | Form gönderme | Form |
| `focus` | Elemente odaklanma | Input |
| `blur` | Elementin odak kaybı | Input |
| `load` | Sayfa yüklenme | Window |
| `scroll` | Kaydırma | Window, element |

---

## Alıştırmalar

1. Bir butona tıklandığında sayfadaki tüm paragrafların rengini rastgele değiştirin.
2. Metin alanına yazarken karakter sayısını gösteren bir sayaç oluşturun (maksimum 100 karakter).
3. Klavyede ok tuşlarına basınca ekranda bir kutucuğu hareket ettirin.
4. Fare konumunu anlık olarak gösteren bir uygulama yapın (X ve Y koordinatları).
