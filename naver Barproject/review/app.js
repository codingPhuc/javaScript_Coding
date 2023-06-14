
// local reviews data


const navToggle  = document.querySelector(".nav-toggle");
const links = document.querySelector(".links"); 

navToggle.addEventListener("click",function(){
  links.classList.toggle("show-links");  
});

/*toggle is a way to add element if the element is not in the link and to remove element if it is in the link 
this code is used to programe the nav bar function where if you click the button it will out put the link bar 
this is created by the show-link function where it will add the show link if the button is click and then remove it when the button is not*/ 



