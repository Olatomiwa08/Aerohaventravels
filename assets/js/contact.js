const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
e.preventDefault();
const formData = new FormData(form);
const object = Object.fromEntries(formData);
const json = JSON.stringify(object);
result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

$(document).ready(function(){
  $('#imageCarousel').slick({
      slidesToShow: 3,     // Set the number of slides to show
      slidesToScroll: 1,   // Set the number of slides to scroll
      autoplay: true,
      // dots: true,
      autoplaySpeed: 2000,
      dots: false,
      infinite: true,
      // speed: 1000,
      arrows: true,
      loop: true,
      adaptiveHeight: true,
      responsive: [
          {
              breakpoint: 768, // Define a breakpoint for screens smaller than 768px
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480, // Define a breakpoint for screens smaller than 480px
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
        
  
  });
});



// const carousel = document.querySelector('.carousel');
// const slidesContainer = document.querySelector('.slides-container');
// const slides = document.querySelectorAll('.slide');
// const indicatorsContainer = document.querySelector('.indicators');

// let slideWidth = slides[0].offsetWidth;
// let currentIndex = 0;
// const slideCount = slides.length;
// const slidesPerPage = 3; // Number of slides to be shown at once

// // Duplicate slides
// for (let i = 0; i < slidesPerPage; i++) {
//   const cloneFirst = slides[i].cloneNode(true);
//   const cloneLast = slides[slideCount - 1 - i].cloneNode(true);
//   slidesContainer.appendChild(cloneFirst);
//   slidesContainer.insertBefore(cloneLast, slidesContainer.firstChild);
// }

// const totalSlides = slides.length;

// function goToSlide(index) {
//   if (index < 0) {
//     currentIndex = totalSlides - slidesPerPage;
//   } else if (index >= totalSlides) {
//     currentIndex = 0;
//   } else {
//     currentIndex = index;
//   }
//   slidesContainer.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

//   // Update indicators
//   updateIndicators();
// }

// function nextSlide() {
//   goToSlide(currentIndex + 1);
// }

// function prevSlide() {
//   goToSlide(currentIndex - 1);
// }

// function createIndicators() {
//   for (let i = 0; i < slideCount; i++) {
//     const indicator = document.createElement('div');
//     indicator.classList.add('indicator');
//     indicatorsContainer.appendChild(indicator);
//     indicator.addEventListener('click', () => {
//       goToSlide(i);
//     });
//   }
//   updateIndicators();
// }

// function updateIndicators() {
//   const indicators = document.querySelectorAll('.indicator');
//   indicators.forEach((indicator, index) => {
//     if (index === currentIndex % slideCount) {
//       indicator.classList.add('active');
//     } else {
//       indicator.classList.remove('active');
//     }
//   });
// }

// createIndicators();
// setInterval(nextSlide, 3000); 
