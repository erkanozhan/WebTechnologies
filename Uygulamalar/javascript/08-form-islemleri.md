# 08 - Form İşlemleri: Veri Alma, Doğrulama ve Hesaplama

## 1. Form Verisi Alma

JavaScript, HTML formlarındaki verileri okuyabilir ve işleyebilir.

```html
<form id="kayitFormu">
    <input type="text"   id="adInput"    placeholder="Adınız">
    <input type="email"  id="emailInput" placeholder="E-postanız">
    <input type="number" id="yasInput"   placeholder="Yaşınız">
    <input type="password" id="sifreInput" placeholder="Şifreniz">
    <select id="bolumSelect">
        <option value="">Bölüm Seçin</option>
        <option value="BM">Bilgisayar Müh.</option>
        <option value="EE">Elektrik-Elektronik</option>
    </select>
    <button type="submit">Kayıt Ol</button>
</form>

<script>
    // Değerleri okuma
    let ad    = document.getElementById("adInput").value;
    let email = document.getElementById("emailInput").value;
    let yas   = Number(document.getElementById("yasInput").value);
    let bolum = document.getElementById("bolumSelect").value;
</script>
```

---

## 2. Farklı Form Elemanları

### 2.1 Checkbox

```html
<input type="checkbox" id="sozlesme"> Kullanım şartlarını kabul ediyorum

<script>
    let sozlesme = document.getElementById("sozlesme");
    console.log(sozlesme.checked);  // true veya false
    // sozlesme.checked = true;    // Programmatik olarak işaretle
</script>
```

### 2.2 Radio Button

```html
<input type="radio" name="cinsiyet" value="erkek"> Erkek
<input type="radio" name="cinsiyet" value="kadin"> Kadın

<script>
    // Seçili radio'yu bul
    let secili = document.querySelector('input[name="cinsiyet"]:checked');
    if (secili) {
        console.log(secili.value); // "erkek" veya "kadin"
    }
</script>
```

### 2.3 Select (Açılır Liste)

```html
<select id="sehir" multiple>
    <option value="ankara">Ankara</option>
    <option value="istanbul">İstanbul</option>
    <option value="izmir">İzmir</option>
</select>

<script>
    let sehirSecim = document.getElementById("sehir");

    // Tek seçimli
    console.log(sehirSecim.value);

    // Çoklu seçimde seçilenleri al
    let secililer = Array.from(sehirSecim.selectedOptions).map(o => o.value);
    console.log(secililer);
</script>
```

---

## 3. Form Doğrulama (Validation)

Kullanıcı verilerini kabul etmeden önce kontrol etmek güvenlik ve kullanılabilirlik açısından kritiktir.

```javascript
function formuDogrula() {
    let ad    = document.getElementById("adInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let yas   = Number(document.getElementById("yasInput").value);

    let hatalar = [];

    // Ad kontrolü
    if (ad === "") {
        hatalar.push("Ad alanı boş bırakılamaz.");
    } else if (ad.length < 2) {
        hatalar.push("Ad en az 2 karakter olmalıdır.");
    }

    // E-posta kontrolü (basit RegEx)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        hatalar.push("Geçerli bir e-posta adresi girin.");
    }

    // Yaş kontrolü
    if (isNaN(yas) || yas < 18 || yas > 100) {
        hatalar.push("Yaş 18-100 arasında olmalıdır.");
    }

    // Sonuç
    if (hatalar.length > 0) {
        alert("Hatalar:\n" + hatalar.join("\n"));
        return false; // Formu durdur
    }

    return true; // Tüm kontroller geçildi
}
```

---

## 4. Anlık (Gerçek Zamanlı) Doğrulama

Kullanıcı yazarken hataları göster:

```html
<div class="alan">
    <input type="text" id="sifre" placeholder="Şifre girin">
    <span id="sifreHata" class="hata"></span>
</div>

<script>
    document.getElementById("sifre").addEventListener("input", function() {
        let sifre = this.value;
        let hataSpan = document.getElementById("sifreHata");

        if (sifre.length === 0) {
            hataSpan.textContent = "";
        } else if (sifre.length < 8) {
            hataSpan.textContent = "✗ Şifre en az 8 karakter olmalı";
            hataSpan.style.color = "red";
        } else if (!/[A-Z]/.test(sifre)) {
            hataSpan.textContent = "✗ En az bir büyük harf içermeli";
            hataSpan.style.color = "red";
        } else {
            hataSpan.textContent = "✓ Şifre geçerli";
            hataSpan.style.color = "green";
        }
    });
</script>
```

---

## 5. Form Gönderimini Yönetme

```html
<form id="kayitFormu">
    <!-- form alanları -->
    <button type="submit">Gönder</button>
</form>

<script>
    document.getElementById("kayitFormu").addEventListener("submit", function(event) {
        // Sayfanın yenilenmesini engelle (varsayılan davranış)
        event.preventDefault();

        if (formuDogrula()) {
            // Doğrulama geçtiyse işlem yap
            console.log("Form başarıyla gönderildi!");
            // Normalde burada API'ye veri gönderilir
        }
    });
</script>
```

---

## 6. Tam Uygulama: Sıcaklık Dönüştürücü

Bu örnek, mevcut `JavaScript16.html` (Fahrenheit → Celsius dönüştürücü) dosyasının geliştirilmiş versiyonudur:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Sıcaklık Dönüştürücü</title>
    <style>
        body { font-family: Arial; max-width: 500px; margin: 50px auto; padding: 20px; }
        h2 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        .form-grup { margin-bottom: 20px; }
        label { display: block; font-weight: bold; color: #555; margin-bottom: 5px; }
        .giris-grup { display: flex; gap: 10px; }
        input[type="number"] {
            flex: 1; padding: 12px; border: 2px solid #ddd; border-radius: 8px;
            font-size: 18px; transition: border-color 0.3s;
        }
        input[type="number"]:focus { border-color: #3498db; outline: none; }
        select {
            padding: 12px; border: 2px solid #ddd; border-radius: 8px;
            font-size: 16px; background: white; cursor: pointer;
        }
        button {
            width: 100%; padding: 14px; background: #3498db; color: white;
            border: none; border-radius: 8px; font-size: 18px; cursor: pointer;
            transition: background 0.3s;
        }
        button:hover { background: #2980b9; }
        .sonuc {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white; padding: 25px; border-radius: 12px;
            text-align: center; margin-top: 20px; display: none;
        }
        .sonuc-deger { font-size: 48px; font-weight: bold; }
        .sonuc-aciklama { font-size: 16px; opacity: 0.9; margin-top: 5px; }
        .sicaklik-tablosu { margin-top: 30px; }
        table { width: 100%; border-collapse: collapse; }
        th { background: #2c3e50; color: white; padding: 10px; }
        td { padding: 8px 10px; border-bottom: 1px solid #eee; text-align: center; }
        .sicak   { color: #e74c3c; font-weight: bold; }
        .iliman  { color: #f39c12; }
        .soguk   { color: #3498db; }
        .buzlu   { color: #8e44ad; font-weight: bold; }
    </style>
</head>
<body>
    <h2>Sıcaklık Dönüştürücü</h2>

    <div class="form-grup">
        <label>Sıcaklık Değeri:</label>
        <div class="giris-grup">
            <input type="number" id="sicaklikInput" placeholder="Değer girin" step="0.1">
            <select id="birimSelect">
                <option value="C">°C (Celsius)</option>
                <option value="F">°F (Fahrenheit)</option>
                <option value="K">K (Kelvin)</option>
            </select>
        </div>
    </div>

    <button onclick="donustur()">Dönüştür</button>

    <div class="sonuc" id="sonuc">
        <div class="sonuc-deger" id="sonucDeger"></div>
        <div class="sonuc-aciklama" id="sonucAciklama"></div>
    </div>

    <div class="sicaklik-tablosu">
        <h3>Sık Kullanılan Referans Sıcaklıklar</h3>
        <table>
            <thead>
                <tr><th>Durum</th><th>°C</th><th>°F</th><th>K</th></tr>
            </thead>
            <tbody>
                <tr class="buzlu"><td>Suyun donma noktası</td><td>0</td><td>32</td><td>273.15</td></tr>
                <tr class="iliman"><td>Oda sıcaklığı</td><td>20</td><td>68</td><td>293.15</td></tr>
                <tr class="sicak"><td>Vücut sıcaklığı</td><td>37</td><td>98.6</td><td>310.15</td></tr>
                <tr class="sicak"><td>Suyun kaynama noktası</td><td>100</td><td>212</td><td>373.15</td></tr>
            </tbody>
        </table>
    </div>

    <script>
        // Dönüşüm formülleri fonksiyonlar olarak tanımlandı
        function celsiusDonustur(c) {
            return {
                C: c,
                F: (c * 9/5) + 32,
                K: c + 273.15
            };
        }

        function fahrenheitDonustur(f) {
            return celsiusDonustur((f - 32) * 5/9);
        }

        function kelvinDonustur(k) {
            return celsiusDonustur(k - 273.15);
        }

        function donustur() {
            let deger = parseFloat(document.getElementById("sicaklikInput").value);
            let birim = document.getElementById("birimSelect").value;

            // Boş girdi kontrolü
            if (isNaN(deger)) {
                alert("Lütfen geçerli bir sayı girin!");
                return;
            }

            // Kelvin kontrolü (negatif olamaz)
            if (birim === "K" && deger < 0) {
                alert("Kelvin birimi negatif olamaz!");
                return;
            }

            // Seçili birime göre dönüşüm yap
            let sonuclar;
            if (birim === "C") sonuclar = celsiusDonustur(deger);
            else if (birim === "F") sonuclar = fahrenheitDonustur(deger);
            else sonuclar = kelvinDonustur(deger);

            // Birim simgelerini belirle
            const birimAdi = { C: "Celsius", F: "Fahrenheit", K: "Kelvin" };
            const birimSembol = { C: "°C", F: "°F", K: "K" };

            // Sonucu göster
            let aciklama = "";
            Object.keys(sonuclar).forEach(b => {
                if (b !== birim) {
                    aciklama += `${sonuclar[b].toFixed(2)} ${birimSembol[b]} (${birimAdi[b]}) | `;
                }
            });

            document.getElementById("sonucDeger").textContent =
                `${deger} ${birimSembol[birim]}`;
            document.getElementById("sonucAciklama").textContent =
                aciklama.slice(0, -3); // Son " | " kaldır

            document.getElementById("sonuc").style.display = "block";
        }

        // Enter tuşuyla dönüştür
        document.getElementById("sicaklikInput").addEventListener("keypress", function(e) {
            if (e.key === "Enter") donustur();
        });
    </script>
</body>
</html>
```

---

## 7. Form Sıfırlama

```javascript
// Formu sıfırla
document.getElementById("kayitFormu").reset(); // Tüm alanları temizler

// Tek bir alanı temizle
document.getElementById("adInput").value = "";

// Hata mesajlarını temizle
document.querySelectorAll(".hata").forEach(el => el.textContent = "");
```

---

## Alıştırmalar

1. BMI (Vücut Kitle İndeksi) hesaplayıcı yapın: boy (cm) ve kilo (kg) alıp sonucu ve kategorisini (Zayıf/Normal/Fazla Kilolu/Obez) gösterin.
2. Kayıt formu oluşturun: ad, e-posta, şifre, şifre tekrar alanları. Şifreler eşleşmiyorsa hata gösterin.
3. Kredi faiz hesaplayıcı yapın: anapara, yıllık faiz oranı, vade (ay) alarak aylık taksit ve toplam ödemeyi hesaplayın.
