# Web Teknolojileri (BMB112)

Bu depo, Tekirdağ Namık Kemal Üniversitesi Çorlu Mühendislik Fakültesi Bilgisayar Mühendisliği Bölümü lisans programında verilen **BMB112 Web Teknolojileri** dersinin ders notlarını ve uygulamalarını içermektedir. Ders; İnternet ve Web'in temel kavramlarından başlayarak HTML, CSS ve JavaScript konularını kapsar.

- **Ders sorumlusu:** Dr. Öğr. Üyesi Erkan Özhan
- **Dil:** Türkçe (teknik terimlerin İngilizce karşılıkları ilk geçtikleri yerde parantez içinde verilmiştir)
- **Lisans:** MIT (bkz. [LICENSE](LICENSE))

## Depo Yapısı

| Konum | İçerik |
|---|---|
| Kök dizin (`*.md`) | Konu anlatımları. Dosya adlarının başındaki sayılar, konunun ders notlarındaki yerini gösterir. |
| `html_semantic_elements_poster.html` | HTML5 anlamsal (semantic) etiketlerini özetleyen ders posteri; tarayıcıda açılarak incelenir. |
| `images/` | Konu anlatımlarında kullanılan şekiller. |
| `Uygulamalar/HTML/` | HTML uygulamaları (1–5). |
| `Uygulamalar/CSS/` | CSS uygulamaları (6, 7, 9, 10). 8. uygulama bu depoda yer almamaktadır. |
| `Uygulamalar/javascript/` | JavaScript konu dosyaları (01–09) ve ek uygulama örnekleri. Ayrıntılı içindekiler için klasördeki [README](Uygulamalar/javascript/README.md) dosyasına bakınız. |

`Uygulamalar/HTML/1-html-yapi.md` ve `Uygulamalar/HTML/2-meta-etiketleri.md` dosyaları biçimlendirilmiş birer HTML belgesidir. GitHub üzerinde stiller ve fareyle üzerine gelince açılan açıklamalar görüntülenmez; bu dosyaları bilgisayarınıza indirip uzantılarını `.html` olarak değiştirerek tarayıcıda açmanız önerilir.

## Önerilen Okuma Sırası

### 1. Giriş: İletişim Ağları ve Web

1. [İletişim Ağları ve Web'in Doğuşu](1-Iletisim_Aglari_ve_Webin_Dogusu.md)

### 2. HTML

2. [Uygulama 1 — HTML Belge Yapısı ve Temel Etiketler](Uygulamalar/HTML/1-html-yapi.md)
3. [HTML5 Anlamsal Yapı Posteri](html_semantic_elements_poster.html)
4. [`<meta>` Etiketi ve `lang` Niteliği](55-Meta.md)
5. [Uygulama 2 — Meta Etiketleri, Bağlantılar ve Listeler](Uygulamalar/HTML/2-meta-etiketleri.md)
6. [Bağlantılar: `<a>` Etiketi](65-Anchor.md)
7. [HTML Tabloları](67-74-Tables.md)
8. [Uygulama 3 — Tablo Yapısı](Uygulamalar/HTML/3-tablo-yapisi.md)
9. [Uygulama 4 — Formlar ve Video](Uygulamalar/HTML/4-formlar-ve-video.md)
10. [Uygulama 5 — Ses](Uygulamalar/HTML/5-ses-etiketi.md)

### 3. CSS

11. [Uygulama 6 — Seçiciler, Yazı Tipleri ve Renkler](Uygulamalar/CSS/6-seciciler-ve-yazi-tipleri.md)
12. [Arka Plan Görselleri: `background-image`](63-Background.md)
13. [Uygulama 7 — Kutu Modeli ve Konumlandırma](Uygulamalar/CSS/7-kutu-modeli-ve-konumlandirma.md)
14. [Kutu Modeli, `display` ve `position`](172-184_Box_Display_Position.md)
15. [Uygulama 9 — Duyarlı Tasarım](Uygulamalar/CSS/9-responsive-tasarim.md)
16. [Uygulama 10 — Metin, Kutu ve Sınır Stilleri](Uygulamalar/CSS/10-metin-kutu-ve-sinir-stilleri.html) (tarayıcıda açılır)

### 4. JavaScript

17. [JavaScript'e Giriş](185-205_JavaScript_Giris.md)
18. [JavaScript Ders Notları ve Uygulamalar (01–09)](Uygulamalar/javascript/README.md)
19. [Ek JavaScript Uygulama Örnekleri](Uygulamalar/javascript/JavaScript_Uygulamalar.md)

## Örnekleri Çalıştırma

Kod örneklerini çalıştırmak için herhangi bir kurulum gerekmez. Örneği bir metin düzenleyicide (ör. Visual Studio Code) `.html` uzantılı bir dosyaya kaydedin ve dosyayı tarayıcıda açın. JavaScript çıktılarını görmek için F12 tuşuyla Geliştirici Araçları'nı açıp **Console** sekmesine geçin.

## Terim Sözlüğü

Ders notlarında aşağıdaki karşılıklar tutarlı biçimde kullanılmıştır:

| İngilizce | Türkçe | Örnek |
|---|---|---|
| tag | etiket | `<p>` açılış etiketi, `</p>` kapanış etiketi |
| element | öğe | açılış etiketi, içerik ve kapanış etiketinin bütünü |
| attribute | nitelik | `href`, `lang`, `class` |
| property (CSS / JavaScript) | özellik | `color`, `font-size`, `textContent` |
| label | alan adı | `<label for="ad">Adınız:</label>` |
| selector | seçici | `.vurgu`, `#baslik` |

Dizilerin içindeki değerler için yerleşik kullanım olan "dizi elemanı" ifadesi korunmuştur.
