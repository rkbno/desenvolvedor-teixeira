// Atualiza o ano do rodapé automaticamente
document.getElementById("ano").textContent = new Date().getFullYear();
 
// Registra o clique no WhatsApp para o Google Ads
document.querySelectorAll(".js-whatsapp").forEach(function (link) {
  link.addEventListener("click", function () {
    if (typeof gtag === "function") {
      gtag('event', 'conversion', {'send_to': 'AW-18492104766/-5VXCIDGr48dEL7A3PFE'});
    }
  });
});