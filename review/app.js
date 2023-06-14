
// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];


let  person_image  =  document.querySelector("#person-img");
let  person_name =  document.querySelector("#author");
let person_job  = document.querySelector("#job");
let person_text = document.querySelector("#info"); 
let btns  = document.querySelectorAll("button");
let current_person =  0  ; 
btns.forEach(function(btn ){
  btn.addEventListener("click",function(e){
    const styles = e.currentTarget.classList;
    
    if(styles[0] == "prev-btn")
    { 
      current_person-= 1 ; 
      if(current_person< 0 ){current_person=reviews.length-1 }
      person_image.src = reviews[current_person].img;
      person_name.innerHTML = reviews[current_person].name;
      person_job.innerHTML = reviews[current_person].job;
      person_text.innerHTML = reviews[current_person].text;
    }
    if(styles[0] == "next-btn")
    {
      current_person+= 1 ; 
      if(current_person >  reviews.length -1){current_person=0}
      person_image.src = reviews[current_person].img;
      person_name.innerHTML = reviews[current_person].name;
      person_job.innerHTML = reviews[current_person].job;
      person_text.innerHTML = reviews[current_person].text;
     
    }
    else 
    {
      current_person = Math.floor(Math.random()*reviews.length);
      person_image.src = reviews[current_person].img;
      person_name.innerHTML = reviews[current_person].name;
      person_job.innerHTML = reviews[current_person].job;
      person_text.innerHTML = reviews[current_person].text;
    }
    
});
});


