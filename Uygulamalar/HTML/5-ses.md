
# 5. Uygulama: HTML5 Ses

Web'in ilk yıllarında sesi bir sayfaya gömmek için Flash, RealPlayer ya da Windows Media Player gibi harici eklentilere (plug-in — tarayıcı eklentisi) başvurmak zorunluydu. HTML5 ile birlikte `<audio>` (ses) etiketi bu bağımlılığı ortadan kaldırdı; ses dosyaları artık ek bir yazılım gerektirmeden doğrudan tarayıcı içinde oynatılabilmektedir.

---

## 1. `<audio>`: Sayfaya Ses Gömme

Temel kullanım son derece yalındır:

```html
<audio src="muzik.mp3" controls></audio>
```

Bu satır tarayıcıya şunu söyler: "Şu dosyayı al, kullanıcının kontrol edebileceği bir oynatıcı göster."

### Temel Nitelikler

| Nitelik | Açıklama |
|---------|----------|
| `src` | Oynatılacak ses dosyasının yolu veya URL'si |
| `controls` | Oynat/durdur, ilerleme çubuğu ve ses denetimlerini gösterir |
| `autoplay` | Sayfa yüklendiğinde sesi otomatik başlatır |
| `loop` | Ses bittiğinde başa döner, sonsuza kadar çalar |
| `muted` | Ses sessiz modda başlar |

Modern tarayıcılar, ses açık olan `autoplay` isteklerini çoğunlukla engeller. Arka plan müziği gibi durumlarda `autoplay muted` birleşiminin kullanılması gerekir; kullanıcı daha sonra sesi kendisi açabilir.

---

## 2. `<source>` ile Format Uyumluluğu

Her tarayıcı aynı ses formatını desteklemeyebilir. Birden fazla `<source>` (kaynak) etiketi kullanıldığında tarayıcı, desteklediği ilk formatı seçer; hiçbiri desteklenmiyorsa `<audio>` etiketleri arasına yazılan geri dönüş metni görüntülenir.

```html
<audio controls>
  <source src="muzik.mp3"  type="audio/mpeg">
  <source src="muzik.ogg"  type="audio/ogg">
  Tarayıcınız ses oynatmayı desteklemiyor.
</audio>
```

Bunu bir çeviri bürosuna benzetebilirsiniz: müşteri Türkçe belgeyi anlayamazsa İngilizce versiyonu sunarsınız; o da anlamazsa Almancayı denersiniz. En uygun olanı kabul edilir, diğerleri göz ardı edilir.

### Yaygın Ses Formatları

| Format | MIME Türü | Notlar |
|--------|-----------|--------|
| MP3 | `audio/mpeg` | En yaygın format; tüm modern tarayıcılar destekler |
| OGG/Vorbis | `audio/ogg` | Açık kaynak; Firefox ve Chrome destekler |
| WebM | `audio/webm` | Google'ın geliştirdiği; modern tarayıcılar destekler |
| WAV | `audio/wav` | Sıkıştırmasız; yüksek kalite, büyük dosya boyutu |
| AAC | `audio/aac` | Apple cihazlarında yaygın |

MIME (Multipurpose Internet Mail Extensions — Çok Amaçlı İnternet Posta Uzantıları) türü, sunucunun tarayıcıya "bu dosyanın türü şudur" diye bildirdiği etiket gibidir. Olmadığında tarayıcı dosyayı yorumlamakta zorlanabilir.

---

## 3. Ses ve Video: Kardeş Etiketler

`<audio>`, önceki uygulamada gördüğümüz `<video>` etiketiyle aynı mantığı paylaşır. Fark yalnızca görüntü alanında ve birkaç özgün niteliktedir:

| Özellik | `<audio>` | `<video>` |
|---------|-----------|-----------|
| Görüntü alanı | Yok (yalnızca oynatıcı çubuğu) | Var (`width`, `height`) |
| `controls` | ✓ | ✓ |
| `autoplay` | ✓ | ✓ |
| `loop` | ✓ | ✓ |
| `muted` | ✓ | ✓ |
| `poster` (kapak görseli) | — | ✓ |
| `<source>` ile çoklu format | ✓ | ✓ |

---

## 4. Davranış Karşılaştırması

```html
<!-- 1. Yalnızca kontroller — kullanıcı oynatır -->
<audio src="muzik.mp3" controls></audio>

<!-- 2. Sessiz otomatik oynatma — arka plan müziği için -->
<audio src="muzik.mp3" autoplay muted></audio>

<!-- 3. Döngülü ve kontrollü — sürekli çalan, kullanıcı durdurabilir -->
<audio src="muzik.mp3" controls loop></audio>

<!-- 4. Çoklu format ile tarayıcı uyumluluğu -->
<audio controls>
  <source src="muzik.mp3" type="audio/mpeg">
  <source src="muzik.ogg" type="audio/ogg">
  Tarayıcınız desteklemiyor.
</audio>
```

---

## Uygulama Görevleri

### Görev 1 — Temel Ses Oynatıcı

`ses1.html` adlı bir dosya oluşturun:

- Sayfada anlamlı bir `<h1>` başlığı
- Bir `<audio>` etiketi; bir ses dosyasına bağlayın, `controls` ekleyin
- Aynı dosyayı `loop` niteliğiyle ikinci kez ekleyin; kullanıcı durdurana kadar döngüde çalsın
- Her iki oynatıcının altına ne yaptığını açıklayan birer `<p>` paragrafı

### Görev 2 — Çoklu Format ve Geri Dönüş

`ses2.html` adlı yeni bir dosya oluşturun:

- `<source>` kullanarak aynı sesi en az iki farklı formatta (MP3 + OGG) sunun
- `<audio>` içine uyarı metni (geri dönüş içeriği) ekleyin; eski tarayıcılarda bu metin görünsün
- `autoplay muted` kullanarak otomatik başlayan, sessiz bir arka plan müziği oynatıcısı ekleyin
- Sayfanın sonuna, `<video>` ile `<audio>` farkını açıklayan kısa bir karşılaştırma tablosu (`<table>`) koyun

---

## Hızlı Başvuru

| Eleman / Nitelik | Amaç |
|-----------------|------|
| `<audio>` | Ses dosyasını sayfaya gömer |
| `src` | Ses dosyasının yolu veya URL'si |
| `controls` | Oynatıcı arayüzünü gösterir |
| `autoplay` | Otomatik oynatma (tarayıcı engelleyebilir) |
| `loop` | Bitince başa dönerek tekrar çalar |
| `muted` | Sessiz modda başlatır |
| `<source>` | Alternatif format kaynağı tanımlar |
| `type` | MIME türünü belirtir (`audio/mpeg`, `audio/ogg`…) |
