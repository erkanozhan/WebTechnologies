# Giriş / Genel Bakış

Bu doküman, HTML işaretleme dilindeki `<div>` (division) etiketi hakkında detaylı bilgi sunmak amacıyla hazırlanmıştır. Web sayfalarının yapısal organizasyonunda kritik bir role sahip olan `<div>` etiketi, içeriğin mantıksal olarak gruplandırılması, stilistik düzenlemelerin uygulanması ve JavaScript ile etkileşimlerin hedeflenmesi gibi amaçlarla yaygın olarak kullanılmaktadır.

---

## `<div>` Etiketi Tanımı

`<div>` etiketi, "division" kelimesinin bir kısaltması olup, HTML içerisinde **genel amaçlı bir blok seviye kapsayıcı** olarak tanımlanır. Temel işlevi, diğer HTML elementlerini gruplandırmak ve organize etmektir.

### Özellikleri:
- **Anlamsal Nötrlük:** `<div>` etiketi, içine aldığı içerik hakkında **herhangi bir anlamsal (semantic) bilgi taşımaz**.
- **Görüntü Tipi:** Varsayılan olarak `<div>`, **blok seviye (block-level)** bir elementtir.
- **Varsayılan Stil:** `<div>` etiketinin kendisi, varsayılan olarak herhangi bir görsel stile sahip değildir. Görsel düzenlemeler genellikle CSS ile yapılır.

---

## Kullanım Alanları

`<div>` etiketinin başlıca kullanım amaçları şunlardır:

1. **İçeriği Gruplandırma:** 
   - Birbiriyle ilişkili HTML elementlerini mantıksal olarak tek bir birim altında toplamak.
2. **CSS ile Stil Uygulama:** 
   - `class` veya `id` gibi nitelikler kullanılarak CSS ile özel görsel stiller atanır.
3. **JavaScript ile Etkileşim:** 
   - `id` veya `class` nitelikleri aracılığıyla JavaScript kodları ile belirli `<div>` elementlerine erişilir.
4. **Sayfa Düzeni Oluşturma:** 
   - CSS (Flexbox ve Grid gibi düzen modelleri) ile sayfanın ana bölümlerini oluşturmak için kullanılır.

---

## Temel Söz Dizimi ve Kullanım

`<div>` etiketi, bir açılış etiketi (`<div>`) ve bir kapanış etiketi (`</div>`) olmak üzere iki kısımdan oluşur. Gruplandırılmak istenen içerik bu iki etiket arasına yerleştirilir.

```html
<div>
  <!-- Bu alana gruplandırılmak istenen içerik yerleştirilir -->
  <p>Bu bir paragraftır.</p>
  <p>Bu da başka bir paragraftır.</p>
  <img src="resim.jpg" alt="Örnek Resim">
</div>
```

---

## Modern Web Geliştirme Pratikleri

### 1. **HTML5 Anlamsal Etiketlerini Önceliklendirme**
HTML5, sayfa yapısını tanımlamak için `header`, `nav`, `main`, `article`, `section`, `aside`, `footer` gibi anlamsal etiketler sunmaktadır. Eğer gruplandırdığınız içerik bu anlamsal kategorilerden birine uyuyorsa, `<div>` yerine ilgili anlamsal etiketi kullanmak şiddetle tavsiye edilir.

### 2. **Aşırı `<div>` Kullanımından Kaçınma ("Div Soup")**
Gereksiz yere veya aşırı derecede iç içe `<div>` kullanmak, kodun karmaşıklaşmasına ve anlaşılmasının zorlaşmasına yol açabilir.

### 3. **Anlamlı `class` ve `id` Adlandırması**
`<div>` etiketlerine verilen `class` ve `id` değerlerinin açıklayıcı ve anlamlı olması, kodun daha kolay anlaşılmasına katkı sağlar.

Örnek:
```html
<!-- Daha az açıklayıcı -->
<div class="altbilgi"></div>

<!-- Daha açıklayıcı -->
<div class="site-footer"></div>
```

---

Bu düzenlemelerle dokümanınız daha okunabilir ve profesyonel bir görünüme kavuşacaktır.