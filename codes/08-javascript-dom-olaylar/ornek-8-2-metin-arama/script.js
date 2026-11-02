const form = document.getElementById("aramaFormu");
const aramaKutusu = document.getElementById("aramaKelimesi");
const temizleDugmesi = document.getElementById("temizleDugmesi");
const sonucBilgisi = document.getElementById("sonucBilgisi");
const icerik = document.getElementById("icerik");

// Özgün metin yalnızca düz metin olarak saklanır.
const ozgunMetin = icerik.textContent;

// Kullanıcı metnindeki düzenli ifade özel karakterlerini ( . * + ? ( ) [ ] vb.) kaçırır.
function regexKacir(metin) {
  return metin.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function araVeVurgula() {
  const aranan = aramaKutusu.value.trim();
  icerik.textContent = ozgunMetin; // önceki vurguları temizle
  sonucBilgisi.classList.remove("hata");

  if (aranan === "") {
    sonucBilgisi.textContent = "Lütfen bir kelime giriniz.";
    sonucBilgisi.classList.add("hata");
    return;
  }

  const ifade = new RegExp(regexKacir(aranan), "gi");
  const eslesmeler = [...ozgunMetin.matchAll(ifade)];

  if (eslesmeler.length === 0) {
    sonucBilgisi.textContent = `"${aranan}" bulunamadı.`;
    sonucBilgisi.classList.add("hata");
    return;
  }

  // Metin, düz metin parçaları ve <mark> öğeleriyle yeniden kurulur.
  // innerHTML kullanılmadığı için kullanıcının yazdığı metin asla HTML olarak yorumlanmaz.
  const parca = document.createDocumentFragment();
  let sonIndeks = 0;
  for (const eslesme of eslesmeler) {
    parca.append(ozgunMetin.slice(sonIndeks, eslesme.index));
    const vurgu = document.createElement("mark");
    vurgu.textContent = eslesme[0];
    parca.append(vurgu);
    sonIndeks = eslesme.index + eslesme[0].length;
  }
  parca.append(ozgunMetin.slice(sonIndeks));
  icerik.replaceChildren(parca);

  sonucBilgisi.textContent = `"${aranan}" ${eslesmeler.length} yerde bulundu.`;
}

form.addEventListener("submit", (olay) => {
  olay.preventDefault();
  araVeVurgula();
});

temizleDugmesi.addEventListener("click", () => {
  icerik.textContent = ozgunMetin;
  aramaKutusu.value = "";
  sonucBilgisi.textContent = "";
  aramaKutusu.focus();
});

// Sayfa açıldığında kutudaki örnek kelimeyle bir kez arama yapılır.
araVeVurgula();
