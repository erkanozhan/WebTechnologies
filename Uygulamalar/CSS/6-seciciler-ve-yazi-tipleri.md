
# 6. Uygulama: CSS Temelleri — Seçiciler, Yazı Tipleri ve Renkler

HTML bir sayfanın *ne* içerdiğini tanımlar; CSS (Cascading Style Sheets — Basamaklı Stil Sayfaları) ise bu içeriğin *nasıl görüneceğini* belirler. HTML iskelet, CSS ise o iskelete giydirilmiş kıyafettir. Bu ayrım, içerik ile görünümün birbirinden bağımsız yönetilmesini sağlar: bir stilin değişmesi sayfanın içeriğini bozmaz, içeriğin güncellenmesi tasarımı etkilemez.

CSS, Tim Berners-Lee'nin Web'i keşfetmesinin ardından Håkon Wium Lie tarafından 1994'te önerilmiş; W3C (World Wide Web Consortium — Dünya Çapında Web Konsorsiyumu) tarafından 1996'da standart olarak yayımlanmıştır.

---

## 1. CSS Sözdizimi: Kural, Seçici, Bildirim

Bir CSS kuralı üç parçadan oluşur:

```css
seçici {
  özellik: değer;
}
```

- **Seçici (selector):** Stilin uygulanacağı HTML elemanını belirtir.
- **Özellik (property):** Değiştirilecek görsel niteliğin adı (`color`, `font-size`, vb.).
- **Değer (value):** O niteliğe atanan yeni değer.

Birden fazla bildirim, `{` ve `}` arasına virgül yerine noktalı virgülle (`;`) ayrılarak yazılır:

```css
p {
  color: navy;
  font-size: 16px;
  font-weight: bold;
}
```

---

## 2. CSS'i Sayfaya Dahil Etme: Üç Yöntem

### 2.1 Satır İçi (Inline)

CSS doğrudan HTML etiketinin `style` niteliğine yazılır:

```html
<p style="color: red; font-size: 14px;">Bu paragraf kırmızıdır.</p>
```

Yalnızca tek bir eleman için geçerlidir. Bakımı zorlaştırır; küçük denemeler dışında tercih edilmemelidir.

### 2.2 Dahili (Internal / `<style>`)

CSS, HTML dosyasının `<head>` bölümündeki `<style>` etiketi içine yazılır:

```html
<head>
  <style>
    body { background-color: #f0f0f0; }
    h1   { color: darkblue; }
  </style>
</head>
```

Yalnızca o sayfayı etkiler. Sayfa sayısı arttıkça her dosyayı ayrı ayrı güncellemek gerekir.

### 2.3 Harici (External — `<link>`)

CSS ayrı bir `.css` dosyasına yazılır ve `<link>` etiketiyle sayfaya bağlanır:

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

```css
/* style.css */
body { font-family: Arial, sans-serif; }
h1   { color: steelblue; }
```

En güçlü yöntemdir: tek bir `.css` dosyası yüzlerce HTML sayfasını etkiler; değişiklik tek yerden yapılır.

> **Büyük Resim:** Üç yöntemin önceliği (aynı özellik için) şu sırayla azalır: satır içi → dahili → harici. Bu "basamak" düzeni, CSS'in adındaki *Cascading* (basamaklama) sözcüğünden gelir.

---

## 3. Seçiciler (Selectors)

Seçici, stilin hangi elemanlara uygulanacağını belirler.

### 3.1 Eleman Seçici

Tüm `<p>`, `<h1>` vb. etiketleri eşler:

```css
p  { color: gray; }
h2 { text-align: center; }
```

### 3.2 Sınıf Seçici (`.sınıfAdı`)

HTML'de `class` niteliğiyle işaretlenmiş elemanlara uygulanır. Birden fazla eleman aynı sınıfı paylaşabilir:

```html
<p class="vurgu">Bu metin vurguludur.</p>
<span class="vurgu">Bu da.</span>
```

```css
.vurgu { color: crimson; font-weight: bold; }
```

### 3.3 Kimlik Seçici (`#kimlikAdı`)

Sayfada yalnızca bir eleman için geçerlidir; `id` niteliğiyle eşleşir:

```html
<div id="baslik">Site Başlığı</div>
```

```css
#baslik { background-color: darkblue; color: white; padding: 10px; }
```

> **Kural:** `id` bir sayfada tekil olmalıdır — iki elemana aynı `id` verilmez. `class` ise çoğul kullanım içindir.

### Seçici Önceliği (Özgüllük)

Aynı özellik farklı seçicilerle çakıştığında kazanan şu sıraya göre belirlenir:

| Seçici Türü | Öncelik |
|-------------|---------|
| Satır içi `style` niteliği | En yüksek |
| `#id` seçici | Yüksek |
| `.class` seçici | Orta |
| Eleman seçici (`p`, `h1`…) | Düşük |

`!important` bildirimi her kurala "mutlak öncelik" verir; ancak aşırı kullanımı stil hiyerarşisini karmaşıklaştırır.

```css
p { color: blue !important; }
```

---

## 4. Miras (Inheritance) ve Basamaklama (Cascade)

CSS'te bazı özellikler (özellikle `color`, `font-family`, `font-size`) ebeveyn elemandan çocuğa *miras* kalır; diğerleri (`border`, `margin`, `padding`) kalır maz.

```html
<body style="color: navy;">
  <p>Bu paragraf da lacivert görünür.</p>  <!-- Miras alındı -->
</body>
```

Miras, tüm etiketlere ayrı ayrı `color` yazmayı gereksiz kılar. Sayfanın temel yazı rengi ya da fontu `body` üzerinde bir kez tanımlanır; alt elemanlar otomatik olarak devralır.

---

## 5. Yazı Tipi Özellikleri (Font)

### `font-family` — Yazı Tipi Ailesi

Kullanılacak yazı tipini belirtir. Virgülle ayrılmış bir liste yazılır; tarayıcı ilk bulunanı kullanır:

```css
p { font-family: "Trebuchet MS", Verdana, Arial, sans-serif; }
```

Son eleman (`sans-serif`) genel bir aile adıdır — hiçbir özel font bulunmazsa tarayıcının varsayılan sans-serif fontunu kullanır. Bu yedekleme zinciri, yazı tipinin kullanıcının bilgisayarında yüklü olmayabileceği ihtimaline karşı alınan önlemdir.

### `font-size` — Yazı Boyutu

```css
h1 { font-size: 2em; }
p  { font-size: 14px; }
```

| Birim | Açıklama |
|-------|----------|
| `px` | Piksel — sabit boyut |
| `em` | Ebeveynin font boyutuna göre oransal |
| `rem` | Kök elemanın (`html`) font boyutuna göre oransal |
| `%` | Ebeveynin yüzdesi |

### `font-weight` — Kalınlık

```css
strong { font-weight: bold; }
p      { font-weight: normal; }
```

Sayısal değerler de kullanılabilir: `100` (ince) — `400` (normal) — `700` (kalın) — `900` (siyah).

### `font-style` — Eğiklik

```css
em { font-style: italic; }
p  { font-style: normal; }
```

---

## 6. Metin Özellikleri (Text)

### `color` — Yazı Rengi

```css
h1 { color: #2c3e50; }
p  { color: rgb(80, 80, 80); }
```

### `text-align` — Hizalama

```css
h1      { text-align: center; }
p       { text-align: justify; }
.sag    { text-align: right; }
```

| Değer | Açıklama |
|-------|----------|
| `left` | Sola hizalı (varsayılan) |
| `right` | Sağa hizalı |
| `center` | Ortalanmış |
| `justify` | İki yana yaslanmış |

### `text-indent` — İlk Satır Girintisi

```css
p { text-indent: 2em; }
```

### `text-decoration` — Altı/Üstü Çizgi

```css
a           { text-decoration: none; }         /* Alt çizgiyi kaldır */
.ustu-cizgi { text-decoration: overline; }
.ustu-alti  { text-decoration: line-through; } /* Üstü çizili */
```

### `text-transform` — Büyük/Küçük Harf Dönüşümü

```css
h2  { text-transform: uppercase; }   /* TÜMÜ BÜYÜK */
nav { text-transform: capitalize; }  /* Her Sözcük Büyük */
```

### `letter-spacing` — Karakter Aralığı

```css
h1 { letter-spacing: 0.1em; }
```

### `text-shadow` — Metin Gölgesi

```css
h1 { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
```

Değerler sırasıyla: yatay kayma, dikey kayma, bulanıklık yarıçapı, renk.

---

## 7. Renk (Color)

CSS'te renk dört farklı biçimde yazılabilir:

| Biçim | Örnek | Açıklama |
|-------|-------|----------|
| İsim | `red`, `navy`, `coral` | W3C tanımlı ~140 renk adı |
| Hexadecimal | `#ff5733` veya `#f53` | Onaltılık `#RRGGBB` ya da kısaltma `#RGB` |
| RGB | `rgb(255, 87, 51)` | Kırmızı, Yeşil, Mavi — 0–255 arası |
| RGBA | `rgba(255, 87, 51, 0.5)` | RGB + Alfa (saydamlık 0.0–1.0) |

```css
body { background-color: #f9f9f9; }
h1   { color: rgba(0, 0, 128, 0.9); }
```

---

## Uygulama Görevleri

### Görev 1 — Harici Stil Sayfası

`style1.css` adlı bir CSS dosyası ve `sayfa1.html` adlı bir HTML dosyası oluşturun:

- `<link>` ile CSS dosyasını HTML'e bağlayın
- `body`: arka plan rengi `#f0ebe1`, yazı tipi ailesi `Georgia, serif`
- `h1`: ortalanmış, lacivert, büyük harf dönüşümü uygulanmış
- `p`: 16px, justify hizalaması, 1.5em satır aralığı
- `.vurgu` sınıfı: kırmızı, kalın
- `#altbilgi` kimliği: küçük (`12px`), gri, sağa hizalı

### Görev 2 — Seçici Deneyleri

`selectors.html` adlı yeni bir dosya oluşturun ve aynı CSS dosyasını kullanarak:

- Eleman seçici, sınıf seçici ve kimlik seçici kullanan en az 8 kural yazın
- Aynı `<p>` etiketine hem eleman hem sınıf kuralı uygulayın; hangi kuralın kazandığını gözlemleyin
- `color: blue !important;` ile önceliği zorla geçersiz kılın ve etkisini inceleyin

---

## Hızlı Başvuru

| Özellik | Örnek Değerler | Açıklama |
|---------|---------------|----------|
| `color` | `red`, `#ff0000`, `rgb(255,0,0)` | Yazı rengi |
| `background-color` | `#f0f0f0`, `transparent` | Arka plan rengi |
| `font-family` | `Arial, sans-serif` | Yazı tipi listesi |
| `font-size` | `16px`, `1.2em`, `120%` | Yazı boyutu |
| `font-weight` | `bold`, `normal`, `700` | Kalınlık |
| `font-style` | `italic`, `normal` | Eğiklik |
| `text-align` | `left`, `center`, `right`, `justify` | Yatay hizalama |
| `text-indent` | `2em` | İlk satır girintisi |
| `text-decoration` | `none`, `underline`, `line-through` | Çizgi süslemeleri |
| `text-transform` | `uppercase`, `capitalize`, `lowercase` | Büyük/küçük harf |
| `letter-spacing` | `0.05em` | Karakter arası boşluk |
| `text-shadow` | `2px 2px 4px gray` | Metin gölgesi |
