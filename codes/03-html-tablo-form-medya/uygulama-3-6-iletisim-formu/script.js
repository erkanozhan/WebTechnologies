// Tarayıcının yerleşik doğrulaması geçilirse "submit" olayı tetiklenir.
// Bu örnekte bir sunucu olmadığından gönderim durdurulur ve bilgi mesajı gösterilir.
const form = document.querySelector("form");
const durum = document.querySelector("#durum");

form.addEventListener("submit", (olay) => {
  olay.preventDefault();
  const ad = form.elements.adsoyad.value;
  durum.textContent = `Teşekkürler ${ad}. Form geçerli; gerçek bir uygulamada veriler HTTPS ile sunucuya gönderilir ve sunucuda yeniden doğrulanırdı.`;
});

form.addEventListener("reset", () => {
  durum.textContent = "";
});
