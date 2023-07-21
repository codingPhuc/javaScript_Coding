//list out all the thing that need to be done 
// 1. when you click on a button it need to have a white blackgound 
// 2. when you click on a button it id name need to the same as the id of the form 
// first we need to get all the button element 
// loop thought the button element with foreach 
// assign a click function to each button when the click function is assign we need to 


// const buttonsElement = document.querySelectorAll(".tab-btn"); 
// buttonsElement.forEach(function(button){

//     button.addEventListener("click" , function(e){
//         // function to close all other element 
        
//         buttonsElement.forEach(element => {
            
//             if(element !=e.currentTarget )
//             {
//                 console.log(element);
//                 element.classList.remove("active");
//                 textId =  element.getAttribute("data-id") ; 
//                 targetElement  = document.getElementById(textId) ; 
//                 targetElement.classList.remove("active");
//             }
            
//         });

//         //function to target all the element in the list 
//         e.target.classList.add("active");
//         textId =  e.target.getAttribute("data-id") ; 
//         targetElement  = document.getElementById(textId) ; 
//         targetElement.classList.add("active");

//     })
// }) 

const btns  = document.querySelectorAll(".tab-btn");
const  about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click",function(e)
{
    // dataset element  will only get a object with id attribute of data-id 
    const  id = e.target.dataset.id  ;
    if(id) // check if the id exits 
    {
        btns.forEach(function(btn){
            btn.classList.remove("active");
        }); // remove all the other click button 
        e.target.classList.add("active"); // add the button that are ative 
        articles.forEach(function(article){
            article.classList.remove("active"); 

        }); 
        article = document.getElementById(id);// target the article that was click 
        article.classList.add("active");
    }
});

