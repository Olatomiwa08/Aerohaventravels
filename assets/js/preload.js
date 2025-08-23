// window.addEventListener("load", () => {
//     const preloader = document.getElementById("preloader");
    
//     // Prolong loading with 2s delay
//     setTimeout(() => {
//     preloader.classList.add("hidden");
//     }, 2000);
// });



//  window.addEventListener("load", () => {
//       const preloader = document.getElementById("preloader");
//       const container = document.querySelector(".container");
//       const body = document.body;

//       // Delay before unlocking page
//       setTimeout(() => {
//         preloader.classList.add("hidden");   // fade out preloader
//         container.classList.add("visible");  // reveal content
//         body.classList.remove("preload-active"); // unlock scroll/clicks
//       }, 2000);
//     });

//     // Example script that only runs AFTER preload unlock
//     window.addEventListener("preloadDone", () => {
//       console.log("Now scripts & animations can start!");
//     });