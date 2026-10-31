
# 4. Uygulama: HTML Formları, Seçim Bileşenleri ve Video

Web'in ilk dönemlerinde sayfalar yalnızca bilgi sunar, kullanıcı ise okurdu. Kullanıcının veri gönderebilmesi — bir kullanıcı adı yazması, bir tercih seçmesi, bir dosya yüklemesi — ancak form (İng. *form*, Lat. *forma*: biçim, kalıp) yapısıyla mümkün oldu. Bugün giriş ekranlarından sipariş formlarına, anketlerden yorum kutularına kadar her etkileşimli bileşenin arkasında bir HTML formu yatar.

Bu uygulamada hem temel form öğelerini hem de radyo düğmeleri, onay kutuları ve HTML5 ile standart hale gelen `<video>` öğesini inceleyeceğiz.

---

## 1. `<form>` Etiketi

`<form>` etiketi, kullanıcıdan veri toplamak amacıyla bir grup giriş öğesini sarar; bu verilerin nereye ve nasıl gönderileceğini tanımlar.

```html
<form action="/mailinglist.php" method="post">
  ...
</form>
```

Bir zarfın üzerindeki adres ve "iadeli taahhütlü" damgası gibi: `action` nereye gideceğini, `method` ise nasıl taşınacağını söyler.

### `action`

Formun gönderildiği anda verinin iletileceği URL'yi (Uniform Resource Locator — Tekdüzen Kaynak Bulucu) belirtir. Bu adres genellikle sunucu taraflı bir betik (script) dosyasına ya da bir API (Application Programming Interface — Uygulama Programlama Arayüzü) uç noktasına işaret eder.

### `method`

Verinin HTTP (HyperText Transfer Protocol — Hipermetin Aktarım Protokolü) üzerinden nasıl taşınacağını tanımlar:

| Method | Davranış | Ne Zaman Tercih Edilir |
|--------|----------|------------------------|
| `get`  | Veri URL'nin sonuna `?anahtar=değer` biçiminde eklenir; adres çubuğunda görünür | Arama kutuları, filtreleme formları |
| `post` | Veri HTTP isteğinin gövdesinde taşınır; adres çubuğunda görünmez ama şifrelenmez | Parola, kişisel bilgi, dosya yükleme (yalnızca HTTPS ile birlikte) |

Bir açık kartpostal ile zarf arasındaki fark bu ikisini iyi özetler: `get` herkesin okuyabileceği kartpostal, `post` ise kapalı ama mühürsüz bir zarftır. Zarfın içi ilk bakışta görünmez; ancak yoldaki herhangi biri zarfı açıp okuyabilir. Verinin yol boyunca okunamaz hâle gelmesini, yani gerçek anlamda mühürlenmesini sağlayan `post` değil, HTTPS (HTTP Secure — Güvenli HTTP) bağlantısıdır.

---

## 2. `<fieldset>` ve `<legend>`: Alanları Gruplama

Büyük bir formu bölümsüz, tek parça sunmak hem göze hem de mantığa ağır gelir. `<fieldset>` (alan kümesi) etiketi, ilgili alanları görsel bir çerçeve içine alır. `<legend>` ise bu çerçeveye bir başlık ekler.

```html
<fieldset>
  <legend>Mail listemize kaydolun</legend>
  ...
</fieldset>
```

Bu yapı yalnızca görsel değil, işlevsel bir fayda da sağlar: ekran okuyucular (screen readers) bu gruplama sayesinde formu daha tutarlı seslendirirler. Erişilebilirlik (accessibility — engellilere yönelik erişim) açısından bu ayrım önemlidir.

---

## 3. `<label>` ve Bağlama Mekanizması

`<label>` (alan adı) etiketi, form alanının yanında görünen tanımlayıcı metni taşır. Yalnızca görsel bir metin değildir; `for` niteliğiyle ilgili `<input>`a bağlanır.

```html
<label for="adsoyad">Adınız ve Soyadınız:</label>
<input type="text" name="adsoyad" id="adsoyad" maxlength="20">
```

`label`ın `for` değeri ile `input`ın `id` değeri eşleştiğinde ikisi birbirine kilitlenir. Bunun pratik etkisi şudur: kullanıcı alan adına tıkladığında odak (focus) doğrudan o alana geçer. Özellikle onay kutuları ve radyo düğmeleri gibi tıklama alanı dar olan öğelerde bu bağlantı büyük bir kolaylık sağlar.

> **`name` niteliği:** Giriş alanlarında `name` değeri, form gönderildiğinde sunucuya ulaşan veri paketindeki anahtar sözcüktür. `name="adsoyad"` yazılmışsa sunucu `adsoyad=Erkan+Özhan` gibi bir anahtar-değer çifti alır. `id` ise yalnızca sayfa içi bağlantı ve CSS/JavaScript için kullanılır; sunucuyla ilgisi yoktur.

---

## 4. Giriş Alanları: `<input>`

`<input>` etiketi, `type` (tür) niteliğine göre tamamen farklı görünüm ve davranışlar sergiler. Sözdizimsel olarak hep aynı etikettir; farkı yaratan `type` değeridir.

### `type="text"` — Tek Satırlı Metin

Serbest metin girişi için kullanılır. `maxlength` ile karakter sayısı sınırlanabilir.

```html
<input type="text" name="adsoyad" id="adsoyad" maxlength="20">
```

### `type="email"` — E-posta

Görünüş olarak `text`ten farksızdır; ancak tarayıcı, form gönderilmeden önce değerin `@` içerip içermediğini denetler. Mobil cihazlarda `@` tuşunu öne çıkaran özel bir klavye düzeni açar.

> **Not:** E-posta alanı için `type="text"` de çalışır; ancak `type="email"` tarayıcının yerleşik doğrulamasını ve mobil klavye düzenini devreye soktuğu için daha doğru bir tercihtir.

```html
<input type="email" name="eposta" id="eposta">
```

### `type="date"` — Tarih Seçici

Tarayıcının yerleşik takvim bileşenini sunar. Kullanıcı elle tarih yazmak yerine görsel bir seçici kullanır; bu hem hata oranını düşürür hem de farklı tarih formatı yazma sorununu ortadan kaldırır.

```html
<input type="date" name="bday">
```

### `type="color"` — Renk Seçici

Renk paleti açar. Seçilen renk `#RRGGBB` biçiminde — hexadecimal (onaltılık sayı sistemi) — sunucuya iletilir.

```html
<input type="color" name="favcolor">
```

### `type="password"` — Parola

Yazılan karakterleri maskeler; tarayıcı bunları genellikle nokta ya da yıldız olarak gösterir. Bunun yalnızca görsel bir önlem olduğunu unutmamak gerekir. Veriyi şifrelemek için ayrıca HTTPS (HTTP Secure — Güvenli HTTP) şart koşulur.

```html
<input type="password">
```

### `type="tel"` — Telefon Numarası

Tarayıcıya bu alanın telefon numarası içereceğini bildirir. Mobil cihazlarda sayısal klavye açılmasını tetikler.

```html
<input type="tel" maxlength="11">
```

---

## 5. `<textarea>`: Çok Satırlı Metin Girişi

Bir yorum, biyografi ya da mesaj gibi uzun metinler için tek satırlık `<input type="text">` yetmez. `<textarea>` (metin alanı) hem çok satırlıdır hem de kullanıcı tarafından boyutlandırılabilir.

```html
<textarea name="mesaj" rows="6" cols="50" placeholder="mesajınız"></textarea>
```

- **`rows`**: Görünür satır sayısını belirtir.
- **`cols`**: Görünür karakter genişliğini belirtir.
- **`placeholder`**: Alan boşken görünen ipucu metni; kullanıcı yazmaya başlayınca kaybolur.

`<input>` bir boş öğedir (void element): içerik barındıramaz ve kapanış etiketi almaz. XHTML alışkanlığıyla bazen `<input />` biçiminde yazıldığı görülür; HTML'de bu eğik çizgi isteğe bağlıdır ve bir anlam taşımaz. `<textarea>` ise aksine açılış ve kapanış etiketi ister; ikisi arasına yazılacak içerik, alan yüklendiğinde önceden dolu gelir.

---

## 6. Gönder ve Temizle Düğmeleri

```html
<input type="submit" value="Gönder">
<input type="reset"  value="Temizle">
```

- **`submit`**: Form verilerini `action`da belirtilen adrese gönderir.
- **`reset`**: Formdaki tüm alanları başlangıç değerlerine döndürür. Kullanıcının doldurduğu her şey silinir; tasarım açısından dikkatli konumlandırmak gerekir.

`value` niteliği düğme üzerindeki metni belirler.

---

## 7. `<iframe>`: Sayfa İçinde Sayfa

`<iframe>` (Inline Frame — Satır İçi Çerçeve) etiketi, bir web sayfası içinde başka bir sayfa ya da kaynak görüntülemenizi sağlar.

```html
<iframe src="index.html" width="400" height="250"></iframe>
```

YouTube video gömme ya da Google Maps entegrasyonu gibi yaygın kullanım biçimlerinin tamamında arka planda bir `<iframe>` çalışır. `<iframe>` formun bir parçası değildir; form verilerini doğrudan etkilemez.

---

## Form Yapısı

Aşağıdaki diyagram, bu uygulamadaki öğelerin birbirleriyle nasıl iç içe yerleştiğini göstermektedir:

![Form Öğeleri Hiyerarşisi](images/form-yapisi.svg)

---

## 8. Radyo Düğmeleri: Tekli Seçim

Radyo düğmeleri (radio buttons — `type="radio"`), birbirini dışlayan seçenekler sunmak için kullanılır; kullanıcı yalnızca bir tanesini seçebilir. Adını eski radyo alıcılarından alır: o cihazlarda bir istasyon tuşuna basınca önceki tuş otomatik olarak çıkardı.

```html
<fieldset>
  <legend>Yaş grubunuz</legend>
  <label><input type="radio" name="yas" value="25-alti" checked> 25 altı</label><br>
  <label><input type="radio" name="yas" value="25-34"> 25 - 34</label><br>
  <label><input type="radio" name="yas" value="35-44"> 35 - 44</label><br>
  <label><input type="radio" name="yas" value="45-ustu"> 45 ve üstü</label>
</fieldset>
```

Burada her düğme, metniyle birlikte bir `<label>` içine alınmıştır. Bu yazımda `for`/`id` eşleştirmesine gerek kalmaz; kullanıcı küçük daireyi tutturmak zorunda kalmadan metnin üzerine tıklayarak da seçim yapabilir. Grubun tamamı ise `<fieldset>` içine alınıp `<legend>` ile adlandırılmıştır.

> **Ekran okuyucu bu grubu nasıl seslendirir?** Bir ekran okuyucu (ör. NVDA) gruptaki ilk düğmeye geldiğinde önce grubun adını, ardından seçeneği okur: "Yaş grubunuz, gruplama; 25 altı, radyo düğmesi, seçili, 1 / 4". `<fieldset>` ve `<legend>` kullanılmasaydı kullanıcı yalnızca "25 - 34, radyo düğmesi" sesini duyar ve bu sayıların neyi ifade ettiğini anlayamazdı. `<label>` kullanılmasaydı ise düğmenin adı hiç okunmazdı.

Aynı gruptaki radyo düğmeleri **aynı `name` değerini** paylaşır. Bu, onları tek bir seçim grubuna bağlar. `value` niteliği, o seçenek işaretlendiğinde sunucuya gönderilecek değeri taşır. `checked` niteliği, sayfa ilk yüklendiğinde o düğmeyi önceden seçili gösterir.

Çoktan seçmeli bir sınav sorusu gibi düşünülebilir: tek bir şık işaretlenebilir, diğerleri otomatik olarak boş kalır.

---

## 9. Onay Kutuları: Çoklu Seçim

Onay kutuları (checkboxes — `type="checkbox"`), birbirinden bağımsız seçenekler için kullanılır; kullanıcı hiçbirini, birini ya da tamamını işaretleyebilir.

```html
<fieldset>
  <legend>Sevdiğiniz müzik türleri</legend>
  <label><input type="checkbox" name="tur" value="halk" checked> Halk</label><br>
  <label><input type="checkbox" name="tur" value="pop" checked> Pop</label><br>
  <label><input type="checkbox" name="tur" value="rock"> Rock</label><br>
  <label><input type="checkbox" name="tur" value="caz"> Caz</label>
</fieldset>
```

Radyo düğmelerinden farklı olarak, aynı `name` değerine sahip birden fazla onay kutusu seçilebilir. Sunucu bu durumda aynı alan adı altında birden fazla değer alır.

Bir alışveriş listesini düşünün: aynı anda birden fazla kalemi listeye ekleyebilirsiniz.

---

## Radyo ve Onay Kutusu Karşılaştırması

![Radyo ve Onay Kutusu Karşılaştırması](images/radio-checkbox-fark.svg)

---

## 10. `<video>`: Sayfaya Video Gömme

HTML5 öncesinde video oynatmak için Flash gibi harici eklentiler (plug-in — tarayıcı eklentisi) gerekliydi. HTML5 ile `<video>` etiketi bu bağımlılığı ortadan kaldırdı.

```html
<video src="video.m4v" width="640" height="480" poster="kapak.jpg" controls autoplay muted>
</video>
```

| Nitelik | Açıklama |
|---------|----------|
| `src` | Oynatılacak video dosyasının yolu veya URL'si |
| `width` / `height` | Videonun piksel cinsinden boyutları |
| `poster` | Video başlamadan önce gösterilecek kapak görseli |
| `controls` | Oynat/durdur, ilerleme çubuğu, ses ve tam ekran kontrollerini gösterir |
| `autoplay` | Sayfa yüklendiğinde videoyu otomatik başlatır (tarayıcılar genellikle yalnızca `muted` ile birlikte izin verir) |
| `muted` | Video sessiz başlar; kullanıcı `controls` ile sesi açabilir |

Aşağıdaki üç `<video>` etiketi davranış açısından şöyle ayrışır:

```html
<!-- 1. Hem kontroller var hem sessiz olarak otomatik başlar -->
<video src="..." controls autoplay muted></video>

<!-- 2. Yalnızca sessiz olarak otomatik başlar, kontrol yok (ör. dekoratif arka plan videosu) -->
<video src="..." autoplay muted loop></video>

<!-- 3. Yalnızca kontroller var, otomatik başlamaz -->
<video src="..." controls></video>
```

> **İki önemli not:**
>
> 1. Modern tarayıcılar, ses açık olan `autoplay` videolarını çoğunlukla engeller. Bunu aşmak için `muted` niteliği eklenmesi gerekir: `<video src="..." autoplay muted>`.
>
> 2. `<video>` etiketi her zaman `</video>` ile kapatılmalıdır. Kapanış etiketi unutulursa tarayıcı, sonraki içeriği video öğesinin içine dahil eder ve bu içerik sayfada hiç görünmez.

---

## Uygulama Görevleri

### Görev 1 — Temel Form

`form1.html` adlı bir dosya oluşturun. İçerisine şunları ekleyin:

- `action="/mailinglist.php"` ve `method="post"` nitelikleriyle bir `<form>`
- `<fieldset>` + `<legend>` ile gruplama
- Aşağıdaki alanlar, her biri için doğru `type` değeri ve uygun `<label>` (`for`/`id` eşleşmeli):
  - Ad-soyad (text, `maxlength="20"`)
  - E-posta (`type="email"`)
  - Doğum tarihi (`type="date"`)
  - Favori renk (`type="color"`)
  - Parola (`type="password"`)
  - Telefon (`type="tel"`, `maxlength="11"`)
- 6 satır × 50 sütun boyutunda, placeholder metinli bir `<textarea>`
- Gönder ve Temizle düğmeleri
- Sayfanın altına, kendi yazdığınız başka bir HTML dosyasını gösteren bir `<iframe>`

### Görev 2 — Genişletilmiş Form ve Video

`form2.html` adlı yeni bir dosya oluşturun. Görev 1'deki form öğelerine ek olarak:

- Yaş grubu için radyo düğmeleri (en az 4 seçenek; biri `checked`; her seçenek bir `<label>` içinde, grup `<fieldset>` + `<legend>` ile adlandırılmış)
- Müzik türü tercihi için onay kutuları (en az 4 seçenek; biri ya da ikisi `checked`; yine `<label>` ve `<fieldset>` ile)
- Sayfanın altına üç ayrı `<video>` etiketi:
  - Biri yalnızca `controls`
  - Biri yalnızca `autoplay muted`
  - Biri hem `controls` hem `autoplay muted`

---

## Hızlı Başvuru

| Öğe | Amaç | Kritik Nitelikler |
|--------|------|-------------------|
| `<form>` | Form kapsayıcısı | `action`, `method` |
| `<fieldset>` | Alan gruplama | — |
| `<legend>` | Grup başlığı | — |
| `<label>` | Alan adı | `for` |
| `<input type="text">` | Tek satırlı metin | `name`, `id`, `maxlength` |
| `<input type="email">` | E-posta girişi | `name`, `id` |
| `<input type="date">` | Tarih seçici | `name` |
| `<input type="color">` | Renk seçici | `name` |
| `<input type="password">` | Parola | — |
| `<input type="tel">` | Telefon | `maxlength` |
| `<textarea>` | Çok satırlı metin | `rows`, `cols`, `placeholder` |
| `<input type="submit">` | Gönder düğmesi | `value` |
| `<input type="reset">` | Temizle düğmesi | `value` |
| `<input type="radio">` | Tekli seçim | `name`, `value`, `checked` |
| `<input type="checkbox">` | Çoklu seçim | `name`, `value`, `checked` |
| `<video>` | Video oynatma | `src`, `controls`, `autoplay`, `poster`, `muted` |
| `<iframe>` | Gömülü çerçeve | `src`, `width`, `height` |
