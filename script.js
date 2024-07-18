let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(sec => {
        let top = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        }
    });
};


document.addEventListener('DOMContentLoaded', function() {
    let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById('navbar');
  
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
      if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
      } else {
        navbar.classList.add('navbar-hidden');
      }
      prevScrollPos = currentScrollPos;
    }
  });


  function toggleMenu() {
    var menuItems = document.getElementById("menu-items");
    menuItems.style.display === "block" ? menuItems.style.display = "none" : menuItems.style.display = "block";
  }
  
  

