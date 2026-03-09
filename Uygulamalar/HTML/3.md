
# 3. Uygulama: HTML ile Tablo Yapısı Oluşturma

Gençler, web sayfalarında verileri düzenli bir şekilde sunmanın en temel yollarından biri tabloları kullanmaktır. Tablolar, sadece sayısal verileri değil, metinleri ve görselleri de satırlar ve sütunlar halinde hizalamak için güçlü bir araçtır. Şimdi bir HTML tablosunun nasıl oluşturulduğunu ve özelleştirildiğini inceleyeceğiz.

Aşağıdaki örnek, bir şirketin şube satış verilerini gösteren bir tabloyu içermektedir. Kodun her bir satırının üzerine imlecinizi getirerek o satırın ne işe yaradığına dair ipuçları görebilirsiniz. Altında ise daha detaylı açıklamaları bulacaksınız.

---

### Örnek Tablo Kodu

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Uygulama 3: Tablolar</title>
    <style>
        /* Bu stil bloğu, kodun çıktısını alırken veya ekranda görüntülerken 
           kodun arka planının siyah olmasını engeller, daha okunaklı bir 
           görünüm sağlar. */
        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            white-space: pre-wrap; /* Uzun kod satırlarının taşmasını engeller */
        }
        code {
            font-family: 'Courier New', Courier, monospace;
        }
    </style>
</head>
<body>

    <table border="1" cellpadding="10" cellspacing="5" style="width:400px;" title="Bu etiket, bir tablo oluşturmaya başlar.">
        <caption title="Bu etiket, tabloya bir başlık ekler.">
            Şube Satış Verileri
        </caption>
        
        <thead title="Tablonun başlık bölümünü gruplar. (Table Head)">
            <tr title="Tablo başlığı için bir satır oluşturur. (Table Row)">
                <th title="Bu bir başlık hücresidir ve 3 satırlık yer kaplar. (Table Header)">Şube Adı</th>
                <th title="Bu bir başlık hücresidir.">Ürün Adı</th>
                <th title="Bu bir başlık hücresidir.">Stok Miktarı</th>
                <th title="Bu bir başlık hücresidir.">Satış Miktarı</th>
            </tr>
        </thead>

        <tbody title="Tablonun gövde içeriğini gruplar. (Table Body)">
            <tr title="Tablonun ilk veri satırını oluşturur.">
                <td rowspan="3" title="Bu hücre 3 satırlık yer kaplar. İstanbul Şubesi verilerini birleştirir.">İstanbul Şubesi</td>
                <td title="Bu hücre 'Kalem' verisini içerir. (Table Data)">Kalem</td>
                <td title="Bu hücre '114' verisini içerir.">114</td>
                <td title="Bu hücre '50' verisini içerir.">50</td>
            </tr>
            <tr title="Tablonun ikinci veri satırını oluşturur.">
                <td title="Bu hücre 'Defter' verisini içerir.">Defter</td>
                <td title="Bu hücre '89' verisini içerir.">89</td>
                <td title="Bu hücre '19' verisini içerir.">19</td>
            </tr>
            <tr title="Tablonun üçüncü veri satırını oluşturur.">
                <td title="Bu hücre 'Silgi' verisini içerir.">Silgi</td>
                <td title="Bu hücre '210' verisini içerir.">210</td>
                <td title="Bu hücre '98' verisini içerir.">98</td>
            </tr>
        </tbody>

        <tfoot title="Tablonun alt bilgi bölümünü gruplar. (Table Foot)">
            <tr title="Alt bilgi için bir satır oluşturur.">
                <td colspan="3" title="Bu hücre, 4 sütundan 3'ünü birleştirerek kaplar.">Toplam Satış:</td>
                <td title="Bu hücre toplam satış miktarını gösterir.">167</td>
            </tr>
        </tfoot>
    </table>

</body>
</html>
```

### Kodun Açıklaması

Bir web sayfasının temel iskeletini kuran `<!DOCTYPE html>`, `<html>`, `<head>` ve `<body>` etiketlerini zaten tanıyoruz. Burada `lang="tr"` ifadesiyle sayfanın dilinin Türkçe olduğunu ve `<meta charset="UTF-8"`> ile de karakter kodlamasının evrensel bir standart olan UTF-8 olduğunu tarayıcıya bildiriyoruz. Bu, Türkçe karakterlerin doğru görüntülenmesi için önemlidir.

Asıl konumuz olan tabloya odaklanalım:

-   `<table border="1">`: Bu etiketle tarayıcıya bir tablo çizmeye başladığımızı söyleriz. `table` kelimesi Latincede "levha, plaka" anlamına gelen *tabula* kelimesinden gelir. `border="1"` ifadesi, tablonun kenarlıklarının 1 piksel kalınlığında olacağını belirtir.

-   `<caption>`: Tablonun ne hakkında olduğunu anlatan bir başlık eklemek için kullanılır. Bu başlık, tabloyla ilişkilendirilir ve genellikle tablonun üstünde veya altında ortalanmış olarak görünür.

-   `<thead>`, `<tbody>`, `<tfoot>`: Bu etiketler tablonun bölümlerini ayırır.
    -   `<thead>` (Table Head): Tablonun başlık kısmını içerir.
    -   `<tbody>` (Table Body): Tablonun ana veri içeriğini barındırır.
    -   `<tfoot>` (Table Foot): Tablonun alt bilgi veya özet satırlarını içerir.
    Bu etiketler, anlamsal olarak kodu daha okunabilir kılar ve tarayıcının tabloyu daha verimli işlemesine yardımcı olur.

-   `<tr>`: İngilizce **T**able **R**ow (Tablo Satırı) ifadesinin kısaltmasıdır. Adından da anlaşılacağı gibi tablo içinde yatay bir satır oluşturur. Her bir `<tr>` etiketi yeni bir satırın başlangıcıdır.

-   `<th>`: İngilizce **T**able **H**eader (Tablo Başlığı) kelimelerinden gelir. `<tr>` içinde kullanılır ve o sütunun başlık hücresini oluşturur. Tarayıcılar genellikle `<th>` içindeki metni kalın ve ortalanmış olarak gösterirler.

-   `<td>`: İngilizce **T**able **D**ata (Tablo Verisi) demektir. Tablonun standart veri hücrelerini oluşturur. Her bir `<td>` bir hücreye karşılık gelir.

#### Hücreleri Birleştirme: `rowspan` ve `colspan`

Bazen hücreleri dikey veya yatay olarak birleştirmek isteyebiliriz.

-   `rowspan="3"`: **Row Span** (Satır Kaplama) anlamına gelir. Bu özelliğin kullanıldığı hücre, bulunduğu yerden başlayarak aşağıya doğru belirtilen sayı kadar (örneğimizde 3) satırı kaplar. "İstanbul Şubesi" hücresinin üç farklı ürün satırına ait olduğunu bu şekilde belirttik.

-   `colspan="3"`: **Column Span** (Sütun Kaplama) anlamına gelir. Bu özellik ise hücrenin sağa doğru belirtilen sayı kadar (örneğimizde 3) sütunu kaplamasını sağlar. "Toplam Satış:" metninin üç sütunluk bir alana yayılmasını bu şekilde başardık.

#### Boşluk Ayarlamaları: `cellpadding` ve `cellspacing`

Bu iki özellik, tablonun içindeki boşlukları kontrol eder. Günümüzde bu tür görsel ayarlamalar genellikle CSS ile yapılsa da, temel HTML bilgisi olarak bilinmesi faydalıdır.

-   `cellpadding`: Hücre duvarı ile hücre içindeki içerik (metin, resim vb.) arasındaki boşluğu ayarlar. Değeri ne kadar büyük olursa içerik, hücre kenarlarından o kadar içeride durur.

-   `cellspacing`: Tablo hücrelerinin kendi aralarındaki mesafeyi, yani hücre duvarları arasındaki boşluğu belirtir. Değer büyüdükçe hücreler birbirinden o kadar ayrık görünür.

---

Bu uygulama ile birlikte, yapısal verileri web'de nasıl sunacağınız konusunda temel bir araca sahip oldunuz. Unutmayın, iyi yapılandırılmış bir HTML, hem kullanıcılar hem de arama motorları için sayfanızın daha anlaşılır olmasını sağlar.
