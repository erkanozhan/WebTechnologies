# JavaScript Uygulama Örnekleri

---

## 1. `addeventlistener_example.html`

Bu uygulama, bir HTML düğmesine birden fazla olay dinleyicisi (event listener) eklenmesini sağlayan `addEventListener()` metodunun kullanımını, nesne tabanlı programlama paradigması çerçevesinde örneklendirmektedir. `addEventListener()` fonksiyonu, Belge Nesne Modeli (DOM) üzerinde yer alan bir elemana, farklı olay türleri (örneğin, fareyle üzerine gelme, tıklama, fareyle ayrılma gibi) için birden fazla bağımsız işlevin atanmasına olanak tanır. Bu yöntem, olay tabanlı programlamanın temel taşlarından biri olup, kullanıcı etkileşimlerinin yönetilmesinde esneklik ve modülerlik sağlar. Aynı elemana birden fazla işlevin bağlanabilmesi, kodun yeniden kullanılabilirliğini ve sürdürülebilirliğini artırır. Bu bağlamda, uygulama örneği, modern web geliştirme süreçlerinde olay yönetiminin nasıl gerçekleştirileceğine dair kapsamlı bir bakış açısı sunmaktadır.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>AddEventListener Örneği</title> <!-- Sayfa başlığını belirler. -->
</head>
<body>
    <p>
        Bu örnek, bir HTML düğmesine birden fazla olay dinleyicisi eklemek için <code>addEventListener()</code> yönteminin nasıl kullanılacağını gösterir.
        Her olay için farklı bir işlev atanabilir ve bu, modern JavaScript'te olay yönetiminin en iyi yoludur.
    </p>
    <button id="myBtn">Beni Dene</button> <!-- Olay dinleyicileri eklenecek buton. -->
    <p id="demo"></p> <!-- Olaylar tetiklendiğinde mesajların yazılacağı paragraf. -->

    <script>
    // 'myBtn' kimliğine sahip buton seçilerek bir değişkene atanır.
    const btn = document.getElementById("myBtn");
    // getElementById ile HTML'deki 'myBtn' id'li buton seçilir ve btn değişkenine atanır.

    // addEventListener ile üç farklı olaya üç farklı işlev atanır.
    btn.addEventListener("mouseover", handleMouseOver);   // Fare butonun üzerine gelince
    // Butonun üzerine fare gelince handleMouseOver fonksiyonu çalışır.

    btn.addEventListener("click", handleClick);           // Butona tıklanınca
    // Butona tıklanınca handleClick fonksiyonu çalışır.

    btn.addEventListener("mouseout", handleMouseOut);     // Fare butondan ayrılınca
    // Fare butondan ayrılınca handleMouseOut fonksiyonu çalışır.

    // Fare butonun üzerindeyken tetiklenen işlev.
    function handleMouseOver() {
        document.getElementById("demo").innerHTML += "Mouse imleci butonun üzerinde!<br>";
        // 'demo' id'li paragrafın içeriğine mesaj eklenir.
    }

    // Butona tıklandığında tetiklenen işlev.
    function handleClick() {
        document.getElementById("demo").innerHTML += "Butona tıklandı!<br>";
        // 'demo' id'li paragrafın içeriğine mesaj eklenir.
    }

    // Fare butondan ayrıldığında tetiklenen işlev.
    function handleMouseOut() {
        document.getElementById("demo").innerHTML += "Mouse imleci butondan ayrıldı!<br>";
        // 'demo' id'li paragrafın içeriğine mesaj eklenir.
    }
    </script>
</body>
</html>
```

---

## 2. `browser_info.html`

Bu uygulama, JavaScript'in `navigator` nesnesini kullanarak istemci (tarayıcı) hakkında çeşitli bilgileri elde etme ve bu bilgileri kullanıcıya sunma sürecini akademik bir yaklaşımla ele almaktadır. `navigator` nesnesi, tarayıcı sürümü, adı, platformu gibi kullanıcı ajanına özgü verilere erişim sağlar. Kodda, tarayıcı türü ve özellikleri koşullu ifadelerle analiz edilmekte ve kullanıcıya uygun mesajlar gösterilmektedir.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <meta name="keywords" content="javascript, html"> <!-- Anahtar kelimeler. -->
    <title>Tarayıcı Bilgileri</title> <!-- Sayfa başlığı. -->
</head>
<body>
    <div align="center">
        <h1>
            <script>
            // Sayfaya "Hello World Wide Web!" metnini yazar.
            document.write("Hello World Wide Web!");
            // document.write ile h1 başlığına metin eklenir.
            </script>
        </h1>
        <h3>
            <script>
            // Sayfaya "JavaScript" metnini yazar.
            document.write("JavaScript");
            // document.write ile h3 başlığına metin eklenir.
            </script>
        </h3>
        <script>
        // navigator.appName özelliği, tarayıcının adını döndürür.
        // Bu örnek, Internet Explorer olup olmadığını kontrol eder ve buna göre farklı mesajlar gösterir.
        if (navigator.appName == "Microsoft Internet Explorer") {
            document.write("Internet Explorer kullanıyorsunuz. Biraz daha inceleyelim.");
            // Eğer tarayıcı IE ise bu mesaj yazılır.
        } else {
            document.write("Internet Explorer kullanmıyorsunuz.<br>");
            // Diğer tarayıcılar için bu mesaj yazılır.
            document.write("Belki Firefox veya Safari kullanıyorsunuzdur.");
            // Alternatif tarayıcılar için ek mesaj.
        }
        </script>
    </div>

    <div id="demo">
        <h1>İşte topladığım bilgiler</h1>
        <!-- Tarayıcı bilgileri buraya eklenecek. -->
    </div>

    <script>
    // Tarayıcı bilgilerini biriktirmek için boş bir string değişkeni tanımlanır.
    var txt = "";
    // Bilgiler txt değişkeninde biriktirilecek.

    // navigator nesnesinin çeşitli özellikleri kullanılarak tarayıcı bilgileri elde edilir.
    txt += "<p>Tarayıcı Kod Adı: " + navigator.appCodeName + "</p>";
    // Tarayıcı kod adı eklenir.
    txt += "<p>Tarayıcı Adı: " + navigator.appName + "</p>";
    // Tarayıcı adı eklenir.
    txt += "<p>Tarayıcı Versiyonu: " + navigator.appVersion + "</p>";
    // Tarayıcı versiyonu eklenir.
    txt += "<p>Çerezler Etkin mi?: " + navigator.cookieEnabled + "</p>";
    // Çerezlerin etkin olup olmadığı eklenir.
    txt += "<p>Tarayıcı Dili: " + navigator.language + "</p>";
    // Tarayıcı dili eklenir.
    txt += "<p>Tarayıcı Çevrimiçi mi?: " + navigator.onLine + "</p>";
    // Tarayıcının çevrimiçi olup olmadığı eklenir.
    txt += "<p>Platform: " + navigator.platform + "</p>";
    // Platform bilgisi eklenir.
    txt += "<p>Kullanıcı-agent başlığı: " + navigator.userAgent + "</p>";
    // Kullanıcı-agent bilgisi eklenir.

    // Sayfa yüklendiğinde kullanıcıya "Merhaba" diyen bir uyarı penceresi gösterilir.
    alert("Merhaba");
    // Kullanıcıya uyarı kutusu gösterilir.

    // Toplanan tüm tarayıcı bilgileri 'demo' kimliğine sahip div'in içeriğine eklenir.
    document.getElementById("demo").innerHTML += txt;
    // demo id'li div'e bilgiler eklenir.
    </script>
</body>
</html>
```

---

## 3. `color_and_font_change.html`

Bu uygulama, HTML'deki bir paragraf (`<p>`) elemanının tıklanmasıyla stil özelliklerinin (renk ve yazı tipi boyutu) dinamik olarak değiştirilmesini göstermektedir. Bu örnek, DOM manipülasyonunun temel ilkelerini ve kullanıcı etkileşimi ile stil değişimini akademik bir dille ortaya koymaktadır.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>Metin Rengi ve Boyutu Değiştirme</title> <!-- Sayfa başlığı. -->
</head>
<body>
    <!-- Paragraf elemanına tıklandığında 'renkdegistir' adlı JavaScript fonksiyonu çağrılır. -->
    <p id="deneme" onclick="renkdegistir()">Beni tıkla ve metin rengimin değiştiğini gör.</p>
    <!-- Kullanıcı tıkladığında renkdegistir fonksiyonu çalışır. -->

    <!-- Fonksiyonun işlevini açıklayan statik metin. -->
    <p>Bu fonksiyon, yukarıdaki "Beni tıkla..." metnine tıklandığında, stil rengini kırmızı ve yazı tipi boyutunu 20pt olarak değiştirir.</p>

    <script>
    // 'renkdegistir' fonksiyonu, tıklama olayı tetiklendiğinde çalışır.
    function renkdegistir() {
        // 'deneme' kimliğine sahip HTML elemanına erişilir ve stil özellikleri değiştirilir.
        document.getElementById("deneme").style.color = "red";
        // Paragrafın rengi kırmızıya döner.
        document.getElementById("deneme").style.fontSize = "20pt";
        // Paragrafın yazı tipi boyutu 20pt olur.
    }
    </script>
</body>
</html>
```

---

## 4. `confirm_redirect.html`

Bu örnek, kullanıcıya bir onay kutusu (`confirm` dialog) göstererek, kullanıcının "Tamam" veya "İptal" seçimine göre farklı eylemler gerçekleştirmeyi ve belirli bir gecikmeyle (`setTimeout`) fonksiyon çalıştırmayı ele almaktadır. Kullanıcı onay verirse, belirlenen bir web adresine yönlendirme işlemi gerçekleştirilir.

```html
<!DOCTYPE HTML> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>JavaScript Yönlendirme Örneği</title> <!-- Sayfa başlığı. -->
</head>
<body>
    <script>
    // moveon() fonksiyonu, kullanıcıya bir onay penceresi gösterir ve seçime göre yönlendirme yapar.
    function moveon() {
        var cevap = confirm("Site değiştirmeye hazır mısın?");
        // Kullanıcıya onay kutusu gösterilir ve cevabı alınır.
        if (cevap) {
            window.location = "http://google.com";
            // Kullanıcı "Tamam" derse google.com'a yönlendirilir.
        }
    }
    // setTimeout() ile moveon fonksiyonu 6 saniye sonra çağrılır.
    setTimeout(moveon, 6000);
    // Sayfa yüklendikten 6 saniye sonra moveon fonksiyonu çalışır.
    </script>
</body>
</html>
```

---

## 5. `digital_clock_example.html`

Bu uygulama, JavaScript kullanılarak dinamik bir dijital saat oluşturulmasını ve sayfada güncel saatin gerçek zamanlı olarak gösterilmesini sağlamaktadır. `setTimeout` fonksiyonu sayesinde saat her saniye güncellenir. Kod, DOM yüklendikten sonra saat bilgisinin güvenli şekilde gösterilmesini garanti altına alır.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>Java ile Dijital Saat</title> <!-- Sayfa başlığı. -->
    <style>
    #saat {
        font: bold 24pt sans;
        background: #ddf;
        padding: 10px;
        border: solid black 2px;
        border-radius: 10px;
        /* Saat kutusunun stilini belirler. */
    }
    </style>
</head>
<body>
    <h1>Dijital Saat</h1>
    <span id="saat"></span> <!-- Saat bilgisinin gösterileceği alan. -->

    <script>
    function displayTime() {
        var elt = document.getElementById("saat");
        // 'saat' id'li elementi seçer.
        var simdi = new Date();
        // Şu anki tarih ve saat alınır.
        var timestr = simdi.toLocaleTimeString();
        // Saat bilgisi yerel biçimde alınır.
        elt.innerHTML = timestr;
        // Saat bilgisi ekrana yazılır.
        setTimeout(displayTime, 1000);
        // 1 saniye sonra displayTime fonksiyonu tekrar çağrılır.
    }
    window.onload = displayTime;
    // Sayfa yüklendiğinde displayTime fonksiyonu başlatılır.
    </script>
</body>
</html>
```

---

## 6. `factorial_table_dynamic.html`

Bu uygulama, kullanıcının girdiği bir sayıya kadar olan faktöriyelleri dinamik olarak hesaplar ve bir HTML tablosu içinde görüntüler. Ayrıca, negatif sayı girişi gibi geçersiz durumları kontrol eden bir doğrulama mekanizması da içermektedir. Döngülerin ve koşullu ifadelerin kullanımı, algoritmik düşüncenin temel örneklerinden biridir.

```html
<!DOCTYPE HTML> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>JavaScript ile Faktöriyel Hesaplama</title> <!-- Sayfa başlığı. -->
</head>
<body>
    <h1>Faktöriyel Tablosu</h1>
    <form id="formid">
        Sayı:<input type="text" name="t" id="ad"><br><br><br>
        <!-- Kullanıcıdan sayı girişi alınır. -->
        <input type="button" value="hesapla" onClick="factorial(this.form,t.value)"><br>
        <!-- Hesapla butonuna tıklandığında factorial fonksiyonu çağrılır. -->
        Sonuç: <input type="text" name="p" id="r"> <br>
        <!-- Sonuç burada gösterilir. -->
    </form>

    <script>
    function negKontrol(n){
        if(n < 0){
            alert("Girilen sayı negatif olamaz!");
            // Negatif sayı girilirse uyarı verilir.
            document.getElementById('formid').reset();
            // Form sıfırlanır.
            return true;
        }
        return false;
    }
    function factorial(f, n){
        n = parseInt(n);
        // Girilen değer tam sayıya çevrilir.
        if(negKontrol(n)){
            return;
            // Negatifse fonksiyondan çıkılır.
        }
        var fak = 1;
        // Faktöriyel değeri için değişken tanımlanır.
        document.write("<table border=1px>");
        // Sonuçlar tablo olarak yazılır.
        document.write("<tr><th>Sayı</th><th>Faktöriyel</th></tr>");
        // Tablo başlıkları yazılır.
        for(var i = 1; i <= n; i++){
            fak = fak * i;
            // Faktöriyel değeri hesaplanır.
            document.write("<tr><td>" + i + "</td><td>" + fak + "</td></tr>");
            // Her satırda sayı ve faktöriyel değeri yazılır.
        }
        document.write("</table>");
        // Tablo bitirilir.
        document.write("<br>Bu tablo " + new Date() + " tarihinde oluşturuldu.");
        // Tablo oluşturulma zamanı yazılır.
    }
    </script>
</body>
</html>
```

---

## 7. `fahrenheit_to_celsius.html`

Bu uygulama, Fahrenheit cinsinden girilen bir sıcaklık değerini Santigrat dereceye dönüştürür. Kullanıcı arayüzü, harici bir CSS dosyası (`styles_16.css`) ile biçimlendirilmiştir. Dönüştürme işlemi, matematiksel formülün doğru uygulanmasıyla gerçekleştirilir.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <meta name="keywords" content="javascript, html"> <!-- Anahtar kelimeler. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive tasarım için. -->
    <link rel="stylesheet" href="css/styles_16.css">
    <!-- Harici CSS dosyası eklenir. -->
    <title>Fahrenheit'tan Santigrat'a Çevirici</title> <!-- Sayfa başlığı. -->
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
                <!-- Kullanıcıdan Fahrenheit değeri alınır. -->
            </fieldset>
            <fieldset>
                <button type="button" id="button">&#176; C ye çevir</button>
                <!-- Dönüştürme işlemini başlatan buton. -->
            </fieldset>
            <fieldset>
                <p>Sıcaklık &#176; C</p>
                <p id="cValue">&nbsp;</p>
                <!-- Sonucun gösterileceği alan. -->
            </fieldset>
        </form>
    </article>

    <script>
    function convert() {
        var degF = document.getElementById("fValue").value;
        // Fahrenheit değeri alınır.
        var degC = (degF - 32) * 5 / 9;
        // Fahrenheit'tan Celsius'a dönüşüm formülü uygulanır.
        document.getElementById("cValue").innerHTML = degC;
        // Sonuç ekrana yazılır.
    }
    document.getElementById("button").addEventListener("click", convert, false);
    // Butona tıklanınca convert fonksiyonu çalışır.
    </script>
</body>
</html>
```

---

## 8. `final_grade_calculator.html`

Bu uygulama, vize notu, ödev notu ve ilgili oranları kullanarak bir öğrencinin finalde alması gereken notu hesaplar. Uygulama, ödevin var olup olmamasına göre ödevle ilgili giriş alanlarını dinamik olarak etkinleştirip devre dışı bırakma özelliği de sunar. Hesaplama algoritması, ağırlıklı ortalama ve minimum geçme notu prensiplerine dayalıdır.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>Final Notu Hesaplama</title> <!-- Sayfa başlığı. -->
</head>
<body>
    <script type="text/javascript">
    function finalhes(formhesap, viz, odv, vizo, fino, varmi, odvo) {
        var final_score;
        // Hesaplanan final notu için değişken.
        if (varmi == "1") {
            final_score = (60 - (viz * (vizo / 100) + odv * (odvo / 100))) / (fino / 100);
            // Ödev varsa, ödev ve vize notları ağırlıklı olarak hesaba katılır.
        } else {
            odvo = 0;
            final_score = (60 - (viz * (vizo / 100))) / (fino / 100);
            // Ödev yoksa sadece vize notu hesaba katılır.
        }
        formhesap.s.value = final_score;
        // Hesaplanan değer formda gösterilir.
        if (final_score < 50) {
            formhesap.s.value = 50;
            // Minimum final notu 50 olarak ayarlanır.
        }
    }
    </script>

    <form id="formhesap">
        <fieldset>
            <legend>Bilgiler</legend>
            Ödev var mı?
            <input type="radio" group='a' name='v' value="1"
            onclick="document.getElementById('odev').disabled = false; document.getElementById('odor').disabled = false">var
            <!-- Ödev varsa ilgili alanlar etkinleşir. -->
            <input type="radio" group='a' name='v' value="0"
            onclick='document.getElementById("odev").disabled =true;document.getElementById("odor").disabled =true;'>yok
            <!-- Ödev yoksa ilgili alanlar devre dışı kalır. -->
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
            <!-- Hesapla butonuna tıklanınca finalhes fonksiyonu çalışır. -->
            Finalden en az: <input type="text" name="s">almalısınız<br>
            <!-- Sonuç burada gösterilir. -->
        </fieldset>
    </form>
</body>
</html>
```

---

## 9. `javascript_css_style_fix_example.html`

Bu örnek, JavaScript ile bir HTML elemanının stilini dinamik olarak değiştirmeyi ve CSS seçicilerinin (`id` ve `class`) doğru kullanımını vurgular. Ayrıca, JavaScript kodunun HTML içeriğinden önce veya sonra yerleştirilmesinin etkileri de incelenmektedir.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>Koddaki Hatayı Bulunuz</title> <!-- Sayfa başlığı. -->
    <style>
    #date {
        color: red;
        /* 'date' id'li div'in yazı rengi kırmızı olur. */
    }
    </style>
</head>
<body>
    <div id="date"></div>
    <!-- Tarihin yazılacağı alan. -->
    <script>
    var dtElem = document.getElementById("date");
    // 'date' id'li div seçilir.
    var dt = new Date();
    // Şu anki tarih ve saat alınır.
    dtElem.innerHTML = "<p>" + dt + "</p>";
    // Tarih bilgisi div'e eklenir.
    </script>
</body>
</html>
```

---

## 10. `javascript_dom_style_change.html`

Bu örnek, JavaScript'in Belge Nesne Modeli (DOM) aracılığıyla bir HTML elemanının stil özelliklerinin nasıl değiştirilebileceğini temel düzeyde göstermektedir. Bir düğmeye tıklanarak bir paragrafın yazı tipi boyutu büyütülür.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<body>

<h2>What Can JavaScript Do?</h2>
<p id="demo">JavaScript can change the style of an HTML element.</p>
<!-- Stil değişikliği yapılacak paragraf. -->
<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>
<!-- Butona tıklanınca paragrafın yazı tipi boyutu büyütülür. -->

</body>
</html>
```

---

## 11. `javascript_object_example.html`

Bu uygulama, JavaScript'te nesnelerin nasıl tanımlandığını ve özelliklerine nasıl erişildiğini temel düzeyde göstermektedir. Bir `person` nesnesi oluşturulur ve özellikleri HTML sayfasına dinamik olarak yazdırılır.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>JavaScript Nesneleri</title> <!-- Sayfa başlığı. -->
</head>
<body>
    <p>JavaScript Nesneleri</p>
    <p id="demo"></p>
    <!-- Sonucun gösterileceği alan. -->

    <script>
    var person = {
        isim: "Ahmet",
        // Nesnenin isim özelliği.
        soyisim: "ÖRNEK",
        // Nesnenin soyisim özelliği.
        yas: 50,
        // Nesnenin yaş özelliği.
        gozrengi: "Mavi"
        // Nesnenin göz rengi özelliği.
    };
    document.getElementById("demo").innerHTML = person.isim + " " + person.yas + " yaşındadır.";
    // 'demo' id'li paragrafın içeriğine isim ve yaş bilgisi yazılır.
    </script>
</body>
</html>
```

---

## 12. `javascript_prompt_alert_example.html`

Bu JavaScript uygulaması, kullanıcıdan `prompt` kutusu aracılığıyla giriş almayı ve bu girişe göre `alert` kutusuyla farklı mesajlar göstermeyi temel düzeyde örneklendirmektedir. Bu, basit kullanıcı etkileşimlerini yönetmek için kullanılır.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>Kullanıcı Adı Sorgulama</title> <!-- Sayfa başlığı. -->
</head>
<body>
    <div id="result"></div>
    <script type="text/javascript">
    var strName = prompt("İsminiz nedir?", "");
    // Kullanıcıdan isim girmesi istenir.
    if (strName == "Ahmet") {
        alert("İsminiz Ahmet! Hoşgeldiniz!");
        // Kullanıcı Ahmet ise hoşgeldiniz mesajı gösterilir.
    } else {
        alert("İsminiz Ahmet değil. Üzgünüm.");
        // Diğer isimler için üzgünüm mesajı gösterilir.
    }
    </script>
</body>
</html>
```

---

## 13. `text_search_highlight.html`

Bu kapsamlı uygulama, bir metin alanında belirli bir kelimeyi arar ve bulunan tüm eşleşmeleri vurgular. Düzenli ifadeler (`RegExp`) kullanarak büyük/küçük harf duyarsız arama yapar ve eşleşmeleri dinamik olarak bir `<span>` etiketi ile biçimlendirir.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>Metin Arama ve Vurgulama</title> <!-- Sayfa başlığı. -->
    <style type="text/css">
    #arabutonu {
        background-color: #ff0;
        width: 200px;
        text-align: center;
        padding: 10px;
        border: 2px inset #ccc;
        cursor: pointer;
        /* Arama butonunun stilini belirler. */
    }
    .bulundu {
        background-color: yellow;
        font-weight: bold;
        /* Bulunan kelimelerin vurgulanmasını sağlar. */
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
        <!-- Kullanıcıdan aranacak kelime alınır. -->
    </form>
    <p id="arabutonu">Arama Yap</p>
    <!-- Arama işlemini başlatan buton. -->
    <div id="arasonuc"></div>
    <!-- Sonucun gösterileceği alan. -->

    <script type="text/javascript">
    window.onload = function() {
        document.getElementById("arabutonu").onclick = doSearch;
        // Sayfa yüklendiğinde arama butonuna tıklama olayı atanır.
    };
    function doSearch() {
        var arananmetin = document.getElementById("arananmetin").value;
        // Kullanıcının girdiği arama kelimesi alınır.
        if (!arananmetin) {
            document.getElementById("arasonuc").innerHTML = "Lütfen aranacak bir metin girin.";
            // Arama kutusu boşsa uyarı gösterilir.
            return;
        }
        var re = new RegExp(arananmetin, "gi");
        // Aranan kelime için büyük/küçük harf duyarsız RegExp oluşturulur.
        var searchString = document.getElementById("metinkutusu").value;
        // Metin kutusundaki metin alınır.
        var matchArray;
        var resultString = "<pre>";
        var lastIndex = 0;
        while ((matchArray = re.exec(searchString)) != null) {
            resultString += searchString.substring(lastIndex, matchArray.index);
            // Son eşleşmeden aranan kelimeye kadar olan kısmı ekler.
            resultString += "<span class='bulundu'>" + matchArray[0] + "</span>";
            // Bulunan kelimeyi vurgular.
            lastIndex = re.lastIndex;
            // Sonraki arama için index güncellenir.
        }
        resultString += searchString.substring(lastIndex, searchString.length);
        // Son kalan kısmı ekler.
        resultString += "</pre>";
        document.getElementById("arasonuc").innerHTML = resultString;
        // Sonuç ekrana yazılır.
    }
    </script>
</body>
</html>
```

---

## 14. `time_greeting.html`

Bu JavaScript kodu, günün saatine göre farklı bir selamlama mesajı (örneğin, "Günaydın", "İyi günler", "İyi Akşamlar") oluşturur ve sayfaya dinamik olarak yazar. Bu, koşullu ifadelerin temel kullanımını gösterir.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>Saate Göre Selamlama</title> <!-- Sayfa başlığı. -->
</head>
<body>
    <script>
    var bugun = new Date();
    // Şu anki tarih ve saat alınır.
    var saat = bugun.getHours();
    // Saat bilgisi alınır.
    var mesaj;
    if (saat > 18) {
        mesaj = 'İyi Akşamlar!';
        // Saat 18'den büyükse akşam mesajı.
    } else if (saat > 12) {
        mesaj = 'İyi günler, tünaydın!';
        // Saat 12-18 arası ise gün ortası mesajı.
    } else if (saat > 0) {
        mesaj = 'Günaydın!';
        // Saat 0-12 arası ise sabah mesajı.
    } else {
        mesaj = 'Hoş Geldiniz!';
        // Diğer durumlar için genel mesaj.
    }
    document.write('<h3>' + mesaj + '</h3>');
    // Mesaj ekrana yazılır.
    </script>
</body>
</html>
```

---

## 15. `uygulama4.css`

Bu CSS dosyası, HTML belgesi `uygulama4_html_structure.html` için görsel stilleri ve düzeni tanımlar. Arka plan resmi, font ayarları, kutu modelleri ve eleman konumlandırması gibi birçok stil özelliğini içerir. Modern web tasarımında tipografi, kutu modeli ve responsive tasarım ilkeleri uygulanmıştır.

```css
@import url(http://fonts.googleapis.com/css?family=Open+Sans:800italic);
/* Google Fonts'tan Open Sans fontunu içe aktarır. */

body {
    font-family: "Courier New", Courier, monospace;
    /* Gövde için yazı tipi ailesi belirlenir. */
    background: url("../images/manzara.jpg") no-repeat center center fixed;
    /* Arka plan resmi sabit ve ortalanmış şekilde ayarlanır. */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    /* Arka plan resminin tüm ekrana yayılması sağlanır. */
    margin: 0;
    padding: 0;
    /* Varsayılan boşluklar kaldırılır. */
}
h1, h3, p {
    float: left;
    clear: left;
    width: 320px;
    background-color: #fff;
    color: #5a514c;
    text-align: center;
    /* Başlık ve paragraflar için ortak stil ayarları. */
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
    /* h1 başlığı için özel stil ve logo resmi. */
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
    /* h3 başlığı için tipografi ve kenarlık ayarları. */
}
p {
    margin: 0 0 0 50px;
    padding: 30px 0 25px 0;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #bcbdc0;
    border-left: 1px solid #bcbdc0;
    border-right: 1px solid #bcbdc0;
    /* Paragraflar için kutu modeli ve hizalama. */
}
p + script + h3 {
    padding-bottom: 20px;
    border-bottom: 1px solid #bcbdc0;
    /* Belirli bir yapıda h3 başlığına ekstra stil. */
}
html {
    height: 100%;
    /* HTML kök elemanının yüksekliği tam yapılır. */
}
body {
    min-height: 100%;
    /* Gövde minimum tam yükseklikte olur. */
}
```

---

## 16. `uygulama4_html_structure.html`

Bu HTML dosyası, web sayfasının temel yapısını oluşturur ve harici bir CSS dosyası (`css/uygulama4.css`) ile bir JavaScript dosyası (`js/uygulama4.js`) bağlar. Bu yapı, modern web geliştirmede ayrık dosya prensibinin ve katmanlı mimarinin bir örneğidir.

```html
<!DOCTYPE html> <!-- HTML5 belgesi olduğunu belirtir. -->
<html>
<head>
    <meta charset="utf-8"> <!-- Türkçe karakter desteği sağlar. -->
    <title>Namık Kemal Ünv.&amp; ÇMF.</title> <!-- Sayfa başlığı. -->
    <link rel="stylesheet" href="css/uygulama4.css" />
    <!-- Harici CSS dosyası eklenir. -->
</head>
<body>
    <h1>N.K.Ü&amp; Çorlu Müh. Fak.</h1>
    <!-- Sayfa başlığı. -->
    <script src="js/uygulama4.js"></script>
    <!-- Harici JavaScript dosyası eklenir. -->
    <p>İletişim için bizi arayın <br><em>282-250 23 00</em></p>
    <!-- İletişim bilgisi. -->
</body>
</html>
```

