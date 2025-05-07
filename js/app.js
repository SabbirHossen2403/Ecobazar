
$(document).ready(function(){
    $('.bannerslider').slick({
      autoplay :true ,
      autoplaySpeed: 2000,
      prevArrow: '#banner .leftArrow',
      nextArrow: '#banner .rightArrow',
      dots:true,

      
    });
  });


let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('Hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

const countDownDate = new Date($('.timer').attr('data-date')).getTime();

const timer = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  // Calculate time units
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Pad with leading zeros (e.g., "05" instead of "5")
  daysElement.innerHTML = days.toString().padStart(2, '0');
  hoursElement.innerHTML = hours.toString().padStart(2, '0');
  minutesElement.innerHTML = minutes.toString().padStart(2, '0');
  secondsElement.innerHTML = seconds.toString().padStart(2, '0');

  // Stop timer when countdown ends
  if (distance < 0) {
    clearInterval(timer);
    daysElement.innerHTML = "00";
    hoursElement.innerHTML = "00";
    minutesElement.innerHTML = "00";
    secondsElement.innerHTML = "00";
  }
}, 1000); // Update every second


$(document).ready(function() {
  $('#featuredproducts .featureSlider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $('#featuredproducts .leftArrow'),
    nextArrow: $('#featuredproducts .rightArrow'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2, 
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ]
  });
});

$('#review .reviewcardsslider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '#review .leftArrow',
  nextArrow: '#review .rightArrow',
  responsive: [
   
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    
  ]
});

new VenoBox({
  selector: '.venobox',
});