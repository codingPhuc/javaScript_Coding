

let buttonPush = document.querySelector(".sidebar-toggle");
let  sidebar = document.querySelector(".sidebar"); 
let buttonClose  = document.querySelector(".close-btn");

buttonPush.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar");
});

buttonClose.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar");
});
