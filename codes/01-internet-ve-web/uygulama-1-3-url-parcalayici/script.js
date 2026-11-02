// URL Parçalayıcı: tarayıcının yerleşik URL nesnesini kullanır.
const form = document.querySelector("#url-formu");
const girdi = document.querySelector("#url-girdisi");
const hataAlani = document.querySelector("#hata");
const sonucGovdesi = document.querySelector("#sonuclar");
const parametreListesi = document.querySelector("#parametreler");

// Şemaya göre varsayılan bağlantı noktaları
const varsayilanPortlar = {
  "http:": "80",
  "https:": "443",
  "ftp:": "21",
};

function satirEkle(bilesen, deger, aciklama) {
  const tr = document.createElement("tr");
  for (const metin of [bilesen, deger, aciklama]) {
    const td = document.createElement("td");
    td.textContent = metin; // kullanıcı verisi yalnızca textContent ile yazılır
    tr.append(td);
  }
  sonucGovdesi.append(tr);
}

function parcala(adres) {
  sonucGovdesi.replaceChildren();
  parametreListesi.replaceChildren();
  hataAlani.textContent = "";

  let url;
  try {
    url = new URL(adres);
  } catch {
    hataAlani.textContent = "Geçerli bir mutlak URL değil. Şemayla başlayınız (ör. https://).";
    return;
  }

  // Varsayılan port yazılmış olsa bile URL nesnesi onu boş dizge olarak verir.
  const port = url.port || `(boş: varsayılan ${varsayilanPortlar[url.protocol] ?? "-"} kullanılır)`;

  satirEkle("Şema (protocol)", url.protocol, "Hangi protokolle erişileceğini belirtir.");
  satirEkle("Ana makine (hostname)", url.hostname, "DNS ile IP adresine çevrilen ad.");
  satirEkle("Bağlantı noktası (port)", port, "Sunucudaki hizmetin numarası.");
  satirEkle("Yol (pathname)", url.pathname, "Sunucudaki kaynağın konumu.");
  satirEkle("Sorgu (search)", url.search || "(yok)", "? ile başlayan anahtar=değer çiftleri.");
  satirEkle("Parça (hash)", url.hash || "(yok)", "Sunucuya gönderilmez; sayfa içi konum.");
  satirEkle("Köken (origin)", url.origin, "Şema + ana makine + port; güvenlik sınırıdır.");

  if (url.searchParams.size === 0) {
    const li = document.createElement("li");
    li.textContent = "Sorgu parametresi yok.";
    parametreListesi.append(li);
  }
  for (const [anahtar, deger] of url.searchParams) {
    const li = document.createElement("li");
    li.textContent = `${anahtar} = ${deger}`;
    parametreListesi.append(li);
  }
}

form.addEventListener("submit", (olay) => {
  olay.preventDefault();
  parcala(girdi.value.trim());
});

// Sayfa açıldığında örnek adres parçalanır.
parcala(girdi.value.trim());
