document.getElementById("currentYear").textContent = new Date().getFullYear();

const navigation = document.getElementById("mainNavigation");

navigation.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      bootstrap.Collapse.getOrCreateInstance(navigation).hide();
    }
  });
});
