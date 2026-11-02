// Sayfanın hangi adresle açıldığını location nesnesinden okur.
const alanlar = {
  "tam-adres": location.href,
  sema: location.protocol,
  "ana-makine": location.hostname || "(yok)",
  port: location.port || "(yok / varsayılan)",
  yol: location.pathname,
};

for (const [kimlik, deger] of Object.entries(alanlar)) {
  document.getElementById(kimlik).textContent = deger;
}

const yorum = document.querySelector("#yorum");

if (location.protocol === "file:") {
  yorum.textContent = "Sayfa doğrudan diskten (file://) açıldı: arada sunucu ve HTTP yok. Tarayıcı dosyayı kendisi okudu.";
} else {
  yorum.classList.add("sunucu");
  yorum.textContent = `Sayfa bir web sunucusundan (${location.protocol}//${location.host}) HTTP ile istendi. Dosyayı kaydettiğinizde Live Server sayfayı kendiliğinden yeniler.`;
}
