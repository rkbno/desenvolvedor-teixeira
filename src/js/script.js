// Atualiza o ano do rodapé automaticamente
document.getElementById("ano").textContent = new Date().getFullYear();
 
// Registra o clique no WhatsApp se a tag do Google estiver instalada (senão, não faz nada)
document.querySelectorAll(".js-whatsapp").forEach(function (link) {
  link.addEventListener("click", function () {
    if (typeof gtag === "function") gtag("event", "whatsapp_click");
  });
});