# Web Teknolojileri (BMB112) — Ders Notları

Bu depo, Tekirdağ Namık Kemal Üniversitesi Çorlu Mühendislik Fakültesi Bilgisayar Mühendisliği Bölümü lisans programında verilen **BMB112 Web Teknolojileri** dersinin ders notlarını, şekillerini ve çalıştırılabilir kod örneklerini içerir. Notlar, derste kullanılan sunumun konu sırasını izler: İnternet ve Web'in temelleri, HTML, CSS, JavaScript ve duyarlı web tasarımı.

- **Ders sorumlusu:** Dr. Öğr. Üyesi Erkan Özhan
- **Dil:** Türkçe; teknik terimlerin İngilizce karşılıkları ilk geçtikleri yerde parantez içinde verilir.
- **Kaynak gösterme:** Her bölümün sonunda IEEE biçiminde bir kaynakça bulunur.
- **Lisans:** MIT (bkz. [LICENSE](LICENSE))

## İçindekiler

| Bölüm | Konu | Uygulamalar |
|---|---|---|
| [1](notlar/01-internet-ve-web.md) | **İnternet ve Web'in Temelleri** — iletişim ağlarının tarihi, paket anahtarlama, TCP/IP, IP adresleri, alan adı ve DNS, URL, HTTP/HTTPS, istemci–sunucu modeli, bir sayfanın adres çubuğundan ekrana yolculuğu | 1.1–1.5 |
| [2](notlar/02-html-temelleri.md) | **HTML5 Temelleri** — HTML'in tarihi, tarayıcılar, VS Code ile geliştirme ortamı, belge yapısı, metin ve liste öğeleri, görseller, bağlantılar, meta veri ve arama motorları, anlamsal yapı | 2.1–2.8 |
| [3](notlar/03-html-tablo-form-medya.md) | **Tablolar, Formlar ve Gömülü İçerik** — erişilebilir tablolar, `iframe`, form öğeleri ve giriş tipleri, GET/POST, doğrulama, video ve ses | 3.1–3.8 |
| [4](notlar/04-css-temelleri.md) | **CSS Temelleri** — kural sözdizimi, CSS'i uygulama yolları, kalıtım, basamaklama ve özgüllük, seçiciler | 4.1–4.5 |
| [5](notlar/05-css-metin-renk-arka-plan.md) | **Metin, Renk ve Arka Plan** — yazı tipleri ve birimler, metin özellikleri, renk sözdizimleri ve kontrast, CSS değişkenleri, arka planlar ve gradyanlar | 5.1–5.6 |
| [6](notlar/06-css-kutu-modeli-yerlesim.md) | **Kutu Modeli ve Sayfa Yerleşimi** — `margin`, `border`, `padding`, `box-sizing`, `overflow`, `display`, `position`, Flexbox ve Grid | 6.1–6.7 |
| [7](notlar/07-javascript-temelleri.md) | **JavaScript Temelleri** — dilin tarihi ve ECMAScript, istemci–sunucu mimarisi, betiklerin yüklenmesi, değişkenler, veri türleri, operatörler, kontrol yapıları, fonksiyonlar, diziler, nesneler ve JSON | 7.1–7.8 |
| [8](notlar/08-javascript-dom-olaylar.md) | **DOM ve Olaylar** — DOM ağacı, öğe seçme ve değiştirme, güvenli içerik yazma (XSS), `addEventListener` ve olay yayılımı, formlar, tarih ve zamanlayıcılar, tarayıcı nesneleri, `fetch` | 8.1–8.8 |
| [9](notlar/09-duyarli-tasarim.md) | **Duyarlı Web Tasarımı ve Geliştirici Araçları** — viewport, akışkan düzen, medya sorguları, duyarlı görseller, kapsayıcı sorguları, Chrome DevTools ve Device Toolbar | 9.1–9.6 |

Her bölüm aynı düzeni izler: öğrenme hedefleri, konu anlatımı, araya yerleştirilmiş kısa **🛠 Uygulamalar**, bölüm özeti, değerlendirme soruları ve kaynaklar.

## Depo Yapısı

```text
notlar/   Bölüm metinleri (01–09). Okumaya buradan başlanır.
images/   Bölümlerde kullanılan şekiller; her bölümün kendi klasörü vardır (ör. images/03-html-tablo-form-medya/).
codes/    Örneklerin ve uygulamaların çalışır çözümleri; bölüm klasörlerine ayrılmıştır.
            ornek-N-M-…      : bölüm metnindeki tam sayfa örnekler
            uygulama-N-M-…   : 🛠 Uygulama kutularının örnek çözümleri
.vscode/  Önerilen VS Code eklentileri (Live Server, Prettier).
```

Şekillerin bir kısmı SVG şemalar, bir kısmı `codes/` altındaki örneklerin gerçek ekran görüntüleridir. Akış diyagramları Markdown içindeki Mermaid bloklarıyla çizilmiştir; GitHub bunları otomatik olarak görüntüler.

## Çalışma Ortamı ve Uygulamaların Yapılışı

1. [Visual Studio Code](https://code.visualstudio.com/) kurulur. Depo klasörü VS Code'da **Dosya → Klasör Aç** ile açıldığında, önerilen **Live Server** ve **Prettier** eklentilerinin kurulması için bir bildirim gelir (bkz. [Bölüm 2](notlar/02-html-temelleri.md)).
2. Uygulamalar, deponun kökünde oluşturulacak `calismalar/` klasöründe yapılır (ör. `calismalar/bolum-03/`). Bu klasör `.gitignore` ile dışarıda bırakıldığından, depo güncellendiğinde öğrencinin kendi dosyalarıyla çakışmaz.
3. HTML dosyası sağ tıklanıp **Open with Live Server** seçilerek tarayıcıda açılır. `fetch`, `iframe` ve altyazı (WebVTT) kullanan örnekler `file://` ile değil, Live Server gibi bir yerel sunucuyla çalışır.
4. JavaScript çıktıları ve hataları için tarayıcıda **F12** ile Geliştirici Araçları açılır ve **Console** sekmesine geçilir.
5. Uygulamayı bitirdikten sonra sonuç, notta verilen beklenen ekran görüntüsüyle ve `codes/` altındaki örnek çözümle karşılaştırılır.

## Ders Sunumu ile Eşleme

Notlar derste gösterilen sunumun (WebveInternet v20-7-0) sırasını izler. Slaytlarda daha önceki depo dosyalarına (ör. `65-Anchor.md`, `67-74-tables.md`, `background.md`) verilen yönlendirmeler artık aşağıdaki bölümlere karşılık gelir:

| Slaytlar | Bölüm |
|---|---|
| 1–28 | [1. İnternet ve Web'in Temelleri](notlar/01-internet-ve-web.md) |
| 29–66, 75–76 | [2. HTML5 Temelleri](notlar/02-html-temelleri.md) (meta: 2.9, bağlantılar ve çapalar: 2.11) |
| 67–74, 77–99 | [3. Tablolar, Formlar ve Gömülü İçerik](notlar/03-html-tablo-form-medya.md) |
| 100–136 | [4. CSS Temelleri](notlar/04-css-temelleri.md) (yazı tipi slaytları 117–127: Bölüm 5) |
| 137–155 | [5. Metin, Renk ve Arka Plan](notlar/05-css-metin-renk-arka-plan.md) |
| 156–174 | [6. Kutu Modeli ve Sayfa Yerleşimi](notlar/06-css-kutu-modeli-yerlesim.md) |
| 175–189 | [7. JavaScript Temelleri](notlar/07-javascript-temelleri.md) |
| 190–191 | [8. DOM ve Olaylar](notlar/08-javascript-dom-olaylar.md) |
| 192–198 | [9. Duyarlı Web Tasarımı](notlar/09-duyarli-tasarim.md) |

## Temel Kaynaklar

Notlarda başvurulan başlıca kitaplar aşağıdadır; standartlar (WHATWG HTML/DOM, W3C CSS modülleri, ECMA-262, IETF RFC'leri, WCAG 2.2) ve diğer kaynaklar ilgili bölümün kaynakçasında verilmiştir.

1. J. Duckett, *HTML and CSS: Design and Build Websites*. Indianapolis, IN, USA: Wiley, 2011.
2. J. Duckett, *JavaScript and JQuery: Interactive Front-End Web Development*. Indianapolis, IN, USA: Wiley, 2014.
3. B. Lawson and R. Sharp, *Introducing HTML5*, 2nd ed. Berkeley, CA, USA: New Riders, 2012.
4. J. N. Robbins, *Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics*, 4th ed. Sebastopol, CA, USA: O'Reilly Media, 2012.
5. P. Carey, *New Perspectives on HTML5 and CSS3: Comprehensive*, 7th ed. Boston, MA, USA: Cengage Learning, 2017.
6. A. Harris, *HTML5 and CSS3 All-in-One For Dummies*, 3rd ed. Hoboken, NJ, USA: Wiley, 2014.
7. J. Sklar, *Principles of Web Design: The Web Warrior Series*, 6th ed. Boston, MA, USA: Cengage Learning, 2015.
8. S. Vodnik and D. Gosselin, *JavaScript: The Web Warrior Series*, 6th ed. Boston, MA, USA: Cengage Learning, 2015.
9. D. Flanagan, *JavaScript: The Definitive Guide*, 6th ed. Sebastopol, CA, USA: O'Reilly Media, 2011.
10. N. C. Zakas, *Professional JavaScript for Web Developers*, 3rd ed. Indianapolis, IN, USA: Wiley, 2012.
11. L. L. Svekis, M. van Putten, and R. Percival, *JavaScript from Beginner to Professional*. Birmingham, U.K.: Packt Publishing, 2021.
12. K. Chinnathambi, *JavaScript Absolute Beginner's Guide*. Indianapolis, IN, USA: Que (Pearson), 2017.

Kitapların bir kısmı 2011–2017 tarihlidir; temel kavramlar için kullanılmış, güncel durum standartlar ve MDN Web Docs ile denetlenmiştir.

## Terim Sözlüğü

Notlarda aşağıdaki karşılıklar tutarlı biçimde kullanılmıştır:

| İngilizce | Türkçe | Örnek |
|---|---|---|
| tag | etiket | `<p>` açılış etiketi, `</p>` kapanış etiketi |
| element | öğe | açılış etiketi, içerik ve kapanış etiketinin bütünü |
| attribute | nitelik | `href`, `lang`, `class` |
| property (CSS / JavaScript) | özellik | `color`, `font-size`, `textContent` |
| selector | seçici | `.vurgu`, `#baslik` |
| cascade / specificity | basamaklama / özgüllük | hangi CSS kuralının uygulanacağının belirlenmesi |
| event / event listener | olay / olay dinleyicisi | `click`, `addEventListener` |
| client / server | istemci / sunucu | tarayıcı / web sunucusu |
| viewport | görünüm alanı (viewport) | `<meta name="viewport">` |
