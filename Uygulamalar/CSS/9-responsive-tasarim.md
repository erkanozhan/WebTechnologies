
# 9. Uygulama: Duyarlı Tasarım ve Görünüm Alanı (Responsive Web Design & Viewport)

Web'in ilk yıllarında sayfalar yalnızca masaüstü bilgisayar ekranları için tasarlanırdı. Akıllı telefon ve tabletin hayatımıza girmesiyle kullanıcılar aynı sayfayı parmak eni genişliğindeki bir ekrandan da açmaya başladı. "Masaüstü tasarımını küçültme" yöntemi çoğu zaman kullanılamaz, okunamaz sayfalar ortaya çıkardı.

**Duyarlı Tasarım** (Responsive Web Design — RWD), aynı HTML belgesinin farklı ekran boyutlarına, çözünürlüklerine ve yönelimlerine uyum sağlamasını amaçlar. "Bir sayfa, her cihaz" anlayışıdır.

---

## 1. Viewport Nedir?

Viewport (görünüm alanı), tarayıcının web sayfasını görüntülediği görünür alana verilen addır. Mobil cihazlarda bu alan, fiziksel ekran boyutundan farklı olabilir:

- **Fiziksel çözünürlük:** Ekranın gerçek piksel sayısı (ör. 1080 × 2400)
- **CSS piksel:** Tarayıcının düzen hesaplarında kullandığı mantıksal birim

Mobil tarayıcılar, sayfa için HTML'de aksi belirtilmezse varsayılan olarak geniş bir sanal viewport (genellikle 980px) oluşturur ve sayfayı bu alana sığdırmak için küçültür. Bu, masaüstü için tasarlanmış eski sayfaların mobilde en azından bütünüyle görünebilmesi için geliştirilmiş bir geçici çözümdür; ancak metin çok küçülür, okunması ve dokunulması zorlaşır. Duyarlı tasarım açısından istenmeyen bir davranıştır.

---

## 2. `<meta name="viewport">` Etiketi

Bu davranışı düzeltmek için `<head>` bölümüne aşağıdaki meta etiketi eklenir:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Nitelik Değerleri

| Değer | Açıklama |
|-------|----------|
| `width=device-width` | Viewport genişliğini cihazın ekran genişliğine eşitler |
| `initial-scale=1.0` | Sayfa ilk yüklendiğinde yakınlaştırmayı 1:1 oranında başlatır |
| `maximum-scale=1.0` | Kullanıcının yakınlaştırmasını engeller (erişilebilirlik açısından önerilmez) |
| `user-scalable=no` | Dokunmatik yakınlaştırmayı tamamen devre dışı bırakır (önerilmez) |

Bu etiketi eklemeden duyarlı tasarım uygulamak, trafiği düzenlemeden yol genişletmeye benzer: altyapı hazır olmadan kurallar işe yaramaz.

---

## 3. Göreceli Birimler

Sabit piksel değerleri (`px`) duyarlı tasarımı zorlaştırır; sayfa farklı ekran boyutlarında beklenmedik şekillerde davranır. Göreceli birimler bu sorunu çözer:

| Birim | Neye Göre | Kullanım Alanı |
|-------|-----------|----------------|
| `%` | Ebeveyn öğeye göre | Genişlik, yükseklik |
| `em` | `font-size` içinde ebeveynin, diğer özelliklerde öğenin kendi font boyutuna göre | Padding, margin, font |
| `rem` | Kök öğenin (`html`) font boyutuna göre | Tutarlı boyutlandırma |
| `vw` | Viewport genişliğinin %'si | Tam genişlikteki öğeler |
| `vh` | Viewport yüksekliğinin %'si | Tam yükseklik bölümler |
| `vmin` | Viewport'un kısa kenarının %'si | Kare öğeler |
| `vmax` | Viewport'un uzun kenarının %'si | — |

```css
/* Ekranın tüm genişliğini kaplayan başlık alanı */
header {
  width:  100%;   /* 100vw yerine */
  height: 60vh;
}

/* Ebeveyninin yarısı kadar geniş kart */
.kart {
  width: 50%;
}
```

> **Dikkat:** `100vw` değeri, masaüstü tarayıcılarda dikey kaydırma çubuğunun genişliğini de kapsar. Sayfa kaydırılabilir uzunluktaysa `width: 100vw` verilen öğe, kaydırma çubuğu kadar (yaklaşık 15–17 piksel) taşar ve yatay kaydırma çubuğu belirir. Tam genişlik için çoğu zaman `width: 100%` doğru tercihtir; `vw` birimi daha çok yazı boyutu gibi oransal ölçülerde kullanılır.

---

## 4. Medya Sorguları (Media Queries)

Medya sorguları, CSS kurallarının yalnızca belirli koşullar sağlandığında uygulanmasını sağlar. Duyarlı tasarımın temel aracıdır.

```css
/* Tüm ekranlar için */
body { font-size: 16px; }

/* Yalnızca 600px ve altı ekranlar için */
@media (max-width: 600px) {
  body { font-size: 14px; }
}

/* Yalnızca 1200px ve üstü ekranlar için */
@media (min-width: 1200px) {
  body { font-size: 18px; }
}
```

Medya sorgusu, kıyafetlerin boyutuna göre etiket değiştirmeye benzer: S beden için bir kural, XL için başka bir kural; orta boyutlarda varsayılan geçerlidir.

### Yaygın Kırılım Noktaları (Breakpoints)

| Cihaz | Genişlik |
|-------|---------|
| Telefon | `≤ 600px` |
| Tablet | `601px – 1024px` |
| Masaüstü | `1025px – 1440px` |
| Geniş Ekran | `> 1440px` |

Bu değerler bir standart değil, yaygın bir uzlaşmadır. Bu uygulamadaki tüm örneklerde 600px ve 1024px kırılım noktaları kullanılmıştır.

### Kullanım Örneği: Sütun Düzeni

```css
/* Kartları saran kapsayıcı: esnek kutu (flexbox) */
.kartlar {
  display: flex;
  flex-wrap: wrap;   /* sığmayan kart alt satıra geçer */
}

/* Masaüstü: üç sütun */
.kart { width: 33.33%; box-sizing: border-box; padding: 10px; }

/* Tablet: iki sütun */
@media (max-width: 1024px) {
  .kart { width: 50%; }
}

/* Telefon: tek sütun */
@media (max-width: 600px) {
  .kart { width: 100%; }
}
```

> **Neden `inline-block` değil?** Kartlar `display: inline-block` ile yan yana dizilirse, HTML kaynağındaki satır sonları ve boşluklar kartların arasına birkaç piksellik boşluk karakteri olarak yerleşir. Üç adet `33.33%` genişlikli kartın toplamı bu boşluklarla birlikte `100%` değerini aştığından üçüncü kart alt satıra düşer. `display: flex` kullanıldığında bu boşluklar hesaba katılmaz. `box-sizing: border-box` ise `padding` değerinin genişliğe eklenmesini önler. Aynı düzen CSS Grid ile `grid-template-columns: repeat(3, 1fr)` yazılarak da kurulabilir.

---

## 5. Mobile-First Yaklaşımı

İki strateji vardır:

**Desktop-first:** Önce büyük ekran için tasarla, sonra `max-width` medya sorgularıyla küçük ekranlara uyarla.

**Mobile-first:** Önce küçük ekran için tasarla, sonra `min-width` medya sorgularıyla büyük ekranlara genişlet.

```css
/* Mobile-first: önce telefon stili */
.kart { width: 100%; }

/* Tablet için genişlet */
@media (min-width: 601px) {
  .kart { width: 50%; }
}

/* Masaüstü için genişlet */
@media (min-width: 1025px) {
  .kart { width: 33.33%; }
}
```

Mobile-first yaklaşımı; içeriği önceliğe göre sıralamayı zorunlu kılması, daha hızlı mobil yükleme süreleri ve modern CSS'in doğal akışıyla uyumu nedeniyle tercih edilir.

---

## 6. Duyarlı Görseller

Sabit boyutlu görseller taşabilir ya da küçük ekranlarda çok yer kaplayabilir:

```css
img {
  max-width: 100%;
  height:    auto;
}
```

`max-width: 100%` görselin kapsayıcısından taşmasını engeller.  
`height: auto` oranların bozulmamasını sağlar.

---

## 7. Sayfa Nasıl Farklı Görünür?

Viewport meta etiketi **olmadan:**

```
┌──────────────────────────────┐
│  [Küçültülmüş masaüstü      │
│   görünümü — metin çok      │
│   küçük, dokunması zor]     │
└──────────────────────────────┘
```

Viewport meta etiketi **ile:**

```
┌──────────────────────────────┐
│                              │
│     Başlık                   │
│                              │
│  Okunabilir metin...         │
│                              │
│  [Tam genişlikte düzen]      │
└──────────────────────────────┘
```

---

## Uygulama Görevleri

### Görev 1 — Viewport Karşılaştırması

`responsive1.html` dosyası oluşturun:

- Viewport meta etiketini ekleyin
- Telefon, tablet ve masaüstü boyutlarında sayfa görünümünü gözlemlemek için tarayıcının "Geliştirici Araçları > Cihaz Modunu" kullanın
- Meta etiketi olmadan ve ile arasındaki farkı not edin

### Görev 2 — Medya Sorgusu ile Sütun Düzeni

`responsive2.html` ve `responsive2.css` dosyaları oluşturun:

- Varsayılan (telefon): tek sütun, tam genişlikte kartlar
- 600px üstü (tablet): iki sütun düzeni (`width: 50%`)
- 1024px üstü (masaüstü): üç sütun düzeni (`width: 33.33%`)
- Kartları `display: flex; flex-wrap: wrap;` verilmiş bir kapsayıcı içine yerleştirin
- Geçişleri test etmek için tarayıcı penceresini yeniden boyutlandırın

### Görev 3 — Tam Duyarlı Sayfa

Önceki uygulamalarda yazdığınız HTML sayfalarından birini seçin ve duyarlı hale getirin:

- `<meta name="viewport">` ekleyin
- Sabit `px` genişlikleri `%` veya `rem` birimlerine dönüştürün
- Görsellere `max-width: 100%; height: auto;` uygulayın
- En az iki kırılım noktası için medya sorgusu yazın

---

## Hızlı Başvuru

| Kavram / Özellik | Değer / Sözdizimi | Açıklama |
|-----------------|-------------------|----------|
| Viewport meta etiketi | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Mobil uyumu etkinleştirir |
| `%` | `width: 80%` | Ebeveynin yüzdesi |
| `vw` | `font-size: 4vw` | Viewport genişliğinin yüzdesi (kaydırma çubuğu dahil) |
| `vh` | `height: 100vh` | Viewport yüksekliğinin yüzdesi |
| `rem` | `font-size: 1.2rem` | Kök font boyutuna göre oransal |
| `max-width` medya sorgusu | `@media (max-width: 600px) {}` | 600px ve altı ekranlar |
| `min-width` medya sorgusu | `@media (min-width: 1024px) {}` | 1024px ve üstü ekranlar |
| Duyarlı görsel | `max-width: 100%; height: auto;` | Taşmaz, oran korunur |
| Mobile-first | `min-width` sorguları tercih et | Önce küçük tasarla, sonra genişlet |
