# `<meta>` Etiketi, `lang` Niteliği ve `name` Parametreleri

`<meta>` etiketi, HTML belgesinin **kendisi hakkında bilgi** taşır; sayfada görünmez, yalnızca tarayıcıya ve arama motorlarına veri sağlar. Tüm `<meta>` etiketleri `<head>` bloğu içine yazılır.

Latince *meta* sözcüğü "hakkında, ötesinde" anlamına gelir — meta veri (metadata) tam da budur: verinin verisi.

---

## `lang` — Dil Tanımı

`lang` niteliği (attribute), `<meta>` etiketi değil doğrudan `<html>` açılış etiketine yazılır. Belgenin hangi dilde yazıldığını tanımlar.

```html
<html lang="tr">
```

Sık kullanılan dil kodları:

| Kod | Dil |
|---|---|
| `tr` | Türkçe |
| `en` | İngilizce |
| `de` | Almanca |
| `fr` | Fransızca |
| `en-US` | Amerikan İngilizcesi |
| `zh-CN` | Basitleştirilmiş Çince |

Bu bilgi ekran okuyucular (screen reader) için kritiktir; hangi dilde okuyacağını bu etiketten öğrenir. Arama motorları da içeriği doğru dil indeksine yerleştirmek için `lang` değerini kullanır. W3C (World Wide Web Consortium — Dünya Çapında Web Konsorsiyumu) standardına göre her HTML belgesinde bulunması zorunludur.

---

## `charset` — Karakter Kodlaması

Teknik olarak bir `<meta>` parametresidir ve her zaman ilk sıraya yazılır:

```html
<meta charset="UTF-8">
```

UTF-8 (Unicode Transformation Format — Unicode Dönüşüm Biçimi, 8-bit), Türkçe karakterler dahil dünya üzerindeki neredeyse tüm alfabeleri tek bir kodlama standardıyla temsil eder. `charset` tanımlanmazsa tarayıcı kodlamayı tahmin etmeye çalışır; bu da özellikle Türkçe karakterlerde (ç, ş, ğ, ı, ö, ü) bozuk görüntüye yol açar.

---

## `description` — Sayfa Açıklaması

```html
<meta name="description" content="Veri yapıları, algoritmalar ve işletim sistemi kavramlarını kapsayan ders notu arşivi.">
```

Arama motoru sonuç sayfalarında (SERP — Search Engine Results Page) başlığın hemen altında görünen kısa tanıtım metnidir. Google genellikle 150–160 karakteri gösterir; fazlası kırpılır. İyi yazılmış bir `description`, tıklama oranını (CTR — Click-Through Rate) doğrudan etkiler.

---

## `keywords` — Anahtar Kelimeler

```html
<meta name="keywords" content="algoritma, veri yapısı, bağlı liste, ikili ağaç, sıralama, arama, karmaşıklık analizi">
```

Sayfanın konu başlıklarını virgülle ayrılmış biçimde listeler. Google bu etiketi sıralama algoritmasında (ranking algorithm) dikkate almamaktadır; ancak bazı küçük arama motorları ve içerik yönetim sistemleri (CMS — Content Management System) hâlâ okumaktadır.

---

## `author` — Yazar Bilgisi

```html
<meta name="author" content="Dr. Öğr. Üyesi Erkan Özhan, Bilgisayar Mühendisliği Bölümü, NKU">
```

Belgenin kim tarafından yazıldığını tanımlar. Kurumsal ve akademik sitelerde belge sahipliğini kayıt altına almak, sürüm takibinde (version tracking) yazar bilgisini korumak için kullanılır. Tarayıcıda görünmez; kaynak kodda ve bazı eklentilerde okunur.

---

## `viewport` — Görüntü Alanı Ayarı

Duyarlı (responsive) tasarımın temel taşıdır; mobil tarayıcılara sayfanın nasıl ölçekleneceğini söyler:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`width=device-width` → sayfa genişliğini cihaz ekran genişliğine eşitler. `initial-scale=1.0` → ilk yüklemede yakınlaştırma (zoom) faktörünü 1'e sabitler. Bu satır olmadan mobil tarayıcılar sayfayı masaüstü genişliğinde render edip küçülterek gösterir.

---

## `refresh` — Yenileme / Yönlendirme

```html
<meta http-equiv="refresh" content="5">
```

Sayfa belirtilen saniye sonra kendini yeniler. Yönlendirme (redirect) için `url` parametresi eklenir:

```html
<meta http-equiv="refresh" content="3; url=https://bm.nku.edu.tr">
```

Burada `http-equiv` niteliği, `name` yerine kullanılır çünkü bu etiket bir HTTP (HyperText Transfer Protocol — Köprü Metin Aktarım Protokolü) başlığı davranışı taklit eder. `equiv` sözcüğü Latince *aequivalens*'ten gelir, "eşdeğer" demektir.

> Erişilebilirlik (accessibility) açısından uyarı: `refresh` kullanıcıyı uyarmadan sayfayı değiştirir. Yönlendirme için sunucu taraflı HTTP 301 yönlendirmesi ya da JavaScript tercih edilmelidir.

---

## Tamamı Bir Arada — Bilgisayar Mühendisliği Ders Sayfası

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"     content="width=device-width, initial-scale=1.0">
    <meta name="description"  content="NKU Bilgisayar Mühendisliği — Veri Yapıları ve Algoritmalar ders notu arşivi.">
    <meta name="keywords"     content="veri yapısı, algoritma, bağlı liste, yığın, kuyruk, ağaç, graf, sıralama, arama">
    <meta name="author"       content="Dr. Öğr. Üyesi Erkan Özhan">
    <meta http-equiv="refresh" content="60">
    <title>BMB — Veri Yapıları ve Algoritmalar | NKU</title>
</head>
<body>
    ...
</body>
</html>
```

---

## Özet Tablosu

| Etiket / Nitelik | Nereye Yazılır | Görevi |
|---|---|---|
| `lang` | `<html>` etiketi | Belge dilini tanımlar |
| `charset` | `<meta>` | Karakter kodlamasını belirler |
| `description` | `<meta name=...>` | Arama motoru özeti |
| `keywords` | `<meta name=...>` | Konu etiketleri |
| `author` | `<meta name=...>` | Belge yazarı |
| `viewport` | `<meta name=...>` | Mobil ölçekleme davranışı |
| `refresh` | `<meta http-equiv=...>` | Otomatik yenileme / yönlendirme |