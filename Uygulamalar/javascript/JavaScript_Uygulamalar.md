# JavaScript Uygulama Örnekleri

Bu dosyada, `01`–`09` arasındaki konu dosyalarında anlatılan kavramları birleştiren kısa ve bağımsız örnek sayfalar yer almaktadır. Her örneği `.html` uzantılı ayrı bir dosyaya kopyalayıp tarayıcıda açarak çalıştırabilirsiniz. Eski ders kodlarından uyarlanan örneklerde, güncelliğini yitirmiş yöntemler not olarak belirtilmiş ve güncel karşılıklarıyla değiştirilmiştir.

---

## 1. Birden Fazla Olay Dinleyicisi (`addEventListener`)

Bu uygulama, `addEventListener()` metoduyla tek bir düğmeye üç farklı olay için üç ayrı fonksiyon bağlanmasını gösterir. Fare düğmenin üzerine geldiğinde, düğmeye tıklandığında ve fare düğmeden ayrıldığında farklı birer mesaj yazılır. `onclick` niteliğinden farklı olarak `addEventListener` HTML ile JavaScript'i birbirinden ayırır ve aynı öğeye istenildiği kadar dinleyici eklenmesine izin verir.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html lang="tr">
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>addEventListener Örneği</title>
</head>
<body>
    <p>
        Bu örnek, bir HTML düğmesine birden fazla olay dinleyicisi eklemek için <code>addEventListener()</code> metodunun nasıl kullanılacağını gösterir.
    </p>
    <button id="myBtn">Beni Dene</button> <!-- Olay dinleyicileri eklenecek düğme. -->
    <p id="demo"></p> <!-- Olaylar tetiklendiğinde mesajların yazılacağı paragraf. -->

    <script>
    // 'myBtn' kimliğine sahip düğme seçilerek bir değişkene atanır.
    const btn = document.getElementById("myBtn");

    // addEventListener ile üç farklı olaya üç farklı fonksiyon atanır.
    btn.addEventListener("mouseover", handleMouseOver);   // Fare düğmenin üzerine gelince
    btn.addEventListener("click", handleClick);           // Düğmeye tıklanınca
    btn.addEventListener("mouseout", handleMouseOut);     // Fare düğmeden ayrılınca

    // 'demo' paragrafına yeni bir satır ekleyen yardımcı fonksiyon.
    function mesajYaz(metin) {
        const satir = document.createElement("div");
        satir.textContent = metin;
        document.getElementById("demo").append(satir);
    }

    function handleMouseOver() { mesajYaz("Fare imleci düğmenin üzerinde!"); }
    function handleClick()     { mesajYaz("Düğmeye tıklandı!"); }
    function handleMouseOut()  { mesajYaz("Fare imleci düğmeden ayrıldı!"); }
    </script>
</body>
</html>
```

---

## 2. Tarayıcı Bilgileri (`navigator` Nesnesi)

Bu uygulama, `navigator` nesnesi aracılığıyla tarayıcı hakkında bilgi toplar ve sayfada bir liste olarak gösterir.

> **Eski kod notu:** Bu örneğin ilk sürümünde `<div align="center">`, `document.write()`, `navigator.appName`, `navigator.appCodeName`, `navigator.appVersion` ve `navigator.platform` kullanılıyordu. `align` niteliği HTML5 ile kullanımdan kaldırılmıştır (yerine CSS `text-align` kullanılır). `document.write()` sayfa yüklendikten sonra çağrılırsa belgenin tamamını siler ve kullanılması önerilmez. `appName` artık her tarayıcıda `"Netscape"`, `appCodeName` ise her tarayıcıda `"Mozilla"` döndürür; bu nedenle "Internet Explorer mı?" sorusunu yanıtlayamaz. `appVersion` ve `platform` da kullanımdan kaldırılmış (deprecated) özelliklerdir. Aşağıdaki sürüm yalnızca güncel özellikleri kullanır.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Tarayıcı Bilgileri</title>
    <style>
        .orta { text-align: center; }   /* align="center" yerine CSS */
    </style>
</head>
<body>
    <div class="orta">
        <h1>Merhaba Dünya Çapında Web!</h1>
        <h3>JavaScript</h3>
    </div>

    <h2>Topladığım Bilgiler</h2>
    <ul id="bilgiler"></ul> <!-- Tarayıcı bilgileri buraya eklenecek. -->

    <script>
    // Her bilgi için listeye bir madde ekleyen yardımcı fonksiyon.
    function bilgiEkle(baslik, deger) {
        const li = document.createElement("li");
        li.textContent = baslik + ": " + deger;
        document.getElementById("bilgiler").append(li);
    }

    bilgiEkle("Çerezler etkin mi?", navigator.cookieEnabled ? "Evet" : "Hayır");
    bilgiEkle("Tarayıcı dili", navigator.language);
    bilgiEkle("Tercih edilen diller", navigator.languages.join(", "));
    bilgiEkle("Çevrimiçi mi?", navigator.onLine ? "Evet" : "Hayır");
    bilgiEkle("Kullanıcı aracısı (user agent)", navigator.userAgent);
    </script>
</body>
</html>
```

---

## 3. Metin Rengi ve Boyutu Değiştirme

Bu uygulama, bir paragrafa (`<p>`) tıklandığında o paragrafın renginin ve yazı boyutunun JavaScript ile değiştirilmesini gösterir. Öğeye `id` ile erişilir ve `style` nesnesi üzerinden CSS özellikleri değiştirilir.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Metin Rengi ve Boyutu Değiştirme</title>
</head>
<body>
    <!-- Paragrafa tıklandığında 'renkdegistir' fonksiyonu çağrılır. -->
    <p id="deneme" onclick="renkdegistir()">Beni tıkla ve metin rengimin değiştiğini gör.</p>

    <p>Yukarıdaki "Beni tıkla..." metnine tıklandığında, metnin rengi kırmızı ve yazı boyutu 20pt olur.</p>

    <script>
    function renkdegistir() {
        const paragraf = document.getElementById("deneme");
        paragraf.style.color = "red";        // Paragrafın rengi kırmızıya döner.
        paragraf.style.fontSize = "20pt";    // CSS'teki font-size, JavaScript'te fontSize yazılır.
    }
    </script>
</body>
</html>
```

---

## 4. Onay Kutusu ile Yönlendirme (`confirm` ve `setTimeout`)

Bu örnek, sayfa açıldıktan 6 saniye sonra kullanıcıya bir onay kutusu (`confirm`) gösterir. Kullanıcı "Tamam" derse başka bir siteye yönlendirilir, "İptal" derse sayfada kalır.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>JavaScript Yönlendirme Örneği</title>
</head>
<body>
    <p>Bu sayfa 6 saniye sonra size bir soru soracak.</p>
    <script>
    // moveon() fonksiyonu kullanıcıya bir onay penceresi gösterir ve seçime göre yönlendirme yapar.
    function moveon() {
        const cevap = confirm("Site değiştirmeye hazır mısın?"); // Tamam → true, İptal → false
        if (cevap) {
            window.location.href = "https://www.google.com";
        }
    }
    // setTimeout() ile moveon fonksiyonu 6000 ms (6 saniye) sonra bir kez çağrılır.
    setTimeout(moveon, 6000);
    </script>
</body>
</html>
```

---

## 5. Dijital Saat

Bu uygulama, sayfada her saniye güncellenen bir dijital saat gösterir. Fonksiyon sonunda kendisini `setTimeout` ile bir saniye sonrası için yeniden zamanlar; böylece saat sürekli güncellenir. Aynı sonuç `setInterval(displayTime, 1000)` ile de elde edilebilir.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>JavaScript ile Dijital Saat</title>
    <style>
    #saat {
        font: bold 24pt sans-serif;   /* genel yazı tipi ailesi: sans-serif */
        background: #ddf;
        padding: 10px;
        border: solid black 2px;
        border-radius: 10px;
    }
    </style>
</head>
<body>
    <h1>Dijital Saat</h1>
    <span id="saat"></span> <!-- Saat bilgisinin gösterileceği alan. -->

    <script>
    function displayTime() {
        const elt = document.getElementById("saat");
        const simdi = new Date();
        elt.textContent = simdi.toLocaleTimeString("tr-TR"); // Örn: 14:35:22
        setTimeout(displayTime, 1000);   // 1 saniye sonra kendini yeniden çağırır.
    }
    window.onload = displayTime;         // Sayfa yüklendiğinde saati başlatır.
    </script>
</body>
</html>
```

---

## 6. Faktöriyel Tablosu

Bu uygulama, kullanıcının girdiği sayıya kadar olan faktöriyelleri hesaplar ve bir HTML tablosu içinde gösterir. Negatif veya sayı olmayan girişler denetlenir.

> **Eski kod notu:** Bu örneğin ilk sürümü sonuçları `document.write()` ile yazıyordu. Düğmeye tıklandığında, yani sayfa yüklendikten sonra çağrılan `document.write()`, önce belgenin tamamını siler; form, başlık ve düğme kaybolur ve geriye yalnızca tablo kalır. Aşağıdaki sürümde tablo, DOM metotlarıyla mevcut sayfanın içine eklenmektedir.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>JavaScript ile Faktöriyel Hesaplama</title>
    <style>
        table { border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #333; padding: 4px 10px; text-align: right; }
    </style>
</head>
<body>
    <h1>Faktöriyel Tablosu</h1>
    <label for="sayi">Sayı:</label>
    <input type="number" id="sayi" min="0" max="20">
    <button type="button" id="hesapla">Hesapla</button>

    <div id="sonuc"></div> <!-- Tablo buraya eklenecek. -->

    <script>
    function factorial() {
        const metin = document.getElementById("sayi").value;
        const n = parseInt(metin, 10);
        const sonuc = document.getElementById("sonuc");
        sonuc.textContent = "";   // Önceki tabloyu temizle.

        if (Number.isNaN(n) || n < 0) {
            alert("Lütfen 0 veya daha büyük bir tam sayı girin!");
            return;
        }

        const tablo = document.createElement("table");
        const baslik = tablo.insertRow();
        baslik.innerHTML = "<th>Sayı</th><th>Faktöriyel</th>"; // Sabit metin; kullanıcı verisi içermez.

        let fak = 1;
        for (let i = 1; i <= n; i++) {
            fak = fak * i;
            const satir = tablo.insertRow();
            satir.insertCell().textContent = i;
            satir.insertCell().textContent = fak.toLocaleString("tr-TR");
        }

        const not = document.createElement("p");
        not.textContent = "Bu tablo " + new Date().toLocaleString("tr-TR") + " tarihinde oluşturuldu.";

        sonuc.append(tablo, not);
    }

    document.getElementById("hesapla").addEventListener("click", factorial);
    </script>
</body>
</html>
```

---

## 7. Fahrenheit'tan Celsius'a Çevirici

Bu uygulama, Fahrenheit cinsinden girilen bir sıcaklık değerini Celsius (Santigrat) dereceye dönüştürür. Dönüşüm formülü `C = (F − 32) × 5 / 9` biçimindedir.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fahrenheit'tan Celsius'a Çevirici</title>
</head>
<body>
    <header>
        <h1>Sıcaklık Dönüştürücü</h1>
    </header>
    <article>
        <h2>Fahrenheit (&#176;F) &#8594; Celsius (&#176;C) Çevirici</h2>
        <form>
            <fieldset>
                <label for="fValue">&#176;F değerini giriniz</label>
                <input type="number" id="fValue" step="0.1">
            </fieldset>
            <fieldset>
                <button type="button" id="button">&#176;C'ye çevir</button>
            </fieldset>
            <fieldset>
                <p>Sıcaklık (&#176;C)</p>
                <p id="cValue">&nbsp;</p> <!-- Sonucun gösterileceği alan. -->
            </fieldset>
        </form>
    </article>

    <script>
    function convert() {
        const metin = document.getElementById("fValue").value;
        const cikti = document.getElementById("cValue");
        if (metin === "") {                       // Boş girişte Number("") 0 olurdu.
            cikti.textContent = "Lütfen bir değer girin.";
            return;
        }
        const degF = Number(metin);
        const degC = (degF - 32) * 5 / 9;         // Fahrenheit'tan Celsius'a dönüşüm formülü
        cikti.textContent = degC.toFixed(2) + " °C";
    }
    document.getElementById("button").addEventListener("click", convert);
    </script>
</body>
</html>
```

---

## 8. Finalden Alınması Gereken Notu Hesaplama

Bu uygulama; vize notu, isteğe bağlı ödev notu, bunların ağırlıkları ve geçme notu bilindiğinde, öğrencinin finalden en az kaç alması gerektiğini hesaplar. "Ödev var mı?" sorusuna verilen cevaba göre ödev alanları etkinleştirilir veya devre dışı bırakılır.

Hesaplamanın mantığı şudur: Ağırlıklı ortalama `vize × vizeOranı + ödev × ödevOranı + final × finalOranı` biçiminde hesaplanır. Bu ortalamanın geçme notuna eşit olması için gereken final notu:

```text
gerekli final = (geçme notu − vize × vizeOranı − ödev × ödevOranı) / finalOranı
```

Örnekteki kurala göre final notu ayrıca en az 50 olmalıdır; bu nedenle hesaplanan değer 50'nin altındaysa 50 gösterilir. Değer 100'ü aşıyorsa öğrencinin bu notlarla geçmesi mümkün değildir.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Final Notu Hesaplama</title>
</head>
<body>
    <form id="formhesap">
        <fieldset>
            <legend>Bilgiler</legend>

            <fieldset>
                <legend>Ödev var mı?</legend>
                <label><input type="radio" name="odevVar" value="1" checked> Var</label>
                <label><input type="radio" name="odevVar" value="0"> Yok</label>
            </fieldset>

            <label>Geçme notu: <input type="number" name="gecme" value="50" min="0" max="100"></label><br>
            <label>Vize notunuz: <input type="number" name="vize" min="0" max="100"></label><br>
            <label>Vize oranı (%): <input type="number" name="vizeOrani" value="40" min="0" max="100"></label><br>
            <label>Final oranı (%): <input type="number" name="finalOrani" value="60" min="0" max="100"></label><br>
            <label>Ödev notunuz: <input type="number" name="odev" min="0" max="100"></label><br>
            <label>Ödev oranı (%): <input type="number" name="odevOrani" value="0" min="0" max="100"></label><br>

            <button type="button" id="hesapla">Hesapla</button>
            <p>Finalden en az <output name="sonuc">—</output> almalısınız.</p>
        </fieldset>
    </form>

    <script>
    const form = document.getElementById("formhesap");

    // Ödev yoksa ödev alanlarını devre dışı bırak.
    function odevAlanlariniAyarla() {
        const odevYok = form.odevVar.value === "0";
        form.odev.disabled = odevYok;
        form.odevOrani.disabled = odevYok;
    }
    form.odevVar.forEach(radyo => radyo.addEventListener("change", odevAlanlariniAyarla));

    function finalHesapla() {
        const odevVar    = form.odevVar.value === "1";
        const gecme      = Number(form.gecme.value);
        const vize       = Number(form.vize.value);
        const vizeOrani  = Number(form.vizeOrani.value) / 100;
        const finalOrani = Number(form.finalOrani.value) / 100;
        const odev       = odevVar ? Number(form.odev.value) : 0;
        const odevOrani  = odevVar ? Number(form.odevOrani.value) / 100 : 0;

        if (form.vize.value === "" || (odevVar && form.odev.value === "")) {
            alert("Lütfen notlarınızı girin.");
            return;
        }
        // Oranların toplamı %100 olmalıdır (kayan nokta hatasına karşı küçük bir tolerans bırakılır).
        if (Math.abs(vizeOrani + finalOrani + odevOrani - 1) > 0.0001) {
            alert("Vize, final ve ödev oranlarının toplamı %100 olmalıdır.");
            return;
        }

        let gerekli = (gecme - vize * vizeOrani - odev * odevOrani) / finalOrani;
        if (gerekli < 50) gerekli = 50;   // Final notu için en az 50 kuralı

        form.sonuc.value = gerekli > 100
            ? "100'den fazla (bu notlarla geçmek mümkün değil)"
            : Math.ceil(gerekli);
    }
    document.getElementById("hesapla").addEventListener("click", finalHesapla);
    </script>
</body>
</html>
```

---

## 9. Tarih Gösterimi ve Betiğin Yeri

Bu örnek, `id` seçicisiyle stil verilmiş bir `div` öğesinin içeriğinin JavaScript ile doldurulmasını gösterir. Betiğin konumuna dikkat edin: `<script>` bloğu `div` öğesinden **sonra** yazılmıştır. Aynı betik `<head>` içine taşınırsa, çalıştığı anda `div` henüz oluşturulmamış olur; `getElementById("date")` `null` döndürür ve bir sonraki satır `TypeError` hatası verir. Bu sorunun güncel çözümü, betiği `defer` niteliğiyle harici bir dosyadan yüklemektir (bkz. `01-javascript-temelleri.md`).

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Tarih Gösterimi</title>
    <style>
    #date {
        color: red;   /* 'date' id'li div'in yazı rengi kırmızı olur. */
    }
    </style>
</head>
<body>
    <div id="date"></div> <!-- Tarihin yazılacağı alan. -->
    <script>
    const dtElem = document.getElementById("date");
    const p = document.createElement("p");
    p.textContent = new Date().toLocaleString("tr-TR");   // Örn: 20.05.2026 14:35:22
    dtElem.append(p);
    </script>
</body>
</html>
```

---

## 10. Düğme ile Yazı Boyutunu Değiştirme

Bu örnek, bir düğmeye tıklandığında bir paragrafın yazı boyutunun büyütülmesini en kısa biçimde gösterir. JavaScript kodu doğrudan düğmenin `onclick` niteliğine yazılmıştır; kısa denemeler için pratik olsa da büyük projelerde `addEventListener` tercih edilir.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Stil Değiştirme</title>
</head>
<body>

<h2>JavaScript Neler Yapabilir?</h2>
<p id="demo">JavaScript, bir HTML öğesinin stilini değiştirebilir.</p>
<!-- Butona tıklanınca paragrafın yazı boyutu büyütülür. -->
<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Tıkla!</button>

</body>
</html>
```

---

## 11. JavaScript Nesneleri

Bu uygulama, JavaScript'te bir nesnenin nasıl tanımlandığını ve özelliklerine nokta notasyonuyla nasıl erişildiğini gösterir.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>JavaScript Nesneleri</title>
</head>
<body>
    <p>JavaScript Nesneleri</p>
    <p id="demo"></p> <!-- Sonucun gösterileceği alan. -->

    <script>
    const kisi = {
        ad: "Ahmet",          // Nesnenin ad özelliği
        soyad: "Örnek",       // Nesnenin soyad özelliği
        yas: 50,              // Nesnenin yaş özelliği
        gozRengi: "Mavi"      // Nesnenin göz rengi özelliği
    };
    document.getElementById("demo").textContent = kisi.ad + " " + kisi.yas + " yaşındadır.";
    </script>
</body>
</html>
```

---

## 12. `prompt` ve `alert` ile Kullanıcı Etkileşimi

Bu uygulama, kullanıcıdan `prompt` kutusu aracılığıyla bir giriş alır ve girişe göre `alert` kutusuyla farklı mesajlar gösterir. `prompt`, kullanıcı İptal'e basarsa `null` döndürür; bu durum ayrıca ele alınmıştır.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Kullanıcı Adı Sorgulama</title>
</head>
<body>
    <script>
    const ad = prompt("İsminiz nedir?", "");
    if (ad === null) {
        alert("Giriş iptal edildi.");
    } else if (ad.trim() === "Ahmet") {
        alert("İsminiz Ahmet! Hoş geldiniz!");
    } else {
        alert("İsminiz Ahmet değil. Üzgünüm.");
    }
    </script>
</body>
</html>
```

---

## 13. Metin Arama ve Vurgulama

Bu uygulama, bir metin alanındaki (`<textarea>`) yazıda kullanıcının girdiği kelimeyi arar ve bulunan tüm eşleşmeleri vurgulayarak gösterir. Arama, büyük/küçük harf duyarsız bir düzenli ifade (RegExp) ile yapılır.

Bu örnekte iki önemli güvenlik ve kararlılık önlemi alınmıştır:

- Kullanıcının yazdığı arama metnindeki `.`, `*`, `(` gibi RegExp özel karakterleri kaçırılır (escape). Aksi hâlde `(` girildiğinde `SyntaxError` oluşur; `a*` gibi boş metinle de eşleşebilen bir ifadede ise `exec` döngüsü ilerleyemez ve sekme donar.
- Sonuç `innerHTML` ile değil, metin düğümleri ve `<span>` öğeleri oluşturularak yazılır. Böylece metin alanına yazılmış `<img src=x onerror=...>` gibi bir ifade kod olarak çalışmaz.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Metin Arama ve Vurgulama</title>
    <style>
    #arabutonu {
        background-color: #ff0;
        padding: 10px 40px;
        border: 2px solid #ccc;
        cursor: pointer;
    }
    .bulundu {
        background-color: yellow;
        font-weight: bold;
    }
    </style>
</head>
<body>
    <form id="textsearch">
        <label for="metinkutusu">Aranacak metnin bulunduğu alan:</label><br>
        <textarea id="metinkutusu" cols="100" rows="8">Bu örnek metin, arama ve vurgulama işlevi için kullanılmıştır. Örneğin "metin" veya "örnek" kelimelerini arayabilirsiniz. Web teknolojileri dersinde metin işleme konusunu öğreniyoruz.</textarea>
        <p>
            <label for="arananmetin">Aranacak kelime:</label>
            <input id="arananmetin" type="text">
        </p>
    </form>
    <!-- Paragraf yerine gerçek bir düğme: klavye ile de kullanılabilir. -->
    <button type="button" id="arabutonu">Arama Yap</button>
    <div id="arasonuc"></div> <!-- Sonucun gösterileceği alan. -->

    <script>
    // RegExp özel karakterlerini kaçırır: "a.b" girişi her karakterle değil, gerçekten "a.b" ile eşleşir.
    function regexKacir(metin) {
        return metin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function doSearch() {
        const arananmetin = document.getElementById("arananmetin").value;
        const sonucAlani = document.getElementById("arasonuc");
        sonucAlani.textContent = "";

        if (!arananmetin) {
            sonucAlani.textContent = "Lütfen aranacak bir metin girin.";
            return;
        }

        const re = new RegExp(regexKacir(arananmetin), "gi");
        const searchString = document.getElementById("metinkutusu").value;
        const pre = document.createElement("pre");
        pre.style.whiteSpace = "pre-wrap";

        let lastIndex = 0;
        let matchArray;
        while ((matchArray = re.exec(searchString)) !== null) {
            // Önceki eşleşmeden bu eşleşmeye kadar olan düz metin
            pre.append(searchString.substring(lastIndex, matchArray.index));
            // Bulunan kelime vurgulanır
            const span = document.createElement("span");
            span.className = "bulundu";
            span.textContent = matchArray[0];
            pre.append(span);
            lastIndex = re.lastIndex;
            // Güvenlik ağı: boş bir eşleşmede lastIndex ilerlemez; elle ilerletilmezse döngü sonsuza gider.
            if (matchArray[0] === "") re.lastIndex++;
        }
        pre.append(searchString.substring(lastIndex));   // Son kalan kısım
        sonucAlani.append(pre);
    }

    document.getElementById("arabutonu").addEventListener("click", doSearch);
    </script>
</body>
</html>
```

---

## 14. Saate Göre Selamlama

Bu kod, günün saatine göre farklı bir selamlama mesajı oluşturur ve sayfaya yazar. Koşullu ifadelerde aralık sınırlarının (`>=` ve `<`) dikkatle seçilmesi gerekir: Her saat değeri tam olarak bir aralığa düşmelidir.

| Saat (`getHours()`) | Mesaj |
|---|---|
| 5–11 | Günaydın! |
| 12–17 | İyi günler, tünaydın! |
| 18–21 | İyi akşamlar! |
| 22–23 ve 0–4 | İyi geceler! |

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Saate Göre Selamlama</title>
</head>
<body>
    <h3 id="selam"></h3>
    <script>
    const saat = new Date().getHours();   // 0-23 arası bir tam sayı
    let mesaj;
    if (saat >= 5 && saat < 12) {
        mesaj = "Günaydın!";
    } else if (saat >= 12 && saat < 18) {
        mesaj = "İyi günler, tünaydın!";  // "Tünaydın": öğleden sonra kullanılan selamlama
    } else if (saat >= 18 && saat < 22) {
        mesaj = "İyi akşamlar!";
    } else {
        mesaj = "İyi geceler!";           // 22-23 ve 0-4
    }
    document.getElementById("selam").textContent = mesaj;
    </script>
</body>
</html>
```

---

## 15. Harici CSS Dosyası ile Sayfa Düzeni

Bu örnek iki dosyadan oluşur: `index.html` sayfanın yapısını, `css/uygulama4.css` ise görünümünü tanımlar. HTML ile CSS'in ayrı dosyalarda tutulması, kaygıların ayrılması (separation of concerns) ilkesinin bir uygulamasıdır. Klasör yapısı şöyledir:

```text
proje/
├── index.html
└── css/
    └── uygulama4.css
```

**`css/uygulama4.css`**

```css
/* Google Fonts'tan Open Sans yazı tipini içe aktarır (https ile). */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,700&display=swap");

body {
    font-family: "Courier New", Courier, monospace;
    /* Arka plan: görsel yerine iki renkli doğrusal geçiş (gradient) */
    background: linear-gradient(135deg, #1a1a2e, #16213e) fixed;
    margin: 0;
    padding: 50px 0 0 50px;
    min-height: 100vh;
}

/* Başlık, alt başlık ve paragraf aynı genişlikte, beyaz bir kart gibi alt alta dizilir. */
h1, h3, p {
    width: 320px;
    margin: 0;
    background-color: #fff;
    color: #5a514c;
    text-align: center;
    border-left: 1px solid #bcbdc0;
    border-right: 1px solid #bcbdc0;
}

h1 {
    padding: 30px 0 10px;
    border-top: 1px solid #bcbdc0;
}

h3 {
    padding: 10px 0 20px;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 1.8em;
    font-style: italic;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
    text-transform: uppercase;
}

p {
    padding: 30px 0 25px;
    font-weight: bold;
    border-bottom: 1px solid #bcbdc0;
}
```

**`index.html`**

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <title>Namık Kemal Üniv. &amp; ÇMF</title>
    <link rel="stylesheet" href="css/uygulama4.css">
</head>
<body>
    <h1>N.K.Ü. &amp; Çorlu Müh. Fak.</h1>
    <h3>Bilgisayar Mühendisliği</h3>
    <p>İletişim için bizi arayın <br><em>282-250 23 00</em></p>
</body>
</html>
```

> **Not:** Bu örnek sabit genişlikli (320 piksel) bir düzen kullanır; duyarlı (responsive) değildir. Dar ekranlara uyum için `width: 320px` yerine `max-width: 320px; width: 100%;` yazılabilir ve `body` için yatay iç boşluk küçültülebilir (bkz. `../CSS/9-responsive-tasarim.md`). Eski sürümde kullanılan `-webkit-background-size`, `-moz-background-size` ve `-o-background-size` gibi tarayıcı önekleri artık gerekli değildir.
