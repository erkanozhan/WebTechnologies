Gençler için derslerinde faydalanabilecekleri, kapsamlı ve akademik bir yaklaşımla hazırlanmış JavaScript Uygulamaları Kataloğu:

---

# JavaScript Uygulama Örnekleri

---

## 1. `addeventlistener_example.html`

Bu uygulama, bir HTML düğmesine birden fazla olay dinleyicisi (event listener) eklenmesini sağlayan `addEventListener()` metodunun kullanımını, nesne tabanlı programlama paradigması çerçevesinde örneklendirmektedir. `addEventListener()` fonksiyonu, Belge Nesne Modeli (DOM) üzerinde yer alan bir elemana, farklı olay türleri (örneğin, fareyle üzerine gelme, tıklama, fareyle ayrılma gibi) için birden fazla bağımsız işlevin atanmasına olanak tanır. Bu yöntem, olay tabanlı programlamanın temel taşlarından biri olup, kullanıcı etkileşimlerinin yönetilmesinde esneklik ve modülerlik sağlar. Aynı elemana birden fazla işlevin bağlanabilmesi, kodun yeniden kullanılabilirliğini ve sürdürülebilirliğini artırır. Bu bağlamda, uygulama örneği, modern web geliştirme süreçlerinde olay yönetiminin nasıl gerçekleştirileceğine dair kapsamlı bir bakış açısı sunmaktadır.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>AddEventListener Örneği</title>
</head>
<body>
    <p>
        Bu örnek, bir HTML düğmesine birden fazla olay dinleyicisi eklemek için <code>addEventListener()</code> yönteminin nasıl kullanılacağını gösterir.
        Her olay için farklı bir işlev atanabilir ve bu, modern JavaScript'te olay yönetiminin en iyi yoludur.
    </p>
    <button id="myBtn">Beni Dene</button>
    <p id="demo"></p>

    <script>
    // 'myBtn' kimliğine sahip buton seçilerek bir değişkene atanır.
    const btn = document.getElementById("myBtn");

    // addEventListener ile üç farklı olaya üç farklı işlev atanır.
    btn.addEventListener("mouseover", handleMouseOver);   // Fare butonun üzerine gelince
    btn.addEventListener("click", handleClick);           // Butona tıklanınca
    btn.addEventListener("mouseout", handleMouseOut);     // Fare butondan ayrılınca

    // Fare butonun üzerindeyken tetiklenen işlev.
    function handleMouseOver() {
        document.getElementById("demo").innerHTML += "Mouse imleci butonun üzerinde!<br>";
    }

    // Butona tıklandığında tetiklenen işlev.
    function handleClick() {
        document.getElementById("demo").innerHTML += "Butona tıklandı!<br>";
    }

    // Fare butondan ayrıldığında tetiklenen işlev.
    function handleMouseOut() {
        document.getElementById("demo").innerHTML += "Mouse imleci butondan ayrıldı!<br>";
    }
    </script>
</body>
</html>
```

---

## 2. `browser_info.html`

Bu uygulama, JavaScript'in `navigator` nesnesini kullanarak istemci (tarayıcı) hakkında çeşitli bilgileri elde etme ve bu bilgileri kullanıcıya sunma sürecini akademik bir yaklaşımla ele almaktadır. `navigator` nesnesi, tarayıcı sürümü, adı, platformu gibi kullanıcı ajanına özgü verilere erişim sağlar. Kodda, tarayıcı türü ve özellikleri koşullu ifadelerle analiz edilmekte ve kullanıcıya uygun mesajlar gösterilmektedir.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="keywords" content="javascript, html">
    <title>Tarayıcı Bilgileri</title>
</head>
<body>
    <div align="center">
        <h1>
            <script>
            // Sayfaya "Hello World Wide Web!" metnini yazar.
            document.write("Hello World Wide Web!");
            </script>
        </h1>
        <h3>
            <script>
            // Sayfaya "JavaScript" metnini yazar.
            document.write("JavaScript");
            </script>
        </h3>
        <script>
        // navigator.appName özelliği, tarayıcının adını döndürür.
        // Bu örnek, Internet Explorer olup olmadığını kontrol eder ve buna göre farklı mesajlar gösterir.
        if (navigator.appName == "Microsoft Internet Explorer") {
            document.write("Internet Explorer kullanıyorsunuz. Biraz daha inceleyelim.");
        } else {
            document.write("Internet Explorer kullanmıyorsunuz.<br>");
            document.write("Belki Firefox veya Safari kullanıyorsunuzdur.");
        }
        </script>
    </div>

    <div id="demo">
        <h1>İşte topladığım bilgiler</h1>
    </div>

    <script>
    // Tarayıcı bilgilerini biriktirmek için boş bir string değişkeni tanımlanır.
    var txt = "";

    // navigator nesnesinin çeşitli özellikleri kullanılarak tarayıcı bilgileri elde edilir.
    txt += "<p>Tarayıcı Kod Adı: " + navigator.appCodeName + "</p>";
    txt += "<p>Tarayıcı Adı: " + navigator.appName + "</p>";
    txt += "<p>Tarayıcı Versiyonu: " + navigator.appVersion + "</p>";
    txt += "<p>Çerezler Etkin mi?: " + navigator.cookieEnabled + "</p>";
    txt += "<p>Tarayıcı Dili: " + navigator.language + "</p>";
    txt += "<p>Tarayıcı Çevrimiçi mi?: " + navigator.onLine + "</p>";
    txt += "<p>Platform: " + navigator.platform + "</p>";
    txt += "<p>Kullanıcı-agent başlığı: " + navigator.userAgent + "</p>";

    // Sayfa yüklendiğinde kullanıcıya "Merhaba" diyen bir uyarı penceresi gösterilir.
    alert("Merhaba");

    // Toplanan tüm tarayıcı bilgileri 'demo' kimliğine sahip div'in içeriğine eklenir.
    document.getElementById("demo").innerHTML += txt;
    </script>
</body>
</html>
```

---

## 3. `color_and_font_change.html`

Bu uygulama, HTML'deki bir paragraf (`<p>`) elemanının tıklanmasıyla stil özelliklerinin (renk ve yazı tipi boyutu) dinamik olarak değiştirilmesini göstermektedir. Bu örnek, DOM manipülasyonunun temel ilkelerini ve kullanıcı etkileşimi ile stil değişimini akademik bir dille ortaya koymaktadır.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Metin Rengi ve Boyutu Değiştirme</title>
</head>
<body>
    <!-- Paragraf elemanına tıklandığında 'renkdegistir' adlı JavaScript fonksiyonu çağrılır. -->
    <p id="deneme" onclick="renkdegistir()">Beni tıkla ve metin rengimin değiştiğini gör.</p>

    <!-- Fonksiyonun işlevini açıklayan statik metin. -->
    <p>Bu fonksiyon, yukarıdaki "Beni tıkla..." metnine tıklandığında, stil rengini kırmızı ve yazı tipi boyutunu 20pt olarak değiştirir.</p>

    <script>
    // 'renkdegistir' fonksiyonu, tıklama olayı tetiklendiğinde çalışır.
    function renkdegistir() {
        // 'deneme' kimliğine sahip HTML elemanına erişilir ve stil özellikleri değiştirilir.
        document.getElementById("deneme").style.color = "red";
        document.getElementById("deneme").style.fontSize = "20pt";
    }
    </script>
</body>
</html>
```

---

## 4. `confirm_redirect.html`

Bu örnek, kullanıcıya bir onay kutusu (`confirm` dialog) göstererek, kullanıcının "Tamam" veya "İptal" seçimine göre farklı eylemler gerçekleştirmeyi ve belirli bir gecikmeyle (`setTimeout`) fonksiyon çalıştırmayı ele almaktadır. Kullanıcı onay verirse, belirlenen bir web adresine yönlendirme işlemi gerçekleştirilir.

```html
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>JavaScript Yönlendirme Örneği</title>
</head>
<body>
    <script>
    // moveon() fonksiyonu, kullanıcıya bir onay penceresi gösterir ve seçime göre yönlendirme yapar.
    function moveon() {
        var cevap = confirm("Site değiştirmeye hazır mısın?");
        if (cevap) {
            window.location = "http://google.com";
        }
    }
    // setTimeout() ile moveon fonksiyonu 6 saniye sonra çağrılır.
    setTimeout(moveon, 6000);
    </script>
</body>
</html>
```

---

## 5. `digital_clock_example.html`

Bu uygulama, JavaScript kullanılarak dinamik bir dijital saat oluşturulmasını ve sayfada güncel saatin gerçek zamanlı olarak gösterilmesini sağlamaktadır. `setTimeout` fonksiyonu sayesinde saat her saniye güncellenir. Kod, DOM yüklendikten sonra saat bilgisinin güvenli şekilde gösterilmesini garanti altına alır.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Java ile Dijital Saat</title>
    <style>
    #saat {
        font: bold 24pt sans;
        background: #ddf;
        padding: 10px;
        border: solid black 2px;
        border-radius: 10px;
    }
    </style>
</head>
<body>
    <h1>Dijital Saat</h1>
    <span id="saat"></span>

    <script>
    function displayTime() {
        var elt = document.getElementById("saat");
        var simdi = new Date();
        var timestr = simdi.toLocaleTimeString();
        elt.innerHTML = timestr;
        setTimeout(displayTime, 1000);
    }
    window.onload = displayTime;
    </script>
</body>
</html>
```

---

## 6. `factorial_table_dynamic.html`

Bu uygulama, kullanıcının girdiği bir sayıya kadar olan faktöriyelleri dinamik olarak hesaplar ve bir HTML tablosu içinde görüntüler. Ayrıca, negatif sayı girişi gibi geçersiz durumları kontrol eden bir doğrulama mekanizması da içermektedir. Döngülerin ve koşullu ifadelerin kullanımı, algoritmik düşüncenin temel örneklerinden biridir.

```html
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>JavaScript ile Faktöriyel Hesaplama</title>
</head>
<body>
    <h1>Faktöriyel Tablosu</h1>
    <form id="formid">
        Sayı:<input type="text" name="t" id="ad"><br><br><br>
        <input type="button" value="hesapla" onClick="factorial(this.form,t.value)"><br>
        Sonuç: <input type="text" name="p" id="r"> <br>
    </form>

    <script>
    function negKontrol(n){
        if(n < 0){
            alert("Girilen sayı negatif olamaz!");
            document.getElementById('formid').reset();
            return true;
        }
        return false;
    }
    function factorial(f, n){
        n = parseInt(n);
        if(negKontrol(n)){
            return;
        }
        var fak = 1;
        document.write("<table border=1px>");
        document.write("<tr><th>Sayı</th><th>Faktöriyel</th></tr>");
        for(var i = 1; i <= n; i++){
            fak = fak * i;
            document.write("<tr><td>" + i + "</td><td>" + fak + "</td></tr>");
        }
        document.write("</table>");
        document.write("<br>Bu tablo " + new Date() + " tarihinde oluşturuldu.");
    }
    </script>
</body>
</html>
```

---

## 7. `fahrenheit_to_celsius.html`

Bu uygulama, Fahrenheit cinsinden girilen bir sıcaklık değerini Santigrat dereceye dönüştürür. Kullanıcı arayüzü, harici bir CSS dosyası (`styles_16.css`) ile biçimlendirilmiştir. Dönüştürme işlemi, matematiksel formülün doğru uygulanmasıyla gerçekleştirilir.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="keywords" content="javascript, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles_16.css">
    <title>Fahrenheit'tan Santigrat'a Çevirici</title>
</head>
<body>
    <header>
        <h1>JavaScript16 Uygulaması</h1>
    </header>
    <article>
        <h2>Fahrenheit (&#176; F) &#8594 Celsius (&#176; C) Çevirici</h2>
        <form>
            <fieldset>
                <label for="fValue">&#176; F değerini giriniz</label>
                <input type="number" id="fValue" />
            </fieldset>
            <fieldset>
                <button type="button" id="button">&#176; C ye çevir</button>
            </fieldset>
            <fieldset>
                <p>Sıcaklık &#176; C</p>
                <p id="cValue">&nbsp;</p>
            </fieldset>
        </form>
    </article>

    <script>
    function convert() {
        var degF = document.getElementById("fValue").value;
        var degC = (degF - 32) * 5 / 9;
        document.getElementById("cValue").innerHTML = degC;
    }
    document.getElementById("button").addEventListener("click", convert, false);
    </script>
</body>
</html>
```

---

## 8. `final_grade_calculator.html`

Bu uygulama, vize notu, ödev notu ve ilgili oranları kullanarak bir öğrencinin finalde alması gereken notu hesaplar. Uygulama, ödevin var olup olmamasına göre ödevle ilgili giriş alanlarını dinamik olarak etkinleştirip devre dışı bırakma özelliği de sunar. Hesaplama algoritması, ağırlıklı ortalama ve minimum geçme notu prensiplerine dayalıdır.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Final Notu Hesaplama</title>
</head>
<body>
    <script type="text/javascript">
    function finalhes(formhesap, viz, odv, vizo, fino, varmi, odvo) {
        var final_score;
        if (varmi == "1") {
            final_score = (60 - (viz * (vizo / 100) + odv * (odvo / 100))) / (fino / 100);
        } else {
            odvo = 0;
            final_score = (60 - (viz * (vizo / 100))) / (fino / 100);
        }
        formhesap.s.value = final_score;
        if (final_score < 50) {
            formhesap.s.value = 50;
        }
    }
    </script>

    <form id="formhesap">
        <fieldset>
            <legend>Bilgiler</legend>
            Ödev var mı?
            <input type="radio" group='a' name='v' value="1"
            onclick="document.getElementById('odev').disabled = false; document.getElementById('odor').disabled = false">var
            <input type="radio" group='a' name='v' value="0"
            onclick='document.getElementById("odev").disabled =true;document.getElementById("odor").disabled =true;'>yok
            <br>
            Geçme notu kaç <input type="text" name='gecme'><br>
            Vize Notunuz: <input type="text" name="t"><br>
            Vize oranı : <input type="text" name="vizo"> <br>
            Final oranı : <input type="text" name="fino"><br>
            Ödev Notunuz:<input type="text" name="p" id='odev'><br>
            Ödev oranı : <input type="text" name="odvo" id='odor'>
            <br>
            <input type="button" name="g" value="Hesapla"
            onclick="finalhes(this.form,t.value,p.value,vizo.value,fino.value,v.value,odvo.value)"><br>
            Finalden en az: <input type="text" name="s">almalısınız<br>
        </fieldset>
    </form>
</body>
</html>
```

---

## 9. `javascript_css_style_fix_example.html`

Bu örnek, JavaScript ile bir HTML elemanının stilini dinamik olarak değiştirmeyi ve CSS seçicilerinin (`id` ve `class`) doğru kullanımını vurgular. Ayrıca, JavaScript kodunun HTML içeriğinden önce veya sonra yerleştirilmesinin etkileri de incelenmektedir.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Koddaki Hatayı Bulunuz</title>
    <style>
    #date {
        color: red;
    }
    </style>
</head>
<body>
    <div id="date"></div>
    <script>
    var dtElem = document.getElementById("date");
    var dt = new Date();
    dtElem.innerHTML = "<p>" + dt + "</p>";
    </script>
</body>
</html>
```

---

## 10. `javascript_dom_style_change.html`

Bu örnek, JavaScript'in Belge Nesne Modeli (DOM) aracılığıyla bir HTML elemanının stil özelliklerinin nasıl değiştirilebileceğini temel düzeyde göstermektedir. Bir düğmeye tıklanarak bir paragrafın yazı tipi boyutu büyütülür.

```html
<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>
<p id="demo">JavaScript can change the style of an HTML element.</p>
<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>

</body>
</html>
```

---

## 11. `javascript_object_example.html`

Bu uygulama, JavaScript'te nesnelerin nasıl tanımlandığını ve özelliklerine nasıl erişildiğini temel düzeyde göstermektedir. Bir `person` nesnesi oluşturulur ve özellikleri HTML sayfasına dinamik olarak yazdırılır.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>JavaScript Nesneleri</title>
</head>
<body>
    <p>JavaScript Nesneleri</p>
    <p id="demo"></p>

    <script>
    var person = {
        isim: "Ahmet",
        soyisim: "ÖRNEK",
        yas: 50,
        gozrengi: "Mavi"
    };
    document.getElementById("demo").innerHTML = person.isim + " " + person.yas + " yaşındadır.";
    </script>
</body>
</html>
```

---

## 12. `javascript_prompt_alert_example.html`

Bu JavaScript uygulaması, kullanıcıdan `prompt` kutusu aracılığıyla giriş almayı ve bu girişe göre `alert` kutusuyla farklı mesajlar göstermeyi temel düzeyde örneklendirmektedir. Bu, basit kullanıcı etkileşimlerini yönetmek için kullanılır.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Kullanıcı Adı Sorgulama</title>
</head>
<body>
    <div id="result"></div>
    <script type="text/javascript">
    var strName = prompt("İsminiz nedir?", "");
    if (strName == "Ahmet") {
        alert("İsminiz Ahmet! Hoşgeldiniz!");
    } else {
        alert("İsminiz Ahmet değil. Üzgünüm.");
    }
    </script>
</body>
</html>
```

---

## 13. `text_search_highlight.html`

Bu kapsamlı uygulama, bir metin alanında belirli bir kelimeyi arar ve bulunan tüm eşleşmeleri vurgular. Düzenli ifadeler (`RegExp`) kullanarak büyük/küçük harf duyarsız arama yapar ve eşleşmeleri dinamik olarak bir `<span>` etiketi ile biçimlendirir.

```html
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <title>Metin Arama ve Vurgulama</title>
    <style type="text/css">
    #arabutonu {
        background-color: #ff0;
        width: 200px;
        text-align: center;
        padding: 10px;
        border: 2px inset #ccc;
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
        <textarea id="metinkutusu" cols="150" rows="10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Bu örnek metin arama ve vurgulama işlevi için kullanılmıştır. Örneğin 'metin' veya 'örnek' kelimelerini arayabilirsiniz.
        </textarea>
        <p>Aranacak metin: <input id="arananmetin" type="text" /></p>
    </form>
    <p id="arabutonu">Arama Yap</p>
    <div id="arasonuc"></div>

    <script type="text/javascript">
    window.onload = function() {
        document.getElementById("arabutonu").onclick = doSearch;
    };
    function doSearch() {
        var arananmetin = document.getElementById("arananmetin").value;
        if (!arananmetin) {
            document.getElementById("arasonuc").innerHTML = "Lütfen aranacak bir metin girin.";
            return;
        }
        var re = new RegExp(arananmetin, "gi");
        var searchString = document.getElementById("metinkutusu").value;
        var matchArray;
        var resultString = "<pre>";
        var lastIndex = 0;
        while ((matchArray = re.exec(searchString)) != null) {
            resultString += searchString.substring(lastIndex, matchArray.index);
            resultString += "<span class='bulundu'>" + matchArray[0] + "</span>";
            lastIndex = re.lastIndex;
        }
        resultString += searchString.substring(lastIndex, searchString.length);
        resultString += "</pre>";
        document.getElementById("arasonuc").innerHTML = resultString;
    }
    </script>
</body>
</html>
```

---

## 14. `time_greeting.html`

Bu JavaScript kodu, günün saatine göre farklı bir selamlama mesajı (örneğin, "Günaydın", "İyi günler", "İyi Akşamlar") oluşturur ve sayfaya dinamik olarak yazar. Bu, koşullu ifadelerin temel kullanımını gösterir.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Saate Göre Selamlama</title>
</head>
<body>
    <script>
    var bugun = new Date();
    var saat = bugun.getHours();
    var mesaj;
    if (saat > 18) {
        mesaj = 'İyi Akşamlar!';
    } else if (saat > 12) {
        mesaj = 'İyi günler, tünaydın!';
    } else if (saat > 0) {
        mesaj = 'Günaydın!';
    } else {
        mesaj = 'Hoş Geldiniz!';
    }
    document.write('<h3>' + mesaj + '</h3>');
    </script>
</body>
</html>
```

---

## 15. `uygulama4.css`

Bu CSS dosyası, HTML belgesi `uygulama4_html_structure.html` için görsel stilleri ve düzeni tanımlar. Arka plan resmi, font ayarları, kutu modelleri ve eleman konumlandırması gibi birçok stil özelliğini içerir. Modern web tasarımında tipografi, kutu modeli ve responsive tasarım ilkeleri uygulanmıştır.

```css
@import url(http://fonts.googleapis.com/css?family=Open+Sans:800italic);

body {
    font-family: "Courier New", Courier, monospace;
    background: url("../images/manzara.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 0;
    padding: 0;
}
h1, h3, p {
    float: left;
    clear: left;
    width: 320px;
    background-color: #fff;
    color: #5a514c;
    text-align: center;
}
h1 {
    margin: 50px 0 0 50px;
    height: 175px;
    background-image: url("../images/sirket-logo.png");
    background-repeat: no-repeat;
    text-indent: -9999px;
    border-top: 1px solid #bcbdc0;
    border-left: 1px solid #bcbdc0;
    border-right: 1px solid #bcbdc0;
}
h3 {
    margin: 0 0 0 50px;
    padding: 25px 0 0 0;
    font-family: 'Open Sans', arial, sans-serif;
    font-size: 1.8em;
    font-style: italic;
    font-weight: 700;
    line-height: 1em;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    border-left: 1px solid #bcbdc0;
    border-right: 1px solid #bcbdc0;
}
p {
    margin: 0 0 0 50px;
    padding: 30px 0 25px 0;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #bcbdc0;
    border-left: 1px solid #bcbdc0;
    border-right: 1px solid #bcbdc0;
}
p + script + h3 {
    padding-bottom: 20px;
    border-bottom: 1px solid #bcbdc0;
}
html {
    height: 100%;
}
body {
    min-height: 100%;
}
```

---

## 16. `uygulama4_html_structure.html`

Bu HTML dosyası, web sayfasının temel yapısını oluşturur ve harici bir CSS dosyası (`css/uygulama4.css`) ile bir JavaScript dosyası (`js/uygulama4.js`) bağlar. Bu yapı, modern web geliştirmede ayrık dosya prensibinin ve katmanlı mimarinin bir örneğidir.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Namık Kemal Ünv.&amp; ÇMF.</title>
    <link rel="stylesheet" href="css/uygulama4.css" />
</head>
<body>
    <h1>N.K.Ü&amp; Çorlu Müh. Fak.</h1>
    <script src="js/uygulama4.js"></script>
    <p>İletişim için bizi arayın <br><em>282-250 23 00</em></p>
</body>
</html>
```
