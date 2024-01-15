const scrollButton = document.querySelector(".scroll-top");

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// Scroll top Button Events
if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}



toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
