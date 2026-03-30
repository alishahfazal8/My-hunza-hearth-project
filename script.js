document.addEventListener("DOMContentLoaded", function () {
  var navbarCollapse = document.querySelector(".navbar-collapse");
  var navbarToggler = document.querySelector(".navbar-toggler");

  if (!navbarCollapse || !navbarToggler || typeof bootstrap === "undefined") {
    return;
  }

  var collapseInstance = bootstrap.Collapse.getOrCreateInstance(navbarCollapse, {
    toggle: false
  });

  navbarCollapse.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
        collapseInstance.hide();
      }
    });
  });
});
