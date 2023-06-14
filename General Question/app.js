

// let questionBtn = document.querySelectorAll(".question-btn"); 
// let showText = document.querySelectorAll(".show-text");



// questionBtn.forEach(function(items){
    
//     items.addEventListener("click",function (target){
//         // first close all the button that are currently open 
//         questionBtn.forEach(function(close){
//             const parentBtn  = close.parentElement.parentElement.querySelector(".question-text") ; 
//             parentBtn.classList.remove("show-text");
//             buttonClose =   close.querySelectorAll("span") ; 
//             buttonClose[1].classList.add("minus-icon");
//             buttonClose[0].classList.remove("minus-icon");


//         })
//         // then open the button that was just click
//         const parentBtn  = target.currentTarget.parentElement.parentElement.querySelector(".question-text") ; 
//         parentBtn.classList.add("show-text");
//         icon =  target.currentTarget.querySelectorAll("span") ; 
//         icon[1].classList.toggle("minus-icon")
//         icon[0].classList.toggle("minus-icon")
//     })
// });




//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });


