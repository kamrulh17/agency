
/* ===== initialize aos ===== */
AOS.init();

/* ========== sticky navbar ========== */

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

/* ===== mobile menu ===== */

$(".toggler-btn").click(function(){
    $(".nav").addClass("open-nav");
  });
  $(".cross").click(function(){
    $(".nav").removeClass("open-nav");
  });

/* ===== owl-carousel slider ===== */
$('.owl-carousel').owlCarousel({
    // animateOut:'fade-down',
    // animateIn: 'fade-up',
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    center:true,
    autoplayTimeout:5000,
    smartSpeed:1000,
    dotsSpeed:1000,
    responsive:{
        0:{
            items:1
        },
    }
})

/* ===== counter-up ===== */
$('.counter').counterUp({
    delay: 50,
    time: 3000,
});

/* ===== scroll to top ===== */
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* ===== scrolled progress bar ===== */
const skillsSection = document.getElementById('skill-content') ;
const skillBars = document.querySelectorAll('.skill-bar') ;

function showSkill(){
  skillBars.forEach(skillBar => {
    const value = skillBar.dataset.skill;
    skillBar.style.width = `${value}%`;
  });
}
function hideSkill(){
  skillBars.forEach(skillBar => {
    skillBar.style.window = 0;
  });
}

window.addEventListener('scroll',() => {
  const sectionPos = skillsSection.getBoundingClientRect().top ;
  const screenPos = window.innerHeight ;

  if(sectionPos < screenPos){
    showSkill();
  }else{
    hideSkill();
  }

});