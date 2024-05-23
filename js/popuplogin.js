document.addEventListener("DOMContentLoaded", function () {
  var loginBtn = document.getElementById("loginBtn");
  var modal = document.getElementById("loginModal");

  // Pastikan elemen loginBtn dan modal ditemukan sebelum menetapkan event listener
  if (loginBtn && modal) {
    loginBtn.onclick = function () {
      modal.style.display = "block";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    var closeBtn = document.getElementsByClassName("close")[0];
    if (closeBtn) {
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };
    }
  }
});
