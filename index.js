$(document).ready(function () {
    $(".tabrole").click(function () {
      // Remove 'active' class from all tabs and panels
      $(".tabrole").removeClass("active");
      $(".panel").removeClass("active");
  
      // Add 'active' class to the clicked tab
      $(this).addClass("active");
  
      // Get the corresponding panel ID and show it
      var panelId = $(this).attr("aria-controls");
      $("#" + panelId).addClass("active");
    });
  });

// window.onscroll = function() {
//     stickyHeader();
// };

// var header = document.getElementById("stickyHeader");
// var sticky = header.offsetTop;

// function stickyHeader() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const tabs = document.querySelectorAll('.tabrole');
//     const panels = document.querySelectorAll('.panel');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             // Remove 'active' class from all tabs and panels
//             tabs.forEach(t => t.classList.remove('active'));
//             panels.forEach(p => p.classList.remove('active'));

//             // // Add 'active' class to the clicked tab and its associated panel
//             // tab.classList.add('active');
//             // const panelId = tab.getAttribute('aria-controls');
//             // const panel = document.getElementById(panelId);
//             // panel.classList.add('active');
//         });
//     });
// });

// var customDateInput = document.getElementById('customDateInput');
    
//     // Set the default value or use a specific date
// customDateInput.value = moment().format('DD.MM.YYYY');


