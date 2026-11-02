// Bir <dl> listesini [etiket, değer] çiftleriyle doldurur (innerHTML kullanılmaz).
function listeyiDoldur(liste, ciftler) {
  const satirlar = [];
  for (const [etiket, deger] of ciftler) {
    const dt = document.createElement("dt");
    dt.textContent = etiket;
    const dd = document.createElement("dd");
    dd.textContent = deger;
    satirlar.push(dt, dd);
  }
  liste.replaceChildren(...satirlar);
}

function navigatorBilgisiniGoster() {
  listeyiDoldur(document.getElementById("navigatorBilgisi"), [
    ["Dil", navigator.language],
    ["Tercih edilen diller", navigator.languages.join(", ")],
    ["Bağlantı", navigator.onLine ? "Çevrimiçi" : "Çevrimdışı"],
    ["Çerezler", navigator.cookieEnabled ? "Etkin" : "Kapalı"]
  ]);
}

function pencereBilgisiniGoster() {
  listeyiDoldur(document.getElementById("pencereBilgisi"), [
    ["Görüntü alanı", `${window.innerWidth} × ${window.innerHeight} px`],
    ["Ekran", `${screen.width} × ${screen.height} px`],
    ["Piksel oranı", String(window.devicePixelRatio)],
    ["Renk tercihi", matchMedia("(prefers-color-scheme: dark)").matches ? "Koyu" : "Açık"]
  ]);
}

function konumBilgisiniGoster() {
  listeyiDoldur(document.getElementById("konumBilgisi"), [
    ["Protokol", location.protocol],
    ["Sunucu", location.hostname || "(yerel dosya)"],
    ["Yol", location.pathname.split("/").slice(-2).join("/")],
    ["Geçmişteki kayıt sayısı", String(history.length)]
  ]);
}

// Tarayıcı adına değil, özelliğin varlığına bakılır (özellik tespiti).
function ozellikleriGoster() {
  const testler = [
    ["Konum (geolocation)", "geolocation" in navigator],
    ["Pano (clipboard)", "clipboard" in navigator],
    ["Yerel depolama (localStorage)", "localStorage" in window],
    ["fetch", "fetch" in window],
    ["Paylaşım (navigator.share)", "share" in navigator]
  ];
  const liste = document.getElementById("ozellikler");
  liste.replaceChildren();
  for (const [ad, varMi] of testler) {
    const li = document.createElement("li");
    li.textContent = `${ad}: ${varMi ? "destekleniyor" : "desteklenmiyor"}`;
    li.className = varMi ? "var" : "yok";
    liste.append(li);
  }
}

window.addEventListener("resize", pencereBilgisiniGoster);
window.addEventListener("online", navigatorBilgisiniGoster);
window.addEventListener("offline", navigatorBilgisiniGoster);

document.getElementById("geriDugmesi").addEventListener("click", () => history.back());
document.getElementById("yenileDugmesi").addEventListener("click", () => location.reload());

navigatorBilgisiniGoster();
pencereBilgisiniGoster();
konumBilgisiniGoster();
ozellikleriGoster();
