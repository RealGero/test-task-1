const parentNav = document.querySelectorAll(".parent-nav");

if(parentNav){
    parentNav.forEach(element => {
        const childNav = element.querySelector(".children-nav");
        const svg = element.querySelector('svg');
        element.onclick = () => {
            childNav.classList.toggle('hide');
            svg.classList.toggle('rotate');
        }
    });
}

const menu = document.querySelector('nav button');
const mobileNav = document.querySelector('#list-mobile');

if(menu){
    menu.onclick = () => {
        if(mobileNav){
            mobileNav.classList.toggle('hide-mobile');
        }
    }
}


function handleScreenSizeChange() {
    if (window.innerWidth >= 1280) {
        console.log('tr')
      document.getElementById('list-mobile').classList.add('hide-mobile');
    } 
  }
  
  // Create a media query that matches when the screen width is 600px or less
  
  // Call the handler to perform initial check
  handleScreenSizeChange();
  window.addEventListener('resize', handleScreenSizeChange);