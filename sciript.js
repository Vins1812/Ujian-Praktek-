document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // scroll ke bawah → navbar naik (hilang)
      navbar.style.top = "-100px";
    } else {
      // scroll ke atas → navbar turun (muncul)
      navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });
});
