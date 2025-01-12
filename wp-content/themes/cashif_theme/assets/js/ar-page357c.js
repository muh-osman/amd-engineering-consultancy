// AOS animation
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    document.body.style.overflowY = "auto";

    var loadingElement = document.getElementById("loading");
    if (loadingElement) {
      setTimeout(function () {
        loadingElement.style.display = "none";
      }, 5000);
    }
  });

  AOS.init({
    once: true,
  });
});

// Hide WhatsApp Btn
const whatsappBtn = document.getElementById("whatsapp-btn");
// Hide Call Btn
const callBtn = document.getElementById("call-btn");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY || window.pageYOffset;
  let documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollPosition >= documentHeight) {
    whatsappBtn.classList.add("hide-btn");
    callBtn.classList.add("hide-btn");
  } else {
    whatsappBtn.classList.remove("hide-btn");
    callBtn.classList.remove("hide-btn");
  }
});
