<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>2. Uygulama</title>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.7;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background: #f8f9fa;
            color: #333;
        }
        h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        h2 { color: #2c3e50; margin-top: 30px; }
        pre {
            background: #f5f5f5;
            color: #333;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow-x: auto;
            font-size: 14px;
            line-height: 1.6;
        }
        pre span {
            display: block;
            padding: 2px 8px;
            border-radius: 3px;
            cursor: help;
        }
        pre span:hover {
            background: #e8e8e8;
            outline: 1px solid #bbb;
        }
        .note {
            background: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 12px 16px;
            border-radius: 4px;
            margin: 16px 0;
        }
        .explanation-section {
            background: #fff;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 20px;
            margin-top: 30px;
        }
        .explanation-section ul { list-style: none; padding: 0; }
        .explanation-section li {
            padding: 10px 12px;
            border-bottom: 1px solid #eee;
        }
        .explanation-section li:last-child { border-bottom: none; }
        .tag { font-weight: bold; color: #e74c3c; font-family: monospace; }
        .desc { color: #555; }
    </style>
</head>
<body>

<h1>2. Uygulama</h1>

<div class="note">
    <strong>İpucu:</strong> Aşağıdaki kod bloğundaki her satırın üzerine imlecinizi (fare işaretçinizi) getirdiğinizde o satırın açıklamasını görebilirsiniz. Ayrıca her satırın detaylı açıklaması kodun altında da yer almaktadır.
</div>

<pre><code><span title="Bu bildirim, belgenin bir HTML5 belgesi olduğunu tarayıcıya bildirir.">&lt;!DOCTYPE html&gt;</span>
<span title="HTML belgesinin kök elemanıdır. lang='tr' sayfa dilinin Türkçe olduğunu belirtir.">&lt;html lang=&quot;tr&quot;&gt;</span>
<span title="Sayfa hakkında meta-bilgileri içeren bölüm. Tarayıcı tarafından kullanılır, sayfada görüntülenmez.">&lt;head&gt;</span>
<span title="Belgenin karakter kodlamasını UTF-8 olarak ayarlar. Türkçe karakterlerin doğru görüntülenmesi için gereklidir.">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span>
<span title="Mobil uyumluluk için viewport ayarı. Sayfa genişliğini cihaz genişliğine eşitler.">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span>
<span title="[Madde 1] Anahtar kelimeler (keywords) meta etiketi. Arama motorlarının sayfayı indexlemesine yardımcı olur. Virgülle ayrılmış 5 anahtar kelime tanımlanmıştır.">    &lt;meta name=&quot;keywords&quot; content=&quot;HTML5, CSS3, Web Teknolojileri, Bilgisayar Mühendisliği, Çorlu&quot;&gt;</span>
<span title="[Madde 2] Yazar (author) meta etiketi. Belgenin yazarını belirtir. Arama motorları ve tarayıcılar bu bilgiyi kullanabilir.">    &lt;meta name=&quot;author&quot; content=&quot;Ad Soyad&quot;&gt;</span>
<span title="[Madde 3] Sayfayı her 60 saniyede bir otomatik olarak yeniler (refresh). Başlangıçta 10 sn denendikten sonra 60 sn'ye çıkarılmıştır. content değeri saniye cinsindendir.">    &lt;meta http-equiv=&quot;refresh&quot; content=&quot;60&quot;&gt;</span>
<span title="Tarayıcı sekmesinde görünen sayfa başlığı.">    &lt;title&gt;Çorlu M.F. Bilgisayar Mühendisliği&lt;/title&gt;</span>
<span title="head bölümünün kapanışı.">&lt;/head&gt;</span>
<span title="[Madde 7-8] body etiketi. bgcolor: zemin rengi, text: yazı rengi, background: zemine resim ekler ve tekrar eder (tile). Tek resimli zemin için CSS'te background-repeat: no-repeat kullanılır.">&lt;body bgcolor=&quot;#f0f8ff&quot; text=&quot;#333333&quot; background=&quot;arkaplan.png&quot;&gt;</span>
<span title=""> </span>
<span title="Sayfanın üst bilgi bölümü.">    &lt;header&gt;</span>
<span title="[Madde 10] Ana Sayfa linki. href='index.html' tıklandığında index.html dosyasını açar.">        &lt;a href=&quot;index.html&quot;&gt;Ana Sayfa&lt;/a&gt;</span>
<span title="Linkler arasında görsel ayırıcı olarak dikey çizgi karakteri.">        |</span>
<span title="[Madde 9] Fakültemiz linki. target='_blank' linkin yeni bir tarayıcı penceresinde/sekmesinde açılmasını sağlar.">        &lt;a href=&quot;https://cmf.nku.edu.tr&quot; target=&quot;_blank&quot;&gt;Fakültemiz&lt;/a&gt;</span>
<span title=""> </span>
<span title="Resim ve başlığını birlikte gruplayan semantik etiket.">        &lt;figure&gt;</span>
<span title="Resim ekleme etiketi. src: dosya yolu, alt: resim yüklenemezse gösterilecek metin, title: üzerine gelindiğinde gösterilecek metin.">            &lt;img src=&quot;cmflogo.png&quot; alt=&quot;Çorlu Mühendislik Fakültesi Logosu&quot; title=&quot;Çorlu Müh. Fak. Logosu&quot;&gt;</span>
<span title="Resmin altında görüntülenen başlık/açıklama.">            &lt;figcaption&gt;Ç.M.F&lt;/figcaption&gt;</span>
<span title="figure etiketinin kapanışı.">        &lt;/figure&gt;</span>
<span title="[Madde 7] Sayfanın ana başlığı. style ile renk belirlenmiştir.">        &lt;h1 style=&quot;color: #2c3e50;&quot;&gt;Bilgisayar Mühendisliği Bölümü&lt;/h1&gt;</span>
<span title="header bölümünün kapanışı.">    &lt;/header&gt;</span>
<span title=""> </span>
<span title="[Madde 6] Yatay çizgi. color: çizgi rengi, size: kalınlık (piksel), width: genişlik. noshade gölgesiz düz çizgi oluşturur.">    &lt;hr color=&quot;red&quot; size=&quot;3&quot; width=&quot;400&quot; noshade&gt;</span>
<span title=""> </span>
<span title="Sayfanın ana içerik bölümü.">    &lt;main&gt;</span>
<span title="Mantıksal içerik bölümü.">        &lt;section&gt;</span>
<span title="[Madde 7] İkinci seviye başlık. style ile renk atanmıştır.">            &lt;h2 style=&quot;color: #e74c3c;&quot;&gt;HTML&lt;/h2&gt;</span>
<span title="Paragraf etiketi.">            &lt;p&gt;HTML, bir web biçimlendirme-işaretleme dilidir.&lt;/p&gt;</span>
<span title="section bölümünün kapanışı.">        &lt;/section&gt;</span>
<span title=""> </span>
<span title="Yeni bir mantıksal bölüm.">        &lt;section&gt;</span>
<span title="[Madde 7] İkinci seviye başlık, farklı renkte.">            &lt;h2 style=&quot;color: #e74c3c;&quot;&gt;HTML5&lt;/h2&gt;</span>
<span title="Paragraf etiketi.">            &lt;p&gt;HTML5, birçok yeni özellik ve web aracını sunan ve 2014'te standartlaşan modern bir web biçimlendirme dilidir.&lt;/p&gt;</span>
<span title="em etiketi metni vurgular ve italik yapar.">            &lt;p&gt;HTML5, tüm modern tarayıcılar tarafından &lt;em&gt;desteklenir&lt;/em&gt; ve mobil cihazlarla uyumludur.&lt;/p&gt;</span>
<span title="section bölümünün kapanışı.">        &lt;/section&gt;</span>
<span title=""> </span>
<span title="Yeni bir mantıksal bölüm.">        &lt;section&gt;</span>
<span title="İkinci seviye başlık.">            &lt;h2 style=&quot;color: #e74c3c;&quot;&gt;HTML5'in Avantajları&lt;/h2&gt;</span>
<span title="[Madde 5] Sırasız liste. style='list-style-type: circle' ile madde işaretleri içi boş daire (circle) olarak ayarlanmıştır. Varsayılan disc (dolu daire), square (kare) da kullanılabilir.">            &lt;ul style=&quot;list-style-type: circle;&quot;&gt;</span>
<span title="Liste ögesi.">                &lt;li&gt;Yeni anlamsal etiketler (semantic tags)&lt;/li&gt;</span>
<span title="Liste ögesi.">                &lt;li&gt;Yeni form elemanları ve özellikleri&lt;/li&gt;</span>
<span title="strong etiketi metni kalın yapar ve anlamsal olarak önemli olduğunu belirtir.">                &lt;li&gt;&lt;strong&gt;Tam CSS3 desteği&lt;/strong&gt;&lt;/li&gt;</span>
<span title="Liste ögesi.">                &lt;li&gt;Video ve Audio etiketleri&lt;/li&gt;</span>
<span title="&amp;lt; ve &amp;gt; HTML özel karakterleridir. Etiket işaretlerini metin olarak göstermek için kullanılır.">                &lt;li&gt;2D/3D Grafikler için &amp;lt;canvas&amp;gt; ve WebGL&lt;/li&gt;</span>
<span title="Liste ögesi.">                &lt;li&gt;Yerel Depolama (Local Storage)&lt;/li&gt;</span>
<span title="mark etiketi metni sarı arka planla vurgular.">                &lt;li&gt;&lt;mark&gt;Çevrimdışı Web Uygulamaları&lt;/mark&gt;&lt;/li&gt;</span>
<span title="Sırasız listenin kapanışı.">            &lt;/ul&gt;</span>
<span title="section bölümünün kapanışı.">        &lt;/section&gt;</span>
<span title=""> </span>
<span title="Yeni bir mantıksal bölüm.">        &lt;section&gt;</span>
<span title="İkinci seviye başlık.">            &lt;h2 style=&quot;color: #e74c3c;&quot;&gt;Konu Başlıklarımız&lt;/h2&gt;</span>
<span title="[Madde 4] Sıralı liste. type='I' ile numaralama büyük Roma rakamlarına (I, II, III, IV...) çevrilmiştir. Diğer seçenekler: 'i' (küçük roma), 'A' (büyük harf), 'a' (küçük harf), '1' (varsayılan sayı).">            &lt;ol type=&quot;I&quot;&gt;</span>
<span title="Sıralı liste ögesi. I. olarak görünür.">                &lt;li&gt;HTML5&lt;/li&gt;</span>
<span title="Sıralı liste ögesi. II. olarak görünür.">                &lt;li&gt;CSS3&lt;/li&gt;</span>
<span title="Sıralı liste ögesi. İçinde alt liste barındırır.">                &lt;li&gt;JavaScript</span>
<span title="İç içe sıralı liste. type='I' üst listeden miras alınır veya farklı bir type verilebilir.">                    &lt;ol type=&quot;I&quot;&gt;</span>
<span title="İç içe listenin ögesi.">                        &lt;li&gt;Alt Liste&lt;/li&gt;</span>
<span title="İç içe listenin kapanışı.">                    &lt;/ol&gt;</span>
<span title="Dış listenin li ögesinin kapanışı.">                &lt;/li&gt;</span>
<span title="q etiketi kısa satır içi alıntıları belirtir. Tarayıcı otomatik tırnak işaretleri ekler.">                &lt;li&gt;&lt;q&gt;jQuery&lt;/q&gt;&lt;/li&gt;</span>
<span title="Sıralı listenin kapanışı.">            &lt;/ol&gt;</span>
<span title="section bölümünün kapanışı.">        &lt;/section&gt;</span>
<span title=""> </span>
<span title="Yeni bir mantıksal bölüm.">        &lt;section&gt;</span>
<span title="İkinci seviye başlık.">            &lt;h2 style=&quot;color: #e74c3c;&quot;&gt;Diğer HTML Elementleri&lt;/h2&gt;</span>
<span title="Başka bir kaynaktan alıntı yapılan uzun metinleri belirtir.">            &lt;blockquote&gt;</span>
<span title="sup etiketi üst indis (superscript) metin oluşturur. Örnek: E=mc²">                &lt;p&gt;Üst indis örneği: E=mc&lt;sup&gt;2&lt;/sup&gt;&lt;/p&gt;</span>
<span title="sub etiketi alt indis (subscript) metin oluşturur. Örnek: CO₂">                &lt;p&gt;Alt indis örneği: CO&lt;sub&gt;2&lt;/sub&gt;&lt;/p&gt;</span>
<span title="blockquote etiketinin kapanışı.">            &lt;/blockquote&gt;</span>
<span title=""> </span>
<span title="abbr etiketi kısaltmaları belirtir. title özelliği, üzerine gelindiğinde tam açılımı gösterir.">            &lt;p&gt;&lt;abbr title=&quot;Professor&quot;&gt;Prof.&lt;/abbr&gt; Stephen Hawking, teorik bir fizikçi ve kozmologdur.&lt;/p&gt;</span>
<span title=""> </span>
<span title="s etiketi artık geçerli olmayan metinleri, del etiketi ise silinmiş metinleri belirtir. İkisi de üstü çizili görünür ama anlamsal farkları vardır.">            &lt;p&gt;Doğru: Computer, Yanlış: &lt;s&gt;Compiter&lt;/s&gt;, &lt;del&gt;Compitır&lt;/del&gt;&lt;/p&gt;</span>
<span title=""> </span>
<span title="dl (description list) tanım listesi oluşturur.">            &lt;dl&gt;</span>
<span title="dt (definition term) tanımlanacak terimi belirtir.">                &lt;dt&gt;TCP/IP&lt;/dt&gt;</span>
<span title="dd (definition description) terimin tanımını belirtir.">                &lt;dd&gt;Bilgisayarlar arası veri iletimini düzenleyen protokoldür.&lt;/dd&gt;</span>
<span title="dt - tanımlanacak terim.">                &lt;dt&gt;FTP&lt;/dt&gt;</span>
<span title="dd - terimin tanımı.">                &lt;dd&gt;Bilgisayarlar arası dosya aktarımını düzenleyen protokoldür.&lt;/dd&gt;</span>
<span title="Tanım listesinin kapanışı.">            &lt;/dl&gt;</span>
<span title=""> </span>
<span title="time etiketi belirli bir zamanı veya tarihi belirtir.">            &lt;p&gt;Geçen süre: &lt;time&gt;00:00:15&lt;/time&gt;&lt;/p&gt;</span>
<span title="section bölümünün kapanışı.">        &lt;/section&gt;</span>
<span title="main bölümünün kapanışı.">    &lt;/main&gt;</span>
<span title=""> </span>
<span title="Sayfanın alt bilgi bölümü.">    &lt;footer&gt;</span>
<span title="&amp;copy; telif hakkı sembolünü (©) oluşturan HTML entity'sidir.">        &lt;p&gt;&amp;copy; 2026 Çorlu Mühendislik Fakültesi. Tüm hakları saklıdır.&lt;/p&gt;</span>
<span title="[Madde 11] Bize Ulaşın bölümü. mailto: protokolü tıklandığında kullanıcının e-posta istemcisini açar ve belirtilen adrese yeni bir e-posta oluşturur.">        &lt;p&gt;Bize Ulaşın: &lt;a href=&quot;mailto:bilgisayar@nku.edu.tr&quot;&gt;bilgisayar@nku.edu.tr&lt;/a&gt;&lt;/p&gt;</span>
<span title="footer bölümünün kapanışı.">    &lt;/footer&gt;</span>
<span title=""> </span>
<span title="body etiketinin kapanışı.">&lt;/body&gt;</span>
<span title="HTML belgesinin kapanışı.">&lt;/html&gt;</span></code></pre>

<hr>

<div class="explanation-section">
<h2>Kod Açıklaması</h2>

<ul>
<li>
    <span class="tag">&lt;!DOCTYPE html&gt;</span><br>
    <span class="desc">Bu bildirim, belgenin bir HTML5 belgesi olduğunu tarayıcıya bildirir.</span>
</li>

<li>
    <span class="tag">&lt;html lang="tr"&gt;</span><br>
    <span class="desc">HTML belgesinin kök elemanıdır. <code>lang="tr"</code> sayfa dilinin Türkçe olduğunu belirtir.</span>
</li>

<li>
    <span class="tag">&lt;meta charset="UTF-8"&gt;</span><br>
    <span class="desc">Karakter kodlamasını UTF-8 olarak ayarlar. Türkçe karakterlerin (ş, ç, ğ, ü, ö, ı) doğru görüntülenmesi için gereklidir.</span>
</li>

<li>
    <span class="tag">&lt;meta name="viewport" ...&gt;</span><br>
    <span class="desc">Mobil cihazlarda sayfanın doğru görüntülenmesini sağlayan viewport ayarıdır.</span>
</li>

<li>
    <span class="tag">&lt;meta name="keywords" ...&gt;</span><br>
    <span class="desc"><strong>[Madde 1]</strong> Sayfaya 5 adet anahtar kelime ekler. Arama motorları bu kelimeleri sayfanın konusunu anlamak için kullanır. Kelimeler virgülle ayrılır. Eskiden SEO için çok önemliydi, günümüzde Google bu etikete eskisi kadar ağırlık vermese de diğer arama motorları hâlâ kullanabilir.</span>
</li>

<li>
    <span class="tag">&lt;meta name="author" ...&gt;</span><br>
    <span class="desc"><strong>[Madde 2]</strong> Belgenin yazarını belirtir. <code>content</code> değerine kendi adınızı soyadınızı yazmalısınız. Bu bilgi arama motorları ve tarayıcılar tarafından kullanılabilir.</span>
</li>

<li>
    <span class="tag">&lt;meta http-equiv="refresh" content="60"&gt;</span><br>
    <span class="desc"><strong>[Madde 3]</strong> Sayfayı belirtilen süre (saniye) sonunda otomatik olarak yeniler. <code>content="10"</code> yazılırsa her 10 saniyede, <code>content="60"</code> yazılırsa her 60 saniyede sayfa yenilenir. <code>http-equiv</code> özelliği, HTTP başlık bilgisi gibi davranmasını sağlar. Canlı veri takibi gibi durumlarda kullanışlıdır.</span>
</li>

<li>
    <span class="tag">&lt;body bgcolor="..." text="..." background="..."&gt;</span><br>
    <span class="desc"><strong>[Madde 7-8]</strong> <code>bgcolor</code>: Sayfanın zemin (arka plan) rengini ayarlar. <code>text</code>: Sayfadaki tüm yazıların varsayılan rengini belirler. <code>background</code>: Zemine bir resim ekler ve varsayılan olarak resim tekrar ederek (tile) tüm sayfayı kaplar. Tek resimli zemin için CSS'te <code>background-repeat: no-repeat</code> kullanılır. <em>Not: Bu özellikler HTML5'te artık önerilmiyor (deprecated), CSS ile yapılması tercih edilir.</em></span>
</li>

<li>
    <span class="tag">&lt;a href="index.html"&gt;Ana Sayfa&lt;/a&gt;</span><br>
    <span class="desc"><strong>[Madde 10]</strong> Tıklanabilir bağlantı (link) oluşturur. <code>href</code> özelliği, tıklandığında gidilecek adresi belirtir. Burada aynı klasördeki <code>index.html</code> dosyasına yönlendirir. Varsayılan olarak aynı pencerede açılır.</span>
</li>

<li>
    <span class="tag">&lt;a href="https://cmf.nku.edu.tr" target="_blank"&gt;Fakültemiz&lt;/a&gt;</span><br>
    <span class="desc"><strong>[Madde 9]</strong> Fakülte ana sayfasına yönlenen bir bağlantıdır. <code>target="_blank"</code> özelliği, linkin yeni bir tarayıcı penceresinde veya sekmesinde açılmasını sağlar. Diğer target değerleri: <code>_self</code> (aynı pencere, varsayılan), <code>_parent</code> (üst çerçeve), <code>_top</code> (en üst çerçeve).</span>
</li>

<li>
    <span class="tag">&lt;h1 style="color: #2c3e50;"&gt;</span><br>
    <span class="desc"><strong>[Madde 7]</strong> Başlığa inline CSS ile renk atanmıştır. <code>style</code> özelliği doğrudan etiket üzerinde CSS yazmayı sağlar. Renk değerleri: isim (<code>red</code>), hex (<code>#2c3e50</code>), rgb (<code>rgb(44,62,80)</code>) formatlarında yazılabilir.</span>
</li>

<li>
    <span class="tag">&lt;hr color="red" size="3" width="400" noshade&gt;</span><br>
    <span class="desc"><strong>[Madde 6]</strong> Yatay çizgi. <code>color</code>: çizginin rengini belirler. <code>size</code>: kalınlığını piksel cinsinden ayarlar. <code>width</code>: genişliğini piksel veya yüzde olarak ayarlar. <code>noshade</code>: gölge efektini kaldırarak düz bir çizgi oluşturur.</span>
</li>

<li>
    <span class="tag">&lt;ul style="list-style-type: circle;"&gt;</span><br>
    <span class="desc"><strong>[Madde 5]</strong> Sırasız listenin madde işaretlerini içi boş daire (circle) olarak değiştirir. Diğer seçenekler: <code>disc</code> (dolu daire, varsayılan), <code>square</code> (kare), <code>none</code> (işaretsiz).</span>
</li>

<li>
    <span class="tag">&lt;ol type="I"&gt;</span><br>
    <span class="desc"><strong>[Madde 4]</strong> Sıralı listenin numaralama biçimini büyük Roma rakamlarına (I, II, III, IV...) çevirir. Diğer seçenekler: <code>type="i"</code> (küçük roma: i, ii, iii), <code>type="A"</code> (büyük harf: A, B, C), <code>type="a"</code> (küçük harf: a, b, c), <code>type="1"</code> (sayı, varsayılan).</span>
</li>

<li>
    <span class="tag">&lt;a href="mailto:..."&gt;</span><br>
    <span class="desc"><strong>[Madde 11]</strong> <code>mailto:</code> protokolü, tıklandığında kullanıcının varsayılan e-posta istemcisini (Outlook, Thunderbird, Gmail vb.) açar ve belirtilen adrese yeni bir e-posta taslağı oluşturur. <code>?subject=Konu</code> ekleyerek varsayılan konu da belirlenebilir.</span>
</li>
</ul>
</div>

<div class="explanation-section" style="margin-top: 40px; border-left: 4px solid #3498db;">
<h2>Meta Etiketleri Detaylı Açıklama</h2>

<h3>Meta etiketi nedir?</h3>
<p>
    <code>&lt;meta&gt;</code> etiketleri, HTML belgesinin <code>&lt;head&gt;</code> bölümüne yerleştirilen ve
    sayfa hakkında <strong>üst-bilgi (metadata)</strong> sağlayan etiketlerdir. Bu bilgiler sayfada görüntülenmez
    ancak tarayıcılar, arama motorları ve diğer web servisleri tarafından kullanılır.
</p>

<h3>Sık kullanılan meta etiketleri</h3>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
    <thead style="background: #eee;">
        <tr>
            <th>Meta Etiketi</th>
            <th>Görevi</th>
            <th>Örnek</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>charset</code></td>
            <td>Karakter kodlamasını belirler</td>
            <td><code>&lt;meta charset="UTF-8"&gt;</code></td>
        </tr>
        <tr>
            <td><code>viewport</code></td>
            <td>Mobil görüntüleme ayarları</td>
            <td><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></td>
        </tr>
        <tr>
            <td><code>keywords</code></td>
            <td>Anahtar kelimeler (SEO)</td>
            <td><code>&lt;meta name="keywords" content="HTML5, CSS3, Web"&gt;</code></td>
        </tr>
        <tr>
            <td><code>description</code></td>
            <td>Sayfa açıklaması (arama sonuçlarında görünür)</td>
            <td><code>&lt;meta name="description" content="Web teknolojileri dersi"&gt;</code></td>
        </tr>
        <tr>
            <td><code>author</code></td>
            <td>Sayfa yazarı</td>
            <td><code>&lt;meta name="author" content="Ad Soyad"&gt;</code></td>
        </tr>
        <tr>
            <td><code>refresh</code></td>
            <td>Otomatik sayfa yenileme</td>
            <td><code>&lt;meta http-equiv="refresh" content="60"&gt;</code></td>
        </tr>
        <tr>
            <td><code>robots</code></td>
            <td>Arama motoru botlarına talimat verir</td>
            <td><code>&lt;meta name="robots" content="index, follow"&gt;</code></td>
        </tr>
    </tbody>
</table>

<h3>Bağlantı (Link) türleri</h3>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
    <thead style="background: #eee;">
        <tr>
            <th>Bağlantı Türü</th>
            <th>Kullanım</th>
            <th>Örnek</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dış bağlantı</td>
            <td>Başka bir web sitesine yönlendirir</td>
            <td><code>&lt;a href="https://..." target="_blank"&gt;</code></td>
        </tr>
        <tr>
            <td>İç bağlantı</td>
            <td>Aynı sitedeki başka bir sayfaya yönlendirir</td>
            <td><code>&lt;a href="index.html"&gt;</code></td>
        </tr>
        <tr>
            <td>E-posta bağlantısı</td>
            <td>E-posta istemcisini açar</td>
            <td><code>&lt;a href="mailto:bilgi@site.com"&gt;</code></td>
        </tr>
        <tr>
            <td>Telefon bağlantısı</td>
            <td>Mobilde telefon uygulamasını açar</td>
            <td><code>&lt;a href="tel:+905551234567"&gt;</code></td>
        </tr>
        <tr>
            <td>Sayfa içi bağlantı</td>
            <td>Aynı sayfadaki bir bölüme atlar</td>
            <td><code>&lt;a href="#bolum-adi"&gt;</code></td>
        </tr>
    </tbody>
</table>

<h3>target özelliğinin değerleri</h3>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
    <thead style="background: #eee;">
        <tr>
            <th>Değer</th>
            <th>Açıklama</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>_self</code></td>
            <td>Aynı pencerede/sekmede açar (varsayılan)</td>
        </tr>
        <tr>
            <td><code>_blank</code></td>
            <td>Yeni bir pencerede/sekmede açar</td>
        </tr>
        <tr>
            <td><code>_parent</code></td>
            <td>Üst çerçevede (parent frame) açar</td>
        </tr>
        <tr>
            <td><code>_top</code></td>
            <td>En üst çerçevede açar, tüm frame yapısından çıkar</td>
        </tr>
    </tbody>
</table>

<h3>Liste türleri özeti</h3>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
    <thead style="background: #eee;">
        <tr>
            <th>Liste Türü</th>
            <th>Etiket</th>
            <th>Biçim Seçenekleri</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sırasız (Unordered)</td>
            <td><code>&lt;ul&gt;</code></td>
            <td><code>disc</code> (varsayılan), <code>circle</code>, <code>square</code>, <code>none</code></td>
        </tr>
        <tr>
            <td>Sıralı (Ordered)</td>
            <td><code>&lt;ol&gt;</code></td>
            <td><code>1</code> (varsayılan), <code>A</code>, <code>a</code>, <code>I</code>, <code>i</code></td>
        </tr>
        <tr>
            <td>Tanım (Description)</td>
            <td><code>&lt;dl&gt;</code></td>
            <td>Terim (<code>&lt;dt&gt;</code>) ve tanım (<code>&lt;dd&gt;</code>) çiftleri</td>
        </tr>
    </tbody>
</table>

<h3>Renk belirtme yöntemleri</h3>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
    <thead style="background: #eee;">
        <tr>
            <th>Yöntem</th>
            <th>Örnek</th>
            <th>Açıklama</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>İsim</td>
            <td><code>red</code>, <code>blue</code>, <code>green</code></td>
            <td>HTML'de tanımlı 140+ renk ismi</td>
        </tr>
        <tr>
            <td>Hex (Onaltılık)</td>
            <td><code>#ff0000</code>, <code>#2c3e50</code></td>
            <td>#RRGGBB formatında, her biri 00-FF arası</td>
        </tr>
        <tr>
            <td>RGB</td>
            <td><code>rgb(255, 0, 0)</code></td>
            <td>Kırmızı, Yeşil, Mavi değerleri 0-255 arası</td>
        </tr>
        <tr>
            <td>RGBA</td>
            <td><code>rgba(255, 0, 0, 0.5)</code></td>
            <td>RGB + saydamlık (alpha) değeri 0-1 arası</td>
        </tr>
        <tr>
            <td>HSL</td>
            <td><code>hsl(0, 100%, 50%)</code></td>
            <td>Ton (0-360), Doygunluk (%), Açıklık (%)</td>
        </tr>
    </tbody>
</table>

</div>

</body>
</html>
