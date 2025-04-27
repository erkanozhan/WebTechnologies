---
title: "HTML `<div>` Etiketi Kapsamlı Eğitim Materyali"
author: "Oluşturan: [Adınız/Kuruluşunuz - İsteğe Bağlı]"
date: "`r format(Sys.Date(), '%d %B %Y')`"
output:
  html_document:
    toc: true # İçerik tablosu ekler
    toc_depth: 3 # İçerik tablosuna kadar dahil edilecek başlık seviyesi
    number_sections: true # Başlıkları numaralandırır
---

# Giriş / Genel Bakış

Bu doküman, HTML işaretleme dilindeki `<div>` (division) etiketi hakkında detaylı bilgi sunmak amacıyla hazırlanmıştır. Web sayfalarının yapısal organizasyonunda kritik bir role sahip olan `<div>` etiketi, içeriğin mantıksal olarak gruplandırılması, stilistik düzenlemelerin uygulanması ve JavaScript ile etkileşimlerin hedeflenmesi gibi amaçlarla yaygın olarak kullanılmaktadır. Bu materyal, `<div>` etiketinin tanımını, kullanım amaçlarını, söz dizimini, ilişkili niteliklerini ve modern web geliştirme pratiklerindeki yerini kapsamaktadır.

# `<div>` Etiketi Tanımı

`<div>` etiketi, "division" kelimesinin bir kısaltması olup, HTML içerisinde **genel amaçlı bir blok seviye kapsayıcı** olarak tanımlanır. Temel işlevi, diğer HTML elementlerini gruplandırmak ve organize etmektir.

*   **Anlamsal Nötrlük:** `<div>` etiketi, içine aldığı içerik hakkında **herhangi bir anlamsal (semantic) bilgi taşımaz**. Yani, bir paragrafın (`<p>`), bir başlığın (`<h1>`) veya bir listenin (`<ul>`) aksine, `<div>`'in kendisi içeriğin ne tür bir bilgi olduğunu belirtmez. Yalnızca bir gruplama aracıdır.
*   **Görüntü Tipi:** Varsayılan olarak `<div>`, **blok seviye (block-level)** bir elementtir. Bu, kendi satırında başlar ve tarayıcı penceresinin veya kapsayıcı elementinin kullanılabilir tam genişliğini kaplar.
*   **Varsayılan Stil:** `<div>` etiketinin kendisi, varsayılan olarak herhangi bir görsel stile (kenarlık, dolgu, renk vb.) sahip değildir. Görsel düzenlemeler genellikle CSS (Cascading Style Sheets) aracılığıyla yapılır.

# Kullanım Amacı ve Gerekçeleri

`<div>` etiketinin başlıca kullanım amaçları ve gerekçeleri aşağıda listelenmiştir:

1.  **İçeriği Gruplandırma:** Birbiriyle ilişkili HTML elementlerini (örneğin, bir ürün resmi, adı, açıklaması ve fiyatı) mantıksal olarak tek bir birim altında toplamak. Bu, kodun okunabilirliğini ve yönetilebilirliğini artırır.
2.  **CSS ile Stil Uygulama:** `<div>`'in en yaygın kullanım nedenidir. `class` veya `id` gibi genel nitelikler kullanılarak belirli `<div>` grupları veya tekil `div`'ler hedeflenir ve bu gruplara CSS ile özel görsel stiller (renkler, boyutlar, kenarlıklar, fontlar vb.) atanır. `<div>`, CSS kuralları için ideal bir "kanca" görevi görür.
3.  **JavaScript ile Etkileşim:** `id` veya `class` nitelikleri aracılığıyla JavaScript kodları ile belirli `<div>` elementlerine erişilir. Bu sayede, içeriği dinamik olarak güncellemek, elementleri gizlemek/göstermek veya kullanıcı etkileşimlerine tepki vermek gibi işlevler gerçekleştirilebilir.
4.  **Sayfa Düzeni Oluşturma:** Modern web tasarımında `div`'ler, CSS (özellikle Flexbox ve Grid gibi düzen modelleri ile birlikte) kullanılarak sayfanın ana bölümlerini (başlık alanı, gezinme menüsü, ana içerik, kenar çubuğu, alt bilgi) oluşturmak ve yerleştirmek için temel yapı taşları olarak kullanılır.

# Temel Söz Dizimi ve Kullanım

`<div>` etiketi, bir açılış etiketi (`<div>`) ve bir kapanış etiketi (`</div>`) olmak üzere iki kısımdan oluşur. Gruplandırılmak istenen içerik bu iki etiket arasına yerleştirilir.

```html
<div>
  <!-- Bu alana gruplandırılmak istenen içerik yerleştirilir -->
  <p>Bu bir paragraftır.</p>
  <p>Bu da başka bir paragraftır.</p>
  <img src="resim.jpg" alt="Örnek Resim">
</div>