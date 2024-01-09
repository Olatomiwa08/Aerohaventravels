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

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabrole');
    const panels = document.querySelectorAll('.panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // // Add 'active' class to the clicked tab and its associated panel
            // tab.classList.add('active');
            // const panelId = tab.getAttribute('aria-controls');
            // const panel = document.getElementById(panelId);
            // panel.classList.add('active');
        });
    });
});

// var customDateInput = document.getElementById('customDateInput');
    
//     // Set the default value or use a specific date
// customDateInput.value = moment().format('DD.MM.YYYY');
document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("textContainer");
    const word1 = document.getElementById("word1");
    const word2 = document.getElementById("word2");

    setTimeout(() => {
        toggleWords();
    }, 2000);

    function toggleWords() {
        word1.classList.toggle("hidden");
        word2.classList.toggle("hidden");

        setTimeout(() => {
            toggleWords();
        }, 2000);
    }
});
