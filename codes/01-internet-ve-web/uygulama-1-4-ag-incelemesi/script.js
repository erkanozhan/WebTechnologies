// Ek istekleri fetch ile gönderir ve sunucunun döndürdüğü durum kodunu tabloya yazar.
const kayitlar = document.querySelector("#kayitlar");
const uyari = document.querySelector("#uyari");

const anlamlar = {
  200: "OK: kaynak bulundu ve gönderildi.",
  304: "Not Modified: tarayıcı önbellekteki kopyayı kullanabilir.",
  404: "Not Found: sunucuda böyle bir kaynak yok.",
};

function kayitEkle(adres, kod, anlam, basarili) {
  const tr = document.createElement("tr");
  const adresHucresi = document.createElement("td");
  const kodHucresi = document.createElement("td");
  const anlamHucresi = document.createElement("td");
  adresHucresi.textContent = adres;
  kodHucresi.textContent = kod;
  kodHucresi.className = basarili ? "basarili" : "hatali";
  anlamHucresi.textContent = anlam;
  tr.append(adresHucresi, kodHucresi, anlamHucresi);
  kayitlar.append(tr);
}

async function istekGonder(adres) {
  try {
    const yanit = await fetch(adres, { cache: "no-store" });
    const anlam = anlamlar[yanit.status] ?? yanit.statusText;
    kayitEkle(adres, yanit.status, anlam, yanit.ok);
  } catch {
    kayitEkle(adres, "-", "İstek gönderilemedi (sayfa file:// ile açılmış olabilir).", false);
  }
}

// file:// ile açılan sayfada HTTP olmadığı için durum kodu da yoktur.
if (location.protocol === "file:") {
  uyari.hidden = false;
  uyari.textContent = "Sayfa file:// ile açıldı. Durum kodlarını görmek için VS Code'da sağ tık → Open with Live Server ile açınız.";
} else {
  // Sunucu üzerinden açıldıysa iki ek istek sayfa yüklenince bir kez gönderilir.
  istekGonder("ek-bilgi.html").then(() => istekGonder("olmayan-sayfa.html"));
}

for (const dugme of document.querySelectorAll("button[data-adres]")) {
  dugme.addEventListener("click", () => istekGonder(dugme.dataset.adres));
}
