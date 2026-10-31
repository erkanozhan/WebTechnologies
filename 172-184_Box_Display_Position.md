# CSS'te Kutu Modeli (Box Model), display ve position Özellikleri

## 1. Box Model

HTML ile oluşturulan her öğe, CSS tarafından ekranda bir kutu (box) olarak yerleştirilir. Bu kutu modeli (Box Model), web sayfalarının düzenini ve öğeler arasındaki mesafeleri anlamak için temel bir kavramdır. Kutu modelinin ayrıntılarını bilmek; duyarlı (responsive) tasarımlar, kullanıcı arayüzü geliştirme ve hata ayıklama süreçlerinde büyük kolaylık sağlar.

### Box Model'in Temel Bileşenleri

Her HTML öğesi aşağıdaki dört ana bölümden oluşur:

- **Content (İçerik):** Kutunun asıl içeriği (örneğin metin, resim veya başka bir HTML öğesi).
- **Padding (İç Boşluk):** İçerik ile kenarlık (border) arasındaki boşluktur. Padding, kutunun içini genişletir ve arayüzde öğelerin birbirine çok yakın görünmesini engeller.
- **Border (Kenarlık):** Kutunun etrafını saran çizgidir. Renk, kalınlık ve stil verilebilir.
- **Margin (Dış Boşluk):** Kutunun dışındaki boşluktur. Diğer kutularla arasındaki mesafeyi belirler.

Aşağıdaki görsel, kutu modelinin yapısını özetler:

```
+-------------------------------+
|           margin              |
|  +-------------------------+  |
|  |        border           |  |
|  |  +-------------------+  |  |
|  |  |     padding       |  |  |
|  |  |  +-------------+  |  |  |
|  |  |  |  content    |  |  |  |
|  |  |  +-------------+  |  |  |
|  |  +-------------------+  |  |
|  +-------------------------+  |
+-------------------------------+
```

### Box Model'de Genişlik ve Yükseklik Hesaplama

Varsayılan olarak, bir öğeye `width` ve `height` verdiğinizde, bu değerler sadece içerik (content) alanını kapsar. Kutunun ekranda görünen boyutu (kenarlık dahil) ve sayfada kapladığı toplam alan (margin dahil) şöyle hesaplanır:

```
Görünen Genişlik  = width + padding-left + padding-right + border-left + border-right
Kaplanan Genişlik = Görünen Genişlik + margin-left + margin-right
Görünen Yükseklik  = height + padding-top + padding-bottom + border-top + border-bottom
Kaplanan Yükseklik = Görünen Yükseklik + margin-top + margin-bottom
```

#### `box-sizing` Özelliği

Modern web geliştirmede, `box-sizing: border-box;` kullanmak yaygındır. Bu özellik sayesinde, `width` ve `height` değerleri kutunun tümünü (content + padding + border) kapsar. Böylece kutunun toplam boyutunu hesaplamak kolaylaşır ve responsive tasarımlar daha öngörülebilir olur.

```css
/* Tüm öğelerde box-sizing: border-box kullanmak için: */
* {
    box-sizing: border-box;
}
```

### Pratik Örnek

```html
<div style="width: 200px; padding: 10px; border: 2px solid black; margin: 20px;">
    Bu bir kutudur.
</div>
```

- **Genişlik (width):** 200px (sadece içerik)
- **Padding:** Her tarafta 10px (toplamda 20px eklenir)
- **Border:** Her tarafta 2px (toplamda 4px eklenir)
- **Margin:** Her tarafta 20px (kutunun dışındaki boşluk)

Görünen genişlik (varsayılan `box-sizing: content-box` ile):  
`200px (content) + 20px (padding) + 4px (border) = 224px`  
Margin dahil kaplanan genişlik:  
`224px + 40px (margin) = 264px`

### Kutu Modeli ile İlgili Sık Karşılaşılan Sorunlar

- **Taşma (Overflow):** İçerik kutunun boyutlarını aşarsa, `overflow` özelliği ile taşmanın nasıl yönetileceği belirlenir (`visible`, `hidden`, `scroll`, `auto`).
- **Responsive Tasarım:** Farklı ekran boyutlarında kutuların uyumlu görünmesi için yüzde (%) veya `vw/vh` gibi birimler kullanılabilir.
- **Kenar Boşluklarının Birleşmesi (Margin Collapsing):** Üst üste gelen dikey margin'ler birleşebilir; bu durum özellikle blok öğelerde dikkat gerektirir.

### Kutu Modelini İncelemek için Tarayıcı Araçları

Modern tarayıcıların geliştirici araçları (ör. Chrome DevTools, Firefox Inspector) ile herhangi bir öğenin kutu modelini görsel olarak inceleyebilir, padding, border ve margin değerlerini kolayca görebilirsiniz.

---

Kutu modeli, HTML ve CSS ile profesyonel arayüzler geliştirmenin temel taşıdır. Bu modeli iyi anlamak; hem temel web geliştirme hem de ileri düzey front-end mühendisliği için vazgeçilmezdir.

---

## 2. Display Özelliği

`display` özelliği, bir HTML öğesinin nasıl gösterileceğini belirler.

### Yaygın display değerleri:

- **block**: Öğeyi blok olarak gösterir. Satırın tamamını kaplar.
- **inline**: Öğeyi satır içi olarak gösterir. Genişlik ve yükseklik ayarlanamaz.
- **inline-block**: Satır içi gibi davranır ancak genişlik ve yükseklik verilebilir.
- **none**: Öğeyi gizler, sayfada yer kaplamaz.
- **flex**: Esnek kutu modeliyle hizalama yapılmasını sağlar.
- **grid**: Izgara tabanlı yerleşim sağlar.

### Örnek:

```html
<span style="display: block;">Bu bir block öğedir.</span>
<span style="display: inline;">Bu bir inline öğedir.</span>
```

İlk öğe blok düzende olduğu için yeni satıra geçer, ikinci öğe satır içinde devam eder.

---

## 3. Position Özelliği

`position` özelliği, bir öğenin bulunduğu konumu tanımlamak için kullanılır.

### Yaygın position değerleri:

- **static**: Varsayılan konumlandırmadır. Öğeler belge akışına göre yerleşir.
- **relative**: Öğeyi normal konumuna göre kaydırmak için kullanılır.
- **absolute**: Öğe normal akıştan çıkar. Konumu, `position` değeri `static` dışında olan (`relative`, `absolute`, `fixed` veya `sticky`) en yakın ata öğeye göre belirlenir; böyle bir ata yoksa başlangıç kapsayıcı bloğuna (initial containing block) göre hesaplanır.
- **fixed**: Görüntü alanına (viewport) göre sabitlenir, sayfa kaydırmasından etkilenmez.
- **sticky**: Kaydırma sırasında belli bir noktaya yapışır ve sabitlenir.

### Örnek:

```html
<div style="position: relative; width: 200px; height: 200px; background-color: lightgray;">
  <div style="position: absolute; top: 10px; left: 10px; width: 50px; height: 50px; background-color: red;"></div>
</div>
```

Gri kutu `relative`, kırmızı kutu `absolute` olarak tanımlanmıştır. Kırmızı kutu, gri kutunun sol üst köşesinden 10px kaydırılarak yerleştirilmiştir.

---

## 4. Position ve Display Özelliklerinin Birlikte Kullanımı

`position` ve `display` özellikleri, HTML öğelerinin konumlandırılması ve nasıl görüntülenmesi gerektiğini kontrol etmek için birlikte kullanılır. `position` özelliği bir öğenin konumunu belirlerken, `display` özelliği o öğenin sayfa düzenindeki davranışını (örneğin, blok seviyesinde mi yoksa satır içi mi olduğunu) tanımlar. Bu iki özelliğin etkileşimi, özellikle karmaşık düzenlemeler ve dinamik arayüzler oluştururken önemlidir.

### Position Özelliğinin Display Üzerindeki Etkisi

Bir öğeye `position: absolute` veya `position: fixed` uygulandığında tarayıcı, öğenin `display` değerini kendiliğinden blok düzeyine dönüştürür (blockification): `inline` ve `inline-block` değerleri `block`, `inline-flex` değeri ise `flex` olarak hesaplanır. Bu nedenle `<span>` gibi normalde satır içi olan bir öğeye bile, ayrıca `display: block` yazmadan genişlik ve yükseklik verilebilir. Ancak, `display: none` olarak ayarlanmış bir öğe, `position` değeri ne olursa olsun ekranda görünmez.

### Örnek:

Aşağıdaki örnekte, bir `div` içinde mutlak konumlandırılmış bir `span` bulunmaktadır. İçteki `span`, dıştaki `div`'in sağ üst köşesine yerleştirilmiştir.

```html
<div style="position: relative; width: 300px; height: 200px; border: 1px solid black;">
    Dış Kutunun İçeriği
    <span style="position: absolute; top: 10px; right: 10px; width: 100px; height: 50px; background-color: lightblue;">
        Sağ Üst Köşe
    </span>
</div>
```

Bu kodda:

- Dıştaki `div` `position: relative` olarak ayarlanmıştır. Bu, içteki `div` için bir referans noktası oluşturur.
- İçteki `span` `position: absolute` ile konumlandırılmıştır. `top` ve `right` özellikleri, bu öğenin dış kutunun sağ üst köşesine göre konumunu belirler.
- `span` normalde satır içi (`inline`) bir öğe olduğu için `width` ve `height` değerlerini dikkate almaz. Ancak `position: absolute` verildiği anda tarayıcı onu blok düzeyine dönüştürür; bu yüzden `display: block` yazmaya gerek kalmadan 100 × 50 piksellik kutu oluşur.

### Display: None Durumu

Eğer içteki öğenin `display` özelliği `none` olarak ayarlanırsa, bu öğe tamamen gizlenir ve sayfada yer kaplamaz. Bu durumda, `position` özelliği bir etkiye sahip olmaz çünkü öğe zaten görüntülenmemektedir.

```html
<div style="position: relative; width: 300px; height: 200px; border: 1px solid black;">
    Dış Kutunun İçeriği
    <div style="position: absolute; top: 10px; right: 10px; display: none; width: 100px; height: 50px; background-color: lightblue;">
        Sağ Üst Köşe (Görünmez)
    </div>
</div>
```

Özetle, `position` ve `display` özellikleri birlikte kullanıldığında, öğelerin hem konumunu hem de sayfa düzenindeki davranışını kontrol etmek mümkündür. `position: absolute` veya `position: fixed` kullanıldığında öğe kendiliğinden blok düzeyine dönüştürüldüğü için ayrıca `display: block` yazmak gerekmez; öğe doğrudan boyutlandırılabilir ve konumlandırılabilir. Ancak, `display: none` kullanıldığında, öğe tamamen gizlenir ve `position` özelliği etkisiz hale gelir.

---

## 5. Visibility ve Display Arasındaki Fark

- `display: none` → Öğeyi tamamen gizler, sayfada hiç yer kaplamaz.
- `visibility: hidden` → Öğeyi görünmez yapar ama sayfada kapladığı alan korunur.

### Örnek:

```html
<div style="width: 300px; height: 100px; border: 1px solid black;">
    <p style="visibility: hidden;">Bu metin görünmezdir ama yer kaplar.</p>
    <p style="display: none;">Bu metin tamamen gizlenir.</p>
    <p>Bu metin normal görünür.</p>
</div>
```

Yukarıdaki örnekte, "Bu metin görünmezdir ama yer kaplar." yazan paragraf `visibility: hidden` özelliği sayesinde görünmez olacaktır, ancak sayfa düzeninde kapladığı alan korunacaktır. "Bu metin tamamen gizlenir." yazan paragraf ise `display: none` özelliği sayesinde tamamen gizlenecek ve sayfa düzeninde herhangi bir yer kaplamayacaktır. "Bu metin normal görünür." yazan son paragraf ise normal şekilde görünür olacaktır. Bu durum, `visibility` ve `display` özelliklerinin farklı etkilerini göstermektedir.

İlk paragraf görünmez olsa da boşluk oluşturur. İkinci paragraf ise hiç yer kaplamaz.

---

