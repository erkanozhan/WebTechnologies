const urunAlani = document.getElementById("urunler");
const durum = document.getElementById("durum");
const kategoriSecimi = document.getElementById("kategori");

const fiyatBicimi = new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" });
let tumUrunler = [];

// Tek bir ürün için kart oluşturur; tüm metinler textContent ile yazılır.
function kartOlustur(urun) {
  const kart = document.createElement("article");
  kart.className = "kart";

  const etiket = document.createElement("span");
  etiket.className = "etiket";
  etiket.textContent = urun.kategori;

  const baslik = document.createElement("h2");
  baslik.textContent = urun.ad;

  const fiyat = document.createElement("p");
  fiyat.className = "fiyat";
  fiyat.textContent = fiyatBicimi.format(urun.fiyat);

  const stok = document.createElement("p");
  stok.className = urun.stok > 0 ? "stok var" : "stok yok";
  stok.textContent = urun.stok > 0 ? `Stokta ${urun.stok} adet` : "Tükendi";

  kart.append(etiket, baslik, fiyat, stok);
  return kart;
}

function urunleriGoster() {
  const secilen = kategoriSecimi.value;
  const liste = secilen === "" ? tumUrunler : tumUrunler.filter((u) => u.kategori === secilen);
  urunAlani.replaceChildren(...liste.map(kartOlustur));
  durum.textContent = `${liste.length} ürün listeleniyor.`;
}

function kategorileriDoldur() {
  const kategoriler = [...new Set(tumUrunler.map((u) => u.kategori))].sort((a, b) => a.localeCompare(b, "tr"));
  for (const ad of kategoriler) {
    kategoriSecimi.append(new Option(ad, ad));
  }
  kategoriSecimi.disabled = false;
}

async function urunleriYukle() {
  try {
    const yanit = await fetch("veri.json");
    if (!yanit.ok) {
      throw new Error(`Sunucu yanıtı: ${yanit.status} ${yanit.statusText}`);
    }
    tumUrunler = await yanit.json();
    kategorileriDoldur();
    urunleriGoster();
  } catch (hata) {
    // file:// ile açıldığında tarayıcı isteği engeller (Live Server ile açınız).
    durum.textContent = `Ürünler yüklenemedi. Sayfayı Live Server ile açtığınızdan emin olunuz. (${hata.message})`;
    durum.classList.add("hata");
  }
}

kategoriSecimi.addEventListener("change", urunleriGoster);
urunleriYukle();
