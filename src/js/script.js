// Atualiza o ano do rodapé automaticamente.
var ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();

// Registra somente cliques nos links de WhatsApp, incluindo o botão da demonstração.
document.querySelectorAll('a[href]').forEach(function (link) {
  var url;
  try {
    url = new URL(link.href, window.location.href);
  } catch (error) {
    return;
  }
  if (url.hostname !== "wa.me" && url.hostname !== "api.whatsapp.com") return;
  link.addEventListener("click", function () {
    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-18492104766/-5VXCIDGr48dEL7A3PFE"
      });
    }
  });
});
