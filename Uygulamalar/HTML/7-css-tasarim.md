
# 7. Uygulama: CSS Tasarım — Arka Plan, Kutu Modeli ve Konumlandırma

Önceki uygulamada yazı rengi, boyutu ve hizalaması gibi *metin* özelliklerini ele aldık. Bu uygulamada ise sayfadaki her elemanı çevreleyen görünmez çerçeveyi — **kutu modelini (box model)** — ve elemanların sayfa üzerinde nerede duracağını belirleyen konumlandırma kurallarını inceliyoruz.

---

## 1. Arka Plan Özellikleri (Background)

### `background-color`

```css
div { background-color: #3498db; }
```

### `background-image` — Arka Plan Görseli

```css
body {
  background-image: url("arkaplan.jpg");
}
```

### `background-repeat` — Tekrar Düzeni

| Değer | Açıklama |
|-------|----------|
| `repeat` | Hem yatay hem dikey tekrar eder (varsayılan) |
| `repeat-x` | Yalnızca yatay tekrar eder |
| `repeat-y` | Yalnızca dikey tekrar eder |
| `no-repeat` | Tekrar etmez; görsel yalnızca bir kez gösterilir |

```css
body {
  background-image: url("arkaplan.jpg");
  background-repeat: no-repeat;
}
```

### `background-position` — Konum

```css
body {
  background-image: url("arkaplan.jpg");
  background-repeat: no-repeat;
  background-position: center top;
}
```

Değerler: `left top`, `center center`, `right bottom` ya da piksel/yüzde değerleri (`50% 30px`).

### `background-attachment` — Kaydırma Davranışı

```css
body {
  background-image: url("arkaplan.jpg");
  background-attachment: fixed;   /* Kaydırılınca görsel sabit kalır */
}
```

| Değer | Açıklama |
|-------|----------|
| `scroll` | Görsel sayfayla birlikte kayar (varsayılan) |
| `fixed` | Görsel tarayıcıya sabitlenir; sayfa altında kayar |

---

## 2. `opacity` — Saydamlık

```css
img { opacity: 0.5; }   /* %50 saydam */
```

`opacity` 0.0 (tamamen şeffaf) ile 1.0 (tamamen opak) arasında bir değer alır. Hem elemana hem tüm alt içeriğine uygulanır. Yalnızca arka plan rengini saydam yapmak için `rgba()` tercih edilir.

---

## 3. Kenarlık (Border)

```css
div {
  border-width: 2px;
  border-style: solid;
  border-color: #2c3e50;
}
```

Kısaltma biçimi:

```css
div { border: 2px solid #2c3e50; }
```

### `border-style` Değerleri

| Değer | Görünüm |
|-------|---------|
| `solid` | Düz çizgi |
| `dashed` | Kesikli çizgi |
| `dotted` | Noktalı çizgi |
| `double` | Çift çizgi |
| `none` | Kenarlık yok |

### `border-radius` — Köşe Yuvarlatma

```css
button { border-radius: 8px; }
div    { border-radius: 50%; }  /* Daire */
```

---

## 4. Kutu Modeli (Box Model)

CSS'te her HTML elemanı, dıştan içe dört katmandan oluşan bir kutu içinde yaşar:

```
┌─────────────────────────────────┐
│            MARGIN               │
│  ┌───────────────────────────┐  │
│  │          BORDER           │  │
│  │  ┌─────────────────────┐  │  │
│  │  │       PADDING       │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

- **Content (İçerik):** Metin, görsel ya da iç içe elemanlar.
- **Padding (İç Boşluk):** İçerik ile kenarlık arasındaki mesafe; elemanın arka rengi buraya da yansır.
- **Border (Kenarlık):** Padding'i çevreleyen çerçeve.
- **Margin (Dış Boşluk):** Kenarlık ile komşu elemanlar arasındaki mesafe; şeffaftır.

```css
div {
  width:   300px;
  padding: 20px;
  border:  2px solid black;
  margin:  15px;
}
```

### `box-sizing` — Boyut Hesaplama

Varsayılan (`content-box`) davranışta `width` yalnızca içerik alanını ölçer; padding ve border buna eklenir. Bu, istenen toplam genişliği hesaplamayı zorlaştırır.

`border-box` değeriyle `width`, padding ve border dahil toplam genişliği belirtir:

```css
* { box-sizing: border-box; }  /* Genellikle tüm sayfa için uygulanır */
```

### Margin ve Padding Kısaltmaları

```css
/* Dört taraf aynı */
margin: 20px;

/* Dikey (üst-alt) | Yatay (sağ-sol) */
margin: 10px 20px;

/* Üst | Sağ | Alt | Sol (saat yönü) */
margin: 10px 20px 10px 20px;

/* Tek taraf */
margin-top: 10px;
margin-right: 20px;
```

---

## 5. `display` — Görüntülenme Türü

`display` özelliği, bir elemanın sayfa akışındaki davranışını belirler.

| Değer | Davranış | Örnek Etiketler |
|-------|----------|-----------------|
| `block` | Tüm satırı kaplar; üst ve altta yeni satır açar | `<div>`, `<p>`, `<h1>` |
| `inline` | Yalnızca içeriği kadar yer kaplar; satır içinde akar | `<span>`, `<a>`, `<strong>` |
| `inline-block` | Satır içinde akar ama `width`/`height` verilebilir | — |
| `none` | Eleman hem görünmez hem de yer kaplamaz | — |

```css
li     { display: inline; }        /* Liste öğelerini yatay dizer */
span   { display: block; }         /* Span'ı blok gibi davrandırır */
button { display: inline-block; }  /* Satır içi ama boyutlandırılabilir */
.gizli { display: none; }          /* Eleman yok sayılır */
```

### `overflow` — Taşma Kontrolü

İçerik, kutunun sınırlarını aşarsa ne olacağını belirler:

```css
div {
  width:    200px;
  height:   100px;
  overflow: hidden;   /* Taşan içerik kesilir */
}
```

| Değer | Açıklama |
|-------|----------|
| `visible` | Taşar; kutunun dışına çıkar (varsayılan) |
| `hidden` | Taşan kısım gizlenir |
| `scroll` | Her zaman kaydırma çubuğu gösterir |
| `auto` | Yalnızca içerik taşıyorsa kaydırma çubuğu gösterir |

---

## 6. `position` — Konumlandırma

`position` özelliği, bir elemanın sayfadaki yerinin nasıl hesaplanacağını belirler.

### `static` (Varsayılan)

Elemanlar normal akışta ardışık dizilir. `top`, `left` gibi koordinatlar etkisizdir.

```css
p { position: static; }  /* Varsayılan; yazmaya gerek yok */
```

### `relative` — Göreceli

Eleman normal konumuna göre kaydırılır; ancak boşluğu kaybolmaz:

```css
span {
  position: relative;
  top:  10px;
  left: 20px;
}
```

### `absolute` — Mutlak

Eleman normal akıştan çıkar; konumu, `position: relative/absolute/fixed` olan en yakın ata elemana göre hesaplanır:

```css
.balon {
  position: absolute;
  top:  50px;
  right: 10px;
}
```

### `fixed` — Sabit

Eleman, tarayıcı penceresine (viewport) göre sabitlenir; sayfa kaydırılsa bile yerinden oynamaz. Yapışkan üst menüler ve "yukarı çık" düğmeleri için kullanılır:

```css
nav {
  position: fixed;
  top:   0;
  left:  0;
  width: 100%;
}
```

---

## 7. `div` ve Sınıf Tabanlı Düzen

`<div>` (division — bölüm) etiketi görünürde hiçbir stil taşımayan bir kapsayıcıdır; anlamı ve görünümü CSS sınıflarıyla kazanır:

```html
<div class="kart">
  <h2 class="kart-baslik">Başlık</h2>
  <p class="kart-metin">İçerik buraya gelir.</p>
</div>
```

```css
.kart {
  width:         300px;
  padding:       20px;
  border:        1px solid #ddd;
  border-radius: 8px;
  background:    white;
  margin:        10px;
}

.kart-baslik { color: #2c3e50; font-size: 1.2em; }
.kart-metin  { color: #7f8c8d; font-size: 0.9em; }
```

Bu yaklaşım, sayfayı bağımsız, yeniden kullanılabilir bileşenlere ayırır.

---

## Uygulama Görevleri

### Görev 1 — Kutu Modeli Deneyi

`kutu.html` ve `kutu.css` dosyaları oluşturun:

- En az üç farklı `<div>` oluşturun; her birine farklı `width`, `padding`, `border`, `margin` değerleri verin
- `box-sizing: border-box` kuralını ekleyin; boyutların nasıl değiştiğini inceleyin
- Bir `<div>` içine taşacak kadar uzun metin yazın; `overflow: hidden`, `scroll` ve `auto` değerlerini sırayla deneyin

### Görev 2 — Konumlandırma Sahnesi

`konum.html` dosyası oluşturun:

- `position: fixed` ile her zaman görünen bir üst menü çubuğu yapın
- `position: relative` olan bir kapsayıcı içine `position: absolute` bir "rozet" veya "etiket" elemanı yerleştirin
- Sayfayı yeterince uzun yapın; kaydırırken menünün sabit kaldığını, rozetin kapsayıcısıyla hareket ettiğini gözlemleyin

### Görev 3 — Kart Bileşeni

`kart.html` dosyası oluşturun ve `kart.css` adlı ayrı bir stil sayfası bağlayın:

- En az üç adet `<div class="kart">` oluşturun
- Her kartta başlık, bir paragraf ve bir görsel bulunmalı
- Kartlara `border-radius`, `box-shadow` (`0 2px 8px rgba(0,0,0,0.15)`) ve hover efekti ekleyin

---

## Hızlı Başvuru

| Özellik | Örnek Değerler | Açıklama |
|---------|---------------|----------|
| `background-color` | `#fff`, `rgba(0,0,0,0.1)` | Arka plan rengi |
| `background-image` | `url("img.jpg")` | Arka plan görseli |
| `background-repeat` | `no-repeat`, `repeat-x` | Tekrar düzeni |
| `background-position` | `center`, `50% 30%` | Görselin konumu |
| `background-attachment` | `fixed`, `scroll` | Kaydırma davranışı |
| `opacity` | `0.5`, `1` | Saydamlık |
| `border` | `2px solid #333` | Kenarlık (kısaltma) |
| `border-radius` | `8px`, `50%` | Köşe yuvarlatma |
| `padding` | `10px 20px` | İç boşluk |
| `margin` | `auto`, `0 10px` | Dış boşluk |
| `width` / `height` | `300px`, `50%`, `auto` | Boyutlar |
| `box-sizing` | `content-box`, `border-box` | Boyut hesaplama yöntemi |
| `overflow` | `hidden`, `auto`, `scroll` | Taşma kontrolü |
| `display` | `block`, `inline`, `inline-block`, `none` | Görüntülenme türü |
| `position` | `static`, `relative`, `absolute`, `fixed` | Konumlandırma |
| `top` / `right` / `bottom` / `left` | `0`, `20px`, `50%` | Konum koordinatları |
