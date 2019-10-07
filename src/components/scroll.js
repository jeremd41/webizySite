const navLogo = document.getElementById("navLogo")
const menu = document.getElementById("menu")

  window.onscroll = function() {
    if (window.pageYOffset > 300) {
      navLogo.style.background = "#111"
      menu.style.background = "#111"
    } else {
      navLogo.style.background = "transparent"
      menu.style.background = "transparent"
    }
  })

