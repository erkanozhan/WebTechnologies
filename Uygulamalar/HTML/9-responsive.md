
# 9. Uygulama: Duyarlı Tasarım ve Görünüm Alanı (Responsive Web Design & Viewport)

Web'in ilk yıllarında sayfalar yalnızca masaüstü bilgisayar ekranları için tasarlanırdı. Akıllı telefon ve tabletin hayatımıza girmesiyle kullanıcılar aynı sayfayı parmak eni genişliğindeki bir ekrandan da açmaya başladı. "Masaüstü tasarımını küçültme" yöntemi çoğu zaman kullanılamaz, okunamaz sayfalar ortaya çıkardı.

**Duyarlı Tasarım** (Responsive Web Design — RWD), aynı HTML belgesinin farklı ekran boyutlarına, çözünürlüklerine ve yönelimlerine uyum sağlamasını amaçlar. "Bir sayfa, her cihaz" anlayışıdır.

---

## 1. Viewport Nedir?

Viewport (görünüm alanı), tarayıcının web sayfasını görüntülediği görünür alana verilen addır. Mobil cihazlarda bu alan, fiziksek ekran boyutundan farklı olabilir:

- **Fiziksel çözünürlük:** Ekranın gerçek piksel sayısı (ör. 1080 × 2400)
- **CSS piksel:** Tarayıcının düzen hesaplarında kullandığı mantıksal birim

Mobil tarayıcılar, sayfa için HTML'de aksi belirtilmezse varsayılan olarak geniş bir sanal viewport (genellikle 980px) oluşturur ve sayfayı bu alana sığdırmak için küçültür. Bu, masaüstü için tasarlanmış sayfaları mobilde küçük ama okunabilir göstermek için geliştirilmiş bir geçici çözümdür; ancak duyarlı tasarımı bozan bir davranıştır.

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
| `%` | Ebeveyn elemana göre | Genişlik, yükseklik |
| `em` | Geçerli elemanın font boyutuna göre | Padding, margin, font |
| `rem` | Kök elemanın (`html`) font boyutuna göre | Tutarlı boyutlandırma |
| `vw` | Viewport genişliğinin %'si | Tam genişlik elemanlar |
| `vh` | Viewport yüksekliğinin %'si | Tam yükseklik bölümler |
| `vmin` | Viewport'un kısa kenarının %'si | Kare elemanlar |
| `vmax` | Viewport'un uzun kenarının %'si | — |

```css
/* Ekranın tüm genişliğini kaplayan başlık alanı */
header {
  width:  100vw;
  height: 60vh;
}

/* Ebeveyninin yarısı kadar geniş kart */
.kart {
  width: 50%;
}
```

---

## 4. Medya Sorguları (Media Queries)

Medya sorguları, CSS kurallarının yalnızca belirli koşullar sağlandığında uygulanmasını sağlar. Duyarlı tasarımın temel aracıdır.

```css
/* Tüm ekranlar için */
body { font-size: 16px; }

/* Yalnızca 768px ve altı ekranlar için */
@media (max-width: 768px) {
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
| Telefon (küçük) | `≤ 480px` |
| Telefon (büyük) | `≤ 768px` |
| Tablet | `768px – 1024px` |
| Masaüstü | `1024px – 1440px` |
| Geniş Ekran | `> 1440px` |

### Kullanım Örneği: Sütun Düzeni

```css
/* Masaüstü: üç sütun */
.kart { width: 33.33%; display: inline-block; }

/* Tablet: iki sütun */
@media (max-width: 1024px) {
  .kart { width: 50%; }
}

/* Telefon: tek sütun */
@media (max-width: 600px) {
  .kart { width: 100%; }
}
```

---

## 5. Mobile-First Yaklaşımı

İki strateji vardır:

**Desktop-first:** Önce büyük ekran için tasarla, sonra `max-width` medya sorgularıyla küçük ekranlara uyarla.

**Mobile-first:** Önce küçük ekran için tasarla, sonra `min-width` medya sorgularıyla büyük ekranlara genişlet.

```css
/* Mobile-first: önce telefon stili */
.kart { width: 100%; }

/* Tablet için genişlet */
@media (min-width: 768px) {
  .kart { width: 50%; }
}

/* Masaüstü için genişlet */
@media (min-width: 1024px) {
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
- 1000px üstü (masaüstü): üç sütun düzeni (`width: 33.33%`)
- Geçişleri test etmek için tarayıcı penceresini yeniden boyutlandırın

### Görev 3 — Tam Duyarlı Sayfa

Önceki uygulamalarda yazdığınız HTML sayfalarından birini seçin ve duyarlı hale getirin:

- `<meta name="viewport">` ekleyin
- Sabit `px` genişlikleri `%` veya `vw` birimlere dönüştürün
- Görsellere `max-width: 100%; height: auto;` uygulayın
- En az iki kırılım noktası için medya sorgusu yazın

---

## Hızlı Başvuru

| Kavram / Özellik | Değer / Sözdizimi | Açıklama |
|-----------------|-------------------|----------|
| Viewport meta etiketi | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Mobil uyumu etkinleştirir |
| `%` | `width: 80%` | Ebeveynin yüzdesi |
| `vw` | `width: 100vw` | Viewport genişliğinin yüzdesi |
| `vh` | `height: 100vh` | Viewport yüksekliğinin yüzdesi |
| `rem` | `font-size: 1.2rem` | Kök font boyutuna göre oransal |
| `max-width` medya sorgusu | `@media (max-width: 768px) {}` | 768px ve altı ekranlar |
| `min-width` medya sorgusu | `@media (min-width: 1024px) {}` | 1024px ve üstü ekranlar |
| Duyarlı görsel | `max-width: 100%; height: auto;` | Taşmaz, oran korunur |
| Mobile-first | `min-width` sorguları tercih et | Önce küçük tasarla, sonra genişlet |
