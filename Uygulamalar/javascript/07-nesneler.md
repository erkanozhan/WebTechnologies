# 07 - Nesneler (Objects) ve Diziler (Arrays)

## 1. Nesne Nedir?

Nesne (object), birbiriyle ilişkili veri ve fonksiyonları bir arada tutan yapıdır.

**Analoji:** Bir öğrenci kartı düşünün:
- Ad: Ahmet
- Soyad: Yılmaz
- Numara: 2024001
- Ortalama: 3.2

Tüm bu bilgiler bir "öğrenci" nesnesinde tutulabilir.

---

## 2. Nesne Oluşturma

### 2.1 Nesne Literali (En yaygın yöntem)

```javascript
let ogrenci = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    numara: 2024001,
    bolum: "Bilgisayar Mühendisliği",
    not: 85,
    aktifMi: true
};
```

### 2.2 Özelliklere Erişme

```javascript
// Nokta notasyonu (önerilen)
console.log(ogrenci.ad);      // "Ahmet"
console.log(ogrenci.numara);  // 2024001

// Köşeli parantez notasyonu (dinamik erişim için)
let ozellik = "bolum";
console.log(ogrenci[ozellik]); // "Bilgisayar Mühendisliği"
```

### 2.3 Özellik Değiştirme ve Ekleme

```javascript
// Var olan özelliği değiştir
ogrenci.not = 90;

// Yeni özellik ekle
ogrenci.email = "ahmet@universite.edu.tr";
ogrenci.kayitYili = 2024;

// Özellik sil
delete ogrenci.aktifMi;
```

---

## 3. Nesne Metotları (Fonksiyon İçeren Özellikler)

Nesneler sadece veri değil, işlem yapan fonksiyonlar da içerebilir:

```javascript
let ogrenci = {
    ad: "Fatma",
    soyad: "Demir",
    vize: 70,
    final: 85,

    // Metot: nesneye ait fonksiyon
    tamAd: function() {
        return `${this.ad} ${this.soyad}`; // 'this' bu nesneyi temsil eder
    },

    ortalama: function() {
        return (this.vize * 0.4) + (this.final * 0.6);
    },

    durumu: function() {
        // Geçme kuralı: ortalama en az 50 ve final en az 50
        return (this.ortalama() >= 50 && this.final >= 50) ? "Geçti" : "Kaldı";
    }
};

console.log(ogrenci.tamAd());     // "Fatma Demir"
console.log(ogrenci.ortalama());  // 79
console.log(ogrenci.durumu());    // "Geçti"
```

---

## 4. Nesne Döngüsü: for...in

```javascript
let kisi = {
    ad: "Mehmet",
    yas: 25,
    sehir: "Ankara",
    meslek: "Öğrenci"
};

// Tüm özellikleri gez
for (let anahtar in kisi) {
    console.log(`${anahtar}: ${kisi[anahtar]}`);
}
// Çıktı:
// ad: Mehmet
// yas: 25
// sehir: Ankara
// meslek: Öğrenci

// Object.keys() - anahtar dizisi
console.log(Object.keys(kisi));   // ["ad", "yas", "sehir", "meslek"]

// Object.values() - değer dizisi
console.log(Object.values(kisi)); // ["Mehmet", 25, "Ankara", "Öğrenci"]
```

---

## 5. Diziler (Arrays)

Dizi, sıralı veri koleksiyonudur.

### 5.1 Dizi Oluşturma

```javascript
let meyveler = ["Elma", "Armut", "Kiraz", "Muz"];
let sayilar  = [10, 20, 30, 40, 50];
let karisik  = ["Ali", 25, true, null]; // farklı tipler olabilir

// Elemanlara erişme (indeks 0'dan başlar)
console.log(meyveler[0]); // "Elma"
console.log(meyveler[2]); // "Kiraz"
console.log(meyveler[meyveler.length - 1]); // Son eleman: "Muz"
```

### 5.2 Dizi Metotları

```javascript
let dizi = ["a", "b", "c"];

// Ekleme
dizi.push("d");      // Sona ekle → ["a", "b", "c", "d"]
dizi.unshift("z");   // Başa ekle → ["z", "a", "b", "c", "d"]

// Silme
dizi.pop();          // Sondan sil → ["z", "a", "b", "c"]
dizi.shift();        // Baştan sil → ["a", "b", "c"]

// Arama
dizi.indexOf("b");   // 1 (kaçıncı indekste?)
dizi.includes("c");  // true (var mı?)

// Birleştirme
let yeniDizi = dizi.concat(["d", "e"]); // ["a", "b", "c", "d", "e"]

// Dizi → metin
dizi.join(", ");     // "a, b, c"

// Sıralama
[3, 1, 4, 1, 5].sort((a, b) => a - b); // [1, 1, 3, 4, 5]
```

### 5.3 Dizi Dönüşüm Metotları

```javascript
let notlar = [75, 88, 62, 95, 70];

// map: Her elemanı dönüştür (yeni dizi)
let ikiKatNotlar = notlar.map(not => not * 2);
// [150, 176, 124, 190, 140]

let kareNotlar = notlar.map(not => not * not);
// [5625, 7744, 3844, 9025, 4900]

// filter: Koşulu sağlayanları al (yeni dizi)
let yuksekNotlar = notlar.filter(not => not >= 80);
// [88, 95]

// reduce: Diziden tek değer üret
let toplam = notlar.reduce((birikim, not) => birikim + not, 0);
// 390

let ortalama = toplam / notlar.length;
// 78

// find: Koşulu sağlayan ilk elemanı bul
let ilkYuksek = notlar.find(not => not >= 90);
// 95
```

---

## 6. Nesne Dizisi (En Çok Kullanılan Yapı)

Birden fazla nesneyi dizi içinde tutmak:

```javascript
let ogrenciler = [
    { ad: "Ali",    vize: 70, final: 80 },
    { ad: "Ayşe",  vize: 85, final: 90 },
    { ad: "Mehmet", vize: 55, final: 65 },
    { ad: "Fatma",  vize: 95, final: 88 }
];

// Tüm öğrencilerin ortalamasını hesapla ve listele
ogrenciler.forEach(function(ogr) {
    let ort = (ogr.vize * 0.4) + (ogr.final * 0.6);
    let durum = (ort >= 50 && ogr.final >= 50) ? "✓" : "✗";
    console.log(`${durum} ${ogr.ad}: ${ort.toFixed(1)}`);
});

// Sadece geçenleri filtrele
let gecenler = ogrenciler.filter(ogr => {
    return (ogr.vize * 0.4 + ogr.final * 0.6) >= 50 && ogr.final >= 50;
});
```

---

## 7. Tam Uygulama: Öğrenci Listesi Yöneticisi

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Öğrenci Listesi</title>
    <style>
        body { font-family: Arial; max-width: 700px; margin: 40px auto; padding: 20px; }
        .form-satir { display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 10px; margin-bottom: 15px; }
        input { padding: 10px; border: 2px solid #ddd; border-radius: 5px; font-size: 14px; }
        .ekle-btn { background: #27ae60; color: white; border: none;
                    padding: 10px 15px; border-radius: 5px; cursor: pointer; font-size: 14px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th { background: #2c3e50; color: white; padding: 12px; text-align: left; }
        td { padding: 10px; border-bottom: 1px solid #ddd; }
        tr:hover { background: #f5f5f5; }
        .gecti { color: #27ae60; font-weight: bold; }
        .kaldi { color: #e74c3c; font-weight: bold; }
        .sil-btn { background: #e74c3c; color: white; border: none;
                   padding: 5px 10px; border-radius: 3px; cursor: pointer; }
        #ozet { background: #ecf0f1; padding: 15px; border-radius: 8px; margin-top: 15px; }
    </style>
</head>
<body>
    <h2>Öğrenci Not Listesi</h2>

    <div class="form-satir">
        <!-- Görünür alan adı (label) yerine aria-label kullanıldı; ekran okuyucular bu adı okur -->
        <input type="text" id="adInput" placeholder="Öğrenci adı" aria-label="Öğrenci adı">
        <input type="number" id="vizeInput" placeholder="Vize (0-100)" min="0" max="100" aria-label="Vize notu">
        <input type="number" id="finalInput" placeholder="Final (0-100)" min="0" max="100" aria-label="Final notu">
        <button class="ekle-btn" onclick="ogrenciEkle()">Ekle</button>
    </div>

    <table id="tablo">
        <thead>
            <tr>
                <th>#</th>
                <th>Ad</th>
                <th>Vize</th>
                <th>Final</th>
                <th>Ortalama</th>
                <th>Durum</th>
                <th>İşlem</th>
            </tr>
        </thead>
        <tbody id="tabloGovde"></tbody>
    </table>

    <div id="ozet"></div>

    <script>
        // Nesne dizisi - tüm öğrencileri burada tutuyoruz
        let ogrenciler = [
            { ad: "Ali Veli",   vize: 70, final: 80 },
            { ad: "Ayşe Kaya",  vize: 85, final: 92 },
            { ad: "Can Öztürk", vize: 45, final: 48 }
        ];

        function ortalamaBul(ogr) {
            return (ogr.vize * 0.4) + (ogr.final * 0.6);
        }

        // Geçme kuralı: ortalama en az 50 ve final en az 50
        function gectiMi(ogr) {
            return ortalamaBul(ogr) >= 50 && ogr.final >= 50;
        }

        // Bir tablo hücresi oluşturur; metni textContent ile yazar (XSS'e karşı güvenli)
        function hucre(metin, sinif) {
            let td = document.createElement("td");
            td.textContent = metin;
            if (sinif) td.className = sinif;
            return td;
        }

        function tabloYenile() {
            let govde = document.getElementById("tabloGovde");
            govde.innerHTML = ""; // Tabloyu temizle

            ogrenciler.forEach(function(ogr, indeks) {
                let ort = ortalamaBul(ogr);
                let gecti = gectiMi(ogr);

                // Kullanıcının yazdığı ad innerHTML ile değil, textContent ile yazılır.
                // Aksi hâlde ad alanına yazılan <img src=x onerror=...> gibi bir ifade kod olarak çalışırdı.
                let satir = document.createElement("tr");
                satir.append(
                    hucre(indeks + 1),
                    hucre(ogr.ad),
                    hucre(ogr.vize),
                    hucre(ogr.final),
                    hucre(ort.toFixed(1)),
                    hucre(gecti ? "Geçti" : "Kaldı", gecti ? "gecti" : "kaldi")
                );

                let silBtn = document.createElement("button");
                silBtn.className = "sil-btn";
                silBtn.textContent = "Sil";
                silBtn.addEventListener("click", () => ogrenciSil(indeks));
                let islemHucresi = document.createElement("td");
                islemHucresi.append(silBtn);
                satir.append(islemHucresi);

                govde.appendChild(satir);
            });

            ozetGuncelle();
        }

        function ogrenciEkle() {
            let ad         = document.getElementById("adInput").value.trim();
            let vizeMetni  = document.getElementById("vizeInput").value;
            let finalMetni = document.getElementById("finalInput").value;
            let vize  = Number(vizeMetni);
            let final = Number(finalMetni);

            // Number("") sonucu 0 olduğundan isNaN boş alanı yakalayamaz; boşluk ayrıca denetlenir
            if (!ad || vizeMetni === "" || finalMetni === "" ||
                vize < 0 || vize > 100 || final < 0 || final > 100) {
                alert("Tüm alanları 0-100 arasında geçerli değerlerle doldurun!");
                return;
            }

            // Yeni nesne oluştur ve diziye ekle
            ogrenciler.push({ ad, vize, final });

            // Girişleri temizle
            document.getElementById("adInput").value = "";
            document.getElementById("vizeInput").value = "";
            document.getElementById("finalInput").value = "";

            tabloYenile();
        }

        function ogrenciSil(indeks) {
            if (confirm(`${ogrenciler[indeks].ad} silinsin mi?`)) {
                ogrenciler.splice(indeks, 1); // 1 eleman sil
                tabloYenile();
            }
        }

        function ozetGuncelle() {
            let toplam = ogrenciler.length;
            if (toplam === 0) { document.getElementById("ozet").innerHTML = ""; return; }

            let gecenler  = ogrenciler.filter(gectiMi).length;
            let kalanlar  = toplam - gecenler;
            let genelOrt  = ogrenciler.reduce((t, o) => t + ortalamaBul(o), 0) / toplam;

            document.getElementById("ozet").innerHTML = `
                <strong>Özet:</strong>
                Toplam: ${toplam} öğrenci |
                Geçen: <span style="color:#27ae60">${gecenler}</span> |
                Kalan: <span style="color:#e74c3c">${kalanlar}</span> |
                Genel Ortalama: <strong>${genelOrt.toFixed(1)}</strong>
            `;
        }

        tabloYenile(); // Sayfa yüklenince tabloyu doldur
    </script>
</body>
</html>
```

---

## Alıştırmalar

1. Bir kitap nesnesi oluşturun: başlık, yazar, yıl, sayfa sayısı özellikleriyle. Kitabın özet bilgisini döndüren `ozetBilgi()` metodu ekleyin.
2. 5 şehir ve nüfuslarından oluşan bir nesne dizisi yapın. En kalabalık ve en az nüfuslu şehri bulun.
3. Alışveriş sepeti simülasyonu: Ürün ekleme, çıkarma ve toplam fiyat hesaplama işlevlerini nesne metotları olarak yazın.
