# `background-image` Özelliği

## Temel Kavram

CSS (Cascading Style Sheets — Basamaklı Stil Sayfaları) ile bir sayfanın arka planına resim yerleştirmek istediğinizde başvurduğunuz özellik `background-image`'dır. `body` seçicisiyle kullanıldığında bu özellik, sayfanın tamamını kapsayan bir tuval üzerine görsel uygulamak anlamına gelir.

[Bu siteden (https://unsplash.com/) bir resim seçebilirsiniz](https://unsplash.com/)

```css
body {
    background-image: url("images/resim.jpg");
}
```

`url()` burada bir işlev (function) olarak çalışır; parantez içine dosya yolunu ya da bir web adresi yazarsınız. Tırnak işareti kullanmak zorunlu değildir ama yazım tutarlılığı açısından tercih edilmesi yerinde olur.

Proje klasör yapısı genellikle şu şekilde düzenlenir:

```
proje/
├── index.html
├── style.css
└── images/
    ├── arkaplan.jpg
    ├── doku.png
    └── logo.png
```

CSS dosyası `proje/` kökünde durduğunda `images/` klasörüne bu şekilde göreli yol (relative path) ile erişilir.

> **Dikkat — Yol neye göre çözülür?** Harici bir CSS dosyasındaki `url()` yolu, HTML dosyasının konumuna göre değil, **CSS dosyasının kendi konumuna göre** çözülür. Arka plan resminin görünmemesinin en sık nedeni budur. Stil dosyası bir alt klasöre taşındığında yolun başına bir üst dizine çıkmayı sağlayan `../` eklenmelidir:
>
> ```
> proje/
> ├── index.html
> ├── css/
> │   └── style.css      ← url("../images/arkaplan.jpg")
> └── images/
>     └── arkaplan.jpg
> ```
>
> ```css
> /* css/style.css içinde */
> body {
>     background-image: url("../images/arkaplan.jpg");
> }
> ```
>
> Aynı kural HTML içindeki `<style>` bloğunda veya `style` niteliğinde yazıldığında ise yol, HTML dosyasının konumuna göre çözülür.

---

## Resim Tekrarı — `background-repeat`

Tarayıcı varsayılan davranışı olarak, görüntü sayfayı doldurana kadar hem yatay hem dikey yönde tekrar eder. Bu davranışın adı **tile** (kiremit döşeme) yöntemidir — tıpkı bir duvarı küçük karelerle kaplamak gibi düşünebilirsiniz.

```css
body {
    background-image: url("images/doku.png");
    background-repeat: repeat;       /* varsayılan */
}
```

Diğer seçenekler:

| Değer | Anlamı |
|---|---|
| `repeat` | Her iki yönde tekrarlar |
| `repeat-x` | Yalnızca yatayda tekrarlar |
| `repeat-y` | Yalnızca dikeyde tekrarlar |
| `no-repeat` | Tekrar etmez, tek kopya |
| `space` | Boşluk bırakarak eşit dağıtır |
| `round` | Kırpmadan sığdırmak için ölçekler |

---

## Konumlandırma — `background-position`

Resim tekrar etmeyecekse nerede duracağını belirtmek gerekir.

```css
body {
    background-image: url("images/logo.png");
    background-repeat: no-repeat;
    background-position: center center;
}
```

Anahtar kelimeler — `top`, `bottom`, `left`, `right`, `center` — ya da piksel/yüzde değerleri kullanılabilir:

```css
background-position: 50% 30%;
background-position: 100px 200px;
```

İlk değer **x ekseni** (yatay), ikinci değer **y ekseni** (dikey) içindir.

---

## Boyutlandırma — `background-size`

Bu özellik, özellikle duyarlı (responsive) tasarımlarda kritik hale gelir.

```css
body {
    background-image: url("images/arkaplan.jpg");
    background-size: cover;
}
```

| Değer | Davranış |
|---|---|
| `auto` | Resmin doğal boyutu |
| `cover` | Alanı tamamen kaplar, gerekirse kırpar |
| `contain` | Tamamı görünür kalır, boşluk oluşabilir |
| `100% 100%` | Alanı tam doldurur, orantı bozulabilir |
| `400px 200px` | Sabit boyut |

`cover` değeri özellikle tam sayfa arka plan fotoğraflarında standart tercih haline gelmiştir; resmin oranı korunur, alan tamamen dolar.

---

## Sabitlik — `background-attachment`

Bu özellik, sayfayı kaydırdığınızda arka planın sayfayla birlikte mi yoksa sabit mi kalacağını belirler.

```css
body {
    background-image: url("images/derin.jpg");
    background-attachment: fixed;   /* parallax etkisi */
}
```

| Değer | Davranış |
|---|---|
| `scroll` | Sayfa ile birlikte kayar (varsayılan) |
| `fixed` | Görüntü alanına (viewport) göre sabit kalır |
| `local` | Öğenin içeriğiyle birlikte kayar |

`fixed` değeri, özellikle uzun sayfalarda görsel derinlik hissi yaratan **parallax** efektinin temelidir.

---

## Gradyan Arka Planlar (Gradient Backgrounds)

`background-image` özelliği yalnızca dosyalarla çalışmaz; CSS'in kendi gradyan işlevlerini de kabul eder. `linear-gradient` (doğrusal gradyan) ve `radial-gradient` (dairesel gradyan) bunların başında gelir.

```css
body {
    background-image: linear-gradient(to right, #1a1a2e, #16213e);
}
```

Açı de verilebilir:

```css
background-image: linear-gradient(135deg, #f5f7fa, #c3cfe2);
```

`radial-gradient` ise merkezden dışa doğru yayılan bir geçiş üretir:

```css
background-image: radial-gradient(circle, #ffffff, #cccccc);
```

---

## Çok Katmanlı Arka Planlar (Multiple Backgrounds)

CSS3 ile birlikte aynı öğeye birden fazla arka plan katmanı atanabilir hale geldi. Değerler virgülle ayrılır; liste sırasında ilk yazılan en üstte yer alır.

```css
body {
    background-image: 
        url("images/ust_katman.png"),
        linear-gradient(to bottom, #000428, #004e92);
    background-repeat: no-repeat, no-repeat;
    background-position: center top, center center;
    background-size: auto, cover;
}
```

Katmanlama mantığını şöyle düşünebilirsiniz: üst üste konulmuş şeffaf asetat filmler gibi, her katman bir alttakinin üzerinde oturur.

---

## Kısaltma Sözdizimi — `background`

Tüm bu özellikleri tek satırda yazmak için kısaltma (shorthand) özelliği kullanılır:

```css
body {
    background: url("images/foto.jpg") no-repeat center center / cover fixed;
}
```

Kısaltma özelliğinde değerlerin sırası büyük ölçüde serbesttir; tarayıcı her değerin türünü (renk mi, resim mi, tekrar biçimi mi) kendisi tanır. Okunabilirlik için yaygın olarak kullanılan sıra şöyledir:

```
background: [color] [image] [repeat] [position] / [size] [attachment];
```

Tek katı kural, `size` değerinin yalnızca `position` değerinden hemen sonra ve aralarına bir eğik çizgi (`/`, slash) konularak yazılabilmesidir. Bu ayraç gereklidir; çünkü hem konum hem boyut piksel veya yüzde değeri alabildiğinden, eğik çizgi olmadan `center 50%` gibi bir ifadenin hangi özelliğe ait olduğu anlaşılamaz.

---

## Renk ile Birlikte Kullanım

Resim yüklenemezse ya da şeffaf alanlar varsa arka plan rengi devreye girer. Bu nedenle `background-image` ile `background-color` birlikte tanımlanması iyi bir pratiktir:

```css
body {
    background-color: #1a1a2e;
    background-image: url("images/arkaplan.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
```

---

## Tam Sayfa Arka Plan — Referans Şablonu

```css
body {
    margin: 0;
    padding: 0;
    min-height: 100vh; /* vh: viewport height — görüntü alanı yüksekliği */
    background-color: #0d0d0d;
    background-image: url("images/sahne.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
```

`min-height: 100vh` ifadesi, içerik az olsa bile `body`nin en az ekran yüksekliği kadar uzamasını sağlar; aksi hâlde arka plan görüntüsü kesilmiş görünebilir.

---

## Özet Tablosu

| Özellik | Görevi |
|---|---|
| `background-image` | Resim veya gradyan tanımlar |
| `background-repeat` | Tekrar davranışını belirler |
| `background-position` | Konumu belirler |
| `background-size` | Boyutu ayarlar |
| `background-attachment` | Kaydırma davranışını belirler |
| `background-color` | Yedek rengi tanımlar |
| `background` | Hepsini tek satırda toplar |