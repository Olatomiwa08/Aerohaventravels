document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById("header")
  const menubar = document.getElementById("menubar")
  const menu = document.getElementById("menu")
  const placeholder = document.getElementById("placeholder");

  function toggleMenu(){
    header.classList.toggle("bg")
    menu.classList.toggle("show")
    if (menubar.classList.contains('fa-bars')) {
      menubar.classList.remove('fa-bars');
      menubar.classList.add('fa-xmark');
    } else {
      menubar.classList.remove('fa-xmark');
      menubar.classList.add('fa-bars');
    }
  }
  menubar.addEventListener('click', toggleMenu);

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition > placeholder.offsetTop) {
        header.classList.add("sticky");
      } else {
          header.classList.remove("sticky");
      }


      if (menu.classList.contains('show')) {
          toggleMenu();
      }
  });

  const headercolor = document.querySelector('header');
  const sections = document.querySelectorAll('section');
  const texts = headercolor.querySelectorAll('nav ul li a');
  const icon = document.getElementById('menubar');
  

  // function updateHeaderColor() {
  //   sections.forEach((section) => {
  //       const rect = section.getBoundingClientRect();
  //       const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

  //       if (isInView) {
  //           if (section.classList.contains('white-bg')) {
  //               headercolor.style.backgroundColor = 'transparent';
  //               // headercolor.style.color = '#485280';
  //               texts.forEach(text => {
  //                 text.style.color = '#485280';
                  
  //               });
  //               icon.style.color = '#485280'
  //           } else if (section.classList.contains('black-bg')) {
  //               headercolor.style.backgroundColor = 'transparent';
  //               texts.forEach(text => {
  //                 text.style.color = 'white';
                  
  //               });
  //               icon.style.color = 'white'
  //           }else{
  //             texts.forEach(text => {
  //               text.style.color = 'white';
                
  //             });
  //             icon.style.color = 'white'
  //           }
  //       }
  //   });
  // }

  // window.addEventListener('scroll', updateHeaderColor);
  // window.addEventListener('resize', updateHeaderColor);

  // updateHeaderColor();
});




document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabrole');
    const panels = document.querySelectorAll('.panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const panelId = tab.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            panel.classList.add('active');
        });
    });
});

// var customDateInput = document.getElementById('customDateInput');
    
//     // Set the default value or use a specific date
// customDateInput.value = moment().format('DD.MM.YYYY');





ScrollReveal().reveal('header', { delay: 100, origin: 'top',distance: '2000px',duration: 1600 });
ScrollReveal().reveal('.description', { delay: 300, origin: 'left',distance: '2000px',duration: 1600 });
ScrollReveal().reveal('.heroimage', { delay: 400, origin: 'right',distance: '2000px',duration: 1600 });
ScrollReveal().reveal('.more', { delay: 500, origin: 'left',distance: '2000px',duration: 1600 });
// ScrollReveal().reveal('.heroimage', {
//   rotate: {
//       x: 20,
//       z: 20
//   }
// });